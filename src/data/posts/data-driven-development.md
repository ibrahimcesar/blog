---
title: Data Driven Development
description: Como uma cultura de desenvolvimento baseada em evidências e métricas centradas no usuário pode ajudar a criar melhores produtos
featured: true
featuredImage: ddd.jpg
permalink: "/blog/data-driven-development/"
pubDate: "2020-01-23T10:50:00.000Z"
image: cover.jpg
---

<p class="lead">Como uma cultura de desenvolvimento baseada em evidências e métricas centradas no usuário pode ajudar a criar melhores produtos.</p>

Venho trabalhando de uma forma que até pouco tempo não conseguia definir propriamente. Talvez por que eu nem mesmo estivesse tentando definir. Não é como se eu tenha descoberto algo. Na verdade, certamente muitos adotam posturas e metodologias parecidas, ou até por que não dizer — mais sólidas.

Venho propor, modestamente, mais uma, __DDD__: *Data Driven Development*, ou Desenvolvimento Guiado por Dados. Em nossa área, o inglês é não apenas uma escolha, mas um imperativo, visto que as próprias sintaxes e gramáticas de nossas linguagens derivam do inglês.

Eu tinha chamado o estilo e cultura que estavamos levando em um primeiro momento de __Lighthouse Driven Development__. Por dois motivos, (1) estava desenvolvendo literalmente com a aba do Lighthouse aberta em uma das minha telas e (2) não era como se eu estivesse capaz de analisar racionalmente toda a situação. Estavamos encerrando um longo processo de desenvolvimento e simplesmente não conseguia abstrair o que estava fazendo e apenas me focando no que estava logo à frente.

<blockquote class="twitter-tweet"><p lang="pt" dir="ltr">Desenvolvimento de software adora siglas. SQL, PWA, AMP... E aqui jogo mais um, em tom de brincadeira: LDD -- Lighthouse Driven Development. Cada nova feature era acompanhada no <a href="https://twitter.com/____lighthouse?ref_src=twsrc%5Etfw">@____lighthouse</a> e me certificando de estar sempre me aproximando da área verde!</p>&mdash; Ibrahim Cesar (@ibrahimcesar) <a href="https://twitter.com/ibrahimcesar/status/1200774109636046851?ref_src=twsrc%5Etfw">November 30, 2019</a></blockquote>

## Data

Vamos começar com a primeira parte, os dados.

> "Não existem fatos, apenas interpretações"
> <footer>Friedrich Nietzsche</footer>

Esta parece ser a parte fácil, não? Afinal, _dados são dados_, certo? Não tão rápido. O que é medido, como é medido e para que objetivo são questões bem importantes aqui. Há um ditado meio apócrifo e sarcástico que diz: "me diga tuas métricas e direi como és recompensado". Há uma relação isomórfica entre medições, recompensações e o que o sistema que gerou aquelas métricas.

Dados são políticos. Tudo é político, seja por omissão ou por escolha. Por omissão geralmente é aceito por osmose o __status quo__. E eu não estou aqui falando da dicotomia esquizofrênica e bairrista de "direta/esquerda esquerda/direita" que domina o discurso público. Estou falando de política como a série de ações e relações com o poder e sua intermediação entre as pessoas. Por isso, temos que escolher um lado.

Há uma saída fácil que é sempre seguir as tendências do mercado. O que estão dizendo por aí em palestras, artigos etc. Outra mais fácil ainda é seguir o que seu chefe manda. __Ganha-ganha__. Mas nem todo mundo possui chefes éticos, brilhantes, líderes que levam à glória da web. E todo mundo, é claro, é propenso a erros, viéses cognitivos, valorização de ganhos a curto-prazo, etc.

Eu defini que minhas métricas seriam sempre **centradas no usuário**. E mesmo isso passa por diversos filtros. Que usuário? "Meu `<insira aqui amigo || namorado || parente || amigo de amigo || cliente em email || cliente no Twitter etc.. >` disse que `< insira aqui alguma feature, ideia que algumas vezes não leva em conta nenhuma de suas limitações || stack >`". Bem, vamos olhar os dados. Cavar fundo. `RUM`, `Google Analytics`, outros pontos de contato que seja possível coletar. Há sempre algo surpreendente esperando ser encontrado. Pois muitas vezes, principalmente caso seu público não seja de um nicho muito específico e do qual as pessoas de seu trabalho façam parte, vocês **não** representam seu público. Bom senso é a coisa mais bem distribuida do mundo, já disse Descartes. Todos nós nos achamos bem providos dele. Baseie-se em evidências, escave, teste.

Mas sempre perceba que tudo isso passa por escolhas fundamentais e determinantes. Não faça isso levianamente.

## Driven

O que quero dizer com _driven_ ou _guiado_ ?

Mas é claro, este também não é um caminho seguro e calmo. Você pode facilmente bater nos rochedos impiedosos da "Causação/Corelação"

> "Os limites do mundo são os limites da linguagem"
> <footer>Ludwig Wittgenstein</footer>

Quero dizer que sempre que temos que tomar uma decisão, ou sabemos o que as evidências coletadas nos apontam, ou formulamos hipóteses, estratégias e táticas em relação a esses dados ou sabemos algo que precisamos saber (não há nada pior que um desconhecido _desconhecido_ [^1])

Como no passo anterior, ao pensar sobre o que é nosso dado, precisamos também exatamente para onde estamos indo e mais importante ainda, por quê. Vamos fazer x para aumentar os lucros? Ótimo. Vamos gastar uma semana para agradar alguma pessoa importante. Ótimo. Há uma correlação bem documentada e estabelecida entre performance de carregamento e lucros, vamos focar nisso em detrimento de outras experiências? Ótimo. Tudo ótimo, desde que cada resultado, seja para onde estava almejando atingir.

E Wittgenstein (que em um parentese, considero um dos filósofos que talvez mais beneficiariam aos desenvolvedores conhecer a obra) nos lembra que a linguagem, o que é dito, cria os limites de nosso mundo, sendo esta o próprio espelho de nosso mundo. O que é construído pela linguagem e as relações das pessoas com o poder fazem o que chamamos de "cultura" de um ambiente de trabalho. É precisamente por isso que acredito que uma abordagem tal como a **Data Driven Development** deve estar no centro de uma cultura, pois será o determinante do que as pessoas falarão, do que elas pensarão e o mais importante, para o que elas otimizarão. Intenções, posturas e objetvos se encaixam e desenvolvem melhor em determinadas culturas. A pergunta que você poderia se fazer agora é **Qual é a cultura do lugar em que trabalho?**

Outra frase — eu adoro frases, esses pequenos pacotes de `sugar sintax` de sabedoria, “A cultura devora a estratégia no café da manhã” do Peter Drucker. Se a cultura não se alinhar, igualmente não adiantará nada ter isso como um "princípio" jogado em algum lugar de seu documento de valores, missão e objetivos. E também não se engane, se você não está criando ou pensando em formas de estimular uma cultura em seu ambiente de trabalho, cultura acontece com ou sem você. Ela não vai esperar seu input, vai acontecer pela fricção, pelas personalidades e interações de todos, cada um com uma parte, mesmo em posições hierarquicamente diferentes cada um influencia a cultura ao redor. Se você que na sua você não influencia em absolutamente nada, meu conselho só pode ser "caía fora".

## Development

E por fim, a peça mais importante: deve ser parte da cultura de desenvolvimento, e arriscaria dizer, ainda mais importante ser parte da cultura da empresa como um todo. Assim como o paradigma *Dev Ops* não é apenas um conjunto de tarefas, uma atividade técnica ou um cargo (ou ao menos não se limita a nenhuma dessas definições), acredito que times de desenvolvimento informados por dados produziarão melhores produtos.

> "Nós moldamos nossas ferramentas e estas nos moldam de volta"
> <footer>Marshall McLuhan</footer>

Assim como eu me debrucei no **Lighthouse** e suas métricas me guiaram e definiram o caminho para muitas de minhas escolhas, implementação e foco, esta relação entre ferramentas, métricas e nós não precisa ser passiva. Nós, como desenvolvedores, temos mais do que nunca a possibilidade de criar nossas próprias métricas, para nossas próprias necessidades e problemas, com o uso da `PerformanceEntry Web API` — as possibilidades só são limitadas pelo que queremos medir.

Pragmaticamente, a realidade é bem mais complexa. Não podemos ignorar os HiPPO[^2]. Nem sempre conseguimos influenciar o escopo e definição do que estamos trabalhando. Mas podemos tentar. E até onde a minha experência vai, nada melhor do que se basear em evidências.

No futuro, postarei sobre a realidade do `DDD` no dia a dia, desafios e também alguns tutoriais.


### HTTP 303: SEE OTHER

Compilei vários recursos, postagens e ferramentas desse campo amorfo e sempre em expansão que é o desenvolvimento, ainda mais com foco em métricas.

[PerformanceEntry Web API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry) The `PerformanceEntry` object encapsulates a single performance metric that is part of the performance timeline. A performance entry can be directly created by making a performance `mark` or `measure` (for example by calling the `mark()` method) at an explicit point in an application. Performance entries are also created in indirect ways such as loading a resource (such as an image). Sua API nativa para medir todas as coisas.

[Developing the Largest Contentful Paint Metric](https://calendar.perfplanet.com/2019/developing-the-largest-contentful-paint-metric/) Ótimo artigo de [**Annie Sullivan**](https://twitter.com/anniesullie) sobre desenvolver a métrica Largest Contentful Paint. Acho esse processo de descoberta e definição fascinante.

[Helping to create the Web Almanac](https://calendar.perfplanet.com/2019/helping-to-create-the-web-almanac/) [**Barry Pollard**](https://twitter.com/tunetheweb) fala do brilhante trabalho do [Web Almanac](https://almanac.httparchive.org/en/2019/) em mapear os usuos da web.

[Reading a WebPageTest Waterfall Chart](https://calendar.perfplanet.com/2019/reading-a-webpagetest-waterfall-chart/) [**Matt Hobbs**](https://twitter.com/TheRealNooshu) explora como ler uma Waterfall Chart do WebPageTest. Específico de uma ferramenta, mas permite aprender vários conceitos aplicáveis a várias outras.

[The subtle art of predictive prefetching](https://calendar.perfplanet.com/2019/the-subtle-art-of-predictive-prefetching/) [**Divya**](http://shortdiv.com/) aborda um tema que estou atualmente fazendo estudos, o "predictive prefetching" ou pré-carregamento preditivo, baseado em dados de analytics, definir quais recursos e páginas pré-carregar para entregar uma melhor experiência.

[Front-End Performance Checklist 2020 (PDF, Apple Pages, MS Word)](https://www.smashingmagazine.com/2020/01/front-end-performance-checklist-2020-pdf-pages/) [**Vitaly Friedman**](https://twitter.com/smashingmag) com uma gigantesca e muito útil lista de métricas, otimizações e dicas para ficar de olho na performance.

[Web.dev](https://web.dev/ "Web.dev") Site da Google com toneladas de conteúdo sobre métricas && otimizações. Muito, muito bom!

[Lighthouse](https://developers.google.com/web/tools/lighthouse?hl=pt-br) A Ferramenta. Com "F" maiúculo mesmo! Me ajudou muito no processo de desenvolvimento e arrisco dizer, me tornou um desenvolvedor melhor.

[Mas já dá para usar, PerformanceEntry?](https://caniuse.com/#search=PerformanceEntry) Resposta curta: sim. Para detalhes, verifique.

["Performance marks: the missing manual, Part 1"](https://dev.to/hom3chuk/performance-marks-the-missing-manual-part-1-b6) Artigo bem interessante que explora alguns conceitos da PerformanceMark API. Pena que nunca teve uma segunda parte.

[Performance Budgets, Pragmatically](https://csswizardry.com/2020/01/performance-budgets-pragmatically/) Ótimo artigo do [**Harry Roberts**](https://twitter.com/csswizardry) para definir, pragmaticamente, budgets de performance.

[Speed tooling evolutions: 2019 and beyond](https://youtu.be/iaWLXf1FgI0): [**Elizabeth Sweeny**](https://twitter.com/egsweeny) e [**Paul Irish**](https://twitter.com/paul_irish) apresentando todo o pensamento e desenvolvimento em busca de entender, representar e otimizar as experiência dos usuários. Eles trabalham no time do Lighthouse. Apresentada no **Chrome Dev Summit 2019**.

[Adaptive Loading - Improving the user-experience for millions on low-end devices](https://youtu.be/puUPpVrIRkc): [**Addy Osmani**](https://twitter.com/addyosmani) e [**Nate Schloss**](https://twitter.com/n8Schloss) apresentam o paradigma de __Adaptive Loading__ e como a Facebook usa dados dos usuários para classificar as capacidades de hardware e rede para entregar melhores experiências. Apresentada no **Chrome Dev Summit 2019**.

[The main thread is overworked & underpaid](https://youtu.be/7Rrv9qFMWNM): [**Surma**](https://twitter.com/DasSurma) explora como a Main thread do JavaScript, pode impactar a experiência de pessoas sem acesso aos aparelhos de ponta. Apresentada no **Chrome Dev Summit 2019**.

[Advancing the web framework ecosystem](https://youtu.be/QDljY2I1Pfw): **Shubhie Panicker** e **Houssein Djirdeh** falam do investimento da Google nos frameworks e bibliotecas que estão dominando o mercado (`React`, `Vue`, `Angular`, `Next.js`) e exploram como os dados os ajudaram a otimizar recursos e como pensar em novas métricas. Apresentada no **Chrome Dev Summit 2019**.

[The whole web at maximum FPS: How WebRender gets rid of jank](https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/) Interessante artigo técnico de otimização de FPS do navegador Firefox. É o tipo de coisa que mesmo que não seja imediatamente prática ou mesmo aplicável, confere um bom contexto das decisões e técnicas para se otimizar um recurso.

[Perfume.js](https://github.com/Zizzamia/perfume.js#readme): Perfume is a tiny, web performance monitoring library which reports field data like Navigation Timing, Resource Timing, First Contentful Paint (FP/FCP), Largest Contentful Paint (LCP), First Input Delay (FID) back to your favorite analytics tool.

[Smaller HTML Payloads with Service Workers](https://philipwalton.com/articles/smaller-html-payloads-with-service-workers/) Ótimo e detalhado artigo explorando o uso de __service workers__ que nos leva a explorar os métodos empregados.


[^1]: _Known unknowns result from recognized but poorly understood phenomena. On the other hand, unknown unknowns are phenomena which cannot be expected because there has been no prior experience or theoretical basis for expecting the phenomena._: [There are known knowns](https://en.wikipedia.org/wiki/There_are_known_knowns)

[^2]: _Highest Paid Person’s Opinion_ : [Data-Driven Decision Making: Beware Of The HIPPO Effect!](https://www.forbes.com/sites/bernardmarr/2017/10/26/data-driven-decision-making-beware-of-the-hippo-effect/)

Entrem em contato caso queiram saber mais / conversar sobre o tema, meu email é email@ibrahimcesar.com