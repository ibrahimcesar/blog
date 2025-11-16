---
title: Como eu parei de me preocupar e passei a amar a Nuvem
description: Minha jornada pessoal de adoção das nuvens públicas e serviços gerenciados
featured: true
image: ~/assets/images/server.png
pubDate: "2020-10-03T10:50:00.000Z"
socialImage: "/features/jornada-cloud.png"
---

<p class="lead">A Nuvem, ou melhor, a Cloud — afinal o inglês é intrinsicamente a linguagem da tecnologia — é uma dos grandes avanços em desenvolvimento e tecnologia e traz inovações em uma velocidade impressionante. E só recentemente tive a revelação. Vivia dentro de uma caverna, como na fábula platônica.  E agora, me sinto livre — aceitando a Nuvem em minhas arquiteturas e abraçando seus inúmeros tradeoffs.<br/>Esta é a minha história pessoal com a Nuvem, de como passei de ignorante, a cético, e por fim, a convertido e entusiasta</p>

## Quem é esse tal de Cláudio?

Uma anedota, em retrospecto, mas em uma das empresas que trabalhei, após visitar um cliente, um arquiteto de software contava para todos que tinha se encontrado com o gerente de TI de uma grande indústria da região. Ele falava para nós de como ele havia ficado confuso quando estavam falando do _capacity plan_ da aplicação que estavam trabalhando e o gerente começou a falar do Cláudio. Cláudio? Que Cláudio? O arquiteto nos dizia que não estava entendendo de quem ele estava falando. Então depois de um tempo, ele se tocou: "Cloud". Ele está falando de Cloud. O uso de Cloud então, e isso tem uns dez anos nesta empresa era visto como "não se fazer as coisas do jeito certo". Que esses provedores iriam te deixar na mão, controlar seu software e segurança é sempre melhor. Por osmose todos acabamos absorvendo muito da cultura de uma empresa em nossas decisões, mesmo após deixar as empresas. Essa cultura é geralmente definida por esses fortes e opinados momentos que são estruturais.

## Paradigmas

A verdade é que somos jogados no mundo, e muito do que está aí assumimos como parte do cenário. O momento em que se realiza que cada processso e sistema foi definido por alguém em um contexto, e não é simplesmente "parte da ordem natural das coisas", é um momento importante, uma revolução pessoal de paradigma. Quando iniciei meu trabalho em uma startup, um de nossos mentores no meio de uma conversa de como estávamos fazendo nossos deploys (na época usanndo Heroku), nos falava de como ainda na década anterior, se alguém dissesse que estava tendo muito sucesso, visitas e vendas em seu website significava que alguém teria que colocar mais uma máquina física, plugar os cabeamentos, fazer a instalação de cada dependência.

Fora o Heroku, ou eu tinha trabalhado com provedores de servidores compartilhados ou dedicados ou para grandes corporações com seus grandes servidores. A abstração da máquina, estava ali para mim. O Heroku abstraia isso um passo além, mas na comunidade Ruby on Rails tinha muito material e era extremamente fácil de usar. Se seu site tivessse picos, você em alguns cliques, conseguia escalar sua carga de trabalho.

## Grokando a Nuvem

Minha porta de entrada para a AWS, como para muitos, foi o S3. Era tão fácil utilizar, conveniente. E o preço era tão irrisório, que fomos utilizando cada vez, e mesmo descobrindo novos usos, para colaboração com outros times, hospedagem de páginas simples entre outros. Logo, surgiu a necessidade de criar alguns serviços REST. O impulso, motivado pela experiência foi dar uma olahada nas páginas de hospedagem "tradicional". Logado no console da AWS, resolvi testar criar uma instância EC2.

<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/XZyZJCtQHo7dPGWjG2" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

Foi incrível. Tanto poder em poucos cliques. Era um pouco mais complexo do que era com o Heroku - que, na verdade, era uma abstração em cima da AWS - mas de certa forma era familiar o suficiente mas ao mesmo tempo, uma nova forma de usar recursos. Repentinamente, se abriu um leque de possibilidades muito grande. O próximo serviço que passei a usar em produção foi Load Balacers, então ElasticBeanstalk, então SES e então eu tinha grokado [^1] a Nuvem. Nunca tinha me dado conta de que revolução incrível era uma serviço oferecido pelas nuvens públicas, que possibilitam a empresas e indivíduos de qualquer tamanho a ter acesso a gerenciar cargas de trabalho que por menor que fossem, para serem feitas precisariam de muito e muito trabalho. Mover átomos. Fios. Energia elétrica. Manutenção. E é claro, tudo isso continua existindo, mas o custo inicial só para chegar nisso seria proibitivo, eliminou uma barreira de entrada incrível para se desenvolver negócios utilizando software.

## Serviços gerenciados

Os últimos seis anos liderando uma equipe de tecnologia e tendo que escalar entrega de emails para a casa de milhares e tendo dezenas de serviços, externos e internos, muitos críticos ao modelo de negócio da empresa, também me mostraram como o uso estratégico dos serviços gerenciados pode ser catalisador para aumentar a velocidade e a qualidade de nossas entregas.

Em equipes pequenas muitas vezes não podemos nos dar ao luxo de ter alguém amplamente especializado em uma área ou mesmo gastar algumas semanas apenas em um aspecto de infra-estrutura para servir a algum serviço. Na verdade, a janela para entrega de alguns projetos, dada a velocidade do mercado, muitas vezes se reduz a poucas semanas.

Iniciamos com algumas funções lambda para eliminar várias tarefas anteriormente em cron jobs. Depois para alguns serviços auxiliares para os quais rodavamos uma pequena aplicação Express, mas que resolvemo só com o combo API Gateway + Lambda. Utilizamos DynamoDB para fazer uma imensa coleta de dados e hoje é um dos principais bancos de dados que utilizamos.

Conseguimos ser mais produtivos, nos focamos em nossos domínios e regras de negócio e podemos nos especializar em conceitos e boas práticas bem estabelecidos e não nos especializar nas séries de dezenas de passos exclusivos de sua organização e de suas próprias aplicações. **Se você não faz sua arquitetura de software, ela simplesmente acontece**, e acredite em mim, eu passei por isso. Ainda lido com débitos técnicos e decisões relativos a isso até hoje. Como fantasmas dos sprints passados, sempre assombrando cada novo movimento em territórios deconhecidos ou quando temos que revisitar ou expandir alguma aplicação.

Por isso, esse ano, eu resolvi abraçar ainda mais a Nuvem. Elaborei um plano de arquitetura, estamos nos formando, e fazendo movimentos incrementais e em pequenos passos. Meu objetivo é ter uma arquitetura que faça amplo uso dos serviços gerenciados.

## "Vendor Lock-in", Multicloud !?!

Acredito que _vendor lock-in_ ou no uso "correto" em português, aprisionamento tecnológico, é uma das primeiras perguntas que alguém faz. [Toda decisão de arquitetura é um trade-off](https://ibrahimcesar.cloud/blog/fundamentals-of-software-arquitecture/). Se você escolhe um banco de dados relacional ou de documentos, Python ou Java, você está se comprometedo. Esta fazendo uma escolha e migrar de uma solução para outra, não seria nenhum pouco fácil mover de um stack para outro.

Cada decisão que tomamos, é sempre contextual, e traz consigo implicações. Acredito que toda a discussão de vendor lock-in é menos de interesse puramente técnico do que da perspectiva de depender de um provedor que pode não ter os mesmos interesses alinhados com os seus em algum momento ou, até mesmo, imaginando os piores cenários, deixar de existir. Qualquer migração seria um pesadelo para uma equipe de desenvolvedores, seja de AWS para Azure, seja de uma tecnologia para outra. As ferramentas open source que utilizamos também são compostas de contribuidores e algumas vezes fundações ou empresas e também podem igualmente entrar em conflito e mesmo, deixar de existir, de um dia para outro, ou criar incompatibilidades. Quanto a AWS deixar de existir de um dia para o outro, caso isso aconteça nas próximas décadas talvez a economia de forma geral não sustente empresas que precisariam usar serviços na Nuvem. A AWS está em constante evolução, toda semana é recheada de novidades e melhorias em seus serviços. E não sofre do grande problema da Nuvem da Google, brilhantemente exposto por um engenheiro que já trabalhou na mesma, em [Dear Google Cloud: Your Deprecation Policy is Killing You](https://medium.com/@steve.yegge/dear-google-cloud-your-deprecation-policy-is-killing-you-ee7525dc05dc).

Multicloud se refere a estratégia de ter sua carga de trabalho distribuida entre vários provedores de nuvem pública. Mais do que isso, se preocupa em manter certa compatibilidade de recursos (já que nem sempre os mapeamentos são 1:1, principalmente em se tratando de serviços gerenciados). Empresas como a [ThoughtWorks](https://www.thoughtworks.com/insights/articles/cloud-beyond-infrastructure-thinking) já afirmaram que "Every business needs a multi-cloud strategy.". Eu não concordo [^2]. Assim como toda decisão é contextual e tem seus tradeoffs, cada orgaização faz suas escolhas, não sendo um imperativo. Mas por princípio eu não acredito que estratégias multicloud sejam eficientes, ainda mais para times menores. Corey Quinn, Cloud Economist em [Multi-Cloud is the Worst Practice](https://www.lastweekinaws.com/blog/multi-cloud-is-the-worst-practice/) e nesta talk, [The Myth of Multi-Cloud](https://youtu.be/r6OFCJ_gux0) explora em detalhes as realidades de ter estratégias multicloud.

## Pessoas desenvolvedoras Cloud

Se a Nuvem dá tantos poderes e com grandes poderes, vem grandes responsabilidades, também é muito fácil gastar - e muito - desnecessariamente. É importante formar o time, e se aprofundar em entender os white papers e a riqueza de mateeriais disponibilizados. As vezes as documentações são obtusas aqui e ali, mas sempre encontrei ótimos materiais de referência para qualquer problema que efrentei até agora. O próprio processo de estudar para buscar uma certificação, já ajuda a ter uma perspectiva melhor de como trabalhar nesse novo contexto.

E ser uma **pessoa desenvolvedoar cloud**, envolve além das habilidades de escrever código em alguma linguagem, mas também entender os serviços gereciados e a melhor forma de explorar os mesmos. Vejo como um cojunto de habilidades que coloca o desenvolvedor a cada momento também em uma posição de arquiteto e entender os serviços dos quais está utilizando. E acredito que vai se tornar um tipo de habilidade cada vez mais requisitado e potencializado cada vez mais, assim que a onda da transformação serverless começar a se tornar uma realidade, que acredito, esteja apenas começando. Coisas incríveis ainda estão por vir e fico maravilhado com as possibilidades que temos à disposição para desenvolver, manter e colocar no ar aplicações com excelente performance, segurança, custo benefício e confiabilidade que só seria possível com um time de centenas de profissionais altamente capacitados e um grande investimento em infra-estrutura. Que certamente está sendo feito pelo provedor de Nuvem pública, mas que todos podem se beneficiar. A Nuvem torna este momento um tempo incrível para ser um desenvolvedor.

## Tudo sustentado por Nuvens de adorável graça

E então foi assim que aceitei a nuvem, passei a adotá-la e a abracei como um caminho para o desenvolvimento.

**Update 2021:** Uma das ferramentas que uso e estou gostando cada vez mais é a CDK, Cloud Development Kit, para usar como Infraestrutura como código e eu posso criar aplicações isomórficas na Nuvem em TypeScript! Escrevi esta postagem, em inglês: [Happy little clouds: finding my way with CDK](/blog/happy-little-clouds-finding-my-way-with-cdk/).

<div style="width:100%;height:0;padding-bottom:60%;position:relative;"><iframe src="https://giphy.com/embed/3og0IFEYjQPvj8C5UI" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
<p>Toda mudança requer uma espécie de salto na fé, rumo ao desconhecido</p>

[^1]: ["Grokar é uma forma orgânica de aprendizado na qual você entende completamente um conceito por meio de experiência, referência e reflexão"](https://medium.com/@marcorigobelli/groko-f164e319726e) e vem do livro "Um estranho numa terra estranha", de Robert A. Heinlein.

[^2]: Atualizado em 2021: Escrevi minha visão mais extensa sobre [Multi-cloud: o que, quando e para quem?](/blog/multicloud/)