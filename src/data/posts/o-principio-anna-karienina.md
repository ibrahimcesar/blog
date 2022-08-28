---
title: O Princípio Anna Kariênina
description: Todas as sessões felizes se parecem, cada sessão infeliz é infeliz à sua maneira. O Princípio Anna Kariêninca aplicado ao desenvolvimento
featured: true
pubDate: "2020-09-07T10:50:00.000Z"
image: ~/assets/images/anna.jpg
---

<p class="lead">A frase de abertura de "Anna Kariênina" de Tolstói é um dos inícios mais conhecidos da literatura mundial. Além da influência de sua obra se cunhou um princípio com base no mesmo, que acredito pode ser aplicado ao desenvolvimento web e cloud facilmente</p>

> # Todas as famílias felizes se parecem, cada família infeliz é infeliz à sua maneira.
>
> <footer>Tolstói, "Anna Kariênina"</footer>

Traduzindo com minhas palavras direto da wikipedia em inglês, o **princípio de Anna Kariênina** estabelece que uma deficiência em _qualquer um em determinado número de fatoires_ leva uma iniciativa ao fracasso. Consequentemente, uma inicitiva bem sucedida (sujeita ao princípio), é aquela em que toda deficiência possível foi evitada. Em termos mais simples: famílias felizes compartilham um conjunto comum de atributos que levam a felicidade, enquanto qualquer variedade de atributos pode causar uma família infeliz. Este conceito foi generalizado para se aplicar a vários campos de estudo.

## Aplicações

O princípio teria se popularizado por Jared Diamond em seu livro de 1997 "Armas, Germes e Aço - Os Destinos das Sociedades Humanas" (120 anos após a publicação de "Anna Kariênina"). No livro, Diamond emprega o princípio para ilustrar o motivo de tão poucos animais selvagens tenham sido domesticados ao longo da história, já que a deficiência, em qualquer um de um grande número de fatores, pode levar uma sessão a ser indomesticável.

Até mesmo a Segunda Lei da Termodinâmica, que estabelece que qualquer estado organizado em um sistema isolado espontaneamente evolve para um estado de entropia máaxima, para o qual existem mais opções O número de estados organizados em um sistema (a família feliz) é sempre muito menor e menos diversos do que o número de estados desorganizados e de alta entropia (famílias infelizes).

E veja as sessões dos seus usuários. Passava cada nova página testando contra os scores do Lighthouse. O ambiente de performance ainda tão rápido e em constante mudança que as métricas se alterarm profundamente.

<figure class="extend">
    <img src="/assets/lighthouse-weight-changes.png" width="752" height="475" alt="Mudança de classificação entre versões do Lighthouse" style="border: 1px solid #BBB" />
    <figcaption>Mudança de classificação entre versões do Lighthouse</figcaption>
</figure>

Da versão do ano anterior (a v5) para a em vigort (v6) foram introduzidas três novas variáveis que não existiam previamente e foram abandonas duas. Uma destas variáveis, **TBT** (Total Blocking Time), que mede o tempo total que o navegador está gastando para renderizar sua página, bloqueando os recursos, já foi introduzida com o peso de 25% ao lado de outra novidade, **LCP** (Largest Contentful Paint) que mede a velocidade que a maior área visível de sua aplicação leva para carregar também com 25%! As duas medidas anteriores com maior destaque eram Speed Index com 27% e Time To Interactive com 33%, ambas reduzidas para 15%. Não se trata de uma reclamação da métrica. Entendo o embasamento e acredito ser um ótimo ganho para os usuários da web e temos que sempre entregar a melhor experiência, mas veja: essas métricas também não são pontos fixos no tempo. E não apenas por que as próprias métricas e pesos oscilam.

Cada máquina com sua capacidade de memória no momento, sua capaxidade de bateria, a velocidade de conexão no momento, as extensões e um conjunto imenso de fatores fazem com que cada sessão seja única e acredite. As sessões felizes serão muito parecidas: a usuária acessa a página carrega sem FOUC e apresenta exatamente o deveria exibir. Mas as sessões infelizes... Bem, estas vão exigir tentativas de reprodução, pesar as múltiplas variáveis e tentar buscar em meio à cacofonia de peças móveis em que lugar você deve mexer.

## Projetos felizes, projetos infelizes

[Corey Quinn]("https://twitter.com/QuinnyPig") do [Last Week in AWS]("https://www.lastweekinaws.com/") conta uma anedota interessante que pode ser que resoe com muitas pessoas: Você está na audiência de uma conferência, ouvindo uma talk sobre os processos maravilhosos e a tecnologia do palestrante e você comenta com a pessoa do lado "Uau, eu queria trabalhar nessa empresa" e a pessoa te responde "É, eu também". E depois, pela credencial você descobre que aquela pessoa é da mesma empresa do palestrante.

Para além dos vários desdobramentos que poderiamos abordar a partir daí, o que seria um "projeto feliz"? Tal coisa existe? Mesmo em um time pequeno pode sofrer com tantas questões, como um conflito na branch principal, atrasos inesperados e um milhão de outras variáveis e gastamos tempo em nossas cerimonias e falando de como seriamos mais felizes fazendo tudo de outra forma.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The greatest myth across the entire industry is that after this sprint we&#39;re all going to start making good technical decisions instead.</p>&mdash; HydroxyCoreyQuinn (@QuinnyPig) <a href="https://twitter.com/QuinnyPig/status/1288276471677501441?ref_src=twsrc%5Etfw">July 29, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

O que me faz pensar muito no estado atual da tecnologia e de como nos medimos. Claro que a definição de um "projeto feliz" estaria aberta a muitas e muitas interpretações. Inclusive um adágio bem comum e que eu mesmo já assinava embaixo é de que "um bom projeto é um projeto entregue". Esse "entregue" pode esconder um débito técnico enorme com juros altíssimos ou o famoso "crunch", vide as empresas que desenvolvem games e colocam seus programadores para virar horas e horas para entregar nas datas. Um dos motivos pelos quais eu aprecio ainda mais a decisão da Nintendo ter [adiado o lançamento de **Animal Crossing: New Horizonts** para evitar essa cultura tóxica]("https://www.ign.com/articles/2019/06/21/nintendo-comments-on-crunch-and-game-delays-a-e3-2019").

Um amigo e colega de trabalho uma vez me disse nos últimos dias de um longo e cansativo projeto de que a definição de sucesso de um projeto para ele, era quando chegava ao fim e as pessoas estavam sorrindo. E acredite em mim com débito técnico (aliás, débito técnico **é** entropia, em sua encarnação mais absoluta), com _trade-offs_ de última hora, mas com todas as pessoas trabalhando de forma leve, se respeitando e ainda com um espírito bom.

## Well-Architected Framework

Um projeto de tecnologia tem tantas entradas, tantos pontos de falha: expectativas, comunicação, estimativa de tempo, integrações e isso sem entrar em segurança, operações e experiência do usuário! Há milhões e milhões maneiras de falhar! (talvez, [bilhões]("/blog/next-billion-users/")?)

Que pensar no princípio de Kariênina sempre me coloca na posição de que com tantas variáveis, que não há forma de não falharmos — ainda mais em meu contexto com um grupo pequeno — cobrir cada uma e satisfatoriamente, dos [atributos de empresas classificadas como "elite" na entrega de software]("https://services.google.com/fh/files/misc/state-of-devops-2019.pdf"), as que eu classificaria certamente como as "famílias felizes" da tecnologia.

Mas a experiência também me ensinou que muitas vezes fortalecer o espírito de equipe e trabalhar em conjunto mesmo em condições adversas é possível, sim um projeto feliz. E exatamente por levar em conta essa multitude de coisas que podem dar errado, é que conseguimos fazer escolhas bem informadas e entender no que direcionar nossos recursos. Um dos motivos pelos quais eu tento implementar a partir de agora o [AWS Well-Architected Framework]("https://aws.amazon.com/pt/architecture/well-architected/") em todos os projetos que conduzirei. Ele se divide em cinco pilares: [Excelência operacional]("https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html"), [Segurança]("https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html"), [Confiabilidade]("https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"), [Eficiência de performance]("https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/welcome.html") e [Otimização de custos]("https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html"). Além de outras perspectivas ou no original, _lens_ focado em domínios específicos como a [Perspectiva de aplicações sem servidor - a Serverless Lens](https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/welcome.html?did=wp_card&trk=wp_card). Para quem tem Kindle, todos esses white papers podem ser baixados sem custo nenhum. Recomendo muito a leitura, traz o aprendizado de lidarem com inúmeras cargas de trabalho de vários clientes e traz muitos pontos para se preparar.

E não, não acho que dá para satisfazer cada item. Ao menos não para todos os stakeholders envolvidos. Se o princípio de Anna Kariênina nos dá a perspectiva de que para ser bem sucedido depende de uma série de fatores e para falhar, há diversas e múltiplas formas, ao menos significa que o conhecimento para buscar ao máximo a felicidade é um conjunto limitado e gerencialmente de práticas que podemos, a nosso tempo, ir desenvolvendo.