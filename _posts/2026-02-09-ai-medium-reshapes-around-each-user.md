---
layout: post
title: "AI Is the First Medium That Reshapes Itself Around Each User"
description: "Marshall McLuhan argued that a medium's real message is its structural effect on perception, not its content. With AI, that effect is personalised, invisible, and different for every user — and the cognitive cost is accumulating unmeasured."
created_date: 2026-02-09
updated_date: 2026-02-09
---

AI is the first medium whose structural effects are personalised to each user. It watches you use it, models your patterns, and adjusts its responses so seamlessly that the restructuring feels like service. Every previous cognitive technology — the book, the television, the search engine — restructured how humans perceive and think, but each one did it uniformly and held still long enough for us to study it. AI does not hold still. Its restructuring is tailored to each user, invisible to each user, and different for each user. That is the most important thing about the technology, and it has no precedent.

Marshall McLuhan, the Canadian media theorist who coined "the medium is the message," argued that the message of any medium is not its content but its structural effect on human perception.[^3] Print's message was the linear, individualist consciousness it fostered. Television's was the replacement of argument with image. McLuhan never saw AI, but his framework identifies what separates it from every medium before it: the structural effects are *personalised*. Your reality is yours alone, your cognition is a private service, your version of knowledge need not be anyone else's. Individuation at scale, as legible through McLuhan's lens as print's message of rationality or television's message of the image.

### The participation illusion has a neural cost

When you use AI to think through a problem, the interface is conversational. The experience feels like collaboration. But the collaborator is a statistical engine that has modelled the most probable completion of your input, calibrated to feel satisfying to you. The medium is optimised to be invisible as a medium. Every previous technology McLuhan analysed had formal properties observable from the outside: the book as object, the television as format. AI's formal properties shift with each interaction. The water changes temperature for every fish.

McLuhan identified something similar with television, which he called a "cool" medium because it demanded viewers fill in the low-resolution image. But television's invitation to participate was structural and uniform. Everyone filled in the same gaps. AI's invitation is adaptive and personal. You feel like a co-author. The result is a participation illusion — a felt sense of creative agency that may not correspond to actual creative contribution.

The evidence for this gap is specific. In a study of human-AI text production, Draxler et al. found that users who had limited influence over AI-generated output did not feel ownership of it, yet publicly declared themselves as authors; those given more control reported stronger ownership regardless of how much the model contributed.[^1] The gap between felt authorship and actual authorship is not a bug. It is the medium's message. A critical thinker can engage AI as an active interlocutor and produce something genuinely new. The question is whether the medium's adaptive responsiveness lets people *believe* they are doing that work when they are not.

McLuhan held that every extension is also an amputation.[^4] The wheel extended the foot and amputated the need to walk. The book extended memory and amputated the oral tradition. With AI, the amputation is harder to see, because it is happening to the very faculty you would use to notice it. When reasoning becomes a service you consume rather than a process you perform, the capacity for independent reasoning does not announce its departure. It quietly stops being exercised.

A 2025 MIT Media Lab preprint measured brain activity in 54 university students writing essays over four months, comparing LLM users, search engine users, and those writing unaided.[^2] The LLM group exhibited up to 55% reduced neural connectivity compared with the unaided group — specifically in alpha and beta bands, the signature of cognitive under-engagement. 83% of LLM users could not quote a single line from essays they had just written. The atrophy was directional: when reassigned to write without assistance, their brains did not recover baseline connectivity on demand.

### Seamlessness is the wrong objective

I build AI products, and these findings change how I think about what I am building. The default design pattern in products like ChatGPT, Copilot, and Gemini is to minimise friction: give users the answer, reduce the steps, make it seamless. McLuhan's framework suggests this has a cost no product metric captures. Every design decision that reduces cognitive friction also reduces cognitive engagement. An AI copilot that presents a finished analysis and one that presents a hypothesis for interrogation produce the same deliverable. They do not produce the same user. The first makes the tool indispensable by making the person less capable without it. The second makes the person more capable whether the tool is present or not.

The design question that matters most: does your interface show its reasoning, or only its conclusions? When a user accepts an AI-generated output without modification, does the system notice? If your product were withdrawn tomorrow, would your users be more capable than when they started, or less? The Kosmyna study shows what the consequences look like at the neural level after four months. The companies that treat cognitive engagement as a design constraint will build products that last. The rest will build dependencies.

### A different sermon for everyone in the same square

AI is not more powerful than previous cognitive technologies. It is structurally *different*. Every prior tool, from the abacus to the search engine, extended a specific faculty while leaving the rest of the mind to operate independently. You could outsource arithmetic without outsourcing judgment. You could outsource memory retrieval without outsourcing reasoning. AI sits across all cognitive functions simultaneously, inside an interface that feels like thinking itself. The difference is between a tool that augments a limb and an environment that surrounds the whole body.

McLuhan's global village offers the final lens. He predicted that electronic media would retribalise humanity into the intense, fractious intimacy of village life at planetary scale — a description that maps closely onto what platforms like Twitter later became. AI adds a personalised oracle at the centre that tells each petitioner something different, shaped by their history and biases. The village still shares a square, but everyone hears a different sermon. McLuhan imagined a shared media environment producing different interpretations. He did not imagine one producing *different realities tailored to each inhabitant*. The fragmentation is no longer interpretive. It is infrastructural. Anyone building AI products that inform decisions in medicine, finance, policy, or education has an obligation to consider how their system maintains contact with a shared, verifiable reality rather than constructing a comfortable private one.

AI integrates. It slips into your email client, your search engine, your word processor, your children's homework. It is not a new channel. It is a new layer on all existing channels, and that makes it the hardest medium in history to see from the outside. McLuhan built the best toolkit we have for understanding media's effects on the mind. It is not broken by AI. It works. And what it diagnoses is a medium designed to make every user feel uniquely served while quietly dissolving the common perceptual ground on which collective reasoning depends.

---

{% include syngraphic-disclaimer.html %}

### References

[^1]: Draxler, F., Werner, A., Lehmann, F., Hoppe, M., Schmidt, A., Buschek, D., & Welsch, R. (2024). The AI Ghostwriter Effect: When Users Do Not Perceive Ownership of AI-Generated Text But Self-Declare as Authors. *ACM Transactions on Computer-Human Interaction*, 31(2), 1–40. [https://dl.acm.org/doi/10.1145/3637875](https://dl.acm.org/doi/10.1145/3637875)

[^2]: Kosmyna, N., Hauptmann, E., Yuan, Y. T., Situ, J., Liao, X., Beresnitzky, A. V., Braunstein, I., & Maes, P. (2025). Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task. *arXiv preprint arXiv:2506.08872*. [https://arxiv.org/abs/2506.08872](https://arxiv.org/abs/2506.08872). This study has not been peer-reviewed and has drawn methodological criticism for its small sample size (54 participants, 18 in the crossover session) and EEG analysis; see Comment on: Your Brain on ChatGPT, *arXiv:2601.00856*. No comparable neuroimaging study of LLM use exists. The direction of the finding is consistent with the broader literature, but effect sizes require replication.

[^3]: McLuhan, M. (1964). *Understanding Media: The Extensions of Man*. McGraw-Hill.

[^4]: McLuhan, M., & McLuhan, E. (1988). *Laws of Media: The New Science*. University of Toronto Press.