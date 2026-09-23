# Stage 01: Op-Ed Selection

## Purpose
Evaluate a topic idea against the author's content strategy. Commit to a specific angle, audience, and thesis seed — or reject the topic with rationale.

## Inputs
| File | Layer | Purpose |
|------|-------|---------|
| User-provided topic idea | 4 (working) | The raw topic to evaluate |
| `stages/01_op_ed_selection/references/content-strategy.md` | 3 (reference) | Published posts, topic gaps, audience segments |

## Process

**Relevance gate:**
- Does this connect to a problem the target reader actually has?
- Can the author say something other blogs cannot? (Production experience, real numbers, technical scars from NYT, CorralData, Codecademy, Ready Set Rocket)
- Does it fill a gap in the content mix? (Check content-strategy.md)

**Angle selection:**
- What is the specific tension? Not "building AI products is hard" but "metadata quality determines AI accuracy more than model selection, and here's a year of data."
- Who is the primary reader? One audience, named.
- What does the reader believe before reading that they should believe differently after?

**Differentiation check:**
- Does it contain real numbers from production experience?
- Could this appear on any generic tech leadership blog? If yes, find the angle that couldn't.
- Is there a "why" or "how" insight — a mechanism, a second-order effect, a non-obvious connection?

**Output format — the brief:**
- Topic (one line)
- Angle (the specific tension or argument, 2-3 sentences)
- Thesis seed (one sentence the reader could disagree with, under 25 words)
- Primary audience (one named segment)
- Content type (debugging story / technical deep-dive / applied research / framework / practical guide / opinion)
- Reader's decision (practical guide / framework only): what the reader will decide or do differently, one sentence in their terms
- Running example (practical guide / framework only): one concrete case — task, system, failure — the draft will apply every point to
- Word count target (practical guides 1,000–1,500; see `../style-guide/index.md` › Length)
- Key points to cover (3-5). If the idea has more mechanisms than that, choose the five that change what the reader does; the rest are research, not structure
- Differentiation statement (what makes this unsayable by someone who hasn't done the work)

If the topic fails the relevance or differentiation gate: write a rejection with rationale and one suggested reframe.

## Outputs
- `[topic-slug]-brief.md` → `output/`

## Quality Checks (human review gate)
- Is the thesis seed specific enough to disagree with?
- Does the angle require knowledge only you have?
- Would you want to read this? If not, the angle is wrong.
- Practical guides: could the reader act on the running example tomorrow?
