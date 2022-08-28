---
title: The State of Serverless Databases in AWS
description: "The start on a series"
featured: true
image: ~/assets/images/databases.jpg
pubDate: "2021-04-29T10:50:00.000Z"
language: en
socialImage: "/features/serverless-databases.png"
---

Databases are a key piece of any service or application, because is where gonna live your most precious assets: your data. Since my post [“Serverless is Ready, Developers are Not”](/blog/serverless-is-ready-developers-are-not/), I talked with a lot of peers about some issues in the space and a lot gravitates around tools and a great deal is about ways to handle data.

## First, we need to talk about Relational Databases and Serverless

Relational Databases and FaaS don’t play nice together by nature: RDS are connection-based, so they should work with a few long-lived clients, such as web servers, not the fast, ephemeral, spike, nature of serverless workloads.

Even with the great latest improvements like [Amazon RDS Proxy](https://aws.amazon.com/rds/proxy/) and cold starts becomes more and more a UX question (depending, of course, of your runtime and use-case).

Still, RDS is the most familiar pattern to handle data and some could say, the “standard” one—NoSQL as a category, describes tools wildly different, since it encompasses all that are *not* SQL, all stacked together. 

Jeremy Daly in **Building Resilient Serverless Systems with “Non-Serverless” Components** on Serverless Days 2020 made a great talk about still use RDS models with FaaS. Is not “easy-peasy” or plug and play, as you can see (I highly recommend this video, is also a crash course on FaaS architectures):

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'>
<iframe title="YouTube" width="560" height="315" src="https://www.youtube.com/embed/coygxBg2wTY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

So, in this series I’ll experiment with a lot of options available, use-cases, trade-offs and get a hands-on and share my experience here. This is the starting of a series of serverless databases in AWS. I will throw third party offerings in it too, which I can use on AWS. Below is my list. If I’m missing some database or completely getting something wrong—please, let me know!

- [Aurora Serverless](https://aws.amazon.com/rds/aurora/serverless/)

- [DynamoDB](https://aws.amazon.com/dynamodb/)

- [DocumentDB](https://aws.amazon.com/documentdb)

- [ElastiCache](https://aws.amazon.com/elasticache/)

- [FaunaDB](https://fauna.com/)

- [MongoDB](https://www.mongodb.com/cloud/atlas)

- [Upstash](https://upstash.com/) - [Redis: Exploring Redis as Serverless Database to solve idempotence in APIs](blog/redis-exploring-redis-as-serverless-databases-to-solve-idempotence-in-api-upstash/)

- [Route 53](https://aws.amazon.com/route53/)

In the next post in this series I will go over one of these databases, try to use on a use case a little more than “Hello World”—all is shinning and pretty in “Hello World” projects. So, please point me out databases missing, use cases you think I should approach and so on through twitter!