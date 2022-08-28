---
title: "⛅ #jornadaaws: CDK Bootstrapping"
description: Instalando e iniciando o Bootstrapping do CDK em sua conta
featured: true
pubDate: "2021-10-20T10:50:00.000Z"
image: ~/assets/images/code-code.jpg
---

<p class="lead">Tudo o que é possível fazer na AWS é possível fazer através do "console" web. A área logada em que é possível acessar serviço por serviço, criar, verificar, editar e destruir novos recursos. Mas o ideal é ter toda a sua infraestrutura como código. Há diversas opções. mas vou me concentrar no CDK. Neste vídeo mostro bem rapidamente como instalar e fazer o boostrapping do CDK, que cria um <em>bucket</em> em sua conta para gerenciar recursos e ações.</p>

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'>
<iframe title="YouTube" width="560" height="315" src="https://www.youtube.com/embed/12uM8Qy39xo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


- [Instale a CLI da Amazon](https://aws.amazon.com/pt/cli/)
- Configure sua conta `aws configure`
- Instale o CDK de forma global `npm install -g aws-cdk`
- Faça o boostrapping na conta em que deseja `cdk bootstrap aws://<ACCOUNT-NUMBER>/<AWS-REGION>`, que aceita também múltiplos valores de `aws://...`


[AWS Cloud Development Kit](https://aws.amazon.com/pt/cdk/)