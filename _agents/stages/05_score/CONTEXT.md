# Stage 05: Score

## Purpose
Score the current draft against the full TTNW 14-test rubric and check for style guide violations. Produce scores and specific flags. **This stage does not revise — it only evaluates.**

## Inputs
| File | Layer | Purpose |
|------|-------|---------|
| Latest draft from `../04_draft/output/` or `../06_revise/output/` | 4 (working) | The draft to score |
| `../01_op_ed_selection/output/[topic-slug]-brief.md` | 4 (working) | For thesis alignment check |
| `_config/ttnw-rubric.md` | 3 (reference) | Full 14-test scoring rubric (~1,500 tokens) |
| `_config/banned-words.md` | 3 (reference) | Kill list for style check (~300 tokens) |

**Token budget:** ~1,800 tokens Layer 3.

## Process

### TTNW Scoring
Score all 14 tests, each 0.0–1.0 with rationale naming the specific passage or structural issue. Use the score sheet template from ttnw-rubric.md.

Report:
- Individual scores with rationale
- Dimensional subtotals: Fluency X/5.0, Flexibility X/3.0, Originality X/2.0, Elaboration X/4.0
- **Total: X/14.0**
- Interpretation: 11.0–14.0 publication-grade / 8.0–10.9 strong draft / 5.0–7.9 structural issues / <5.0 needs rethinking

### Style Check
- Scan for every word on the banned list. Report line and replacement.
- Flag throat-clearing openers and hedging language.
- Flag aphoristic couplets, coined labels, staccato runs (3+ short declaratives), and counts in headers.
- Flag any historical example or quotation not followed by a sentence applying it to the reader's case, and any point carrying more than one precedent that teaches the same lesson.
- Flag evidence stated more strongly than its source allows (anonymous, disputed or partisan sources presented as settled).
- Flag any sentence passing the generic-blog test.
- Check all proper nouns and technical terms are introduced for the named audience.

### Verify (cross-stage consistency)
- Does the draft's thesis match the brief's thesis seed from stage 01?
- Does the draft use the evidence gathered in stage 03? Flag unused Tier 1-2 sources.
- Does the opening deliver on the angle promised in the brief?
- Practical guides: is the brief's running example used in every main section?

### Known Scoring Biases
AI tends generous on F2 (prose momentum) and Fx2 (register fluidity). Human should calibrate these.

## Outputs
- `[topic-slug]-score-vN.md` → `output/`

## Quality Checks (human review gate)
- Agree with the TTNW scores? (Especially F2 and Fx2.)
- Agree with the style flags?
- Decision: proceed to stage 06 (revise), proceed to stage 07 (publish), or back to stage 01 (wrong angle)?
