---
title: "Serverless is Ready, Developers Are Not"
description: We are not ready. We couldn’t possibly be ready.
featured: true
pubDate: "2021-03-28T10:50:00.000Z"
image: ~/assets/images/srdn.jpg
language: "en"
---

<p class="lead">Inspired by <a href="https://dev.to/andrewbrown" alt="Andrew Brown" target="_blank">Andrew Brown who outlined a course that <a href="https://twitter.com/andrewbrown/status/1344032358371098627" alt="Tweet" target="_blank">he shared on Twitter</a> and by an ongoing reflection on my own experiences with cloud and serverless adoption at the company I work for, I decided to share a little about my perceptions on the current shift in landscape and what it means to be a developer in this context.</p>

This is the most inspiring part for me:

> **The Ghost of Serverless Past**
> 
> I have been wanting to adopt serverless architecture for the last 4 years on AWS, but with every attempt, I fell into serious challenges:
> It was difficult to use existing relational databases eg. Postgres / MySQL
> DynamoDB was hard to learn, had no backups and capacity management was confusing
> Lambda size and runtime limitations made common tasks impossible
> There was lots of boilerplate to write to integrate services
> I couldn’t bring my favourite web-frameworks and had to start from scratch
> It was nearly impossible and painful to run or debug serverless services locally
> It was a lot of work to write CloudFormation templates
> Having observability was extremely limited
> Cold starts were too slow and hindered the UX
> Making serverless feasible relied heavily on expensive third-party provides to fill these feature gaps
>
> **Serverless is Ready**
> 
> I believe now that it is 2021 AWS has solved these previous issues and a Serverless-first approach is ready for any size of project or team.
>
> **Developers are Not**
>
> However, the effort to quickly upskill as a developer or a team still takes several months to even a year. So it’s no surprise that even though it’s possible, teams and developers quickly go back to the old ways to meet their deadlines.

There’s a great episode in the podcast **The Art of Modern Ops**, titled [Tech as Fashion: Do tools drive developer cultural change?](https://www.weave.works/blog/tech-as-fashion-do-tools-drive-developer-cultural-change) that made me ponder how our “technical” decisions are at times not technical at all. Sometimes we follow trends. Besides that being a good or a bad thing, these trends often overlook the cultural, social and organizational changes that come along the Serverless approach (along changes that are still to be discovered).

We are not ready. We couldn’t possibly be ready.

Let’s step back to web development before serverless and cloud: There are Front End and Back End folks. Or at least, job descriptions, brands, courses, our own identities and, well, ourselves. And this cultural paradigm embeds us, change our views and create social dynamics.

![Front End Back End Division](https://dev-to-uploads.s3.amazonaws.com/i/0824eswu4g0ba21benfg.png)

This division can be seem, in full glory, in a comment that gained a lot of attention a while back (considering ours a scenario where “seniority” is not somehow associated with Frontend, even being the browser (or in the fact browsers, a plethora of them in several versions) as Douglas Crockford sometime said, **“the most hostile development environment”**):

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">100% there should be no such thing as a front end developer outside of super junior contexts. All developers need to think across all the layers that they build on to be effective.</p>&mdash; Tobi Lutke 🌳🌲🛒🕹 (@tobi) <a href="https://twitter.com/tobi/status/1341423803772121089?ref_src=twsrc%5Etfw">December 22, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

`We should add Twitter as another hostile environment. Am I Right?`

There’s a lot of benefits in specialization, separation of concerns and so on, but the business value we should deliver is not one thing or other thing, is the **service/product** t technology as materialized action and I see this more like a spectrum. I label me as _FullStack_ – and this is more a necessity than choice of have to take as many hat as possible – but I do not see as static categories but as as a spectrum of that makes the **service/product**.

And because of that is very unlikely that one person can excel at all skills to get full spectrum in both ways – `<sarcasm>`maybe the mythical “10x Developer”? But maybe they wouldn’t touch frontend systems/sarcasm>`. And yes, you could and I would say you should work on both sides, but you’ll most likely always be tipping towards one side of the spectrum. And also, this is will never be static. A lot can change over the years. I, myself, started totally focused in the Front End spectrum and now find myself more **productive** (and this is a keyword for me) on the other side. There are no global constants in life, only scoped variables.

![Full Stack Continuum](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/45k80w4eryza7692p78o.png)

And even _Full Stack Developers_ don’t translate in a map 1:1 to each domain. Each of us is spread out in this continuum.

## Cloud is eating the world

Have in mind that’s not even considering all other roles that do not fit exactly in this spectrum like QA, Ops, Security, DB, Network... But development, even web development, is a fairly recent endeavor. As decoupled as we want them to be, in the end our backend should only store and process things that will make sense and add value to customers, who will in turn interact with that system through frontend applications. But things were straightforward: you coded in some language, generate HTML and send via a server to clients on requests. And, well this is pretty much what happens even today. But what once was developed in a machine, your workstation, then began to require provisioning a bigger machine in some place — your data center or of a third party – and that machine, from the OS to the server, with all tweaks, patches and dependencies were not only our responsibility, but were _owned_ by us. (technically sometimes you rented a machine or even share one with an underline default setting).

And the adoption of the Cloud started as always, with the adoption of a new technology: emulating the old ways. Marshall McLuhan, a brilliant thinker of media, argues that in order to fully grasp the effect of a new technology, one must examine figure (medium) and ground (context) together, since neither is understandable without the other. McLuhan argued we must study media in its historical context, particularly in relation to the evolution of technologies.

The Cloud at first worked the same way that on-premises and rented rack spaces did. You created a new instance of a “machine”. But of course, it was something new. You could tap into a massive pool of resources without having to do capacity plans to order cables, drives, software licenses. This _material_ difference sometimes is overlooked. But this enabled the creation and growth of several businesses without massive capital expenses. And thinking in a more global perspective for some companies around the world, getting resources from AWS, Google or Microsoft meant getting access to all kinds of architectures that were not even attempted before. The Cloud’s footprint in our World is massive: economically, environmentally (it takes a lot of water to cool all this computation), culturally, socially and technically speaking. Not even the word _FullStack_ could describe the complexity of this new world. In this context, he terms ‘Cloud Engineer’ and ‘Cloud Developer’ blossomed, bringing with them different meanings and roles from company to company.

## Cambrian Explosion of the Serverless

As Andy Jessy stated in re:Invent 2020, [half of new apps built inside of Amazon are using Lambda](https://aws.amazon.com/blogs/aws/reinvent-2020-liveblog-andy-jassy-keynote/), That counts with 140 other AWS services integrated. As said in the August 2020 [Overview of Amazon Web Services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html) 175 was the count of services/products (and later re:Invented added a bunch more). Consider that [Lambda just turned six](https://offbynone.io/issues/116/) last year.

The word _Serverless_ t itself as always brought up some discord, but if developers got in fights about semicolons, what could one expect? In the spirit of the one of the hardest things in computing, naming things is always a problem. I like the article [In Defence of “Serverless” —the term](https://medium.com/serverless-transformation/in-defence-of-serverless-the-term-764514653ea7) by Ben Ellerby, (one that I particularly enjoy), the author brings up the subject:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Great <a href="https://twitter.com/hashtag/serverless?src=hash&amp;ref_src=twsrc%5Etfw">#serverless</a> point from <a href="https://twitter.com/zackkanter?ref_src=twsrc%5Etfw">@zackkanter</a>! Lambda offers *functions* as a service. Managed services offer *functionality* as a service. <a href="https://t.co/QlbpHzOwDQ">pic.twitter.com/QlbpHzOwDQ</a></p>&mdash; Jeremy Daly (@jeremy_daly) <a href="https://twitter.com/jeremy_daly/status/1336745888019001350?ref_src=twsrc%5Etfw">December 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Serverless is also a polymorphic word. Lambda is just a subset. Because of its omnipresence, sometimes is mistaken as “serverless” itself. Lambdas offers _functions_ as a service. M Managed services offers _functionality_ as a service. as a service. Serverless is a superset of services that offer primitives so that developers can build and architect in the cloud applications, focusing in the domain.

Just look at Amplify, a tool that embodies Nader Dabit’s [The Full Stack Serverless Manifesto](https://dev.to/dabit3/the-full-stack-serverless-manifesto-3jjh):

![Amplify](https://dev-to-uploads.s3.amazonaws.com/i/qcfp0ujffjnjzc97b930.png)

> Human-technology relations are a subtle dance in which technological objects push and pull with varying degrees of insistence while human subjects navigate with more and less motivation, creativity, and skill.

> Technologies are designed, implemented, and used through webs of choices. Some of these choices are explicit and reflect a clear intention for the technology to affect human action in some specific way. Other choices are implicit and may not ever enter the conscious minds of designers, distributors, or end users. Each choice—explicit or implicit—reflects and affects value orientations, sociostructural arrangements, and social dynamics.
>
> <footer><a href="https://amzn.to/3spSG2z" target="_blank" alt="How Artifacts Afford">How Artifacts Afford</a>, Jenny L. Davis</footer>

And serverless brings to us a promise and means to using powerful applications. But as far as products such as Amplifies do, in abstract several ways in integrate with frameworks web e mobile, there are still a lot of depth to all the services the integrations enable us. The Cloud seems to include all other tradicional fields we and our organizations were built around. Every change has a cost. Everything has a tradeoff. And in the middle there us, developers.

## Cognitive overload

The excellent book [“Team Topologies”](https://amzn.to/2WXX2jm) i introduces us to several ways to look at software engineering and the role that the software and the team behind it shape one another, in the same vein of what McLuhan said. One of most insightful approaches is that *the size and shape of your software should be determined by the maximum cognitive load of your teams*. Cognitive load, as defined by psychologist John Sweller, is “the total amount of mental effort being used in the working memory”. So, cognitive load is important to any activity that requires mental and creative efforts, such as development.

Cognitive overloads comes in three flavors:

* **Intrinsic**: Relating to aspects of the task fundamental to the problem space.

* **Extraneous**: Relating to the environment in which the task is being done.

* **Germane**: Relating to aspects of the task that need special attention for learning or high performance.

As stated by the authors, I like to emphasize:

> Broadly speaking, attempt to minimize the **intrinsic cognitive load** (through training, good choice of technologies, hiring, pair programming, etc) and eliminate **extraneous cognitive load** (boring or superfluous tasks or commands that add little value to keep in working memory). This will leave more space for **germane cognitive load** (where “value-added” thinking lies).

![Cognitive Overload](https://dev-to-uploads.s3.amazonaws.com/i/ui9w97horvdu8fu556yt.png)

Sometimes, people equate serverless with complexity, which, in all fairness, is actually better to minimize or abstract projects. Yan Cui wrote about it: [“Even simple serverless applications have complex architecture diagrams”, so what?](https://theburningmonk.com/2020/11/even-simple-serverless-applications-have-complex-architecture-diagrams-so-what/).

A And here we have a great case for serverless: With the primitives as services you can focus on developing your domain, and that has a great value, even more for lean teams you can increase your **germane cognitive load**, because you focus in just adding value to your business. The complexity is abstract and sure, there are servers somewhere and someone owns them, and you pay for them, but I see this as a multiplier in value. Building on-premise servers is **not even an option** for most of the companies in the world (_I know, shocking!_).

Serverless offerings are multipliers and enablers of value for companies and individual around the world.

## The rise of the Serverless Developer

> **All technologists in a business are there to provide business value** – The job of a person in a business is not to provide technology, but to provide business value.
> <footer> Paul Johnston, <a href="https://pauldjohnston.medium.com/serverless-is-a-doctrine-not-a-technology-4193ccb66cfc" target="_blank" alt="Serverless is a Doctrine, not a Technology">Serverless is a Doctrine, not a Technology</a></footer>

And so, at this point, the Serverless landscape is mature and ready to became ubiquitous. And to explore these undiscovered countries we need to broaden our range. As Bill Buckley puts it in Cloud, “every line of code is a buying decision” - we’ll need to be cost aware, we’ll need to be fully aware of _trade offs_, we will increasingly blurry the lines between roles.

> Technological objects can exert substantial force, but only humans can and must be held to account. I hinge the assumption of object-subject asymmetry on a distinction between efficacy and agency. Efficacy refers to the capacity to effect change. Agency refers to the capacity to inflict will. This distinction comes from Ernst Schraube’s technology as materialized action approach, which claims that although technology can be highly efficacious, only humans can be agentic.
> 
> <footer><a href="https://amzn.to/3spSG2z" target="_blank" alt="How Artifacts Afford">How Artifacts Afford</a>, Jenny L. Davis</footer>

There will be no rollout of the status quo, so we’ll have more and more new roles such as FullStack Serverless, Serverless Engineers, Serverless Developers and so on. Sure, there are a lot of symmetries and ways to navigate between Clouds, even more with multi-cloud strategies, but today there’s not a simple way in and out of one cloud to another. There are people with dozens of certifications in AWS and Azure, but we can’t expect everybody to learn everything. We’ll need to think alongside our team topologies, align serverless with our workloads, and understand how to navigate this Brave New World of Serverless.

----------

### Little Philosophy Sidebar: Hyperobjects

Also from Paul Johnston: [Serverless applications are Hyperobjects… and it really matters](https://pauldjohnston.medium.com/serverless-applications-are-hyperobjects-and-it-really-matters-a59d0f31d176), (which is a great and must recommended read) Paul Johnston also, offers us great gems like:

> Nothing is ever perfect (not even serverless) but the one thing I can say is that the biggest headache is not the initial build. It never is. That’s only the first headache (and I’m not diminishing it). The biggest headache is managing a large unwieldy stack once you have committed to it.

Before starting a career in tech I studied Philosophy in college for a while, until I dropped out. But I never stopped reading and following contemporary philosophy. I’m definitely not an authority on the subject — I’m just a philosophy geek. 

That said, I closely follow a new school of philosophy called [Object-Oriented Ontology (OOO)](https://en.wikipedia.org/wiki/Object-oriented_ontology) (And no, no, _hold your horses_, it’s not at all related at all with Object-Oriented Paradigm in programming). Started in the late 1990s and lead by Graham Harman (author of [“Object-Oriented Ontology: A New Theory of Everything”](https://amzn.to/3rDO0pT)), OOO has brought us who I consider one of the most prolific and thought-provoking authors of our time: Timothy Morton. His book on the subject—[“Hyperobjects: Philosophy and Ecology after the End of the World”](https://amzn.to/3pw9sLy)—is one of most fundamental texts in my worldview, and what I understand as an excellent approach in looking at the World. Morton coined the term hyperobjects to refer to things that are massively distributed in time and space relative to humans. And seeing these concepts collide doesn’t cease to amaze me time and time again.

There are these things we can measure, we can affect, we can see some part but never the whole, something distributed in time and space that will be invoke only when needed. We employ the power from rented resources and the collective intelligence of humans, to build libs, frameworks, where the knowledge of it all is not possible to be held in just one person's brain. 

----------

![Still here?](https://dev-to-uploads.s3.amazonaws.com/i/3nje199mxovrd33e9dr8.gif)

Just kidding. I just don’t known when to stop since is an open question for me and the subject fascinates me. Please leave your thoughts, takes and insights on [twitter @ me!](https://twitter.com/ibrahimcesar)