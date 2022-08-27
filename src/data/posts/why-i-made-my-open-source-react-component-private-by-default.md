---
title: "Why I made my open source React component private by default"
description: "An Open Source story"
featured: true
permalink: "/blog/why-i-made-my-open-source-react-component-private-by-default/"
featuredImage: yt.jpg
pubDate: "2021-05-18T10:50:00.000Z"
image: cover.png
featuredImageColor: "#1E2C54"
language: en
---

<p class="lead">An Open Source story</p>

I’m a big fan of open source. Because, well, we all owe to this vast collection of code, libraries, frameworks and knowledge. Just like with arts and science, we stand on the shoulders of Giants. Inspired and iterations upon previous works, adding one more chain, keeping us together. And not just in the _figurative_ sense, but _literally_, as xkcd pointed in the “It’s funny cause is truth”, [Dependency](https://xkcd.com/2347/):

![Dependency](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/efwtn5lt8k8krxhcaz02.png)

[Last year, one of books](https://ibrahimcesar.cloud/blog/10-livros-de-2020/) I loved was [Working in Public](https://amzn.to/2JY2S1s) from [Nadia Eghbal](https://twitter.com/nayafia) whose subtitle, “The Making and Maintenance of Open Source Software” makes clear about the themes in the book: the para-social relationship between maintainers and community, the different kinds of projects in a very helpful framework and the economics of produce and maintain high quality work _for free_ for almost all projects. If you scan for reviews quickly, you’ll see someone “complaining” is not technical or doesn’t help as a maintainer... I think they just misread the book and its purposes: explore a vast topic, where each actor has its own interest, that much of our infrastructure at production today depended on, and ... _works_. These [notes from Sid Shanker helps to summarize it](https://squidarth.com/books/2020/08/18/working-in-public.html) or a more [in-depth guide here](https://www.techbookofthemonth.com/books/oct20).

![Ehgbal’s framework](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y9r6mnu31usfw39occof.png)

Nadia Ehgbal’s framework has four classifications: _Federations_, _Clubs_, _Stadiums_ and _Toys_. My story comes from the ranks of the _toys_ – another world from those in the big categories, like the [post from the the Babel project, used by millions but running out of funds](https://babeljs.io/blog/2021/05/10/funding-update).

## Motivation

I was fortunate enough to take part of the [Chrome Developer Summit 2019](https://www.youtube.com/playlist?list=PLNYkxOF6rcIDA1uGhqy45bqlul0VcvKMr) in San Francisco (on a personal note, I propose to my wife there, in the Cupid’s Span). At the time I was finishing a project in the works in the last 6 months: a complete rewrite of our frontend. We used a Bootstrap 3.0 in a backed-in framework on our CMS, that we had basically to “shadow” properties we don’t wanted in the JSPs. It was madness. With the new offering of a headless CMS we rewrote everything in React SSR. I work at a digital only news site in Brazil. I was doing what I called “Lighthouse-Driven Development” to achieve better performance.

I notice two things right away: YouTube iframe looked to load not so fast like the rest. And we don’t run ads in our sites. Of any kind. But as soon as our iframe load with our videos, every ad-blocker would point that there was an ad in the page, and traced back to the YouTube embed. Also, our embeds sometimes loaded with several little “recommendations” that don’t matched our themes exactly. But who I was to blame YouTube embed?

But in one of the talks, [Paul Irish](https://twitter.com/paul_irish) presented [Lite YouTube Embed](https://github.com/paulirish/lite-youtube-embed), a custom element renders just like the real thing but approximately [224× faster](https://paulirish.github.io/lite-youtube-embed/).

![Ads network](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/etw31n0xk5cet7gzmhx0.png)

And there, in the code, I found that I was loading at least two sources of ad for one iframe. But I was more interested in the “224x”. The project at work could not “wait”. for me work on this. But I used my free time and weekends and built [📺 React Lite YouTube Embed](https://github.com/ibrahimcesar/react-lite-youtube-embed) that later became part of my project. My benchmarks never got close, but I could do a faster and cleaner way of loading iframes for our project since we would wait for user interaction, applying [Adaptive Loading](https://www.youtube.com/watch?v=puUPpVrIRkc) as presented by [Addy Osmani](https://twitter.com/addyosmani)—which, many of the ideas were a lot about my _every day work_ since I was dealing with very poor performance mobiles and low-quality networks that we have here in Brazil and not exception. My motivation was part solve a problem for me and part apply those ideas of respect users’s hardware and network.

![Addy presenting the adaptive loading](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a1zqig24h3zhu3k5prgs.jpeg)

## It’s alive!

The first release I was so afraid. Of criticism. Of put my code out there. I had to do some tweaks because when integrating with my own work I faced problems. I receive feedback, _pull requests_ and then, on the [6th PR](https://github.com/ibrahimcesar/react-lite-youtube-embed/pull/6) a collaborator, [Botho](https://github.com/elbotho) added a nice option `noCookie`, when `true`, connected to YouTube via the Privacy-Enhanced Mode using `https://www.youtube-nocookie.com`. I already had in place `adNetwork` to preconnect or not to the ad networks and it delighted me to get this kind of not only validation for these kind of concerns but active ideas and work towards the goal. But these privacy enhancements were all by opt-in.

I was getting feedback that the component was not playing nice with `Next.JS`. I was making a hard-coded import of the css and this would make the app not render at all. Since I was taking more and a more close look to Next.JS—and loving it! I did not want to my first open sourced my little project doesn’t give access to this framework and potentially others.

## Privacy by default

At the same time in Brazil we got a new law, our own home-baked GDPR, called LGPD (Lei Geral de Proteção de dados or General Law of Data Protection) and all concerns with the massive misuse of our data. I made a course in the area to better prepare our systems (since we deal with billing for subscriptions and other kind of PII). And I was a “TypeScript newborn”, a recent converted and got the challenge to rewrite from the zero (well, is a small lib, it was not a tremendous feat!). And got me thinking about privacy, how sensitive defaults could become the norm in an invisible, but fundamental way and, I as designer of this component, decided I would make a private by default component. I would make the developer responsible for the choices or even better, be possible to give to the user these choices.

How will evolve our society trusting on advertising corporations to be neutral purveyors of information when their profit depends on manipulating that information misunderstands our capitalist marketplace and the value and nature of unbiased information? I as a developer in a news media outlet was thinking on things like that and I know everyone has an approach to this, even if is “I don’t care”. So, I choose privacy by default.

And this will be my choice from now on. And that PR, of a person I never meet or spoke, but that we collaborate in the same piece of code, gave me confidence in my choices.

-----

And this is was [first open source project, on `2.0` since the TypeScript migration](https://github.com/ibrahimcesar/react-lite-youtube-embed).

Please leave your thoughts, takes and insights on twitter!