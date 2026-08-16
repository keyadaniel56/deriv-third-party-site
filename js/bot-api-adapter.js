/**
 * BotAPIAdapter — bridges the Deriv Bot trade engine to the existing DerivClient.
 *
 * The trade engine calls `api_base.api.send(data)` for all API requests.
 * This adapter intercepts those calls and routes them through the existing
 * DerivClient instance which already manages WebSocket connections.
 */
(function () {
    'use strict';

    class BotAPIAdapter {
        constructor(derivClient) {
            this.client = derivClient;
            this.token = null;
            this.account_info = {};
            this.pip_sizes = {};
            this.subscriptions = new Map();
            this._subId = 0;

            this._api = {
                send: (data) => this._route(data),
                forget: (id) => this._route({ forget: id }),
                forgetAll: (type) => this._route({ forget_all: type }),
                onMessage: () => ({
                    subscribe: (callback) => {
                        this._messageCallback = callback;
                        return { unsubscribe: () => { this._messageCallback = null; } };
                    },
                }),
                connection: { readyState: 1 },
            };
        }

        get api() {
            return this._api;
        }

        setToken(token, accountId) {
            this.token = token;
            if (accountId) {
                this.account_info.loginid = accountId;
            }
        }

        setAccountInfo(info) {
            this.account_info = { ...this.account_info, ...info };
        }

        toggleRunButton() {}

        pushSubscription(sub) {}

        createNewInstance() {}

        async _route(data) {
            if (!data) return {};
            try {
                if (data.authorize) {
                    return await this.client.sendAuth({ authorize: data.authorize });
                }
                if (data.balance) {
                    const res = await this.client.sendAuth({ balance: 1 });
                    return res;
                }
                if (data.buy) {
                    const res = await this.client.sendAuth({ buy: data.buy, price: data.price });
                    return res;
                }
                if (data.sell !== undefined) {
                    return await this.client.sendAuth({ sell: data.sell });
                }
                if (data.proposal_open_contract) {
                    return await this.client.sendAuth({ proposal_open_contract: 1, contract_id: data.contract_id });
                }
                if (data.forget_all) {
                    return { forget_all: 1 };
                }
                if (data.forget) {
                    try {
                        return await this.client.send({ forget: data.forget });
                    } catch (e) {
                        return {};
                    }
                }
                if (data.proposal) {
                    return await this.client.send(data);
                }
                if (data.ticks_history) {
                    return await this.client.send(data);
                }
                if (data.ticks) {
                    return await this.client.send(data);
                }
                if (data.active_symbols) {
                    return await this.client.send(data);
                }
                if (data.ohlc) {
                    return await this.client.send(data);
                }
                if (data.contracts_for) {
                    return await this.client.send(data);
                }
                if (data.trading_times) {
                    return await this.client.send(data);
                }
                return await this.client.send(data);
            } catch (err) {
                return { error: { message: err.message, code: err.code || 'UnknownError' } };
            }
        }
    }

    window.BotAPIAdapter = BotAPIAdapter;
})();
