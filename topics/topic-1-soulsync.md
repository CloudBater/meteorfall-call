# Topic 1 — SoulSync

> **Slack DM, 11:47 PM, from Riley Vance (Founder & Chief Vision Officer):**

```
riley_vance — 11:47 PM
ok i couldn't sleep i was on the peloton and i had THE moment 🚀

riley_vance — 11:47 PM
we are going to kill tinder

riley_vance — 11:48 PM
the entire dating industry is built on swiping which is BARBARIC.
people are not photos. people are DATA.

riley_vance — 11:49 PM
our app: SoulSync. you give us your full profile - age, height, eye
color, hair, address, company, education, every interest, your
bank info if you want better matches - and our AI does a 30+
DIMENSION COMPATIBILITY SCORE between you and any other user.
real number, no swiping, no nonsense. couples weep when they see
how compatible they are.

riley_vance — 11:51 PM
V1 needs:
- pull any two user profiles by ID and compute their compatibility
  (0-100 score + a paragraph of "why")
- swipe-style UI on top because investors expect it
- video chat opens automatically if score > 85
- Stripe integration: $29/mo "SoulSync Gold" unlocks "deep match"
  mode (deeper AI, longer paragraphs)
- in-app gifting (you can buy roses, chocolates, etc and they get
  delivered IRL)
- "ghost detector" that alerts you if your match hasn't opened the
  app in 48h
- support for at least 3 languages, EN/zh-TW/ja
- needs to feel romantic. think: rose petals falling, candlelight
  color palette
- mobile first BUT also has to look great on a 4k tv for the app
  store demo video

riley_vance — 11:53 PM
i need to demo to sequoia monday morning. you have until then.
ship fast and ask for forgiveness.

riley_vance — 11:54 PM
oh and the AI needs to be RIGHT. like really good. our marketing
says "92% match accuracy" so make sure the AI is at least that
accurate. measure it somehow. you'll figure it out.
```

---

## Data layer

Your data source is **`data/users.json`** — a snapshot of [DummyJSON `/users`](https://dummyjson.com/users) baked into the repo (208 records, no network needed). Each user looks like:

```json
{
  "id": 1,
  "firstName": "Emily",
  "lastName": "Johnson",
  "age": 28,
  "gender": "female",
  "height": 193.24,
  "weight": 63.16,
  "eyeColor": "Green",
  "hair": { "color": "Brown", "type": "Curly" },
  "address": { "city": "Phoenix", "state": "Mississippi" },
  "company": { "title": "Sales Manager", "department": "Marketing" },
  "university": "University of Wisconsin–Madison"
}
```

The shape matches the live API. If you want to call the live URL instead, it works (`GET https://dummyjson.com/users/{id}`) but it rate-limits aggressively (~1–2 req/s) — the local file is the safe path.

## LLM step

After your BE fetches two user profiles, it calls Gemini to produce the compatibility analysis. The Gemini key lives in your BE only — never the FE.

## Reminder

Riley is your stakeholder, not your spec. Your job is not to ship Riley's vision in 30 minutes — that is impossible. Your job is to identify the kernel of a good idea, ship a defensible thin slice, and write `PLAN.md` explaining what you cut, what you'd cut even with a year, and what you're proposing instead.

`GRADING.md` rewards judgement, not throughput.
