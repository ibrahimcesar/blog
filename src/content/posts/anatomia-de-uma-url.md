---
title: "#webdev: Anatomia de uma URL"
description: As peças e história de um protocolo
featured: true
pubDate: "2021-07-18T10:50:00.000Z"
image: "~/assets/images/url.jpg"
socialImage: "/features/url.png"
tags: ["Web Development", "URL", "HTTP", "Web Standards", "Educational"]
category: "Web Development"
---

<p class="lead">Neste momento, enquanto lê, você está acessando uma <b>URL</b>. Ou ao menos o conteúdo desta página foi originalmente publicado em uma URL, sindicalizado em um feed RSS e catalogado, raspado e arquivado. Apesar de sua ubiquidade, sempre aprender ao examinar a história e a anatomia das partes que compõem uma URL.</p>

Como mais uma sopa de letrinhas da tecnologia, URL é abreviatura de **Uniform Resource Locator**. Tudo começa com outro acrônimo, bem parecido – **Uniform Resource Identifier** (URI) que se trata de uma sequêcia de caracteres que identificam recursos lógicos ou físicos.usados por tecnologias web. URIs devem ser usadas para identificar _qualquer coisa_, até objetos e pessoas, mas geralmente interagimos como APIs ou páginas da web. Alguns URIs poroveem meios de localizar e receber informações ou "agir"sobre recursos em uma rede (geralmente a Internet mas pode ser uma rede privada ou mesmo o sistema de arquivos em uma máquina) este _tipo de URI_ é que é a nossa famosa URL. Outras URIs proveem  apenas um nome único, sem qualquer meio de localizar, agir ou receber informações sobre os recursos e sãp chamadas de **Uniform Resource Names (URNs)**. A AWS segue essa convenção de forma proprietária dentro de sua Cloud, cada recurso possui um ARN único, ou um [Amazon Resource Name](https://docs.aws.amazon.com/pt_br/general/latest/gr/aws-arns-and-namespaces.html).

## O que usar e quando?

Publicações técnicas, especialmente as produzidas pela IETF ou a W3C refletem uma [recomendação da W3C de 2001](https://www.w3.org/TR/uri-clarification/), que endossa o uso de URI pois considera "URL um conceito útil porém informal", sendo que a URL seria um tipo de URI com a represeentação de seu mecanismo primário de acesso.

Já URLs dominam em especificações produzidas pelo WHATWG – pois é, tente dizer isso bem rápido – que é o Web Hypertext Application Technology Working Group ([WHATWG](https://whatwg.org/)), que é uma comunidade independente para o desevolvimento do HTML e tecnologias relacionadas (e graças a este grupo, temos hoje o [HTML5](https://html.spec.whatwg.org/multipage/introduction.html#is-this-html5?)!). O [argumento do grupo](https://url.spec.whatwg.org/#goals) é:

> Standardize on the term URL. URI and IRI [Internationalized Resource Identifier] are just confusing. In practice a single algorithm is used for both so keeping them distinct is not helping anyone. URL also easily wins the search result popularity contest.

Ou seja, vamos tornar o termo URL como padrão. Tanto URI como IRI (_A Wild Resource Identifier appears!_) são confusos. Na prática um único algoritmo é usado para ambos e mantê-los distintos não ajuda ninguém. URL também facilmente ganha a competição de popularidade nos resultados de busca. Ou seja, as pessoas _usam_ URL. A web é como um coral, em que novas tecnologias vão sendo construídas em cima das antecessoras e expandido e assim como a nossa língua, está sempre em processo de construção e URL parece a ser forma mais _natural_ para os cidadões hoje da Internet. Então minha abordagem é, URLs para diversão e lucro!

## Estrutura

> Há mais coisa entre os servidores e as URLs do que sonha nossa vã Filosofia!

<figure class="extend">
    <img src="/assets/url-1.png" width="752" height="475" alt="URL" style="border: 1px solid #BBB" />
</figure>

### Protocolo

O protocolo ou esquema (scheme) não pode ser vazio! É seguido de dois pontos `:`. Esses protocolos seguem padronizados pela Internet Assigned Numbers Authority (IANA), que é autoridade na criação dos endereços da Internet, alguns incluem `http`, `https`, `ftp`, `mailto`, `file`, `data` entre outros. Usuários de torrent já podem ter utilizado o esquema `magnet` que não é reconhecido mas amplamente utilizado ou proprietários como o `whatsapp` do... WhatsApp ou `zoommtg` do Zoom.

### Subdomínio

Nem todas urls possuem _subdomínios_, que aparecem à frente dos domínios de autoridade. O criador do domínio tem liberdade _total_ de criação. Essa característica das URLs permite uma ampla flexibilidade para criação de aplicações web: `mail.exemplo.com.br` ficará meu e-mail, `api.exemplo.com.br`, minha API e `ajuda.exemplo.com.br` uma outra aplicação, só de tickets para ajudar meus usuários e que não vai exigir mexer em redirects da minha aplicação principal. Mas... pode ser explorado. E é. É um dos locais em que _phishers_ e outros tipos de criminosos exploram pois nada me impede de criar um subdominio que seja `bradesco.cartoes.exemplo.com.br`, sendo é claro, eu, proprietário do `exemplo.com.br`. Lembrando que nada impede, mas cada domínio responde ultimamente à IANA e você não apenas deverá como sofrerá sanções como perda de domínio e processos criminais caso abuse desta forma. A Google inclusive tinha planos de "eliminar" as URLs do navegador, e decidir pelo usuário se o site é ou não confiável já que a maioria não observa a URL de qualquer forma, mas este ano, 2021, [voltou atrás na decisão](https://arstechnica.com/gadgets/2021/06/google-chrome-ends-its-war-on-address-bar-urls-for-now-at-least/).

### Domínio

É o que você paga para um _registrar_ anualmente para ter autoridade em um domínio. Cada domínio é um conjunto de caracateres que você controla o DNS. Ter um domínio no Brasil por exemplo, não lhe dá autoridade para o mesmo domínio no Reino Unido, por exemplo. `exemplo.com.br` e `exemplo.co.uk` podem ser de pessoas ou entidades diferentes e aplicações completamente diferentes.

### Top-Level Domain (TLD)

É o `.com` e outros novos Domínios de Primeiro Nível ou Top-Level Domain (TLD) como os reecentes `.ninja`, `.guru`, `.cloud` dentre outros. O Brasil por exemplo tem o `.com.br`, `.org.br` e outros disponíveis através do [Registro.br](https://registro.br/dominio/categorias/) – curiosamente o próprio **Registro.br** usa apenas o `.br` mas não o comercializa, como fazem muitos países. Se alguém souber o motivo, adoraria saber!

### Porta

Não obrigatória. E assumida por alguns protocolos – HTTPS será a porta `443` e HTTP `80`. Geralmente importa mais para desenvolvedores, portas basicamente são alocações de comunnicação dentro de uma máquina e um servidor pode ter várias aplicações web por exemplo, servindo em portas diferentes. É um tópico que aparenta simplicidade [mas tem várias nuâncias e implicações](https://pt.wikipedia.org/wiki/Porta_(redes_de_computadores))! Mas será que em desenvolvimento não se pode dizer isso de qualquer coisa? 🤔

<figure class="extend">
    <img src="/assets/url-2.png" width="752" height="475" alt="URL" style="border: 1px solid #BBB" />
</figure>

### Caminho do recurso

É a representação lógica ou física do recurso. A maioria das URLs que acessamos são caminhos lógicos e muitas vezes representativos de classificações semânticas mas por muito tempo, eram representações físicas dos diretórios! Muitas URLs terminam por aqui, então pode-se encontrar caminhos terminando em extensões como `.html`, `.jsp`, `.xml`, etc.

### Query String 

Um conjunto de `chave=valor` separados pelo sinal de igual `=`. Começam em `?` e se concatena cada próximo com `&`. Se um valor se repete, por exemplo, `?id=1&id=2`, cada sistema atua de uma forma. E há inclusives formas de se atacar um sistema web desta forma, o chamado **HTTP Parameter Pollution:** 

<div class='yt-frame'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/QVZBl8yxVX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Um dos mais comuns que se vê por toda a web, principalmente quando se pega links através de mídias sociais ou mesmo newsletters são as UTM tags. Do ponto de vista técnico, não há nada "especial" a respeito do **Urchin Tracking Module**, sim, esse é o nome, era o Analytics utilizado antes, o Urchin. São apenas um conjunto de chaves-valor, só que padronizado de tal forma pela indústria do _marketing digital_ que se tornaram ubíquos. Existem cinco: __utm_source__, __utm_medium__, __utm_campaign__, __utm_term__ e __utm_content__.

Outro bem comum são os `?q=` ou `?s=`. Utilizados em páginas de busca. Depende de cada aplicação e servidor tratar as query strings, pois podem ser literalmente, ignoradas.

### Fragment Identifier

O Identificador de Fragmento é a parte da URL que concatea um ID único para navegação dentro da própria página. Veja [Estrutura](#h-estrutura) por exemplo!

#### Referências

- [Uniform Resource Identifier (URI): Generic Syntax](https://datatracker.ietf.org/doc/html/rfc3986)
- [Uniform Resource Identifier](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)

_**Crédito das ilustrações da URL**: Victoria Nogueira Bevilacqua_.