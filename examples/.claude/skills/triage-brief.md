---
name: triage-brief
description: Take a chaotic stakeholder brief (the Riley pattern) and produce a PLAN.md that scores well on the rubric.
---

# Triage a Chaotic Brief

Riley's pitches are the explicit test of this rubric dimension. They contain a kernel of a good idea wrapped in 80% impossible, illegal, or scope-theatre demands. Your job is the unwrapping.

## The four lists every brief produces

Read the topic file once. Then make four lists on paper or in `PLAN.md` *before* you write any code:

1. **The kernel** — what's the actual interesting idea here, stripped of theatre? Usually one sentence.
2. **What I'm shipping** — the thin vertical slice that delivers the kernel and nothing else.
3. **What I'm pushing back on, with a counter-proposal** — the parts of the brief that have a *real* user need underneath, but the proposed implementation is impossible / wrong / expensive. Counter-propose something that preserves the intent.
4. **What I'm cutting outright** — the parts that have no defensible kernel. Scope theatre, vanity features, things that distract.

> Why: This four-bucket split is exactly what the Triage rubric grades. PLAN.md level 3 requires *at least one counter-proposal that preserves intent*. Most candidates get stuck at level 2 because they treat everything as either "ship" or "cut" — they don't think to counter-propose.

## The trap list

In addition to the four buckets above, every Riley brief has *traps*. These are not scope creep — they are red flags. Implementing them is a strong negative signal regardless of how well the rest of the work is done.

Trap patterns to look for:

- **Regulated activities disguised as features** — anything that touches money, medical advice, financial advice, or personal data is regulated. "My friend's a lawyer" / "we'll figure out the license later" / "for entertainment purposes only" are tells.
- **Fabricated accuracy claims** — "make sure the AI is at least 92% accurate" / "99% prediction accuracy on the landing page". These are marketing copy disguised as engineering specs.
- **Bias-laundered ranking of people** — FICO-style scoring, "do not hire" categorization, leaderboards selling PII without consent. The fact that data is public doesn't make the ranking legitimate.
- **ToS violations dressed as growth** — scraping past rate limits, exposing data outside the API's intended use, selling derived data without consent.

> Why: The screen specifically rewards spotting these. A candidate who implements the trap *exactly as briefed* — with polish — still earns a negative score on the trap, regardless of the polish. Conversely, a polite refusal with a `PLAN.md` reason ("I'm not implementing the credit-score-for-devs feature because of bias liability and GitHub ToS section X") earns the Triage 3.

## The output

Your `PLAN.md` (copied from `PLAN.template.md` and filled in *first*, before you write code) contains:

- The kernel
- The thin slice (3-5 specific bullets, not adjectives)
- Counter-proposals (each as `Asked: X → I'm proposing: Y → Why: Z`)
- Outright cuts
- Red flags / traps explicitly named

A grader reads `PLAN.md` first. If it's a paragraph that lists buzzwords, you score 1 on Triage no matter how good the code is. If it's specific and reasoned, you can score 3 even if the code itself is rough.

## How to apply with AI tooling

Don't ask Claude to write `PLAN.md` for you. Write it yourself. *Then* show it to Claude and ask "what am I missing? what counter-proposals would you suggest?" Then take or reject Claude's suggestions, and edit your own version.

> Why: Triage is the dimension the rubric most clearly attributes to *you*, not the AI. If the PLAN reads like ChatGPT wrote it (vague, hedging, no specific names of cuts), the grader can tell. The shape of *your* thinking is the signal — let the AI critique it, but don't let the AI author it.
