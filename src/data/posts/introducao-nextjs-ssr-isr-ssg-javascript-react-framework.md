---
title: Introdução ao Next.js
description: Framework para React em produção
featured: true
date: "2021-12-07T10:50:00.000Z"
featuredImage: nextjs.jpg
permalink: "/blog/introducao-nextjs-ssr-isr-ssg-javascript-react-framework/"
image: cover.png
featuredImageColor: "#1E2C54"
---

<p class="lead">"Toda semana um novo framework JavaScript" — com certeza já deve ter ouvido essa. Mas, já parou para analisar criticamente esta frase?</p>

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/98maV70oAqIZtEYqB4" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

- [AngularJS](https://angularjs.org/) (2010) - 11 anos
- [Backbone](https://backbonejs.org/) (2010) - 11 anos
- [Ember](https://emberjs.com/) (2011) - 10 anos
- [Meteor](https://www.meteor.com/) (2012) - 9 anos
- [React](https://pt-br.reactjs.org/)[^1]: (2013) - 8 anos
- [Vue](https://vuejs.org/) (2014) - 7 anos
- [Angular](https://angular.io/) (2016) - 5 anos
- [Next.js](https://nextjs.org/) (2016) - 5 anos
- [Svelte](https://svelte.dev/) (2016) - 5 anos

Para se ter uma ideia, a versão 1.0 do [**Spring Boot**](https://spring.io/projects/spring-boot) do Java é de 2014, tendo 7 anos. Claro que é uma evolução do **Spring** que é muito anterior, mas foi um salto evolutivo que podemos comparar com a evolução em DX (__Developer Experience__), que tem sido o mesmo foco de muitos frameworks JavaScripts modernos).

Rapidamente se tornou meu framework de escolha e considero uma ferramenta bem madura para produção. Esta postagem nasceu de uma talk que eu _não fui capaz_ de realizar no TDC Future deste ano devido a problemas técnicos. Aqui os [**slides**](https://slides-ibra.s3.us-east-2.amazonaws.com/2021/javascriptNode_Nextjs.pdf) do que teria sido esta talk!

## O que é Next.js

O **SDK da Web**. Pelo menos é a descrição atual no [site oficial do Next.js](https://nextjs.org/). Basicamente é um **framework** para React, otimizado para uma grande experiência para desenvolvedores e seus usuários trazendo as melhores práticas para atingir a melhor performance de uma aplicação web.

Algumas pessoas, principalmente iniciantes perguntam qual a diferença entre o Next.js e o React. Next.js é construído tendo por base o React, então é uma extensão, um framework extendendo a biblioteca base que é o React.

Qual a diferença entre framework e biblioteca? 🤔 Basicamente um conceito chamado _[Inversão de Controle](https://martinfowler.com/bliki/InversionOfControl.html)_. Como definido pelo Martin Fowler, Inversão de Controle é uma parte chave do que torna um framework diferente de uma biblioteca. Uma biblioteca é essencialmente um conjunto de funções que você pode utilizar. Cada chamada faz algum trabalho e retorna o controle ao cliente.

Um framework incorpora algum design abstrato, com mais comportamento envolvido. Para utilizá-lo, você deve inserir seus comportamentos em lugares dentro do framework tanto extendendo quando operando com os primitivos trazidos por você.

Por exemplo, React em si não tem qualquer preocupação com rota. Se está em uma página ou você precisa ir para a página `/sobre`. React se trata de operar a interface. Você precisa ou criar sua solução ou usar alguma outra biblioteca ou componente que a comunidade criou. Seguindo no exemplo, o mais sólido projeto para rotas para React é o [React Router](https://reactrouter.com/). Assim como por exemplo, [Loadable Components](https://loadable-components.com/), que é um biblioteca para fazer _code splitting_ em React, inclusive com suporte a SSR, que é até mesmo [recomendada pelo time do React](https://reactjs.org/docs/code-splitting.html#reactlazy).

Já o Next.js tomou várias decisões a respeito de cada um desses exemplos e mais.

## Iniciando com Next.js

Eu acredito que a Vercel, a empresa que mantém o Next.js, mesmo que este seja open-source, faz um excelente trabalho com documentação e na jornada de [ensinar a criação de um web app](https://nextjs.org/learn/basics/create-nextjs-app). Entretanto vou fazer uma pequena introdução para aquelas pessoas para quais o inglês pode ser uma barreira.

### Instalando

```bash
# typescript
npx create-next-app@latest --typescript
yarn create next-app --typescript

# javascript
npx create-next-app@latest
yarn create next-app
```

Entre as opções, para qualquer projeto, eu recomendo TypeScript, tanto de um ponto de vista para manutenção a longo prazo tanto quanto para uma garantia de desenvolvimento mais sólido e menos propenso a erros. A opção em JavaScript é a padrão, mas fica meu conselho de que qualquer projeto produção, o uso do TypeScript apenas agregará valor.

O sistema de rotas do Next.js é bem intuitivo e uma vez que possui contato com ele, se torna bem simples e fácil de compreender.

```bash
.
  node_modules
  pages/
    api/
      hello.ts
    index.tsx
    sobre.tsx
    produto/
      exemplo1.tsx
    _app.tsx
    _document.tsx
  public
  styles
  README.md
  next-env.d.ts
  next.config.js
  package-lock.json
  package.json
```

No caso acima, estes seriam as relações:

- `https://seusite.com.br` - definido em `pages/index.tsx`
- `https://seusite.com.br/sobre` - definido em `pages/sobre.tsx`
- `https://seusite.com.br/produto/exemplo1` - definido em `pages/produto/exemplo1.tsx`
- `https://seusite.com.br/api/hello` - caminho de API para `pages/api/hello.ts`

Opcionalmente `pages` pode ser incluído dentro de uma outra pasta chamada `src`, sem qualquer cofiguração extra. Recomendo esta abordagem pois organiza melhor em minha opinião o projeto, ainda mais com o avanço em que poderemos ter `src/components`, `src/util`, `src/lib` entre outros. Lembrando que o diretório `public` e os arquivos `next.config.js` e `tsconfig.json` necessitam continuar na raíz do projeto. E obviamente se você por engano colocar um diretório `pages` na raíz, o seu `src/pages` será completamente ignorado. 

```bash
.
  node_modules
  src/
    pages/
      api/
        hello.ts
      index.tsx
    sobre.tsx
    produto/
      exemplo1.tsx
      _app.tsx
      _document.tsx
    styles
  public
  README.md
  next-env.d.ts
  next.config.js
  package-lock.json
  package.json
```

Note que em `pages`, todos os arquivos devem exportar um componente `JSX` do React, já que devem ser páginas ou representações de interface. Por isso se você tiver arquivos `*.js` ou `*.ts` aqui sem exportar um componente React, seu build irá falhar. A exceção é a pasta `api` que serve para definir APIs, elas por padrão recebem qualquer requisição e é necessário lidar com os métodos e tudo o mais necessário. Uma API básica seguindo o _hello world_ do projeto que apenas aceitasse `POST` seria desta forma:

```ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

  type Data = {
    name: string
    error?: string
  }

  export default function handler(
      req: NextApiRequest,
      res: NextApiResponse<Data>
    ) {

       if(req.method === 'POST') {
         res.status(200).json({ name: 'John Doe' })
       } else {
         res.status(404).json({ error: 'Not Found'})
       }
        
    }
```

Para vários tipos de integrações, como por exemplo Next.js utilizando WordPress como headless CMS, Next.js para sites estáticos e dezenas de outros, há fartos samples em [Next.js exemples](https://nextjs.org/examples), que compõem uma ótima forma de compreender como utilizar Next.js na prática.

Nesta estrutura em `pages` ainda existem dois arquivos que valem a pena uma exploração mais de perto pois quase certamente para qualquer projeto em produção será necessário seu uso.

- `_app.tsx`
- `_document.tsx`

O `_app.tsx` permite um custom App. Através disso podemos persistir layouts entre mudaças de página, manter o estado de forma global, fazer a gestão de erros, adicionar dados em páginas, CSS global.

```ts
// Ref: https://nextjs.org/docs/advanced-features/custom-app

// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
```

O grande benefício do `_app.tsx` também é que é nesta página que podemos implementar métricas globais muito importantes, como o RUM dos web vitals e outras bem particulares para medição de nossa performance:

```tsx
// pages/_app.tsx
import type { AppProps, NextWebVitalsMetric } from 'next/app'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  switch (metric.name) {
    case 'FCP':
      // handle FCP results
      break
    case 'LCP':
      // handle LCP results
      break
    case 'CLS':
      // handle CLS results
      break
    case 'FID':
      // handle FID results
      break
    case 'TTFB':
      // handle TTFB results
      break
    case 'Next.js-hydration':
      // handle hydration results
      break
    case 'Next.js-route-change-to-render':
      // handle route-change to render results
      break
    case 'Next.js-render':
      // handle render results
      break
    default:
      break
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

Estas métricas adicionais mensuram o tempo que uma página leva para [hidratar](https://pt-br.reactjs.org/docs/react-dom.html#hydrate) e [renderizar](https://pt-br.reactjs.org/docs/react-dom.html#render), todos em ms:

- `Next.js-hydration`: Tempo que leva para a página iniciar e finalizar a hidratação
- `Next.js-route-change-to-render`: Tempo que leva para uma página iniciar a renderização após uma alteração de rota (i.e., navegar entre páginas)
- `Next.js-render`: Tempo que uma página leva para renderizar após a mudança de rota

## O que Next.js não é

- [Nuxt.js](https://nuxtjs.org/): É um framework também, mas para Vue.js
- [Nest.js](https://nestjs.com/): É um framework de aplicações Node.js
- **CMS**: Next.js não tem qualquer forma de fazer a gestão do seu conteúdo, seja ele baseado em conteúdo, uma loja virtual ou outros. Seu trabalho é apenas criar ricas interfaces com performance, baseado em React.

## Métodos de renderização

<section class="callout">
  <div class="callout__icon"><span role="img" aria-label="Ideia" >💡</span></div>
  <article class="callout__content">
    <p>Alguns conceitos:</p>
    <p><b>Build time</b></p>
    <p>Isto ocorre a todo momento em que você está desenvolvendo com <code>npm run dev</code> por exemplo e ao fazer uma mudança no código, ele faz o <code>hot reload</code>, mas há também um comando específico <code>npm run build</code> para criar um build otimizado para ser implementado em produção. É um momento específico o tempo em que os assets são gerados para serem implementados em um servidor ou disponibilizados estaticamente.</p>
    <p><b>Run time</b></p>
    <p>Se refere ao momento em que seu código está no ar, em produção. Geralmente é associado com aplicações que estão servindo e processando informações em um processo, com capacidades rodando em servidor, como <code>npm run start</code>.</p>
    <p><b>Request time</b></p>
    <p>Aplicável a aplicações estáticas e rodando, se trata de momentos em quem é requisitado ou recebida uma <em>request</em> seja um <code>POST</code>, <code>GET</code>, <code>PUT</code> e outros verbos HTTP.</p>
  </article>
</section>

## Estratégias de renderização

Basicamente existem alguns métodos / estratégias de renderização. 

A primeira é a SSG (Site Static Generation), uma geração estática dos recursos. Isto não significa que se site ou webapp será completamente sem interatividade ou comportamentos. Este blog é gerado em SSG, por exemplo. É um método em que todos os assets, arquivos usados, imagens e conteúdo são requisitados em `build time`, e então é realizado o deploy, para disponibilizar aos usuários uma nova versão ou conteúdo.

<figure class="extend">
    <img src="{{ 'server-side-rendering-min.png' | media(page) }}" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Como resultado, o servidor não precisa realizar nenhum processamento. Muitas vezes pode ser servido diretamente de armazenamentos de objetos como o S3 por exemplo. O `TTFB` (Time To First Byte), o tempo que leva entre o `GET` do seu navegador até receber a primeira resposta do servidor é muito baixo pois não há nenhuma computação a ser feita para sua entrega, todos os recursos já podem estar otimizados, inclusive cacheados em diversas CDNs.

Geralmente isto é feito tratando os dados estáticos e caso a fonte seja uma API, listando caminhos dinâmicos para gerar todas as páginas existentes. Imagine que você tenha 800 postagens em seu blog WordPress, em `build time` você poderá passar todos esses caminhos para `pages/[posts].tsx` e construir estaticamente as páginas.

```ts
import { GestStaticProps, GeStaticPaths } from 'next'

export const getStaticProps: GestStaticProps = async context => {
  // Geração estática com dados em build time ou em request time
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Lista caminhos para popular dados em build time
}
```

Obviamente, cada escolha possui um trade-off. E com `SSG` um destes é que quanto mais conteúdo e páginas seu site possui mais e mais tempo ele demora para ser colocado no ar, elevando seu `build time`. O que para alguns negócios é bem sensível.

<figure class="extend">
    <img src="{{ 'build-time-ssg-min.png' | media(page) }}" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Outro método é o SSR (Server Side Rendering), neste método, uma rota dinâmica como `[posts].tsx` ou "cata-tudo" como `[...posts].tsx`. Neste método, a partir do contexto o processo do servidor Node.js que o Next.js entrega. 

```ts
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async context => {
  // Requisita dados server-side, a cada request, em request e run time
}
```

O trade-off é que a cada requisição, a aplicação precisa fazer uma computação, buscar em uma API ou banco de dados e gerar em tempo real as páginas. Obviamente podem existir camadas de cache mas as páginas destes caminhos dinâmicos serão criadas _on demand_.

<figure class="extend">
    <img src="{{ 'server-side-rendering-min.png' | media(page) }}" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Por isso, a velocidade do `TTFB` não é tão rápida quanto em `SSG`, mas para alguns tipos de sites, como de notícias, por exemplo, é um modelo ideal pois reflete a agilidade em que o conteúdo e dezenas de novas páginas podem ser inseridas a todo momento.

<figure class="extend">
    <img src="{{ 'incremental-static-regeneration-min.png' | media(page) }}" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Uma terceira estratégia é o ISR (Incremental Static Regeneration). O código é bem parecido com `SSG` mas `getStaticProps` retorna deve retornar uma nova propriedade e `getStaticPaths` que define a maneira de lidar com caminhos ainda não gerados em `request time` tendo um `falback`, com uma página de "carregamento" ou sendo `blocking` em que a página antes de ser enviada será gerada de forma `SSR`.

```ts
import { GestStaticProps, GeStaticPaths } from 'next'

export const getStaticProps: GestStaticProps = async context => {
  // Geração estática com dados em build time ou em request time
  return {
    props: {

    },
    revalidate: 60
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Lista caminhos para popular dados em build time
  return {
    paths,
    fallback: 'blocking'
  }
}
```

Basicamente é uma estratégia que basicamente combina as estratégias anteriores. Também adiciona esse valor de `revalidate` em que as páginas estáticas, criadas em `build time` poderão ser atualizadas em `run time`, caso haja uma nova alteração das mesmas baseada nesse timestamp em `request time`. Ou seja, geramos uma página estática no momento de criação com o valor `60 * 15`, ou seja, após 15 minutos deve ser revalidada. Ela estará cacheada e caso haja uma requisitação e esta requisitação seja feita _após_ 15 minutos, será verificada se existe uma nova atualização e em caso positivo, ela é re-generada. Dentro deste intervalo a mesma página gerada será sempre entregue como em SSR.

<figure class="extend">
    <img src="{{ 'isr-how-min.png' | media(page) }}" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

## Qual dos métodos utilizar?

_Depende_.

Brincadeira. A resposta é mais complexa:

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/N63fPtiPhkBdS" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

Caso não haja restriçõe de como disponibilizar seu conteúdo a melhor estratégia é uma combinação das estratégias. Se há alguma limitação em que apenas arquivos estáticos podem ser disponibilizados então, você terá o `SSG` e a cada mudança em seu conteúdo deverá disparar um novo `build`. Entretanto, se este não for o caso, você pode combinar. Existem páginas cujo conteúdo praticamente não muda ou muda raramente — páginas de contato, etc. Estas podem ser sempre `SSR`. Outras páginas podem se beneficiar muito de `ISR` ou mesmo diretamente `SSR`. E é claro, uma vez carregada qualquer uma destas páginas você pode fazer seu carregamento assíncrono de dados em qualquer outra fonte e popular no próprio cliente, fazendo a melhor combinação.

<figure class="extend">
  <img src="{{ 'web-core-vitals-min.png' | media(page) }}" width="752" height="475" alt="" style="border: 1px solid #BBB" />
</figure>

Para atingir uma excelente performance é necessário medir, acompanhar e explorar possibilidades e não existe nenhuma estratégia sem trade-offs. Imagine um site de notícias que escolha `SSR`. A cada publicação de uma nova matéria, correção, edição de Front Page e edição de matérias disparar um novo `build`. Rapidamente poderá haver até mesmo builds competindo tempo de computação, que é um dos fator mais determinante em custos na chamada "FinOps" do que armazenamento, por exemplo.

E além de ter uma [excelente comunidade](https://nextjs.org/blog/discord) o próprio time de performance do Google Chrome vem a anos trabalhando em proximidade com o time do Next.js e isso está se refletindo claramente na cultura de performance que o Next.js está rapidamente se tornando destaque entre os frameworks JavaScript.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The Chrome Aurora team has worked closely with Next.js team for a few years now, and we&#39;re delighted to see that so many Next.js sites have seen tremendous improvements in Core Web Vitals.<br><br>In less than a year, 91% more Next.js origins have achieved good Core Web Vital scores 🎉 <a href="https://t.co/SQwbl8xxOZ">pic.twitter.com/SQwbl8xxOZ</a></p>&mdash; Houssein Djirdeh (@hdjirdeh) <a href="https://twitter.com/hdjirdeh/status/1457679313965240325?ref_src=twsrc%5Etfw">November 8, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Is performance on the web getting better? The answer is yes :) 33% of origins now meet the Core Web Vitals thresholds! Lots of improvements from sites using a framework too. <a href="https://t.co/4e1z1alFZb">pic.twitter.com/4e1z1alFZb</a></p>&mdash; Addy Osmani (@addyosmani) <a href="https://twitter.com/addyosmani/status/1456316562609254406?ref_src=twsrc%5Etfw">November 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Consulte as [documentações](https://nextjs.org/docs), eu mesmo tenho diversos repositórios de exmplo utiliziando Next.js. Um destes por exemplo, faz uso do [AWS Cloud Development Kit (CDK) para fazer um deploy serveless na AWS](https://github.com/ibrahimcesar/next.js-amplify-workshop-with-cdk), porém a própria Vercel oferece sua hospedagem, [que é gratuita para projetos hobbies](https://vercel.com/home).

Hoje já temos até um framework em cima do próprio Next.js chamado [Blitz](https://blitzjs.com/), almejando ser o Ruby on Rails do ecossistema JavaScript.

## Vá além

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'>
<iframe title="100 seconds of Next.js" width="560" height="315" src="https://www.youtube.com/embed/Sklc_fQBmcs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'>
<iframe title="Next.js 12" width="560" height="315" src="https://www.youtube.com/embed/lRQ5z7i7pxE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'>
<iframe title="TypeScript" width="560" height="315" src="https://www.youtube.com/embed/ahCwqrYpIuM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


Experimente o Next.js! Quem sabe não será seu _próximo_ framework de escolha!

[^1]: Oficialmente o React se posiciona como "Uma biblioteca JavaScript para criar interfaces de usuário", ou seja, uma _library_ e não um _framework_.