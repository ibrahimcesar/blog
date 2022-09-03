---
title: "⛅ #jornadaaws: CDK Bootstrapping"
description: Instalando e iniciando o Bootstrapping do CDK em sua conta
featured: true
pubDate: "2021-10-20T10:50:00.000Z"
image: ~/assets/images/code-code.jpg
socialImage: "/features/cdk-bootstrap.png"
---

<p class="lead">Tudo o que é possível fazer na AWS é possível fazer através do "console" web. A área logada em que é possível acessar serviço por serviço, criar, verificar, editar e destruir novos recursos. Mas o ideal é ter toda a sua infraestrutura como código. Há diversas opções. mas vou me concentrar no CDK. Neste vídeo mostro bem rapidamente como instalar e fazer o boostrapping do CDK, que cria um <em>bucket</em> em sua conta para gerenciar recursos e ações.</p>

<div class='yt-frame'>
<iframe title="YouTube" width="560" height="315" src="https://www.youtube.com/embed/12uM8Qy39xo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


- [Instale a CLI da Amazon](https://aws.amazon.com/pt/cli/)
- Configure sua conta `aws configure`
- Instale o CDK de forma global `npm install -g aws-cdk`
- Faça o boostrapping na conta em que deseja `cdk bootstrap aws://<ACCOUNT-NUMBER>/<AWS-REGION>`, que aceita também múltiplos valores de `aws://...`


[AWS Cloud Development Kit](https://aws.amazon.com/pt/cdk/)