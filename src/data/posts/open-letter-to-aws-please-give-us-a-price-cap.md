---
title: "Open letter to AWS: Please, give us a price cap"
description: "We need psychological safety. And financial!"
featured: true
image: ~/assets/images/price.png
pubDate: "2021-05-05T10:50:00.000Z"
language: en
---

<p class="lead">Hello AWS,</p>

One book (which I bought for my kindle in amazon.com.br) changed my life. No, it wasn’t “The Secret”. As I stated so many times before this book was _[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations](https://amzn.to/2Rh9paY)_ by [Dr. Nicole Forsgren](https://twitter.com/nicolefv) _et al._ Delivering software quickly, reliably, and safely is at the heart of technology transformation and organizational performance and **all paths start on creating a culture of psychological safety** (Other resource to read along with her _magnus opum_ is [The State of DevOps 2019](https://services.google.com/fh/files/misc/state-of-devops-2019.pdf).

**We cannot have psychological safety with the risk of being charged hundreds of dollars**. I certainly can't. I speak as a Brazilian, a developer from the Global South. And I, in my context, have several privileges myself. I lead a (small) team. I’m male and I have a stable job as stable as the news media industry is.

I was thinking about this a lot when yesterday [Forrest Brazeal](https://twitter.com/forrestbrazeal), whose surname sounds a lot like of the name of my country, published his rant [Please fix the AWS Free Tier before somebody gets hurt](https://cloudirregular.substack.com/p/please-fix-the-aws-free-tier-before). I want to add weight and my perspective on this.

Last year, as part of a hiring process I gave as assignment follow the [“Build a Serverless Web Application”](https://aws.amazon.com/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/?nc1=h_ls) and then send me a narrative of the process on so on. To eliminate any doubts, I asked them to send me the last links I would avail under 24 hours and made sure any expenses they could have we would have paid them. One of our prospects never answered back. But this kind of “ghosting” is normal, and we moved on. Months later, we reconnect. And I learned that this person at that moment didn’t have a credit card.

When I open an account, I’m on some cases “awarded” with the possibility of gain some credits. Sometimes I got the credits. Sometimes not. Even when I didn’t get the credits, AWS called me back to talk with me - in Brazilian Portuguese, which is great. But to be in this position, to get some credits, I had to add my credit card and validate its funds. And yes, I have times in my life my credit card at certain times didn’t validate me in “free trials”.

There are great initiatives, as I learned, the [AWS Educate](https://aws.amazon.com/education/awseducate/aws-educate-faqs/) which I definitely need to know more about and will apply.

There are two things, I always say in the trainings with people in my team, you **must** do when create the account: Lock the account (MFA for root and do not use root, create an iam_admin with billing access turned on and MFA in it too) and the other thing is... Create the CloudWatch billing alarm. We put in $5 USD per month usually (which at the time of writing is $26,89 BRL. An accident of 100 USD would be $537,87 BRL. Just for reference, the monthly minimum wage, here is $1.100 BRL (also today, would be $204,54 USD). As defined by [Indeed](https://br.indeed.com/career/programador-j%C3%BAnior/salaries) the medium junior developer has a monthly salary of $2.459 BRL (but this can vary widely depending on where you live in the country) - 456,94 USD. What if the dollar prices rises and rises?

And this is my reality from Brazil. Latin America is huge and has several countries. There are Asia, Africa and inside each developed country there are people trying to get better and learn cloud skills. Besides limitations with the [Free Tier](https://www.lastweekinaws.com/blog/is-the-aws-free-tier-really-free/) - and thank Bezos we have 1 million Lambda invocations free per month because I use half of them just testing. 

I will not forget to remember we had some good advancements. Now in Brazil we can pay AWS with other forms besides Credit Card. This was a huge thing they added in the last year. Our billings are in BRL (which is great, but the base services still in USD and still depending on the current price of conversion). We can paid by TED now. And they are still reviewing the payment in our [beloved Boleto](https://aws.amazon.com/pt/legal/aws-sbl/). But to open the account, we still having to have a credit card.

They had to worry about the bill. What if the alarm be too slow?. Or you add a resource so pricey that will blowout any expectations you had? Remember, a lot of “warnings” put in place are great. But sometimes people are following some instructions and they *don’t read it*. We can blame users all day. But I saw people with Doctor’s degree that get the error message or the warning in the screen, _in plain English_, and they just don’t read. The console is the first way to interact with the Cloud and UX and other factors will pile up here but simply put, some people just don't read. **Yes, I read the terms of use** and every other warning is the biggest lie we tell our systems or worse, we are just blind, following the golden blocks click in everything on the way. This is what is expected of a Cloud Developer? An Architect? No. definitely no. I'm here talking for people that wants to learn, that are trying for the first time. The builders of tomorrow. 

Now think in someone with a cognitive load of learning Cloud. Cloud is big, right? Every day a new service. Every region a different price (_fun fact_: for several projects we pay more to run here in Sao Paulo than anywhere else). And well, **everyone** fails.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Oops! Created a DB cluster for testing, but I was logged in to my personal <a href="https://twitter.com/hashtag/AWS?src=hash&amp;ref_src=twsrc%5Etfw">#AWS</a> account, not my official one. Time to talk to support, and to use a budget (already had an alarm for half of my usual bill, which fired mid-month as expected). <a href="https://t.co/YKEVysYDBh">pic.twitter.com/YKEVysYDBh</a></p>&mdash; Jeff Barr ☁️ (@ 🏠 ) 💉 (@jeffbarr) <a href="https://twitter.com/jeffbarr/status/1367142173620117506?ref_src=twsrc%5Etfw">March 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Please, put a price cap.

Just let us say how far we can pay. Could be an opt-in type of account, very limited. But we need a playground. Learning cloud is a burden enough to worry if it will blow up in our faces. There really does need to be more protection against running up a large unexpected bill.

And _we mean business_, right? Is from the Global South the promised [“Next Billion Users”](https://nextbillionusers.google/) will be. We don’t have all that is needed to run our _on premises_ resources like the Basecamp guys, we need the Cloud to empower us and our economies, and I believe I speak for many people when I say this would help us a lot. A LOT. We need psychological safety to deliver better software, to comply with the Well-Architected Framework and even more, when we are learning.

Please take into consideration AWS!

### Signed,

[Ibrahim Cesar](https://ibrahimcesar.cloud)