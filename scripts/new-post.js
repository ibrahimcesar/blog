#!/usr/bin/env node

/**
 * Create a new blog post with MDX format
 * Usage: npm run new:post "My Post Title"
 */

const fs = require('fs');
const path = require('path');

const title = process.argv[2];

if (!title) {
  console.error('Usage: npm run new:post "My Post Title"');
  process.exit(1);
}

// Generate slug from title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const now = new Date();
const pubDate = now.toISOString();
const filename = `${slug}.mdx`;
const filepath = path.join(__dirname, '..', 'src', 'content', 'posts', filename);

// Check if file already exists
if (fs.existsSync(filepath)) {
  console.error(`Error: File already exists: ${filename}`);
  process.exit(1);
}

const template = `---
title: "${title}"
description: ""
pubDate: "${pubDate}"
image: ~/assets/images/
language: en
tags: []
category: ""
draft: true
---

import Lead from '../../components/editorial/Lead.astro';

<Lead>

Your lead paragraph here.

</Lead>

## Introduction

Start writing your post here.
`;

fs.writeFileSync(filepath, template);
console.log(`Created: src/content/posts/${filename}`);
console.log(`\nNext steps:`);
console.log(`1. Add a featured image to src/assets/images/`);
console.log(`2. Update the image field in frontmatter`);
console.log(`3. Fill in description, tags, and category`);
console.log(`4. Write your content`);
console.log(`5. Set draft: false when ready to publish`);
