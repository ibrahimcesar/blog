---
title: "📘 #devbooks:  Effective TypeScript: 62 Specific Ways to Improve Your TypeScript"
description: If practical books are your type, this is for you!
featured: true
pubDate: "2021-05-16T10:50:00.000Z"
image: ~/assets/images/girl-window-reading.png
language: "en"
socialImage: "/features/devboks-effectivets.png"
---

> If practical books are your type, this is for you! A practical, hands-on guide to write and _think_ better about TypeScript. AND also gives us the background, the _trade offs_ and glances to the internals: ["Effective TypeScript: 62 Specific Ways to Improve Your TypeScript"](https://effectivetypescript.com/)  by [Dan Vanderkam](https://twitter.com/danvdk)

## 📖 What

The "Effective Books" were a great idea introduced by Scott Meyers with _Effective C++_. In ["Effective _Effective_ Books"](https://scottmeyers.blogspot.com/2013/01/effective-effective-books.html) he defined "_Effective_ books consist of a collection of technical essays ("Items"), where each essay's title comprises advice you should follow, and each essay's body consists of a rationale for the advice."

I did not like [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html) at all, but I was with a growing JavaScript codebase and some my problems, was in the checklist TypeScript promissed solution. I started with an online course but at the same time I look for a "introduction" book. I started some books, and keep ed an eye in this book for "when I really understand what is going on in this files". I got stuck here and there and then I picked this book and read it front to back.


## 🌟 Why Matters?

This type of approach – actionable, focused in the usage is great to learn. And then when you gain more and more insights through ysage you can understand better some advices in the book or even make your own mind. Some advices are opinated, because, well – everything has at least some degree of opinion. And this format is great for all types of developers, from the beginner to the pro and a book to go back again and again.

## 🔖 Highlights

> **Item 7: Think of Types as Sets of Values**: At runtime, every variable has a single value chosen from JavaScript’s universe of values. There are many possible values [...] But before your code runs, when TypeScript is checking it for errors, it just has a _type_. This is best thought of as a _set of possible values_. This set is known as the _domain_ of the type.

>**Item 13: Know the Differences Between type and interface**: [...] Prefixing interface types with `I` is common in C#, and this convention made some inroads in the early days of TypeScript. But it is considered bad style today because it’s unnecessary, adds little value, and is not consistently followed in the standard libraries.

> **Item 48: Use TSDoc for API Comments**: Use JSDoc-/TSDoc-formatted comments to document exported functions, classes, and types. This helps editors surface information for your users when it’s most relevant.

> **“Item 62: Don’t Consider Migration Complete Until You Enable noImplicitAny**: Converting your whole project to .ts is a big accomplishment. But your work isn’t done quite yet. Your next goal is to turn on the `noImplicitAny` option. TypeScript code without `noImplicitAny` is best thought of as transitional because it can mask real errors you’ve made in your type declarations.”


## 🐙 Go Depeer

### 📼 Watch

<div class='yt-frame'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/zQnBQ4tB3ZA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class='yt-frame'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/nygcFEwOG8w" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 🎙️ Listen

[What is Typescript and when should you use it Dan Vanderkam](https://www.codenewbie.org/podcast/what-is-typescript-and-when-should-you-use-it) at [CodeNewbie Podcast](https://www.codenewbie.org/podcast)

### 💻 Read More

**["Effective TypeScript](https://effectivetypescript.com/)**, the site for the books has an active blog with new posts from time to time and worth a read as well:

- **[The Golden Rule of Generics](https://effectivetypescript.com/2020/08/12/generics-golden-rule/)**
- **[Generic Tips Part 1: Use Classes and Currying to create new inference sites](https://effectivetypescript.com/2020/12/04/gentips-1-curry/)**
- **[Generic Tips Part 2: Intersect what you have with whatever TypeScript wants](https://effectivetypescript.com/2020/12/09/gentips-2-intersect/)**
- **[Generic Tips Part 3: Avoid Repeating Type Expressions](https://effectivetypescript.com/2021/01/20/gentips-3-aliases/)**

[**TypeScript** Weekly](https://www.typescript-weekly.com/) curated by [Marius Schulz](https://twitter.com/mariusschulz) is a great source to keep up to date with the TypeScript ecossystem. 