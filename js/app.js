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
        builderWorkspace: $('#builder-workspace'),
        builderStatus: $('#builder-status'),
        builderStatusRight: $('#builder-status-right'),
        paletteSearch: $('#palette-search'),
        paletteCats: $('#palette-cats'),
        boMarket: $('#bo-market'),
        boUnderlying: $('#bo-underlying'),
        boType: $('#bo-type'),
        boDuration: $('#bo-duration'),
        boUnit: $('#bo-unit'),
        boBasis: $('#bo-basis'),
        boStake: $('#bo-stake'),
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

    const BOT_CONFIGS = {
        vol75: {
            title: 'Volatility 75 Power',
            summary: 'Trend-following Rise/Fall strategy for the Volatility 75 Index (R_75).',
            steps: [
                'Market: Synthetic Indices → Volatility 75 Index (R_75).',
                'Contract: Rise (CALL) when the last candle closes above its midpoint; Fall (PUT) otherwise.',
                'Duration: 1 minute, restarting on each completed trade.',
                'Stake: 10% of total balance, capped at your chosen max stake.',
                'Risk: stop trading when daily profit target or loss limit is reached.',
            ],
            params: [
                ['Symbol', 'R_75'],
                ['Contract', 'Rise / Fall'],
                ['Duration', '1 minute'],
                ['Stake', '1 USD – 500 USD'],
                ['Profit target', '10 trades / 15%'],
                ['Loss limit', '5 consecutive losses'],
            ],
            preset: { symbol: 'R_75', contractType: 'CALL', duration: 1, unit: 'm', stake: 10, maxTrades: 10, target: 3, lossLimit: 3 },
        },
        boom: {
            title: 'Boom & Crash Breakout',
            summary: 'Breakout strategy for Boom 500 (BOOM500) and Crash 500 (CRASH500) using Over/Under contracts.',
            steps: [
                'Detect consolidation: no candle moves more than the average range for 5 candles.',
                'On breakout above range high → trade Over (CALL).',
                'On breakdown below range low → trade Under (PUT).',
                'Duration: 5 ticks per contract.',
                'Trailing stop: close trading after 3 consecutive wins in a session.',
            ],
            params: [
                ['Symbol', 'BOOM500 / CRASH500'],
                ['Contract', 'Over / Under'],
                ['Duration', '5 ticks'],
                ['Stake', '1 USD – 300 USD'],
                ['Detection', '5-candle range'],
                ['Session limit', '3 consecutive wins'],
            ],
            preset: { symbol: 'R_50', contractType: 'CALL', duration: 1, unit: 'm', stake: 10, maxTrades: 10, target: 3, lossLimit: 3 },
        },
        digit: {
            title: 'Digit Even/Odd',
            summary: 'Digit strategy trading the last digit of the tick on Volatility indices.',
            steps: [
                'Market: Synthetic Indices → Volatility 100 Index (R_100).',
                'Predict the last digit of the next tick.',
                'Contract: Even/Odd or Matches/Differs based on your digit analysis.',
                'Duration: 1 tick.',
                'Run up to 10 parallel strategies with different digit biases if you want.',
            ],
            params: [
                ['Symbol', 'R_100'],
                ['Contract', 'Even/Odd, Matches/Differs'],
                ['Duration', '1 tick'],
                ['Stake', '0.50 USD – 100 USD'],
                ['Modes', 'Single & multi-tick'],
            ],
            preset: { symbol: 'R_100', contractType: 'DIGITEVEN', duration: 1, unit: 't', stake: 5, maxTrades: 15, target: 5, lossLimit: 3 },
        },
        runner: {
            title: 'Rise/Fall Runner',
            summary: 'Simple, repeatable Rise/Fall strategy for the Step Index (1HZ100V) — perfect for beginners.',
            steps: [
                'Market: Synthetic Indices → Step Index (1HZ100V).',
                'Contract: Rise (CALL) every completed minute.',
                'Duration: 1 minute.',
                'Fixed stake of 1 USD for the first 10 trades to validate the setup.',
                'Only increase stake after a profitable validation run.',
            ],
            params: [
                ['Symbol', '1HZ100V'],
                ['Contract', 'Rise / Fall'],
                ['Duration', '1 minute'],
                ['Stake', '1 USD default'],
                ['Validation', '10 trades'],
            ],
            preset: { symbol: '1HZ100V', contractType: 'CALL', duration: 1, unit: 'm', stake: 1, maxTrades: 10, target: 3, lossLimit: 3 },
        },
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
        bot: null,
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
                if (state.bot && state.bot.blocks.indexOf('trade-options') !== -1 && el.boMarket) applyTradeValues();
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

    function oauthLoginUrl(pkce) {
        const params = new URLSearchParams({
            response_type: 'code',
            client_id: cfg('oauth2ClientId', ''),
            redirect_uri: oauthRedirectUri(),
            scope: cfg('oauthScopes', 'trade'),
            state: pkce.state,
            code_challenge: pkce.codeChallenge,
            code_challenge_method: 'S256',
        });
        return cfg('oauthAuthUrl', 'https://auth.deriv.com/oauth2/auth') + '?' + params.toString();
    }

    async function startOAuth() {
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
            window.location.href = oauthLoginUrl(pkce);
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
     * Bot builder (DBot-style — mirrors bot.deriv.com)
     * ========================================================= */

    const BLOCK_CATS = [
        {
            cat: 'Start', cls: 'trigger', color: '#6c5ce7', open: true, blocks: [
                { id: 'once', label: 'Once' },
                { id: 'every-tick', label: 'Every tick' },
                { id: 'every-5-ticks', label: 'Every 5 ticks' },
                { id: 'every-10-ticks', label: 'Every 10 ticks' },
                { id: 'every-60-ticks', label: 'Every 60 ticks' },
                { id: 'every-1-minute', label: 'Every 1 minute' },
                { id: 'every-5-minutes', label: 'Every 5 minutes' },
            ],
        },
        {
            cat: 'Trade', cls: 'trade', color: '#0e8a68', open: true, blocks: [
                { id: 'trade-options', label: 'Trade options' },
                { id: 'trade-options-multiplier', label: 'Trade options multipliers' },
                { id: 'trade-options-accumulator', label: 'Trade options accumulators' },
                { id: 'buy-contract', label: 'Buy contract' },
                { id: 'sell-contract', label: 'Sell conditions' },
                { id: 'sell-at-profit', label: 'Sell at profit' },
                { id: 'sell-at-loss', label: 'Sell at loss' },
            ],
        },
        {
            cat: 'Trade definitions', cls: 'trade-def', color: '#1e3bb8', open: false, blocks: [
                { id: 'restart-trading', label: 'Restart trading conditions' },
                { id: 'restart-on-error', label: 'Restart on error' },
            ],
        },
        {
            cat: 'Purchase conditions', cls: 'purchase', color: '#2bb673', open: true, blocks: [
                { id: 'run-until-win', label: 'Run until a win' },
                { id: 'run-until-loss', label: 'Run until a loss' },
                { id: 'smart-purchase', label: 'Smart purchase' },
            ],
        },
        {
            cat: 'Indicators', cls: 'indicator', color: '#2f6fdb', open: false, blocks: [
                { id: 'moving-average', label: 'Moving average' },
                { id: 'bollinger-bands', label: 'Bollinger bands' },
                { id: 'rsi', label: 'RSI' },
                { id: 'macd', label: 'MACD' },
            ],
        },
        {
            cat: 'Logic', cls: 'logic', color: '#d6336c', open: false, blocks: [
                { id: 'if-else', label: 'If / Else' },
                { id: 'repeat-while', label: 'Repeat while' },
            ],
        },
        {
            cat: 'Math', cls: 'math', color: '#c47a10', open: false, blocks: [
                { id: 'add', label: 'Addition +' },
                { id: 'subtract', label: 'Subtraction −' },
                { id: 'multiply', label: 'Multiplication ×' },
                { id: 'divide', label: 'Division ÷' },
            ],
        },
        {
            cat: 'Variables', cls: 'variable', color: '#6d46c2', open: false, blocks: [
                { id: 'create-variable', label: 'Create variable' },
                { id: 'set-variable', label: 'Set variable' },
            ],
        },
        {
            cat: 'Statistics', cls: 'stat', color: '#4a4ea9', open: false, blocks: [
                { id: 'stat-trades', label: 'Total trades' },
                { id: 'stat-wins', label: 'Total wins' },
                { id: 'stat-losses', label: 'Total losses' },
                { id: 'stat-balance', label: 'Balance' },
            ],
        },
        {
            cat: 'Text', cls: 'text', color: '#2f9e5b', open: false, blocks: [
                { id: 'text', label: 'Text' },
                { id: 'text-print', label: 'Print text' },
            ],
        },
        {
            cat: 'Colour', cls: 'colour', color: '#e5134d', open: false, blocks: [
                { id: 'colour', label: 'Colour' },
            ],
        },
        {
            cat: 'List', cls: 'list', color: '#2f8c9c', open: false, blocks: [
                { id: 'list', label: 'Create list' },
            ],
        },
    ];

    const TRIGGER_OPTIONS = [
        ['once', 'Once'],
        ['every-tick', 'Every tick'],
        ['every-5-ticks', 'Every 5 ticks'],
        ['every-10-ticks', 'Every 10 ticks'],
        ['every-60-ticks', 'Every 60 ticks'],
        ['every-1-minute', 'Every 1 minute'],
        ['every-5-minutes', 'Every 5 minutes'],
    ];

    const CONTRACT_TYPES = [
        ['CALL', 'Rise'],
        ['PUT', 'Fall'],
        ['DIGITEVEN', 'Even'],
        ['DIGITODD', 'Odd'],
    ];

    function optStr(pairs) {
        return pairs.map((p) => '<option value="' + p[0] + '">' + p[1] + '</option>').join('');
    }

    function durOpts() {
        let s = '';
        for (let i = 1; i <= 30; i++) s += '<option value="' + i + '">' + i + '</option>';
        return s;
    }

    function paletteBlock(type) {
        for (let i = 0; i < BLOCK_CATS.length; i++) {
            const b = BLOCK_CATS[i].blocks.find((x) => x.id === type);
            if (b) return { def: b, cat: BLOCK_CATS[i] };
        }
        return null;
    }

    function renderPalette(query) {
        const q = (query || '').toLowerCase();
        el.paletteCats.innerHTML = '';
        BLOCK_CATS.forEach((cat) => {
            const blocks = cat.blocks.filter(
                (b) => !q || b.label.toLowerCase().indexOf(q) !== -1 || cat.cat.toLowerCase().indexOf(q) !== -1
            );
            if (q && !blocks.length) return;
            const open = !q && cat.open;
            const catBtn = document.createElement('button');
            catBtn.type = 'button';
            catBtn.className = 'bb-cat' + (open ? ' is-open' : '');
            catBtn.innerHTML =
                '<span class="bb-cat__dot" style="background:' + cat.color + '"></span>' +
                cat.cat +
                '<span class="bb-cat__caret">&#9654;</span>';
            catBtn.addEventListener('click', () => catBtn.classList.toggle('is-open'));
            const wrap = document.createElement('div');
            wrap.className = 'bb-cat__blocks';
            blocks.forEach((b) => {
                const item = document.createElement('button');
                item.type = 'button';
                item.className = 'bb-palette';
                item.dataset.block = b.id;
                item.innerHTML =
                    '<span class="bb-palette__chip" style="background:' + cat.color + '"></span>' + b.label;
                item.title = 'Add "' + b.label + '" block to the workspace';
                item.addEventListener('click', () => addBuilderBlock(b.id));
                wrap.appendChild(item);
            });
            el.paletteCats.appendChild(catBtn);
            el.paletteCats.appendChild(wrap);
        });
    }

    function buildDecorativeBody(type) {
        const ipt = (w, v) => '<input class="bb-inp" type="number" value="' + v + '" style="width:' + w + 'px" />';
        switch (type) {
            case 'moving-average':
                return '<div class="bb-block__field"><span>period</span>' + ipt(56, 14) + '</div>';
            case 'bollinger-bands':
                return '<div class="bb-block__field"><span>period</span>' + ipt(56, 20) + '<span>std</span>' + ipt(52, 2) + '</div>';
            case 'rsi':
                return '<div class="bb-block__field"><span>period</span>' + ipt(56, 14) + '</div>';
            case 'macd':
                return '<div class="bb-block__field"><span>fast</span>' + ipt(48, 12) + '<span>slow</span>' + ipt(48, 26) + '</div>';
            case 'if-else':
                return '<div class="bb-block__field"><input class="bb-inp" style="width:64px" /><span>then</span><input class="bb-inp" style="width:64px" /></div>';
            case 'repeat-while':
                return '<div class="bb-block__field"><input class="bb-inp" style="width:64px" /></div>';
            case 'add':
                return '<div class="bb-block__field"><input class="bb-inp" style="width:52px" /><span>+</span><input class="bb-inp" style="width:52px" /></div>';
            case 'subtract':
                return '<div class="bb-block__field"><input class="bb-inp" style="width:52px" /><span>−</span><input class="bb-inp" style="width:52px" /></div>';
            case 'multiply':
                return '<div class="bb-block__field"><input class="bb-inp" style="width:52px" /><span>×</span><input class="bb-inp" style="width:52px" /></div>';
            case 'divide':
                return '<div class="bb-block__field"><input class="bb-inp" style="width:52px" /><span>÷</span><input class="bb-inp" style="width:52px" /></div>';
            case 'create-variable':
                return '<div class="bb-block__field"><input class="bb-inp" placeholder="name" style="width:90px" /></div>';
            case 'set-variable':
                return '<div class="bb-block__field"><input class="bb-inp" placeholder="name" style="width:80px" /><span>=</span><input class="bb-inp" style="width:60px" /></div>';
            default:
                return '<div class="bb-block__field"><span>—</span></div>';
        }
    }

    function buildBlock(type) {
        const d = document.createElement('div');
        d.className = 'bb-block';
        d.draggable = true;
        d.dataset.type = type;
        const del = document.createElement('button');
        del.type = 'button';
        del.className = 'bb-block__del';
        del.textContent = '\u00d7';
        del.title = 'Remove block';
        del.addEventListener('click', (e) => {
            e.stopPropagation();
            removeBuilderBlock(type);
        });
        d.appendChild(del);

        if (type === 'trade-options') {
            d.classList.add('bb-block--trade');
            d.innerHTML =
                '<div class="bb-block__title">Trade options</div>' +
                '<div class="bb-block__field"><span>Market</span><select id="bo-market" class="bb-inp"></select></div>' +
                '<div class="bb-block__field"><span>Underlying</span><select id="bo-underlying" class="bb-inp"></select></div>' +
                '<div class="bb-block__field"><span>Trade type</span><select id="bo-type" class="bb-inp">' + optStr(CONTRACT_TYPES) + '</select></div>' +
                '<div class="bb-block__field"><span>Duration</span><span class="bb-inp-group"><select id="bo-duration" class="bb-inp">' + durOpts() + '</select><select id="bo-unit" class="bb-inp"><option value="t">ticks</option><option value="m">minutes</option></select></span></div>' +
                '<div class="bb-block__field"><span>Payout</span><select id="bo-basis" class="bb-inp"><option value="stake">Stake</option><option value="payout">Payout</option></select><input id="bo-stake" class="bb-inp" type="number" min="0.5" step="0.5" value="10" style="width:84px" /></div>';
        } else if (TRIGGER_OPTIONS.some((t) => t[0] === type)) {
            d.classList.add('bb-block--trigger');
            const sel = document.createElement('select');
            sel.className = 'bb-inp';
            sel.innerHTML = TRIGGER_OPTIONS.map(
                (t) => '<option value="' + t[0] + '"' + (t[0] === type ? ' selected' : '') + '>' + t[1] + '</option>'
            ).join('');
            sel.addEventListener('change', () => {
                const idx = state.bot.blocks.indexOf(type);
                if (idx !== -1) state.bot.blocks[idx] = sel.value;
                renderWorkspace();
            });
            const row = document.createElement('div');
            row.className = 'bb-block__field';
            row.appendChild(sel);
            d.appendChild(row);
        } else if (type === 'buy-contract') {
            d.classList.add('bb-block--buy');
            d.innerHTML =
                '<div class="bb-block__title">Buy contract</div>' +
                '<div class="bb-block__field"><span>Buy</span><select class="bb-inp"><option>trade options</option></select></div>';
        } else if (type === 'sell-contract') {
            d.classList.add('bb-block--sell');
            d.innerHTML =
                '<div class="bb-block__title">Sell conditions</div>' +
                '<div class="bb-block__field"><select class="bb-inp"><option>Do nothing</option><option>Sell at profit</option><option>Sell at loss</option></select></div>';
        } else if (type === 'sell-at-profit' || type === 'sell-at-loss') {
            d.classList.add('bb-block--sell');
            d.innerHTML =
                '<div class="bb-block__title">Sell conditions</div>' +
                '<div class="bb-block__field"><span>' + (type === 'sell-at-profit' ? 'Sell at profit' : 'Sell at loss') + '</span>' +
                '<input class="bb-inp" type="number" min="0" step="5" value="' + (type === 'sell-at-profit' ? '50' : '25') + '" style="width:56px" /><span>%</span></div>';
        } else if (type === 'run-until-win' || type === 'run-until-loss' || type === 'smart-purchase') {
            d.classList.add('bb-block--purchase');
            d.innerHTML =
                '<div class="bb-block__title">Purchase conditions</div>' +
                '<div class="bb-block__field"><select class="bb-inp">' +
                '<option' + (type === 'run-until-win' ? ' selected' : '') + '>Run until a win</option>' +
                '<option' + (type === 'run-until-loss' ? ' selected' : '') + '>Run until a loss</option>' +
                '<option' + (type === 'smart-purchase' ? ' selected' : '') + '>Smart purchase</option>' +
                '</select></div>';
        } else {
            const pb = paletteBlock(type);
            if (pb) d.classList.add('bb-block--' + pb.cat.cls);
            d.innerHTML =
                '<div class="bb-block__title">' + (pb ? pb.def.label : type) + '</div>' +
                buildDecorativeBody(type);
        }
        return d;
    }

    function populateUnderlying() {
        if (!el.boMarket || !el.boUnderlying || !state.markets) return;
        const m = state.markets.find((x) => x.market === el.boMarket.value);
        if (!m) return;
        const prev = el.boUnderlying.value;
        el.boUnderlying.innerHTML = '';
        m.symbols.forEach((s) => {
            const o = document.createElement('option');
            o.value = s.symbol;
            o.textContent = s.name;
            el.boUnderlying.appendChild(o);
        });
        if (prev && m.symbols.some((s) => s.symbol === prev)) el.boUnderlying.value = prev;
    }

    function setUnderlying(symbol) {
        if (!state.markets || !el.boMarket) return;
        for (const m of state.markets) {
            if (m.symbols.some((s) => s.symbol === symbol)) {
                el.boMarket.value = m.market;
                populateUnderlying();
                if (el.boUnderlying) el.boUnderlying.value = symbol;
                return;
            }
        }
        el.boMarket.value = state.markets[0].market;
        populateUnderlying();
    }

    function applyTradeValues() {
        if (!el.boMarket || !state.markets) return;
        if (!el.boMarket.options.length) {
            el.boMarket.innerHTML = '';
            state.markets.forEach((m) => {
                const o = document.createElement('option');
                o.value = m.market;
                o.textContent = m.name;
                el.boMarket.appendChild(o);
            });
        }
        el.boMarket.addEventListener('change', populateUnderlying);
        const pre = (state.bot && state.bot.pre) || {};
        if (pre.symbol) setUnderlying(pre.symbol);
        if (pre.contractType) el.boType.value = pre.contractType;
        if (pre.duration) el.boDuration.value = String(pre.duration);
        if (pre.unit) el.boUnit.value = pre.unit;
        if (pre.basis) el.boBasis.value = pre.basis;
        if (pre.stake) el.boStake.value = pre.stake;
    }

    const ROOT_NEST_ORDER = [
        'trade-options',
        'trade-options-multiplier',
        'trade-options-accumulator',
        'buy-contract',
        'run-until-win',
        'run-until-loss',
        'smart-purchase',
        'sell-contract',
        'sell-at-profit',
        'sell-at-loss',
    ];

    function connectorEl() {
        const c = document.createElement('div');
        c.className = 'bb-connect';
        return c;
    }

    function makeRootBlock(types) {
        const root = document.createElement('div');
        root.className = 'bb-block bb-block--root';
        root.dataset.type = 'restart-trading';
        const title = document.createElement('div');
        title.className = 'bb-block__title';
        title.innerHTML = '&#8635; Restart trading conditions';
        root.appendChild(title);
        const inner = document.createElement('div');
        inner.className = 'bb-root__inner';
        const nested = ROOT_NEST_ORDER.filter((t) => types.indexOf(t) !== -1);
        let n = 0;
        nested.forEach((type) => {
            const node = buildBlock(type);
            if (!node) return;
            if (n) inner.appendChild(connectorEl());
            inner.appendChild(node);
            n++;
        });
        if (n) root.appendChild(inner);
        return root;
    }

    function renderWorkspace() {
        const ws = el.builderWorkspace;
        if (!state.bot || !state.bot.blocks.length) {
            ws.innerHTML = '<div class="ws__empty">Click blocks from the left panel to build your bot.</div>';
            return;
        }
        ws.innerHTML = '';
        const trigger = state.bot.blocks.find((b) => TRIGGER_OPTIONS.some((t) => t[0] === b));
        const rootBlocks = state.bot.blocks.filter((b) => ROOT_NEST_ORDER.indexOf(b) !== -1);
        let top = 0;
        const pushTop = (node) => {
            if (!node) return;
            if (top) ws.appendChild(connectorEl());
            ws.appendChild(node);
            top++;
        };
        if (trigger) pushTop(buildBlock(trigger));
        pushTop(makeRootBlock(rootBlocks));
        state.bot.blocks.forEach((type) => {
            if (TRIGGER_OPTIONS.some((t) => t[0] === type)) return;
            if (ROOT_NEST_ORDER.indexOf(type) !== -1) return;
            pushTop(buildBlock(type));
        });
        rebindTradeOptions();
        applyTradeValues();
    }

    function rebindTradeOptions() {
        el.boMarket = $('#bo-market');
        el.boUnderlying = $('#bo-underlying');
        el.boType = $('#bo-type');
        el.boDuration = $('#bo-duration');
        el.boUnit = $('#bo-unit');
        el.boBasis = $('#bo-basis');
        el.boStake = $('#bo-stake');
    }

    function openBotBuilder(key) {
        const cfgObj = BOT_CONFIGS[key];
        if (!cfgObj || !cfgObj.preset) return;
        state.bot = {
            key: key,
            title: cfgObj.title,
            pre: Object.assign({}, cfgObj.preset),
            blocks: ['every-tick', 'trade-options', 'smart-purchase', 'sell-contract'],
        };
        el.builderWorkspaceName.textContent = cfgObj.title;
        el.builderMaxTrades.value = cfgObj.preset.maxTrades || 20;
        renderWorkspace();
        botLog('Strategy "' + cfgObj.title + '" loaded into the builder.', 'info');
        updateBuilderConn();
        setBuilderStatus('Bot ready to run', 'Start the bot to begin automated trading.');
        openModal(el.botBuilder);
    }

    function addBuilderBlock(type) {
        if (!state.bot) return;
        if (type === 'restart-trading') {
            toast('The "Restart trading conditions" root block is always present in the workspace.', 'info');
            return;
        }
        if (type === 'trade-options') {
            state.bot.blocks = state.bot.blocks.filter((b) => b !== 'trade-options');
        }
        if (TRIGGER_OPTIONS.some((t) => t[0] === type)) {
            state.bot.blocks = state.bot.blocks.filter((b) => !TRIGGER_OPTIONS.some((t) => t[0] === b));
        }
        if (state.bot.blocks.length >= 12) {
            toast('Workspace is full — remove a block first.', 'warn');
            return;
        }
        state.bot.blocks.push(type);
        renderWorkspace();
    }

    function removeBuilderBlock(type) {
        if (!state.bot) return;
        state.bot.blocks = state.bot.blocks.filter((b) => b !== type);
        renderWorkspace();
    }

    function resetBotWorkspace() {
        if (state.botRunning) return;
        state.bot = {
            key: null,
            title: 'untitled workspace',
            pre: null,
            blocks: ['every-tick', 'trade-options', 'smart-purchase', 'sell-contract'],
        };
        el.builderWorkspaceName.textContent = 'untitled workspace';
        el.builderMaxTrades.value = 20;
        if (el.builderTransactions) el.builderTransactions.innerHTML = '';
        if (el.builderLog) el.builderLog.innerHTML = '';
        renderWorkspace();
        botLog('Workspace reset to the default strategy.', 'info');
    }

    function escXml(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function serializeStrategy() {
        const settings = state.bot && state.bot.blocks.length ? readBotSettings() : null;
        const name = (state.bot && state.bot.title) || 'untitled workspace';
        const maxTrades = Math.max(1, Number(el.builderMaxTrades.value) || 20);
        const lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<xml>'];
        lines.push('  <strategy name="' + escXml(name) + '" max_trades="' + maxTrades + '">');
        state.bot.blocks.forEach((type) => {
            if (type === 'trade-options' && settings) {
                lines.push('    <block type="trade-options">');
                [
                    ['market', settings.market],
                    ['underlying', settings.symbol],
                    ['contract_type', settings.contractType],
                    ['duration', settings.duration],
                    ['duration_unit', settings.unit],
                    ['basis', settings.basis],
                    ['stake', settings.stake],
                ].forEach((pair) => {
                    lines.push('      <field name="' + pair[0] + '">' + escXml(pair[1]) + '</field>');
                });
                lines.push('    </block>');
            } else {
                lines.push('    <block type="' + type + '" />');
            }
        });
        lines.push('  </strategy>', '</xml>');
        return lines.join('\n');
    }

    function saveStrategy() {
        if (!state.bot || !state.bot.blocks.length) {
            toast('Nothing to save yet.', 'warn');
            return;
        }
        const name = ((state.bot.title || 'untitled workspace').replace(/[^\w -]+/g, '').trim() || 'strategy');
        const blob = new Blob([serializeStrategy()], { type: 'application/xml' });
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
        if (!text || text.indexOf('<xml>') === -1) {
            toast('That file does not look like a saved strategy.', 'error');
            return;
        }
        const nameMatch = text.match(/<strategy\s+name="([^"]*)"[^>]*max_trades="(\d+)"/);
        const name = nameMatch ? nameMatch[1] : 'imported strategy';
        const maxTrades = nameMatch ? Number(nameMatch[2]) || 20 : 20;
        const blocks = [];
        const blockRe = /<block\s+type="([^"]+)"/g;
        let m;
        while ((m = blockRe.exec(text)) !== null) {
            if (m[1] !== 'restart-trading' && blocks.indexOf(m[1]) === -1) blocks.push(m[1]);
        }
        const fields = {};
        const fieldRe = /<field\s+name="([^"]+)">([^<]*)<\/field>/g;
        while ((m = fieldRe.exec(text)) !== null) fields[m[1]] = m[2];
        if (!blocks.length) blocks.push('every-tick', 'trade-options', 'smart-purchase', 'sell-contract');
        state.bot = {
            key: null,
            title: name,
            pre: {
                symbol: fields.underlying || 'R_100',
                contractType: fields.contract_type || 'CALL',
                duration: Number(fields.duration) || 1,
                unit: fields.duration_unit || 'm',
                basis: fields.basis || 'stake',
                stake: Number(fields.stake) || 10,
                maxTrades: maxTrades,
            },
            blocks: blocks,
        };
        el.builderWorkspaceName.textContent = name;
        el.builderMaxTrades.value = maxTrades;
        renderWorkspace();
        botLog('Strategy "' + name + '" imported.', 'info');
        setBuilderStatus('Bot ready to run', 'Start the bot to begin automated trading.');
    }

    function loadStrategyFile(file) {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => parseStrategy(String(reader.result));
        reader.readAsText(file);
    }

    function switchBuilderTab(tab) {
        $$('#bot-builder .builder__tabs [data-tab]').forEach((t) => {
            t.classList.toggle('is-active', t.dataset.tab === tab);
        });
        $$('#bot-builder .builder__tab').forEach((p) => {
            p.classList.toggle('is-active', p.id === 'tab-' + tab);
        });
    }

    function wireWorkspaceDrag() {
        let dragType = null;
        el.builderWorkspace.addEventListener('dragstart', (e) => {
            const block = e.target.closest('.bb-block');
            if (!block) return;
            if (block.classList.contains('bb-block--root')) return;
            dragType = block.dataset.type;
            e.dataTransfer.effectAllowed = 'move';
        });
        el.builderWorkspace.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        el.builderWorkspace.addEventListener('drop', (e) => {
            e.preventDefault();
            const files = e.dataTransfer && e.dataTransfer.files;
            if (files && files.length) {
                if (/\.xml$/i.test(files[0].name)) loadStrategyFile(files[0]);
                else toast('Drop a saved .xml strategy file here.', 'warn');
                dragType = null;
                return;
            }
            if (!dragType) return;
            const target = e.target.closest('.bb-block');
            const blocks = state.bot.blocks.slice();
            const from = blocks.indexOf(dragType);
            if (from === -1) return;
            const to = target && target.dataset.type ? blocks.indexOf(target.dataset.type) : blocks.length - 1;
            if (to === -1) return;
            blocks.splice(from, 1);
            blocks.splice(to, 0, dragType);
            state.bot.blocks = blocks;
            dragType = null;
            renderWorkspace();
        });
        el.builderWorkspace.addEventListener('dragend', () => {
            dragType = null;
        });
    }

    function triggerInterval(trigger) {
        switch (trigger) {
            case 'every-5-ticks': return 10000;
            case 'every-10-ticks': return 20000;
            case 'every-60-ticks': return 120000;
            case 'every-1-minute': return 60000;
            case 'every-5-minutes': return 300000;
            default: return 0; /* once / every tick: trade as soon as the previous settles */
        }
    }

    function triggerLabel(trigger) {
        const t = TRIGGER_OPTIONS.find((x) => x[0] === trigger);
        return t ? t[1] : trigger;
    }

    function contractLabel(ct) {
        const c = CONTRACT_TYPES.find((x) => x[0] === ct);
        return c ? c[1] : ct;
    }

    function readBotSettings() {
        const trigger = state.bot.blocks.find((b) => TRIGGER_OPTIONS.some((t) => t[0] === b)) || 'every-tick';
        const hasTrade = state.bot.blocks.indexOf('trade-options') !== -1;
        return {
            trigger: trigger,
            intervalMs: triggerInterval(trigger),
            once: trigger === 'once',
            market: hasTrade && el.boMarket ? el.boMarket.value : '',
            symbol: hasTrade && el.boUnderlying ? el.boUnderlying.value : 'R_100',
            contractType: hasTrade && el.boType ? el.boType.value : 'CALL',
            duration: hasTrade && el.boDuration ? (Number(el.boDuration.value) || 1) : 1,
            unit: hasTrade && el.boUnit ? el.boUnit.value : 'm',
            basis: hasTrade && el.boBasis ? el.boBasis.value : 'stake',
            stake: hasTrade && el.boStake ? (Number(el.boStake.value) || 1) : 1,
            maxTrades: Math.max(1, Number(el.builderMaxTrades.value) || 1),
            runUntilWin: state.bot.blocks.indexOf('run-until-win') !== -1,
            runUntilLoss: state.bot.blocks.indexOf('run-until-loss') !== -1,
            currency: (state.account && state.account.currency) || 'USD',
        };
    }

    function botProposalParams(settings) {
        return {
            amount: Number(settings.stake) || 1,
            basis: settings.basis || 'stake',
            contract_type: settings.contractType,
            currency: settings.currency,
            duration: Number(settings.duration) || 1,
            duration_unit: settings.unit,
            underlying_symbol: settings.symbol,
        };
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
            const n = state.botStats ? state.botStats.trades : 0;
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
        const row = document.createElement('div');
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
        const row = el.builderTransactions.querySelector('[data-id="' + id + '"]');
        if (!row) return;
        const cell = row.querySelector('.pl');
        cell.textContent = (pl >= 0 ? '+' : '') + fmt(pl, 2);
        cell.classList.add(pl >= 0 ? 'pl--pos' : 'pl--neg');
    }

    function updateSummary() {
        const s = state.botStats;
        el.sumTrades.textContent = s.trades;
        el.sumStake.textContent = fmt(s.stake, 2);
        el.sumWins.textContent = s.wins;
        el.sumLosses.textContent = s.losses;
        const pf = s.profit;
        el.sumProfit.textContent = (pf >= 0 ? '+' : '') + fmt(pf, 2);
        el.sumProfit.style.color = pf >= 0 ? '#0e9f6e' : '#e23b53';
    }

    function toggleBot() {
        if (state.botRunning) stopBot();
        else startBot();
    }

    function stopBot() {
        state.botRunning = false;
        botLog('Stopping after the current trade settles…', 'warn');
        updateBuilderConn();
    }

    async function startBot() {
        if (!state.client) return;
        if (!state.account) {
            toast('Connect your Deriv account to run the bot.', 'error');
            return;
        }
        if (state.bot.blocks.indexOf('trade-options') === -1) {
            toast('Add the Trade options block to your workspace first.', 'error');
            return;
        }
        const settings = readBotSettings();
        if (/^(BOOM|CRASH)/i.test(settings.symbol)) {
            botLog('Boom/Crash indices only offer Multipliers and Accumulators on the new Deriv API — pick a Volatility index (R_25 … R_100) instead.', 'warn');
            setBuilderStatus('Waiting', 'Pick a supported market.');
            return;
        }
        state.botRunning = true;
        state.botStats = { trades: 0, wins: 0, losses: 0, stake: 0, profit: 0 };
        el.builderRun.classList.add('is-running');
        el.builderRunLabel.textContent = 'Stop';
        el.runstateIc.textContent = '\u23F8';
        el.runstateIc.parentElement.classList.add('is-running');
        el.runstateTitle.textContent = 'Running';
        el.runstateSub.textContent = settings.once
            ? 'Running a single trade.'
            : 'Trading every ' + triggerLabel(settings.trigger) + '.';
        botLog(
            'Bot started on ' + settings.symbol + ' · ' + contractLabel(settings.contractType) +
            ' · ' + settings.duration + (settings.unit === 'm' ? 'm' : 't') +
            ' · stake ' + fmt(settings.stake, 2) + ' ' + settings.currency,
            'ok'
        );

        while (state.botRunning) {
            const s = state.botStats;
            if (s.trades >= settings.maxTrades) {
                botLog('Stopped after ' + s.trades + ' trades (limit reached).', 'warn');
                break;
            }
            if (settings.runUntilWin && s.wins >= 1) {
                botLog('Run-until-a-win condition met — stopping.', 'ok');
                break;
            }
            if (settings.runUntilLoss && s.losses >= 1) {
                botLog('Run-until-a-loss condition met — stopping.', 'warn');
                break;
            }

            let proposal;
            try {
                proposal = await state.client.getProposal(botProposalParams(settings));
            } catch (err) {
                botLog('Proposal failed: ' + err.message, 'error');
                break;
            }
            if (!state.botRunning) break;
            const p = proposal && proposal.proposal;
            if (!p || !p.id) {
                botLog('No proposal received for ' + settings.symbol + '.', 'error');
                break;
            }

            let receipt;
            try {
                receipt = await state.client.buy(p.id, p.ask_price);
            } catch (err) {
                botLog('Buy failed: ' + err.message, 'error');
                break;
            }
            if (!state.botRunning) break;
            const b = receipt.buy;
            s.trades += 1;
            s.stake += b.buy_price;
            const currency = settings.currency;
            addTransaction({ id: s.trades, contractId: b.contract_id, stake: b.buy_price });
            botLog(
                '#' + s.trades + ' bought contract ' + b.contract_id +
                ' for ' + fmt(b.buy_price, 2) + ' ' + currency +
                ' — potential payout ' + fmt(b.payout, 2) + ' ' + currency,
                'info'
            );
            updateBuilderConn();

            const result = await waitSettlement(b.balance_after, settings);
            if (!state.botRunning) break;
            if (result.profit >= 0.005) {
                s.wins += 1;
                s.profit += result.profit;
                botLog('#' + s.trades + ' WIN +' + fmt(result.profit, 2) + ' ' + currency, 'ok');
                markTransaction(s.trades, result.profit);
            } else {
                s.losses += 1;
                s.profit -= b.buy_price;
                botLog('#' + s.trades + ' loss — stake ' + fmt(b.buy_price, 2) + ' ' + currency, 'err');
                markTransaction(s.trades, -b.buy_price);
            }
            updateSummary();
            updateBuilderConn();

            if (settings.once) {
                botLog('Once trigger — stopping after the first trade.', 'info');
                break;
            }
            const iv = settings.intervalMs;
            if (iv > 0) {
                const elapsed = result.settledAt ? Date.now() - result.settledAt : iv;
                const wait = Math.max(0, iv - elapsed);
                if (wait > 0) {
                    botLog('Waiting ' + Math.round(wait / 1000) + 's until the next trade…', 'info');
                    await sleep(wait);
                }
            }
        }

        state.botRunning = false;
        el.builderRun.classList.remove('is-running');
        el.builderRunLabel.textContent = 'Run';
        el.runstateIc.textContent = '\u25B6';
        el.runstateIc.parentElement.classList.remove('is-running');
        el.runstateTitle.textContent = 'Bot stopped';
        el.runstateSub.textContent = 'Review the Transactions and Summary tabs.';
        botLog(
            'Bot stopped — ' + state.botStats.trades + ' trade' + (state.botStats.trades === 1 ? '' : 's') +
            ', ' + state.botStats.wins + ' win' + (state.botStats.wins === 1 ? '' : 's') +
            ', ' + state.botStats.losses + ' loss' + (state.botStats.losses === 1 ? '' : 'es') + '.',
            'info'
        );
        updateSummary();
        updateBuilderConn();
        setBuilderStatus('Bot stopped', 'Run finished.');
    }

    async function waitSettlement(balanceAfterBuy, settings) {
        const unitMs = settings.unit === 'm' ? 60000 : 2000;
        const maxWait = Math.max(12000, settings.duration * unitMs + 30000);
        const started = Date.now();
        let profit = 0;
        let settledAt = 0;
        while (state.botRunning && Date.now() - started < maxWait) {
            await sleep(2500);
            let bal;
            try {
                bal = await state.client.getBalance();
            } catch (e) {
                continue;
            }
            const cur = bal && bal.balance ? bal.balance.balance : null;
            if (cur !== null && Math.abs(cur - balanceAfterBuy) > 0.001) {
                profit = cur - balanceAfterBuy;
                settledAt = Date.now();
                break;
            }
        }
        return { profit: profit, settledAt: settledAt };
    }

    /* =========================================================
     * Event wiring
     * ========================================================= */
    function wireEvents() {
        el.navConnect.addEventListener('click', startOAuth);
        el.connectClose.addEventListener('click', closeModals);
        el.oauthBtn.addEventListener('click', startOAuth);
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

        $$('[data-bot]').forEach((btn) => {
            btn.addEventListener('click', () => openBotBuilder(btn.dataset.bot));
        });

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
        el.paletteSearch.addEventListener('input', () => renderPalette(el.paletteSearch.value));
        $$('#bot-builder [data-tab]').forEach((tab) => {
            tab.addEventListener('click', () => switchBuilderTab(tab.dataset.tab));
        });
        wireWorkspaceDrag();

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
        renderPalette();
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
