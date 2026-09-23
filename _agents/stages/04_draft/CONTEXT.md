# Stage 04: Draft

## Purpose
Write the first complete draft. Follows the brief's angle and thesis, incorporates research evidence, adheres to voice and writing rules.

## Inputs
| File | Layer | Purpose |
|------|-------|---------|
| `../01_op_ed_selection/output/[topic-slug]-brief.md` | 4 (working) | Angle, thesis, audience, structure |
| `../02_pre_draft_ttnw/output/[topic-slug]-ttnw-pre.md` | 4 (working) | Structural risks to address |
| `../03_research/output/[topic-slug]-research.md` | 4 (working) | Evidence and sources to incorporate |
| `_config/voice.md` | 3 (reference) | Author voice (<500 tokens) |
| `_config/writing-rules.md` | 3 (reference) | Mechanical rules (<800 tokens) |
| `_config/banned-words.md` | 3 (reference) | Kill list (<300 tokens) |

**Token budget:** ~1,600 tokens Layer 3 (within 500–2,000 range).

## Process

**Structure and voice:** follow `writing-rules.md` and `voice.md` as written — do not paraphrase them here. If the brief's content type is framework or practical guide, apply the "Practical guides" section of `writing-rules.md` and build the draft around the brief's running example.

**Write as Gareth Price**, not as a company or brand. Hit the word count target from the brief.

**Evidence** (from research output):
- Ground every claim in something specific from research. Replace adjectives with data.
- Any fact, number, date, name or quotation not in the research file gets `[UNVERIFIED]` in the draft. Never fill a gap from memory; stage 07 treats unmarked unsupported claims as errors.
- Research will hold more precedents than the piece has points. Pick the strongest one per point and bridge it to the reader's case; leave the rest in the research file.
- Cite naturally — "Snowflake's benchmarks show 85%" not "According to a recent study..."
- When using own production data, be specific about what, when, and where.

**Anti-patterns** (from banned-words.md):
- Zero banned words in body copy.
- No "you can" / "you're able to" hedging.
- Every sentence must fail the generic test: could this appear on any tech leadership blog unchanged? If yes, rewrite until it couldn't.

**For the full style guide:** Read `../style-guide/index.md` in the parent blog repo. The `_config/` files are compressed extracts — the parent style guide is authoritative.

## Outputs
- `[topic-slug]-draft-v1.md` → `output/`

## Quality Checks (human review gate)
- Read the first two sentences. Do they earn the third?
- Count footnotes against key points. Well over two per point usually means precedents are stacked.
- Read aloud: smart colleague or press release?
- Visual needed? Note placement.
