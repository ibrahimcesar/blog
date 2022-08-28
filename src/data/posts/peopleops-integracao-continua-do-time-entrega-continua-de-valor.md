---
title: PeopleOps
description: Integração Contínua do time e Entrega Contínua de valor
featured: true
pubDate: "2021-10-05T10:50:00.000Z"
image: ~/assets/images/peopleops.png
---

<p class="lead">Vou apresentar um pouco de como foi nosso processo de contratação de pessoas desenvolvedoras e de como acreditamos, conseguimos diminuir muito da fricção, falar com as pessoas certas e o mais importante, saber combinar para formar não apenas um grupo de pessoas — distribuídas por todo o Brasil e até fora dele — mas em um verdadeiro time. Este artigo foi submetido como talk para o <a href="http://www.agilebrazil.com/2021/">Agile Brazil 2021</a> com o título <b>PeopleOps: Integração contínua do time, Entrega contínua de valor</b>, mas não foi aceita.</p>

**People Ops**. Essa é a piada que usei para definir como foi nosso experimento. Foi um momento bem decisivo em nossa jornada em que no espaço de uma semana perdemos duas pessoas em nosso time de tecnologia. O que, em um time de apenas cinco pessoas, foi um golpe bem duro. Cada pessoa teve seus motivos e cada uma foi perseguir as melhores oportunidades. Precisávamos contratar mais pessoas e simplesmente estávamos já esperando os longos e cansativos processos que fizemos nas vezes anteriores. Demanda tempo, atenção e muita preparação. Pessoalmente eu também estava em crise com meu papel de líder, se é que eu o estava exercendo, afinal liderança não vem com um título e nem hierarquia, acredito ser uma propriedade emergente. Em crise acabei enviando um formulário para todas as pessoas as quais eu liderei e foi meu bote salva-vidas ler o impacto e como me viam mesmo depois de não estarmos trabalhando juntos.

Comecei a ler e até procrastinar o início do processo. Abrir chamada, fazer uma seleção, que acaba sendo bem superficial pois só se olha o que foi escrito e então conversas e conversas. Mudança de contexto, todos sabemos, é o inimigo da produtividade para as pessoas desenvolvedoras e esse processo de entrevistas, costurados ao longo do dia, exaurem e deixam você cansado, os últimos entrevistados são vistos com olhos cansados, impressões dos anteriores e comparações. E do lado de lá também não é fácil:

- A pessoa não tem um emprego no momento ou está procurando uma oportunidade melhor. Em ambos os casos, isso impacta a vida dessas pessoas;
- Não receber feedback após as entrevistas parece ser uma reclamação bem constante. Eu já passei por isso, e respondo a todas pessoas, individualmente Lembro de quando eu recusei um profissional e lhe disse que o motivo era que eu o achava um profissional de nível pleno para cima e não de entrada, que era o que tínhamos e não seria justo oferecer esse salário a ele. Ele me elogiou tanto. Fiquei surpreso, pois honestidade e transparência, às vezes provocam fricções;
- A pessoa entender o stack, coisas que a empresa desenvolve;
- E é claro, sejamos fracos, o salário. Vários e vários momentos vejo as pessoas lamentando em vagas o salário oferecido.

## Pessoas desenvolvedoras contratando pessoas desenvolvedoras

Como não temos um RH focado em contratar pessoas para nosso time, consultamos empresas que fazem esse trabalho, plataformas e sempre alguma coisa que não nos deixava completamente satisfeitos. Ou era o preço, nunca iríamos consumir um ano os créditos mínimos em outras era uma cópia do modelo tradicional em forma de webapp entre outras razões. Conversando, falando de como seria bom contratar alguém para o time através de uma Pull Request (PR), resolvi levar isso ao extremo e propus um experimento: vamos contratar alguém através do GitHub, que já era nosso ponto focal de trabalho. E assim, criamos um [repositório do time](https://github.com/Nexo-Tec/time).

<figure class="extend">
    <img src="/assets/github-time.png" width="752" height="475" alt="Página do GitHub apresentando as tecnologias de nosso time" style="border: 1px solid #BBB" />
    <figcaption>Página de nosso repositório do time</figcaption>
</figure>

Também não temos equipe para submeter várias pessoas a longas e algumas vezes nonsenses entrevistas técnicas ou entrevistas com vários níveis. Nosso método certamente se deve ao nosso contexto, equipes enxutas permitem mais experimentação.

E na [página da chamada](https://github.com/Nexo-Tec/time/tree/main/chamadas/2021), de maio deste ano, incluímos todas as informações que julgamos importantes e que gostaríamos de abordar. E o método basicamente seria submeter uma PR com algum projeto. Coloquei uma lista de alguns que faziam muito sentido para nós mas deixei aberto pois as pessoas já podem ter algum projeto open source ou outra coisa em nosso [**Choose your own adventure**](https://github.com/Nexo-Tec/time/tree/main/chamadas/2021#choose-your-own-adventure).

De centenas de submissões caíram para dezenas, mas na língua do marketing, todos **leads qualificados**. E as respostas das pessoas que passaram pelo processo foi incrível. Enviamos um formulário pedindo o feedback e todos apreciaram. Pudemos conversar nas entrevistas de forma mais focada, falar das implementações, escolhas. Definitivamente acredito que encontramos uma forma mais significativa para as pessoas envolvidas no processo de contratar pessoas para o time.

Algo digno de nota, nós estávamos abertos a pessoas dos mais diversos níveis e buscar um salário compatível, mas sempre tivemos um piso de entrada, independente de onde a pessoa mora no Brasil. Mesmo colocando o valor, alguém obviamente reclamou nas redes sociais e como internamente esse projeto era uma aposta e um experimento, com certeza gerou fricção e dúvida a essa transparência que nós almejavamos. Mesmo tentando acertar ainda assim as alguém acha um motivo para criticar nas redes sociais. Não dá para agradar a todo mundo.

## Onboarding

Queríamos explorar como fazer a melhor imersão de membros para nosso time. Como acelerar a entrada de cada pessoa e fazê-las se sentirem com ag&encia. Por _design_ nós assumimos que em um primeiro momento eles iriam trabalhar em projetos de grande valor, mas seriam livres de prazos e outras limitações. Faríamos “imersões”: uma ou às vezes duas horas, explorando um determinado assunto: AWS, React, NextJS entre outros. E um ponto essencial foi criar um guia ou playbook estruturado para estas pessoas se sentirem com uma estrutura, afinal, é bem fácil se sentir perdido ou à deriva trabalhando remotamente e uma das alternativas,de simplesmente ir passando tarefas, sem discussões ou agência, não era algo que eu estava interessado a realizar.

<figure class="extend">
    <img src="/assets/playbook.png" width="752" height="475" alt="Página do GitHub apresentando ao time" style="border: 1px solid #BBB" />
    <figcaption>Criamos um repositório interno para agregar conhecimento, métodos, descrições e artigos relativos ao trabalho em nosso <b>Guia das Pessoas Desenvolvedoras</b>.</figcaption>
</figure>

Uma pequena visão de nosso guia que se tornou uma espécie de "pequeno manual" pois inclui muito dos assuntos abordados aqui, de forma mais aprofundada para todos entenderem a estratégia adotada, seus fundamentos e as táticas que estamos implementando, até para que fosse possível que eles se ambientarem na mesma e pudessem influenciar ou sugerir mudanças de curso para elevar nossa **eficiência** (ninguém gosta de ineficiência certo? Queremos flow, reuniões dinâmicas, entregar valor), e isso é o que define ágil.

> ágil
> á·gil
> adj m+f
> 1 Que se movimenta com rapidez ou agilidade: “Firmo […] era um mulato pachola, delgado de corpo e ágil como um cabrito […]” (AA1).
> 2 FIG Que tem raciocínio rápido; desembaraçado, ligeiro, perspicaz.
> **3 Que atua ou trabalha com eficiência; diligente.**
> INFORMAÇÕES COMPLEMENTARES
> SUP ABS SINT: agílimo e agilíssimo.
> ANTÔN: moroso, sonolento, vagaroso.
> ETIMOLOGIA
> lat agĭlis.
> <footer>Ágil, <em>Dicionário Michaelis</em></footer>

## E onde entra o ágil?

Basicamente em todas as partes do processo. Ainda que “Indivíduos e interações mais que processos e ferramentas” seja o primeiro valor expresso no manifesto ágil, a verdade é que dificilmente esse valor tenha uma priorização. É sempre deadlines e processos algumas vezes, de caros treinamentos e certificados e também muito do “teatro do Ágil®”, em que algumas pessoas e times se envolvem em seus "waterfalls" de duas semanas.

Muitas vezes ouvimos algumas pessoas dizendo coisas como "não precisa empregar tudo", só pega do SCRUM® o que fizer sentido. E acho, pessoalmente, ok. Mas o manual do SCRUM® é claramente contra esse tipo de abordagem, ou melhor, de que as empresas e grupos adotem a metodologia SCRUM® parcialmente, declarando: **“Scrum’s roles, events, artifacts and rules are immutable and although implementating only parts of Scrum is possible, the result is not Scrum. Scrum exists only in its entirely”**. É fácil esquecer que as diversas metodologias são artefatos culturais, sócio-tecnológicos, mas também, produtos comerciais.

Eu até mesmo já escrevi anteriormente sobre [**Safer, Happier: Antipatterns and Patterns for Business Agility**](https://ibrahimcesar.cloud/blog/sooner-safer-happier-antipatterns-and-patterns-for-business-by-jonathan-smart/), uma leitura que ressoou comigo em ser ágil antes de implementar estas ou aquela metodologia ágil. O primeiro capítulo já abre assim:

> “Do you want to do or are you currently doing an Agile, Lean, or DevOps Transformation? If so, my best advice is:
> **Don’t.**”
> <footer><a href="https://amzn.to/3e4MI2c" target="_blank">Chapter 1: Focus on Outcomes</a></footer>

Em que direto ao ponto o autor estabelece que seu conselho a qualquer um atualmente realizando uma Transformação Ágil, Lean ou de DevOps, simplesmente não o faça.

<figure class="extend">
    <img src="/assets/agile-spectrum.png" width="752" height="475" alt="Um espectro ronda o mundo da tecnologia: o espectro do ágil" style="border: 1px solid #BBB" />
    <figcaption>Um espectro ronda o mundo da tecnologia: o espectro do ágil</figcaption>
</figure>

A imagem acima do “espectro do ágil” para mim foi uma forma simples e rápida de não somente visualizar melhor o contexto mas entender muito de minhas tentativas ao longo de vários anos tendo experiências frustradas com algumas metodologias ágeis. Na minha modesta opinião, e experiência, já que eu presumo, obviamente **você** já faz da melhor maneira e todos de sua empresa vivem felizes entregando software na ensolarada _Agileland_, é de que, ao menos o **discurso público** — e aqui falo de postagens, conversas, talks, se foca quase que totalmente se concentram na última parte do espectro: _práticas_, que são uma manifestação do _continuum_ através de um número ilimitado de práticas. E como podemos ver, não aderir integralmente ao SCRUM®, implica que você não está fazendo SCRUM®, mas sua própria prática — o que não implica algo ruim.

Mas, este é o grande _motif_ de "Safer, Sooner, Happier": ser ágil implica antes de tudo do _mindset_ e comprometimento não apenas do time de tecnologia e da empresa. E, honestamente, muitas vezes irão ouvir que estão comprometidos e com o _mindset_ — mas espere até o próximo final de _sprint_ e o resultado de sua retrospectiva. Como vai ser a reação?

Guiados pelos valores e princípios do [Manifesto para Desenvolvimento Ágil de Software](https://agilemanifesto.org/iso/ptbr/manifesto.html) — E o primeiro valor? **Indivíduos e interações** _mais que processos e ferramentas_.

![Agile is made of people](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vs3veu4b2o3v2fdkb5s4.gif)

Parafraseando o final de "Soylent Green" (1973), que curiosamente o título no Brasil é "No Mundo de 2020": _Ágil é feito de pessoas_.

## Living la vida ágil

<figure class="extend">
    <img src="/assets/conway-paper.png" width="752" height="475" alt="Abril de 1968" style="border: 1px solid #BBB" />
    <figcaption>Conway, M. E. 1968. How do committees invent? Datamation 14(4), 28-31.</figcaption>
</figure>

A Lei de Conway publicada em abril de 1968 se tornou muito influente, não apenas na comunidade de DevOps mas em várias áreas. Os sistemas dos quais o paper trata não se restringem a sistemas de computadores mas um exemplo é como uma rede de transporte público é definida. Esse design do sistema, é produzido por pessoas, e esse grupo específico de pessoas trabalhando no design são parte de uma organização. O paper define "design de sistemas" como `o tipo de atividade intelectual que cria um todo através das diversas pode ser chamado de design de sistemas`.

O próprio ato de organizar o time: quem faz ou não parte do processo desde o início ou possui a capacidade de influenciar, já define explícita ou implicitamente que certas decisões do design daquele sistema já foram feitas. E sempre existirão alternativas para o design do sistema que não serão efetivamente trilhadas pois nem mesmo existem os caminhos de comunicação necessários naquela organização para existir. Ao demonstrar os vieses, Conway trouxe interessantes conclusões que parecem precisar ser descobertas de novo e de novo, quando o são! Ao final do paper a formulação do que veio a ser definida como a lei de Conway:

> The basic formulation of this article is that **organizations which design systems (in the broad sense used here) are constrained to produce designs which are copies of the communication structures of these organizations.**

Ou seja, **organizações que fazem design de sistemas (em seu sentido amplo), são limitadas a produzir designs que irão ser cópias das estruturas de comunicação destas organizações** — Não importa o quanto de _squads_ sua empresa tiver, o quão horizontal em seu silo você seja, o software produzido vai obedecer às estruturas internas de comunicação. E isso tem muitas implicações. As funções de *Product Owner*, *Product Managers*, entre outros sempre foram tentativas de "domesticar" esse fluxo, mas às vezes estas mesmas figuras se tornam gargalos ou ainda represam o fluxo, criando nossas pequenas cachoeiras de duas semanas.

<figure class="extend">
    <img src="/assets/types-work.png" width="752" height="475" alt="Tipos de trabalho" style="border: 1px solid #BBB" />
    <figcaption>Tipos de trabalho</figcaption>
</figure>

E mesmo a natureza do nosso trabalho. E para cada tipo existem abordagens e é uma dança fluida, às vezes mudamos de contexto durante o dia ao redor desse eixo e sempre no meio de tudo, impera o caso, a confusão. Há trabalhos **claros**, para os quais geralmente realizamos no modo `detectar-categorizar-responder` e que muitas vezes temos as chamadas "boas práticas" ou formas já bem definidas de como atuar. Mas nem sempre é assim, algumas vezes somos pegos de srpresa, direto para trabalhos **caóticos** em que devemos `agir-detectar-responder` e em que são exigidas práticas novas e deve ser o trabalho que mais devemos, na medida do possível evitar, mas sempre há os famosos desconhecidos _desconhecidos_. Por mim, temos mais dois tipos de trabalho: **complexo** em que as práticas são sempre emergentes e agimos no modo `exploração-detecção-resposta` que o autor de "Sooner, Safer, Happier" define como o "sweet spot" para o ágil. E por fim, o trabalho , que é o trabalho repetitivo e com padrões em que `detectamos-analizamos-respondemos` e é o "sweet spot" do _Lean_. Notem que não há definição de trabalho **fácil**. Para mim, esta definição é sempre usada no sentido do _trabalho de outras pessoas_ 🙃.

## Combine sua arquitetura organizacional com sua arquitetura de software

> As relações humano-tecnológicas são uma dança sutil nas quais os objetos tecnológicos **empurram e puxam com vários degraus de insistência** enquanto os humanos navegam com **motivação, criatividade e habilidade em diferentes níveis.**
> **Tecnologias são criadas, implementadas e utilizadas através de uma rede de escolhas.**
> <footer>Jenny L. Davis, <em>How Artifacts Afford</em></footer>

Matthew Skelton e Manuel Pais em "**Team Topologies**: _Organizing Business and Technology Teams for Fast Flow_" fazem, no meu entendimento, mais pelos objetivos iniciais do movimento ágil do que várias das metodologias do mercado. Uma frase é o reframe de uma discussão que parece não morrer e parece ser um campo de convertidos que tentam a todo custo demonstrar "tecnicamente" como uma abordagem é superior à outra: **"Esqueça monolitos vs. microsserviços. Esforço cognitivo é o que importa"**.

> Nós moldamos nossas ferramentas e nossas ferramentas nos moldam
> <footer>John M. Culkin, <em>A schoolman’s guide to Marshall McLuhan</em></footer>

Por isso, devemos sempre pensar nos impactos do esforço cognitivo, que é sempre contextual, único e emergente do time presente. Isso é **PeopleOps**. Cuidar do esforço cognitivo de seu time para que cada um se sinta à vontade e com agência para ter a sua melhor performance percebida (o que também é muitas vezes subjetiva, por isso o time precisa sempre trocar feedbacks e ter 1:1s entre todos os membros, sempre descobrimos alguma coisa nova e aprendemos mais das outras pessoas e de cada um de nós). Se sair uma pessoa ou entrar uma nova, esse contexto se altera, e acredito que é isso que escapa muitas vezes da avaliação: **pessoas** antes de processos. Parece que o mercado tenta fazer _exatamente_ o oposto. Temos três tipos de esforço cognitivo:

### Esforço intrínseco

Do original, _Intrinsic cognitive load_. Se relaciona com aspectos fundamentais do espaço do problema.Exemplos: Como se define uma classe em Java? O que é o serviço X? Parecem ser algum simples mas imagine a quantidade de coisas que no momento em que uma pessoa desenvolvedora web hoje ao sentar em sua cadeira deve ter em mente: sua linguagem (com suas características), as ferramentas de edição e de versionamento, o domínio de negócio e muitas vezes específicos de transpiladores, builder, containers e outras diversas áreas. Ele é intrínseco no sentido em que não é negociável. Faz parte da atividade.  Deve ser **minimizado** — através de treinamento, escolhas acertadas de tecnologia para as habilidades do time, contratação, arquitetura, programação em par, _mob programming_. Automatizações, ferramentas externas e internas de consulta (wikis, um Guia de Pessoa Desenvolvedora, por exemplo!).

### Esforço externo

Do original, _Extraneous cognitive load_. Se relaciona com aspectos do ambiente ou tarefas repetitivas ou com incertezas. Exemplos: Como se faz mesmo o deploy? Como eu inicializo a aplicação? Não entendi o motivo de tal importação ou tal variável na base de código e outras características particulares ou externas.  Deve ser **eliminado** – através de uma cultura de DevOps, arquitetura, automatização de boas práticas de segurança, eliminar comunicações desnecessárias, processos , runbooks, playbooks, ferramentas externas, **uso de serviços gerenciados** . Pessoalmente, é o maior inimigo do trabalho e a batalha contra este não é simples e nem mesmo rápida pois inclui débito técnico, manutenção do código, monitoração, se a arquitetura é muito acoplada, dentre outros. Gaste aqui suas maiores energias pois será o campo mais complexo de longo prazo a ser trabalhado. Em minha organização estou bem distante de resolvê-lo.

### Esforço pertinente

Do original, _Germane cognitive load_. Se relaciona com aspectos das tarefas que precisam de atenção especial, para aprendizado e alta performance. Exemplos: Como integrar DynamoDB streams com esta função Lambda, de forma a termos DQL (Dead Queue Letters) e reprocessar eventos? São esforços de otimização ou exploração para ir além do **básico**. É aqui que ocorre a produtividade, escrita de código que adiciona valor ao negócio, concentração em tarefas desnecessárias. As pesquisas mostram que o fator determinante são cultura de segurança psicológica, recuperação do trabalho, evitando _burnout_ e que anos de experiência não parecem ter correlação (pessoas de qualquer quantidade de experiência podem ter grande performance — tive uma oportunidade de ter uma pessoa estagiária que em pouco tempo entregou mais valor que pessoas plenas em anos).

## Outro

No espírito _open source_ aqui minha submissão ao CFP (Call For Papers), não selecionada. Não devemos somente celebrar e mostrar acertos e o lado bom das aventuras e desventuras mas também compartilhar rejeições, para desmistificar o processo e normalizar não ter sua talk escolhida:

> **Pré-requisitos**
> Está buscando uma visão clara de agilidade, lean, DevOps e como isso se relaciona com o trabalho do dia a dia

> **Resumo**
> Ainda que “Indivíduos e interações mais que processos e ferramentas” seja o primeiro valor expresso no manifesto ágil, nas implantações ou no dia a dia almejando aderir ao máximo possível de processos não é difícil se concentrar nas ferramentas, no “teatro do Ágil®” e perder o foco. Aqui exploro os desafios de se manter ágil em um ambiente de constante mudança sem se prender a nenhuma metodologia em particular, apenas otimizando com base nas pessoas do time.

> **Descrição completa**
> Ainda que “Indivíduos e interações mais que processos e ferramentas” seja o primeiro valor expresso no manifesto ágil, nas implantações ou no dia a dia almejando aderir ao máximo possível de processos não é difícil se concentrar nas ferramentas, no “teatro do Ágil®” e perder o foco. Nesta apresentação, um estudo de caso baseado em cinco anos de trabalho em uma equipe de tecnologia em um jornal digital brasileiro e como a combinação de metodologias, mindsets e focos em entregar valor tem ajudado o time até o momento, com um foco especial nas pessoas. PeopleOps é apenas uma brincadeira com a ideia de que se o movimento DevOps buscava unir Operações e Desenvolvimento, precisamos pensar nas pessoas antes de qualquer ferramenta.

> **Mecânica/Processo**
> Outline:
> 1. Intro
> - Quem sou eu
> - O meu trabalho nos últimos 6 anos e colocamos duas publicações novas no ar durante o inicio da pandemia
>
> 1 Qual o problema?
>Precisamos ser muito velozes, mas as organizações nem sempre estão otimizadas para isso (sabendo ou não).
> Introdução do livro Sooner Safer Happier
> - Diagrama de tipos de trabalho
> - Agil. DevOps e Lean lado a lado e como eles se relacionam com os tipos de trabalho
> - Citação do livro sobre seguir bandeiras antes de avaliar os resultados esperados
> - E isso afeta a vida das pessoas
>
> 2 Visão estratégica
> - Contexto do The State of DevOps 2019 e o caminho que resolvemos seguir e os motivos para isso
> - As implicações
>
> 3 Táticas
> - Depois do O que, o Como, utilizando o livro Team Topologies como ponto de partida
> - Tipos de esforço cognitivo que as pessoas passam e como tratar cada um deles
> - Relatos
>
> 4 Pessoas
> - Tudo se trata de pessoas
> - É emergente, não há receitas, cada pessoa tem uma historia
> - E os times são fluidos, pessoas saem e entram e os tipos de trabalho alteram suas naturezas
> - Relatos
>
> E uma citação do criador do Python sobre ser “mestre” em algo para concluir

> **Público alvo**
> Pessoas desenvolvedoras de software, analistas e gestores em times envolvidos na criação de produtos digitais

> **Benefícios**
> - Táticas de como aplicar no dia a dia conceitos – healthchecks, etc
> - O papel no esforço cognitivo no trabalho das pessoas e exemplos práticos de como isso se relaciona com a estratégia
> - As sínteses, através de minha perspectiva e prática destas três referências: “Sooner Safer Happier”, “The State of DevOps 2019” e “Team Topologies”, livros que impactaram muito meu trabalho

> **Experiência com o assunto**
> Sou Diretor de Tecnologia no Nexo, e venho liderando o time desde o início e antes disso tive muitas passagens em liderança, desde equipes de QA até como co-fundador técnico de uma startup. Mas posso dizer sem qualquer constrangimento que errei muito – e continuo errando! Por isso busco múltiplas referencias e faço meus experimentos, é claro, sempre deixando bem claro para os membros do meu time.

> **Link para vídeo**
> [Link](https://youtu.be/kCKk3fvX1GM)[^1]

> **Links adicionais**
> Não fiz nenhuma apresentação no contexto ágil de esforço cognitivo mas toquei no assunto no [TDC na trilha Cloud](https://ibrahimcesar.cloud/talks/2021-03-25-serverless-pronto/). Esta apresentação engloba esses conceitos pois se trata de minha abordagem em agilidade, a [versão “release candidate” desta apresentação](https://slides-ibrahimcesar.s3.amazonaws.com/PeopleOps-rc.pdf ). Pretendo publicar uma postagem também após o evento, caso seja selecionado ou não[^2], dos temas abordados aqui mas vi uma boa oportunidade de interagir com a comunidade ágil de uma forma mais qualificada

Este foi meu feedback, autonomizando os nomes pois não pedi permissão:

> Olá Ibrahim, o assunto "Pessoas e Time" é importante para o evento. O draft da apresentação está com 57 slides o que parece que não está adequado para o tempo da palestra de 50 min.

> Olá, parabéns pela clareza da estrutura da apresentação. Isto facilita muito o nosso trabalho como pessoas revisoras. Apenas tenha cuidado com o tempo, 50 minutos é um tempo longo, então explore bem a estrutura de storytelling que usará para manter o público focado durante toda a apresentação.

> Olá, parabéns pela iniciativa de submissão desse tema. Fiquei bem confuso se a trilha de interesse está correta ou não. Pelo que entendi você vai contar o case no jornal que você trabalha e como Devops e o olhar as pessoas tem ajudado você na transformação. é isso?? se for nessa linha, a trilha correta é RELATO DE EXPERIENCIA e como você está mudando a cultura dos seus times. Gostei da mecânica descrita por você, mas fiquei me questionando se 50 min não é muito tempo. No mais parabéns pelas transformações alcançadas e por usar um material tão bom como o livro team topologies e o state of devops. Só reforçando, a submissão está OK, mas dado esses pequenos pontos não consigo colocar ela como ACEITAÇÃO FORTE e sim ACEITAÇÃO FRACA.

Fui avaliado também pelos mesmos autores em algus requisitos:

- Experiência com métodos ágeis: **Alta** / **Alta** / **Alta**
- Experiência com o assunto: **Alta** / **Alta** / **Alta**
- A trilha está adequada? **Sim** / **Sim** / **Não**
- O nível está adequado? **Sim** / **Sim** / **Sim**
- O tipo da sessão está adequado? **Sim** / **Sim** / **Sim**
- A duração está adequada? **Não** / **Sim** / **Não**
- O limite de participantes está adequado? **Sim** / **Sim** / **Sim**
- A trilha está adequada? **Sim** / **Não** / **Sim**
- O nível está adequado? **Sim** / **Sim** / **Sim**
- O tipo da sessão está adequado? **Sim** / **Sim** / **Sim**
- A duração está adequada? **Não** / **Sim** / **Não**
- O limite de participantes está adequado? **Sim** / **Sim** / **Sim**

[^1]: Eles pediam um link com você explicando sua talk.
[^2]: E eis aqui você lendo 😃.