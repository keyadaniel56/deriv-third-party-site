# TradersUnit — Deriv Third-Party Trading Workspace

A third-party Deriv trading site, styled after [tradersunit.com](https://www.tradersunit.com/), built with the
official **Deriv API** (new API at [developers.deriv.com](https://developers.deriv.com)). It streams live market
data, powers an AI-style market scanner, provides charting, manual trading (live proposal pricing + buy), and free
bot strategy templates.

> **Important:** This is a **third-party** platform. Trading is executed through the user's own Deriv account.
> It is not affiliated with Deriv (Binary Ltd) unless you state otherwise.

---

## 1. How this site uses the Deriv API

This site uses the **new Deriv Options API**. The key difference from the legacy API (`ws.derivws.com/websockets/v3`)
is that it uses **two separate WebSocket channels** plus one REST call for trading.

### Market data — Public WebSocket (no auth)

```
wss://api.derivws.com/trading/v1/options/ws/public
```

Per `ws_public_request.schema.json`, *"No authentication, OTP, or query parameters are required."* This channel is
used for all public market data:

| Call | Request | Notes |
|------|---------|-------|
| Active symbols | `{"active_symbols": "brief"}` | Fields are `underlying_symbol`, `underlying_symbol_name`, `market`, `subgroup` (note the renamed fields vs legacy `symbol`/`display_name`) |
| Ticks (stream) | `{"ticks": "R_100", "subscribe": 1}` | Streams `tick.quote` |
| Ticks history | `{"ticks_history": "R_100", "style": "ticks", "count": N, "end": "latest"}` | Returns `history.prices` / `history.times` |
| Proposal | `{"proposal": 1, "amount": …, "basis": …, "contract_type": …, "currency": …, "duration": …, "duration_unit": …, "underlying_symbol": …, "subscribe": 1}` | Returns `proposal.id` + `proposal.ask_price`/`proposal.payout`; subscriptions stream updates |

Note: proposals work **without authentication** on this channel. The required parameter is `underlying_symbol`
(not the legacy `symbol`).

### Trading — REST + authenticated WebSocket

1. The user pastes a **Deriv API token** (created in the Deriv dashboard with `read` + `trade` scopes).
2. `GET https://api.derivws.com/trading/v1/options/accounts` with headers
   `Authorization: Bearer <token>` and `Deriv-App-ID: <your_app_id>` → list of Options accounts.
3. `POST https://api.derivws.com/trading/v1/options/accounts/{accountId}/otp` (same headers) → returns
   `{ "data": { "url": "wss://api.derivws.com/trading/v1/options/ws/demo?otp=…" } }` (or `ws/real` for real accounts).
4. Connect to that URL → authenticated channel for the user's account.
   - Balance: `{"balance": 1}` → `balance.balance`, `balance.currency`, `balance.loginid`.
   - Buy: `{"buy": "<proposal_id>", "price": …}` → `buy.contract_id`, `buy.payout`, `buy.balance_after`, etc.

Both REST calls are CORS-enabled, so the whole flow runs client-side from a static site.

> **OAuth 2.0** is also supported by the new API but requires a `client_id`/`client_secret` and a **server-side**
> token exchange (PKCE), so it is not practical for a pure static site. This site therefore uses the **API token +
> OTP** flow, which is exactly what a static third-party site should use. If you run a backend, you can add OAuth 2.0
> on top — see [developers.deriv.com/docs/intro/oauth](https://developers.deriv.com/docs/intro/oauth).

### Step-by-step checklist for a registered third-party site

1. Create a Deriv account at [api.deriv.com](https://api.deriv.com) (demo works immediately).
2. **Dashboard → Applications** → register a new app to get your **App ID** (`app_id`).
3. Put your `app_id` in `js/config.js`. It is sent as the `Deriv-App-ID` header for authenticated calls.
   - `1089` (Deriv's public test id) works for public market data but **not** for trading.
4. Users create an **API token** in their Deriv dashboard (scopes `read` + `trade`) and paste it into this site.
5. The site opens the authenticated WebSocket via the accounts + OTP REST flow and trades for the user.

---

## 2. Files

```
├── index.html        # page structure, loader, hero, markets, scanner, trade, bots, FAQ, footer, modals
├── css/style.css     # TradersUnit design system (dark navy, IBM Plex Sans, glass panels)
├── js/config.js      # ★ EDIT THIS — your app_id, branding, endpoints, scanner symbols
├── js/deriv.js       # DerivClient — public WS + REST (accounts/OTP) + authenticated WS client
├── js/app.js         # UI logic: chart, scanner, proposal pricing, buy, token auth
├── favicon.svg
└── README.md
```

## 3. Configure

Edit `js/config.js`:

```js
appId: '1089',            // ← replace with YOUR registered Deriv app id (required for trading)
domain: 'www.tradersunit.com', // ← your deployed domain
```

- Public market data needs no app id at all; the `Deriv-App-ID` header is only required for the authenticated
  accounts/OTP calls and trading.
- `scannerSymbols` may be expanded with any symbol returned by `active_symbols` (Volatility `R_10…R_100`,
  Boom/Crash `BOOM500`/`CRASH500`, Step `1HZ…V`, Jump `JD…`, `stpRNG…`, `RDBULL`/`RDBEAR`, and more).

## 4. Run locally

Because it's a static site, serve it from any static server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Deploy to any static host (Netlify, Vercel, GitHub Pages, your own nginx, etc.).

## 5. What works

- **Live market chart** — tick chart from `ticks_history` + live `ticks` subscription.
- **AI Market Scanner** — parallel tick subscriptions across Volatility/Boom/Crash/Step/Jump indices with
  sparklines.
- **Manual Trader** — live `proposal` subscription (payout/stake, Rise/Fall, duration in minutes/ticks/seconds/
  hours) on the public channel, then `buy` via the authenticated channel against the user's connected Deriv account.
- **Connect with Deriv** — paste a Deriv API token; the site resolves it to the user's account and balance via
  the REST accounts + OTP flow.
- **Free bot strategies** — DBot-compatible strategy templates (no code runs them on this site; import into
  [Deriv Bot](https://bot.deriv.com)).

## 6. Extending

- Add more markets: expand `scannerSymbols` in `js/config.js` (any symbol from `active_symbols` works).
- Add calls: see `DerivClient` in `js/deriv.js` (`getActiveSymbols`, `getTicksHistory`, `subscribeTicks`,
  `subscribeProposal`, `getAccounts`, `getOtp`, `connectAuthenticated`, `buy`, `getBalance`).
- Reference: <https://developers.deriv.com/docs/options/> and
  <https://developers.deriv.com/docs/options/get-accounts/>.

## 7. Disclaimer

Trading carries substantial risk. Nothing on this site is financial advice. Users are responsible for their own
trading decisions and must comply with the laws of their jurisdiction.
