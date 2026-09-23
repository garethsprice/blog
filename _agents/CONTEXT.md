# Layer 1: Task Routing

Read CLAUDE.md for the routing table. Match the user's request to a row and run the indicated stages in order.

Each stage has its own CONTEXT.md that specifies exact inputs. Load only what the stage contract lists.

## Stage Index

| Stage | Purpose | CONTEXT.md |
|-------|---------|------------|
| 00_setup | One-time voice/style configuration | `stages/00_setup/CONTEXT.md` |
| 01_op_ed_selection | Evaluate topic, commit to angle | `stages/01_op_ed_selection/CONTEXT.md` |
| 02_pre_draft_ttnw | Score brief before writing | `stages/02_pre_draft_ttnw/CONTEXT.md` |
| 03_research | Gather evidence and sources | `stages/03_research/CONTEXT.md` |
| 04_draft | Write first complete draft | `stages/04_draft/CONTEXT.md` |
| 05_score | TTNW + style scoring | `stages/05_score/CONTEXT.md` |
| 06_revise | Targeted revision from scores | `stages/06_revise/CONTEXT.md` |
| 07_publish | Jekyll-ready output | `stages/07_publish/CONTEXT.md` |
