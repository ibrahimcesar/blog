---
title: "Kafka on the Serverless Shore: Building event-driven applications with Kafka"
description: "As I awake one morning from uneasy dreams, I found myself asking why I never tried to use Apache Kafka. And then, I did."
featured: false
pubDate: "2022-05-25T11:08:00.000Z"
socialImage: "/features/kafka.png"
---

As I awake one morning from uneasy dreams, I found myself asking why I never tried to use Apache Kafka. 

As a [event-driven](https://ibrahimcesar.cloud/blog/event-driven-architectures/) enthusiast and with the recent announcements of [Amazon Managed Streaming for Apache Kafka (MSK) Serverless](https://aws.amazon.com/msk/features/msk-serverless/) and the [Serverless Kafka](https://upstash.com/kafka?utm_source=ibrahim_kafka) offering of [Upstash](https://upstash.com?utm_source=ibrahim_kafka) I gave another try. 

I played a little on my computer in the past, but only see the work to go to production. I confess was beyond what I was up to do in my free time. So the serverless come to rescue! This is one of best-selling point of “not having to think about servers”, you can just experiment with new technologies.

Since the AWS offering is in public preview and not General Available, I went with **Upstash's Kafka Serverless** offering.

## What is Kafka?

> I thought that since Kafka was a system optimized for writing, using a writer’s name would make sense. I had taken a lot of lit classes in college and liked Franz Kafka. Plus, the name sounded cool for an open source project.
> So basically there is not much of a relationship.
> **Jay Kreps**, [Apache Kafka’s co-creator on Quora](https://qr.ae/pvYJjL)

Kafka is a publish/subscribe messaging system. Other ways to describe it are “distributed commit log” or nowadays, as a “distributing streaming platform”. 

The core entity for Kafka is a _message_. For all purposes, Kafka doesn't care about the content of the message. It's just an array of bytes. Messages also can optionally have a _key_. Kafka persistently stores the messages in the order. Is possible replay the stream to get to the state of a system at a point in time. A time machine for your transactions.

![Kafka Topology](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/09kptfycxc9bd13yny5p.png)

**Topics** are a way to categorize the messages in order to allow other applications to have some visibility of what messages they will access.

And then, the heart of the system: **Producers** and **Consumers**. Basically, the first, also called _publishers_ or _writers_, produces messages, usually _a lot_ of messages, to require Kafka, and other applications act upon those messages. Consumers read messages from a topic and. We can call them _subscribers_ or _readers_ too.

Kafka is a lengthy subject, worth of books, courses and hand-on practice. There are a lot more concepts that I will not cover in this post. Well is even subject for papers, like [On Efficiently Partitioning a Topic in Apache Kafka](https://arxiv.org/abs/2205.09415). I highly recommend [Apache Kafka for beginners - What is Apache Kafka?](https://www.cloudkarafka.com/blog/part1-kafka-for-beginners-what-is-apache-kafka.html).

The benefits of a serverless offering is the overhead in management of brokers, partitions, the Zookepeer and all the other moving parts to allow a fault-tolerant and highly distributed applications is taken care for you. And then, you can focus on write the code you need in your domain, with your tools — this is what I call **the joy of serverless**.

## On the shore

To start, you just need to login, select Kafka and will create our first _cluster_. Kafka works in a distributed way from the get go.

![Step 1 Upstash](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ddizza7iievw2bwn6mm5.png)

To create the cluster, we'll need a name and select the region. And also, if we need to be in only one availability zone or span of over one. Choose a single-zone for testing/development, multi-zone for production use cases.

![Step 2 Upstash](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tpngy642dw5f9ztjuk16.png)

We will the create our first topic and choose our desired number of partitions. Partitions are how Kafka provides redundancy and scalability, and each one can live on a different server. This is a very important concern for performance and scaling.

![Step 3 Upstash](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th30wkjcazi5qu3prhxz.png)

In the advanced options for topics, there will be several options with sensitive defaults. Some configurations will require an upgrade in your plan. So, plan for the go-live depending on your application needs.

![Step 4 Upstash](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d0hvojqpmbhz2v4c86uj.png)

And… _that's it_. No need to worry about servers.

![Joyce cluster](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/avi5c83o1vglgol4wb23.png)

For this tutorial I will use Node.js on an AWS Lambda. Code is available in this GitHub repository using TypeScript:

{% embed https://github.com/ibrahimcesar/lambda-serverless-kafka %}

I'll use the vendor package ([@upstash/kafka](https://www.npmjs.com/package/@upstash/kafka)) that leverages the REST API. Since we are at the shore, we'll not go open sea and build a ship. Not even a boat. We'll just get our feets wet.

I'm writing an application that will read something, from some author. And post every line to Kafka. Then, I'll consume after that.

Basically is just two lambdas, one for each endpoint: a writer and a reader.

And we'll use my topic `ulysses`. I could send all lines with page numbers from the book Ulysses from James Joyce. Or analytics data. Or log data. You get the gist.

```ts
// This is just a edited. 
// View full file at: 
// https://github.com/ibrahimcesar/lambda-serverless-kafka/blob/main/src/lambda/producer.ts

import { Kafka } from "@upstash/kafka";

const kafka = new Kafka({
  // configuration
});
const writer = kafka.producer();

try {
    const res = await writer.produce("ulysses", writing, {
      key: payload.author ?? "",
    });
    response = res;
  } catch (err) {
    if (err instanceof Error) throw err;
    else throw new Error(`${err}`);
  }
```

And to consume is simple. Note that I have there two hardcoded values, `consumerGroupId` and `instanceId`. You, at the time, basically can send whatever you want in the first request and Upstash will provision for you.

```ts
// Try and catch block. 
// View full file at: 
// https://github.com/ibrahimcesar/lambda-serverless-kafka/blob/main/src/lambda/consumer.ts

  try {
    const writing = await reader.consume({
      consumerGroupId: "group_1",
      instanceId: "instance_1",
      topics: payload.topics,
      autoOffsetReset: payload.autoOffsetReset ?? "earliest",
    });
    response = writing;
  } catch (err) {
    console.error(err);
    if (err instanceof Error) throw err;
    else throw new Error(`${err}`);
  }
```

> Little TypeScript goodie. I'm using the flag `useUnknownInCatchVariables: true` in the `tsconfig.json` file, so the catch is of type `unknown`. Hat tip for [Mike North](https://www.typescript-training.com/) to [show the way](https://www.typescriptlang.org/tsconfig#useUnknownInCatchVariables).

And now we can start writing and reading. To write is just a `POST`.

![POST](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g1qi9o2up6d0j8t8lkyh.png)

## Eventual consistency

To read, we'll use another `POST`, but beware: Here comes something important about distributed systems. We have _eventual consistency_. Which means, your application cannot rely on the data being immediatly available for you just after the write. If you do, you could get... nothing, like a empty array in this case:

![No content for you. Not yet.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bgshqsjjnzz5ik9cfudb.png)

But, after very little time, you can see all data available in the topic:

![response](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u7oh7ls97ig7v4pn2ta2.png)

## Dive Deep

- Checkout [Upstash's Docs on Kafka](https://docs.upstash.com/kafka?utm_source=ibrahim_kafka)
- Be yourself a _reader_: [Kafka: The Definitive Guide: Real-Time Data and Stream Processing at Scale](https://amzn.to/3sX6jc2)
- Checkout the [Confluent's content on Kafka](https://www.confluent.io/what-is-apache-kafka/)
- AWS just released [MKS Serveless](https://aws.amazon.com/msk/features/msk-serverless/), the Managed Streaming for Apache Kafka (MSK). But please note that, while is a _serverless_ offering in the sense you'll not need to worry about _cluster_ servers as they put: "Easily stream data with Amazon MSK **without managing cluster capacity**". Emphasis mine. You'll need to put a lot more effort than the Upstash's offering as you can see here: [Getting Started - Step 2: Create a Client Machine](https://docs.aws.amazon.com/msk/latest/developerguide/create-client-machine.html)
- All the code used is open to use in TypeScript, using AWS Cloud Developement Kit (CDK). So you'll have no problem at all in provisioning your infrastructure.

[Cover image](https://unsplash.com/photos/DBw3wqluy64) by [Alejandro Cartagena](https://unsplash.com/@cartayen) on [Unsplash](https://unsplash.com/)