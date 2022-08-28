---
title: Serverless Transformation at a news media outlet in Brazil
description: "A little exploration about our Serverless Transformation so far"
featured: true
image: ~/assets/images/sp.jpg
pubDate: "2020-11-28T10:50:00.000Z"
language: en
---

> “Why is more important than how.”
> [Second Law of Software Architecture](https://amzn.to/3zDW9Pa)

<p class="lead">More than one year ago I started a plan to make a serverless transformation as Technology Director at [Nexo Jornal](https://nexojornal.com.br), a media news outlet here in Brazil. In this post I will share the whys, hows, the good, the bad and the ugly so far. It's been a rewarding and challenging journey.</p>

# Why serverless?

*AWS SES (Simple Email Service)* is a huge chunk of our monthly bill. We send millions of emails each month. Everyday with sent hundreds of thousands of emails. We since the begging started using SES along with [Sendy](https://sendy.co/) which is great by itself but becomes a burden when you need to scale. First, you can't rely on a RDS, you need to use a MySQL on your machine and everyone knows the pain is have to horizontally scaling. And besides the huge footprint in resources on send the emails, the server sits idle almost all the time. Sendy also handles the analytics for newsletters clicks through redirects, but since [2017, SES does it too](https://aws.amazon.com/blogs/messaging-and-targeting/open-and-click-tracking-have-arrived/) which was not the case in 2015 when we evaluated how to send newsletters.

Facing the burden of high maintenance with a small team of three developers counting with me (we are a digital newspaper with a subscription business model without ads so have a lot of other services: billing, transaction emails, login, the paywall, internal tools for journalists create simple graphics and many others), and one focused on the frontend only, we needed more room to plan, expand our services and start delivering value and not only dealing with fires. Caught my attention that [The New York Times was using serverless to send their newsletters](https://open.nytimes.com/building-a-serverless-email-platform-at-the-times-84d77760d824) and it made a lot of sense to me. So, I started my research.

## Welcome to the real world

> A journey of a thousand step functions begins with a single lambda

We identified some low hanging fruits. Small NodeJS applications running Express, sometimes we eve just one or two routes for very simple operations. And started from there.

Of course, as I like to remember to my team, “No plan survives the first contact with reality”, no tutorial will cover all our use cases, usually they skip the hard parts (CORS, dealing with parsing, error handling and so on). Which is not to say that we don't needed a plan. On the contrary. “Plans are worthless, but planning is everything" is credited to the Dwight D. Eisenhower, from that time when US Presidents spoke smart things, which is, at least in the time of this writing, 4 years ago. And we started mapping and converting this services and deliberately testing different approaches.

### Bare metal

Of course, we started on the console. Baby steps. Soon the editor stopped show our code. Panic. And finally done. We were very proud but at the same time everyone knew it was a small win, should be a better way to do. Not every service was just a GET endpoint. And glue altogether had the same feeling of set up Nginx, NodeJS etc in each EC2 instance we needed.

### Serverless Framework

Our next step was [The Serverless Framework](https://www.serverless.com/), which is great and the plugin community is awesome. The free plan has a lot of benefits but we need at least the first tier paid, and is not an easy sell use yet another service to do something that has very little or no visibility and with our currency each dollar screamed almost times 5. And rely solely in the plugin community somewhat looked to me the same "trap" the WordPress has, of abstract so much, that is easy to not understand the whole picture.

### Terraform

We tried Terraform and it felt very different. We used in a small project to create EC2 instances (our first use of IaC with servers at the time). The language is great but I had to be aware of every AWS specific resource anyway and to me learn and use a language outside of AWS did not looked a good pursuit in the long run, since we would not have, at least for now, any kind of multicloud strategy. And the complexity appears to grows a lot when the project advances.

### Amplify

The joy of use [Amplify](https://docs.amplify.aws/) for the first time is great. Suddenly everyone has new superpowers. Authentication in minutes, CI/CD out of the box. In our daily work we had a lot of interface with editorial and create special pages with interactive or more advanced long form stories, and Amplify is our tool for the job. Amazing developer experience. [Serverless Land](https://serverlessland.com/) is amazing, but for me, Amplify still so far the best AWS documented tool. And the team behind is incredible amazing. The book "Full Stack Serverless" from Nader Dabit is amazing, a must read.

### SAM

But for other projects, Amplify did not move you so far. So, with the mindset of "full AWS" I approached [SAM](https://aws.amazon.com/serverless/sam/). SAM is really great, nice experience, if your project is small you can setup really fast and even when became complex you can just extend with "regular" CloudFormation. Regular on quotes because it was not an easy task to learn. SAM is: Serverless centric with best practices built-in, has Eric Johnson in the team, and he is a great at explore the tools, I learn a lot from him and he has this great energy and the best AWS mascot (followed by Corey Quinn's Platypus).

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/39d69d8pnlrbfza42opi.png)

### CDK
I was settled with SAM, since I was more and more learning to extend it, but thanks to Matt Coulter's work, I decide to give a try in [CDK](https://aws.amazon.com/pt/cdk/). Matt Coulter created [CDK Patterns](https://cdkpatterns.com/) and even starting from scratch is a great repository to learn a ton. In a [recent podcast](https://www.serverlesschats.com/76/) of the amazing "Serverless Chats" I shared the same of Jeremy Daly liking using more DSL than imperative code, even more that in the last months and I'm more and more changing gears to write more declarative, ["functional-ish" code](https://frontendmasters.com/courses/functional-javascript-v2/). But I had to say, the time safety, the idea of constructs and a better workflow with the team, changed my mind. Our next big project will definitely be with CDK.

But in the end I would say is less than "the chosen one", "the code to rule them all" and more a spectrum, in each the trade offs of each other should be evaluated. Amplify, SAM and CDK are abstractions for CloudFormation in the end, since they all compile to it. So I would say is "choose your abstraction", the power of each one will be the productivity you will benefit from. And we will continue to use Amplify and SAM as well.

## Summary

### The Bad

I would say, right off the bat, my problem was with testing. I remember joking with with my co-workers that I was glad AWS gives us 1 million free invocations because I was spending half of that just in development.

Then, complexity. All software tend to chaos. There's a great quote on "Architecture Patters with Python",Bob Gregory & Harry Percival when they say that the big ball of mud is the natural state of software. Takes effort. But our frameworks, libraries and conventions abstract much of these from us and suddenly I had to deal with SQS, SNS (in the first days: which is which again?). And this besides all the regular tooling for the development like bundler, etc. 

If we had Frontend, Backend, FullStack, Ops, I was feeling this was another thing entirely. Reading one of the great posts from Sheen Brisals, I came across with the term Cloud Engineer. That was what I was trying to verbalize. But in the first couple of months, I felt I was trying to bite off more than I were able to chew. When I showed to our team the architecture from NYT to send emails:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/qzp4pfl4f4tltekue941.png)

The feeling shared was "Oh, looks awesome, but this is for the big league. They are the NYT". Yan Cui recently wrote about it in [“Even simple serverless applications have complex architecture diagrams”, so what?](https://theburningmonk.com/2020/11/even-simple-serverless-applications-have-complex-architecture-diagrams-so-what/)

### The Ugly

Development itself was really ugly and messy. The first lambdas were zipped through CLI and we send in the Lambda console. We got _really fancy_ when we made a *npm run upload* that zipped the folder, uploaded to s3 and printed back. Good grief we started using SAM and Amplify that transformed our experiences with deploys.

Learn the [AWS Well Framework](https://aws.amazon.com/architecture/well-architected/) was game changer. We started using our same and at the time, _only_ bloated AWS account. So we had very polluted CloudWatch logs, Stacks in the CloudFormation with almost the same name that made us had to keep checking the random strings, several S3 buckets like space garbage floating around that we had no clue if we had to keep or delete and so on. Use AWS Organizations as soon as you can.

### The Good

> "It takes a global village to create an application"

The serverless community around AWS is awesome. I did not know any of these amazing people, but each one gave so much value to my growth as Cloud Engineer and we have a long road in our serverless transformation ahead of us. So I think the best is the power of the community.

In no particular order: [James Beswick](https://twitter.com/jbesw), [Jeremy Daly](https://twitter.com/jeremy_daly), [Nader Dabit](https://twitter.com/dabit3), [Yan Cui](https://twitter.com/theburningmonk), [Eric Johnson](https://twitter.com/edjgeek), [Matt Coulter](https://twitter.com/NIDeveloper), [Ben Ellerby](https://twitter.com/EllerbyBen), [Tomasz Łakomy](https://twitter.com/tlakomy), [Alex DeBrie](https://twitter.com/alexbdebrie), [Marcia Villalba](https://twitter.com/mavi888uy), [Sheen Brisals](https://twitter.com/sheenbrisals), [Andrew Brown](https://twitter.com/andrewbrown), [Mark Nunnikhoven](https://twitter.com/marknca), [Corey Quinn](https://twitter.com/QuinnyPig), [Heitor Lessa](https://twitter.com/heitor_lessa), [Rebecca Marshburn](https://twitter.com/beccaodelay) and many more and the work of [Nicole Forsgren](https://twitter.com/nicolefv), [Jez Humble](https://twitter.com/jezhumble) and [Gene Kim](https://twitter.com/RealGeneKim) that drives so much of my current vision.