---
title: "Faster YouTube embeds with React Lite YouTube Embed component for React"
description: My first open source project
featured: true
pubDate: "2019-12-03T10:50:00.000Z"
image: ~/assets/images/npm-react-lite-youtube-embed.png
language: "en"
---

After attending [Chrome Dev Summit 2019](https://www.youtube.com/watch?v=F1UP7wRCPH8&list=PLNYkxOF6rcIDA1uGhqy45bqlul0VcvKMr) in San Francisco I started to think a lot in contribute to open source. I already translate docs before (for Meteor), strings for Ubuntu, and just started to help translate the Web Almanac to Brazilian Portuguese, but I felt incomplete without make a "code contribution".

After see Elizabeth Sweeny and Paul Irish's ["Speed tooling evolutions: 2019 and beyond"](https://www.youtube.com/watch?v=iaWLXf1FgI0) as a big Lighthouse fan (and adept of LDD - Lighthouse Development Driven). They profiled a simple site and identified YouTube iframe was a blocker for the main thread. He shared an elegant solution: [Lite YouTube Embed](https://github.com/paulirish/lite-youtube-embed). A web component to fast render YouTube iframes (224x more faster!). Since I got the same problem  presented in the talk, I was eager to use in my work, where I'm the technology coordinator at a media company in Brazil.

So I reserved some time to create a port as a React component and publishing at npm: [React Lite YouTube Embed](https://www.npmjs.com/package/react-lite-youtube-embed). And here, is the [repository on GitHub](https://github.com/ibrahimcesar/react-lite-youtube-embed).

My benchmarks for performance don't share the same performance from the original library, but I can see small network usage and other gains such a better control of cover display and just load more in case the user has this intent, in the "Adaptive Loading" philosophy and techniques, from another talk at the Chrome Dev Summit from "Addy Osmani", ["Adaptive Loading — improving web performance on slow devices](https://www.youtube.com/watch?v=puUPpVrIRkc)

Feels great to give something, as small it is, to the community, and also a some fear in case I ship some bug. I think the code can be improved a lot, since I decide for the first version to use as little dependencies as possible, I had to be creative in some strategies dealing with preconnect and preload. Looking forward to get some feedback, evolve this component and be a more active member in the open source community.

<figure class="extend">
    <a href="https://github.com/ibrahimcesar/react-lite-youtube-embed" target="_blank" alt="React Lite YouTube Embed" title="React Lite YouTube Embed"><img src="{{ 'liteyoutube.png' | media(page) }}" width="752" height="475" alt="Surma em sua palestra no Chrome Dev Summit 2019 exibindo celulares com menores capacidades" style="border: 1px solid #BBB" /></a>
    <figcaption><b>Update:</b> As 2021 the project is on '2.x' version, being completely rebuilt from scratch in TypeScript. <br/>It was an amazing journey!</figcaption>
</figure>