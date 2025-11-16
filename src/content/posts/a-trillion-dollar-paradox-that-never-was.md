---
title: "A Trillion Dollar Paradox that never was"
description: The largest bank in Latin America will move half of its infra to AWS Cloud
featured: true
pubDate: "2021-06-05T10:50:00.000Z"
image: "~/assets/images/paradox.png"
language: en
socialImage: "/features/trillion-page.png"
---

<p class="lead">The largest bank in Latin America will move half of its infra to AWS Cloud</p>

[The Cost of Cloud, a Trillion Dollar Paradox](https://a16z.com/2021/05/27/cost-of-cloud-paradox-market-cap-cloud-lifecycle-scale-growth-repatriation-optimization/) by Sarah Wang and Martin Casado makes two main arguments:

1. Cloud is the “perfect platform to optimize for innovation, agility, and growth, but it comes at a cost; there’s a ‘flexibility tax’ for the nimbleness the cloud provides.” Therefore, it’s critical to make cloud spend a first-class KPI metric, and empower engineering to optimize from day one.

2. As a company grows, the pressure that cloud puts on its margins “can start to outweigh the benefits.” Therefore, Wang and Casado present the idea of “repatriating” cloud workloads — bringing all or most out of the cloud.

> The short version is: You’re crazy if you don’t start in the cloud, but you’re crazy if you stay on it.
> [Jeremy Daly](https://www.jeremydaly.com/) on [off-by-none #144](https://offbynone.io/issues/144/)

But I think it paints a picture biased with a series de logical jumps and do so ignoring other and probably bigger trends in motion. I would like to bring the case of a Brazilian banking that is _repatriating_. But, nothing coming back, but seeking _Cloud citizenship_.

[Itaú Unibanco](https://en.wikipedia.org/wiki/List_of_largest_banks_in_Latin_America) is the largest bank in Latin America with 407.37 US$ Billions in Assets. Milton Maluhy Filho, CEO of Itaú, highlighted growth as the main driver and technology as a way to do so, in an event in June, 2 called [Itaú Day](https://www.youtube.com/watch?v=_zoo457b8qQ) (_this links is an official English dubbed version of it_). At some point he says that they have 24M MAU in their app (again, a banking app).

![AWS contract](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y77f64z27wpw2cmvfqg0.png)
> Contract with AWS ([sic]AmazonWeb Services) 

[Ricardo Guerra, the banks's CTO](https://youtu.be/oqgN9RVG_ms) made public a milestone:  they want to move half of its capabilities to the public Cloud until the end of 2022, with a ten-year deal with AWS. [Last year it was made public the contract](https://press.aboutamazon.com/news-releases/news-release-details/itau-unibanco-selects-aws-its-long-term-strategic-cloud-provider/) only hinting that "a great cut" of its infra would go to the Cloud. Now the number has revealed to be 50%.

![50% of the bank in the Cloud](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cvsvp6o54tw2kojh4qsi.png)
> 50% of the bank in the Cloud until 2022

It was mentioned analytics, machine learning, serverless, containers, managed databases, computing, storage and security – the whole deal. And they also publicly announced they are moving from _monoliths_ to _microsservices_. The infrastructure for [Pix](https://www.paymentsjournal.com/why-pix-is-the-revolution-of-consumer-experience-in-brazil/), a new and more cheap payment released by Brazil's Central Bank is already in a microservices architecture, and the Credit Card operation as well.

![Microsservices](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oj9bmsl8wnu9e50ttzcc.png)
> Microservices 

Last year, profits of Itaú because of COVID-19 and Brazilian market, felt strongly 35%. They made only 18.91 BRL Billions _in profit_. "In times of crises, some people cry — other people sell handkerchiefs", there's a saying. I would add, "...and then there are the _banks_".

For this they already hired 4 thousand new professionals. Until 5 years ago, the plan was invest in its own infra: the bank own that in 2015 received 3.3 BRL Billions, which if you take the inflation, would around 1 US$ Billion.

We are [talking about](https://www.baguete.com.br/noticias/04/06/2021/metade-do-itau-na-nuvem-ate-2022) call-centers, bank web and mobile apps and banking platforms.

Nubank, a Brazilian Unicorn, is also the [largest independent digital bank in the world](https://techcrunch.com/2020/03/03/valued-at-10b-nubank-launches-its-nu-credit-card-in-mexico/). It started with a credit card offering and now is turning itself in a complete bank, without one single physical agency. And [runs on AWS](https://aws.amazon.com/solutions/case-studies/nubank/?nc1=h_ls).

I bring attention to these two prominent examples that are close to home to me and from one of the hardest markets in the world: _banking_. The focus on SaaS also leaves a lot of workloads of a far great Universe of companies using the public Cloud.

> To frame the discussion: We estimate the recaptured savings in the extreme case of full repatriation, and use public data to pencil out the impact on share price. We show (using relatively conservative assumptions!) that across 50 of the top public software companies currently utilizing cloud infrastructure, an estimated $100B of market value is being lost among them due to cloud impact on margins — relative to running the infrastructure themselves. And while we focus on software companies in our analysis, the impact of the cloud is by no means limited to software. Extending this analysis to the broader universe of scale public companies that stands to benefit from related savings, we estimate that the total impact is potentially greater than $500B.

You can say I'm just a person random on the Internet, but these numbers are completely made-up. Right after state that the "_point of this post isn’t to argue for repatriation_", and then drops a bomb that leads to the trillion dollar paradox of the title. The only paradox in this case, I would say is that it was never existed first place. 

I also recommend [Zack Kanter](https://twitter.com/zackkanter) Stedi's Founder and CEO analysis of the piece: 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Excellent *financial* analysis of using *commoditized* cloud infrastructure (vanilla servers). It misses: i) the (long-term devastating) cultural cost of recruiting world-class engineers to do undifferentiated heavy lifting; ii) it&#39;s unfeasible to recreate noncommodity infra. 1/n <a href="https://t.co/QGGAPd2KSX">https://t.co/QGGAPd2KSX</a></p>&mdash; Zack Kanter (@zackkanter) <a href="https://twitter.com/zackkanter/status/1399013516107948037?ref_src=twsrc%5Etfw">May 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

So, again, I think nothing better than analyses actual use cases to get a better picture of what's going on or even the myths and narratives some people created based on their own limited dataset. The biggest bank in Latin America is moving on-premises to be 50% Cloud at AWS until 2022 and they invested a huge money and they had plan to expand but their strategy changed to embrace Cloud, and one of Brazil's Unicorn, also from Banking industry is Cloud Native since day one. If I was a VC, I would bet my money on _Cloud citizenship_ and not otherwise.

_**Update**:_ The authors keep holding their positions. Sometimes saying it just applies to SaaS, sometimes not. Anyway my position is the same: is not a true analysis of cost of the Cloud and certainly doesn't apply to majority of workloads. Applies to Cloud as whole, well this was the answear for each one of the authors...

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/Cloud?src=hash&amp;ref_src=twsrc%5Etfw">#Cloud</a> In South America two major Banks are moving to the cloud. One 100% and we have an unicorn cloud native, <a href="https://twitter.com/nubank?ref_src=twsrc%5Etfw">@nubank</a>. My question was simple: Is just SaaS or applies to Cloud as whole? On the floor, the experts on the matter <a href="https://t.co/sSPZjVnvyd">pic.twitter.com/sSPZjVnvyd</a></p>&mdash; Ibrahim Cesar (@ibrahimcesar) <a href="https://twitter.com/ibrahimcesar/status/1403722717971554305?ref_src=twsrc%5Etfw">June 12, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>