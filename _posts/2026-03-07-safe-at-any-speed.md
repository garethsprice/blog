---
layout: post
title: "Safe at Any Speed"
description: "A decade of data across 39,000 software professionals shows that the fastest-deploying teams fail seven times less often than the slowest. AI coding tools are about to test whether the industry has learned this — or whether it is still building safety systems designed for a slower era."
created_date: 2026-03-07
updated_date: 2026-03-07
---
In 1965, Ralph Nader argued that the American automobile industry had engineered cars to go faster than the safety systems around them could handle.[^12] The solution was not to slow down. It was to build better brakes, better crash structures, better roads. Six decades later, software engineering faces the same problem — and most of the industry is reaching for the wrong lever.

Monzo is a bank. Not a fintech startup that calls itself one — a regulated UK bank, authorised by the Prudential Regulation Authority, holding customer deposits, processing millions of transactions. Its regulators expect caution. Its engineering team deploys to production over 100 times a day.[^1]

Any engineer can ship with a single command. One code review from an engineer on the owning team, merge to main, deploy. Between mid-2018 and early 2020, the engineering team grew from roughly 50 to more than 250. The customer base went from under one million to more than four million.[^2] Through that growth, deployment frequency per engineer went up — and incidents went down.[^1]

Banks do not behave this way. They run change advisory boards, schedule release windows, require multiple sign-offs. They do this because the cost of failure is high and the regulators are watching. Monzo looked at the same constraint and reached the opposite conclusion: the way to reduce failure is not to deploy less, but to deploy more. The data says they were right.

## The dial that does not exist

A decade of research from DORA — the largest study of software delivery performance, surveying more than 39,000 professionals since 2014 — has tested the relationship between deployment speed and failure rates across industries, company sizes, and regulatory environments.[^3] The findings are consistent and, to anyone who has sat through a change advisory board, startling.

In the 2019 report, elite-performing teams deployed 208 times more frequently than low performers. Their change failure rate was seven times lower. Their mean time to restore service was 2,604 times faster — less than one hour versus one week to one month.[^3] These are not rounding errors. They are order-of-magnitude differences running in the direction that conventional risk management says is impossible. DORA's official guidance, updated in January 2026, states it directly: speed and stability are not trade-offs.[^4] Dave Farley, cited in that guidance, identifies what the real trade-off is: better software faster versus worse software slower.[^4]

The finding held across industries. The 2019 report found no evidence that industry type affected performance — including financial services and government.[^3] Enterprise organisations with more than 5,000 employees were actually lower performers than smaller ones.

This is where sceptics should push back, and they have grounds.

## The survivorship problem

DORA's data is self-reported by survey respondents. The professionals who fill out DevOps surveys are more likely to be engaged with DevOps practices than the median engineer. The research team defends their methodology, and the dataset is the largest of its kind, but self-selection bias is real. The 2024 report surfaced an anomaly: medium performers reported a lower change failure rate than high performers, which prompted DORA to introduce a complementary "rework rate" metric.[^5]

Monzo, the centrepiece of the deployment-speed argument, was not profitable during the scaling period described above. Etsy, the other canonical example, went through layoffs and a strategic reset after its 2015 IPO. Shipping 100 times a day is impressive engineering. It is not, by itself, a business outcome. And the companies writing blog posts about their deployment practices are the ones that survived long enough to write blog posts. We do not have the post-mortems from startups that invested heavily in CI/CD infrastructure and ran out of money before finding product-market fit.

These objections are fair. None of them is fatal. The DORA correlation between speed and reliability has held in every report since 2014 — ten consecutive years of data, across different respondent pools, in different market conditions. A single year's survey can be explained by self-selection. A decade of consistency is harder to dismiss. And the mechanism is independently verifiable, because it rests on arithmetic rather than organisational culture.

## Small changes, small risks

Monzo's engineering blog stated the relationship in one sentence: "less friction encourages smaller changes, and smaller changes are less risky."[^1]

The mechanism works as follows. When deployment is easy and fast, engineers ship small changes. A small change touches fewer lines of code, which means fewer potential points of failure. It is easier to review — a reviewer can hold the entire change in working memory, which means defects are caught before production. If it does fail in production, the blast radius is small, and the rollback is trivial because the change itself was trivial. When deployment is painful and slow, the opposite happens. Engineers batch changes together to avoid the pain. Large batches are harder to review, harder to test, and harder to roll back. The failures are larger and the recovery takes longer. The cautious process — monthly releases, multi-team sign-offs, long QA cycles — produces the large, dangerous deployments it was designed to prevent.

Etsy's history traces this arc precisely. In 2008, the company deployed twice per week. Deploys took hours, required a minimum of three developers plus an ops engineer on standby, and the pattern was predictable: deploy, site goes down. By 2012, the company was making 25 deploys per day; 196 different people deployed to production that year. Push time: 70 to 150 seconds. By 2013–2014, the number was more than 50 times per day, supported by a CI cluster running over 14,000 test-suite runs daily.[^6] Kellan Elliott-McCrea, who was CTO through Etsy's 2015 IPO, drew the distinction precisely: "The goal is NOT to be careful. The goal is to be confident."[^7] Etsy's practices, he wrote, were "a spectrum of tools for increasing our confidence in our ability to make change."[^7] Confidence and caution are different things. Caution tries to avoid risk. Confidence builds the systems that make risk manageable.

The infrastructure that creates this confidence is well understood: continuous integration that catches regressions before production, feature flags that decouple deployment from release, trunk-based development that forces small and reviewable changes, and automated testing that scales where manual QA cannot. None of these is exotic. All of them require discipline — which is why they fail more often through neglect than through absence. A CI system that is routinely red and routinely ignored teaches the team that build failures do not matter. The pipeline becomes decoration.

Shopify's experience illustrates the cost of neglecting that discipline, and the return on fixing it. Before its Test Infrastructure team intervened, 68% of CI time was spent on overhead before any test ran. CI at the 95th percentile took 45 minutes. After the team invested in instrumentation, dependency building, and test selection, p95 dropped to 18 minutes, test stability went from 88% to 97%, and Docker container start time fell from 90 seconds to 25 seconds.[^8] Christian Bruckmayer described the motivation: "Our developers were frustrated."[^8] Frustrated developers do not deploy frequently. They batch changes, wait, and ship large, risky releases — which is the behaviour that the speed-versus-safety mental model prescribes as prudent.

## Safety systems for a faster era

AI coding assistants are accelerating code generation. They are not accelerating code quality. Approximately 45% of AI-generated code contains security vulnerabilities.[^9] GitClear's analysis of 211 million lines of code changes between 2020 and 2024 found that refactoring dropped from 25% of changed lines to under 10%, while code duplication increased roughly fourfold.[^10]

Nader's argument was never that speed itself was dangerous. His argument was that the industry had increased speed without proportionally increasing the infrastructure that made speed safe. The parallel is precise. AI tools are pushing code velocity past the point where traditional safety mechanisms — monthly releases, manual QA, change advisory boards — can absorb the volume. Teams using AI to write code without proportionally investing in review, testing, and deployment infrastructure are building faster cars with the same brakes. The quality systems described in this piece — CI/CD, automated testing, feature flags, trunk-based development — are not constraints on AI-assisted velocity. They are the crash structures.

The pressure on engineering teams to absorb AI tools and ship faster is real. Will Larson's CTO survey data identified CEO demands for increased engineering velocity as the single biggest challenge startup CTOs face. The CTO who responds by adding tools that generate code faster without building the infrastructure that catches failures faster is making a financing decision with compounding interest. The code ships. The tests do not. The debt accumulates. And the team discovers, a quarter later, that they are spending more time fixing production incidents than building features.

## The language problem

The hardest part of building this infrastructure is not technical. It is rhetorical. "We're investing in testing infrastructure" sounds slow. "We're building the system that lets us deploy ten times a day without breaking the product" sounds fast. Both sentences describe the same investment. The first loses the budget negotiation. The second wins it.

Charity Majors, co-founder of Honeycomb, provides the formulation that should end the speed-versus-quality argument: velocity of deploys and lowered error rates are not in tension with each other — they reinforce each other, and when one improves, the other does too.[^11]

Monzo proved this at a regulated bank. Etsy proved it at a marketplace processing millions of transactions. The DORA data confirmed it across 39,000 professionals and ten years of measurement. The mechanism is arithmetic: small changes are less risky than large ones, and frequent deployment forces small changes. The teams deploying 200 times more often than their competitors are not accepting more risk. They have eliminated the conditions under which large risks accumulate.

Every change advisory board, every monthly release window, every multi-week QA cycle is an investment in the opposite outcome. The organisations that slow down to be safe are building the large, infrequent, hard-to-review, hard-to-rollback deployments that produce the failures they are trying to prevent. Nader did not argue for slower cars. He argued for better engineering. The answer to software moving faster is not to slow it down. It is to build the brakes, the crash structures, and the roads that make speed safe — and then to use them every hour of every day.

---

## References

[^1]: Sewell, W. (2022, May 15). How we deploy to production over 100 times a day. *Monzo Engineering Blog*. https://monzo.com/blog/2022/05/16/how-we-deploy-to-production-over-100-times-a-day

[^2]: Targett, E. (2023, March 7). The big interview: Pleo CTO and Monzo veteran Meri Williams. *The Stack*. https://www.thestack.technology/the-big-interview-meri-williams-cto-pleo/

[^3]: DORA Team. (2019). *2019 Accelerate State of DevOps Report*. Google Cloud / DORA. https://dora.dev/research/2019/dora-report/2019-dora-accelerate-state-of-devops-report.pdf

[^4]: Harvey, N. (2026, January 5). DORA's software delivery performance metrics [Guide]. dora.dev. https://dora.dev/guides/dora-metrics/

[^5]: Stephens, R. (2024, November 26). DORA Report 2024 – A look at throughput and stability. *RedMonk*. https://redmonk.com/rstephens/2024/11/26/dora2024/

[^6]: Snyder, R. (2013, March). Continuous deployment at Etsy: A tale of two approaches [Presentation slides]. https://www.slideshare.net/beamrider9/continuous-deployment-at-etsy-a-tale-of-two-approaches

[^7]: Elliott-McCrea, K. (2013, August 8). Paths to production confidence, part 1 of n. *Laughing Meme*. https://laughingmeme.org/2013/08/08/paths-to-production-confidence-part-1-of-n/

[^8]: Bruckmayer, C. (2021, February 24). Keeping developers happy with a fast CI. *Shopify Engineering Blog*. https://shopify.engineering/faster-shopify-ci

[^9]: Veracode data as reported in startup CTO landscape research.

[^10]: GitClear. (2024). AI-generated code analysis: 211 million lines of code changes, 2020–2024.

[^11]: Majors, C. (2019, May 1). Friday deploy freezes are exactly like murdering puppies. *charity.wtf*. https://charity.wtf/2019/05/01/friday-deploy-freezes-are-exactly-like-murdering-puppies/

[^12]: Nader, R. (1965). *Unsafe at Any Speed: The Designed-In Dangers of the American Automobile*. Grossman Publishers.