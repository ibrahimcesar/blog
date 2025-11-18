---
title: "Happy little clouds: finding my way with CDK"
description: "Speaking on the language of the Cloud"
featured: true
image: ~/assets/images/happy.png
pubDate: "2021-04-30T10:50:00.000Z"
language: en
socialImage: "/features/happy-little-clouds.png"
category: "Leadership & Culture"
tags: ["AWS", "CDK", "Cloud", "Infrastructure", "Learning", "Journey"]
---

<figure class="extend">
    <img src="/assets/happy.jpeg" width="752" height="475" alt="Happy Little Clouds" style="border: 1px solid #BBB" />
</figure>

Today, April 30, we celebrate <a href="https://www.cdkday.com/" title="CDK Day" alt="CDK Day"><b>CDK Day</b></a>. The work made by Matt Coulter with the community is an exceptional feat by itself. <a href="https://www.cdkpatterns.com/" title="CDK Patterns" alt="CDK Patterbs">CDK Patterns</a> became __the place__ to start any dig into CDK.

**Full disclosure:** I submitted to the CFP to speak this year at CDK Day, but as you can see, I was not accepted; They had done a splendid work to select their line up. It will be an outstanding event and I’ll share in this post is what I was planning to present at the talk. I just want to open talk about. It’s ok to receive a “no”. No one loves it. But in the end they could not align the curation of the event with you or your theme.

## The Language of the Cloud

![Cloud](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3xnxcguzo4r75ve7iy37.gif)

I [wrote before about my quest to find the best IaC tool for me](/blog/aws-amplify-sam-cdk-what-to-choose-for-infrastructure-as-code-on-aws/), and by extension to my team at **[Nexo Jornal](https://www.nexojornal.com.br/)**.

I was not searching for an IaC tool for the sake of it. IaC tools boost up your productivity and is a tactical and key feature of my strategic to improve our software delivery. _[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations](https://amzn.to/2Rh9paY)_ by Dr. Nicole Forsgren, PhD _et al._, had a profound impact on me, my career, how I made my decisions and... my life. If you don’t have fear of make multiple deployments, you don’t have fear of change one thing or your environment is not in sync with production... you don’t live in a good place. Other resource to read along with her _magnus opum_ is [The State of DevOps 2019](https://services.google.com/fh/files/misc/state-of-devops-2019.pdf). 

Delivering software quickly, reliably, and safely is at the heart of technology transformation and organizational performance and in this report there’s a clear path to decide how to implement right on page 26. For my organization we started with the goal of **productivity**:

![Productivity](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rqpnxxdykyr44bgzvjep.png)

Is important to point out two things: 1. It’s not a binary choice. There are several elements of one of paths in the other. 2. **All** paths start on creating a culture of psychological safety.

What is a culture of psychological safety? People feel good or feel they can be themselves at work. They can have agency. They can have opinions. Of course this is not some place you simple arrive there. There is no plan to implement a “Culture of psychological safety” and boom! _Job is done_. This is an _ongoing_ effort. 

![Health Check](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1ham8sx2unoynu9zawir.png)

I tried to keep us in check with 10 indicators and three classifications that we answer based in how we are feeling towards that: I’m good (👍), I’m not good (👎) and Meh (😐). As you can all see almost everybody in the team these COVID-19 days is very 😐 in **productivity** terms... and that’s fine. Everybody is trying their best (keep in my mind, also we are in Brazil!).

![Productivity](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j59t5g7708d6oq25be5n.png)

Expanding in the **productivity goal**. Useful, easy-to-use tools provides a _predictive relationship_ with increase in productivity. Here **CDK** shines.

## The Joy of CDK

My first lambda was in the console. Then, I zipped the code by command line. The, I used SAM. And I love SAM. Is laser focused in serverless and is a great tool for this. Once you drift away... you have to learn the most high level of YAML-fu and extend with CloudFormation itself. And this is not bad. In fact this is great. Is a scape hatched and SAM let you build whatever you like, doesn’t get in the way. But I did not find pleasant as is SAM for serverless alone. I saw myself trying to our rely on several plugins of the Serverless Framework, which is easy to understand its popularity, but I like to do my IaC with third-third party dependencies as possible or learn HCL or... CloudFormation. And I read the documentation. I’m not at that level yet. Someday, but not today CloudFormation.

Then... I found CDK. I was skeptical at first. I _disliked_ TypeScript. But then, tinkering with some examples, after learning enough of TypeScript to create an Union Type (but not enough at the type to even understand what a Generic Type was). I naturally typed something like this:

```ts
// Inside your stack code
const tags = [
   {"Env", “Dev”},
   {"Key", “Value”}
]

tags.forEach(tag => {
    Tags.of(this).add(tag.key, tag.value)
 })
```

Then, I hit `cdk deploy` and...

![Happiness](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8eb2gzw3vj57287w4hs8.gif)

Worked. Then it “clicked” to me. I “groked” the concept. The same way I was developing my lambda in TypeScript I was provisioning my Infrastructure and better yet, once I would know to [read the docs for classes and types](https://docs.aws.amazon.com/cdk/api/latest/), I understood how to “talk Cloud” through TypeScript! I know in the end all is converted to CloudFormation anyway, but our code is transformed in Machine Code anyway. As Knuth once stated: “Programs are meant to be read by humans and only incidentally for computers to execute.”

**DevOps** had become a true continuum. The same language for everything. “Easy” is a complicated word. For me is easy talk in Brazilian Portuguese, not so much English. But now my team doesn’t have the cognitive overload to understand TypeScript _and_ YAML _and_ HCL and so on. As we documented our code by JSDocs we’re at the same better digging and finding our way into a program the Cloud. AWS became more clear since now we could use a more common language. We are not more limited to explore the console and its UX cornerstones or find the right doc. We could inspect the class and its types. 

![Happy Accidents](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ouyu3bro3jkdv5pfxmow.gif)

I’m right now reading [“Sooner Safer Happier: Antipatterns and Patterns for Business”](https://amzn.to/3tfmteh) and I can empathize right away just with the title. We couldn’t ignore the **happy** aspect. What we do most of our days define what we are. I really find a sweet spot and became more empowered with CDK—_and_ productive.

**Give CDK a chance!**. Could be the right tool for you and your team. Or maybe not, then move to whatever makes your happy little cloud!

--------

Also, have a great [CDK Day](https://www.youtube.com/channel/UCo3mAheKM1bS3ToJ90QAkiw)! And please leave your thoughts, takes and insights on Twitter!