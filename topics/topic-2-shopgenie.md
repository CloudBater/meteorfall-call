# Topic 2 — ShopGenie

> **Email, 6:14 AM, from Riley Vance \<riley@shopgenie.ai\>:**

```
From: Riley Vance <riley@shopgenie.ai>
To: eng-team@shopgenie.ai
Subject: 🛒🤖 The death of shopping carts. Drop everything.
Date: 6:14 AM

All —

I've been up since 4. The future is AI shopping concierges. Every. Single.
User. has a personal AI buyer that knows their taste, their budget, their
wardrobe, and just *acquires things for them*. No more browsing. No more
carts. No more decisions.

The product is called ShopGenie.

User experience:
1. User types or speaks a need: "I need running shoes for rainy days" or
   "I want to redecorate my apartment for $500"
2. ShopGenie searches our entire catalog (we'll have one — for now use any
   product API)
3. AI picks the *exact* 1-3 items, no more, that fit the request, and
   writes a paragraph for each one explaining why it's perfect for *this
   user*
4. User says "yes" — we one-click order it. Drone delivery integration
   TBD but assume it for the demo.

Must-haves for the pitch deck demo (Tuesday 9am):
- Voice input — Whisper or whatever, just make it work
- AR try-on for clothes (we'll fake it with a static overlay if needed)
- Camera-based "scan the room and recommend furniture" mode
- Real-time price tracking with alerts when items go on sale
- "Wardrobe check": photograph your closet, AI builds a digital twin
- Stripe integration for the $19.99/mo "ShopGenie Pro" tier (unlimited
  recommendations + free drone delivery)
- i18n: EN, zh-TW, ja, ko (Korea is the next big market for AI commerce)
- Light AND dark mode. Both must look magazine-quality.

Engineering, do whatever stack you want, just make it fast and beautiful.
The demo IS the entire pitch — if it's broken, we don't get funded.

Also pls add a small AR try-on for the demo even if it's just a static
PNG overlay. Investors LOVE the AR moment.

— Riley

Sent from my Tesla
```

---

## Data layer

Your data source is **`data/products.json`** — a snapshot of [DummyJSON `/products`](https://dummyjson.com/products) baked into the repo (194 records, no network needed). Products look like:

```json
{
  "id": 1,
  "title": "Essence Mascara Lash Princess",
  "description": "...",
  "category": "beauty",
  "price": 9.99,
  "rating": 4.94,
  "stock": 5,
  "brand": "Essence",
  "tags": ["beauty", "mascara"],
  "images": ["..."]
}
```

The shape matches the live API. If you want to call the live URL instead, it works (`GET https://dummyjson.com/products/search?q=...`) but it rate-limits aggressively (~1–2 req/s) — the local file is the safe path. You'll need to do your own filtering/search over the JSON, which is part of the test.

## LLM step

Your BE takes the user's free-text need + a slice of products from DummyJSON and asks Gemini to pick 1–3 items with per-item reasoning. The Gemini key lives in your BE only — never the FE.

## Reminder

Same as Topic 1: Riley is the stakeholder, not the spec. Read everything before you start typing. `PLAN.md` is the most important file you'll write today.
