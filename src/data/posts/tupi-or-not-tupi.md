---
title: Tupi or not Tupi?
description: This is the question
pubDate: "2021-03-11T10:50:00.000Z"
image: ~/assets/images/tupi.jpg
featured: true
socialImage: "/features/brazil.jpg"
---


> **Qual a primeira linguagem para um programador?** É uma pergunta muito comum em vários fóruns, e as respostas variam bastante. Muda de acordo com as liguagens em alta, e até mesmo dependendo dos objetivos da pessoa. Mas unanimidade, não acho que tenha sido alcançada, até por ser verdadeiramente contextual. Python, Java, JavaScript, Ruby... Mas o assunto que quero abordar aqui é outro. Há uma **linguagem** ainda mais importante para nós que não somos falantes nativos da mesma: **inglês**.

## Get Started

_If_, _Then_, _Else_, _Type_, _Function_, _Number_, _String_ – a lista vai longe. A própria sintaxe das linguagens é construída ao redor do inglês. Sua gramática e _keywords_ são sempre em inglês. Não que não seja possível programar sem saber inglês. Eu, que sempre estudei em escola pública e quase todo ano revisitávamos o verbo _To Be_, bem o sei. Demorou muito para dominar o nível que eu tenho hoje, que me permite ler com certa facilidade principalmente documentação e não-ficção e ir aos trancos e barrancos, tropeçando na conversação. Sempre tive essa noção e queria compartilhar algumas impressões minhas e por participar do programa [AWS Community Builders](https://aws.amazon.com/developer/community/community-builders/). Inglês acaba sendo a primeira linguagem ou uma das que necessariamente vamos ter que dominar o básico.

### README.md

A maioria de nossas ferramentas, com excessão de grandes frameworks e bibliotecas ou produtos de grandes empresas está sempre em inglês. Livros importantes às vezes levam anos para chegar aqui e muitas vezes... já desatualizados aqui e ali, quando a tradução não fica a cargo de alguém totalmente sem contato com a comunidade e traduz alguns itens literalmente. Mesmo na indústria oficialmente alguns conceitos simplesmente causam dissonância cognitiva. Exemplo:

- Na comunidade _Serverless_ é bem discutido a ideia de que o termo se trata de FaaS (_Functions as a Service_) mas mais do que isso, serviços gerenciados, em que você não precisa se preocupar com o servidor, já que os críticos sempre apontam que "existem servidores" de toda forma. E mesmo nessas abstrações selecionamos características como _runtimes_, poder de CPU, etc. Eu não sou nativo do inglês, não sei culturalmente como eles se sentem em relação ao sufixo _less_ em palavras. Mas para mim, o nosso direto correspondente direto, _aplicações sem servidor_ nega apologeticamente a inexistência de servidores.

- Em grandes APIs e sistemas dificilmente há algum dia em nossa língua. Uma das melhores dicas que rodam por aí em algum momento é sempre "leia a documentação".

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">You can empower the next engineer with ✨DOCUMENTATION✨</p>&mdash; AV (@driannavaldivia) <a href="https://twitter.com/driannavaldivia/status/1369762319572611078?ref_src=twsrc%5Etfw">March 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Documentation in my opinion the most underrated skill in all of IT and cyber. It&#39;s the best way for folks in new environments to learn tech/processes.<a href="https://t.co/aknPbDAdBh">https://t.co/aknPbDAdBh</a> <a href="https://t.co/51NGyNzfWv">https://t.co/51NGyNzfWv</a></p>&mdash; John Breth (JB) | CyberInsight® on YouTube (@JBizzle703) <a href="https://twitter.com/JBizzle703/status/1369492379431034886?ref_src=twsrc%5Etfw">March 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  
- E é claro, algumas vezes, ler as documentações não se trata de algo fácil mesmo para nativos. Algumas pessoas pulam partes que consideram "de conhecimento geral" tornando não-amigável para pessoas com experiências diferentes ou simplesmente não conseguem comunicar (um exemplo de "referência" em documentações costume sempre ser a do [Stripe](https://stripe.com/docs)). Outra coisa são as documentações auto-geradas com base na estrutura das classes, funções, programas e tipos e estas levam um tempo maior para compreender pois vão exigir ainda mais um conhecimento de contexto da linguagem ou mesmo dos serviços ([exemplo do CDK](https://docs.aws.amazon.com/cdk/api/latest/typescript/api/aws-lambda/alias.html#aws_lambda_Alias)).

### _Error at line 23_

E um assunto que eu considero essencial no dia a dia e talvez pareça banal: _ler as stack traces_. É impressionante como muitas pessoas, perfeitamente versadas no inglês muitas vezes não leem as _stack traces_. Certamente algumas vezes elas vão se empilhando uma em cima da outra, ou te levam a becos sem saídas, **NULL POINTERS** e ou descrições arcanas. Mas muitas vezes conseguimos seguir as linhas e nos ajudar ao mesmo a seguir nos _breakpoints_ (muito comuns e gerando mapas em TypeScript, muito úteis!). Veja que nesse parágrafo eu usei duas palavras em inglês. _Stack traces_ é algumas vezes chamado de "rastreamento" e a tradução literal "rastro de pilha". Mas mesmo rastreamento eu nunca vi algum usar na natureza selvagem, aliás na maioria das vezes é apenas "estourou um erro" ou algo do tipo. _Breakpoint_ seria "ponto de interrupção", para seguir no código cada passo de seu fluxo. Novamente, nunca ouvi alguém dizer ponto de interrupção. Quanto mais meu conhecimento de inglês foi melhorando mais eu pude extrair mais informações das _stack traces_, a conectar com a documentação, métodos da API e ganhar velocidade. Mas é como dizem, não há algoritmo de compressão para experiência, só vai se ganhando com o tempo, mas certamente os nativos ou quem tem fez cursos, deve ganhar uma familiaridade mais rápida.

### Manifesto antropofágico

Esta aqui eu não sei o quanto é popular, mas eu sempre _pushei_, _mergiei_ ou até um que eu tenho vergonha de dizer, mas _deploiei_. Acabamos também transformando as palavras em equivalentes mais parecidos de nossa língua ou misturando os termos em inglês, que sempre soa bem estranho aos ouvidos das pessoas de outros times por onde trabalhei. E muitas vezes não é como a reclamação que se ouve muito por exemplo de chamar "reunião" por "call" ou coisas assim, mas quem diz "Faz um retorno da aplicação no código anterior às mudanças deste último deploy" – ou sei lá o equivalente – a "Faz um _rollback_"?

### Community

A versão brasileira do **InfoQ Brasil** fez sua [última publicação em fevereiro deste ano, 2021](https://www.infoq.com/br/news/2021/02/ultimo-conteudo-do-infoq-brasil/):

> Nesses 12 anos muita coisa também mudou. E uma das grandes mudanças que aconteceram foi a de que mais pessoas, nesse mercado de desenvolvimento de software, aprenderam o inglês. Especialmente esse público de maior senioridade com o qual o InfoQ Brasil sempre tentou se conectar. Com o domínio da leitura do inglês, percebemos que não fazia mais sentido para essas pessoas esperarem semanas, meses, para consumir um conteúdo em português traduzido por nós, sendo que o conteúdo original estava ao alcance de um clique para ser consumido.

> Para além disso, percebemos também que o domínio do inglês fez com que mais pessoas passassem a escrever em inglês, deixando ainda mais difícil conseguir conteúdos originais para o InfoQ Brasil, o que poderia ser um belo atrativo para o mercado brasileiro. Acredite se quiser, em 2020 tivemos mais pessoas brasileiras escrevendo conteúdos originais para o InfoQ em inglês, do que pessoas brasileiras escrevendo conteúdos originais para o InfoQ Brasil em português.

Quando você se torna mais e mais envolvidos com certas comunidades, mesmo com pessoas de outros países não-falantes de inglês é assim que conseguimos interagir e nossos feeds se transformam em um Frankenstein linguístico de _pt-br / en_. E participar de comunidades faz bem. Compartilhar é importante e cada vez mais com o trabalho remoto, as barreiras dessas divisões políticas dos países mas que são talvez uma das criações imaginárias mais poderosas vão perdendo seus contornos quando em uma sala posso estar falando com um dos responsáveis por um código que está na Califórnia com outros colegas na Espanha, na Tunísia e Japão.

Foi um processo – e diabos, ainda continua sendo – interagir com outros em inglês. Às vezes sua mente está mais rápida do que sua boca, ou você perde ou nem sabe expressar alguma coisa em inglês ou você pensa em uma imagem ou expressão que só faz sentido cultural para nós.

E sim, olhando agora nos olhos da besta, eu acho que existe, assim como apontado pela publicação da InfoQ, que entre o público de maior senioridade, conteúdo em inglês sempre vai ser percebido com maior embasamento e profundidade. Fonte: _Minha cabeça_ e honestamente, _meus próprios vieses_ – eu tenho, vocês tem, precisamos discutir isso, para avançar e melhorar coletivamente.

## GOTO

Eu especialmente não acho que um brasileiro deva adotar uma abordagem 100% – bem ao menos se o foco dele é ajudar a desenvolver a comunidade local e trabalhar em nosso contexto. Há muitos DAs e pessoas trabalhando para multinacionais que possuem posições em que o inglês se torna a língua principal para eles. Incluí a legenda "pt-br / en" no [meu Twitter](https://twitter.com/ibrahimcesar) e neste blog pretendo manter meu foco em minha língua natural, mas como disse, muitas vezes precisamos fazer parte dessa grande Conversação e mesmo no espírito de contribuir com uma comunidade maior. E certamente há um incentivo **muito grande** e até vantajoso em produzir conteúdo ou colaborar em inglês que é participar do próprio desenvolvimento de nossas ferramentas, os que nos retira dessa posição quase sempre passiva, de consumidores de tecnologia para uma ativa de criadores, que devemos ter uma diversidade maior de pessoas de pessoas colaborando. Mas o inglês ainda é uma constante nesse processo.

No momento, uso o [dev.to como plataforma para minhas postagens exclusivas em inglês](https://dev.to/ibrahimcesar). Mas não acho que exista resposta fácil para essa questão. Certamente a audiência em inglês é em ordem de magnitude maior do que em português e, sendo bem honesto, vejo muito conteúdo em português "duplicado" – para não dizer apenas "forked" e traduzido, talvez sem anuência dos criadores originais.

Acho que há um potencial enorme em nosso país e principalmente para as novas gerações, será imprescindível material de qualidade para essas pessoas se sentirem acolhidas e sem as barreiras de já ter que dominar o inglês de cara, ainda mais sabendo de como é a distribuição econômica e social. E para aqueles que dizem _o que você faz entre meia noite e as seis_, bem, eu recomendaria dormir para ter uma saúde tanto física quanto mental melhor.

> Não há algoritmo de compressão para experiência.

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/3DxDIAsnSx5eg" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

Nas palavras imortais de [Ron Swanson](https://parksandrecreation.fandom.com/wiki/Ron_Swanson), do seriado [_Parks and Recreation_](https://www.imdb.com/title/tt1266020): "Nunca faça duas coisas meia-bunda. Faça uma coisa, a bunda toda" – Ta aí uma expressão muito usada em inglês _half-assed_ que por aqui seria algo de qualquer jeito e uma das imagens seria o _feito nas coxas_ mas eu não conseguiria manter a imagem das palavras do Ron 😅.

A minha escolha para a questão se resume ao "caminho do meio": *tentar fazer o melhor em ambas abordagens*, tentando sempre, é claro tentar saber no que focar a energia em um determinado momento para não ficar só _half-assing_, já que nunca podemos fazer tudo o que queremos. Talvez seja um caminho mais lento, exija mais disciplina, mas é como eu vejo a questão agora. Um caminho que acredito será sempre um desafio.