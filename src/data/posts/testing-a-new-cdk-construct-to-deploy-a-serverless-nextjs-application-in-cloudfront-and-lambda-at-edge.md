---
title: "Testing a new CDK Construct to deploy a Serverless NextJS application with CloudFront and Lambda@Edge"
description: With a repository for testing
featured: true
permalink: "/blog/testing-a-new-cdk-construct-to-deploy-a-serverless-nextjs-application-in-cloudfront-and-lambda-at-edge/"
date: "2021-03-01T10:50:00.000Z"
featuredImage: pokeserverless.jpg
image: cdk.png
featuredImageColor: "#1E2C54"
language: "en"
---

In a [previous article](https://dev.to/aws-builders/aws-amplify-sam-cdk-what-to-choose-for-your-infrastructure-as-code-on-aws-lh2) I shared my pursuit of my Infrastructure as Code to be as "AWS native" as possible. So **Amplify**, **SAM** and **CDK** are my arms of choice.

One tremendous gap, specially for me, was a good way to deploy React apps on AWS in a serverless mode without a lot of overhead. The closest I got was running _Fargate_. But in [Serverless Framework](https://www.serverless.com/) community there was a zero-config constructor called [Serverless Next](https://serverless-nextjs.com/) which was great. AWS Amplify hinted we could do SSR soon this solution was the best in the community so far.

The overview of the architecture:

![Serverless Nextjs Architecture](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yf8dn4olkvw1y313x2yl.png)
> _Source:_ [Serverless Next.js Component GitHub repository](https://github.com/serverless-nextjs/serverless-next.js#architecture)

So when I heard the community was developing a CDK Constructor which I was thinking in build with help of others...

![Excitement](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wtthgt0bqeou2228jkpg.gif)

... I was following closely and interested in the future developments of this release. So the release was published days ago, still labeled as _experimental_: [Serverless Nextjs CDK Construct](https://serverless-nextjs.com/docs/cdkconstruct/). Because of my... uh... interest as soon as possible I started testing, I got some problems here and there, asked for help and life found a way.

This [live demo, the PokéServerless](https://d2isii528175w2.cloudfront.net/), is a minimal proof of concept of a NextJS application running on AWS with [CloudFront](https://aws.amazon.com/cloudfront/) and [Lambda@Edge](https://aws.amazon.com/lambda/edge/). I just fetch all Pokémons through the [PokéAPI](https://pokeapi.co/) then I use a **Ditto** in `pages/[ditto].js` to Server Side Generate a page for each one of the Pokémons. Is simple as that.

![scizor](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iy17ac9ow1cpvk7c9ybw.png)
> _Picture above: This badass Bug/Steel type, **[Scizor](https://d2isii528175w2.cloudfront.net/scizor)**, was rendered with `getServerSideProps`_

You can find [the code behind this example in this repo](https://github.com/ibrahimcesar/nextjs-ssr-cdk-aws).

**Gotta Fetch'Em All!**