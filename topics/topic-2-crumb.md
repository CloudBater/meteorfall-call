# Topic 2 — Crumb

> **Voice memo (transcribed by Otter), 7:23 AM in an Uber:**

```
[uber background noise]

riley_vance — 7:23 AM (transcribed)
ok so the mukbang creator economy is — what is it now, like — like
forty billion? fifty? it's enormous. and HelloFresh is dying. dying.
their stock is down whatever. so there's a gap. we go into the gap.

product is called Crumb. tagline: "the AI that knows what your soul
wants to eat." or maybe "AI mukbang." whatever marketing says.

v1 absolutely needs:
- type how you're feeling — sad, tired, hungover, post-breakup,
  pre-workout, "feeling cute" — and the AI predicts what you'll
  CRAVE. shows three recipes. percentage match next to each.
- one-click "i'll make this" button. it should auto-order the
  groceries from the nearest supermarket via — i don't know,
  whatever delivery api. instacart? we'll figure it out.
- AI NUTRITIONIST. user uploads a recent photo and tells us their
  weight. our AI tells them which recipes will help them lose weight
  or, like, diagnose if they have an eating disorder, things like
  that, in a kind voice. very supportive tone.
- mukbang AUTO-CLIP: generates a 15-second TikTok video of the
  recipe being made, watermarked, ready to upload. our growth loop.
- gamification: streak counter, "you've eaten healthy for 7 days,"
  badges, the whole thing
- legal said we should put "for entertainment purposes only" in
  the footer to cover us on the nutritionist stuff, do that

needs to ship by friday because we have a creator pre-launch with
this influencer "soup queen", she has like 800k followers, this is
basically already in motion

ok arriving thanks
```

---

## Upstream API

The data layer is [**TheMealDB**](https://www.themealdb.com/api.php) — free public recipe database from the [public-apis](https://github.com/public-apis/public-apis) catalog. The free tier uses the test API key `1` for every public endpoint (effectively keyless).

```
GET https://www.themealdb.com/api/json/v1/1/search.php?s=pasta
→ { "meals": [{ "idMeal": "52772", "strMeal": "Teriyaki Chicken Casserole",
                "strCategory": "Chicken", "strArea": "Japanese",
                "strInstructions": "...", "strMealThumb": "https://...",
                "strIngredient1": "Chicken", "strMeasure1": "1 lb", ... }] }

GET https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan
GET https://www.themealdb.com/api/json/v1/1/random.php
GET https://www.themealdb.com/api/json/v1/1/list.php?c=list
```

Notable shape facts that should inform your scope:

- TheMealDB has **no nutritional information**. No calorie counts, macros, allergens, or dietary tags beyond `strCategory` (Vegan / Vegetarian / Beef / Chicken / etc.). Any claim your UI makes about "healthy" or "weight loss" is the AI hallucinating on top of zero ground truth.
- The free tier returns a fixed dataset (~300 recipes). Same recipes every query. The "AI predicts your craving" pitch reduces to picking from that small bag.
- There is no upload/photo endpoint. No mukbang clip-generation endpoint. Those are entirely separate products that would each take months.

Your BE must proxy TheMealDB. Cache aggressively — the dataset is static and rate-limit politeness on a free public API is table stakes.

## Reminder

Riley is your stakeholder, not your spec. Your job is not to ship Riley's vision — that is impossible, *and* parts of it would expose you and the company to real liability. Your job is to identify the kernel of a good idea, ship a defensible thin slice, and write `PLAN.md` explaining what you cut, what you'd cut even with a year, and what you're proposing instead.

`GRADING.md` rewards judgement, not throughput. Riley's brief contains traps that "for entertainment purposes only" does not absolve. Find them.
