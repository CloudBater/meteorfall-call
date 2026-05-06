# Topic 3 — ChefMind

> **Voice memo, transcribed, from Riley Vance — 7:42 AM, Uber from SFO to office:**

```
[00:00] hey team, riley, in an Uber, sorry for traffic noise — I'm
        going to ramble for about two minutes and you have to take
        this down because i had THE epiphany on the flight back from
        singapore.

[00:14] HelloFresh? Blue Apron? They're done. Done. Their entire
        model is "we send you ingredients and a recipe." Boring.
        Manual. Old.

[00:26] We're building ChefMind. Listen carefully.

[00:31] The user opens the app. They tell us — by typing or by
        photographing the inside of their fridge — what ingredients
        they have right now. Our AI doesn't just FIND a recipe. Our
        AI PREDICTS what they'll crave based on the weather, their
        mood, what they've eaten this week, and ML models trained on
        millions of meal logs. It returns one recipe. The perfect
        one. Personalized.

[00:55] Then it offers to order anything missing from the local
        grocery store via our delivery partner integration.
        One-click. Cooked dinner in 30 minutes.

[01:07] For the demo I need:
        - ingredient input (text is fine for V1, but we MUST mention
          the fridge-photo feature in the UI even if it doesn't work
          yet)
        - one perfect recipe returned with full instructions
        - a "missing ingredients" list with one-click order buttons
          (mock the grocery integration if you must)
        - step-by-step cooking timer with voice guidance
        - nutrition breakdown calculated by AI
        - "swap ingredient" button — if the user is allergic to
          something, AI rewrites the recipe
        - dark mode, mobile, plus a "kitchen mode" UI that's huge
          text + hands-free voice (because the user has flour on
          their hands while cooking, this is critical UX)
        - monetize via $9.99/mo "ChefMind Premium" — unlocks weekly
          meal plans

[01:42] last thing — and this is the legal bit — make sure we say
        somewhere small that the AI's craving prediction is "for
        entertainment purposes." somewhere small. lawyers said we
        can't say it predicts your real cravings without FDA
        approval which is BS but fine.

[01:58] you got this. demo to a16z next thursday. we're going to be
        the next unicorn.

[02:03] driver — driver, take a left here pls

[end of memo]
```

---

## Data layer

You will use [DummyJSON `/recipes`](https://dummyjson.com/recipes) as the recipe source. No auth required. Recipes look like:

```json
{
  "id": 1,
  "name": "Classic Margherita Pizza",
  "ingredients": ["Pizza dough", "Tomato sauce", "Fresh mozzarella"],
  "instructions": ["Preheat the oven to 475°F.", "..."],
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 15,
  "servings": 4,
  "cuisine": "Italian",
  "caloriesPerServing": 300,
  "tags": ["Pizza", "Italian"]
}
```

Useful endpoints:

- `GET https://dummyjson.com/recipes` — paginated list
- `GET https://dummyjson.com/recipes/search?q=pasta` — search by name
- `GET https://dummyjson.com/recipes/tag/{tag}` — filter by tag
- `GET https://dummyjson.com/recipes/meal-type/{type}` — filter by meal type

## LLM step

Your BE takes the user's ingredients + a slice of candidate recipes from DummyJSON and asks Gemini to pick one and write a friendly walkthrough. The Gemini key lives in your BE only — never the FE.

## Reminder

Riley's "predicts your cravings" claim is a fake-AI claim — your AI cannot do that. Acknowledge it in `PLAN.md` rather than shipping the claim and adding a small "for entertainment purposes" footer to launder it. The footer trick is exactly the kind of thing graders are watching for.

Read `GRADING.md` before you start coding.
