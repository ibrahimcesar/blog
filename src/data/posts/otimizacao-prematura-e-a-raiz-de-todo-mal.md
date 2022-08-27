---
title: A Otimização Prematura e a Raíz de Todo o Mal
description: Knut é responsável por um dos mais fortes adágios e frases em desenvolvimento. Do que ele falava?
featured: true
featuredImage: root.jpg
permalink: "/blog/otimizacao-prematura-e-a-raiz-de-todo-mal/"
date: "2020-01-27T10:50:00.000Z"
image: cover.jpg
featuredImageColor: "#1E2C54"
---

<p class="lead">Knut é responsável por um dos mais fortes adágios e frases em desenvolvimento. É um credo passado de desenvolvedor a desenvolvedor, de que a otimização prematura é a raíz de todo mal, aqui exploro sua origem e contexto.</p>

> # Otimização prematura é a raíz de todo o mal.
> <footer>Donald Knut</footer>

## O artigo

É uma frase de Knut, que quase faz percorrer um frio pela espinha, como se nós, paladinos do desenvolvimento tivessemos que estar alertas para evitar que o mal chegue ao mundo, evitando a todo custo este grande inimigo: a otmização prematura. Mas o que seria essa otimização prematura que Knut falava? E qual o criticismo que enfrenta?

Antes, um pouco de história. A citação vem do paper ["Structure Programming with `go to` Statements"](http://www.kohala.com/start/papers.others/knuth.dec74.html) de 1974. Donald E. Knut, autor de "The Art of Computer Programming", na introdução do artigo se lê:

> "A revolution is taking place in the way we write programs and teach programming, because we are beginning to understand the associated mental processes more deeply. It is impossible to read the recent book __Structured programming__ without having it change your life. The reasons for this revolution and its future prospects have been aptly described by E. W. Dijkstra in his 1972 Turing Award Lecture, "The Humble Programmer".
> As we experience this revolution, each of us naturally is developing strong feelings one way or the other, as we agree or disagree with the revolutionary leaders. I must admit to being a non-humble programmer, egostitical enough to beliece that my own opinions of the current trends are not a waste of the reader's time".

Dijkstra, que dá seu nome a um algoritmo e muito cultuado como um dos grandes pensadores inovadores da ciência da computação tinha escrito anos antes um artigo chamado ["Go To Statemant Considered Harmful"](https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf), e este artigo do Knut é sua resposta a Dijkstra. É importante descatar o espírito humorístico de Knut. Não é todo artigo que coloca como uma de suas epígrafes o slogan publicitário de remédios para constirpação:

>"Do you suffer from painful elimination?"
><footer>Advertisement, J. B. Williams Co.</footer>

E quando elabora a "linguagem do futuro", a colocando para o ano de 1984, a chama de `UTOPIA 84` ou `NEWSPEAK`, deixando bem claro que a escolha do ano já não era acidental mas uma referência à "1984" de George Orwell. Ele se pergunta se esta linguagem "do futuro" teria `go to` ou não. Passa então a levanntar prós e contras e é em uma dessas análises que chega à declaração que se faz presente na famosa frase:
 
> "There is no doubt that the grail of efficiency leads to abuse. Programmers waste enormous amounts of time thinking about, or worrying about, the speed of noncritical parts of their programs, and these attempts at efficiency actually have a strong negative impact when debugging and maintenance are considered. We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil."

Acho que há bastante coisa a abordar aqui. Primeiro, o "raíz de todo o mal" parece bem se enquadrar no estilo sarcástico e alusivo de Knut. E sua declaração é "... Nós devemos esquecer pequenas eficiências, digamos em 97% das vezes". Outro ponto bem forte aqui é que muito desta declaração é uma declaração antes de tudo sobre uma cultura, sobre, o que ele nos diz no parágrafo inicial de que "... estamos começando a entender os processos mentais associados mais profundamente". Esta declaração é antes de tudo um exame de que programadores entram em estados mentais de gastar energia mental pensando, ou se preocupando com a velocidade de partes não críticas de seus programas. Um dos exemplos que Knut traz é de um `loop`. A própria frase "partes não críticas de seus programas" já traz embutido também, não podemos esquecer, uma categorização. Afinal, o que é uma parte não crítica? [^1] (Knut abordará essa pergunta) — Além de como ele destaca, leva a problemas de manutenção e debug.

Mas, vamos dar um passo atrás. No parágrafo anterior, Knut diz:

> "The conventional wisdom shared by many of today's software engineers calls for ignoring efficiency in the small; but I believe this is simply an overreaction to the abuses they see being practiced by pennywise-and-pound-foolish programmers, who can't debug or maintain their "optimized" program. In established engineering disciplines a 12% improvement, easily obtained, is never considered marginal; and I believe the same viewpoint should prevail in software engineering."

Esta eu precisei buscar o significado: `Pennywise-and-pound-foolish` se refere a alguém que é extremamente cuidado com pequenas quantidades de dinheiro e nenhum pouco cuidadoso com grandes quantidades de dinheiro. O que ele quer dizer aqui é que o "...conhecimento convencional compartilhado por muitos dos engenheiros de software hoje em dia determina ignorar eficiências menores". Então ele conclui que isso só existe como uma "reação exagerada" aos abusos desses incautos desenvolvedores que não conseguem nem manter e nem debugar seus programas "otimizados". E vai além — 12% de melhoria, quando facilmente obtida, **nunca é considerada marginal**; e ele acreditava que esse ponto de vista deveria prevalecer também em engenharia de software.

E vai mais além ainda, já no parágrafo seguinte ao "raíz de todo mal":

> "Yet we should not pass up our opportunities in that critical 3%. A good programmer will not be lulled into complacency by such reasoning, he will be wise to look carefully at the critical code; but only after that code has been identified. It is often a mistake to make a priori judgments about what parts of a program are really critical, since the universal experience of programmers who have been using measurement tools has been that their intuitive guesses fail."

Desenvolvedores, aponta Knut não devem passar oportunidades nesses 3% — ela deverá analisar cuidadosamente o código crítico e apenas após identificar esse código, pois, é muitas vezes um erro, fazer julgamentos __a priori__ sobre qual partes de um programa são críticos. Nossas intuições muitas vezes __falham__. E vai além ao pensar nessas ferramentas:

>  "I've become convinced that all compilers written from now on should be designed to provide all programmers with feedback indicating what parts of their programs are costing the most; indeed, this feedback should be supplied automatically unless it has been specifically turned off."

Knut antevê compiladores ou ferramentas com feedback indicando quais partes de seus programas custam mais e esta deveria ser a norma, a não ser que fossem desligados. Ou seja, por uma série de padrões e decisões do que se define como crítico, nossas ferramentas de desenvolvimento deveriam nos guiar no que devemos otimizar. E até mesmo a ideia do que temos por otimização significam historicamente coisas diferentes. Não apenas o hardware evoluiu como a própria natureza dos programas, hoje lidamos com muito mais camadas de abstrações.

> "For some reason we all (especially me) had a mental block about optimization, namely that we always regarded it a behind-thescenes activity, to be done in the machine language, which the programmer isn't supposed to know. This veil was first lifted from my eyes in the Fall of 1973. when I ran across a remark by Hoare that, ideally, a language should be designed so that an optimizing compiler can describe its optimizations in the source language. Of course! Why hadn't I ever thought of it?"

Até mesmo a ideia do que é ou não um programa mudou. Lembrem-se que não existiam o que chamamos de "servidores" ou sistemas que rodam indefinidamente e precisam responder a um usuário ou a batches de inputs.

> "Most programs are probably only run once; and I suppose in such cases we needn't be too fussy about even the structure, much less the efficiency, as long as we are happy with the answer."

E é impressionante como Knut foi um visionário em seu artigo. Ele já antevia na evolução das lingaugens o uso de módulos e que identação poderia ajudar a expressar estrutura local na própria fonte das linguagens:

> "It seems clear that languages somewhat different from those in existence today would enhance the preparation of structured programs. We will perhaps eventually be writing only small modules which are identified by name as they are used to build larger ones, so that devices like indentation, rather than delimiters, might become feasible for expressing local structure in the source language."


## Performance first

O que me motivou a esse mergulho em Knut foi o artigo [Performance first](https://tonsky.me/blog/performance-first/) de [Nikita](https://twitter.com/nikitonsky) (criador da excelente Fira Code). No artigo ele ilustra como desenvolvedores seja durante o desenvolvimento de projetos ou mesmo lançamento de bibliotecas open sources usam o adágio de Knut em uma cultura de que performance é apenas uma feature que pode ser adicionada mais tarde.

O autor fiz que quando se diz "Nós estamos construindo programas corretos primeiro, depois perfomáticos. Nós iremos otimizar uma vez que as funcionalidades estejam corretas", na verdade significa que a performance continuará a mesma __a não ser que__ estas pessoas encontrem uma __low-hanging fruit__ que irá lhes permitir fazer o programa mais rápido sem mudar muito do que já construiram. Ele argumenta não ser lógico abandonar a performance de produtos desta foorma. Se você quer construir programas rápidos, atenção à performance deve estar desde o início. As primeiras versões devem estar mais velozes que a versão final. Nikita conclui seu artigo subvertendo o adágio: "'Otimização prematura é a raíz de todo mal' é a raiz de todo mal".

## Pensamentos finais

Acredito que Nikita está certo no ponto de que usar o adágio, extraído de seu contexto, o tornou em uma espécie de dogma. Algumas ideias se cristalizam nas comunidades e se tornam como que aceitas como "verdade absoluta" sem exames críticos ou mesmo, nesse caso, simplesmente mais atentos. E isso por que se trata de uma "ciência exata"  — mas Knut deixa bem claro que a revolução em escrever programas estava em outro lugar, na própria mente e subjetividade dos programadores e com isso, no que eles focam sua atenção e tempo.

Knut abriu seu artigo com "...estamos começando a entender os processos mentais associados mais profundamente...", mas a verdade é que ainda estamos apenas na superfície disso e com novas linguagens, abstrações, modelos mentais, paradigmas e interesses diversos, fica ainda mais complexo e examinar nossos processos mentais e o contexto de adágios e frases como essa, nos força a contemplar em profundida nossas escolhas. E a entender os trade offs e nos apropriarmos das consequências e resultados.

E acredito que frente à luz de nossas ferramentas (Lighthouse, Google Dev Tools) e linguagens, muito do que consideramos no dia a dia de "raízes de todo o mal" não caíriam nessa categoria. Sendo pragmático, eu mesmo já utilizei, mesmo em justificativas mentais a mim mesmo, este adágio para determinar minhas ações sem um exame aprofundado. Também já utilizei como forma de barganhar entrada de funcionalidades ou não em projetos citando-a. O trabalho no dia a dia é cheio de momentos em que estamos exaustos ou precisamos tomar decisões rapidamente com impactos que nos acompanharão, por isso momentos como esse de parada, análise e exploração são muito importantes, pois determinarão a ajudar como nos comportaremos em futuras situações em que as decisões de otimização se apresentarem à nós.

[^1]: Eu argumentaria que não há resposta simples ou absoluta. Cada instituição e pessoa pode ter sua própria definição, mas que por questões de lógica interna, eu diria que é necessário ter uma metodologia, um "framework" para essas decisões simplesmente __não acontecerem__. Para isso, proponho o [**Data Driven Development**](https://ibrahimcesar.dev/ddd/)