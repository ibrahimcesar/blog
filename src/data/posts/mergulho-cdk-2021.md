---
title: "Mergulho em AWS Cloud Development Kit (CDK)"
description: Conheça mais profundamente o AWS CDK
featured: true
pubDate: "2021-11-14T10:50:00.000Z"
image: ~/assets/images/cdk-feature.jpg
socialImage: "/features/mergulho-cdk.png"
---

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.001-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

<p class="lead"><strong>"Mergulho em CDK"</strong> foi uma talk que realizei no último dia 06 de Novembro para o AWS Community Day Brasil onde procurei dar uma visão desta ferramenta de Infraestutura como Código, que oferece uma ótima experiência de desenvolvimento e torna a criação e gestão de stacks e aplicações na nuvem muito mais simples. Vou colocar aqui algumas notas dos meus slides e apofundar aqui e ali.</p>

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.003-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Um pequeno resumo geral do AWS Cloud Development Kit (CDK):

- Lançado em julho de 2019;
- Open source, escrito em TypeScript e compilado para diversas linguagens através do jsii;
- Linguagens com suporte hoje: TypeScript, JavaScript, Python, Java, C# e família .NET e Go;
- Utiliza linguagens de alto nível para criar e manter infraestrutura como código na AWS.

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.005-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

> "Tudo em arquitetura de software é um trade-off"
> <footer>Primeira lei da Arquitetura de Software</footer>

## Trade-offs

"Depende", é uma das leis fundamentais em arquitetura de software como articulado no livro [“Fundamentals of Software Architecture”](https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/) dos autores [Mark Richards](https://twitter.com/markrichardssa) e [Neal Ford](https://twitter.com/neal4d). Por isso, um mergulho em CDK, ou em qualquer ferramenta na verdade, não seria completo sem olhar para seus trade-offs.

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.006-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Em adição à rápida incorporação e deploy de componentes que mantenham seus requerimentos de segurança, _compliance_ e governança, um dos pontos fortes do AWS CDK é a utilização de linguagens de alto nível, com o poder da **Construct Library**, que  aproveitando integrações com suas IDEs e incorporando características como o uso de objetos, loops, condicionais, etc., tornam muito mais ágil o desenvolvimento. Muitas destas abstrações, possuem os chamado _sensitive defaults_, já incorporando muito das boas práticas. Usar técnicas de modelagem orientada a objetos funciona incrivelmente bem para infraestrutura, modelando de forma natural seu sistema. E por isso, torna simples a criação e compartilhamento de código como bibliotecas.

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.007-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

O paradigma de infra-estrutura, do qual a HCL (Hash Corp Language) utilizada pelo Terraform é um modelo que possui algumas características sócio-tecnológicas que permitiram sua popularidade, sendo sua expressividade um de seus motivos, como articulado por [Ben Kehoe](https://twitter.com/ben11kehoe), AWS Serverless Hero no [episódio 15 de aws.fm](https://aws.fm/episodes/episode-15-ben-kehoe), citado neste tweet:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">&quot;It tends to be hard to write a CloudFormation template that does not do what you expect it to do, whereas that is the default state of a general-purpose programming language&quot;<br><br>What amazing insights from <a href="https://twitter.com/ben11kehoe?ref_src=twsrc%5Etfw">@ben11kehoe</a> 🤩</p>&mdash; Ian Mckay (@iann0036) <a href="https://twitter.com/iann0036/status/1456260536794976263?ref_src=twsrc%5Etfw">November 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.008-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

<div class='yt-frame'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/AYYTrDaEwLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

Troca de contexto é um dos grandes inimigos da produtividade de uma pessoa desenvolvedora. É aqui que o **AWS CDK**  entra. Tornando a colaboração entre Desenvolvimento e Operações ainda mais fluida e integrada. Para quem conhece o conceito de **flow** articulado por Mihaly Csikszentmihalyi em [Flow : A psicologia do alto desempenho e da felicidade](https://amzn.to/31Pawnh). Mihaly descobriu o flow, que é um estado mental de extrema concentração, onde nossas habilidades são refinadas e que existem em um contexto em que nossas habilidades são exigidas em grandes desafios, _golden spot_ para os desafios de infra-estrutura e desenvolvimento.

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.009-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

A Dra. Nicole Forsgren, principal autora do excelente [Accelerate: Building and Scaling High Performance Technology Organizations](https://www.infoq.com/articles/book-review-accelerate/), continuando sua pesquisa em eficiência de entrega de software agora focou-se em explorar produtividade no nível do desenvolvedor. Em [artigo de Março de 2021 na ACM Queue](https://queue.acm.org/detail.cfm?id=3454124), delineou o The SPACE of Developer Productivity:

- Satisfação e bem-estar;
- Performance;
- Atividade;
- Comunicação & Colaboração;
- Eficiência & flow.

Flow é essencial para entregas eficientes de software e mudanças de contexto certamente impactam esse espaço mental de imensa satisfação pessoal e excelência de performance — o momento mágico em que literalmente **mergulhamos em CDK**!

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.010-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Entretanto o versionamento do CDK ainda é um desafio. Ele possui ciclos _insanos_ de releases, às vezes com dias entre uma versão e outra. Certamente necessário para dar conta dos mais de 200 serviços que atualmente a AWS oferece. E em breve, teremos uma grande mudança de organização e gestão das versões com a versão 2.0.

## Conceitos-chave

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.011-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Três componentes básicos compõem o _core_ framework de um projeto AWS CDK. Apps, stacks, and constructs. Para provisionar recursos de infra-estrutura, todos os construtos que representam recursos da AWS devem ser definidos, direta ou indiretamente, dentro do escopo de um construto de stack. Definições:

### App

Apps contém todos os construtos que compartilham um contexto que presentam uma aplicação como um todo. 

### Stacks

A unidade singular de deploy no AWS CDK, stacks definem todos os AWS recursos, como biuckets no Amazon S3 ou tabelas do DynamoDB, em uma aplicação CDK.

### Constructs

Os blocos básicos de construção de uma aplicação AWS, construtos representam um componente na cloud e incluem todos os elementos que o AWS CloudFormation necessita para gerá-lo.

Ao combinar os componentes básicos com a biblioteca AWS Construct, você pode agregar recursos AWS como construtos básicos ou de alto-nível. 

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.012-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Sua aplicação é logicamente definida como uma aplicação e representada pela classe `App` do AWS CDK e normalmente é a raíz da árvore de seus construtos. Composto de uma ou mais stacks, Apps podem contem um ou mais construtos.

Tipicamente se define uma instância de `App` no ponto de entrada de seu programa e então se definem os construtos onde o App é utilizado como o escopo principal.


<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.013-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Um construto ou construct, para usar o nome oficial e em inglês que faz parte da própria sintaxe da biblioteca, representa um único recurso da AWS, como um endpoint em uma Amazon VPC, ou ainda pode representar vários recursos de forma agregada como um único componente.

A composição de constructs permite que sejam definidos componentes reutilizáveis e compartilhar como qualquer outro código.

Constructs são implementados tendo a classe base `Construct`. Você define um construct ao instanciar a classe. Todos construtos podem receber até três parâmetros quando inicializados: `scope`, `id` e `props`, sendo este último opcional.

### Scope

O primeiro argumento, `scope`, é o construct no qual este construto é criado. Em muitos casos, um construct é definido no contexto de si mesmo, o que significa na prática que você passa `this` para o primeiro argumento.

### Id

O segundo argumento, `id`, é o identificador local do construct que deve ser único dentro do escopo. O AWS CDK utiliza este identificador para calcular Id lógico do AWS CloudFormation para cada recurso definido dentro deste escopo.

### Props

O terceiro argumento, `props`, é objeto ou conjunto de propriedades de inicialização que são específicas a cada construct e definem sua configuração inicial.

O AWS CDK inclui a  AWS Construct Library para assegurar que tenham acesso a todos os constructs e que possam herdar e criar seus próprios constructs, que se definem em níveis, identificados com L, de _level_. 

### L3

O nível mais alto de abstração dos constructs. Auxiliam a completar tarefas comuns na AWS que utiliza vários recursos como casos de uso muito comum ou padrões de arquiteturas, como por exemplo, criar um cluster de containers no Fargate com um Application Load Balancer (ALB).

### L2

São mapeamentos de recursos AWS que oferecem _defaults_ convenientes e reduzem a carga cognitiva de tudo que é necessário para acelerar o desenvolvimento.

### L1

O nível mais baixo de construct, são implementações diretas de recursos do AWS CloudFormation. Geralmenet possuem o nome no padrão `Cfn*`.

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.014-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Stacks são uma unidade de deploy no AWS CDK. Todos os recursos da AWS definidos no escopo de uma stack, direta ou indiretamente são provisionados como uma unidade única e estão sujeitos às mesmas [cotas do AWS CloudFormation](https://docs.aws.amazon.com/pt_br/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html), na data de publicação deste artigo, por exemplo, de 500 recursos. Sempre verifique a documentação oficial referenciada.

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.015-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

É importante se familiarizar-se com o [AWS CDK Toolkit](https://docs.aws.amazon.com/pt_br/cdk/latest/guide/cli.html), uma CLI para interagir com sua aplicação. Através da mesma, será possível executar várias funções necessárias, como por exemplo, o [CDK Bootstrapping](https://ibrahimcesar.cloud/blog/cdk-bootstrapping/).

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.016-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Mudanças bem importantes virão na versão 2.0 que já tem alguns **releases candidates** e que iniciou seus testes com a comunidade. O CDK possui um [rodamap público](https://github.com/orgs/aws/projects/7) para acompanhar sua evolução.

## "Melhores práticas"

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.018-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Aspas não acidentais. No espírito de que "melhores práticas" são sempre contextuais, muitas vezes representativas de certas formas de trabalho e organização ou apenas convenções que a comunidade foi aderindo explícita e implicitamente.

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.019-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

A primeiro eu diria, é aderir ao [AWS Well-Architected Framework](https://aws.amazon.com/pt/architecture/well-architected/?wa-lens-whitepapers.sort-by=item.additionalFields.sortDate&wa-lens-whitepapers.sort-order=desc) desde o dia 0. Vai evitar grandes refatoramentos e até facilitar a gestão de expectativas de entregas.

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.020-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

A Azure também tem seu [Well-Architected](https://docs.microsoft.com/pt-br/azure/architecture/framework/) e podemos verificar os mesmos pilares.

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.021-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Inclusive a Google Cloud possui seu conjunto em um framework que embora compartilhe os mesmos pilares, não possui o "Well-" como as outras sendo referenciado como [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework).

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.022-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Tudo isso para mostrar que as três maiores Clouds públicas, ainda que de forma "independente", observam os mesmos pilares e compartilham um conjunto de áreas importantes para a criação, desenvolvimento, operação e manutenção de aplicações na Cloud.

O AWS Well-Architected Framework define componente como o código, configuração e recursos da AWS que juntos entregam um requerimento. Um componente é muitas vezes a unidade de propriedade técnica e é descolada de outros componentes. O termo carga de trabalho (workload) é usado para identificar um conjunto de componentes que juntos entregam valor ao negócio. Uma carga de trabalho é geralmente o nível de detalhe em que negócios e líderes técnicos se comunicam.

Um app no AWS CDK mapeia-se para um componente.

Crie e compartilhe componentes como bibliotecas de código através de repositórios de artefatos como AWS CodeArtifact.

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.024-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Trabalho em equipe deve ser sempre algo a se considerar na definição de uma ferramenta. Muitas vezes ignoramos os contextos sócio-tecnológicos, de carga cognitiva e outros, que possuem um impacto tremendo no trabalho. Para CDK um padrão que vem sendo defendido e aplicado é o de cada colaborador do projeto ter sua própria conta AWS onde faz os deploys em ambiente de desenvolvimento e então versionamento de mudanças que passa pelo tradicional _code review_, _merge_ e então passa por todos os estágios de ambientes necessários na esteira CI/CD.

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.025-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Modele sua aplicação em unidades lógicas de domínios baseados em Constructs, não Stacks. Stacks são uma unidade de deploy, e tendem a serem orientadas a aplicações específicas.Construir com base em Constructs confere mais flexibilidade.

Use Stacks para isolar unidades de deploys, como:

- DevStack
- StagingStack
- ProdStack

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.026-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

- Empregue Least Privilege desde o início;
- Evite variáveis de ambiente. Utilize o [AWS Systems Manager Parameter Store](https://docs.aws.amazon.com/pt_br/systems-manager/latest/userguide/systems-manager-parameter-store.html)
- Não mude o ID lógico de recursos com estado! Caso contrário, serão substituídos ou destruídos
- Aplique proteções de delete sempre que possível
- O ID lógico é derivado do `id` especificado ao instanciar o construct e sua posição na arvore do construct
- Entenda como [Identificadores (Identifiers) funcionam](https://docs.aws.amazon.com/pt_br/cdk/latest/guide/identifiers.html)!

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.027-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

- Testes de Snapshots testam o template sintetizado do AWS CloudFormation contra um template de baseline previamente salvos.
- Asserções específicas testa aspectos específicos, testes unitários de valores esperados ou ter certeza de que funcionalidades existentes não foram alteradas.
- Testes de validação ajudam a “falhar rápido” ao exibir erros antes mesmo de seu envio. 

CDK possui bibliotecas de teste: **assert** e **expect**.
Preferencialmente um teste deve verificar _um e apenas um_ comportamento.

[Testes são um assunto que precisam de um mergulho própio](https://docs.aws.amazon.com/pt_br/cdk/latest/guide/testing.html), mas aproveite a aderência e comunidade das linguagens suportadas e explore testar sua infraestrutura.

<div class='yt-frame'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/fWtuwGSoSOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.028-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

- Empregue os nomes gerados para recursos, não nomes físicos. Cada nome pode ser usado apenas uma vez em uma conta — este é um erro muito muito comum.
- Defina políticas de remoção e retenção de logs sempre que possível.
- Use `cdk.context.json` para evitar comportamentos não-determinístico.
- Empregue o AWS CDK para gerenciar roles e grupos de segurança (eg., `grantRead()`)


## Ecossistema

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.029-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Frameworks, bibliotecas, componentes e linguagem vivem por suas comunidades. As pessoas ao redor de determinada tecnologia. Sejam grandes organizações ou um grupo interessado de pessoas. Embora seja de alguma forma recente (2019), o CDK possui uma vibrante e ativa comunidade.

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.030-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

[Matt Coulter](https://twitter.com/NIDeveloper) e seu projeto [CDK Patterns](https://cdkpatterns.com) merece o reconhecimento por ser um dos primeiros, senão o primeiro repositório de patterns para o CDK, o que ajudou em sua popularização. A própria AWS, mas focada no serverless, criou uma iniciativa parecida, o [ServerlessLand](https://serverlessland.com/patterns).

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.031-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

E este ano teremos o lançamento do [The CDK Book](https://thecdkbook.com/) de [Matt Coulter](https://twitter.com/NIDeveloper), [Thorsten Hoeger](https://twitter.com/hoegertn), [Sathyajith Bhat](https://twitter.com/SathyaBhat) e [Matthew Bonig](https://twitter.com/mattbonig).

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.032-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

O [CDK Day](https://www.cdkday.com/), anualmente organizado pelo, novamente, [Matt Coulter](https://twitter.com/NIDeveloper) traz sempre excelentes talks. Acompanhe o [tweeter do evento](https://twitter.com/cdkday) para ser informados das edições e novidades. Seu mascote é a lontra chamada Pancake.

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.033-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Existem na história da tecnologia vários _killer apps_. Programas ou sistemas que em um determinado momento, em uma determinada hora provocaram grandes mudanças e aceleração de adoção e uso mesmo quando iniciativas parecidas ou com "mais recursos" exista. A Google começou quando já havia mecanismos de busca. O Telegram nunca ultrapassou o Whatsapp. Para a web, sem sombra de dúvidas foi o navegador Netscape (o motivo de falarmos navegador inclusive é por que se chamava _Netscape Navigator_). O jQuery teve papel semelhante no uso de JavaScript e páginas com mais capacidades. O S3 foi um marco para o início da Cloud e a Lambda não foi apenas o grande catalizador do mercado de FaaS, Function as a Service, mas de todo um novo domínio conhecido como "serverless".

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.037-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

 Da mesma forma, IMHO (In My Humble Opinion, _na minha modesta opinião) eu acredito que o CDK é um _killer app_ de Infraestrutura como Código. Onde estão o [CDK da Azure e Google](https://awsmaniac.com/hey-azure-and-google-cloud-we-need-the-aws-cdk-from-you-too/)? Com estratégias multicloud se tornando cada vez mais comum, seria muito interessante ver algo se desenvolvendo nesse espaço.

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.039-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

No primeiro CDK Day teve um pequeno [protótipo de CDK para Azure](https://www.youtube.com/watch?v=0q89VbEA9I4) em que [Andreas Heumaier](https://twitter.com/aheumaier) também defendeu o desenvolvimento de CDK para não apenas a AWS e Azure mas outras Clouds. Hoje já temos o [CDK para Terraform](https://github.com/hashicorp/terraform-cdk) e [cdk8s](https://cdk8s.io/), Cloud Development Kit for Kubernetes.

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.040-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

E o CDK ganha mais e mais maturidade a cada dia. Um dos últimos, e grandes, lançamentos, foram os CDK Pipelines, que facilitaram ainda mais a criação de pipelines de entrega e deploy de aplicações CDK.

<div class='yt-frame'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/1ps0Wh19MHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

<figure class="extend">
    <img src="/assets/cdk-aws-community-day-br-2021-.042-min.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

E este foi o roteiro da minha talk "Mergulho AWS Cloud Development Kit (CDK)" apresentada no AWS Community Day Brasil em 2021.