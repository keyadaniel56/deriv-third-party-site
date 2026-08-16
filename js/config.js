/* =========================================================================
 * TradersUnit — site & Deriv API configuration
 * -------------------------------------------------------------------------
 * To turn this into a fully registered Deriv third-party site (new API,
 * see https://developers.deriv.com/docs/intro/api-overview/):
 *   1. Create a Deriv account and register an application.
 *   2. Copy the generated App ID into `appId` below. It is sent as the
 *      `Deriv-App-ID` header and is required for authenticated trading
 *      (balance, buy) via the REST accounts + OTP flow.
 *   3. Public market data (symbols, ticks, ticks_history, proposals) is
 *      available on `publicWsEndpoint` with NO authentication.
 *   4. Traders connect by pasting a Deriv API token (scopes: read, trade)
 *      from the Deriv dashboard.
 *
 * appId 1089 is Deriv's public test app id — it works for public market
 * data, but authenticated trading requires your own registered app id.
 * =========================================================================
 */
window.SITE_CONFIG = {
    siteName: 'TradersUnit',
    tagline: 'Deriv trading workspace for disciplined execution',
    domain: 'www.tradersunit.com',

    /* Your registered Deriv application id. */
    appId: '1089',

    /* Brand / theme tokens (also used by the in-page SEO bootstrap). */
    primaryColor: '#062E78',
    secondaryColor: '#020B24',
    accentColor: '#3D7BFF',
    accentSoft: '#8FB6FF',
    upColor: '#2BB673',
    downColor: '#FF444F',
    faviconText: 'TU',

    /* Deriv API endpoints (new API — see https://developers.deriv.com/docs/intro/api-overview/). */
    publicWsEndpoint: 'wss://api.derivws.com/trading/v1/options/ws/public',
    restBaseUrl: 'https://api.derivws.com',

    /* Language code for Deriv API responses. */
    lang: 'EN',

    /* Keep-alive ping interval in ms (session times out after 2 minutes). */
    keepAliveMs: 30000,

    /* Markets shown in the scanner and ticker strip. */
    scannerSymbols: [
        { symbol: 'R_10',    name: 'Volatility 10 Index',  tag: '10%' },
        { symbol: 'R_25',    name: 'Volatility 25 Index',  tag: '25%' },
        { symbol: 'R_50',    name: 'Volatility 50 Index',  tag: '50%' },
        { symbol: 'R_75',    name: 'Volatility 75 Index',  tag: '75%' },
        { symbol: 'R_100',   name: 'Volatility 100 Index', tag: '100%' },
        { symbol: 'BOOM500', name: 'Boom 500 Index',       tag: 'Jump up' },
        { symbol: 'CRASH500', name: 'Crash 500 Index',     tag: 'Jump down' },
        { symbol: '1HZ100V', name: 'Step Index',           tag: '100%' },
    ],

    /* Default market loaded on the chart. */
    defaultSymbol: 'R_100',
};
