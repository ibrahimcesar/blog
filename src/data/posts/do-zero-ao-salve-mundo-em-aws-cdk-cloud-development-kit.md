---
title: "Do Zero a “Salve Mundo” com AWS CDK"
description: Da infra ao código, todo em TypeScript!
featured: true
date: "2021-08-13T10:50:00.000Z"
featuredImage: cdk-salvemundo.png
image: cdk.png
permalink: "/blog/do-zero-ao-salve-mundo-em-aws-cdk-cloud-development-kit/"
featuredImageColor: "#1E2C54"
---

<p class="lead"><b>CDK</b> — <em>Cloud Development Kit</em> é atualmente a minha ferramenta predileta para <em>Infrastruture as Code (IaC)</em>. Para se ter uma API na AWS com toda a infraestrutura provisionada e o próprio código em TypeScript, CDK permite a criação e manutenção de aplicações isomórficas em outro nível já que se trata até mesmo da infra, não apenas front-end e back-end.</p>

O [Cloud Development Kit](https://docs.aws.amazon.com/cdk/latest/guide/home.html) (CDK) foi lançado em 2019. No momento suporta **TypeScript**, **JavaScript**, **Python**, **Java**, **C#/.Net**, e em modo de _preview_, Go. Diferente do [SAM](https://aws.amazon.com/pt/serverless/sam/) (_Serverless Application Model_) que é focado em _Serverless_ portanto seu escopo é facilitar a manipulação de serviços serverless e é um extensão, ou melhor ainda, um _subset_ do CloudFormation. Já o CDK é uma biblioteca para manipular e provisionar todas as propriedades da AWS, em seus mais de 200 serviços[^1].

Este código foi apresentado nesta sexta-feira 13, de agosto 2021 no [**DevOps Extreme**](https://www.linuxtips.io/devops-extreme), com 24 horas de conteúdo gratuito.

## O que você precisa saber

- Nível **200**: **Intermediário**
- É necessário ter o [Node instalado](https://nodejs.org/en/);
- É necessário ter a [AWS CLI instalada](https://aws.amazon.com/pt/cli/) e sua [credencial setada](https://docs.aws.amazon.com/pt_br/cli/latest/userguide/cli-configure-files.html);
- É necessário ter o [CDK instalado](https://docs.aws.amazon.com/cdk/latest/guide/cli.html) e feito [bootstrap em sua conta](https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html);
- Algum conhecimento de APIs e [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html).

## Arquitetura

<figure class="extend">
    <img src="{{ 'arquitetura.png' | media(page) }}" width="752" height="475" alt="Arquitetura básica" style="border: 1px solid #BBB" />
    <figcaption>API Gatewy REST API <em>ANY {proxy+}</em> e Lambda </figcaption>
</figure>

## Passo a passo

Primeiro, no diretório escolhido para o projeto vamos criar um `package.json` básico.

```json
{
  "name": "deveops-extreme",
  "version": "0.0.1",
  "private": true,
}
```

Agora já podemos instalar nossas dependências de desenvolvimento e também nossas dependências da aplicação.

```bash
npm install -D typescript ts-node esbuild aws-sdk @types/aws-lambda @types/node

npm install -S @aws-cdk/aws-apigateway @aws-cdk/aws-lambda @aws-cdk/core aws-cdk
```

Isto deverá popular nosso `package.json` com todas as dependências de nossa aplicação e deverá ficar parecido com o arquivo a seguir. Como o comando `npm install` sem determinar uma versão em particular instalará a versão mais recente, dependenndo de quando estiver rodando, suas versões podem ser diferentes das exibidas. Caso queira exatamente as mesmas em que foi realizado esta demonstração basta deixar apenas as minhas versões, sem o sinal `^` na frente, que indica que aquela versão é a _menor_ desejada mas pode ser instalado versões superiores. Definindo uma versão direta, o `npm` deverá instalar exatamente a versão definida.

```json

{
  "name": "deveops-extreme",
  "version": "0.0.1",
  "private": true,
  "devDependencies": {
    "@types/aws-lambda": "^8.10.82",
    "@types/node": "^16.6.1",
    "aws-sdk": "^2.967.0",
    "esbuild": "^0.12.20",
    "ts-node": "^10.2.0",
    "typescript": "^4.3.5"
  },
  "dependencies": {
    "@aws-cdk/aws-apigateway": "^1.118.0",
    "@aws-cdk/aws-lambda": "^1.118.0",
    "@aws-cdk/core": "^1.118.0",
    "aws-cdk": "^1.118.0"
  }
}
```

Uma vez com as dependências no lugar vamos definir nosso `tsconfig.json`, que é o arquivo que vai definir nosso projeto TypeScript. Destaco que podemos usar a `lib` mais recente pois vamos escrever nossa Lambda na especificação ECMAScript mais recente. Também está no modo mais fortemente tipado permitido pelo TypeScript com `strict` e vários outros de sua família assim como algumas definições que poderiam estar em um linter mas para economia e concisão, resolvi não adotar nesse exemplo mínimo como `noImplicitThis`, `noFallthroughCasesInSwitch` e `noImplicitReturns` por exemplo. A documentação do `tsconfig` é [bem completa e vale a leitura para quem deseja entender mais as decisões do compilador](https://www.typescriptlang.org/tsconfig).

```json
{
    "compilerOptions": {
        "alwaysStrict": true,
        "downlevelIteration": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "inlineSourceMap": true,
        "lib": [
            "es2020"
        ],
        "moduleResolution": "node",
        "noEmitOnError": true,
        "noFallthroughCasesInSwitch": true,
        "noImplicitAny": true,
        "noImplicitThis": true,
        "noImplicitReturns": true,
        "noUncheckedIndexedAccess": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "resolveJsonModule": true,
        "strict": true,
        "strictBindCallApply": true,
        "strictFunctionTypes": true,
        "strictNullChecks": true,
        "strictPropertyInitialization": true,
        "stripInternal": true,
        "target": "ES2020",
        "typeRoots": [
            "node_modules/@types"
        ],
        "useDefineForClassFields": true
    },
    "exclude": [
        "node_modules"
    ],
    "include": [
        "."
    ]
}
```

### Stack

Agora vamos ao código de nossa infra do Stack! Vamos criar na raíz do projeto um arquivo chamado `cdk.json`:

```json
{
    "app": "npx ts-node index.ts"
}
```

E o `index.ts` a que este se refere:

```ts
import * as cdk from "@aws-cdk/core";
import { buildSync } from "esbuild";
import path from "path";

buildSync({
  bundle: true,
  external: ["aws-sdk"],
  format: "cjs",
  platform: "node",
  sourcemap: true,
  target: "node14.2",
});
```

Ainda sem os valores de entrada e saída.

### API

Agora vamos trabalhar em nova pasta, crie uma chamada `api`. Eu sempre crio um arquivo JSON de  configuração, `config.json`, que posso depois, manipular e criar versões para ambientes diferentes e outros detalhes de implementação:

```json
{
  "apiName": "DevOpsExtreme",
  "apiDescription": "General purpose Lambda to get request from API Gateway with CDK",
  "api": {
    "handler": "ApiLambda"
  },
  "headers": {
      "Content-Type": "text/plain;charset=utf-8",
      "X-Clacks-Overhead": "GNU Terry Pratchett"
    },
    "tags": [
      {"key": "Key", "value": "Value"},
      {"key": "Project", "value": "ServerlessLand"}
    ]
}
```

Se quiser saber mais sobre a `X-Clacks-Overhead` header, [siga esse fio](https://twitter.com/ibrahimcesar/status/1366507130480717830?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1366507130480717830%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fibrahimcesar.cloud%2Fnotes%2F2021-03-01-terry-pratchett%2F).

Agora a infra da API, em `api/index.ts`:

```ts
import * as apigw from "@aws-cdk/aws-apigateway";
import * as lambda from "@aws-cdk/aws-lambda";
import * as cdk from "@aws-cdk/core";
import { Tags } from "@aws-cdk/core";
import path from "path";
import config from "./config.json";


export class ApiStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string) {
    super(scope, id);

    const handler = new lambda.Function(this, "handler", {
      code: new lambda.AssetCode(path.resolve(__dirname, "dist")),
      handler: `index.${config.api.handler}`,
      runtime: lambda.Runtime.NODEJS_14_X,
    });

    new apigw.LambdaRestApi(this, config.apiName, {
      handler,
      description: config.apiDescription
    });


    const tags = config.tags

    tags.forEach(tag => {
      Tags.of(this).add(tag.key, tag.value)
      Tags.of(handler).add(tag.key, tag.value)
    })

  }
}
```

Podem ver que uso um `forEach` para manipular as tags e podemos usar qualquer controle de fluxo ou connstruto de nossas linguagens, nesse caso, TypeScript em nossa infra! Esse é o grande valor que o **CDK** trouxe para mim. Algumas vezes eu acho JSON ou YAML uma carga cognitiva a mais depois de estar lidando com toda a base de código e poder me expressar na linguagem que programo — e por extensão — penso e abstraio o dia todo, para mim é libertador e consigo ter mais autonomia e senso de controle! Mas essa é minha experiência, totalmente subjetiva, mas eu vivo a partir dela e compartilho com vocês. Quem sabe alguém se identifica!

#### Notas

```ts
import * as cdk from "@aws-cdk/core";
import { Tags } from "@aws-cdk/core";

// Esse { Tags } eu estou usando o _desconstructing_ do ES.
// Assim como eu uso cdk.Stack, eu poderia simplesmente mais tarde ter usado cdk.
// Tags lá no final, mas acredito que fica mais explicíto.
// Da mesma forma poderia ir além e fazer algo como:

import { App, Stack, Tags } from "@aws-cdk/core";

// e nem usar o cdk.App e cdk.Stack!
// Mas estes em especial meu mapa mental é este
// Programar tem muito de estilo. Esse é o meu :)
```

Esta é a definição da Lambda:

```ts
    const handler = new lambda.Function(this, "handler", {
      code: new lambda.AssetCode(path.resolve(__dirname, "dist")),
      handler: `index.${config.api.handler}`,
      runtime: lambda.Runtime.NODEJS_14_X,
    });
```

O `AssetCode` tem que ser resolvido para o código _compilado_. Lembrando que TypeScript é uma linguagem que necessita ser compilada para JavaScript, o que vamos fazer lá no `index.ts` da raíz do projeto, aqui estou definindo que esse código gerado vai ficar em uma pasta `dist` que o esbuild vai criar para nós. A Lambda tem [uma série de configurações possíveis](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-readme.html), apenas determinei que fosse no Node.js LTS atual, o `14.x`.

A configuração do nosso endpoint do API Gateway também foi mínima:

```ts
    new apigw.LambdaRestApi(this, config.apiName, {
      handler,
      description: config.apiDescription
    });
```

Caso nosso handler tivesse outro nome, teríamos que passá-lo, `handler: seuHandler`, aproveitando a característica do ES de que a chave e valor tem o mesmo nome. E apenas uma descrição que ajuda a visualizar melhor no console, caso precise acessar. Com isso por padrão já temos uma API que vai responder a todos os métodos (GET, POST, PUT, DELETE, OPTIONS, etc) e a _qualquer caminho_! Assim como na Lambda há [muitas formas de se configurar e você pode determinar caminhos específicos assim como métodos, CORS entre outros](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-apigateway-readme.html). Para APIs que sejam focadas inclusive recomendo as [HTTP API, que podem ser até 70% mais baratas, basta seguir a documentação](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-apigatewayv2-readme.html). Este projeto utiliza REST API.

### Lambda

E por fim o código de nossa aplicação, que ficará em novo diretório, `api/lambda`, que para todos os efeitos, é bem simples:

```ts
import { Handler } from "aws-lambda";
import config from "../config.json";

export const handler: Handler = async event => {
  return {
    body: `Salve mundo! O caminho é: "${event.path}"`,
    headers: config.headers,
    statusCode: 200,
  };
};
```

Aqui nossa Lambda responde `200` para qualquer método, e respondemos com nossos cabeçalhos customizados e também printamos qualquer evento. E é claro o objeto `event` vai te trazer várias infoormações como IP, método, _query strings_ o body caso tenha, entre outros para elaborar uma API mais completa. Poderíamos chamar esse arquivo de `api/lambda/index.ts` e parar por aqui. Mas, como uma decisão de arquitetura e empírica, quase sempre, em aplicações distribuídas e _serverless_ nós raramente temos uma lambda apenas. Aliás usar uma Lambda para várias tarefas diferentes eu não recomendaria. Fazer uma coisa e fazer esta coisa bem feita é bem melhor. Então eu coloco este código em `api/lambda/api.ts` ou algum nome que faça sentido ao domínio da aplicação e no que seria o `api/lambda/index.ts` colocaremos a importação de todas as lambdas que nosso projeto terá, iniciando, é claro, com apenas esta:

```ts
export { handler as ApiLambda } from "./api";
```

Notem que este `ApiLambda` é o nome que eu defini em `config.api.handler` e referenciei em `api/index.ts`.

Agora, para colocar no ar só precisamos voltar ao  `index.ts` na raíz, definir o `entryPoints`, os códigos que iremos ter como _input_ e então `outfile`, onde colocaremos o _output_ do esbuild:

```ts
import * as cdk from "@aws-cdk/core";
import { buildSync } from "esbuild";
import { ApiStack } from "./api/index";
import path from "path";
import config from "./api/config.json";

buildSync({
  bundle: true,
  entryPoints: [path.resolve(__dirname, "api", "lambda", "index.ts")],
  external: ["aws-sdk"],
  format: "cjs",
  outfile: path.join(__dirname, "api", "dist", "index.js"),
  platform: "node",
  sourcemap: true,
  target: "node14.2",
});

const app = new cdk.App();
const idStack = config.apiName;
new ApiStack(app, `${idStack}Api`);
```

E é claro, importar nossas definições e instanciar nossa infra!

```bash
cdk deploy --profile pessoal
```

Eu preciso usar `--profile pessoal` pois eu tenho mais de uma credencial AWS na minha máquina, se tiver apenas uma, isto não será necessário! O console vai exibir todas as criações, basta confirmar com `y` e após poucos minutos, ele já devolverá uma URL para você! Você também poderá buscar no **CloudFormation** ou nos respectivos serviços API Gateway e Lambda.

E aí o que acharam? [Aqui vai o repositório do código feito na apresentação ao vivo](https://github.com/ibrahimcesar/devops-extreme).

💡 Antes de commitar, edite seu `.gitignore` o valor, além dos desejados para aplicações Node.js, caso contrário, você vai enviar todos os arquivos locais de deploy e cache do CDK, que não é necessário ou mesmo desejado o versionamento:

```bash
cdk.out
```

### ⚓ Links

- [Repositório deste projeto](https://github.com/ibrahimcesar/devops-extreme)
- [**CDK Patterns**](https://cdkpatterns.com/)
- [**CDK Workshop**](https://cdkworkshop.com/)
- [**CDK Advanced Workshop**](https://cdk-advanced.workshop.aws/)
- [**CDK API Reference**](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html)

[^1]: Fonte: [Overview of Amazon Web Services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html) de Agosto, 2021. Em 2020 eram mais de 175. Temos sempre novos serviços e produtos além de melhorias entrando ao longo do ano, mas muitos são revelados na coferência **re:Invent**.