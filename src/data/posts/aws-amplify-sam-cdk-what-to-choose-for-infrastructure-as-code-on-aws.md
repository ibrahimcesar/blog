---
title: AWS Amplify, SAM, CDK ... What to choose for your Infrastructure as Code on AWS?!?
description: "A comparision between AWS native models of Infrastructure as Code"
featured: true
permalink: "/blog/aws-amplify-sam-cdk-what-to-choose-for-infrastructure-as-code-on-aws/"
featuredImage: lego.jpg
date: "2020-12-20T10:50:00.000Z"
image: cover.png
featuredImageColor: "#1E2C54"
language: en
---

<p class="lead">Chances are if you are reading this right now, you have the same questions I got when I started working on provisioning Infrastructure as Code on AWS. After deploying production workloads with each tool, I want to share my insights and my experience with <a href="https://docs.amplify.aws/" title="AWS Amplify" alt="AWS Amplify" target="_blank">AWS Amplify</a>, <a href="https://docs.aws.amazon.com/serverless-application-model/" title="SAM" alt="SAM" target="_blank">SAM</a> and <a href="https://aws.amazon.com/cdk/" title="AWS CDK" alt="AWS CDK" target="_blank">CDK</a>.</p>

## Serverless Framework and Terraform

First, why not include Serverless Framework or Terraform? I tried both as well. But as more and more I dig into AWS world I wanted a "full stack" approach.

For the Serverless Framework the community, plugins and the pletora of content is great and really helpful, almost to the point of leave no choice to newcomers to jump start using since appears the most simply way. And it is. But I did not like to have another account, separate my environments and the back and forth between the systems, and for a small team this kind of cognitive overload sometimes is very difficult. Other thing was the level of abstraction. Since is pretty much pre-packaged a lot of features, I found sometimes that or I wanted to explore some feature I found on the docs or another approach. All frameworks are opinionated, and this is their strength, but also their weakness.

I tried Terraform in the promise of an agnostic tool to Infrastructure as a Code. If I learn one language for IaC I could easily transfer either my knowledge or even my resources. But not exactly, even by the words of the creator, at least for the second part. We should remember that Cloud providers have different offerings, and each one has its own lingo, own abstractions and so on. So in the end you need to understand exactly you are trying to achieve in this DSL, when is CloudFormation all the way down. Sure, there's a community, there are great tutorials, great features and the syntax and grammar could be better for you and off course, if you deal with a multi-cloud environment and want to keep all code in the same DSL could be better for you. For me the tradeoff between have to learn all kind of constructs of AWS to work on a more generic DSL did not looked so appealing, so I looked to AWS own tools.

## AWS Amplify

I think Amplify one of the best Cloud tools for a FrontEnd developer migrating to Cloud. Also, kudos to [Nader Dabit](https://twitter.com/dabit3) who does a great job to explore and showcase the power of Amplify, that is always growing with time. The new Admin UI, launched at re:Invent is quite powerful and really game changer as soon as get more traction.

I remember when I transitioned from FrontEnd to BackEnd and my way through was with the Meteor framework. And for me, it was like magic. All the knowledge I always have gave me access to do much more. And Amplify does that but in a whole new level. So the name for "Amplify" is more than apt, is very descriptive. It gives frontend a quantum leap in power. Because it not only gave access to several services through its command line, it even helps to deploy with a CI/CD pipeline - and by CI/CD I didn't mean a bunch of bash scripts monkey patched with your environments hardcoded, I mean environments, use of tests - the possibility of  use it with App Farm is really powerful.

![AWS Amplify has multiple integrations with AWS services](https://dev-to-uploads.s3.amazonaws.com/i/5mdkelphbixnuq19gyd3.png)

So, Amplify, is a great tool if you are building applications for web and mobile and want to integrate with several AWS tools in a seamless manner. The docs are [**simply the best docs in AWS World**](https://docs.amplify.aws/) - the [**Serverless Land**](https://serverlessland.com/) is getting there, but Amplify has a lot more time. The tutorials are very well guided and always point where to go further when the defaults or the most common scenarios are not covered.

I launched a lot of projects this year with Amplify, and always delivery our changes after our pushing to preview and then a seamless deploy made my team much more productive since we could focus on only deliver the code needed.

There are packages for integration with React, Vue, JavaScript, iOs, Android and Flutter. And is really a tool end-to-end to supercharge apps on the cloud that manages the infrastructure for you along the way. The time from idea to implementation is really short, depending on what you are developing and it makes a great prototyping tool, also. Because you can generate a boilerplate with the CLIs, and then iterate over it into a full application.

If you want a hand-ons guide there's also Nader's [Full Stack Serverless](https://amzn.to/2WtNtbO) book. I highly recommend take a look at this [Amplify Playlist](https://www.youtube.com/playlist?list=PLSMvK3DkHvw8pV6icyH_WhgZJWAdG6InV) as well Nader's [YouTube Channel](https://www.youtube.com/channel/UC7mca3O0DmdSG2Cr80sOD7g) and the vibrant [Amplify community on Discord](https://discord.com/invite/jWVbPfC).

## SAM

But we are not always developing user facing applications. I think for that sort of development even possible in Amplify is not the best workflow - but one could argue that every system could have some sort of dashboard or admin (that Amplify will provide you with Auth with Cognito in minutes).

The AWS Serverless Application Model (SAM) is an open-source framework for building serverless applications so is laser-focused on serverless and I would argue another kind of tool, a extension of CloudFormation with simplified implementations for serverless and when you need something outside of its scope, you just can use CloudFormation directly.

SAM also provides the best way for testing your Lambdas locally (you'll find  yourself testing your lambdas builded in CDK though... SAM!). And I have to say that the work of [Eric Johnson](https://twitter.com/edjgeek) is amazing. The guy has such amazing energy and I learned a lot from his videos. One great introduction is this video, a crash course, that I recommend to anyone interested in SAM:

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'>
<iframe title="YouTube" width="560" height="315" src="https://www.youtube.com/embed/QBBewrKR1qg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

And the [several videos for SAM](https://serverlessland.com/video?tag=AWS%20SAM) at [Serverless Land](https://serverlessland.com/), a great resource for serverless at AWS in general.

I should say that SAM deserves extra credit for the best **AWS Mascot**.

![SAM Mascot](https://dev-to-uploads.s3.amazonaws.com/i/o93bzrr3lc4wg33qrcwr.jpeg)

## CDK

The AWS Cloud Development Kit (AWS CDK) is an open source software development framework to define your cloud application resources using familiar programming languages. And as with Amplify and SAM, even that for newcomers is not so clear, but CDK gives all on its own name. Is a development kit like a regular SDK, but for Cloud and for this leverages general purpose languages such as TypeScript, Python, Java, and .NET.

![CDK](https://dev-to-uploads.s3.amazonaws.com/i/2melvi3uy1kzc4sxjy94.png)

Which gives "Isomorphic Applications" a whole new level when even the Infrastructure could be leveraged on it and a great Developer Experience. Also CDK is an outlier in the community side I would say. The idea of constructors, in the core of CDK, makes it very composable so the sharing is easy, and the **best resource** for CDK if from the community itself, [CDK Patterns](https://cdkpatterns.com/index.html), and by "community", the great chunk of work goes to [Matt Coulter](https://twitter.com/NIDeveloper). And CDK is a general purpose tool, has bindings, constructors and interfaces to deal with the whole (or almost whole) catalog of AWS services. It is really nice to work on the same language. In my project we used TypeScript, and it was a very nice experience work end-to-end in a serverless project, building lambdas, provisioning tables in DynamoDB. I was not buying the hype around it, but after give a try, honestly in my next project I want to use CDK again. But be aware that to locally test your lambdas, you have to invoke our SAM buddy.

And is even possible know to work with [CDK and Terraform](https://www.hashicorp.com/blog/cdk-for-terraform-enabling-python-and-typescript-support). As with Amplify, FrontEnd types can get an easy landing on Cloud (irony not intended), for CDK the same could say for users of its target languages.

Besides [CDK Patterns](https://cdkpatterns.com/index.html), to anyone starting with this tutorial:

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'>
<iframe title="YouTube" width="560" height="315" src="https://www.youtube.com/embed/XVHGq2uJu9s" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Turtles all the way down

![CloudFormation](https://dev-to-uploads.s3.amazonaws.com/i/9xpqhh47anq3uibann70.jpeg)
After all I think is fair to ask...and how about CloudFormation itself? After all, Amplify, SAM, CDK... they all boils down to CloudFormation, right? Well, I did not have gone "bare metal" yet, but my experience with SAM provided a little more of knowledge, so I will definitely look to try in the feature, but to be honest learn CloudFormation scared me a little. Time was against me and to do something that I get with SAM with a couple of lines I had to deal with a lot of pieces I did not understood at the time as fit together (SAM has best practices for serverless backed-in). And as a DSL, the learning curve is always more difficult so I tried my ways through Amplify, SAM and CDK, besides others approaches.

## Conclusion

I'll pull the Solutions Architect hat here and get away with: _"It depends"_. And, trust me, I know how frustrating this is, even more when you don't have a clear picture or a full mental model of how everything works.

At first I keep asking myself why there are competing tools inside AWS but even overlapping use cases and possibilities, each one has a _raison d'être_, an approach and depth of capabilities. Also they are not mutually incompatible, I cited SAM with CDK, but there's also [CDK with Amplify integrations for better workflows](https://www.youtube.com/watch?v=tKj9J-F0GK8). Is important to know the tradeoffs and they are not 1:1 tools, with a lot of overlapping, focus and culture fit.

In the end, the best tool should be whats makes you or your team more productive, so look for your strengths and try to match of each one of the tools. And I keep the "choose your own weapon" strategy: there are no silver bullets, no tool to rule them all, and I will match the tradeoffs between each one and use the proper tool to the task at hand. Each has focus and have use cases that should meet if not entirely in some way your project.

![Opinion](https://dev-to-uploads.s3.amazonaws.com/i/0sxo4884ng7231o11zes.gif)
And yes, this article covers my experience with these tools, and I have a lot to learn of each one. I expect to give an comprehensive overview of my experiences and please share your takes and views in the comments.

_**Note:** English is not my first language, so I apologize in advance for any mistakes or wrong phrase constructions. I'm in my first "Hello World" articles to explore the language. Please, be kind._