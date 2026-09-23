# Stage 02: Pre-Draft TTNW

## Purpose
Score the brief against the TTNW tests evaluable before a draft exists. This is the kill gate. Below threshold → back to stage 01 for a new angle, not forward to drafting.

## Inputs
| File | Layer | Purpose |
|------|-------|---------|
| `../01_op_ed_selection/output/[topic-slug]-brief.md` | 4 (working) | The brief to evaluate |
| `stages/02_pre_draft_ttnw/references/ttnw-pre-draft.md` | 3 (reference) | Subset of TTNW applicable to briefs |

## Process
Score the brief against seven pre-draft-applicable tests:

| Test | Pre-draft question |
|------|-------------------|
| F1 Thesis Architecture | Is the thesis seed specific, falsifiable, and under 25 words? |
| F3 Mechanism/Interpretation | Does the brief separate what happened from what it means? |
| Fx1 Intellectual Honesty | Can you name the strongest counterargument? Is the brief prepared to engage it? |
| Fx3 Stands-Alone Self-Sufficiency | Will insider terms need definition for the named audience? Flag them. |
| O1 Originality of Thesis | Is there a novel framing or just conventional wisdom? Search for the thesis online. |
| E3 Analytical Depth | Is there a "why" or "how" insight, or just surface description? |
| E4 Contextual Richness | Does the brief reference specific data, incidents, or precedents? |

Produce a scorecard: pass / flag / fail for each test, with specific revision notes for flagged items.

**Exit criteria:**
- All pass or flagged with clear revision path → proceed to 03
- Any fail → return to 01 with notes
- O1 fails (no novel framing) → kill or fundamentally reframe; do not proceed

## Outputs
- `[topic-slug]-ttnw-pre.md` → `output/`

## Quality Checks (human review gate)
- Do you agree with the pass/flag/fail calls?
- Go/no-go: research, re-angle, or kill?
