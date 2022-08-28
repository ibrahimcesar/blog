---
title: O Navio de Teseu do Yarn 2
description: "Phil Karlton é creditado com frase de que só existem duas coisas difíceis em Ciência da Computação: invalidação de cache e escolher nomes das coisas. E escolher nomes também passa por muito do que entendemos por coisas e como elas se relacionam com o mundo. O recente lançamento do Yarn 2 traz à luz muitas dessas questões"
featured: false
pubDate: "2020-01-26T10:50:00.000Z"
image: ~/assets/images/retro.jpg
---

<p class="lead">Phil Karlton é creditado com frase de que só existem duas coisas difíceis em Ciência da Computação: invalidação de cache e escolher nomes das coisas. E escolher nomes também passa por muito do que entendemos por coisas e como elas se relacionam com o mundo. O recente lançamento do Yarn 2 traz à luz muitas dessas questões.</p>

O [recente lançamento da versão 2](https://dev.to/arcanis/introducing-yarn-2-4eh1) do [Yarn](https://yarnpkg.com/), trazendo muitas `breaking changes` e novas funcionalidade, não trouxe apenas uma linguagem de programação de 1972 para a atenção (Prolog, que pode ser usado para configurações), mas sem nenhuma intencionalidade, trouxe de volta um debate com mais de 2000 anos de história!

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Yarn 2 shouldn’t even be called Yarn. Change every piece of a ship and it’s a completely new ship, not an evolution. Want to shed previous baggage? New name. Want to make a completely new codebase with a different project philosophy? New name. Otherwise? Thrash the community.</p>&mdash; Sebastian McKenzie (@sebmck) <a href="https://twitter.com/sebmck/status/1221142224936804353?ref_src=twsrc%5Etfw">January 25, 2020</a></blockquote></script>

**EDIT:** Tweet deletado pelo autor (atualizado em 27 de janeiro, 2020)

O que é, basicamente, o `paradoxo do Navio de Teseu`.

> "Conforme relato de Plutarco:  
> O navio com que Teseu e os jovens de Atenas retornaram (de Creta) tinha trinta remos, e foi preservado pelos atenienses até o tempo de Demétrio de Falero, porque eles removiam as partes velhas que apodrecem com o tempo e colocavam partes novas, de forma que o navio se tornou motivo de discussão entre os filósofos a respeito do conjunto de caracteres próprios e exclusivos com os quais se podem diferenciar objetos inanimados uns dos outros.  
> O paradoxo foi discutido por outros antigos filósofos, como Heráclito, Sócrates, Platão antes dos escritos de Plutarco, e mais mais tarde por Thomas Hobbes, John Locke e Gottfried Leibniz. Este problema é "um modelo para os filósofos".

Basicamente, se você vai mudando aos poucos uma coisa, retirando uma peça e colocando outra no lugar, esta permanece a mesma coisa? Talvez um navio fosse algo que os filósofos conseguissem compreender melhor em seus tempos, já que esta era sem dúvida uma das tecnologias mais importantes de sua sociedade: os navios eram utilizados para subsistência, comércio tão vital para as ilhas gregas e também forças bélicas. O `Yarn 2` me parece uma boa oportunidade para pensarmos um pouco neste problema filosófico, afinal, (1) trata de uma tecnologia atual, e (2) demonstra o impacto real no dia-a-dia de problemas filosóficos, que muitas vezes, parecem tão apartados do dia a dia.

O `Yarn` foi criado pela Facebook para ser uma alternativa ao `NPM`[^1]. O [Stackshare](https://stackshare.io/stackups/npm-vs-yarn) é um site que agrega stacks. Obviamente não representa todo o Universo de desenvolvimento, mas considerando o impacto dos stacks listados em seu banco de dados, tanto de código mas também cultural, da influência que tais projetos tem, NPM é usado por +21000 stacks e o Yarn por um quinto disso. Considerando o tamanho da comunidade JavaScript, um quinto representa muita coisa. E considerando que muitos desses stacks representam pessoas mas projetos, o impacto é bem grande. Aliás um dos casos de uso defendidos para o Yarn se tratava justamente do uso de resolver dependências em grandes organizações. Além de proporcionar a administração de `monorepos` que por sua natureza, existem em ambientes com múltiplos desenvolvedores. Portanto, qualquer grande mudança certamente atrai muita atenção.

Houve uma [issue postada no Github](https://github.com/yarnpkg/berry/issues/766) defendendo o caso para se publicar o Yarn 2 com outro nome. Ou seja, defendendo a ideia de que o navio já não era mais de Teseu, era outra coisa. A thread inteira é bem interessante de se ler, com argumentos fortes para ambos os lados — e o mais interessante é, ainda é uma issue **aberta**. Se você possuir argumentos não cobertos ou deseja influenciar de alguma forma demonstrando apoio com as reações, esta é a sua chance de participar de um momento decisivo de um software que afeta milhões de pessoas e muitos projetos.

Tivemos na comunidade de desenvolvimento mais recentemente dois grandes exemplos deste debate, com impactos igualmente enormes e mesmo, destrutivos. Tivemos o caso do `Angular` que da primeira versão para a segunda, foi uma reescrita completa e muitos amigos desenvolvedores me falaram que um é muito diferente do outro. A primeira versão é chamada `AngularJS` e a segunda de `Angular 2` —  e isso sem entrar nas questões do `Angular 4` && `Angular 5`[^2]. A maior, entretanto, considero ser a do `Python2` e `Python3`. Eu mesmo, somente sou um usuário "menor" de Python, só o empregando como uma linguagem de script para resolver problemas com a biblioteca `pandas`. Mesmo assim, usando ferramentas da comunidade me via com problemas de compatibilidade -- ora era problema com o `pip` padrão do sistema, ora como estava o path do Python para o servidor em que irá rodar, fora exemplos que poderiam estar em qualquer uma das versões. E isso afeta muito a produtividade.

Eu acho o navio de Teseu um problema aberto. Pense por exemplo no próprio corpo humano. A cada ano aproximadamente 98% dos átomos de nossos corpos são substituídos[^3]. Tal como o navio de Teseu, tal como a reescrita do Angular. Tal como o Yarn. Deixamos de ser nós mesmos? "Ah mas a mente..." Vocês se consideram `const` mentais? Digo, nós conseguimos estabelecer uma história para nós, mas em cada um desses pontos, éramos a mesma pessoa que somos agora? E se não, quem somos?

Questões abertas, que a própria busca nos move e nos faz caminhar para compreender melhor nossas escolhas de como abordar o mundo. Para os softwares, só as comunidades poderão decidir o que é melhor para elas, e talvez no longo prazo essas escolhas possam ser sempre resgatadas e revistas. E assim continuamos moldando nossas ferramentas e sendo moldadas por elas no processo.

[^1]: Para conhecer mais um pouco da história do Yarn, de sua concepção e lançamento, recomendo a leitura desta postagem do **Facebook Engineering**: [Yarn: A new package manager for JavaScript](https://engineering.fb.com/web/yarn-a-new-package-manager-for-javascript/)

[^2]: [**What is the difference between AngularJS and Angular 2?**](https://www.quora.com/What-is-the-difference-between-AngularJS-and-Angular-2), [**AngularJS and Angular 2+: a Detailed Comparison**](https://www.sitepoint.com/angularjs-vs-angular/), [**AngularJS vs Angular 2 vs Angular 4: What's the Difference?**](https://www.guru99.com/angularjs-1-vs-2-vs-4-vs-5-difference.html)

[^3]: [**Where do those damn atoms go?**](https://stevegrand.wordpress.com/2009/01/12/where-do-those-damn-atoms-go/)