---
title: "The material question with Google's Core Web Vitals"
description: The fair metrics that are three biased metrics in a trenchcoat
featured: true
pubDate: "2021-09-01T10:50:00.000Z"
image: ~/assets/images/corewebvitals.png
language: en
socialImage: "/features/google.png"
tags: ["Web Performance", "Google", "Core Web Vitals", "Metrics", "UX"]
category: "Web Development"
---

<p class="lead">Google's <b>Core Web Vitals</b> has arrived. And as Google prides itself, has an <a href="https://web.dev/vitals-business-impact/">huge business impact</a>. The data is very well known that even small increases in performance, with a faster website your conversion rates grows. But the set, based on the top performers, has hidden bias embedded in it I want to talk about.</p>

First, more context: the Core Web Vitals are a set of three metrics.

- [Largest Contentful Paint (LCP)](https://web.dev/lcp/): measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.

- [First Input Delay (FID)](https://web.dev/lcp/): measures interactivity. To provide a good user experience, pages should have a FID of 100 milliseconds or less.

- [Cumulative Layout Shift (CLS)](https://web.dev/cls/): measures visual stability. To provide a good user experience, pages should maintain a CLS of 0.1. or less.

Google does a great deal to [share a lot of information](https://developers.google.com/speed/docs/insights/v5/about).

<figure class="extend">
    <img src="/assets/google-core-web-vitals.png" width="752" height="475" alt="The core web vitals" style="border: 1px solid #BBB" />
    <figcaption>The Three Core Web Vitals</figcaption>
</figure>

In this post I will not argue _against_ Web Core Vitals. I think is past due the time we take our user metrics, real user metrics (sometimes called by its acronym, RUM) in the center of everything we do. The "rise of user centric" metrics such as CLS (Cumulative Layout Shift) and other are remarkable feats and much needed. But I have some thoughts in the complexity that arise from it. I was lucky enough to attend in person the [2019 Google Chrome Developer Summit](https://www.youtube.com/watch?v=F1UP7wRCPH8)[^1]. It was the first time I saw presentations calling out developers to not only pay attention to their top devices — several of the talks the subject and reality of low end devices. It was amazing to see that. But I was thinking... "I'm working in Brazil for at least 10 years and all my references came from here, _this place_, and now, **2019**, they are talking about the most common scenario I face _everyday_".

<figure class="extend">
    <img src="/assets/nbu1-min.jpeg" width="752" height="475" alt="Addy Osmani: Respect the user's network and hardware" style="border: 1px solid #BBB" />
    <figcaption>Addy Osmani: Respect the user's network and hardware</figcaption>
</figure>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">📢 “Low-end devices are a first world problem too”<br><br>Alcatel 1x is a popular prepaid phone in the UK. It loads web pages several times slower than an iPhone 8 (6 times slower for 400 KB of JavaScript). <a href="https://t.co/Eo5jtIN9YF">https://t.co/Eo5jtIN9YF</a></p>&mdash; Web Platform News (@WebPlatformNews) <a href="https://twitter.com/WebPlatformNews/status/1186647094221824001?ref_src=twsrc%5Etfw">October 22, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

There’s a material side of web and computing in general[^2], that sometimes we think little about. Most of the time, we only take the bits and bytes as part of things. We literally wired together our continents with cables, physical cables, transporting data from one place to another. Even communicating with the computer in the other room takes times. There’s no such thing as instant communication, [laws of physics continues to apply](https://arstechnica.com/tech-policy/2020/06/fcc-has-serious-doubts-that-spacex-can-deliver-latencies-under-100ms/).

In [Defining the Core Web Vitals metrics thresholds](https://web.dev/defining-core-web-vitals-thresholds/) that aims to explore the research and methodology behind Core Web Vitals thresholds. Is stated:

>  Specifically, we aim to identify a threshold that is consistently achievable at the **75th percentile for top performing sites**.

> According to Ookla, a company specializing in internet speed testing, reported that the global average download speed on fixed broadband is 85.73 Mbps as of September 2020. The average mobile download speed is 35.96. As technology becomes more advanced and networks are improved, these numbers are expected to continue to grow.

> Based on data from Ookla, Singapore is the nation with the fastest broadband download speeds of 226.60 Mbps. Hong Kong follows this with 210.73 Mbps and Romania with 193.47 Mbps. The United States has the 10th-fastest internet download speeds of 161.14 Mbps.

> The countries with the fastest mobile internet speeds are different. The fastest mobile download speeds can be found in South Korea at 121.00 Mbps. China follows with 113.35 Mbps and the United Arab Emirates with 109.43 Mbps.
> <footer> <a href="https://worldpopulationreview.com/country-rankings/internet-speeds-by-country" target="_blank" title="Internet Speeds By Country 2021">Internet Speeds By Country 2021</a></footer>

The top performing web sites I assume are against the global pool of sites. Mobile speed is not an issue with code itself, but there’s a **material issue** with this "fair measurement". Because in the Global South we have historically less speed and very low end devices with a minority using top end devices. A site with 1MB payload will load much faster in a 5G connection and in a high end device than in a 3G connection (or sometimes worst as we have here in Brazil and I think I could apply to all great Global South) and low end devices that our audiences use. Using the same data, Brazil has an average of 67.86 in broadband speed and 28.36 in mobile speed. Orders of magnitude lesser than the top velocities. Low end devices also means that we cannot always use the latest improvement in browsers and web apis. We need to use polyfills and other tactics that can hurt even more our overall performance. When Douglas Crockford said that the browser was the most hostile development environment he was talking from some office in Silicon Valley, I wonder what he would say about developing for the wider range of low end devices we have around here.

I asked a representative of Google on the subject. And asked if the realities in connection and devices would be take in account, the answer and I quote, since in the spirit of the [Honest Results Policy employed by Google in search, was in an open session](https://publishersonair.withgoogle.com/events/google-latam-search-webinar-portugues-espanol/watch?talk=google-latam-search-webinar-english), and you can check it out, around 1:05:00 was:

> I'm not aware of anything planned in that direction. Regarding on the website and what your audience makes it a bit easier or harder, but essentiality we want this Core Web Vital be as global as possible. In practice, if your users are in very slow connections then you must make sure your site is extra fast for them.

<figure class="extend">
    <img src="/assets/red-queen.jpeg" width="752" height="475" alt="Red Queen" style="border: 1px solid #BBB" />
    <figcaption>Not only run, but run at least twice as fast! "Now, here, you see, it takes all the running you can do, to keep in the same place. If you want to get somewhere else, you must run at least twice as fast as that!" — Red Queen from Lewis Carroll's <b>Through the Looking-Glass</b></figcaption>
</figure>

> [...] We have three areas in Core Web Vital metrics ... one is poor, another needs improvement and good. As soon you reach that middle area with the Core Web Vitals fields data, you will see improvements ...So as long you are in that middle range, you are in a good area.

So... is _good_ not being **good**?

> [...] The good thing about Core Web Vitals you are competing with sites that are in the same situation as you. If you have the same users you are kinda competing against them is not that you are measuring your site against the fastest of the fastest other sites out there. For the individual queries we see websites that have good web vitals and sites that don’t have good web vitals [...] And, **if none of the sites can reach good Core Web Vitals for specific queries that don’t cause any problems because everyone is on the same level again**.

When thinking about the question this was the first thing that I thought because of this I put bold in the sentence. Is reasonable and at surface level looks like resolves the “material question” for good. But not so fast.

But this is a sort of “Invisible Hand” argument. The sites competing for the queries are not born the same. Some have niche audiences (maybe with better connection speeds because is a niche of user with more money and inequality only goes up in South America), some are ultra bare bones blogs created to spread misinformation and “fake news” and therefore will score higher than an outlet that has subscribers, has more content to show, produces graphics and all the things provide better and more contextualized news but has to pay the “tax” to try a broad audience in a reality of several low end devices and poor connections. Is an optimistic and “best-case scenario” answer. Is something that everybody on the internet knows on some level: you are not competing with “your peers”, you are competing with everyone else for individual queries and there’s a whole sort of plurality in the actors.

I think since they operate with a closer look on the top performers they are not paying enough attention on how these "fair" set of metrics are biased, one-sided and might have several side-effects since it has such an impact on business.

In [Algorithms of Oppression: How Search Engines Reinforce Racism](https://amzn.to/3DHfp04),  Safiya Umoja Noble challenges the idea that search engines like Google offer an equal playing field for all forms of ideas, identities, and activities. Data discrimination is a real social problem; Noble argues that the combination of private interests in promoting certain sites, along with the monopoly status of a relatively small number of Internet search engines, leads to a biased set of search algorithms that privilege whiteness and discriminate against people of color, specifically women of color. 

Big Tech always use algorithm as a shield, in order to avoid further scrutiny, and as a means to excuse bad outcomes or deny agency. But as the researcher does, the politics and assumptions about the world are embedded in the tools and even in "fair" metrics that cannot accurately describe and measure with the promised “fairness” from math and algorithm — which besides codes, in the end mean “our choices”.

Google wants to **"No site gets preferential treatment"**. And I believe in them. I do. I don`t think there's any Evil Room where some "White Guy 10x Developer" is making the decisions, but as all escalations must use public channels, I'm here, trying to push and shine some light in these particular specifics since the structural biases are by definition invisible because they are part of society and world views, and I and hope to open a more diverse conversation.


### Read more
- [Web Vitals](https://web.dev/learn-web-vitals/)
- [How committing to Core Web Vitals increased Netzwelt's advertising revenues by 18%](https://web.dev/netzwelt/)
- [Improving Cumulative Layout Shift at Telegraph Media Group](https://web.dev/telegraph/)
- [An In-Depth Guide To Measuring Core Web Vitals](https://www.smashingmagazine.com/2021/04/complete-guide-measure-core-web-vitals/)


[^1]: It was my first time in the United States, I was motivated to [write my first open source component](https://github.com/ibrahimcesar/react-lite-youtube-embed) and even got engaged!
[^2]: For a great paper on the subject, I highly recommed [The Environmental History of Computing](https://muse.jhu.edu/article/712112/pdf) by Nathan Ensmenger.