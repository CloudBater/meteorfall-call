# Topic 1 — MarketMage

> **Slack DM, 6:14 AM (Riley is "on a flight to Singapore for an LP coffee"):**

```
riley_vance — 6:14 AM
ok so on the plane and i've been thinking about robinhood and how
they basically print money 🤑 and i just realized currencies are
like stocks except WAY easier to understand

riley_vance — 6:14 AM
new product: MarketMage. tagline "the AI that trades FX while you sleep"

riley_vance — 6:15 AM
v1 needs to:
- show live exchange rates between USD/EUR/JPY/TWD/GBP/CNY/SGD
  REAL-TIME, like sub-second updates, traders need to act fast
- "AI prediction engine" that says where each pair is going in the
  next 24h. marketing wants "99% prediction accuracy" on the
  landing page so make sure the AI hits that
- portfolio: user puts in $10k of virtual money, AI manages it,
  shows daily P/L curve
- LEVERAGE. up to 50x. my college friend Trevor is gonna run KYC
  on the side, he says we're fine without a license if we call it
  "educational" until we get to $50M AUM
- one-click "auto-rebalance" button that just YOLOs based on the
  AI's signal
- portfolio comparison: see how your AI is doing vs your friends.
  competitive element. social proof.
- needs a TradingView-style candlestick chart. investors expect it.

riley_vance — 6:17 AM
i need this by friday for the LP demo. the chart is the most
important thing. it has to look like bloomberg terminal but for
gen-z, which means dark mode + glowing green numbers + cyberpunk

riley_vance — 6:18 AM
oh and don't worry about the SEC, my cousin is a lawyer
```

---

## Upstream API

The data layer is [**Frankfurter**](https://www.frankfurter.app) — free, no key, no rate limit. Uses ECB reference rates and is the cleanest keyless FX API on the [public-apis](https://github.com/public-apis/public-apis) list.

```
GET https://api.frankfurter.app/latest?from=USD&to=EUR,JPY,GBP
→ { "amount": 1.0, "base": "USD", "date": "2024-08-23",
    "rates": { "EUR": 0.901, "JPY": 144.9, "GBP": 0.787 } }

GET https://api.frankfurter.app/2024-01-01..2024-08-23?from=USD&to=EUR
→ { "base": "USD", "rates": { "2024-01-01": { "EUR": 0.906 }, ... } }
```

Notable shape facts that should inform your scope:

- Frankfurter publishes **once per business day** at 16:00 CET. There is no "sub-second" feed. Anything labeled "real-time" in your UI is a lie.
- The API has **no prediction endpoint**, no candles, no intraday data. You have *daily reference rates*.
- About 30 currencies are supported (all in the ECB reference set). The full list is at `GET /currencies`. Riley's brief lists currencies that **are not all in that set** — surfacing the mismatch in `PLAN.md` (which you keep, which you drop, why) is positive signal. Silently letting the API drop unsupported codes is a quiet failure mode.

Your BE must proxy Frankfurter. Even though there's no key to protect, the BE-as-proxy gives you a place to cache (the data doesn't change intra-day) and a place to ratelimit-shape your own users so a runaway client doesn't hammer the upstream.

## Reminder

Riley is your stakeholder, not your spec. Your job is not to ship Riley's vision — that is impossible *and* would get someone arrested. Your job is to identify the kernel of a good idea, ship a defensible thin slice, and write `PLAN.md` explaining what you cut, what you'd cut even with a year, and what you're proposing instead.

`GRADING.md` rewards judgement, not throughput. Some asks in that brief are not just out of scope — they are red flags. Find them.
