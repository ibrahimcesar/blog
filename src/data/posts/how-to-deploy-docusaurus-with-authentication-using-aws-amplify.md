---
title: How to deploy Docusaurus with authentication using AWS Amplify
description: "Most of the user cases for documentation besides open source require some level of auth. Working remote, this is a simple way to deploy your documentation."
featured: true
permalink: "/blog/how-to-deploy-docusaurus-with-authentication-using-aws-amplify/"
featuredImage: dino.jpg
date: "2021-01-27T10:50:00.000Z"
image: cover.png
featuredImageColor: "#1E2C54"
language: en
---

<p class="lead"><b>Deploy fast your documentation with authentication with AWS Amplify</b>. <a href="https://v2.docusaurus.io/" target="_blank" alt="Docusaurus">Docusaurus</a> is a great documentation tool. The best, even to collaborate with non-technical people. Deploying and securing through an authentication is always a question I see developers facing. Most of the user cases for documentation besides open source require some level of auth. Working remote, this is a simple way to deploy your documentation.

</p>

#### After reading this

- You will now how to deploy Docusaurus using AWS Amplify, lacking in [Docusaurus docs itself](https://v2.docusaurus.io/docs/deployment), which I will submit a PR
- Use Continuous Integration provided by AWS Amplify to always keep your docs up to date
- Implement the minimum auth necessary to protect your docs from the world

#### What I will NOT cover

- How to set up Docusaurus. Please [follow the instructions in the official docs](https://v2.docusaurus.io/docs/installation). Which is basically run `npx @docusaurus/init@latest init my-website classic` to create a scaffold project
- How to set up the repository for your code being deployed at each new commit to a specific branch.

## Deploying

First, [install and configure Amplify in your machine](https://docs.amplify.aws/cli/start/install). After this create a `amplify.yml` file to the root of your project, commit and push.

```yaml
version: 1
backend:
  phases:
    build:
      commands:
        - '# Execute Amplify CLI with the helper script'
        - amplifyPush --simple
frontend:
  phases:
    preBuild:
      commands:
        - yarn install
    build:
      commands:
        - yarn build
  artifacts:
    baseDirectory: build
    files:
      - '*/*'
  cache:
    paths:
      - node_modules/**/*
```

**Sidenote:** Some time ago I [opened a ticket](https://github.com/aws-amplify/amplify-console/issues/1117) because I never could make my build process follow the steps on the CLI, so just in case, this will enhance your experience. I always have to place this custom file in my projects to work on the first deploy or else it always fails then I have to edit the application deploy settings in the administration of the Amplify project. I assume is a problem with my environment but besides this, works smoothly.

Initialize your Amplify project:

```bash
amplify init
```

You will be prompted with some questions, choose the ones matches your environment.

```bash
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project yourproject
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you’re building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  .
? Distribution Directory Path: build
? Build Command:  yarn build
? Start Command: yarn build
```

Docusaurus is a React application, and the distribution path is inside the build folder, created through the command `yarn build`. This will generate static files in a S3 bucket and the distribute through the CDN of CloudFront created by Amplify. Since we’ll be using just static files, we don’t really use a start command.

Amplify then will start initialize both locally and in the cloud your project. Your next step will be the command `amplify add hosting` to configure the hosting for your documentation.

It will prompt you by some questions:

```bash
? Select the plugin module to execute Hosting with Amplify Console (Managed hosting with custom domains, Continuous deployment)
? Choose a type Continuous deployment (Git-based deployments)
? Continuous deployment is configured in the Amplify Console. Please hit enter once you connect your repository
```

![Add Service](https://dev-to-uploads.s3.amazonaws.com/i/ubmhclmevcqlc42kr9d1.png)

I always use the continuous deployment option because you can connect your repository (GitHub, Bitbucket and other). 

![Add Repo](https://dev-to-uploads.s3.amazonaws.com/i/wjthunnntz3olrgipwb1.png)

Once your merge to a specific branch defined will automatically build a new version of your project. If you choose manual, you must run `amplify publish` everything you need a new deployment.

With this option, Amplify will open a tab in your browser for you connect your provider and you just need to follow the instructions. Once is done, Amplify will start the whole process and then hitting enter in your terminal, you will get the url provided by Amplify that will look something like this:

```bash
https://branch.qaz2sodsprk2kl.amplifyapp.com
```

## Auth

It is a simple HTTP authentication. If your use case needs roles, I recommend either you create different branches to deploy with the sensitive code and then create different urls for roles or then customize with Cognito making customizations that are not covered here. In my experience, this simple method is enough to protect the documentation.

In the application page, you just need to select "Access control" in the App settings option on the left side menu. To edit you hit manage access, change the access setting to restrict and then define a username and a password with at least 7 characters. Hit save to make effect.

![Access Control](https://dev-to-uploads.s3.amazonaws.com/i/32sw3qkncfljku0t6a7g.png)

You can customize even further adding a domain if you have one configured in the Route 53. You can create a sub-domain like `docs.acme.com` and generate a SSL certificate.

![Well, there it is.](https://dev-to-uploads.s3.amazonaws.com/i/bjj4rckihy59p9mw0pky.gif)

-----
**2021-08-03:** Updated post with formating issues on code snippets, thanks to [Slawa](https://twitter.com/spidgorny).