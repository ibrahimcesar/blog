---
title: Full Stack Cloud SSR with Next.js, Tailwind, and AWS CDK
description: "A spin in the workshop!"
featured: true
image: ~/assets/images/ssr.png
pubDate: "2021-03-14T10:50:00.000Z"
language: en
socialImage: "/features/fullstack-nextjs.png"
---

<p class="lead">Server-side rendering (SSR) is a must for some use cases. Bettter SEO, optimization for TTFB (Time To First Byte) and better control access through authentication - where some users can access some content and others don't. In this post I pick up on a great workshop and implement  SSR with AWS CDK.</p>

I’m a huge fan of the work from [Nader Dabit](https://twitter.com/dabit3), which is the author of [Full Stack Serverless](https://www.amazon.com/Full-Stack-Serverless-Application-Development/dp/1492059897) – one concept I more and more identify myself. One of the many interesting projects he had done was one project called **Hands-on Workshop - Building a Serverless Multi-user Blogging Platform with Next.js, Tailwind, & AWS**, which explain itself:

<div class='yt-frame'>
<iframe title="YouTube" width="560" height="315" src="https://www.youtube.com/embed/13nYLmjZ0Ys" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

I highly recommend [follow along the video](https://www.youtube.com/watch?v=13nYLmjZ0Ys) and [checkout the repository with all the code and a very complete descriptions step by step](https://github.com/dabit3/next.js-amplify-workshop), introducing to Amplify, NextJS and several other products/ tools / managed services like AppSync and Cognito.

What I made different was not going through the last step, the deploy on AWS. At the time we don’t have any way to deploy a NextJS with SRR app without Fargate or other services where we should spin an instance. Amplify hosting was really fine for everything Static Generated, but SSR didn’t arrive at it.

In that moment, Nader used the [serverless-next.js component](https://github.com/dabit3/next.js-amplify-workshop#deployment-with-serverless-framework) from the Serverless Framework. I think the [Serverless Framework](https://www.serverless.com/) is really changing the game and put a lot of traction on the serverless space and managed services but. as I stated before, in [Testing the new CDK Construct to deploy a Serverless NextJS application in CloudFront and Lambda@Edge](https://dev.to/aws-builders/testing-the-new-cdk-construct-to-deploy-a-serverless-nextjs-application-in-cloudfront-and-lambda-edge-1ckk), I always look for an AWS-native solution. And in the start of the year some developer observed a potential security threat in… components:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/goserverless?ref_src=twsrc%5Etfw">@goserverless</a> I&#39;m really completely shocked by this. How long has this been going on? Did I just miss the memo? <a href="https://t.co/9nbRi8c3Tf">https://t.co/9nbRi8c3Tf</a></p>&mdash; Jim Heising (@jimheising) <a href="https://twitter.com/jimheising/status/1346616850063347712?ref_src=twsrc%5Etfw">January 6, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

To be fair and not raise any concerns with the good faith of the company they fixed the concerns in a tiny window:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">AWS Profile support for Serverless Components has now been removed completely. <a href="https://t.co/pOagW6hZg6">https://t.co/pOagW6hZg6</a></p>&mdash; Serverless (@goserverless) <a href="https://twitter.com/goserverless/status/1362887281753817095?ref_src=twsrc%5Etfw">February 19, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

But as I stated before, I always looks between SAM, Amplify and CDK to deliver mostly SSR apps since is the key type of applications I deal every day. And inside the same community that created the [serverless-next.js component](https://github.com/serverless-nextjs/serverless-next.js) they release in alpha, an excellent tool. They are releasing several alpha releases and its getting better and better the Developer Experience and the control you have. As a Proof of Concept (PoC) i made this little to project using NextJS, the [PokéAPI](https://pokeapi.co/) and the CDK Construct, which [the demo is here](https://d2isii528175w2.cloudfront.net/) and the [repo here](https://github.com/ibrahimcesar/nextjs-ssr-cdk-aws).

But I wanted a more robust PoC. I follow Nader's Workshop step by step and stopped at [Deployment with Serverless Framework](https://github.com/dabit3/next.js-amplify-workshop#deployment-with-serverless-framework). And for my needs,  my app would be a Server Side Rendering (SSR) or even best, an Incremental Static Regeneration  (ISR) – But I couldn't be able to have the last one done, so I changed to SSR (Pull Requests will be welcomed). You'll have to edit the file `/pages/posts/[id].js` to:

```javascript
// pages/posts/[id].js
import { API, Storage } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { listPosts, getPost } from '../../graphql/queries'

export default function Post({ post }) {

  const [coverImage, setCoverImage] = useState(null)
  useEffect(() => {
    updateCoverImage()
  }, [])
  async function updateCoverImage() {
    if (post?.coverImage) {
      const imageKey = await Storage.get(post.coverImage)
      setCoverImage(imageKey)
    }
  }

  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1 className="text-5xl mt-4 font-semibold tracking-wide">{post.title}</h1>
      {
        coverImage && <img src={coverImage} className="mt-4" />
      }
      <p className="text-sm font-light my-4">by {post.username}</p>
      <div className="mt-8">
        <ReactMarkdown className='prose' children={post.content} />
      </div>
    </div>
  )
}

// This is what we are change, removing getStaticPaths and getStaticProps:
export async function getServerSideProps({ params }) {
  const { id } = params
  const postData = await API.graphql({
    query: getPost, variables: { id }
  })
  return {
    props: {
      post: postData.data.getPost
    }
  }
}
```

## Deployment with the Serverless NextJS CDK Construct

To deploy to AWS with the [Serverless NextJS CDK Construct](https://serverless-nextjs.com/docs/cdkconstruct/) we’ll need to set up first some things. First you will need to install the CDK CLI and then bootstrap the CDK in your account.

Then we’ll install some dev dependencies, only used in your machine to generate and deploy the assets.

```bash
npm install --save-dev @aws-cdk/core @sls-next/lambda-at-edge @sls-next/cdk-construct @aws-cdk/aws-lambda
```

* [@aws-cdk/core](https://www.npmjs.com/package/@aws-cdk/core): This library includes the basic building blocks of the AWS Cloud Development Kit (AWS CDK). It defines the core classes that are used in the rest of the AWS Construct Library.

* [@aws-cdk/aws-lambda](https://www.npmjs.com/package/@aws-cdk/aws-lambda) This construct library allows you to define AWS Lambda Functions.

* [@sls-next/cdk-construct](https://www.npmjs.com/package/@sls-next/cdk-construct) It is very important you have on your package the [@sls-next/serverless-component@1.19.0-alpha.37](https://github.com/serverless-nextjs/serverless-next.js/releases/tag/%40sls-next%2Fserverless-component%401.19.0-alpha.37) version where the options to name the cache policies where added. If is not the above or greater, then please editthe version in your package and run `npm install`

* [@sls-next/lambda-at-edge](https://www.npmjs.com/package/@sls-next/lambda-at-edge) AWS Lambda@Edge library to help you deploy serverless next.js applications to CloudFront

Then you’ll need to create a `tsconfig.json` in your project because we’ll use TypeScript (yes, in a JavaScript project, but only to allow the usage in the folder deploy that we’ll create.

Your `tsconfig.json` should look like this:

```json
{
  “compilerOptions”: {
    “alwaysStrict”: true,
    “downlevelIteration”: true,
    “esModuleInterop”: true,
    “forceConsistentCasingInFileNames”: true,
    “inlineSourceMap”: true,
    “lib”: [
      “es2020”
    ],
    “moduleResolution”: “node”,
    “noEmitOnError”: true,
    “strict”: true,
    “target”: “ES6”,
    “skipLibCheck”: true,
    “noEmit”: true,
    “module”: “commonjs”,
    “isolatedModules”: true,
    “allowJs”: true,
    “resolveJsonModule”: true,
    “jsx”: “preserve”
  },
  “exclude”: [
    “node_modules”
  ],
  “include”: [
    “deploy”
  ]
}
```

Not all of this configuration is really needed, but I basically use a boilerplate for all my projects and simply decided to not cherry pick and test every option. Then we need to create special file to CDK pickup about our stack that must be named`cdk.json`:

```json
{
  “app”: “npx ts-node deploy/bin.ts”
}
```

When later we use `cdk deploy` it will download and run the ts-node utility to run the file `bin.ts` without the hassle of setup compiling _ts_ to _js_.

Note that before `bin.ts`, this file I mentioned is inside a folder named `deploy`. But you could name whatever you want, just remember to change in the `cdk.json`.

This folder is where all logic of our CDK Construct will live. Create the folder `deploy`. We will create two files, `bin.ts` and `stack.ts`. I make a little change to improve my workflow but the official page has an [outstanding example of a minimal setup](https://serverless-nextjs.com/docs/cdkconstruct/).

```typescript
// deploy/bin.ts
import * as cdk from “@aws-cdk/core”;
import { Builder } from “@sls-next/lambda-at-edge”;
import { NextStack } from “./stack”;
const builder = new Builder(“.”, “./build”, {args: [‘build’]});
builder
  .build(true)
  .then(() => {
    const app = new cdk.App();
    new NextStack(app, “NextBlog”, {
      analyticsReporting: true,
      ddescription: "Testing deploying Full Stack Cloud with Next.js, Tailwind, and AWS CDK with SSR"
    });
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
```

```typescript
// deploy/stack.ts
import * as cdk from “@aws-cdk/core”;
import { Duration } from “@aws-cdk/core”;
import { NextJSLambdaEdge } from “@sls-next/cdk-construct”;
import { Runtime } from “@aws-cdk/aws-lambda”;
export class NextStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: “NextBlog”, props: cdk.StackProps ) {
    super(scope, id, props);
    new NextJSLambdaEdge(this, “NextBlog”, {
      serverlessBuildOutDir: “./build”,
      cachePolicyName: {
        staticsCache: `StaticsCache-${id}`,
        imageCache: `ImageCache-${id}`,
        lambdaCache: `LambdaCache-${id}`
      },
      description: `${id} : Functions Lambda@Edge for the application`,
      memory: 1024,
      name: {
        imageLambda: `ImageLambda-${id}`,
        defaultLambda: `DefaultLambda-${id}`,
        apiLambda: `ApiLambda-${id}`
      },
      runtime: Runtime.NODEJS_12_X,
      timeout: Duration.seconds(30),
      withLogging: true,
     });
  }
}
```

As you can see above, I use the variable id from the constructor in several places. I make this way in order for each stack to have a unique name. Before, without those options, if you wanted to deploy a second application probably your deploy would fail because the names of the functions and for the policy caches would collide. This way we keep separated. I other fields to tweak the lambda.

Run `cdk deploy` at the root of your folder, avail the artefacts and services created. Once you accept you will see the logs of CloudFormation until the creation is complete and your terminal should display this:

```bash

[100%] success: Published

********

NextBlog: creating CloudFormation changeset...

[████████████████████████████████████████████████████▏·····] (18/20)

 ✅  NextBlog

Stack ARN:

*******

```

If not, something is wrong somewhere. If the code even uploaded your assets, the problem is in the application / settings and if you be one of us that faces the “RED ROLLBACK OF THE SOUL” from CloudFormation that has very little information about the error, sometimes just where. But you can always checkup the CloudTrail in you account and look out for the errors and you’ll have a clear picture of what is going wrong.

You can open an issue. You may never answear.

### Notes

* Even the runtime Node_14_X, at the time this runtime was not available to Lambda@Edge where your lambdas will be built.

* If you pay attention the `serverlessBuildOutDir` prop points to `build`. The default for NextJS is to build in `.next`. But you don’t need to change, in fact, did not change. The Construct will take care of create a production optimized bundle in the folder.

* **Why waste so much time?!?!**, the other solution take 2 lines and zero-config. Yeah, but in my real use cases our applications need to be in TypeScript so have our IaC in CDK will keep the cognitive load at the same level and we’ll not need to handle specific configurations. Also, this app could be only one piece of several other construcs and it will play little nice with the same tooling. Also no YAML chaos magic and type safety.

* If you need to deploy over one stack, you’ll need to use the options `cachePolicyName` and `name`, but you can call whatever you want. just try to have a pattern, always help later to gather data, debugging and stuff. And remeber that must be unique!

* Remember that the time of the writing, this is an experimental feature, in alpha.

### See yourself

* [Live demo](https://d1zk2p0o1jgic1.cloudfront.net/) – Honestly I don’t know how much time I’ll keep online, since I can wake up tomorrow with gigas of porn in my S3 buckets, but I’ll give the trust that the Dev and the AWS Builders community inspires in me and that the very few people who’ll visit are nice people and we’ll leave the project clean.

* [Repo](https://github.com/ibrahimcesar/next.js-amplify-workshop-with-cdk) Yes, no linter, no rules. Proof of Concept should be quick and dirt (I mean in the code, just in the code!).

* ⚠️ To avoid any costs if you are just testing, remember to [remove all services](https://github.com/dabit3/next.js-amplify-workshop#removing-services).

### Extra points

If you want to go a mile more, you can setup a npm script to deploy for you. You will need to install as dev dependencies:

```bash

npm install --save-dev aws-cdk typescript

```

* [aws-cdk](https://www.npmjs.com/package/aws-cdk) – The AWS CDK Toolkit provides the `cdk` command-line interface that can be used to work with AWS CDK applications.

* [typescript](https://www.npmjs.com/package/typescript) TypeScript itself need after the `aws-cdk` install.

With this you can edit your `package.json`:

```json
“scripts”: {
    “dev”: “next dev”,
    “build”: “next build”,
    “start”: “next start”,
    “deploy”: “cdk deploy --profile pessoal”
 }
```

So you’ll only need run the script `npm run deploy`, which helps to automatize pipelines and other uses.

In the example above the option `--profile` points my CDK to use a set of credentials I place in my machine with this label `pessoal` which is the same as `personal` in English, since this demo I’m creating in my spare time and for self improvement.