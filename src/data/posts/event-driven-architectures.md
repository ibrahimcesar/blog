---
title: "Event-Driven Architectures"
description: Let's event lead the way to tackle complexity
featured: true
date: "2021-09-11T10:50:00.000Z"
featuredImage: events.png
image: event-driven.png
permalink: "/blog/event-driven-architectures/"
featuredImageColor: "#1E2C54"
            
---

<p class="lead">In this article, I will explore some <em>trade-offs</em> and the case for the use of event-driven architectures in modern applications. While I will focus on the products and services from <strong>AWS</strong>, we could use this architecture in any Cloud or on-premises.</p>

In September 2021, Corey Quinn, Chief Cloud Economist at The Duckbill Group published [The Key to Unlock the AWS Billing Puzzle is Architecture](https://www.lastweekinaws.com/blog/the-key-to-unlock-the-aws-billing-puzzle-is-architecture/) and I identified myself a lot with some of his remarks. One, sometimes downplayed is the notion **cost is architecture**.

> For example, if you didn’t use SQS when building your application because it couldn’t handle your throughput needs or it was too expensive, [that changed a couple of weeks ago](https://twitter.com/zackkanter/status/1399698492981981187). SQS is to the point where it’s now effectively unlimited throughput at a cost that’s just 3.6% of what it was at launch.

And the 3.6% was because of a typo by Zack Kanter. In fact, the price drop is 99.4% from 2006. Which makes it cost only 0.6% of what was. You will pay less than 1% it was years ago!

## Loosing our couplings

There’s general advice that is very well known in modern software architecture, at leat in the web or distribute space that advocates for [**loose coupling**](https://en.wikipedia.org/wiki/Loose_coupling). And sure, is a noble goal but there are several kinds of coupling such as **Temporal coupling** when we deal wit time-based dependencies such as collaborating system components, sequential operations or operations that needs another to complete such a request or another operation. We have **Spatial coupling** such as not having to know where your collaborating applications are in the network and providing fail-over mechanisms such as Load Balancers, pub/subs, and other. And of course, this comes a lot even more on the serverless space than any other in the Cloud: **Platform coupling**. Have proprietary protocols and components from a vendor or platform.

But as pointed, coupling is a function of multiple dimensions, not just binary options like “tight” or “loose”. We are always. _Always_ working with trade-offs.

> “The event-driven architecture style is a popular distributed asynchronous architecture style used to produce highly scalable and high-performance applications. It is also highly adaptable and can be used for small applications and as well as large, complex ones. Event-driven architecture is made up of decoupled event processing components that asynchronously receive and process events. It can be used as a standalone architecture style or embedded within other architecture styles (such as an event-driven microservices architecture).”
> <footer><a href="https://amzn.to/3hqkSPp" target="_blank">Fundamentals of Software Architecture</a>, <em>Mark Richards and Neal Ford</em><footer>

Following the inspiration from [Domain-Driven Design: Tackling Complexity in the Heart of Software](https://www.amazon.com.br/Domain-Driven-Design-Tackling-Complexity-Software-ebook/dp/B00794TAUG?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=HP4DWEA18R3U&dchild=1&keywords=domain+driven+design&qid=1631406769&sprefix=domain+d%2Caps%2C282&sr=8-2&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&linkCode=sl1&tag=ibrahimcesar-20&linkId=8f2436253039b1df488c9443273ba4de&language=pt_BR&ref_=as_li_ss_tl) by Eric Evans and later, [Domain-Driven Design Distilled](https://amzn.to/3l9pIBO) and [Implementing Domain-Driven Design](https://amzn.to/2XgM8ZY) by Vaughn Vernon one of way to model and work with software involves deal with bounded contexts we can map and create services, applications and systems to better tackle our problems. And to integrate all of this, one pattern is **Domain Events**.

> Event becomes the primary mechanism for sharing information across bounded context integrations about change in state. Domains events are immutable, self-describing. Events give the data they carry meaning by supplying business context. Not data transfer objects or change data captures. These are state / state change representations that are not reflective of a system's behaviour.

An event is a _quanta_, a unit that describes something in the system. Could be a simple JSON as that:

```json
{
  "eventId": 61452,
  "event": "OrderPlaced",
  "createdAt": "2021-10-07"
}
```

For example, with this event, different domains could decide to act or not in the event. Maybe we have an Inventory domain, a Package domain, a service that will email the user about the order and each one will handle the event as seem fit, and we could add and apply as many services and applications needed. We will publish all these events to “Bus”, which in the AWS is via [Amazon EventBridge](https://aws.amazon.com/eventbridge/). As a CDK enthusiast, even to create your Infrastructure as Code [in a couple of lines of TypeScript](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-events-readme.html).

```ts
import * as cdk from '@aws-cdk/core';

const stack = new stack();

const bus = new EventBus(stack, 'bus', {
  eventBusName: 'MyCustomEventBus'
});

bus.archive('MyArchive', {
  archiveName: 'MyCustomEventBusArchive',
  description: 'MyCustomerEventBus Archive',
  eventPattern: {
    account: [stack.account],
  },
  retention: cdk.Duration.days(365),
});
```

With the code above you could provision a custom event bus _and_ create an 365-day archive of **all events**, that if needed, could be used to auditing or event _replay_. And even in my example, let’s say the user wants to cancel the order, we will not delete the previous event or even modify it — Events **must** be immutable. Different domains will need to process the new events in order to undo actions or make an analysis about how and why and so on.

```json
{
  "eventId": 61456,
  "event": "OrderCancelled",
  "createdAt": "2021-10-07"
}
```

Maybe another email will be sent, to confirm the cancel, Inventory Package will have to adjust their line of work and so on. And now maybe a CRM system you be fed to understand why the customer canceled after the conversion.

**Coupling will always exist**. But we can orchestrate with such services and create highly responsive, available and robust architectures. And you can combine EventBridge with [Lambda](https://aws.amazon.com/lambda/), [SNS](https://aws.amazon.com/sns/), [SQS](https://aws.amazon.com/sqs/), [Step Functions](https://aws.amazon.com/step-functions/) and soon you are dealing with systems that can scale up and down easily and if done correctly, try to optimize a lot your costs because some services and applications we have today sitting at some servers 24/7 sometimes **just need to be active when a specific event happens**.

Right now I’m in the middle of an event-driven creation and I really like the mental model and the developer experience as the organization experience and soon we used the “Ubiquitous Language” from DDD. And for this set of tools, none other Cloud seems so fit and solid as AWS does.


## Books to read

- [Building Event-Driven Microservices: Leveraging Organizational Data at Scale](https://amzn.to/3AgY100) by Adam Bellemare. Brings much value with both architectural and application patterns to event-driven architecture.

- [Architecture Patterns with Python: Enabling Test-Driven Development, Domain-Driven Design, and Event-Driven Microservices](https://amzn.to/3EbrsmT) by Harry Percival and Bob Gregory. Python is not my primary language at work or even my preference, but I get so much from this book. Because is aiming at _patterns_ if you do not work with Python don’t let the title fool you. There’s a lot from here in this book!

## Heroes to follow

Yeah, they are actually _heroes_.

### Ben Ellerby
[@EllerbyBen](https://twitter.com/EllerbyBen)
For me one of his post, helped me a lot in my work and opened so many possibilities: [EventBridge Storming — How to build state-of-the-art Event-Driven Serverless Architectures](https://medium.com/serverless-transformation/eventbridge-storming-how-to-build-state-of-the-art-event-driven-serverless-architectures-e07270d4dee). [Blogs a lot about the concept of Serverless Transformation](https://medium.com/@bene_37069), a term I adopted too.

### Sheen Brisals
[@sheenbrisals](https://twitter.com/sheenbrisals)
Blog often at [Medium](https://sbrisals.medium.com/). Last post was [How To Build Better Orchestrations With AWS Step Functions, Task Tokens, And Amazon EventBridge!](https://medium.com/lego-engineering/how-to-build-better-orchestrations-with-aws-step-functions-task-tokens-and-amazon-eventbridge-19a68eeda461)

## AWS Event-Driven Tools
- [Amazon EventBridge](https://aws.amazon.com/eventbridge/)
- [AWS Step Functions](https://aws.amazon.com/step-functions/)
- [Amazon Simple Notification Service](https://aws.amazon.com/sns/)
- [AWS Event-Driven Primer: What is an Event-Driven Architecture?](https://aws.amazon.com/pt/event-driven-architecture/)