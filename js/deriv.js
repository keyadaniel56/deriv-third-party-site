/* =========================================================================
 * DerivClient — Deriv API client (new API, developers.deriv.com)
 * -------------------------------------------------------------------------
 * Reference: https://developers.deriv.com
 *
 * Two channels:
 *   1. Public WebSocket  — wss://api.derivws.com/trading/v1/options/ws/public
 *      Real-time public market data (active_symbols, ticks, ticks_history,
 *      proposal) with NO authentication.
 *   2. Authenticated WebSocket — obtained from the REST OTP endpoint
 *      POST /trading/v1/options/accounts/{accountId}/otp
 *      Scoped to the user's account; used for balance + buy. Requires the
 *      user's Deriv API token (PAT) and your registered Deriv-App-ID.
 * =========================================================================
 */
(function (global) {
    'use strict';

    const cfg = function (key, fallback) {
        return window.SITE_CONFIG && Object.prototype.hasOwnProperty.call(window.SITE_CONFIG, key)
            ? window.SITE_CONFIG[key]
            : fallback;
    };

    class DerivClient {
        constructor(appId) {
            this.appId = appId || cfg('appId', '1089');
            this.publicEndpoint = cfg('publicWsEndpoint', 'wss://api.derivws.com/trading/v1/options/ws/public');
            this.restBase = cfg('restBaseUrl', 'https://api.derivws.com');
            this.lang = cfg('lang', 'EN');

            this.ws = null; // public data channel
            this.authWs = null; // authenticated trading channel

            this.reqId = 0;
            this.pending = new Map(); // req_id -> { resolve, reject, timer }
            this.keepAliveId = null;

            this.connected = false;
            this.authConnected = false;
            this.account = null; // { balance, currency, loginid }
            this.token = null;

            this.onStatus = function () {};
            this.onTick = function () {};
            this.onProposal = function () {};
            this.onBalance = function () {};
        }

        _openSocket(url) {
            return new Promise((resolve, reject) => {
                const ws = new WebSocket(url);
                ws.onopen = () => resolve(ws);
                ws.onerror = (e) => reject(e && e.error ? e.error : new Error('WebSocket connection failed'));
            });
        }

        /* ---- Public channel ---- */

        async connect() {
            if (this.ws && this.ws.readyState === WebSocket.OPEN) return this;
            const ws = await this._openSocket(this.publicEndpoint);
            this.ws = ws;
            this.connected = true;
            ws.onmessage = (e) => this._onMessage(e.data, ws);
            ws.onclose = () => {
                this.connected = false;
                this.onStatus({ type: 'close' });
            };
            this.startKeepAlive();
            this.onStatus({ type: 'open' });
            return this;
        }

        close() {
            this.stopKeepAlive();
            if (this.ws) { try { this.ws.close(); } catch (e) {} this.ws = null; }
            if (this.authWs) { try { this.authWs.close(); } catch (e) {} this.authWs = null; }
        }

        send(data, timeoutMs) {
            return this._send(this.ws, data, timeoutMs || 15000);
        }

        _send(ws, data, timeoutMs) {
            if (!ws || ws.readyState !== WebSocket.OPEN) {
                return Promise.reject(new Error('Not connected to Deriv API'));
            }
            const reqId = ++this.reqId;
            const payload = Object.assign({}, data, { req_id: reqId });

            return new Promise((resolve, reject) => {
                const timer = setTimeout(() => {
                    if (this.pending.has(reqId)) {
                        this.pending.delete(reqId);
                        reject(new Error('Request timed out'));
                    }
                }, timeoutMs);
                this.pending.set(reqId, { resolve, reject, timer });
                try {
                    ws.send(JSON.stringify(payload));
                } catch (err) {
                    this.pending.delete(reqId);
                    clearTimeout(timer);
                    reject(err);
                }
            });
        }

        _onMessage(raw, fromWs) {
            let data;
            try {
                data = JSON.parse(raw);
            } catch (e) {
                return;
            }
            const reqId = data.req_id;
            if (reqId && this.pending.has(reqId)) {
                const p = this.pending.get(reqId);
                this.pending.delete(reqId);
                clearTimeout(p.timer);
                if (data.error) {
                    const err = new Error(data.error.message || 'Deriv API error');
                    err.code = data.error.code;
                    err.details = data.error;
                    p.reject(err);
                } else {
                    p.resolve(data);
                }
            }

            if (data.msg_type === 'tick') this.onTick(data.tick);
            if (data.msg_type === 'proposal') this.onProposal(data.proposal, data.subscription && data.subscription.id);
            if (data.msg_type === 'balance') {
                this.account = data.balance;
                this.onBalance(data.balance);
            }
        }

        ping() {
            if (this.connected && this.ws && this.ws.readyState === WebSocket.OPEN) {
                this.ws.send(JSON.stringify({ ping: 1 }));
            }
            if (this.authConnected && this.authWs && this.authWs.readyState === WebSocket.OPEN) {
                this.authWs.send(JSON.stringify({ ping: 1 }));
            }
        }

        startKeepAlive() {
            this.stopKeepAlive();
            this.keepAliveId = setInterval(() => this.ping(), cfg('keepAliveMs', 30000));
        }

        stopKeepAlive() {
            if (this.keepAliveId) {
                clearInterval(this.keepAliveId);
                this.keepAliveId = null;
            }
        }

        /* ---- Market data (public, no auth) ---- */

        getActiveSymbols() {
            return this.send({ active_symbols: 'brief' });
        }

        subscribeTicks(symbol) {
            return this.send({ ticks: symbol, subscribe: 1 }, 20000);
        }

        getTicksHistory(symbol, count) {
            return this.send({
                ticks_history: symbol,
                adjust_start_time: 1,
                count: count || 120,
                end: 'latest',
                start: 1,
                style: 'ticks',
            });
        }

        subscribeProposal(params) {
            return this.send(Object.assign({ proposal: 1, subscribe: 1 }, params), 20000);
        }

        forget(subscriptionId) {
            return this.send({ forget: subscriptionId });
        }

        /* ---- REST (authenticated, used to open the trading channel) ---- */

        async _rest(path, method, body) {
            let res;
            try {
                res = await fetch(this.restBase + path, {
                    method: method || 'GET',
                    headers: {
                        Authorization: 'Bearer ' + this.token,
                        'Deriv-App-ID': String(this.appId),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                });
            } catch (e) {
                throw new Error('Network error reaching the Deriv API.');
            }
            let json = {};
            try {
                json = await res.json();
            } catch (e) {
                /* noop */
            }
            if (!res.ok) {
                const msg =
                    (json.errors && json.errors[0] && json.errors[0].message) ||
                    'HTTP ' + res.status;
                const err = new Error(msg);
                err.status = res.status;
                err.body = json;
                throw err;
            }
            return json;
        }

        getAccounts() {
            return this._rest('/trading/v1/options/accounts');
        }

        getOtp(accountId) {
            return this._rest('/trading/v1/options/accounts/' + encodeURIComponent(accountId) + '/otp', 'POST');
        }

        /* ---- Authenticated trading channel ---- */

        async connectAuthenticated(token) {
            this.token = token;

            const accountsRes = await this.getAccounts();
            const list = Array.isArray(accountsRes.data)
                ? accountsRes.data
                : Array.isArray(accountsRes.accounts)
                ? accountsRes.accounts
                : Array.isArray(accountsRes)
                ? accountsRes
                : [];
            const account = list.find((a) => a.account_id || a.id || a.accountId);
            if (!account) {
                throw new Error('No Options account found for this token. Create a demo account first.');
            }
            const accountId = account.account_id || account.id || account.accountId;

            const otp = await this.getOtp(accountId);
            const url = otp.data && (otp.data.url || otp.data.ws_url);
            if (!url) {
                throw new Error('Could not obtain an authenticated WebSocket URL (OTP).');
            }

            this.authWs = await this._openSocket(url);
            this.authWs.onmessage = (e) => this._onMessage(e.data, this.authWs);
            this.authWs.onclose = () => {
                this.authConnected = false;
                this.onStatus({ type: 'auth_close' });
            };
            this.authConnected = true;

            const bal = await this.sendAuth({ balance: 1 });
            this.account = bal.balance;
            this.onBalance(bal.balance);
            return this.account;
        }

        sendAuth(data, timeoutMs) {
            return this._send(this.authWs, data, timeoutMs || 15000);
        }

        buy(proposalId, price) {
            return this.sendAuth({ buy: proposalId, price });
        }

        getBalance() {
            return this.sendAuth({ balance: 1 });
        }
    }

    global.DerivClient = DerivClient;
})(window);
