---
title: "Redis: Exploring Redis as Serverless Database to solve idempotence in APIs"
description: "More than cache"
featured: true
permalink: "/blog/redis-exploring-redis-as-serverless-databases-to-solve-idempotence-in-api-upstash/"
featuredImage: redis.png
date: "2021-05-14T10:50:00.000Z"
image: cover.png
featuredImageColor: "#1E2C54"
language: en
---

<p class="lead"><b>Redis means fast.</b> This was the  impression I always had. But, at the same time, for me, Redis was “just” (as if this wasn't  enough) a cache store. To my surprise, Redis is much more versatile than this.</p>

This will be the first in a series exploring [The State of Serverless Databases in AWS](/blog/the-state-of-serverless-databases-in-aws/) and for it I picked Redis , you know, just to try something other than the usual suspect (DynamoDB) (and to give  a third-party offering a try). In the following weeks, my plan is to explore some database offerings used along with serverless at AWS and explore their particular tradeoffs.

## Serverless Redis

As [self-defined, Redis is](https://redis.io/):

> ...an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker. Redis provides data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams.

You can take [a look in several in-depth papers](https://redislabs.com/redis-enterprise/data-structures/) describing each data structure in order to make a better informed decision. Since it's open source we could theoretically implement it in a server but it would be a strange, if not wrong turn, in keeping in the Serverless lane. Here enters [Uptash, a Serverless database](https://upstash.com/) offering for Redis. In [Microblogging with Serverless Redis](https://dev.to/fllstck/microblogging-with-serverless-redis-2nl3) you can take a look how CRUD works and more framework-oriented, you could checkout [Lee Robinson](https://twitter.com/leeerob) has a great video on how to use it with Next.js:

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'>
<iframe title="YouTube" width="560" height="315" src="https://www.youtube.com/embed/FytxaSVQROc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

As I promised in the opening article, I want to do in-depth explorations. Not just our run-of-the-mill `foo` / `bar` examples (for which the official docs of Upstash is guilty, BTW). For Redis, I almost stuck at the key/value store type, but there are several use cases you can unlock with this solution since it gives you access to a GraphQL API, for which you can have an explorer for you, documented. 

![Upstash offering](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u6l30fgh7caphace4j6p.png)

Before jumping in: for me, the argument of having a **price cap** and no surprises in a bill is always a _feature_, and in this case you don't even need to give your credit card details to start. But you need to enter your credit card when you exceed the free tier independent from the price cap feature - which is totally fair. I have spoken about this issue in a previous post, [Open letter to AWS: Please, give us a price cap](https://dev.to/aws-builders/open-letter-to-aws-please-give-us-price-cap-4ge6),  and for me at least, as a developer and living in Brazil, it is an extremely overlooked matter by AWS.

My objective is to try to take use-cases with some value and at the same time explores a deep more about dealing with the data and I want to tackle a very important one, at least, for me: _idempotence_. So there will be nothing fancy than a `key`/`value` store but I think explore an important feature for any production-grade function. Also, please note that while this is a feature in `NodeJS`, I'm following the steps of the official `Python` Powertools library. I hope if you are not from the `Node` ecosystem could get some value as well.

## Idempotence: doing by myself

An idempotent operation can repeat an arbitrary number of times, and the result will always be the same. In arithmetic, adding zero to a number is idempotent. Some kinds of requests into AWS lambda should run more than once, generating inconsistency problems when your function isn’t idempotent. AWS has a [page in how to address this much needed feature](https://aws.amazon.com/premiumsupport/knowledge-center/lambda-function-idempotent/). And, yes, it is canon, there is a really important reason to [make your API idempotent](https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html).

### Why idempotency matters:

- You have a lambda that makes a payment through an API and save in some database. If one is successful and the other fails, your Lambda will _run again_ and you could end up with two registers or worse... double  charging your customer.
- You don't want or need to reprocess again some request that could take a lot of time or resources. Maybe a user is trying to make an action time after time. 

Making an [API idempotent](https://medium.com/gin-and-tonic/understanding-idempotency-in-rest-apis-7a5568f41406) is not as [trivial as many people think](https://awslabs.github.io/aws-lambda-powertools-python/develop/utilities/idempotency/). You could start out by looking at _Lambda Powertools for Python_ from AWS that does a magnificent job of explaining this use case and a concrete way to implement. There’s also this great article from [Malcolm Featonby](https://twitter.com/mfeatonby), [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/) featured in the Amazon Builder’s Library as [Architecture level 300](https://aws.amazon.com/blogs/architecture/category/learning-levels/advanced-300/) which falls in the _advanced_ classification.

Let’s start with our scope from the _Lambda Powertools_:

> **Idempotency key** is a hash representation of either the entire event or a specific configured subset of the event, and invocation results are JSON serialized and stored in your persistence storage layer.

First, I create a new database. I’m from the famous ‘5 minutes install’ from WordPress. Upstash claims a 30-second installation, and they are not joking):

![Creating a Database](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4rq8ela06752l03a1rhp.png)

Here you can see I chose to enable the **Strong Consistency Mode**. **strong consistence**. Strong Consistency offers up-to-date data but at the cost of high latency. Eventual consistency offers low latency but may reply to read requests with stale data since all nodes of the database may not have the updated data. Since this is a highly complex topic, and this brief explanation only very briefly begins to scratch at its surface, I recommend you read the book [**Designing Data-Intensive Applications**: _The Big Ideas Behind Reliable, Scalable, and Maintainable Systems_](https://amzn.to/3f2LKTS) by [Martin Kleppmann](https://twitter.com/martinkl). I usually work with eventual consistency _most of the time_. I’m picking strong here because I want to make the best effort to be as idempotent as possible, because otherwise we could get false negatives.

Each Lambda receives an [`event`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/3c5d54b997a28dba42c10b01dfb7c0d8d30231e8/types/aws-lambda/trigger/api-gateway-proxy.d.ts#L186) as part of their request.

So, the first thing we are going to do on our lambda function is to create a hash representation of the whole object `event`. I'll use the Node native [`crypto`](https://nodejs.org/api/crypto.html) lib.

```ts
const hash = crypto
               .createHash(‘sha256’)
               .update(event)
               .digest(‘base64’);
```

This will generate a unique identifier for that given event and this is going to be used as our unique key in the Redis database.

I’ll leverage [**Middy**](https://middy.js.org/), a lightweight middleware for Lambda in Node, which has a particularly cool feature (and a really helpful one for the task at hand) that is its _onion-like_ middleware pattern implementation and the ability to create a middleware that can read the function _after_ and _before_ the handler, which is essential for idempotent APIs.

![Middy Middlewares](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qmwmjxqpw3tjzgpx7ucn.png)

In the _before_ we had to turn the `event` into a hash;

```ts
const createHash = (event: any): string => {
  return crypto
           .createHash(“sha256”)
           .update(JSON.stringify(event))
           .digest(“base64”);
};
```

Note that there’s an **explicit any** there—the mythical, non-existent in production `any`.

Then, check at the Redis database if that hash already exists in the table. We’ll do this using the lib [`ioredis`](https://github.com/luin/ioredis). That we’ll pass an option to the middleware we are creating.

```ts
//in the handler
import Redis from “ioredis”;

// handler code
handler.use(jsonBodyParser()).use(
 idempotent({
   client: new Redis(process.env.UPSTASH_REDISS)
 })
);
```

The Redis instance is receiving the `rediss://` string with your user and password credentials through the environment. This is **not**  the most secure way to do so, you can store this URL in [AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/index.html) and then import in a secure way that will even let you rotate the credentials if needed. I’m taking this shortcut here for the purpose of this test, but I'm sure you'd _never_ do this in production, right?

![Wink](https://media.giphy.com/media/6ra84Uso2hoir3YCgb/giphy.gif)

Anyway, we then need to parse the result since we’ll save them as string in the next stage of execution.

```ts
// in the middleware
const hash = createHash(request.event);

const getByHash = await options.client.get(hash);

if (getByHash) {
  return JSON.parse(getByHash);
}
```

In case of a miss, we get a `null` response, which is great to a really simple check. If we get `null`, we don’t need to do anything, the function will then proceed to other middlewares, the handler and then to the _after_ execution order. If this get is not _null_, we have to return the response stored by our _after_ function.

```json
{
  statusCode: 200,
  body: ‘{\n  “data”: {\n    “message”: “Hello from the other Side!”\n  }\n}’
}
```

Then we’ll invoke `return response` in your middleware.This will halt the execution early and it will not pass for any other part of the lambda, so this middleware needs to be one of the first, if not the first to avail. 

In the _after_ we had to save the response from that event hash.

```ts
const hash = createHash(request.event);
const responseStr = JSON.stringify(request.response);
await options.client.set(hash, responseStr);
```

And nothing more. Pay attention that this phase and execution happens after the handler send the response through the handler.

And that's that. Pay attention that this phase and execution happens after the handler sends the response through the handler.

And yes, _it is fast_. There’s a post from Upstash’s own blog, [Latency Comparison Among Serverless Databases](https://blog.upstash.com/latency-comparison) followed by a [discussion on Hacker News](https://news.ycombinator.com/item?id=26799074). I did not make a benchmark or even plan to do so, but as a user, I felt it was as instantaneous as could be. And this is certainly a feature that meets my purposes.

And well folks, “that’s all”.

Just kidding, of course it's not. But it is a start. Since the chance of collision is nearly impossible (i.e., two hash being equal) only exact the same request will get the same response, but if we want to check some keys like a `x-idempotence` key in the header or even a field in the body of the request, we could target it as well.

If you wanna that a look at this implementation and help, I wrapped this code and made available for your use in NodeJS Lambdas, as a middleware for **Middy**. The lib accepts options to target headers, keys in the body and path: [**Middy Idempotent**](https://github.com/ibrahimcesar/middy-idempotent)

-----

As for the lib above, you can implement the SSM so it won't  place your secret string in the environment for your infrastructure, but I plan to add another storage provider, DynamoDB at least in the next days.

Following that I’ll test another serverless database offering in a not so “Hello World” example but with practical and more valuable use cases -  or at least, this is my hope! And please leave your thoughts, takes and insights on twitter!