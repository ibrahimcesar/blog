---
title: How to upgrade CDK to latest version under 1 min
description: "CDK is updating all the time. Which is great, the tool is expanding, gaining more features. How to upgrade, again?"
featured: true
image: ~/assets/images/constructor.jpg
pubDate: "2021-01-27T15:50:00.000Z"
language: en
socialImage: "/features/upgrade-cdk.png"
---

<p class="lead"><b>CDK is updating all the time</b>. Which is great, the tool is expanding, gaining more features. Take a look of the timestamps in their <a href="https://github.com/aws/aws-cdk/releases" alt="CDK releases" target="_blank">GitHub releases page</a>. I wonder if <a href="https://twitter.com/nideveloper" alt="Matt Coulter" target="_blank">Matt Coulter</a> find a single weekend to chill.</p>

I once made a quick Proof of Concept and after two days, I updated my current installed version and my PoC simply stopped work. Good grief is all remote these days. And for new projects I always want to use the latest stable version[^1] in the docs – but I also get:

![Upgrade recommended](https://dev-to-uploads.s3.amazonaws.com/i/xnbsgt7nrpwfbfexdqsa.png)

And somehow I forgot again and _again_ the command. After tried the usual suspects `cdk upgrade`, `cdk update` or `cdk --upgrade`, I had to research again. One. More. Time. I'm writing to help me remember.

The command to upgrade your CDK version is:

```bash
npm install -g aws-cdk@latest
```

Or if you are a Yarn folk:

```bash
yarn global upgrade aws-cdk
```
--------

> **#AWSWhishlist**: Your buddy **Amplify CLI** has a `amplify upgrade` 👀 ... **AWS CDK team**, your move.

[^1]: _In the time you started to read this post until now, potentially there's a new CDK release, go checkout_ 