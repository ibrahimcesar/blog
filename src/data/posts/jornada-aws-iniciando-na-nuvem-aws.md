---
title: "⛅ #jornadaaws:  Iniciando nossa jornada na AWS"
description: Como começar a mergulhar nos mais de 200 serviços da maior Nuvem do mundo
featured: true
permalink: "/blog/jornada-aws-iniciando-na-nuvem-aws/"
pubDate: "2021-10-19T10:50:00.000Z"
featuredImage: aws-iniciando.jpg
image: aws-intro.png
featuredImageColor: "#1E2C54"
---

<p class="lead">Não precisa mais procurar — estou feliz que esteja aqui <span role="img" aria-label="Felicidade" >😄</span>
<br/>
Acabou de chegar ao guia para iniciar nossa jornada como uma pessoas desenvolvedoras Cloud e explorar alguns dos mais de 200 serviços da <strong>AWS</strong>, a maior Cloud pública do mundo, desde o início! Toda grande jornada começa com um pequeno passo e hoje vamos criar nossa conta! Não despreze esse passo! Há questões de segurança e de cobrança muito importantes que vamos explorar juntos! Tenha uma ótima jornada!</p>

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'>
<iframe title="YouTube" width="560" height="315" src="https://www.youtube.com/embed/Fc71FVao7Dw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


<section class="callout">
  <div class="callout__icon"><span role="img" aria-label="Objetivos" >📖</span></div>
  <article class="callout__content">
    <p>Nesta postagem iremos explorar:</p>
    <ol>
      <li>Como criar uma conta na AWS;</li>
      <li>Boas práticas de segurança para adotar desde o início;</li>
      <li>Como criar um alarme de gastos, para evitar surpresas;</li>
      <li>E neste processo vamos interagir e manipular três serviços da AWS muito importantes;
      <li>Uma lista de recursos para iniciar sua exploração.</li>
    </ol>
  </article>
</section>

## 1. Criando sua conta na AWS

O que você vai precisar:

- Um email válido, para receber comunicações;
- Um número de celular para validar sua conta;
- Um cartão de crédito, que será cobrado e então estornado um pequeno valor.

Parece simples, não? Afinal é **só** criar uma conta. Obviamente, se você é uma pessoa desevolvedora, pricipalmente web, sabe que todo o fluxo de autenticação e autorização é bem mais complexo do que um formulário com usuário e senha em sua aparente simplicidade parecem evocar. E aqui já podemos tratar  de características bem importantes que vão fundamentar melhor seu conhecimeto sobre gestão de contas (sim, no plural) e identidades dentro da AWS. Na criação da conta, o email que está usado, criará um usuário **root** ou raíz. Nós não usaremos este usuário para iteragir no dia a dia com nossa conta: criar serviços, providenciar infra-estruturas, invocar lambdas. O usuário _root_ de uma conta possui muito poder sobre a conta e não é uma boa prática utilizá-la para interagir com sua conta.

No momento da criação da conta você deverá receber uma cobrança de 3 reais em seu cartão, que depois é extornada.

## 2. Boas práticas para tornar seu acesso mais seguro: _não pule esta parte!_

A primeira coisa é proteger a sua conta _root_ com o **MFA**, ou Multi-Factor Autenthication, também conhecido como "Two Steps" entre outros. No vídeo é mostrado passo a passo, inclusive um fundamental para que seu usuário seja capaz de acessar a área de orçamento sem ser o

E aqui vamos ter um detalhe essencial. Se não feito, voê não conseguirá acessar suas informações de cobrança ou _billing_ além de sua conta _root_.

|   Serviço         |                     |
|:--------:|----------------|
|   ![Arch_AWS-Identity-and-Access-Management_64](https://user-images.githubusercontent.com/509054/122422909-e83dac80-cf63-11eb-8530-d92cfa5fcf16.png)  |          O [AWS Identity and Access Management (IAM)](https://aws.amazon.com/pt/iam/) permite que você gerencie com segurança o acesso aos serviços e recursos da AWS. Usando o IAM, você pode criar e gerenciar usuários e grupos da AWS e usar permissões para conceder e negar acesso a recursos da AWS.           |

## 3. Criando um alarme de gastos

Com sua conta criada, a identidade _root_ protegida e a criação de uma conta para interagir com a AWS também protegida, agora é hora de sair testando — ligando EC2, criando bancos RDBS, invocando 2 milhões de Lambdas e por aí vai, certo? Não tão rápido. Ainda mais se está começando, o que eu aconselho a todos, até mesmo a organizações é: crie seu alarme de gastos com o valor que estiver mais confortável. Ninguém quer surpresas no final do mês, ainda mais com a situação do câmbio no Brasil atual (2021). A AWS oferece uma grande variedade de serviços em seu [Nível gratuito]([Nível gratuito da AWS](https://aws.amazon.com/pt/free/)) ou _free tier_: Desde 1.000.000 solicitações gratuitas por mês de Lambda e no mesmo serviço até  3,2 milhões de segundos de tempo de computação por mês, entre vários outros. Permitem explorar serviços e técnicas sem gasto ou o mínimo possível.

Para fazer isso vamos usar mais dois serviços da AWS:

|   Serviços         |                     |
|:--------:|----------------|
|   ![Arch_Amazon-CloudWatch_64](https://user-images.githubusercontent.com/509054/122423656-75810100-cf64-11eb-88c2-4703a5795437.png) |          O [Amazon CloudWatch](https://aws.amazon.com/pt/cloudwatch/) é um serviço de monitoramento e observação criado para engenheiros de DevOps, desenvolvedores, Site Reliability Engineers (SREs – Engenheiros de confiabilidade de sites) e gerentes de TI.            |
|   ![Arch_Amazon-Simple-Notification-Service_64](https://user-images.githubusercontent.com/509054/122423413-479bbc80-cf64-11eb-9d5e-2f24433e330d.png)   |          O [Amazon Simple Notification Service (Amazon SNS)](https://aws.amazon.com/pt/sns/) é um serviço de mensagens totalmente gerenciado para a comunicação de aplicação para aplicação (A2A) e de aplicação para pessoa (A2P).

Neste momento será um uso bem simples. Primeiro será necessário em orçamento (_Billing_) acessar suas preferências de faturamento onde você pode ativar o recebimento da fatura por email, receber alertas do uso da camada gratuita, para saber se está próximo do limite de algum serviço e receber alertas através do CloudWatch. A AWS oferece o [AWS Budgets](https://aws.amazon.com/pt/aws-cost-management/aws-budgets/). Por enquanto vamos nos concentrar em criar um alarme mais simples.

<section class="callout--warning">
  <article class="callout__content">
    <p>Você deverá alterar sua região para Norte da Virgínia ou `us-east-1` antes de continuar. Os serviços da AWS existem em regiões e para acessar orçamentos é necessário estar nesta região que é a original da AWS e onde a maioria dos serviços é primeiro lançados e que também era a região que por padrão eram criadas as contas. Ou pelo menos a região padrão apresentada pois pelo menu voocê pode acessar qualquer uma das regiões. A padrão exibida neste momento é `us-east-2`, Ohio.</p>
  </article>
</section>

Após isto, devemos acessar o **CloudWatch** e selecionar para criar alarmes. Se é sua primeira vez usando o serviço ele vai mostrar esta opção dentre outras, caso contrário sempte pode acessar em Alarmes > Todos os alarmes e então acionar "Criar alarme".

A métrica a ser selecionada deve ser "Faturamento" e então "carga total estimada". Deve-se selecionar a métrica, que será o valor, em dólares (USD). Hoje é possível pagar em reais a nossa conta da AWS mas eles ainda são calculados com base no preço base em dólar e então convertidos. Uma vez selecionado você poderá definir as condições e o valor sentir-se confortável. Eu geralmente coloco "Maior/Igual" e 5 USD.

E já o próximo passo nos pedirá para definir uma forma de acionar um alarme. Se sua conta for nova como a criada, deverá selecionar criar novo tópico em "Selecionado um tópico do SNS". Tópicos são os primitivos que recebem dados e então transmitem para os emails selecionados. Cada email vai receber um email autorizando ou não o recebimento e estará pronto para usar a AWS e caso chegue perto de ultrapassar algum limite gratuito ou os 5 USD, receberá um email com o aviso!

## 4. Vá além

Muitas vezes dizemos que somos "autodidatas". Cada vez mais percebo que isto apenas implica dizer que não conhecemos todas as pessoas que nos ajudaram ao longo do caminho. E aqui vou deixar como uma série de referências para cada um explorar suas áreas de interesse, sugerir caminhos ou se aveturar nesse vasto mundo que é a AWS:

- A AWS conta com [vasto material de treinamento, a maioria de graça](https://aws.amazon.com/pt/training/)!
- Uma ótima trilha para quem está começando é o [Treinamento para a Certificação Cloud Practitioner](https://aws.amazon.com/pt/certification/certified-cloud-practitioner) que é a de nível mais básico da AWS e já dá uma visão bem abrangente dos serviços e ecossistema. E o treinamento, também é grátis. Há valor em se preparar para a certificação mesmo que não vá ou queira tirá-la pois é um ótimo guia.
- E a [AWS tem workshops incríveis, com certeza vai encontrar algo que se interesse](https://workshops.aws/). Destaco alguns:
  - [Amazon ECS Workshop](https://ecsworkshop.com/)
  - [AWS Cloud Development Kit (AWS CDK) Workshop](https://cdkworkshop.com/)
  - [Building Event-Driven Architectures on AWS](https://event-driven-architecture.workshop.aws/2-event-bridge.html)
- E uma dica de livro, em inglês, é o [The Cloud Resume Challenge Book](https://cloudresumechallenge.dev/book/) do [Forrest Brazeal](https://forrestbrazeal.com/)

<section class="callout">
  <div class="callout__icon"><span role="img" aria-label="Futuras publicações">📗</span></div>
  <article class="callout__content">
    <p><b>Em breve:</b></p> 
    <ul>
      <li>Regiões, Availability Zones (AZs)</li>
      <li>Well-Architected Framework</li>
      <li>Introdução ao AWS Cloud Development Kit (CDK), a incrível ferramenta para Infraestrutura como Código da Amazon e mais!</li>
    </ul>
  </article>
</section>