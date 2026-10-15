---
layout: post
title: "Dictated but Not Read"
description: "Agents now send messages under their owners' names. Without saying who wrote, authorised and reviewed them, they leave recipients unsure who is responsible."
created_date: 2026-10-15
updated_date: 2026-10-15
---

My project-management agent has a dull job: chasing people for status updates. Suppose three updates are overdue. The agent can write to each person as me ("Hi Priya, where are we on the billing migration? Gareth"), as itself ("PM Agent: status update required"), or as itself on my behalf. Written as me, the message carries my authority, and I own every word of something I never saw. Written as itself, it reads like a cron job, and the recipient has no idea whether any person wants the answer.

Long before email, business letters answered this. They recorded four things about how each letter was made: who actually wrote it, on whose authority, how much the person named at the bottom had reviewed it, and where to send the reply. The US Army later wrote the answers into regulation, and in 1982 the email standard built the secretary into its headers. An agent that sends messages under your name should answer the same four questions, on the page, every time.

## The foot of a letter was a header

On 25 April 1861, R. H. Catlett, Military Secretary to the Governor of Virginia, replied to an offer from Col. Cary C. Cocke. The letter, now in the University of Virginia's special collections, opens: "I am directed by the Governor to acknowledge the rect of your favor of the 24th Inst."[^catlett] In the office shorthand of the day, "rect" is receipt, a "favor" is a letter and "Inst." (*instant*) means this month. The letter is signed by Catlett, with a title underneath. Read as metadata, the opening and the signature answer two of the four questions. "Directed by the Governor" says on whose authority Catlett wrote, and the signature and title say who actually wrote it, and in what capacity. "Your favor of the 24th" adds a field the four questions take for granted: which letter this one answers, as an `In-Reply-To` header does. The letter doesn't say how much of it the Governor saw; later conventions added a field for that.

The agent equivalent is a first line that states who asked for the message and why. "Gareth asked me to collect status updates for the weekly report" does the same work as "I am directed by the Governor," and it tells the recipient that a person wants the answer.

Typed business letters added more fields at the foot. Reference initials recorded who wrote and who typed. Canada's government style guide still describes them. The typist's initials, usually in lower case, go two lines below the signature block; when someone other than the signer wrote the letter, the writer's initials, usually in capitals, may go first. "AK:md" means Anya Kurek wrote it and Mark Douglas typed it.[^initials] "Dictated but not read" recorded the review level: the person named at the bottom had not checked what the typist produced.[^dbnr] And "p.p.", for the Latin *per procurationem*, recorded delegated authority to sign, though its meaning is still debated: "through the agency of" or "on behalf of."[^procuration]

Each of these is a design decision for an agent. Initials become the agent's name and a run identifier in the footer, so a recipient who spots a mistake can quote the reference and I can find the run that wrote it. "Dictated but not read" becomes a line saying whether I reviewed the message. And p.p. becomes the display name: "PM Agent, for Gareth Price."

## You can delegate the signature, not the responsibility

Army Regulation 25-50, the US Army's rules for writing and managing correspondence, is the most explicit statement of these conventions I have found. It lets the heads of organisations allow others to sign for them, then adds that "they are delegating authority, not responsibility or decision authority."[^ar2550] For an agent, that sentence settles the accountability question before any model is involved: the agent can send in my name, and I still own what it sends.

The regulation's other rules translate directly. In many cases a delegation of signature authority must be in writing and explain what material it covers, so the agent needs a written mandate listing what it may send. The people who hold the delegation "will use their own signature blocks and titles," so the agent signs as itself, never as me. An authority line, showing that the letter expresses the commander's will, is required when it carries policy, decisions, recommendations or taskings, and whoever signs in the commander's place writes "for" before the commander's typed name. A status chase asks someone to do something, so it gets "for Gareth Price"; a build notification doesn't need one. The regulation also bars openings such as "The Secretary has requested that I reply" unless the Secretary directed that phrase, and an agent should never put words in my mouth either. Finally, facsimile signature devices "must be safeguarded," and the regulation adds: "An individual is responsible for all actions resulting from the use of the facsimile signature." An agent's credentials for sending mail are that device: whoever holds them sends mail that I answer for.

## Disclosure decays when nobody reads anything

The conventions can also fail. In April 2001 Stanley Shere, a consultant psychiatrist in Canterbury, wrote to the *BMJ*, a British medical journal, about the letters other doctors were sending. Back from a month in the US, Shere found that over half the medical post waiting was unsigned. The letters usually ended with a note that they had been "Dictated but sent unsigned to avoid delay," which Shere called "almost always totally untrue." Worse: "I know many consultants who virtually never sign their letters and, worryingly, never read them after dictating them." Shere's examples included "antihypertensive" typed for "antidepressive."[^shere]

The replies that August made the strongest case against signing. Timothy Rimmer, a consultant eye surgeon in Peterborough, wrote that unsigned letters arrive more quickly, and joked that a franker footer would mention the prospect of "unnecessarily signing 2000 or 3000 letters a year." Mel Jones, an orthopaedic surgeon in Bangor, had given up signing clinic letters seven years earlier, because they usually took more than a week to reach the post, and now closed them "dictated but not signed by."[^replies] It is a fair argument, and agent builders make it too: if I have to read every message, the agent saves me nothing.

Rimmer and Jones were honest about the trade. The danger is what the disclosure becomes when nobody ever reads anything behind it. The Canadian Medical Protective Association, which defends Canadian doctors in medico-legal cases, warned in 2016 that marking entries "dictated but not read" risks incorrect information becoming "part of the patient's medical record indefinitely," and that administrative convenience is unlikely to be accepted as a reason for leaving a report unreviewed.[^cmpa] Its advice was to keep unreviewed reports out of the record where possible, to review the rest at the first opportunity, and to correct errors with a signed addendum.

An agent's footer will drift the same way. "Gareth hasn't read this message" is honest the first week. If I never read any of them, it becomes a standing excuse, and an agent's error sits in someone's inbox as my instruction. The disclosure stays true only if I review something on a schedule: a sample of each week's messages, and every message that went wrong. Corrections should come from me, under my own name, as the CMPA's addendum does.

The footer also has to separate two things a recipient might run together. "Not read" could suggest to Priya that the message is safe to ignore. It shouldn't, because authority and review are different fields. "Gareth approved this request but hasn't read this message" says the request is mine and the wording isn't: the same split as Catlett's letter, which carried the Governor's will in Catlett's words.

## Email built the secretary into its headers

The 1982 email standard modelled the secretary directly. RFC 822, written by David Crocker and published as a Request for Comments, the series that still carries internet standards, defines the `From` field as the person "who wished this message to be sent," and the `Sender` field as the "AGENT (person, system or process) that sends the message." Sender must appear whenever it differs from From.[^rfc822] The appendix works through two cases a secretary could handle. In one, the secretary sends for George Jones and replies go to George. In the other, the secretary acts as George's full agent and adds a `Reply-To` header to take the replies too.

Section 4.4.2 then explains why Sender matters. Because the field exists to identify who is responsible for a message, "and since computer programs cannot be held accountable for their behavior," the standard strongly recommends that when a program generates a message, "the HUMAN who is responsible for that program be referenced" in the Sender field. The capitals are Crocker's. In 1982 Crocker could already see that software would send mail, and decided that its messages should still name a responsible person. The rule did not last. RFC 5322, the current version, keeps the secretary example, but neither it nor its predecessor, RFC 2822, contains the accountability sentence,[^rfc5322] so whoever builds an agent now has to supply that rule.

Exchange, Microsoft's mail server, offers a delegate the same choice of being seen or unseen, as two permissions. "Send on behalf" shows the recipient both names, "&lt;Delegate&gt; on behalf of &lt;MailboxOrGroup&gt;." "Send as" leaves "no indication that the message was sent by the delegate," and when a user holds both permissions, Send As is the one used.[^exchange] On paper, Send As is a forged signature and Send on Behalf is p.p. An agent should default to Send on Behalf, with a human named in its Sender line as RFC 822 asked. Chat messages and tickets have no From and Sender split to rely on, so there the same information has to sit in the visible text: the agent's own name, "for Gareth Price," and the review line.

## The law asks only whether it's a machine

At its developer conference in May 2018, Google demonstrated Duplex, a system that phoned a hair salon and a restaurant for its user in a human-sounding voice, without saying it was a machine. After criticism of the demo, a spokesperson said Google was "designing this feature with disclosure built-in."[^duplex] The complaint was about the first of the four questions: the people who answered weren't told who, or what, was calling.

The law now covers that field and nothing more. California's bot law, in force since 1 July 2019, makes it unlawful to use a bot to mislead someone in the state about its artificial identity in order to drive a sale or influence a vote.[^sb1001] Article 50 of the EU AI Act, which applies from 2 August 2026, requires providers to design AI systems that interact with people so that those people are told they are dealing with an AI system, unless that is obvious.[^aiact] Whether an internal agent emailing colleagues is in scope is a question for a lawyer, but Article 50 may apply. Neither law asks who authorised the message, how much a person reviewed it, or where the reply should go. Those three questions are left to the sender, and the letter conventions described above answer each of them.

## What an agent's message should say

Here is the status chase rewritten to answer all four questions. The names and addresses are examples.

```
From: Gareth Price <gareth@example.com>
Sender: PM Agent (operated by Gareth Price) <pm-agent@example.com>
Reply-To: PM Agent <pm-agent@example.com>
To: Priya <priya@example.com>
Subject: Billing migration: status for Thursday's report?

Hi Priya,

Gareth asked me to collect status updates for the weekly project
report. Could you reply with where the billing migration stands,
and anything blocking it, by noon on Thursday? Two lines is plenty.

PM Agent, for Gareth Price

I'm an AI agent. Gareth approved this request but hasn't read this
message. Your reply comes to me and goes into Gareth's report; to
reach Gareth directly, write to gareth@example.com.
Ref: GP/pm-agent, run 2026-10-15-0412
```

This is RFC 822's second case, the secretary acting as full agent. From names the person who wanted the message sent. Sender names the agent and the person responsible for it. Reply-To sends answers to the agent, because collecting them is its job, and the footer gives a direct route to me. The first line carries the authority, as Catlett's did. The sign-off is p.p., the footer is "dictated but not read" in plain English, and the reference line is the typist's initials with a run number.

The instructions that produce it fit in a system prompt:

```
When you send a message on Gareth's behalf:
1. Say you are an AI agent, in your display name and sign-off.
2. Name Gareth as the person you act for.
3. In the first line, say what Gareth asked for. Never attribute
   words or decisions to Gareth that are not in these instructions.
4. State the review level exactly: "Gareth hasn't read this message",
   "Gareth approved this template" or "Gareth approved this message".
5. Ask only for what this mandate covers: status, dates and blockers.
   Never agree deadlines, approve work or make commitments.
6. Collect replies yourself, and give a direct address for Gareth.
7. If someone objects, asks for a decision, or hasn't answered two
   requests, stop and hand the thread to Gareth.
```

So the agent writes as itself, on my behalf, and says how much of the message I read. The last rule escalates by changing the signature: when Priya hasn't answered the second chase, the agent hands the thread to me, and the third message comes from me, in my own words.

---

### References

[^catlett]: Catlett, R. H. (1861, April 25). [Letter to Col. Cary C. Cocke, Executive Office, Richmond]. MSS 640, Albert and Shirley Small Special Collections Library, University of Virginia. Transcribed in *Virginia Secedes: 150 Years Ago*. [https://150yearsago.library.virginia.edu/2011/04/26/1861-april-25-richmond-va-executive-office/](https://150yearsago.library.virginia.edu/2011/04/26/1861-april-25-richmond-va-executive-office/)

[^initials]: Translation Bureau, Government of Canada. (2025, September 23). Business letters: Reference initials. *Writing Tips Plus*, Language Portal of Canada. [https://our-languages.canada.ca/en/writing-tips-plus/business-letters-reference-initials](https://our-languages.canada.ca/en/writing-tips-plus/business-letters-reference-initials)

[^dbnr]: Dictated but not read. (n.d.). In *Wikipedia*. Retrieved 15 October 2026, from [https://en.wikipedia.org/wiki/Dictated_but_not_read](https://en.wikipedia.org/wiki/Dictated_but_not_read)

[^procuration]: Procuration. (n.d.). In *Wikipedia*. Retrieved 15 October 2026, from [https://en.wikipedia.org/wiki/Procuration](https://en.wikipedia.org/wiki/Procuration)

[^ar2550]: Department of the Army. (2020, October 10; rev. 2024, October 4). *Army Regulation 25-50: Preparing and managing correspondence*, paras. 3-3, 6-1a, 6-1b, 6-2a, 6-3c, 6-10b. [https://www.maine.gov/dvem/policies/documents/AR%2025-50%20(10%20October%202020).pdf](https://www.maine.gov/dvem/policies/documents/AR%2025-50%20(10%20October%202020).pdf)

[^shere]: Shere, S. (2001). Not reading and signing letters you have dictated is dangerous [Letter]. *BMJ*, 322(7292), 992. [https://pmc.ncbi.nlm.nih.gov/articles/PMC1120145/](https://pmc.ncbi.nlm.nih.gov/articles/PMC1120145/)

[^replies]: Rimmer, T., Jones, M., et al. (2001). Not reading and signing letters you have dictated [Letters]. *BMJ*, 323, 448. [https://pmc.ncbi.nlm.nih.gov/articles/PMC1121042/](https://pmc.ncbi.nlm.nih.gov/articles/PMC1121042/)

[^cmpa]: Canadian Medical Protective Association. (2016, June; reviewed 2021, July). "Dictated but not read": Unreviewed clinical record entries may pose risks. [https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2016/dictated-but-not-read-unreviewed-clinical-record-entries-may-pose-risks](https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2016/dictated-but-not-read-unreviewed-clinical-record-entries-may-pose-risks)

[^rfc822]: Crocker, D. H. (1982, August 13). *Standard for the format of ARPA Internet text messages* (RFC 822), secs. 4.4.1, 4.4.2 and appendix A.2. [https://www.rfc-editor.org/rfc/rfc822](https://www.rfc-editor.org/rfc/rfc822)

[^rfc5322]: Resnick, P. (Ed.). (2008, October). *Internet message format* (RFC 5322), sec. 3.6.2. [https://www.rfc-editor.org/rfc/rfc5322](https://www.rfc-editor.org/rfc/rfc5322)

[^exchange]: Microsoft. (2024, March 14). Manage permissions for recipients in Exchange Online. *Microsoft Learn*. [https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/manage-permissions-for-recipients](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/manage-permissions-for-recipients)

[^duplex]: Lawler, R. (2018, May 10). Google Duplex phone calling AI will identify itself. *Engadget*. [https://www.engadget.com/2018/05/10/google-duplex-ai-identification/](https://www.engadget.com/2018/05/10/google-duplex-ai-identification/)

[^sb1001]: California Business and Professions Code §§ 17940–17943 (SB 1001, 2018; operative 2019, July 1). [https://california.public.law/codes/ca_bus_and_prof_code_section_17941](https://california.public.law/codes/ca_bus_and_prof_code_section_17941)

[^aiact]: Regulation (EU) 2024/1689 (Artificial Intelligence Act), art. 50(1). AI Act Service Desk, European Commission. [https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50)
