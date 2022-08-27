---
title: "Estrutura e Interpretação de Programas de Computador"
description: Um clássico que te leva ao amâgo de programar
featured: true
date: "2021-07-20T10:50:00.000Z"
featuredImage: sicp.jpg
image: scip.png
permalink: "/blog/estrutura-e-interpretacao-de-programas-de-computador/"
featuredImageColor: "#1E2C54"
---

<p class="lead"><b>Structure and Interpretation
of Computer Programs</b>, de Harold Abelson e Gerald Jay Sussman
com Julie Sussman é um livro magnífico que explora, através do LISP a construção de um programa de computador desde o mais básico. Honestamente eu tenho até certa nostalgia da leitura, é um livro que te faz apaixonar pois te mostra a "magia" da coisa. E a metáfora da magia não é acidental tanto na sua capa, quanto em seu primeiro capítulo a analogia e identificação de programação e o mágico são evocados. Resolvi traduzir os primeiros parágrafos do primeiro capítulo:</p>

> Estamos prestes a estudar a ideia de um processo computacional. Processos computacionais são seres abstratos que habitam computadores. Enquanto evoluem, processos manipulam outras coisas abstratas chamadas dados. A evolução de um processo é guiada por um padrão de regras chamado de programa. Em efeito, nós cojuramos os espíritos do computador com nossos feitiços.

> Um processo computacional é na verdade muito parecido com a ideia de um espírito de um feiticeiro. Não pode ser visto ou tocado. Não é composto por nenhuma matéria. Entretanto, é bem real. Pode realizar trabalho intelectual. Pode responder perguntas. Pode afetar o mundo ao retirar dinheiro de um banco ou ao controlar um braço robótico em uma fábrica. Os programas que usamos para conjurar processos são como os feitiços do feiticeiro. São expressões simbólicas cuidadosamente compostas em arcanas e esotéricas liguagens de programação que descrevem as tarefas que queremos que nossos processos realizem.

> Um processo computacional, em um computador funcionando corretamente, executa os programas com precisão e acurácia. Assim, como o aprendiz de feiticeiro, programadores iniciantes devem aprender a entender e antecipar as consequencias de suas conjurações. Mesmo erros pequenos (geralmente chamados _bugs_ ou _glitches_) em programas podem ter consequências complexas e não antecipadas.

> Felizmente, apreder a programar é cosideravelmente menos perigoso do que feitiçaria, pois os espíritos que lidamos estão convenientemente contidos de uma forma segura. Programação no mundo real, entretanto, requer cuidado, conhecimento, e sabedoria. Um pequeno _bug_ na criação de um programa para controle por computador, pode por exemplo, levar à catastrófica colapso de um avião ou uma represa ou a auto-destruição de um robô industrial.

> Engenheiros de software mestres possuem a habilidade de organizar programas de forma que eles possam estar seguramente certos de que os processos resultantes irão realizar as tarefas intencionadas. Visualizam o comportamento de seus sistemas com antecedência. Sabem como estruturar programas para qye problemas não antecipados não levem a consequêcias catastróficas, e quando os problemas surgirem, eles possam _debugar_ seus programas. Sistemas computacionais bem planejados, como automóveis ou reatores nuclares bem planejados, são criados de forma modular, assim as partes podem ser construídas, substituídas, e _debugadas_ separadamente.
> <footer>De <a href="https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-9.html#%_chap_1" target="_blank">Building Abstractions with Procedures</a>.</footer>


> Uma linguagem poderosa de programação é mais do que apenas um meio para instruir o computador a realizar tarefas. A linguagem também serve como um framework no qual nós podemos organizar nossas ideias sobre processos. Assim, quando nós descrevemos uma linguagem, devemos ter atenção particular para as formas que a linguagem provê para combinar ideias simples para formar ideias mais complexas. Toda linguagem poderosa possui três mecanismos para atingir isto:

> - **expressões primitivas**, as quais representam as entidades mais simples que a linguagem está interessada,
> - **meios de combinação**, pelas quais elementos compostos são construídos de outros mais simples, e
> - **meios de abstração**, pelos quais elementos compostos podem ser nomeados e manipulados como unidades.

> Em programação, nós lidamos com dois tipos de elementos: procedimentos e dados. (Mais tarde iremos descobrir que não são exatamente tão distintos). Informalmente, dados são "coisas" que queremos manipular e procedimentos são descrições das regras para manipular os dados. Assim, toda linguagem de programação poderosa deve ser capaz de descrever dados primitivos e procedimentos primitivos e deve ter métodos de combinar e abstrair procedimentos e dados.
> <footer>De <a href="https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-10.html" target="_blank" title="1.1  The Elements of Programming">1.1  The Elements of Programming</a>.</footer>

UPDATE 2021-07-22
## 📖 If you can read in English, then is a MUST READ!
- O [livro completo está disponível gratuitamente](https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-1.html), em inglês.
- E existe essa [incrível versão em JavaScript](https://sourceacademy.org/sicpjs/index)! E por JavaScript, quero dizer usando a linguagem no lugar do original em LISP e por ser interativa.

Em poucos parágrafos tanto é transmitido. Não acham? Definitivamente um dos meus livros prediletos de todos os tempos.