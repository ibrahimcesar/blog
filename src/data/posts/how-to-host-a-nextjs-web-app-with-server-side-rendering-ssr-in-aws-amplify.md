---
title:
  "How to host a Next.js web app with server-side rendering (SSR) in AWS Amplify"
description: "Natively!"
featured: true
image: ~/assets/images/amplify.png
pubDate: "2021-04-27T10:50:00.000Z"
language: en
---

> Demo links are currently dead

<p class="lead">No more waiting! It’s finally here, <a href="https://aws.amazon.com/about-aws/whats-new/2021/05/aws-amplify-hosting-announces-server-side-rendering-support-for-next-js-web-apps/" target="_blank" title="AWS Amplify SSR" alt="AWS Amplify SSR">AWS Amplify hosting for Next.js server-side rendering (SSR)</a></p>

**Why this is great**: It’s no joke, I wait for this feature for _more than a
year_. And is finally here and is fast!

**Not so great**: Next 10.x.x was a huge leap forward. All things I wanted to
try, right off the bat, and backed in my applications...But this will be on
hold, as the time of writing, this launch only his support is for Next.js 9.x.x
version. Considering version 10.x is from October 2020 I think the pace is a
little slow to catchup.

To evaluate what type of rendering your application need, I recommend the post
[Next.js: Server-side Rendering vs. Static Generation](https://vercel.com/blog/nextjs-server-side-rendering-vs-static-generation)
by [Lee Robinson](https://twitter.com/leeerob)—and in the _real world_ sometimes
you’ll need both.

## The webapp

For all purposes, you could do with your app or create a boilerplate new
[NextJS with SSR](https://nextjs.org/docs/basic-features/pages#server-side-rendering).
I created this barebones site that renders some info from the
[PokéAPI](https://pokeapi.co/).
[Check it out the repository on GitHub](https://github.com/ibrahimcesar/nextjs-ssr-amplify-aws).

You can leave all build options as it is, because Amplify will automatically
pick up as SSR and deploy it. For this to happen you also don’t need (or have
to) choose a different export folder. If you clone my repo, you could check that
I’m indeed using NextJS `10.0.0` but, I cannot use any additional feature like
the new `Image` component.

## Deploying

### If you never used Amplify

You’ll need to have the amplify
[installed and configured](https://docs.amplify.aws/cli/start/install). Just
follow the docs and you’ll be ready to go. Or make sure you have the latest
version.

### Amplify Init

```bash
❯ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project pokessr
The following configuration will be applied:
Project information
| Name: pokessr
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: npm run-script build
| Start Command: npm run-script start

? Initialize the project with the above configuration? Yes
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile
For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use amplify
```

Besides the name, `pokessr`, I only choose my profile to deploy, called
`amplify` but you can deploy in whatever profile you configured. I accepted all
defaults. Then amplify will create your environment:

```bash
Adding backend environment dev to AWS Amplify Console app: d31r520fbr96mj

⠙ Initializing project in the cloud...

CREATE_IN_PROGRESS amplify-pokessr-dev-185133 AWS::CloudFormation::Stack Tue May 18 2021 18:51:41 GMT-0300 (Horário Padrão de Brasília) User Initiated
CREATE_IN_PROGRESS UnauthRole                 AWS::IAM::Role             Tue May 18 2021 18:51:45 GMT-0300 (Horário Padrão de Brasília)
CREATE_IN_PROGRESS AuthRole                   AWS::IAM::Role             Tue May 18 2021 18:51:45 GMT-0300 (Horário Padrão de Brasília)
CREATE_IN_PROGRESS DeploymentBucket           AWS::S3::Bucket            Tue May 18 2021 18:51:46 GMT-0300 (Horário Padrão de Brasília)
CREATE_IN_PROGRESS UnauthRole                 AWS::IAM::Role             Tue May 18 2021 18:51:46 GMT-0300 (Horário Padrão de Brasília) Resource creation Initiated
CREATE_IN_PROGRESS AuthRole                   AWS::IAM::Role             Tue May 18 2021 18:51:46 GMT-0300 (Horário Padrão de Brasília) Resource creation Initiated

⠇ Initializing project in the cloud...

CREATE_IN_PROGRESS DeploymentBucket AWS::S3::Bucket Tue May 18 2021 18:51:46 GMT-0300 (Horário Padrão de Brasília) Resource creation Initiated

⠸ Initializing project in the cloud...

CREATE_COMPLETE AuthRole   AWS::IAM::Role Tue May 18 2021 18:51:59 GMT-0300 (Horário Padrão de Brasília)
CREATE_COMPLETE UnauthRole AWS::IAM::Role Tue May 18 2021 18:51:59 GMT-0300 (Horário Padrão de Brasília)

⠹ Initializing project in the cloud...

CREATE_COMPLETE DeploymentBucket           AWS::S3::Bucket            Tue May 18 2021 18:52:08 GMT-0300 (Horário Padrão de Brasília)
CREATE_COMPLETE amplify-pokessr-dev-185133 AWS::CloudFormation::Stack Tue May 18 2021 18:52:10 GMT-0300 (Horário Padrão de Brasília)

✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.

Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:

“amplify status” will show you what you’ve added already and if it’s locally configured or deployed
“amplify add <category>“ will allow you to add features like user login or a backend API
“amplify push” will build all your local backend resources and provision it in the cloud
“amplify console” to open the Amplify Console and view your project status
“amplify publish” will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try “amplify add api” to create a backend API and then “amplify publish” to deploy everything
```

What we are going to use is `hosting`.

And by zero configuration, you just need to connect your repository and the
building settings will be set.

![Build settings](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nplnbf5sqsoy4mkvrb8k.png)

And you can always have a look at how the build is going accessing the logs in
the AWS Amplify console. For our purposes, see a `Starting SSR Build` in your
logs:

```bash
2021-05-18T22:35:49.379Z [INFO]: info  - Creating an optimized production build...
2021-05-18T22:35:58.592Z [INFO]: info  - Compiled successfully
                                 info  - Collecting page data...
2021-05-18T22:35:59.098Z [INFO]: info  - Generating static pages (0/28)
2021-05-18T22:35:59.480Z [INFO]: info  - Generating static pages (7/28)
2021-05-18T22:35:59.600Z [INFO]: info  - Generating static pages (14/28)
2021-05-18T22:35:59.706Z [INFO]: info  - Generating static pages (21/28)
2021-05-18T22:35:59.797Z [INFO]: info  - Generating static pages (28/28)
2021-05-18T22:35:59.797Z [INFO]: info  - Finalizing page optimization...
2021-05-18T22:35:59.814Z [INFO]:
2021-05-18T22:35:59.860Z [INFO]: Page                              Size     First Load JS
                                 ┌ λ /                             1.32 kB        68.7 kB
                                 ├   /_app                         0 B            64.2 kB
                                 ├ λ /[ditto]                      1.39 kB        68.7 kB
                                 ├ ○ /404                          2.76 kB        66.9 kB
                                 ├ ● /pokemons/[name]              1.53 kB        68.9 kB
                                 ├   ├ /pokemons/bulbasaur

                                 ├   ├ /pokemons/ivysaur

                                 ├   ├ /pokemons/venusaur

                                 ├   └ [+22 more paths]

                                 └ λ /random                       1.39 kB        68.7 kB
                                 + First Load JS shared by all     64.2 kB
                                 ├ chunks/commons.b2f5db.js      13.5 kB
                                 ├ chunks/framework.149f13.js    42 kB
                                 ├ chunks/main.e0d560.js         6.8 kB
                                 ├ chunks/pages/_app.9245f7.js   865 B
                                 ├ chunks/webpack.f82c36.js      950 B
                                 └ css/b8e1ed54af27c57535f7.css  897 B

2021-05-18T22:35:59.861Z [INFO]: λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
                                 ○  (Static)  automatically rendered as static HTML (uses no initial props)
                                 ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
                                 (ISR)     incremental static regeneration (uses revalidate in getStaticProps)

2021-05-18T22:35:59.993Z [INFO]: Starting SSR Build...
2021-05-18T22:37:10.138Z [INFO]: SSR Build Complete.
2021-05-18T22:37:11.159Z [INFO]: # Completed phase: build
2021-05-18T22:37:11.159Z [INFO]: ## Build completed successfully
```

Then you gave to wait a couple of minutes and your application you be on your
custom domain or in the generate domain of Amplify. For this demonstration my
web apps is [available here](https://main.d31r520fbr96mj.amplifyapp.com/).

### Pages

The front page is itself server side generated:

```tsx
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getPokemons();

  return {
    props: {
      data,
    },
  };
};
```

It will query in the PokéAPI and return all Pokémons until reaching the number
or the maximum today. I placed `3000` but as you can check, the actual number
today is `1118`.

When you click in a Pokémon, I use a dynamic route in the file `ditto` to
generate the Pokémon by the name. Pokémon fans will get the reference. And
`[ditto].tsx` is also SSR.

```tsx
export const getServerSideProps: GetServerSideProps = async (context) => {

  let data;
  const { ditto} = context.query

  if (typeof ditto === ‘string’) {
    data = await getPokemonData(ditto)
  } else {
    data = {}
  }

  return { props: { data } }

}
```

But for fun I created a `random` page... that renders a random Pokémons to test
even better the SSR. It get all the possible Pokémons and returns one at random
using `Math.random()`:

```tsx

export const getServerSideProps: GetServerSideProps = async () => {

  const random = await getPokemons() as Pokedex
  const ditto = random.results[random.results.length * Math.random() | 0].name

  let data;
  if (typeof ditto === ‘string’) {
    data = await getPokemonData(ditto)
  } else {
    data = {}
  }

  return {
    props: {
      data
    }
  }
}
```

And to test ISG (Incremental Static Generation) I created a folder called
`pokemons`.
[Stable static generation was added to Next 9.3](https://nextjs.org/blog/next-9-5#stable-incremental-static-regeneration)
but my test doesn’t show that works right now with the Amplify SSR hosting, it
defaults to the SSR. ISG is a mechanism to update existing pages, by
re-rendering them in the background as traffic comes in using the property
`revalidate`. Also, another great use is, per example, you have a specific
dataset of pages to generate at build time but you’ll need on dynamic routes to
be generated new pages as soon you publish another in your headless CMS or
database.
[ISG generated even a bounty as feature in another project](https://github.com/serverless-nextjs/serverless-next.js/issues/804)
and unlocks a lot of interesting use cases.

```tsx
export const getStaticProps: GetStaticProps = async context => {
  let data;
  if (context.params) {
    data = await getPokemonData(context.params.name as string);
  } else {
    data = {};
  }

  return {
    props: {
      data,
      date: new Date().toISOString(),
    },
    revalidate: 60 * 5,
  };
};

export const getStaticPaths: GetStaticPaths<{ name: string }> = async () => {
  const pokemons = (await getPokemons(25)) as Pokedex;

  const paths = pokemons.results.map(pokemon => {
    return { params: { name: pokemon.name.toString() } };
  });

  return {
    fallback: true,
    paths,
  };
};
```

For my example, I generate at build time the first 25 Pokémons. See that my
props are changing, I’m passing a dynamic date. But my first 25 Pokémons,
starting with
[Bulbasaur](https://main.d31r520fbr96mj.amplifyapp.com/pokemons/bulbasaur) and
going up to
[Pikachu](https://main.d31r520fbr96mj.amplifyapp.com/pokemons/pikachu). They
have a text `Generated at` that will not revalidate at all (right now configured
to re-validate at each 5 minutes `revalidate: 60 * 5` in which it should change
this date. But if you access any other Pokémon than the first 25, like the
number 26, [Raichu](https://main.d31r520fbr96mj.amplifyapp.com/pokemons/raichu)
or the 186, [Scizor](https://main.d31r520fbr96mj.amplifyapp.com/pokemons/scizor)
will be server-side generated at the time and you’ll see the date of any time
you accessing again, so no ISG. This feature was not advertised but since it was
stable at 9.3+ and I did not found work and it happens you are after this,
you’ll need to wait or surprise me show-me what I’m getting wrong here because I
would love to have ISG already 😀

---

Please leave your thoughts, takes and insights on Twitter! Or problems if you
have one or the solution to ISG!