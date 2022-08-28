---
title: Certificar ou não? Eis a questão
tags: writing
description: "Em agosto me certifiquei como AWS Certified Cloud Practitioner e compartilho aqui minhas impressões e motivações"
featured: true
pubDate: "2020-09-06T10:50:00.000Z"
image: "~/assets/images/colors.jpg"
---

<p class="lead">Certificar ou não? Eis a questão. Em 04 de agosto de 2020 fiz o exame para AWS Certified Cloud Practitioner, que é o nível mais básico de certificação da AWS A pedido de uma amiga e ex-colega de trabalho vou compartilhar minha motivação, plano de estudo e passo a passo que eu fiz, e compartilhei anteriormente em uma thread no Twitter, que agora transcrevo para cá no blogs, para ser encontrado mais fácil e conveniência de colecionar ideias & experiências.</p>

## Motivação

Antes de tudo, a decisão de fazer a [certificação](https://aws.amazon.com/pt/certification/). É um investimento, e caro. 100 dólares para o brasileiro CLT é um investimento alto, e precisa ser planejado. Eu alinhei com um período que iria receber minhas férias mais economias para dar certo. As certificações superiores custam ainda mais, 150 para o Solutions Architect Associate por exemplo (o lado interessante de _passar_ é que você ganha um cupom de 50% de desconto em seu próximo exame). Então eu diria para antes de tudo, se planejar financeiramente.

No meu trabalho nem certificação é compulsória ou eu ganho qualquer benefício — na área uma certificação que pode significar um aumento significativo no salário, já que possui uma equipe certificada em seus contratos com grandes empresas, que conferem mais segurança para todos. Por que eu fiz? Sem dúvida tem uma coisa de "auto-validação". Eu não sou formado em Ciências da Computação, TI ou algo assim. Não tenho nenhum MBA (e nem sobra dinheiro ou banda cognitiva para). Já tenho mais de 30 e geralmente **quem pode dizer que formação na área ou diploma não vale nada geralmente já tem diploma, ou tem capital** para empreender ou está a tanto tempo na área com contatos que se sente confortável em conseguir colocação profissional sem esse tipo de validação

E eu também tenho um cargo de liderança. Quando esbarramos em algo técnico ou mesmo gerencial o meu alarme soa e fico esperando a **Polícia da Síndrome do Impostor** bater na minha porta e retirar de mim os direitos de me chamar desenvolvedor. Outro fator foi também exatamente essa da minha posição. Quero explorar qualificar a equipe e isso vai passar por treinamentos e quando se sentirem confortáveis por certificações. E vejo isso como um ganha-ganha

Somos uma equipe de tecnologia pequena e ainda precisa ser construído essa cultura de aperfeiçoamento, mas ando me esforçando para ao menos uma vez por semana ter uma seção sobre algum tópico importante que eu chamo de "Imersões". E quis iniciar pela "porta de entrada" para dar segurança a todas as pessoas da equipe e é claro, a mim mesmo.

Pronto já falei demais das minhas motivações.

## Preparação

Eu decidi fazer o exame e me preparei por umas duas ou três semanas. Não sei se indico. Qaundo fico obcecado com um assunto, qualquer momento que não estou em tarefas do trabalhos e entre elas, nos meus "descansos", eu passo devorando.

A Amazon tem muitos [recursos e treinamentos gratuitos](https://t.co/aGwMPwHFTp?amp=1) e honestamente, cobre tudo o que é questionado. Algumas questões são baseadas em cenários "se uma empresa com RDS..." e estas exigem mais ligar os pontos ou explorações que nem sempre estarão claras só estudando por lá. O que faz todo o sentido para um exame que tenta ser uma validação do conhecimento prático. Não adianta saber os níveis de armazenamento do S3 se colocado um cenário, não ser capaz de indicar qual melhor se encaixa naquele cenário. Tudo em arquitetura de software são tradeoffs. E na AWS não é diferente.

Todo esse conteúdo, é claro, em inglês.

Inglês, eu sempre bato nessa tecla (ou teclas pois eu preciso teclar 8 vezes para escrever Inglês) deve ser sua "primeira linguagem", quando se fala de programar. Somos colonizados tecnologicamente e as próprias palavras e gramática das grandes linguagens são centradas no inglês. As stack traces são em inglês, os melhores fóruns, o contato com issues no github e a maioria das documentações. E saber ler e interpretar documentações é vital.

**Pequeno parêntese:** Mesmo lendo bem inglês eu levei um certo tempo para realmente ler as stack traces. Eu diria que na maioria das vezes as _stack traces_ dizem exatamente o que precisa fazer, ou te dá uma pista de por onde começar e os anos vão me mostrando o quanto uma grande parte dos desenvolvedores, incluindo alguns que se tem em alta conta, parecem não ler as stack traces e partir para o StackOverflow.

Cada produto ou conceito da Amazon, como o [Well-Architected Framework](https://aws.amazon.com/pt/architecture/well-architected/?wa-lens-whitepapers.sort-by=item.additionalFields.sortDate&wa-lens-whitepapers.sort-order=desc) possui whitepapers em mais de um formato, como HTML, PDF e Kindle. Alguns inclusive em português, mas a maioria é em inglês mesmo. Ter uma familiaridade com os white papers do Well-Architected Framework é vital. Não só para o exame inclusive, você vai se tornar um desenvolvedor cloud melhor só de ler. Sério, é tão bom assim.

Nas centenas de serviços sempre tem uma aba "Resouces" ou "Recursos" que leva a mais materiais sobre o produto, APIs, métodos. Eu li vários desses documentos, como eu tenho o Kindle para mim foi fácil, custam 0,00 e como eu leio um tempo antes de dormir ia avançando sempre. 

O melhor curso que eu fiz foi o da [A Cloud Guru na Udemy](https://udemy.com/share/101WaCB0cTcF8=/) que eu paguei uns 30 reais naqueles eternos descontos por tempo limitado deles. O curso é na verdade para o Architect Associate mas por isso mesmo me deu muito mais segurança. Queria poder pagar a 
[A Cloud Guru](https://acloudguru.com/) para continuar estudando com eles. Mas 30 dólares mês com nosso câmbio, fica impossível.

Outro "curso" importante no Udemy foi ["AWS Certified Practitioner: 6 Full Practice Exam Tests"](https://udemy.com/share/1013maB0cTcF8=/) que é menos um curso e mais seis simulados. O bacana é que cada reposta vem muito bem explicada qual a opção correta e talvez o mais interessante porque as outras não são corretas. E é muito parecido com a experiência do exame em si.

Há perguntas que caíram no meu exame exatamente iguais ou o reverso! E ao final, sempre te diz se você seria potencialmente aprovado ou não — para passar você precisa de pelo menos 70% de acertos.

O YouTube foi um recurso interessante, mas não focado. Honestamente os vídeos de certificação que achei só repetiam o básico do básico das áreas de testes sem nada muito útil. Na real, muito mais do mesmo.

Mas o meu consumo "normal" do YouTube vendo tutoriais específicos de usar ferramentas como o SAM, Lambda, etc, enriqueceram muito meu conhecimento e me permitiam justamente "ligar os pontos"  que as perguntas baseadas em cenário exigem. 

Mas nada substitui... por a mão na massa. Crie uma conta na AWS e explore alguns recursos. Mas chegou perto de alguns, você já pagando. O lado bom é que como a maioria dos serviços é on-demand e mesmo cobrado por segundos, lembre-se de destruir todos os ambientes e desligar os serviços.

Por isso, já aprenda a criar alarmes no CloudWatch, assim você já mexe em um serviço essencial de logs e cria um alarme para sua conta:

<iframe width="560" height="315" src="https://www.youtube.com/embed/ORazuFghKFI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A minha conta pessoal e meu alarme me avisa por email a qualquer momento que eu for gastar mais de 5 dólares em um mês. A AWS também fornece *free tiers* imensos para alguns casos, mas a aba de preços é em alguns casos bem complexa, mas essencial.

E é claro, eu venho trabalhando com a AWS a alguns anos, mas nunca tinha ido tão a fundo ou me inteirado de coisas tão necessárias que eu simplesmente desconhecia. Me preparar para a certificação me fez sair dos serviços e do básico e ter um domínio maior do todo. Acredito que esse seja uma das razões inclusive para existir certificações, que por muito tempo atrás só achava burocracia. Te faz focar e ter uma visão mais abrangente e o certificado é uma métrica de seu domínio nisso.

## E agora, Cloud Pratitioner?

Meu objetivo é me tornar em breve certificado como **Solutions Architect Professional**. Mas vou me planejar com calma e respirar um pouco após esta maratona para passar nesse exame. E com certeza, os próximos ou próximo serão ainda mais difíceis! Mas me motiva aprender e aplicar conhecimento sempre.