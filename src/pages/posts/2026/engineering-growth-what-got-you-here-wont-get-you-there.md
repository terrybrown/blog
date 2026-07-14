---
title: "The Technical Skills That Got You Here Won't Get You There"
date: "2026-01-17"
thumb_img_path: images/2026/2026-01-17.png 
content_img_path: images/2026/2026-01-17.png
excerpt: >-
  Many engineers focus on technical skills to grow their career. But there are four other dimensions that are often overlooked that are just as important.
template: "post"
---

**You've mastered the technical skills. You ship quality code, you understand your stack, you can solve complex problems. You might even have "Senior" in your title.**

**But have you hit a ceiling on your impact?**

I was mentoring a Senior Engineer recently who was feeling stuck. They were technically brilliant - could architect complex systems, debug the gnarliest production issues, and ship quality code consistently. But they were struggling - their ideas were getting deprioritised, their work wasn't getting the recognition they felt they deserved, their ideas weren't landing in leadership meetings. They'd built an elegant architecture that solved a scaling problem that no customer had actually reported or complained about. The things holding them back weren't technical at all.  I've seen this pattern many times during my career, it's one of the more common patterns, and it prevents many engineers from reaching their full potential.

When I coach engineers, or leaders, there are routinely four dimensions that I hone in on, and they are just as important as the technical skills you've spent your career building. Investing in them will differentiate your career and transform it from good to great.

**To be clear, this isn't about replacing your technical skills** - it's about expanding beyond them. Your technical foundation is still critical (and you should keep investing in it), but if that's all you do, you're capping your potential impact. You're leaving value on the table - for yourself, your team, and your organization.

These four key dimensions are:

1. **The Theory** - how you understand the systems of delivery, and the theory that contributes to that
2. **The Customer** - who are you building for, what do they need, and how do you know you've built something that is actually useful
3. **The Business** - you typically won't work in an infinite money machine, the context of your business matters in helping you understand how the business funds and sustains itself
4. **The Human Skills** - an idea that cannot be communicated, or a frustration that boils over will hold you back

Let's explore each dimension in detail in this article, and highlight why it's important.

## 1. The Theory: Understanding How Software Gets Built

* Have you ever felt like you're fighting the process instead of working with it?
* Have you ever wondered why your team ships slowly despite everyone working hard?
* Have you ever optimized your part of the system only to realize it made no difference to delivery speed?

These are all common frustrations that I've seen many engineers experience - I've felt these many times in my career. I've watched technically brilliant engineers optimize their code to perfection while their team's lead time stayed uncomfortably long. Why? Because they were optimizing locally in a globally constrained system. The code reviews were fast, but the deployment pipeline was slow. The deployment pipeline got fixed, but then product decisions became the bottleneck. You can't fix what you can't see.

[Research from DORA](https://dora.dev/research/) (DevOps Research and Assessment) shows that elite-performing teams deploy 208 times more frequently than low performers, with lead times measured in hours instead of days or weeks. The difference isn't that elite performers are better coders - it's that they've **optimized the system of delivery**, not just individual components. They understand flow, they manage work-in-progress limits, they identify and address constraints. They've read the theory.

Understanding systems thinking, flow, and constraints transforms how you approach improvement. You stop asking "how can I make my code faster?" and start asking "where is the bottleneck preventing us from delivering value?"

### What to Explore

* **Systems thinking** - Because your code exists in a complex system where changing one part affects the whole
* **Flow** - Because optimizing for continuous delivery beats optimizing for resource utilization
* **Utilization and slack** - Because teams running at 100% capacity are actually slower, not faster
* **agile vs Agile** - Because the mindset matters more than the ceremonies
* **Theory of constraints** - Because the system's performance is limited by its single biggest bottleneck
* **Lean principles** - Because eliminating waste accelerates everything else
* **DORA/Accelerate metrics** - Because you can't improve what you don't measure
* **Team Topologies** - Because how you organize teams shapes how software gets built

### Resources

* *[Thinking in Systems](https://www.goodreads.com/book/show/3828902-thinking-in-systems)* - Donella H Meadows
* *[Sooner Safer Happier](https://www.goodreads.com/book/show/50343488-sooner-safer-happier)* - Jonathan Smart
* *[Team Topologies](https://www.goodreads.com/book/show/44135420-team-topologies)* - Manuel Pais and Matthew Skelton
* *[Accelerate](https://www.goodreads.com/book/show/39080433-accelerate)* - Nicole Forsgren
* *[Lean Software Development](https://www.goodreads.com/book/show/121076-lean-software-development)* - Mary and Tom Poppendieck

## 2. The Customer: Building Things People Actually Use

* Have you ever built something technically perfect that no one used?
* Have you ever shipped a feature only to realize you solved the wrong problem?
* Have you ever struggled to know why you were working on something, when it didn't feel like the most important thing?

You're in good company.  According to the [Standish Group, 64% of features are rarely or never used](https://www.mountaingoatsoftware.com/blog/are-64-of-features-really-rarely-or-never-used).  How much of what you deliver has actual value to your customers and your company? How much is just noise? 

Building software is expensive, even in the age of AI where we can turn around software quickly.  You still need to understand your customer, what they'll pay for and ultimately use.  I always encourage teams to ask "Should we build this?" before "How do we build this?".

CB Insights found that [42% of startups fail because they built something nobody wanted](https://www.cbinsights.com/research/startup-failure-reasons-top/). Think about that - nearly half of failed startups had the technical capability to build their product. They just built the wrong product. Even in established companies, how many features get built, deployed, and quietly forgotten because nobody validated the customer need first?

### What to Explore

* **Product thinking** - Because engineers who understand the products of their company make better decisions on the 'what' and 'why' of their work.
* **Customer centricity** - Because "if you build it, they will come" has never been true.  Understanding your customer, what they care about, and what problems they have will give you a superpower
* **Impact and outcomes over outputs** - Because shipping features doesn't equal creating value
* **Project to product mindset** - Because what you build isn't isolated to a 3 month delivery, it lives with the customer far longer - how are you optimising it, how are you investing in improvement?
* **Jobs to be done** - Because customers don't want your shiny technical feature, they want their problem solved

### Resources

* *[Project to Product](https://www.goodreads.com/book/show/40942127-project-to-product)* - Mik Kersten
* *[Inspired](https://www.goodreads.com/book/show/11315183-inspired)* - Marty Cagan
* *[The Power of Moments](https://www.goodreads.com/book/show/34451952-the-power-of-moments)* - Chip and Dan Heath

## 3. The Business: Understanding the Context You Build In

* Have you ever been surprised when your well-reasoned proposal got deprioritised?
* Have you ever considered how the thing you build contributes to the success of the business beyond just 'being used by customers'?
* Have you ever wondered how leadership makes decisions about what to fund?

According to CB Insights research on why startups fail, 29% run out of cash and 42% build something nobody wants. Even in established companies, understanding runway, burn rate, and path to profitability determines if you will be employed next month or not. I've seen engineers advocate passionately for technical improvements without understanding whether the company has 6 months or 6 years of runway - that context changes what "important" means.

When you understand the business model, you understand the constraints. You stop proposing architectures that require 12 months of investment when the company needs revenue in 6. You start asking "what's the fastest path to validate this with customers?" instead of "what's the most technically perfect solution?" You speak the language of the people who control the budget.

### What to Explore
* **Business model fundamentals** - Because revenue, costs, and margins determine what you can build
* **Runway and profitability** - Because understanding burn rate and path to profitability shapes every priority decision
* **Market dynamics and competition** - Because what investors and leadership care about is market position, not features
* **Product-market fit** - Because nothing else matters until you have it, and everything changes after
* **Fundraising and investor mindset** - Because understanding what VCs look for in a Series A/B/C helps you understand what you're building toward
* **Innovation and disruption patterns** - Because knowing whether you're a sustaining or disruptive innovation changes your strategy
* **Unit economics** - If your CAC (Customer Acquisition Cost) exceeds your LTV (Lifetime Value), your business dies - regardless of how elegant your code is. Understanding metrics like MRR, churn, contribution margin, and payback period isn't optional if you want to understand why leadership prioritizes work the way they do.
* **Growth stages and scaling challenges** - Because what works at 10 customers may not work at 100, at 1000, or more

### Resources

* *[Lean Startup](https://www.goodreads.com/book/show/10127019-the-lean-startup)* - Eric Ries
* *[Zero to One](https://www.goodreads.com/book/show/18050143-zero-to-one)* - Peter Thiel
* *[Crossing the Chasm](https://www.goodreads.com/book/show/61329-crossing-the-chasm)* - Geoffrey Moore
* *[The Innovator's Dilemma](https://www.goodreads.com/book/show/785-the-innovator-s-dilemma)* - Clayton Christensen

## 4. The Human Skills: Making Your Ideas Land

* Have you ever had a great idea that went nowhere because you couldn't get buy-in?
* Have you ever struggled to give feedback that actually changes behavior?
* Have you ever watched a meeting derail because someone couldn't handle disagreement?

Your ideas are only as good as your ability to communicate them.  Your technical credibility gets you in the room; but it is your human skills that see your brilliant ideas funded and supported.  These skills should be considered amplifiers for all of the above - maximising on these will always serve you well in life, not just your career.

Google's [Project Aristotle](https://rework.withgoogle.com/guides/understanding-team-effectiveness/steps/introduction/) studied 180+ teams over two years and found that psychological safety - not technical skill, not seniority, not co-location - was the strongest predictor of team performance. Teams where people felt safe to take risks, admit mistakes, and challenge ideas outperformed technically brilliant teams that couldn't have difficult conversations.

I've watched brilliant technical proposals die not because they were wrong, but because the engineer couldn't navigate the conversation when challenged. I've seen teams grind to a halt because nobody could give direct feedback without causing offense. [Poor communication is expensive](https://www.shrm.org/resourcesandtools/hr-topics/behavioral-competencies/communication/pages/the-cost-of-poor-communications.aspx) - one study estimated that businesses with 100 employees spend 17 hours per week just clarifying previous communication, costing over $500,000 annually.

Your technical credibility gets you in the room. But it's your ability to have crucial conversations, give radical candor, and create psychological safety that determines whether your ideas get funded, whether your team trusts you, and whether you can influence change beyond your immediate code.

### What To Explore

* **Communication skills** - Because you will be guaranteed to be in high stakes conversations that are critical to navigate well
* **Psychological Safety** - Because you routinely won't operate in a vacuum, your team environment is critical to success
* **Emotional intelligence** - Because your amygdala has no place in the office.  Understanding and managing emotions (yours and others') is a superpower
* **Empathy** - Because seeing from another's perspective transforms how you influence and collaborate
* **Vulnerability and courage** - Because being willing to be wrong or uncertain builds trust and opens possibilities

### Resources

* *[Crucial Conversations](https://www.goodreads.com/book/show/15014-crucial-conversations)* - Kerry Patterson et al.
* *[Radical Candor](https://www.goodreads.com/book/show/34451267-radical-candor)* - Kim Scott
* *[Dare to Lead](https://www.goodreads.com/book/show/40142178-dare-to-lead)* - Brené Brown
* *[The Fearless Organization](https://www.goodreads.com/book/show/40275163-the-fearless-organization)* - Amy Edmondson


## Conclusion: Be a Force Multiplier

Being technically great is an asset to any team, but mastering these dimensions? That makes you a force multiplier.  You don't just write better code - you help the entire team and organization deliver better outcomes. 

Whether you're a mid-level engineer looking to grow, a senior aiming for Staff+, or an architect wanting to maximize your influence - this template and these areas can help you amplify your journey.

**This is what separates engineers who contribute from engineers who transform teams.**

### The Amplification Effect

These skills compound and amplify each other:

* Understanding the business helps you have better customer conversations
* Understanding systems thinking helps you spot organizational bottlenecks
* Human skills help you influence change around theory and process
* Customer empathy makes you better at the crucial conversations that matter

### Start Small, Start Now!

The sections above are daunting, especially if you don't feel strong in more than one.  But, you don't need to master everything at once.

**Pick one area that resonated most - the one where you felt the problem statements really resonated with your experience**

Choose one area, and one book from that section and just start.

Commit to one action in the next month. For example:

* Have that crucial conversation you've been avoiding
* Run a small experiment to test a customer assumption before building
* Ask your manager about the business model and how your work contributes to it
* Practice giving feedback using the Radical Candor framework

The investment you make will compound over time

**Your technical skills got you this far. These skills will make you indispensable.**