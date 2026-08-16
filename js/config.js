/* =========================================================================
 * TradersUnit — site & Deriv API configuration
 * -------------------------------------------------------------------------
 * To turn this into a fully registered Deriv third-party site (new API,
 * see https://developers.deriv.com/docs/intro/api-overview/):
 *   1. Create a Deriv account and register an application.
 *   2. Register an OAuth2 app to obtain a `client_id` and set `oauth2ClientId`
 *      below (required for the "Connect with Deriv" OAuth sign-in button).
 *   3. Add your redirect URI to the app; set `oauthRedirectUri` if it differs
 *      from the deployed domain.
 *   4. `appId` is sent as the `Deriv-App-ID` header for authenticated trading
 *      (balance, buy) via the REST accounts + OTP flow.
 *   5. Public market data (symbols, ticks, ticks_history, proposals) is
 *      available on `publicWsEndpoint` with NO authentication.
 * =========================================================================
 */
window.SITE_CONFIG = {
    siteName: 'TradersUnit',
    tagline: 'Deriv trading workspace for disciplined execution',
    domain: 'www.tradersunit.com',

    /* Your registered Deriv application id (new API) — sent as the
     * `Deriv-App-ID` header for authenticated trading. */
    appId: '33Kfcrd5ytoiemPIb4wIj',

    /* OAuth 2.0 (new API) — used when the user clicks "Connect with Deriv".
     * Register an OAuth2 app in the Deriv dashboard to get your client_id,
     * and add your redirect URI (your domain) to it.
     * See https://developers.deriv.com/docs/intro/oauth/ */
    oauth2ClientId: '33Kfcrd5ytoiemPIb4wIj', // ← REQUIRED for OAuth sign-in, e.g. 'app12345'
    oauthRedirectUri: '', // ← leave empty to use the current site URL; must match the registered URI
    oauthScopes: 'trade',
    oauthAuthUrl: 'https://auth.deriv.com/oauth2/auth',
    oauthTokenUrl: 'https://auth.deriv.com/oauth2/token',

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
