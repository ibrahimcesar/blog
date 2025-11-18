---
title: "AWS Identity and Access Management (IAM)"
category: AWS
tags: ["AWS", "IAM", "Security", "Cloud"]
description:  "O IAM é como a Força na AWS:  Rodeia e permeia tudo em nossos sistemas. E mantêm tudo funcionando em harmonia."
featured: true
pubDate: "2023-10-06T10:50:00.000Z"
image: ~/assets/images/03_iam.png
socialImage: "/features/iam-cover.png"
---

> "Com grandes poderes vem grandes responsabilidades"
> <footer>Família Parker</footer>

<figure class="extend">
    <img src="/assets/posts/iam/iam-visao.png" width="752" height="475" alt="IAM" style="border: 1px solid #BBB" />
</figure>

O principal serviço que você vai estar interagindo explícita ou implicitamente ao utilizar quaisquer recursos na AWS é o **AWS IAM** (_Identity and Access Management_, Gestão de Identidade e Acesso). O IAM é como a Força na AWS:  Rodeia e permeia tudo em nossos sistemas. E mantêm tudo funcionando em harmonia.

<figure class="extend">
    <img src="/assets/posts/iam/iam.png" alt="Identity and Access Management" style="border: 1px solid #BBB" />
</figure>

Segurança deve ser sua prioridade. Segurança não apenas acontece, deve ser intencional. IAM e suas políticas são o que conferem qualquer ação. São uma cadeia de
permissões criadas e gerenciadas para todos os serviços e recursos. 

## Modelo de responsabilidade compartilhada

<figure class="extend">
    <img src="/assets/posts/iam/02_srm.jpg" alt="Modelo de Responsabilidade Compatilhada. Fonte: AWS" style="border: 1px solid #BBB" />
</figure>

É extremamente importante entender onde começam e onde terminam as
responsabilidades de cada parte, em se tratando da utilização dos serviços da
AWS (ou de qualquer outro provedor de serviços, na verdade).

O modelo determina basicamente que o cliente, _nós_, somos responsáveis pela
responsabilidade da seguraça **na** nuvem. A AWS por sua vez é responsável pela
segurança **da** nuvem.

AWS é reponsável por todas as atividades relacionadas com a manutenção,
segurança de regiões, zonas de disponibilidade e pontos de presença que fazem
parte da infraestrutura global de hardware da nuvem. Esses hardwares
utilizam diversos recursos, como discos rígidos, CPUs, sua manutenção,
substituição, instalação e a gestão de todos os softwares relacionados ao ciclo
de vida desta infraestrutura, assim como sua disponibilização para uso.

Nós, consumidores, somos responsáveis por quaisquer cargas de trabalho, sua
segurança, o que inclui encriptação em trânsito e em repouso deste dados,
integridade dos dados, segregação de redes, proteção de endpoints e demais
elementos através do uso de serviços criados para este papel.

Para qualquer carga de trabalho em que nós instalamos qualquer software, nosso
código, _runtimes_ e os dados dos usuários finais, são totalmente de nossa
responsabilidade.

Essas responsabilidades não são rígidas e variam com os serviços selecionados
pelo cliente, principalmente os chamados serviços gerenciados em que AWS assume
uma responsabilidade maior em determinadas áreas, como encriptação ou alta
disponibilidade, por exemplo.

> **Zumbis nos termos de serviços**
>
> Embora extremamente importante, as páginas de termos de uso, de serviço e
> privacidade costumam estar entre as páginas mais negligenciadas por pessoas na
> web, de todos os níveis de uso e consumo. "Eu li os termos de uso" se tornou
> uma das mais comuns mentiras que declaramos diariamente. A página de termos de
> uso da AWS está em https://aws.amazon.com/aispl/service-terms/. Mas a AWS
> possui um pequeno _easter egg_ em seu termos de serviço, no item 42.10, para o
> serviço **Amazon Lumberyard Engine**, para desenvolvimento de games na AWS. O
> texto estabelece que este serviço não deve ser empregado em quaisquer sistemas
> em que a segurança seja crítica ou que possua riscos à vida. Entretanto, o
> texto continua, esta restrição não se aplicará _no evento da ocorrência
> (certificado pelo United States Centers for Disease Control ou entidade
> sucessora) de infecção viral transmitida através de mordidas ou contatos com
> fluídos corporais que causem corpos humanos a reanimarem e buscarem consumir
> carne humana fresca, cérebros ou tecido nervoso e potencialmente resulte no
> fim da civilização organizada_.

IAM (https://aws.amazon.com/iam/) é o serviço
para gerenciamento de usuários em sua conta AWS, com permissões individuais e/ou
acessos temporários. É um serviço _global_, em que se pode criar políticas ou
utilizar as centenas gerenciadas pela própria AWS que cobre vários casos de uso.
É o serviço utilizado para determinar o escopo de serviços AWS e suas
aplicações, determinando, por exemplo, se determinada aplicação pode ou não
escrever ou ler determinada tabela no DynamoDB. Também é responsável por acesso
federado e tudo mais relacionado ao ciclo de vida das identidades em sua conta
AWS.

O IAM foi lançado pela AWS em maio de 2011 e, na comemoração de seus dez anos, no
evento re:Invent de 2021, foi declarado que este serviço lida com meio bilhão de
chamadas de API _por segundo_. É é um serviço crítico e deve ser tratado como
altamente escalável, altamente disponível e completamente gerenciado pela AWS
como parte do modelo de responsabilidade compartilhada, cabendo a você e às
organizações, é claro, a gestão do controle de acesso dos recursos através
deste.

### Termos

Antes de prosseguirmos, vamos aos termos chaves do IAM. É particularmente importante
conhecer os termos em inglês pois no IAM as políticas são
definidas em JSON e estes termos são utilizados para tanto compreender as
políticas como criar as suas próprias:

- **Principal**: as interações e requisições dentro da AWS podem ser pensadas
  como iniciadas por uma entidade, seja ela uma máquina, um evento ou uma pessoa
  com suas credenciais, externos ou da própria organização. Na AWS este entidade
  é chamada de _principal_.
- **Recurso** ou **resource**: os serviços que recebem as interações de um
  _principal_ são chamadas de _recursos_ ou _resources_.
- **Ação** ou **action**: o _principal_ atua em um _resource_ através de ações,
  as _actions_.
- **Usuário** ou **user**: são identidades que representam entidades que
  necessitam de acesso contínuo ao longo do tempo. Por "entidades", implica
  aplicações, _scripts_ e sistemas, mas também pessoas em seus mais diversos
  papéis. Podem possuir a combinação de usuário e senha para acesso ao painel
  administrativo ou um conjunto de chaves para o acesso programático, além de
  ambos ao mesmo tempo.
- **Papel** ou **role**: são identidades que podem ser assumidas para se ganhar
  acesso temporário a permissões. É ideal para situações em que o acesso a
  serviços ou recursos necessita ser permitido temporariamente. Também é uma
  excelente forma de conferir acesso para usuários de um SSO em contas com
  objetivos específicos.
- **Grupo** ou **group**: são coleções de usuários ou paéis IAM. Quando se
  associa uma política a um grupo, todos os seus membros recebem as mesmas
  permissões especificadas naquela política. É bem útil para administrar grupos
  de usuários com funções bem definidas, por exemplo, grupos de Operações,
  Pessoas Desenvolvedoras e Contabilidade, por exemplo.
- **Políticas** ou **policies**: se trata das regras de negócio que determinam o
  controle de acesso a determinados recursos. Todos os recursos são negados por
  padrão a não ser que sejam explicitamente permitidos. O resultado da avaliação
  de toda ação através das políticas é determinar se ela deve ser permitida ou
  negada. A permissão para agir em inglês é **allow** e a negação, **deny**.

## Princípio do menor privilégio

O Princípio do menor privilégio (também referenciado como PoLP, de _Principle of
Least Privilege_) é considerada uma prática primordial para garantir segurança e mecanismos de auditoria e controle. Basicamente, é atribuir a cada entidade somente as permissões necessárias para a realização de sua função e operação naquele determinado contexto.

No caso de um vazamento, por exemplo, de uma credencial, a superfície de ação fica limitada ao escopo de ação do usuário. Na prática, evite compartilhar credenciais para múltiplas pessoas e serviços, evite o uso de permissões totais (empregando o _wildcard_ `*`) e somente atribua políticas administrativas, gestões de usuários e políticas e com permissões de deleção de determinados recursos, somente quando estritamente necessário.

É fácil no dia a dia, atribuirmos as mais completas permissões para que possamos realizar nosso trabalho rapidamente, sem a necessidade de avaliar cada política necessária. Busque explorar o conceito aos poucos, principalmente em papéis e políticas específicas para determinados serviços, rapidamente diminui a fricção e permite a adoção do princípio do menor privilégio em todas as políticas que estiver trabalhando.

> **Autenticação e autorização**
>
> Antes de prosseguirmos, é importante realizar uma distinção que muitas vezes
> interagimos sempre mas se tratam de atividades e muitas vezes domínios
> apartados e entender sua granulidade e fundamentos é essencial.
> **Autenticação** é uma atividade de _gerenciamento de identidade_, é o
> mecanismo em que um principal conseguem se identificar e provar sua identidade
> para o sistema. Uma vez autenticado, este principal passa a operar de acordo
> com todos os recursos e realizar as ações aos quais está autorizado,
> assegurando a legitimidade da entidade. **Autorização** é uma atividade de
> controle de acesso em que se é determinado, através, seja da identidade
> autenticada, as circuntâncias em que a requisição foi realizada, os recursos
> alvo e pré-definições para que uma ação seja possível de ser realizada.


## Visão geral do Identity and Access Manager (IAM)

<figure class="extend">
    <img src="/assets/posts/iam/03_iam_visao_geral.png" alt="Identity and Access Management" style="border: 1px solid #BBB" />
</figure>

O IAM fornece uma forma de controle centralizada para determinar políticas de
acesso a usuários, grupos e papéis. Entretanto, além das políticas do IAM, existem as chamadas **permissões de acesso em nível de recurso**, que também fazem uso de
políticas, mas estas são _diretamente_ associadas a um determinado recurso e não
a uma identidade. Exemplos incluem buckets do Amazon S3, filas do Amazon SQS,
endpoints da VPC e chaves de criptografia do AWS Key Management Service (KMS).
Para verificar a lista de serviços que permitem permissões de acesso em nível de
recurso, a AWS mantém uma lista atualizada e divida por categoria, que pode ser
acessada em https://ibra.link/iam.

Existe um serviço que se usa a _todo momento_, mas raramente diretamente, cuja existência é importante conhecer: o AWS Security Token Service ou STS. É um serviço global que permite requisições temporárias, com credenciais de privilégio para os usuários do IAM. Toda vez que se autentica com qualquer tipo de credencial, esse serviço é utilizado para gerar sua sessão e possibilitar o acesso aos serviços.

## Credenciais

Senhas com a combinação de um usuário e senha são utilizadas para o acesso ao console de gerenciado na web, através do navegador. O uso de usuários e senhas são intencionados para usuários reais, e sujeitos a políticas predefinidas, que você pode configurar tais como rotação a cada determinado período, número mínimo de caracteres, a obrigatoriedade de caracteres alfa-numéricos, dentre outros.

As chaves-acesso ou _access keys_, em inglês, são utilizadas com ferramentas como linhas de comando em sua máquina. São dois conjuntos de caracteres, uma sendo a "id", que é um conjunto de caracteres em caixa alta no formato "AXXXXXXXXXXXXXXXXXXX", e então, o segredo, que é um conjunto de 40 caracteres com caixa alta e baixa. Este conjunto é para ser utilizado por serviços, não apenas usuários.

Chaves de acesso que iniciam com "AKIA" são as chaves normais. Chaves de acesso que iniciam com "ASIA" são chaves temporárias/ de sessão do STS, e vão requerer um parâmetro adicional, o "SessionToken", para ser enviado junto da id e do segredo. Geralmente, essas operações são conduzidas pelas bibliotecas e outros softwares, mas é importante conhecer esta distinção no caso de estar lidando diretamente com as chaves de acesso. É um caso de uso mais complexo e, se precisar utilizá-lo, recomendo explorar na documentação.

Autenticação em múltiplos fatores ou _Multi-factor authentication_ (MFA) é uma prática recomendada para todos os usuários que se trata de utilizar um segundo dispositivo, que gera um conjunto aleatório de senhas, como uma camada extra de proteção para o processo de autenticação.

## Políticas

Políticas definem de forma declarativa em formato de _JavaScript Object
Notation_ (_JSON_) quais as ações permitidas, negadas, para quais serviços, em que
condições e recursos. São atribuídas a usuários, grupos e papéis ou _roles_.
Existem basicamente em um primeiro nível dois tipos de políticas: gerenciadas e
criadas pelo usuário. As gerenciadas se tratam de políticas definidas pela
própria AWS que definem um conjunto de boas práticas para casos de uso comuns.
As políticas criadas pelo usuário são aquelas que criamos conforme nossas
necessidades específicas para atender a demandas próprias.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::nome-do-seu-bucket/*"
    }
  ]
}
```

O código exibido anteriormente é uma simples política que tem uma declaração
permitindo apenas uma ação, para qualquer ator (`*`) em um determinado bucket no
S3. Isso literalmente tornaria os objetos públicos do bucket. Quando um
navegador, por exemplo, carrega uma imagem, este fez uma ação GET na url passada,
que sendo de um objeto neste bucket determinado, seria carregada, no acesso da
página.

### Elementos de uma política


Se você esperava que política ficasse fora de um livro de tecnologia - mas é
essencial para manter segurança e que nossos sistemas funcionem da forma que
esperamos. No IAM, é essencial dominar políticas e como funcionam.
Todos os elementos da política devem ser escritos em inglês, e a convenção é o
uso das palavras capitalizadas.

- **Version (Versão)**: se trata de um elemento _obrigatório_ das políticas e
  não se trata de versões de políticas. Este elemento se trata do conjunto de
  regras e definições que vamos explorar e que definem sua especificação. Hoje
  há um único valor possível, `2012-10-17`, para o funcionamento correto, já que se refere ao _runtime_ que vai interpretar o arquivo. Não se trata da _sua_ versão da política. A versão anterior, `2008-10-17` foi depreciada.
- **Id**: para serviços que permitem estabelecer identidades. A Amazon
  recomenda utilizar um UUID (_Universally Unique Idenfier_, identificadores
  globais únicos. Existem diversas bibliotecas e abordagens para sua geração) ou
  incorporar um UUID como parte do ID para assegurar que seja único.
- **Statement (Declaração)**: é o principal elemento de uma política e é
  _obrigatório_. Pode conter uma única declaração `"Statement": {...}` ou um
  conjunto, em forma de uma array de declarações individuais
  `"Statement": [{...},{...},{...}]`.

### Elementos de uma declaração

- **Sid (Id da declaração)**: você pode definir este elemento opcional para
  cada declaração. O Sid deve ser único dentro de uma política. Ainda que este
  valor não seja exposto pela API do IAM, alguns serviços, como
  Amazon SQS e Amazon SNS, podem exigir este elemento e ter suas próprias
  regras para ele. É necessário conhecer a documentação de cada serviço com
  o qual se vai trabalhar.
- **Effect (Efeito)**: por padrão, todo acesso é negado. Para permitir acesso a
  qualquer recurso é necessário ter este elemento definido para permissão
  `"Effect": "Allow"`.
- **Principal**: políticas baseadas em recursos são políticas para trabalhar com
  _roles_ ou papéis e este elemento determina qual _role_ pode assumir esta
  política. Para acessos entre contas, por exemplo, aqui pode ser passada a
  identificação da conta `"Principal": { "AWS": "999900009999"` }.
- **NotPrincipal**: faz exatamente o oposto do elemento anterior, negando
  explicitamente o acesso de um _principal_. A AWS recomenda explorar outras
  opções de gestão de acesso antes de decidir pelo uso desta, sendo utilizada em poucos cenários.
- **Action (Ação)**: como declaração, pode conter uma única ação
  `"Action": "ec2:StartInstances"` ou uma array de ações individuais
  `"Action": [ "ec2:StartInstances", "s3:GetObject" ]`. Este valor é composto
  pelo nome do serviço como um prefixo da ação, seguido da ação. Por convenção e
  melhor leitura adota-se o uso do padrão PascalCase e os prefixos em
  minúsculas, mas essa regra não é necessária para seu funcionamento esperado.
  Tanto `ec2:StartInstances` como `EC2:startinstances`, por exemplo, são
  válidos, mas recomenda-se seguir o padrão adotado. Assim como em Principal,
  existe o elemento **NotAction** em que explicitamente nega uma ação para
  aquela declaração e principal.
- **Resource (Recurso)**: especifica o recurso individual ou array de recursos
  individuais. Cada serviço possui seu próprio conjunto de recursos e sempre
  são referenciados através de seu ARN. Como os outros elementos de declaração,
  para explicitamente negar um recurso, é possível utilizar **NotResource**.
- **Conditions (Condições)**: este bloco da política, que é _opcional_, permite
  especificar condições para que a política seja aplicada, utilizando operadores
  que vamos em breve abordar.

## Avaliando políticas

Uma heurística simples de avaliação explorada por Adrian Cantrill é
_DENY-ALLOW-DENY_. Embora a relação entre políticas seja complexa, essa
heurística pode ajudar a realizar avaliações de forma rápida e assertiva. Todas
as permissões começam como negadas (_DENY_); se existe uma permissão explícita
(_ALLOW_) então pode ser executada; mas pode haver uma condição, política
conflitante ou outro recurso superior que a nega (_DENY_).

Se houver uma negação explícita a uma ação, sempre resultará em negação.
Entretanto, a lógica de avaliação de políticas é mais complexa e esta heurística
embora seja uma ferramenta útil e prática, não descreve em profundidade todos os passos de avaliação de políticas, que exploramos a seguir.

<figure class="extend">
    <img src="/assets/posts/iam/03_aval_deny.png" alt="Identity and Access Management" style="border: 1px solid #BBB" />
</figure>

A primeira avaliação determina inicia como negada, verifica todas políticas e no caso de uma negação explícita a decisão final é a negação de acesso, em caso contrário, segue com a avaliação

<figure class="extend">
    <img src="/assets/posts/iam/03_aval_scp.png" alt="Identity and Access Management" style="border: 1px solid #BBB" />
</figure>

Avançando-se, determina-se a existência de alguma _service control policy_ (SCPs) ou política de controle de serviços. São um tipo especial de permissões atribuídas a contas dentro de uma organização, que pode ser composta de diversas contas com SCPs diferentes, e que permitem ou negam acesso a serviços ou recursos de uma forma global, ignorando qualquer outro tipo de acesso definido dentro daquela determinada conta.

<figure class="extend">
    <img src="/assets/posts/iam/03_aval_resource.png" alt="Identity and Access Management" style="border: 1px solid #BBB" />
</figure>

A próxima avaliação ocorre no nível do recurso sendo acessado. Havendo um _DENY_, o processo de avaliação é imediatamente encerrado.

<figure class="extend">
    <img src="/assets/posts/iam/03_aval_identity.png" alt="Identity and Access Management" style="border: 1px solid #BBB" />
</figure>

Em seguida, a identidade (usuários e papéis) são avaliados com a combinação de suas políticas associadas e as políticas associadas aos seus grupos, caso estes façam parte de algum grupo. Note que nesta interação se um grupo do qual o usuário faz parte nega uma ação, mesmo que seu usuário tenha um determinado acesso, ele é negado. Uma negação sempre prevalece a uma permissão.

<figure class="extend">
    <img src="/assets/posts/iam/03_aval_boundary.png" alt="Identity and Access Management" style="border: 1px solid #BBB" />
</figure>

Após avaliar as identidades, resta avaliar se existe algum tipo de limite de permissão para haver um controle mais específico e controlado do raio de ação, cujo uso veremos em breve.

<figure class="extend">
    <img src="/assets/posts/iam/03_aval_sessions.png" alt="Identity and Access Management" style="border: 1px solid #BBB" />
</figure>

E por fim, ao se a validar sessão atual, geralmente empregada em _roles_, caso seu cookie ainda é válido no navegador, utilizando o STS para esta avaliação.

## Variáveis e condições em políticas

Além da biblioteca de políticas gerenciadas pela própria AWS, é fundamental conhecer como criar suas políticas para atender a seu contexto e casos de uso particulares. Como vimos, se trata de um JSON, com regras especiais. A AWS oferece uma ferramenta visual de criações de política no próprio console de gerenciamento.

### Condições

Os blocos de condições, ou `Conditions`, permitem que você determine condições lógicas específicas nas quais aquela política tem efeito.

```json
// Exemplo de bloco de condição

{
  "Version": "2012-10-17",
  "Statement": [
    {
      ...
      "Condition" : {
        "<OPERADOR DA CONDIÇÃO>" : {
          "<CHAVE DA CONDIÇÃO>" : "<VALOR DA CONDIÇÃO>"
        }
      }
    }
  ]
}

```

O operador de condição ou _condition operator_ possui várias categorias para cobrir diversos casos de lógicas. Determinam áreas para quais o seu conjunto de chave e valores da condição serão checados. Ainda que o _runtime_ do IAM seja versionado, verifique nas referências deste capítulo o endereço para a documentação de operadores de condição caso não encontre alguma que lhe satisfaça ou encontre algum erro. Existem também formas de criar operadores com um conjunto de múltiplas-chaves e valores, para este caso de uso, por favor, use como referência a documentação oficial.


### Operadores de strings

Para comparar a chave da condição com o valor tratado como texto ou string.

| Operado de condição | Efeito |
|---------------------|--------|
|           `StringEquals`         | A condição é satisfeita exatamente. _Case sensitive_ |
|           `StringNotEquals`        |   A condição não é satisfeita. Note que esta vai  satisfazer _qualquer_ string que não seja a definida.    |
|            `StringEqualsIgnoreCase`         |    A condição é satisfeita exatamente. _Case insensitive_    |
|            `StringNotEqualsIgnoreCase`         |    A condição não é satisfeita. _Case insensitive_    |
|            `StringLike`         |    Permite utilizar operadores _wildcard_ como `*` e `?` para validar as strings. O wildcard `*` valida múltiplos caracteres. Por exemplo, com `user-*`, a condição seria satisfeita com `user-1` ou `user-pedro` e assim por diante. Já o wildcard `?` só satisfaz com um único caractere, portanto `user-1` nos satisfaria enquanto `user-pedro`, não. É muito útil para criar estilos de autorização RBAC com padrões de nomeações predefinidos.  _Case sensitive_   |
|            `StringNotLike`         |    Permite determinar uma condição para não satisfazer com o uso dos wildcards descritos acima. _Case sensitive_    |

### Operadores numéricos

Para comparar a chave da condição com o valor de números.

| Operado de condição | Efeito |
|---------------------|--------|
|           `NumericEquals`         | A condição é satisfeita exatamente |
|           `NumericNotEquals`         | Nega o valor |
|           `NumericLessThan`         | O valor comparado é menor, `x < y`   |
|           `NumericLessThanEquals`         | O valor comparado é menor ou igual, `x <= y`   |
|           `NumericGreaterThan`         | O valor comparado é maior, `x > y`   |
|           `NumericGreaterThanEquals`         | O valor comparado é maior ou igual, `x >= y`   |


### Operadores de datas

Para comparar a chave da condição com uma data. Existem valores de chaves específicos que retornam o momento atual, sendo eles `aws:CurrentTime` e `aws:EpochTime`. Caso deseje determinar uma data específica, deve seguir o formato da implementação do ISO 8601 da W3C (verifique as referências para saber mais).

| Operado de condição | Efeito |
|---------------------|--------|
|           `DateEquals`         | A condição é satisfeita exatamente |
|           `DateNotEquals`         | Nega o valor da data |
|           `DateLessThan`         | O valor comparado ocorre anterior a uma data, `x < y`   |
|           `DateLessThanEquals`         | O valor comparado ocorre anterior a uma data ou seu valor exato, `x <= y`   |
|           `DateGreaterThan`         | O valor comparado ocorre após a uma data, `x > y`   |
|           `DateGreaterThanEquals`         | O valor comparado ocorre após a uma data ou seu valor exato, `x >= y`   |


### Operadores de endereços IPs

Para comparar a chave da condição com o valor de IPs no formato padrão CIDR. A chave `aws:SourceIp` pode ser utilizada para retornar o valor do IP realizando a requisição. Se você não passar o prefixo associado de rota, será utilizado o valor padrão `/32`. Pode ser utilizado tanto o IPv6, para os serviços que suportam o padrão, e neste caso pode utilizar `::` para representar `0`s.

| Operador de condição | Efeito |
|---------------------|--------|
|           `IpAddress`         | Determina o IP que satisfaz |
|           `NotIpAddress`         | Todos os IPs, menos o passado |

### Operadores de Amazon Resource Name (ARN)

O ARN é considerado uma string, mas possui um padrão específico e possui escopos de uso bem definidos dentro da AWS, já que determina acessos específicos a seus recursos.

| Operador de condição | Efeito |
|---------------------|--------|
|           `ArnEquals`, `ArnLike`         | Permitem utilizar operadores _wildcard_ como `*` e `?` para validar as strings e comportam-se igualmente |
|           `ArnNotEquals`, `ArnNotLike`        |  Permitem determinar ARNs para não satisfazer com o uso dos wildcards descritos. |


### Operadores Booleanos

Você pode comparar diretamente uma chave a um valor booleano, ou seja, verdadeiro com `true` ou falso com `false`.

```json
// Exemplo que utiliza a chave `aws:SecureTransport`, que retorna se a requisição foi realizada com o uso de SSL/TSL ou não.

{
  ...
  "Condition": {
    "Bool": {
      "aws:SecureTransport": true
    }
  }
}

// Note que esta condição será avaliada na política mas dependerá do efeito de permissão ou negação dela. Ao negar ("'Effect': 'Deny'") a condição deste exemplo, a política _não aceitaria_ nenhuma requisição realizada sob SSL/TSL, pois negaria esta condição. Caso esta fosse `false`, somente permitiria conexões seguras.
```

### Operador Binário

Você pode comprar uma chave com o valor em base-64 retornado.

```json
// Exemplo do uso do operador Binário

{
  ...
  "Condition": {
    "Binary": {
      "<CHAVE>": "QWNlc3NlIGlicmFoaW1jZXNhci5jbG91ZA=="
    }
  }
}
```

### Null

Este operador permite determinar em formato booleano, com `true` ou `false`, se uma chave de condição está ou não presente no momento da autorização.

### ...IfExists

Este operador é um sufixo que pode ser aplicado a qualquer operador de condição citado anteriormente, com exceção de `Null`. Por exemplo, `IpAddressIfExists` permite avaliar a existência do IP apenas se ele estiver presente na requisição. É um modificador de operador extremamente útil pois, se por algum motivo seu valor, caso seja dinâmico, não seja provido da forma esperada ou mesmo em um contexto específico não retornar nenhum valor, pode gerar efeitos esperados. Este modificador permite avaliar a existência de algo antes de aplicar o operador.

## Valores globais de condições

| Valor | Descrição |
|-------|---------------------|
|           `aws:CalledVia`         | Retorna um ou mais valores dos serviços pelos quais foi invocado.   |
|           `aws:CalledFirst`         | Retorna o serviço que iniciou a requisição |
|           `aws:CalledLast`         | Retorna o último serviço que processou a requisição |
|           `aws:CurrentTime`         | Data e hora da requisição a qual a política está sendo avaliada |
|           `aws:EpochTime`         | Utiliza como base o padrão Unix |
|           `aws:FederatedProvider`         | Retorna o provedor de identidade (idP) do principal, que pode ser a AWS ou um terceiro |
|           `aws:MultiFactorAuthAge`         | Retorna o número em segundos, desde que a autorização por MFA foi realizada. |
|           `aws:MultiFactorAuthPresent`         | Somente presente se o usuário utilizou chaves de acesso temporário. Recomendamos criar condições com o tipo `...IfExists` |
|           `aws:PrincipalAccount`         | Retorna a conta do principal realizando a requisição |
|           `aws:PrincipalArn`         | Retorna o ARN do principal realizando a requisição |
|           `aws:PrincipalAWSService`         | Presente em solicitações de API assinadas utilizando credenciais da AWS |
|           `aws:PrincipalOrgID`         | Retorna o id organização do principal, caso pertença a uma organização. |
|           `aws:PrincipalOrgPaths`         | Retorna o caminho da organização, caso pertença a uma organização. |
|           `aws:PrincipalServiceName`         | Somente presente quando a chamada é feita por uma entidade de segurança da AWS |
|           `aws:PrincipalServiceNamesList`         | Igual ao anterior, retornando valores múltiplos |
|           `aws:PrincipalTag/<TAG>`         | Verifica a presença de uma tag associada ao principal |
|           `aws:PrincipalType`         | Retorna o tipo de principal da requisição |
|           `aws:referer`         | Fornecido pelo cabeçalho ou _header_ da requisição HTTP. _Nota de segurança_:  Não recomento o uso deste valor, pois ele pode facilmente ser alterado no momento do envio da requisição |
|           `aws:RequestedRegion`         | Retorna a região da AWS que a chamada foi realizada |
|           `aws:RequestTag/<TAG>`         | Verifica a presença de uma tag associadas com a requisição |
|           `aws:Resource/<TAG>`         | Verifica a presença de uma tag associadas com os recursos sendo avaliados pela política |
|           `aws:SecureTransport`         | Retorna se a requisição foi realizada utilizando SSL/TSL |
|           `aws:SourceAccount`         | Id da conta do recurso que iniciou a requisição |
|           `aws:SourceArn`         | ARN de um serviço realizando uma requisição a outro serviço |
|           `aws:SourceIdentity`         | Identidade da fonte |
|           `aws:SourceIp`         | IP da requisição. Somente disponível para IPs públicos. |
|           `aws:SourceVpc`         | Retorna a VPC na qual a requisição originou-se |
|           `aws:Vpce`         | Retorna o endpoint da VPC de origem |
|           `aws:TagKeys`         | Retorna valores múltiplos de chaves-valores associados à requisição |
|           `aws:TokenIssueTime`         | Data e hora da emissão das credenciais temporárias |
|           `aws:UserAgent`         | Outro valor fornecido através do cabeçalho da requisição HTTP e a mesma consideração de segurança se aplica |
|           `aws:userid`         | Id do principal solicitante |
|           `aws:username`         | Nome do principal solicitante |
|           `aws:ViaAWSService`         | Retorna `true` ou `false`, dependendo se foi uma requisição de um serviço da AWS para outro serviço|
|           `aws:ViaSourceIp`         | Retorna o IP associado a uma VPC, caso presente |

Existem valores específicos de serviços além do global, como `iam:*` e `sts:*`. Você poderá encontrar mais informações sobre esses recursos nas referências do capítulo.

### Variáveis

Variáveis de política permitem variados casos de uso, com seu poder de trabalhar com os valores disponíveis no momento da requisição, como usuário entre outros. Todos os valores globais de condições e de serviços estão disponíveis para uso.

Uma variável é sempre definida com o prefixo `$` seguido por um par de chaves `{}` com a referência que será substituída pelo valor no momento de avaliação, por exemplo, `${aws:userid}`, que retornará o id do usuário que está tentando realizar a ação para qual esta política tem algum efeito.

### Tags

O uso de tags em recursos é uma poderosa ferramenta. Pode ser utilizado em diversos serviços, como por exemplo, na gestão de custo, mas também demonstra sua versatilidade na avaliação de políticas. com isso, você pode utilizar os valores retornados em `aws:RequestTag/<TAG>` e `aws:PrincipalTag/<TAG>` e assim determinar uma tag a uma condição que necessita ser satisfeita. Você também pode utilizar o valor `aws:TagKeys`, que retorna todas as tags associadas, porém, será necessário lidar com o retorno de um conjunto de múltiplas chaves e valores.

## Fronteiras de permissão ou Permission boundaries

_Permission boundaries_ ou fronteiras de permissão são políticas específicas que determinam um conjunto de políticas associadas a um _papel_ que, quando assumidos por um usuário, determina as políticas que este possui acesso naquele contexto. É uma forma de diminuir o privilégio ao lidar com um determinado recurso, como a definição de um conjunto máximo de permissões. 

Inicialmente parece um conceito complexo, mas se trata de uma poderosa ferramenta para empregar o princípio de menor privilégio. Imagine que existam dois usuários, Ana que possui as seguintes políticas: A, B, C e D. Bruno, nosso segundo usuário possui B, C e D. E termos Carla, com acesso a C, D, E. Uma fronteira de permissão que apenas permite as ações C e D, limitaria todos a realizar apenas estas políticas específicas no determinado recurso, não importando a existência de outras permissões.


<figure class="extend">
    <img src="/assets/posts/iam/03_permission_boundaries.png" alt="Identity and Access Management" style="border: 1px solid #BBB" />
</figure>


Este conjunto reduzido de permissões, por assim dizer, pode ser associado a um usuário, papéis, organizações, grupos de usuários e sessões federadas de usuários.

### Serviços auxiliares

- **AWS Policy Simulator**: permite simular a ação de suas políticas, o que torna sua escrita, manutenção e teste mais simplificados. Deve sempre ser sua primeira opção para teste, diagnosticar problemas de acesso e verificar conformidade do princípio de menor privilégio.
- **AWS Trusted Advisor**: um serviço extremamente completo da AWS que analisa seu ambiente e sugere ações para as práticas recomendadas. As verificações dependem do tipo de suporte que a conta contratar, mas desde o plano mais básico é possível ter acesso às principais verificações de segurança. Não deixe de explorar esse serviço e seguir suas recomendações.

## Boas práticas do IAM

Segue uma _checklist_ condensando várias dos conceitos aqui apresentados e altamente recomendados pela própria AWS, disponível em https://ibra.link/iam/best-practices:

| Ação |   |
|------|---|
|  Não utilize e proteja suas credenciais do usuário raíz ou _root_ de sua conta AWS
|  Utilize papéis ou _roles_ para delegar permissões
|  Utilize os menores privilégios para cada identidade
|  Inicie utilizando permissões com políticas gerenciadas pela AWS
|  Valide suas políticas
|  Utilize políticas gerenciadas ao invés de políticas _inline_
|  Utilize níveis de acesso para revisar permissões IAM
|  Configure uma política de senha robusta para seus usuários
|  Habilite MFA
|  Utilize papéis ou _roles_ que rodem em uma instância EC2
|  Não compartilhe chaves de acesso
|  Rotacione credenciais regularmente
|  Remoca credenciais desnecessárias
|  Use políticas condicionais para extra segurança
|  Monitore a atividade em sua conta AWS


### Referências adicionais

- **AWS Identity and Access Management (IAM)**  
[https://ibra.link/iam](https://ibra.link/iam)
- **Documentação do IAM**  
[https://ibra.link/docs/iam](https://ibra.link/docs/iam)
- **Boas práticas do IAM**  
[https://ibra.link/iam/praticas](https://ibra.link/iam/praticas)
- **Documentação do IAM para operadores em condições**  
[https://ibra.link/iam/operadores](https://ibra.link/iam/operadores)
- **Documentação do IAM para valores de serviços em condição**  
[https://ibra.link/iam/valores-servicos](https://ibra.link/iam/valores-servicos)
- **Documentação do IAM para múltiplas chaves e valores**  
[https://ibra.link/iam/multiplicidade](https://ibra.link/iam/multiplicidade)
- **Documentação do AWS Security Token Service (STS)**  
[https://ibra.link/docs/sts](https://ibra.link/docs/sts)
- **AWS Policy Simulator (leva ao seu console, portanto é necessário ter realizado o login)**:  
[https://ibra.link/iam/simulator](https://ibra.link//iam/simulator)
- **AWS Trusted Advisor**:  
[https://ibra.link/trusted-advisor](https://ibra.link/trusted-advisor)