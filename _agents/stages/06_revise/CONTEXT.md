# Stage 06: Revise

## Purpose
Revise the draft based on the scores from stage 05. One stage, one revision pass. The human then re-runs stage 05 to re-score.

## Inputs
| File | Layer | Purpose |
|------|-------|---------|
| Latest draft from `../04_draft/output/` or own previous `output/` | 4 (working) | The draft to revise |
| Latest score from `../05_score/output/` | 4 (working) | Scores and flags to address |
| `_config/voice.md` | 3 (reference) | Author voice (<500 tokens) |
| `_config/writing-rules.md` | 3 (reference) | Mechanical rules (<800 tokens) |
| `_config/banned-words.md` | 3 (reference) | Kill list (<300 tokens) |

**Token budget:** ~1,600 tokens Layer 3 (same as stage 04).

## Process

Revise the draft addressing the score file's findings. Priority order:
1. Any TTNW test below 0.7 (highest tier first — Tier 1 before Tier 2 before Tier 3)
2. All banned-word violations
3. All throat-clearing and hedging flags
4. Cross-stage consistency issues from the Verify section
5. Any remaining style flags

**Do not over-revise.** The goal is targeted fixes to the identified problems, not a full rewrite. If F1 is 0.9 and E3 is 0.6, spend effort on E3 and leave F1 alone.

After revision, report what changed: which tests were targeted, what was cut/added/rewritten, expected impact on scores.

## Outputs
- `[topic-slug]-draft-vN+1.md` → `output/`

## Quality Checks (human review gate)
- Is the piece getting better or just getting different?
- Are you making the same edit you made last iteration? → **Edit-source signal.** Fix `_config/voice.md` or `_config/writing-rules.md`, not the draft.
- Ready to re-score (run stage 05 again)? Or ready to publish (skip to stage 07)?
