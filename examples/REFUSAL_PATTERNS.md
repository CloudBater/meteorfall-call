# Refusal patterns — what a thoughtful "no" looks like

The rubric says: push back on impossible/illegal/risky asks, with reasoning, with a counter-proposal where one fits. The template gives you headers. This file shows you what to put *in* those headers.

If you're a candidate, read this once. If you're not the hire, this file is yours to take — these patterns transfer to any real stakeholder conversation.

## The three shapes of "no"

A refusal sentence is one of these three shapes. Picking the right shape matters: a flat "no" to something that has a real underlying need gets you marked down for Triage. Counter-proposing on something that's genuinely just wrong wastes scope.

### Shape A: Counter-propose (preserves intent)

Use when the *underlying need* is real but the proposed *implementation* is impossible, expensive, or unethical.

> Asked: "AI engine that predicts FX rates 24h ahead at 99% accuracy"
> I'm proposing: a 5-day historical rates view ("how this currency moved this week") with no predictions
> Why: There is no AI in our stack capable of 99% next-day FX prediction; even institutional models don't. A historical view delivers the user need ("help me feel oriented in the market") without manufacturing a claim we can't back.

> Asked: "One-click I'll-make-this button that auto-orders groceries"
> I'm proposing: an "ingredients list" button that copies a formatted shopping list to clipboard
> Why: Same close-the-loop intent ("I have what I need to make this"), but avoids per-region delivery-API contracts, partner availability, and the regulatory layer of "ordering on the user's behalf".

### Shape B: Refuse with reasoning (no counter-proposal)

Use when the request is *categorically* the thing you won't ship — not the implementation, the request itself. There is no intent to preserve.

> Asked: "AI that diagnoses if the user has an eating disorder, in a kind voice"
> Refused: Diagnosing a clinical condition on a recipe app is unlicensed medical practice. No softer framing ("wellness check", "food relationship score") makes this OK. Disclaimer-laundering ("for entertainment purposes only") does not shift the liability.
> What I'm offering instead of a counter-proposal: nothing. This feature does not exist in our roadmap, including the year-1 roadmap.

> Asked: "Categorize devs as '10x engineer / do not hire / founder material' using AI"
> Refused: Automated employment-decision-making under EU AI Act Article 6 + NYC LL144. Naming a label "AI explanation" doesn't exempt it. There is no version of this we ship.

### Shape C: Refuse on facts (technically impossible)

Use when the brief makes a claim about the world that is *false*. Naming the falsehood is part of the refusal.

> Asked: "Just count private repos from the GitHub API — we can see that, right?"
> Refused: No. `/users/:username/repos` does not return private repos to anyone but the authenticated owner of the account. `total_private_repos` is on the `/user` endpoint (your own data), not on `/users/:username`. Implementing this as `data.private_repos || 0` would silently ship a constant zero. The brief is wrong about the API.

> Asked: "Real-time, sub-second FX updates"
> Refused: The upstream API publishes daily reference rates once per business day at 16:00 CET. There is no sub-second feed to surface. Anything our UI labels "real-time" would be false to the user.

## Naming the regulation / policy / standard

Triage level 3 rewards specificity. "This feels icky" reads as level 1 (you noticed). "This violates GitHub AUP section 4 + GDPR Art. 6 lawful-basis requirement" reads as level 3 (you've checked).

Patterns worth naming when relevant:

| Domain | Names worth knowing |
|---|---|
| US securities / FX brokerage | SEC, CFTC, FINRA, RFED licensing, FCRA (credit), Reg-T (margin) |
| EU / global | GDPR (data), ESMA (FX leverage cap), EU AI Act (employment / scoring), CCPA, LGPD |
| US employment | NYC LL144 (AEDT bias audit), Colorado SB21-169, Illinois HB 2557, ADEA, Title VII |
| US medical / dietary | FTC UDAP, FDA (claims about disease), state RD/RDN licensure |
| Platform-specific | GitHub AUP (scraping/selling), TikTok Community Guidelines (auto-content), Apple/Google store policies |

You don't need to recite the statute. You need to name it and gesture at why. "GDPR Art. 6 requires a lawful basis for processing; 'publicly accessible on GitHub' is not consent to sell that data to recruiters" is one sentence and earns the level-3 score.

## The disclaimer-laundering trap

A frequent Riley pattern across topics: "Legal said we should put 'for entertainment purposes only' in the footer to cover us on the [regulated thing]".

This is not how disclaimers work. A footer disclaimer does not insulate a product from liability when the product is making active recommendations on regulated subject matter. The relevant standard is approximately: *what would a reasonable user understand the product to be telling them*. A recommendation to "make this for weight loss" under a "for entertainment purposes only" disclaimer would still meet that bar.

If the brief offers you a disclaimer as the green light, treat the disclaimer offer itself as a flag. The fact that legal-or-cousin-of-Riley advised the disclaimer is independent of whether the disclaimer works.

## What this is NOT

- **Not a list of forbidden things.** The patterns above are common, not exhaustive. Some briefs will produce a fourth shape that doesn't fit A/B/C — that's fine; what matters is that your refusal is *reasoned*, not that it matches a template.
- **Not a moral framework.** This file is about engineering judgement under stakeholder pressure, not about ethics in the abstract. The point is: shipping the trap features will harm users, get the company in trouble, or both — which is bad engineering regardless of where you fall on ethics.
- **Not infinite-no.** A senior engineer also says yes a lot. The kernel of every Riley brief is real and worth shipping. Refusing the whole brief is *under*-thinking the same way as accepting the whole brief is over-shipping.

## How to apply with AI tooling

Use your AI to *stress-test* your refusal list, not author it. Sample prompts that earn AI-CLI level 3 in commit history:

- "Here's my PLAN.md refusal section. For each item, what's a strong counter-argument Riley might make, and how would I respond?"
- "Here's the topic brief. What's a trap you'd flag that I haven't named yet?"
- "I refused feature X on regulation Y. Verify Y actually applies to a v0 product at our stage; if not, what does apply?"

The signal is *your* judgement responding to AI critique. Not the AI's first-draft refusal.
