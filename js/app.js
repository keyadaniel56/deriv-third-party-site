/* =========================================================================
 * TradersUnit — application logic
 * Drives the UI from live Deriv API data via the DerivClient (js/deriv.js).
 * =========================================================================
 */
(function () {
    'use strict';

    const config = window.SITE_CONFIG || {};
    const cfg = function (key, fallback) {
        return Object.prototype.hasOwnProperty.call(config, key) ? config[key] : fallback;
    };

    const $ = (sel, root) => (root || document).querySelector(sel);
    const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
    const fmt = (n, d) => (n === null || n === undefined || isNaN(n) ? '—' : Number(n).toFixed(d === undefined ? 2 : d));
    const fmtPct = (n) => (n === null || n === undefined || isNaN(n) ? '' : (n >= 0 ? '+' : '') + n.toFixed(2) + '%');
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    const el = {
        loader: $('#app-loader'),
        loaderProgress: $('#loader-progress'),
        loaderComment: $('#loader-comment'),

        heroStatus: $('#hero-status'),
        heroStatusText: $('#hero-status-text'),
        heroSymbol: $('#hero-symbol'),
        heroPrice: $('#hero-price'),
        heroChange: $('#hero-change'),
        heroCountdown: $('#hero-countdown'),

        tickerStrip: $('#ticker-strip'),

        symbolSelect: $('#symbol-select'),
        chartCanvas: $('#chart-canvas'),
        chartSymbol: $('#chart-symbol'),
        chartSymbolName: $('#chart-symbol-name'),
        spotPrice: $('#spot-price'),
        spotChange: $('#spot-change'),
        spotCountdown: $('#spot-countdown'),
        openTradeBtn: $('#open-trade-btn'),

        scannerGrid: $('#scanner-grid'),
        scannerStatus: $('#scanner-status'),

        tradeSymbol: $('#trade-symbol-select'),
        contractBtns: $$('.contract-btn'),
        durationInput: $('#duration-input'),
        durationUnit: $('#duration-unit'),
        basisSelect: $('#basis-select'),
        currencySelect: $('#currency-select'),
        stakeInput: $('#stake-input'),
        tradeAuthRequired: $('#trade-auth-required'),
        tradeConnectBtn: $('#trade-connect-btn'),
        tradeTokenBtn: $('#trade-token-btn'),
        tradeAccountInfo: $('#trade-account-info'),
        tradeAccountId: $('#trade-account-id'),
        tradeAccountBalance: $('#trade-account-balance'),
        proposalStatus: $('#proposal-status'),
        proposalPrice: $('#proposal-price'),
        buyBtn: $('#buy-btn'),
        buyStatus: $('#buy-status'),

        accountChip: $('#account-chip'),
        accountChipText: $('#account-chip-text'),
        navConnect: $('#nav-connect'),
        navMenu: $('#nav-menu'),

        connectModal: $('#connect-modal'),
        connectClose: $('#connect-close'),
        oauthBtn: $('#oauth-btn'),
        oauthSignupBtn: $('#oauth-signup-btn'),
        tokenInput: $('#token-input'),
        tokenApplyBtn: $('#token-apply-btn'),
        connectStatus: $('#connect-status'),

        botBuilder: $('#bot-builder'),
        builderWorkspaceName: $('#builder-workspace-name'),
        builderReset: $('#builder-reset'),
        builderSave: $('#builder-save'),
        builderImport: $('#builder-import'),
        builderImportFile: $('#builder-import-file'),
        builderRun: $('#builder-run'),
        builderRunLabel: $('#builder-run-label'),
        builderClose: $('#builder-close'),
        builderConn: $('#builder-conn'),
        builderStatus: $('#builder-status'),
        builderStatusRight: $('#builder-status-right'),
        builderMaxTrades: $('#builder-maxtrades'),
        runstateIc: $('#runstate-ic'),
        runstateTitle: $('#runstate-title'),
        runstateSub: $('#runstate-sub'),
        builderTransactions: $('#builder-transactions'),
        builderLog: $('#builder-log'),
        sumTrades: $('#sum-trades'),
        sumStake: $('#sum-stake'),
        sumWins: $('#sum-wins'),
        sumLosses: $('#sum-losses'),
        sumProfit: $('#sum-profit'),

        toastRoot: $('#toast-root'),
        footerYear: $('#footer-year'),
    };

    const state = {
        client: null,
        symbol: cfg('defaultSymbol', 'R_100'),
        symbolName: 'Volatility 100 Index',
        ticks: [],
        tickBase: null,
        scanner: {}, // symbol -> { ticks: [], base: null }
        contract: {
            type: 'CALL',
            duration: 1,
            unit: 'm',
            basis: 'payout',
            currency: 'USD',
            amount: 10,
        },
        proposal: null,
        proposalSubId: null,
        lastTickEpoch: 0,
        account: null,
        symbolsLoaded: false,
        loaderHidden: false,
        botRunning: false,
        botStats: { trades: 0, wins: 0, losses: 0, stake: 0, profit: 0 },
        markets: null,
    };

    const upColor = cfg('upColor', '#2BB673');
    const downColor = cfg('downColor', '#FF444F');

    /* =========================================================
     * Loader
     * ========================================================= */
    function setLoaderProgress(pct, comment) {
        if (el.loaderProgress) el.loaderProgress.style.width = Math.max(0, Math.min(100, pct)) + '%';
        if (comment && el.loaderComment) el.loaderComment.textContent = comment;
    }

    function hideLoader() {
        if (state.loaderHidden) return;
        state.loaderHidden = true;
        el.loader.classList.add('is-done');
        setTimeout(() => {
            el.loader.setAttribute('aria-hidden', 'true');
            el.loader.style.display = 'none';
        }, 650);
    }

    /* =========================================================
     * Status / toasts
     * ========================================================= */
    function setStatus(text, ok) {
        el.heroStatusText.textContent = text;
        el.heroStatus.classList.toggle('status--ok', !!ok);
        el.heroStatus.classList.toggle('status--error', ok === false);
    }

    function toast(message, type) {
        if (!el.toastRoot) return;
        const node = document.createElement('div');
        node.className = 'toast' + (type ? ' toast--' + type : '');
        node.innerHTML =
            '<span class="toast__icon">' + (type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ') + '</span>' +
            '<span>' + message + '</span>';
        el.toastRoot.appendChild(node);
        setTimeout(() => {
            node.classList.add('is-leaving');
            setTimeout(() => node.remove(), 300);
        }, 4500);
    }

    /* =========================================================
     * Ticker strip
     * ========================================================= */
    function buildTicker() {
        const list = cfg('scannerSymbols', []);
        const strip = el.tickerStrip;
        if (!strip) return;
        strip.innerHTML = '';
        const doubled = list.concat(list);
        doubled.forEach((m) => {
            const li = document.createElement('li');
            li.className = 'ticker__item';
            li.innerHTML =
                '<span class="ticker__symbol">' + m.symbol + '</span>' +
                '<span id="ticker-price-' + m.symbol + '" class="ticker__price">—</span>' +
                '<span id="ticker-change-' + m.symbol + '" class="ticker__change"></span>';
            strip.appendChild(li);
        });
    }

    function updateTicker(symbol) {
        const data = state.scanner[symbol];
        if (!data || !data.ticks.length) return;
        const last = data.ticks[data.ticks.length - 1].quote;
        const chg = data.base ? ((last - data.base) / data.base) * 100 : 0;
        const p = $('#ticker-price-' + symbol);
        const c = $('#ticker-change-' + symbol);
        if (p) {
            p.textContent = fmt(last);
            p.style.color = chg >= 0 ? upColor : downColor;
        }
        if (c) {
            c.textContent = fmtPct(chg);
            c.style.color = chg >= 0 ? upColor : downColor;
        }
    }

    /* =========================================================
     * Scanner
     * ========================================================= */
    function buildScannerCards() {
        const grid = el.scannerGrid;
        if (!grid) return;
        grid.innerHTML = '';
        cfg('scannerSymbols', []).forEach((m) => {
            const card = document.createElement('article');
            card.className = 'scan-card glass';
            card.innerHTML =
                '<div class="scan-card__head">' +
                '  <div class="scan-card__titles">' +
                '    <h3 class="scan-card__name">' + m.name + '</h3>' +
                '    <span class="scan-card__tag">' + m.tag + '</span>' +
                '  </div>' +
                '  <span id="scan-change-' + m.symbol + '" class="scan-card__change"></span>' +
                '</div>' +
                '<canvas id="scan-spark-' + m.symbol + '" class="scan-card__spark"></canvas>' +
                '<div class="scan-card__foot">' +
                '  <span id="scan-price-' + m.symbol + '" class="scan-card__price">—</span>' +
                '  <span id="scan-count-' + m.symbol + '" class="scan-card__count">—</span>' +
                '</div>';
            grid.appendChild(card);
            state.scanner[m.symbol] = { ticks: [], base: null };
        });
    }

    function drawSpark(symbol) {
        const canvas = $('#scan-spark-' + symbol);
        const data = state.scanner[symbol];
        if (!canvas || !data || !data.ticks.length) return;
        const dpr = window.devicePixelRatio || 1;
        const w = canvas.clientWidth || 200;
        const h = canvas.clientHeight || 52;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, w, h);

        const values = data.ticks.map((t) => t.quote);
        const min = Math.min.apply(null, values);
        const max = Math.max.apply(null, values);
        const range = max - min || 1;
        const pad = 4;

        const pts = values.map((v, i) => ({
            x: pad + (i / (values.length - 1 || 1)) * (w - pad * 2),
            y: pad + (1 - (v - min) / range) * (h - pad * 2),
        }));

        ctx.strokeStyle = 'rgba(63,123,255,0.14)';
        ctx.lineWidth = 1;
        for (let g = 1; g < 4; g++) {
            const y = (h / 4) * g;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }

        const rising = values[values.length - 1] >= values[0];
        const color = rising ? upColor : downColor;

        ctx.beginPath();
        pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
        ctx.lineTo(pts[pts.length - 1].x, h - pad);
        ctx.lineTo(pts[0].x, h - pad);
        ctx.closePath();
        ctx.fillStyle = rising ? 'rgba(43,182,115,0.12)' : 'rgba(255,68,79,0.12)';
        ctx.fill();
    }

    function updateScanCard(symbol) {
        const data = state.scanner[symbol];
        if (!data || !data.ticks.length) return;
        const last = data.ticks[data.ticks.length - 1].quote;
        const chg = data.base ? ((last - data.base) / data.base) * 100 : 0;

        const price = $('#scan-price-' + symbol);
        const change = $('#scan-change-' + symbol);
        if (price) price.textContent = fmt(last);
        if (change) {
            change.textContent = fmtPct(chg);
            change.classList.toggle('is-up', chg >= 0);
        }
        drawSpark(symbol);
        updateTicker(symbol);
    }

    function setupScanner() {
        cfg('scannerSymbols', []).forEach((m) => {
            state.scanner[m.symbol].base = null;
            state.scanner[m.symbol].ticks = [];
            state.client
                .getTicksHistory(m.symbol, 40)
                .then((res) => {
                    const ticks = (res.history && res.history.prices) || [];
                    const times = (res.history && res.history.times) || [];
                    const buffered = ticks.map((q, i) => ({ epoch: times[i], quote: q }));
                    state.scanner[m.symbol].ticks = buffered.slice(-40);
                    state.scanner[m.symbol].base = buffered.length ? buffered[0].quote : null;
                    updateScanCard(m.symbol);
                })
                .catch(() => { /* scanner will fill from live ticks */ });
            state.client.subscribeTicks(m.symbol).catch(() => { /* noop */ });
        });
    }

    /* =========================================================
     * Symbol select population
     * ========================================================= */
    function populateSymbolSelects() {
        state.client
            .getActiveSymbols()
            .then((res) => {
                const marketName = {
                    synthetic_index: 'Synthetic Indices',
                    indices: 'Stock Indices',
                    forex: 'Forex',
                    commodities: 'Commodities',
                    cryptocurrency: 'Cryptocurrencies',
                };
                const markets = {};
                (res.active_symbols || []).forEach((s) => {
                    const key = s.market || 'other';
                    if (!markets[key]) markets[key] = { market: key, name: marketName[key] || key, symbols: [] };
                    markets[key].symbols.push({
                        symbol: s.underlying_symbol || s.symbol,
                        name: s.underlying_symbol_name || s.display_name || s.symbol,
                    });
                });
                state.markets = Object.keys(markets)
                    .map((k) => markets[k])
                    .sort((a, b) => a.name.localeCompare(b.name));
                state.markets.forEach((m) => m.symbols.sort((a, b) => a.name.localeCompare(b.name)));

                const syms = state.markets.reduce((acc, m) => acc.concat(m.symbols), []);
                const opts = syms.map((s) => {
                    const opt = document.createElement('option');
                    opt.value = s.symbol;
                    opt.textContent = s.name;
                    return opt;
                });
                [el.symbolSelect, el.tradeSymbol].forEach((sel) => {
                    if (!sel) return;
                    sel.innerHTML = '';
                    opts.forEach((o) => sel.appendChild(o.cloneNode(true)));
                    const matching = sel.querySelector('option[value="' + state.symbol + '"]');
                    if (matching) sel.value = state.symbol;
                });
                return syms;
            })
            .catch(() => toast('Could not load active symbols from the Deriv API.', 'error'));
    }

    /* =========================================================
     * Chart
     * ========================================================= */
    function drawChart() {
        const canvas = el.chartCanvas;
        if (!canvas || !canvas.getBoundingClientRect().width) return;
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, w, h);

        const ticks = state.ticks;
        const empty = $('#chart-empty');
        if (empty) empty.style.display = ticks.length ? 'none' : 'flex';
        if (ticks.length < 2) return;

        const view = ticks.slice(-160);
        let min = Infinity;
        let max = -Infinity;
        view.forEach((t) => {
            min = Math.min(min, t.quote);
            max = Math.max(max, t.quote);
        });
        const padY = (max - min) * 0.1 || 1;
        min -= padY;
        max += padY;
        const range = max - min || 1;

        const axisW = 62;
        const plotW = w - axisW;
        const x = (i) => (plotW / (view.length - 1 || 1)) * i;
        const y = (v) => h - ((v - min) / range) * (h - 24) - 12;

        // grid + price axis
        ctx.font = '10px "IBM Plex Sans", sans-serif';
        ctx.textBaseline = 'middle';
        for (let g = 0; g <= 4; g++) {
            const gy = (h / 4) * g;
            const val = max - (range / 4) * g;
            ctx.strokeStyle = 'rgba(255,255,255,0.06)';
            ctx.beginPath();
            ctx.moveTo(0, gy);
            ctx.lineTo(plotW, gy);
            ctx.stroke();
            ctx.fillStyle = 'rgba(180,200,240,0.55)';
            ctx.fillText(fmt(val), plotW + 6, gy, axisW - 8);
        }

        const pts = view.map((t, i) => ({ x: x(i), y: y(t.quote) }));
        const rising = view[view.length - 1].quote >= view[0].quote;
        const color = rising ? upColor : downColor;

        // gradient area fill
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, rising ? 'rgba(43,182,115,0.28)' : 'rgba(255,68,79,0.28)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.beginPath();
        pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
        ctx.lineTo(pts[pts.length - 1].x, h - 12);
        ctx.lineTo(pts[0].x, h - 12);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();

        // price line
        ctx.beginPath();
        pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();

        // last price dashed line + label
        const lastP = pts[pts.length - 1];
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, lastP.y);
        ctx.lineTo(plotW, lastP.y);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(lastP.x, lastP.y, 3, 0, Math.PI * 2);
        ctx.fill();
    }

    function pushTickToChart(tick) {
        if (tick.symbol !== state.symbol) return;
        state.ticks.push({ epoch: tick.epoch, quote: tick.quote });
        if (state.ticks.length > 500) state.ticks = state.ticks.slice(-500);
    }

    function loadChart(symbol) {
        state.symbol = symbol;
        state.ticks = [];
        state.tickBase = null;
        const name = $('#symbol-select option[value="' + symbol + '"]');
        state.symbolName = name ? name.textContent : symbol;
        el.chartSymbol.textContent = symbol;
        el.chartSymbolName.textContent = state.symbolName;
        el.heroSymbol.textContent = symbol;
        drawChart();

        state.client
            .getTicksHistory(symbol, 120)
            .then((res) => {
                const prices = (res.history && res.history.prices) || [];
                const times = (res.history && res.history.times) || [];
                state.ticks = prices.map((q, i) => ({ epoch: times[i], quote: q }));
                state.tickBase = state.ticks.length ? state.ticks[0].quote : null;
                drawChart();
            })
            .catch(() => toast('Failed to load chart history for ' + symbol + '.', 'error'));

        state.client.subscribeTicks(symbol).catch(() => { /* noop */ });
    }

    function updateHeadlineStats(symbol) {
        if (symbol !== state.symbol) return;
        const data = state.scanner[symbol];
        const last = state.ticks.length ? state.ticks[state.ticks.length - 1].quote : (data && data.ticks.length ? data.ticks[data.ticks.length - 1].quote : null);
        const base = state.tickBase || (data && data.base);
        if (last !== null) {
            el.heroPrice.textContent = fmt(last);
            el.spotPrice.textContent = fmt(last);
            const chg = base ? ((last - base) / base) * 100 : 0;
            el.heroChange.textContent = fmtPct(chg);
            el.heroChange.style.color = chg >= 0 ? upColor : downColor;
            el.spotChange.textContent = fmtPct(chg);
            el.spotChange.style.color = chg >= 0 ? upColor : downColor;
        }
    }

    function updateCountdowns() {
        const now = Math.floor(Date.now() / 1000);
        let seconds = state.lastTickEpoch ? now - state.lastTickEpoch : null;
        if (seconds !== null && seconds < 0) seconds = 0;
        const label = seconds === null ? '—' : seconds + 's';
        el.heroCountdown.textContent = label;
        el.spotCountdown.textContent = label;
    }

    /* =========================================================
     * Live tick routing
     * ========================================================= */
    function handleTick(tick) {
        if (!tick || tick.quote === undefined) return;
        state.lastTickEpoch = tick.epoch;

        if (tick.symbol === state.symbol) {
            pushTickToChart(tick);
            drawChart();
        }

        const data = state.scanner[tick.symbol];
        if (data) {
            if (!data.base && data.ticks.length) data.base = data.ticks[0].quote;
            data.ticks.push({ epoch: tick.epoch, quote: tick.quote });
            if (data.ticks.length > 60) data.ticks = data.ticks.slice(-60);
            updateScanCard(tick.symbol);
            updateHeadlineStats(tick.symbol);
        }
    }

    /* =========================================================
     * Proposals & trading
     * ========================================================= */
    function contractParams() {
        return {
            amount: Number(state.contract.amount),
            basis: state.contract.basis,
            contract_type: state.contract.type,
            currency: state.contract.currency,
            duration: Number(state.contract.duration),
            duration_unit: state.contract.unit,
            underlying_symbol: state.tradeSymbol || state.symbol,
        };
    }

    function refreshProposal() {
        if (!state.client) return;
        const params = contractParams();
        if (state.proposalSubId) {
            state.client.forget(state.proposalSubId).catch(() => {});
            state.proposalSubId = null;
        }
        state.proposal = null;
        el.buyBtn.disabled = true;
        el.proposalPrice.textContent = '—';
        el.proposalStatus.textContent = 'Fetching live proposal…';

        state.client
            .subscribeProposal(params)
            .then((res) => {
                if (res.proposal) handleProposal(res.proposal, res.subscription && res.subscription.id);
            })
            .catch((err) => {
                el.proposalStatus.textContent = 'Proposal unavailable';
                el.proposalPrice.textContent = '—';
                if (err.code === 'WrongParameters') {
                    el.proposalStatus.textContent = 'Invalid contract parameters';
                }
            });
    }

    function handleProposal(proposal, subId) {
        if (!proposal || !proposal.id) return;
        state.proposal = proposal;
        if (subId) state.proposalSubId = subId;
        const label = state.contract.type === 'CALL' ? 'Rise' : 'Fall';
        el.proposalStatus.textContent = label + ' · ' + state.contract.duration + ' ' + state.contract.unit + ' · ' + state.contract.basis;
        const display = state.contract.basis === 'payout' ? proposal.payout : proposal.ask_price;
        el.proposalPrice.textContent = fmt(display, 2) + ' ' + state.contract.currency;
        if (state.account && state.account.currency) {
            el.buyBtn.disabled = false;
        }
    }

    function buy() {
        if (!state.account) {
            toast('Connect your Deriv account to buy contracts.', 'error');
            return;
        }
        if (!state.proposal || !state.proposal.id) {
            toast('Waiting for a valid proposal price.', 'error');
            return;
        }
        const price = state.proposal.ask_price;
        el.buyBtn.disabled = true;
        el.buyStatus.textContent = 'Buying contract…';

        state.client
            .buy(state.proposal.id, price)
            .then((res) => {
                const b = res.buy;
                const currency = state.account ? state.account.currency : state.contract.currency;
                toast('Contract purchased — potential payout ' + fmt(b.payout, 2) + ' ' + currency, 'success');
                el.buyStatus.textContent = 'Contract #' + b.contract_id + ' purchased. Balance: ' + fmt(b.balance_after, 2) + ' ' + currency;
                state.account.balance = b.balance_after;
                renderAccount();
                setTimeout(() => {
                    el.buyStatus.textContent = '';
                    el.buyBtn.disabled = false;
                    refreshProposal();
                }, 2000);
            })
            .catch((err) => {
                el.buyStatus.textContent = '';
                el.buyBtn.disabled = false;
                toast(err.message || 'Buy failed', 'error');
            });
    }

    /* =========================================================
     * Auth — OAuth 2.0 (PKCE) or Deriv API token → REST accounts
     * → OTP → trading WS
     * ========================================================= */

    async function generatePkce() {
        const array = crypto.getRandomValues(new Uint8Array(64));
        const codeVerifier = Array.from(array)
            .map((v) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'[v % 66])
            .join('');
        const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier));
        const codeChallenge = btoa(String.fromCharCode.apply(null, new Uint8Array(hash)))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
        const state = crypto.getRandomValues(new Uint8Array(16))
            .reduce((s, b) => s + b.toString(16).padStart(2, '0'), '');
        return { codeVerifier, codeChallenge, state };
    }

    function oauthRedirectUri() {
        return cfg('oauthRedirectUri', '') || window.location.origin + window.location.pathname;
    }

    function oauthLoginUrl(pkce, opts) {
        const params = new URLSearchParams({
            response_type: 'code',
            client_id: cfg('oauth2ClientId', ''),
            redirect_uri: oauthRedirectUri(),
            scope: cfg('oauthScopes', 'trade'),
            state: pkce.state,
            code_challenge: pkce.codeChallenge,
            code_challenge_method: 'S256',
        });
        const prompt = (opts && opts.prompt) || cfg('oauthPrompt', '');
        if (prompt) params.set('prompt', prompt);
        const p = cfg('partner', null);
        if (p && typeof p === 'object') {
            if (p.sidc) params.set('sidc', p.sidc);
            if (p.affiliateToken) params.set('affiliate_token', p.affiliateToken);
            if (p.utm_source) params.set('utm_source', p.utm_source);
            if (p.utm_medium) params.set('utm_medium', p.utm_medium);
            if (p.utm_campaign) params.set('utm_campaign', p.utm_campaign);
        }
        return cfg('oauthAuthUrl', 'https://auth.deriv.com/oauth2/auth') + '?' + params.toString();
    }

    async function startOAuth(opts) {
        if (!cfg('oauth2ClientId', '')) {
            toast('OAuth is not configured. Set oauth2ClientId in js/config.js or use an API token.', 'error');
            openModal(el.connectModal);
            return;
        }
        try {
            const pkce = await generatePkce();
            try {
                sessionStorage.setItem('oauth_verifier', pkce.codeVerifier);
                sessionStorage.setItem('oauth_state', pkce.state);
            } catch (e) { /* noop */ }
            window.location.href = oauthLoginUrl(pkce, opts);
        } catch (e) {
            toast('Could not start OAuth sign-in.', 'error');
        }
    }

    async function exchangeOAuthCode(code, verifier) {
        const res = await fetch(cfg('oauthTokenUrl', 'https://auth.deriv.com/oauth2/token'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                client_id: cfg('oauth2ClientId', ''),
                code: code,
                code_verifier: verifier,
                redirect_uri: oauthRedirectUri(),
            }).toString(),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || !json.access_token) {
            throw new Error(json.error_description || json.error || 'Token exchange failed');
        }
        return json.access_token;
    }

    async function handleOAuthCallback() {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        const stateParam = params.get('state');
        const err = params.get('error');
        const cleanUrl = () => {
            window.history.replaceState({}, document.title, window.location.origin + window.location.pathname);
        };
        if (err) {
            cleanUrl();
            if (err !== 'access_denied') toast('Sign-in failed: ' + err, 'error');
            return false;
        }
        if (!code) return false;

        let verifier = null;
        let storedState = null;
        try {
            verifier = sessionStorage.getItem('oauth_verifier');
            storedState = sessionStorage.getItem('oauth_state');
        } catch (e) { /* noop */ }
        cleanUrl();
        try {
            sessionStorage.removeItem('oauth_verifier');
            sessionStorage.removeItem('oauth_state');
        } catch (e) { /* noop */ }

        if (!verifier || !storedState || storedState !== stateParam) {
            toast('OAuth state mismatch — sign-in aborted.', 'error');
            return true;
        }

        el.connectStatus.textContent = 'Completing sign-in…';
        try {
            const token = await exchangeOAuthCode(code, verifier);
            await state.client.connectAuthenticated(token);
            try { localStorage.setItem('tu_token', token); } catch (e) { /* noop */ }
            handleAuthorize(state.client.account);
        } catch (e) {
            console.error('OAuth sign-in failed:', e);
            toast('OAuth sign-in failed: ' + e.message, 'error');
        }
        el.connectStatus.textContent = '';
        return true;
    }

    function handleAuthorize(account) {
        state.account = account;
        renderAccount();
        updateBuilderConn();
        closeModals();
        toast('Connected as ' + account.loginid, 'success');
        if (account.currency && state.contract.currency !== account.currency) {
            state.contract.currency = account.currency;
            el.currencySelect.value = account.currency;
        }
        refreshProposal();
    }

    function renderAccount() {
        const acc = state.account;
        if (acc && acc.loginid) {
            el.accountChip.hidden = false;
            el.accountChipText.textContent = acc.loginid + ' · ' + fmt(acc.balance, 2) + ' ' + acc.currency;
            el.tradeAuthRequired.hidden = true;
            el.tradeAccountInfo.hidden = false;
            el.tradeAccountId.textContent = acc.loginid;
            el.tradeAccountBalance.textContent = fmt(acc.balance, 2) + ' ' + acc.currency;
            el.navConnect.textContent = 'Signed in';
        } else {
            el.accountChip.hidden = true;
            el.tradeAuthRequired.hidden = false;
            el.tradeAccountInfo.hidden = true;
            el.navConnect.textContent = 'Connect with Deriv';
        }
        el.buyBtn.disabled = !acc || !state.proposal;
    }

    async function applyToken(token) {
        if (!token) {
            toast('Please enter a token.', 'error');
            return;
        }
        el.connectStatus.textContent = 'Authorising…';
        try {
            await state.client.connectAuthenticated(token);
            try { localStorage.setItem('tu_token', token); } catch (e) { /* noop */ }
            handleAuthorize(state.client.account);
            el.connectStatus.textContent = '';
            el.tokenInput.value = '';
        } catch (err) {
            el.connectStatus.textContent = err.message;
            toast('Authorization failed: ' + err.message, 'error');
        }
    }

    async function restoreAuth() {
        let token = null;
        try { token = localStorage.getItem('tu_token'); } catch (e) { token = null; }
        if (!token) return;
        try {
            await state.client.connectAuthenticated(token);
            handleAuthorize(state.client.account);
        } catch (e) {
            try { localStorage.removeItem('tu_token'); } catch (x) { /* noop */ }
            toast('Could not restore your session — please reconnect.', 'error');
        }
    }

    /* =========================================================
     * Modals
     * ========================================================= */
    function openModal(modal) {
        if (!modal) return;
        modal.hidden = false;
        document.body.classList.add('modal-open');
        setTimeout(() => modal.classList.add('is-open'), 10);
    }

    function closeModals() {
        $$('.modal.is-open').forEach((m) => {
            if (state.botRunning && m === el.botBuilder) stopBot();
            m.classList.remove('is-open');
            setTimeout(() => { m.hidden = true; }, 200);
        });
        document.body.classList.remove('modal-open');
    }

    /* =========================================================
     * Bot builder — Blockly workspace integration
     * ========================================================= */

    let wsInitialized = false;

    function initBlocklyWorkspace() {
        if (wsInitialized || !window.Blockly || !window.BotWorkspace) return;
        const ok = window.BotWorkspace.init('builder-workspace');
        if (ok) wsInitialized = true;
    }

    function openBotBuilder() {
        initBlocklyWorkspace();
        if (window.BotWorkspace) window.BotWorkspace.clear();

        fetch('/bot-bundle/main.xml')
            .then(function (r) { return r.text(); })
            .then(function (xml) {
                if (window.BotWorkspace) window.BotWorkspace.loadXml(xml);
                botLog('Default strategy loaded into the Blockly workspace.', 'info');
            })
            .catch(function () {
                botLog('Could not load default strategy XML.', 'warn');
            });

        updateBuilderConn();
        setBuilderStatus('Bot ready to run', 'Start the bot to begin automated trading.');
        openModal(el.botBuilder);
        if (window.BotWorkspace) setTimeout(function () { window.BotWorkspace.resize(); }, 200);
    }

    function resetBotWorkspace() {
        if (state.botRunning) return;
        el.builderWorkspaceName.textContent = 'untitled workspace';
        el.builderMaxTrades.value = 20;
        if (el.builderTransactions) el.builderTransactions.innerHTML = '';
        if (el.builderLog) el.builderLog.innerHTML = '';
        if (window.BotWorkspace) {
            window.BotWorkspace.clear();
            fetch('/bot-bundle/main.xml')
                .then(function (r) { return r.text(); })
                .then(function (xml) { window.BotWorkspace.loadXml(xml); })
                .catch(function () {});
        }
        botLog('Workspace reset.', 'info');
    }

    function serializeStrategy() {
        if (!window.BotWorkspace) return '';
        return window.BotWorkspace.getXml();
    }

    function saveStrategy() {
        const xml = serializeStrategy();
        if (!xml) { toast('Nothing to save yet.', 'warn'); return; }
        const name = (el.builderWorkspaceName.textContent || 'strategy').replace(/[^\w -]+/g, '').trim() || 'strategy';
        const blob = new Blob([xml], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = name + '.xml';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        botLog('Strategy saved as "' + name + '.xml".', 'info');
    }

    function parseStrategy(text) {
        if (!text) { toast('Empty file.', 'error'); return; }
        if (!window.BotWorkspace) { toast('Blockly workspace not ready.', 'error'); return; }
        initBlocklyWorkspace();
        const loaded = window.BotWorkspace.loadXml(text);
        if (loaded) {
            toast('Strategy imported into workspace.', 'success');
            botLog('Strategy imported.', 'info');
            setBuilderStatus('Bot ready to run', 'Start the bot to begin automated trading.');
        } else {
            toast('Could not parse that XML file.', 'error');
        }
    }

    function loadStrategyFile(file) {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function () { parseStrategy(String(reader.result)); };
        reader.readAsText(file);
    }

    function switchBuilderTab(tab) {
        $$('#bot-builder .builder__tabs [data-tab]').forEach(function (t) {
            t.classList.toggle('is-active', t.dataset.tab === tab);
        });
        $$('#bot-builder .builder__tab').forEach(function (p) {
            p.classList.toggle('is-active', p.id === 'tab-' + tab);
        });
    }

    function botLog(msg, kind) {
        if (!el.builderLog) return;
        const line = document.createElement('div');
        line.className = 'builder__logline builder__logline--' + (kind || 'info');
        line.textContent = '[' + new Date().toLocaleTimeString() + '] ' + msg;
        el.builderLog.appendChild(line);
        el.builderLog.scrollTop = el.builderLog.scrollHeight;
    }

    function setBuilderStatus(title, sub) {
        el.runstateTitle.textContent = title;
        el.runstateSub.textContent = sub;
        if (el.builderStatus) el.builderStatus.textContent = title;
    }

    function updateBuilderConn() {
        if (!el.builderConn) return;
        if (state.botRunning) {
            var n = state.botStats ? state.botStats.trades : 0;
            el.builderConn.textContent = 'Running — ' + n + ' trade' + (n === 1 ? '' : 's');
            el.builderConn.className = 'builder__conn builder__conn--run';
        } else if (state.account) {
            el.builderConn.textContent = state.account.loginid;
            el.builderConn.className = 'builder__conn builder__conn--ok';
        } else {
            el.builderConn.textContent = 'Not connected';
            el.builderConn.className = 'builder__conn';
        }
        if (el.builderStatusRight) {
            el.builderStatusRight.textContent = state.account
                ? 'Balance: ' + fmt(state.account.balance, 2) + ' ' + state.account.currency
                : '';
        }
    }

    function addTransaction(tx) {
        var row = document.createElement('div');
        row.className = 'builder__txrow';
        row.dataset.id = tx.id;
        row.innerHTML =
            '<span>' + tx.id + '</span>' +
            '<span>' + tx.contractId + '</span>' +
            '<span>' + fmt(tx.stake, 2) + '</span>' +
            '<span class="pl">…</span>';
        el.builderTransactions.insertBefore(row, el.builderTransactions.firstChild);
    }

    function markTransaction(id, pl) {
        var row = el.builderTransactions.querySelector('[data-id="' + id + '"]');
        if (!row) return;
        var cell = row.querySelector('.pl');
        cell.textContent = (pl >= 0 ? '+' : '') + fmt(pl, 2);
        cell.classList.add(pl >= 0 ? 'pl--pos' : 'pl--neg');
    }

    function updateSummary() {
        var s = state.botStats;
        el.sumTrades.textContent = s.trades;
        el.sumStake.textContent = fmt(s.stake, 2);
        el.sumWins.textContent = s.wins;
        el.sumLosses.textContent = s.losses;
        var pf = s.profit;
        el.sumProfit.textContent = (pf >= 0 ? '+' : '') + fmt(pf, 2);
        el.sumProfit.style.color = pf >= 0 ? '#0e9f6e' : '#e23b53';
    }

    function toggleBot() {
        if (state.botRunning) stopBot();
        else startBot();
    }

    function stopBot() {
        if (!state.botRunning) return;
        state.botRunning = false;
        if (window.BotWorkspace) window.BotWorkspace.stopBot();
        botLog('Bot stopped.', 'warn');
        el.builderRun.classList.remove('is-running');
        el.builderRunLabel.textContent = 'Run';
        el.runstateIc.textContent = '\u25B6';
        el.runstateIc.parentElement.classList.remove('is-running');
        el.runstateTitle.textContent = 'Bot stopped';
        el.runstateSub.textContent = 'Review the Transactions and Summary tabs.';
        updateBuilderConn();
        updateSummary();
    }

    async function startBot() {
        if (!state.client) return;
        if (!state.account) {
            toast('Connect your Deriv account to run the bot.', 'error');
            return;
        }
        if (!window.BotWorkspace || !window.BotWorkspace.getRunning && !window.BotWorkspace.generateCode) {
            toast('Blockly workspace is not ready.', 'error');
            return;
        }
        var code = window.BotWorkspace.generateCode();
        if (!code) {
            toast('Add trade blocks to the workspace first.', 'error');
            return;
        }
        state.botRunning = true;
        state.botStats = { trades: 0, wins: 0, losses: 0, stake: 0, profit: 0 };
        el.builderRun.classList.add('is-running');
        el.builderRunLabel.textContent = 'Stop';
        el.runstateIc.textContent = '\u23F8';
        el.runstateIc.parentElement.classList.add('is-running');
        el.runstateTitle.textContent = 'Running';
        el.runstateSub.textContent = 'Blockly trade engine is executing.';

        if (el.builderTransactions) el.builderTransactions.innerHTML = '';
        if (el.builderLog) el.builderLog.innerHTML = '';

        botLog('Bot started via Blockly trade engine interpreter.', 'ok');
        updateBuilderConn();

        var ran = window.BotWorkspace.runBot({ symbol: state.symbol });
        if (!ran) {
            botLog('Failed to start the interpreter.', 'error');
            stopBot();
        }
    }

    // wireWorkspaceDrag removed — Blockly handles workspace drag-and-drop natively.

    /* =========================================================
     * Event wiring
     * ========================================================= */
    function wireEvents() {
        el.navConnect.addEventListener('click', startOAuth);
        el.connectClose.addEventListener('click', closeModals);
        el.oauthBtn.addEventListener('click', () => startOAuth({ prompt: '' }));
        el.oauthSignupBtn.addEventListener('click', () => startOAuth({ prompt: 'registration' }));
        el.tokenApplyBtn.addEventListener('click', () => applyToken(el.tokenInput.value.trim()));
        el.tradeConnectBtn.addEventListener('click', startOAuth);
        el.tradeTokenBtn.addEventListener('click', () => openModal(el.connectModal));

        $$('.modal__backdrop').forEach((b) => b.addEventListener('click', closeModals));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModals();
        });

        el.accountChip.addEventListener('click', () => {
            toast('Connected: ' + (state.account ? state.account.loginid : 'none'), 'info');
        });

        el.symbolSelect.addEventListener('change', () => {
            state.symbol = el.symbolSelect.value;
            state.tradeSymbol = el.tradeSymbol.value;
            loadChart(state.symbol);
        });

        el.tradeSymbol.addEventListener('change', () => {
            state.tradeSymbol = el.tradeSymbol.value;
            refreshProposal();
        });

        el.openTradeBtn.addEventListener('click', () => {
            el.tradeSymbol.value = state.symbol;
            state.tradeSymbol = state.symbol;
            document.getElementById('trade').scrollIntoView({ behavior: 'smooth' });
            refreshProposal();
        });

        el.contractBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                el.contractBtns.forEach((b) => b.classList.remove('is-active'));
                btn.classList.add('is-active');
                state.contract.type = btn.dataset.contract;
                refreshProposal();
            });
        });

        el.durationInput.addEventListener('change', () => {
            state.contract.duration = Math.max(1, Number(el.durationInput.value) || 1);
            refreshProposal();
        });
        el.durationUnit.addEventListener('change', () => {
            state.contract.unit = el.durationUnit.value;
            refreshProposal();
        });
        el.basisSelect.addEventListener('change', () => {
            state.contract.basis = el.basisSelect.value;
            refreshProposal();
        });
        el.currencySelect.addEventListener('change', () => {
            state.contract.currency = el.currencySelect.value;
            refreshProposal();
        });
        el.stakeInput.addEventListener('change', () => {
            state.contract.amount = Number(el.stakeInput.value) || 10;
            refreshProposal();
        });

        el.buyBtn.addEventListener('click', buy);

        $('#nav-bot-builder').addEventListener('click', openBotBuilder);
        $('#hero-bot-builder').addEventListener('click', openBotBuilder);

        el.builderClose.addEventListener('click', closeModals);
        el.builderRun.addEventListener('click', toggleBot);
        el.builderReset.addEventListener('click', resetBotWorkspace);
        el.builderSave.addEventListener('click', saveStrategy);
        el.builderImport.addEventListener('click', () => el.builderImportFile.click());
        el.builderImportFile.addEventListener('change', () => {
            if (el.builderImportFile.files && el.builderImportFile.files[0]) {
                loadStrategyFile(el.builderImportFile.files[0]);
            }
            el.builderImportFile.value = '';
        });
        $$('#bot-builder [data-tab]').forEach((tab) => {
            tab.addEventListener('click', () => switchBuilderTab(tab.dataset.tab));
        });
        // Blockly handles workspace drag natively — no wireWorkspaceDrag needed.

        el.navMenu.addEventListener('click', () => {
            const links = $('.nav__links');
            const open = links.classList.toggle('is-open');
            el.navMenu.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        window.addEventListener('resize', () => {
            drawChart();
            cfg('scannerSymbols', []).forEach((m) => drawSpark(m.symbol));
        });

        if (el.footerYear) el.footerYear.textContent = String(new Date().getFullYear());
    }

    /* =========================================================
     * Connection status
     * ========================================================= */
    function handleStatus(status) {
        if (status.type === 'open') {
            setStatus('Live — connected to Deriv API', true);
            if (el.scannerStatus) el.scannerStatus.textContent = 'Live';
        } else if (status.type === 'error') {
            setStatus('Offline — could not reach Deriv API', false);
            toast('Could not connect to the Deriv API. Check your connection.', 'error');
        } else if (status.type === 'close') {
            setStatus('Disconnected from Deriv API', false);
        }
    }

    /* =========================================================
     * Boot
     * ========================================================= */
    async function init() {
        wireEvents();
        buildTicker();
        buildScannerCards();
        state.contract.type = el.contractBtns[0].dataset.contract;

        const appId = cfg('appId', '1089');
        state.client = new DerivClient(appId);
        state.client.onTick = handleTick;
        state.client.onProposal = handleProposal;
        state.client.onStatus = handleStatus;

        try {
            setLoaderProgress(18, 'Connecting to Deriv API…');
            await state.client.connect();
            setLoaderProgress(48, 'Loading market symbols…');
            populateSymbolSelects();
            state.tradeSymbol = state.symbol;
            setLoaderProgress(68, 'Loading chart data…');
            await loadChart(state.symbol);
            setLoaderProgress(82, 'Starting AI market scanner…');
            setupScanner();
            setLoaderProgress(90, 'Preparing trading desk…');
            const handledOAuth = await handleOAuthCallback();
            if (!handledOAuth) await restoreAuth();
            refreshProposal();
            setLoaderProgress(100, 'Ready');
        } catch (err) {
            setLoaderProgress(100, 'Could not reach Deriv API');
            setStatus('Offline — using static content', false);
        }

        setInterval(updateCountdowns, 250);

        setTimeout(() => {
            setLoaderProgress(100, 'Ready');
            hideLoader();
        }, 1200);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
