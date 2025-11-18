---
title: Explorando trade-offs da web3
description: Alguns pontos sobre essa nova onda de tecnologias que vejo como decisivos para sua adoção e efeitos na sociedade
featured: true
pubDate: "2021-12-21T10:50:00.000Z"
image: ~/assets/images/web3.jpg
socialImage: "/features/web3.png"
category: "Technology & Society"
tags: ["Web3", "Cryptocurrency", "Blockchain", "DAO", "Technology", "Analysis"]
---

<p class="lead">Web3, NFTs, criptomoedas, Bitcoin, Ethereum, blockchains, DAOs — ou são uma nova categoria de <em>Vaporware</em> gerando uma nova bolha como a ponto com no início do século ou são a melhor coisa desde o Big Bang, e cada convertido parece ter descoberto a água, ou algo assim. Parece ser um campo de discursos <b>extremamente</b> polarizados. Eu acho esse terreno mais politicamente carregado do que o próprio cenário de dicotomias extremas nas escolhas presidenciais que tivemos no país. Resolvi escrever esta postagem menos como uma defesa de qualquer lado, mas no antigo espírito dos blogs, de coletar e por ordem meus pensamentos.</p>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Has anyone seen web3? I can’t find it.</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1473165434518224896?ref_src=twsrc%5Etfw">December 21, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## De onde eu parto

<figure class="extend">
    <img src="/assets/hypecycle.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
    <figcaption>Nenhum mapa é o território. Esses gráficos podem e <em>não são representações</em> exatadas da realidade, mas funcionam como um bom de partida para ancorar nosso entendimento.</figcaption>
</figure>

Como podem ver, os analistas da Gartner colocam NFTs e Identidades Descentralizadas no **Pico das expectativas infladas**. A ideia é que _todas as tecnologias_ passam por esse ciclo. Então esta fase de expectativas infladas é esperada, mas significa que muito alguns anos terão um abismo da desilusão e esse abismo muitas vezes não provoca a recuperação de algumas empresas: seja por não entregar valor aos consumidores finais no longo tempo, _timing_, entre outras dezenas ou centenas formas de falhar. A história das tecnologias é de mais falhas do que sucessos. E precisamos aprender com eles e isso alimenta a inovação.

Por isso, sempre que está havendo alguma discussão e alguém invoca a imagem abaixo, eu simplesmente perco a razão. É usar um _data point_ de uma tecnologia que está solidificada e usar como um exemplo de que criticismo não "significa nada" ou "em alguns anos estarão errados". Na verdade, deveriam tomar qualquer criticismo como uma preocupação de um usuário atual da web que em algum momento para seus evangelistas vai estar usando e fazendo transações na web3, certo? 

<figure class="extend">
    <img src="/assets/cherry-picking.png" width="752" height="475" alt="Cherry Picking" style="border: 1px solid #BBB" />
    <figcaption>Eu juro que estou cansado com esse tipo de falácia de argumentação. Mostrar que x foi desacreditado em um momento histórico não é automaticamente um <em>"free-jail card"</em> que dá imunidade ao seu argumento. É apenas <em>cherry-picking</em> de argumentos. Palm-tops, Blackberrys, SOAP, WAP. Poderia citar várias. E <em>também</em> seria <em>cherry-picking</em>, de meu lado. Simplesmente isso não é um argumento válido. Aliás, nem se trata de um argumento <em>per se</em>, só um estratagema para evitar debater com fatos concretos.</figcaption>
</figure>

## Descentralização... onde?

<figure class="extend">
    <img src="/assets/evo.jpeg" width="752" height="475" alt="" style="border: 1px solid #BBB" />
    <figcaption>Nenhum mapa é o território.</figcaption>
</figure>

> [...] defines _centralization_ as the ability of a single person, company, or government -- or a small group of them -- to observe, control, or extract rent from the protocol's operation or use.
> <footer><a href="https://mnot.github.io/avoiding-internet-centralization/draft-nottingham-avoiding-internet-centralization.html" alt="Avoiding Internet Centralization">Avoiding Internet Centralization</a></footer>

É uma simplificação brutal e eu diria, falaciosa, de que a web "1.0" era _read-only_. Eu vou fazer o meu caso:

- Primeiro, não tem argumentação melhor do que o documento [Avoiding Internet Centralization](https://mnot.github.io/avoiding-internet-centralization/draft-nottingham-avoiding-internet-centralization.html), um Internet-Draft, que pretede se tornar uma RFC para discussão da descentralização. De forma geral na Internet. O subtítulo [Blockchains are not Magical](https://mnot.github.io/avoiding-internet-centralization/draft-nottingham-avoiding-internet-centralization.html#section-4.3) resume bem, mas vejam os pontos levantados.
- Segundo, centralizações em nodos, ainda que pontuais, fazem parte dos efeitos de rede. Algumas blockchains, wallets e mesmo marketplace parecem estar buscando o mesmo tipo de destaque. Quando o Uber e AirBnB entre outros chegaram com a ideia de "economia compartilhada", a promessa era de que todos teriam condições iguais, anos mais tardes, estas empresas controlam os mercados exatamente apenas substituindo as estruturas anteriores.
- Por fim, a questão de não ser _write_ se devia mais a barreiras materiais: acesso a servidores, distribuição. Do que tecnologia em si. Você consegue hoje publicar uma página muito rapidamente. A confusão que é feita que pensam na cultura do _write_ _dentro_ de plataformas de larga escala. Você pode criar seu blog. Ter um servidor Mastodonte. Tudo depende de barreiras materiais, e entretanto, nada o ecossistema web3 parece resolver esse problema, mas pelo contrário, tornar _tudo uma transação_. Quer comentar no meu equivalente a Twitter? Gas fees. Gas fees. Gas fees. Tornam cada GET, POST em uma microtransação.

E agora, falando sobre nomes, Web 2.0 como conceito nasceu não como uma definição exata mas uma _buzzword_ como defendida por Tim Berners-Lee, criador da Web, declarando "nobody even knows what it means"[^1]. Web 2.0 inclusive é uma marca registrada da O'Reilly[^2], a mesma empresa de conteúdo que publica os excelentes livros com animais em suas capas sobre uma grande variedade de tópicos em software e tecnologia.

Categorizações e classificações são sempre complexas. Pegue os movimentos literários e artísticos, por exemplo. Muitas vezes a obra de uma artista não se encaixa totalmente em uma das classificações e começamos a ter aqueles "pós-" e outras coisas. Características de um movimento são mais tarde descobertas no trabalho de alguém décadas antes. Mas a classificação de uma Web 2.0 só faz sentido em uma classificação comercial, de alguns tipos de modelos de negócio que começaram a emergir e novos tipos de experiências providos. Os verbos HTTP da web, continuaram o mesmo. Toda a ideia da web foi (e é) a distribuição de conteúdo e a ligação entre estes documentos, em um protocolo implementado por servidores e navegadores. Geocities, que [possui uma rica história](https://thehistoryoftheweb.com/an-ode-to-geocities/), e muitos reclamavam com nostalgia e mesmo [agressividade de como os anos iniciais da web eram melhores](https://thewebisfucked.com/):

> I have something to tell you, dear reader. The web is fucked. It’s a sad state of affairs that we’re in - gone are the days of Web 1.0 where the humble personal blog and the likes of GeoCities reigned supreme.
> <footer><a href="https://thewebisfucked.com/" alt="The Web Is Fucked">The Web Is Fucked</a></footer>

Nessa "Web 1" _read only_, tínhamos justamente esse lugar de expressão desenfreada e livre.

<figure class="extend">
    <img src="/assets/geocities-jerry-the-cat.jpeg" width="752" height="475" alt="Site do Jerry, the Cat no Geocities" style="border: 1px solid #BBB" />
    <figcaption>Exemplo de um site da era <em>read only</em> da web.</figcaption>
</figure>

Eu argumentaria também que a ideia do seu código, rodar em um _smart contract_ imutável, por si só, é em si uma centralização, um _strong coupling_. Smart contracts foram abusados por falhas em programação, custando fortunas. Os criadores de um game para consertar um bug, dada a imutabilidade, tiveram que literalmente lançar um novo. Aplicações e sistemas precisam evoluir com o tempo.

## Uma visão arquitetural

Ok. Eu quero fazer uma aplicação web3. Fui atrás de vários materiais e a comunidade está efervescente. [Nader Dabit](https://www.youtube.com/user/boyindasouth), anteriormente da AWS, fez uma mudança total para o tema e vi alguns de seus vídeos e fui atrás de realizar experimentos. Como focado em arquitetura de soluções, quis compreender melhor todo o ecossistema e garantir os cinco pilares. Um artigo que encontrei [The Architecture of a Web 3.0 application](https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application) faz o caso de que "The architecture of Web 3.0 applications (or "DApps") are completely different from Web 2.0 applications."

A pessoa que escreveu então mostra como é uma aplicação Web 2.0 hoje: "All of this code is hosted on centralized servers and sent to users through an internet browser. This is a good high-level summary of how most Web 2.0 applications work today.":

<figure class="extend">
    <img src="/assets/architecture-now.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
    <figcaption>Nosso pão com manteiga de uma arquitetura 3-tiers: apresentação, servidor e persistência de dados.</figcaption>
</figure>

Para um cenário bem mais complexo em que para evitar colocar seu código em um lugar apenas, ele é peer-distributed. Já não me sito confortável com isso. Quantos peers vão compartilhar meus arquivos? Já tentou baixar um torrent antigo e não havia peers? Eu precisarei guardar arquivos de outros? Sem qualquer conhecimento? Entendo que ficam em blobs, mas e se a simples ideia de ter um arquivo que possa ser de um site de pornografia infantil me faz pensar em como a distribuição se dá e todos os desafios. Eu não passei muito tempo além de uma pesquisa superficial de IPFS ou Swarm, mas pensando em _load-balancing_, UX, latência, privacidade (os dados dos seus usuários da Europa poderão estar em qualquer lugar do mundo, o que provoca problemas nos  tratamentos e direitos dos cidadãos), Disaster Recovery e outras questões, eu simplesmente não vejo viável em substituição a nossas arquiteturas no curto ou médio prazo.

E não posso deixar de ver que muitas soluções na arquitetura parecem até mesmo proprietárias como o [The Graph](https://thegraph.com/en/). Eu nem vou entrar na questão de que o usuário precisará além de seu navegador de configurar uma _wallet_ e mais camadas que afetarão sua experiência do usuário. Temos problemas e fricções em nossos fluxos atuais. A experiência do usuário final ainda vai ter que melhorar muito.

<figure class="extend">
    <img src="/assets/architecture-web3.png" width="752" height="475" alt="" style="border: 1px solid #BBB" />
    <figcaption>E esta é uma arquitura final proposta de uma aplicação <em>web3</em>. Já ouviu falar do termo "explosão de commplexidade"? Se não, esta imagem para mim ilustra o conceito com muita acurácia.</figcaption>
</figure>

## El Salvador e seu experimento com Bitcoin

<figure class="extend">
    <img src="/assets/nayib-bukele-bitcoin-city.jpeg" width="752" height="475" alt="" style="border: 1px solid #BBB" />
    <figcaption>Nayib Bukele, <em>bro-president</em> de El Salvador</figcaption>
</figure>

A adoção do Bitcoin como moeda corrente em El Salvador foi um movimento inovador e cheio de riscos. Vamos encontrar muitas e muitas análises de como isso significaria um colapso financeiro para o país, ou o início da queda de hegemonia do dólar. Entretanto, [fontes primárias de El Savador](https://www.elsalvador.com/noticias/negocios/el-salvador-bitcoin-dolar-bukele-ciudad/902708/2021/) mostram que apenas 5% da população apoia o uso de Bitcoin e o restante deseja dólares. Foi implementado através de um meio de uma wallet chamada [Chivo](https://chivowallet.com/), que deu um bônus de $ 30 USD a todos que se inscreverem. O app inaugurou com alguns problemas, o que para projetos desse tipo e magnitude nem sempre a mentalidade do MVP é plenamente compreendida e parece sempre faltar algo crítico, ainda considerando a média de letramento digital das pessoas de forma geral. E após esse bônus, a [maioria das pessoas nem pretende mais uso a Chivo](https://www.laprensagrafica.com/elsalvador/Uso-de-bitcoin-cumple-2-meses-en-El-Salvador-entre-polemicas-y-ganancias-20211105-0038.html). Nayib Bukele, o presidente do país entretanto tem [a solução para o problema de uso: mais Bitcoin](https://foreignpolicy.com/2021/12/06/bitcoin-city-el-salvador-nayib-bukele/). Ele pretende criar a Bitcoin City em formato circular, feita para minerar Bitcoin ao redor de um _vulcão_, utilizando a energia geotérmica como fonte de energia dos servidores [^3].

O que parece uma boa ideia dada toda a questão do uso de energia para quebrar os desafios criptográficos. Vejo muitas pessoas ou argumentando que a "Proof of Stake" vai eliminar isso. Porém ainda não foi empregada com sucesso ou escala. Ou o argumento "se eles podem nós podemos" de que Bitcoin sozinha por exemplo, consome a mesma quantidade de energia elétrica que a Argentina, argumentam que todas as atividades humanas consomem. E é verdade. Mas a comparação chama atenção para o fato de que se trata de energia elétrica _gasta_ apenas com um propósito: quebrar os desafios de criptografia com ciclos computacionais. Não para iluminar casas, ter um banho quente, carregar nossos celulares  ou manter hospitais. O desafio do "Proof of Work" é também um fim em si mesmo. Não é como se estivessem tentando resolver como dobrar proteínas ou algo assim. A questão ambiental ainda mais nesse nosso momento histórico é algo que precisará ser encarada de frente, serão necessárias várias mudanças para deixar de ser energeticamente custoso.

Também vale a pena destacar que o plano de Bitcoin City está avaliado em 15 bilhões e, nas próprias palavras de Bukele, "terá até mesmo um prefeito". O que parece estranho com todo o discurso de descentralização e autonomia, já que mantém as estruturas normais de centralização do poder político. Até mesmo porque Bukele não está inovando para mudar o curso do país. Pelo contrário, ele parece adotar em várias ocasiões medidas autoritárias, contra o espírito do que poderíamos chamar de descentralizado. Em 2020 ele invadiu uma sessão, na equivalente El Salvadorenha da Câmara com o uso das formas armadas e literalmente tomou o lugar do presidente da Casa para forçar passar uma lei quando não tinha maioria [^4]. Este ano passou uma lei com a ajuda da maioria atingida de seus apoiadores uma lei que permitiu exonerar juízes com mais de 60 anos de idade ou 30 anos de carreira. O expurgo resultou em um novo corpo de juízes que decidiram pela possibilidade de reeleição, o que abre a possibilidade de Bukele de concorrer novamente em 2024, o que era proibido pela Constituição do país (em jargão de bitcoin ele fez um ataque de 51%, eliminou os nodos que não queria e tomou controle da gestão de consenso para conseguir extender por mais alguns anos seu próprio mandato) [^5].

## Exclusão do Sul Global, barreiras de entrada, gas fee

Como disse antes, _write_ na web, e na sociedade sempre se tratou de barreiras materiais. E este problema não vejo resolvido, amplificado na verdade. "Keep in mind that, with Ethereum, the user pays every time they add new data to the blockchain. That’s because adding a state to the decentralized state machine increases the costs for nodes that are maintaining that state machine." [^6]

Web 3 é [Pay to Play](https://en.wikipedia.org/wiki/Pay_to_play). Ouço muito de como as criptomoedas vão ajudar a população desbancarizada no mundo ou em países autoritários. E eu apenas me pergunto: "como exatamente?". Se para pagar o gas fee de alguns serviços, o  preço é baseado em moedas de alta-volatilidade. Já ouvi também falar de vários projetos que não custam nada para explorar (inclusive para testar em sidechains), mas acontece que esses ambientes são como sandboxes, e é necessário capital para entrar em qualquer rede mainstream. Há diversas iniciativas e projetos que oferecem _grants_ e _investimentos_, mas acaba sendo mais um "gatekeeper" em nossa promessa de descentralização. E isso automaticamente é uma barreira de entrada e já exclui devido a paridade de poder compra do Sul Global com os desenvolvedores dos países mais ricos.

<figure class="extend">
    <img src="/assets/paytoplay.jpeg" width="752" height="475" alt="Homem com café, sentando em uma mesa com um cartaz onde se lê: 'web3 is pay to play. Change my Mind' — web 3 é pay to play. Mude minha opinião." style="border: 1px solid #BBB" />
    <figcaption>Pay to Play, como nos games. Fui comprar, ou tentar, pois desisti, um domínio web3, com a terminação <code>.eth</code> para meu uso. Quanto sairia, no dia em que cotei? 0.001 ETH + "at most" 0.011 ETH gas fee = "at most" 0.013 ETH, totalizando $47.45 USD, mais ou menos ~$270,31 BRL. Fora a volatividade, seria o domínio mais caro para manter (anualmente) e que nem mesmo é resolvido por DNS. 22% do salário mínimo mensal projetado para o ano de 2022. Um domínio <code>.com.br</code> custa, no Registro.br $ 40,00 BRL, por volta de 7 vezes menor. Sem volatização em conta.</figcaption>
</figure>

## Tulipas 2.0

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">You don’t own “web3.”<br><br>The VCs and their LPs do. It will never escape their incentives. It’s ultimately a centralized entity with a different label. <br><br>Know what you’re getting into…</p>&mdash; jack⚡️ (@jack) <a href="https://twitter.com/jack/status/1473139010197508098?ref_src=twsrc%5Etfw">December 21, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Para mim, até o momento NFTs me parecem uma nova versão da bolha de Tulipas, investimentos em _assets_ que a única esperança é de que alguém no futuro vai pagar mais pelo que você comprou hoje.

<div class="yt-frame"><iframe width="560" height="315" src="https://www.youtube.com/embed/AKX3LVT9nrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

A maioria das iniciativas não são de artistas. Mas a maioria das NFTs não vejo como "obras" e mais _commodities_. A obra de arte na era de sua reprodutibilidade e multiplicidade técnica. São artes generativas que com um script conseguimos gerar 10.000+ permutações em poucos minutos misturando elementos, mas que no final são bem parecidos. Sem qualquer _alma_.

Dois vídeos, um sobre o lado monetário e outro, o lado de quem trabalha e estudou com arte:

<div class="yt-frame"><iframe width="560" height="315" src="https://www.youtube.com/embed/11eTOur4lPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

<div class="yt-frame""><iframe width="560" height="315" src="https://www.youtube.com/embed/VtxQL55Y8cM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## Minha posição

Sou cético. O "computador mundial"  da Ethereum tem hoje aproximadamente 1/5.000 do poder computacional de um Raspberry Pi 4 [^7]. Que por sua vez com uma capacidade em ordens de magnitude maior, consome entre 3.8 W a 4.0 W em modo de repouso. Com 1 core sendo utilizado, consome 4.5 W. Com 2 cores consome 5.0 W. E com 3 cores consome entre 5.4 W e 5.5 W. Uma única transação na rede gasta 209.13 kW.

Mas tecnologias ganham novas aplicações e às vezes a sociedade acolhe alguns caminhos ao invés de outros. Há uma variedade de projetos interessantes na área mas como podem ver eu fui bem enviesado em expor minhas críticas. Mas é claro, uma proposta como todas essas e seu potencial transformador, se resolvido alguns pontos chaves, não podem simplesmente serem descartadas. Devemos manter o espírito questionador e explorar os trade-offs. Eu, pessoalmente, me livraria dessa ideia de "Web 3". Mas eu também usaria "EcmaScript" ao invés de "JavaScript". Não se pode ganhar todas.

Eu não acredito que possamos simplesmente ser "contra" uma tecnologia. Mas é parte integral de sermos cidadãos e tecnologistas, sermos críticos e explorar os trade-offs e efeitos da tecnologia na sociedade, economia e cultura.

### Referências

[^1]: [Tim Berners-Lee on Web 2.0: “nobody even knows what it means”](https://arstechnica.com/information-technology/2006/09/7650/) para a Ars Technica.
[^2]: [Web 2.0 Service Mark Controversy (Tim responding this time)](http://radar.oreilly.com/archives/2006/05/web-20-service-mark-controvers.html) Tim O'Reilly a respeito do copyright do termo.
[^3]: Enquanto escrevia esse plano que parece de vilão do James Bond, só gostaria de reafirmar: _Isto não é uma piada_.
[^4]: [Presidente de El Salvador invade o Congresso com militares e alega “direito divino](https://brasil.elpais.com/internacional/2020-02-10/presidente-de-el-salvador-invade-o-congresso-com-militares-amparado-por-direito-divino.html): “Se fosse ditador ou alguém que não respeita a democracia, teria tomado todo o controle", afirmou Nayib Bukelem, que deixou a Assembleia após uma oração. A oposição denuncia um “autogolpe”
[^5]: [Câmara Constitucional de Bukele aprova reeleição presidencial em El Salvador](https://brasil.elpais.com/internacional/2021-09-04/camara-constitucional-de-bukele-aprova-reeleicao-presidencial-em-el-salvador.html): Por meio de decisão judicial de um órgão nomeado por ele, o presidente pretende se reeleger em 2024 e reaviva os temores de seus críticos
[^6]: [The Architecture of a Web 3.0 application](https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application)
[^7]: [The Web3 Fraud](https://www.usenix.org/publications/loginonline/web3-fraud)