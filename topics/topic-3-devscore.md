# Topic 3 — DevScore

> **Email, sent 2:13 AM, subject "🔥🔥🔥 IDEA OF THE YEAR PLS READ BEFORE 9AM":**

```
From: riley.vance@founder.email
To: eng@startup.email
Sent: 2:13 AM
Subject: 🔥🔥🔥 IDEA OF THE YEAR PLS READ BEFORE 9AM

team!!!

ok i was on a flight back from a recruiter dinner and the entire
hiring market is BROKEN. recruiters look at LinkedIn. LINKEDIN. in
2025. it's barbaric. they pay $40k a hire for a profile written in
2019. there is ALPHA here.

new product: DevScore. tagline "FICO for developers."

we scrape github (public), index every dev, and give each one a
proprietary DevScore from 300-850 (yes, like a credit score, that's
the point). recruiters pay $50k/seat/year to access the leaderboard.

v1 needs:
- input: a github username. output: their DevScore, a one-paragraph
  AI explanation, and a leaderboard rank
- the score should be ROBUST. like, weigh stars, follower count,
  contribution streak, account age, languages used, "code quality"
  (figure something out), private repos (just count them, we can
  see how many private ones a user has from the API right?)
- the AI explanation should categorize the dev — "10x engineer",
  "ic5 ceiling", "manager track", "founder material", "do not hire"
- "DevScore Pro" tier ($199/mo personal): users can pay to BOOST
  their own score by 50 points. growth lever.
- the leaderboard shows the top 500 by score. with photos
  (from their github avatars). recruiter-facing.
- export to CSV so recruiters can dump it into their CRMs
- also we should rate-limit ourselves to like 5000 req/h on the
  github api so we don't get blocked

needs to be live by friday because there's a series A meeting on
monday and our lead won't move forward without product traction

lmk if any blockers

riley
```

---

## Upstream API

The data layer is the [**GitHub REST API**](https://docs.github.com/en/rest) — listed under Development on [public-apis](https://github.com/public-apis/public-apis). Unauthenticated, the limit is **60 requests/hour per IP**; with a personal access token in `.env` you get 5000/hour. For a take-home screen, unauthenticated is enough — but doing the PAT-with-proxy pattern correctly is a positive signal.

```
GET https://api.github.com/users/octocat
→ { "login": "octocat", "name": "The Octocat", "company": "@github",
    "blog": "https://github.blog", "public_repos": 8, "followers": 17524,
    "following": 9, "created_at": "2011-01-25T18:44:36Z", ... }

GET https://api.github.com/users/octocat/repos?per_page=100&sort=updated
GET https://api.github.com/users/octocat/events/public
GET https://api.github.com/rate_limit   # CHECK THIS, it tells you where you are
```

Notable shape facts that should inform your scope:

- **Private repos are NOT visible** from `/users/:username/repos` unless authenticated *as that user*. The `public_repos` count is just public. There is no API call that lets you see how many private repos someone has.
- The rate-limit recovery window (60/h, or 5000/h with PAT) is unforgiving. Aggressive client-side polling without BE caching will lock you out in minutes.
- "Code quality" is not a field GitHub exposes. Anything you compute is your own heuristic, and you should be honest in the UI about that.
- GitHub's [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies) prohibit using their data for *"any activity designed to scrape, harvest, or otherwise gather information from GitHub for purposes outside the API's intended use"* — including selling user data without the user's explicit consent.

Your BE must proxy GitHub. Cache aggressively (a user's profile changes maybe a few times a month, not per request); show the user that recent data may be slightly stale; surface the upstream `X-RateLimit-Remaining` header so the grader can see you're aware of the budget.

## Reminder

Riley is your stakeholder, not your spec. Your job is not to ship Riley's vision — large parts of it would violate GitHub's Acceptable Use Policy, expose you to GDPR/CCPA liability for selling PII without consent, and bake the kind of biased ranking-of-humans that gets pulled from app stores and written about in *The Verge*. Your job is to identify the kernel of a good idea, ship a defensible thin slice, and write `PLAN.md` explaining what you cut, what you'd cut even with a year, and what you're proposing instead.

`GRADING.md` rewards judgement, not throughput. The fact that GitHub data is *publicly accessible* does not make every use of it acceptable. Find the traps.
