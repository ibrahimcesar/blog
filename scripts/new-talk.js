#!/usr/bin/env node

/**
 * Create a new talk with MDX format
 * Usage: npm run new:talk "Talk Title" "Event Name"
 */

const fs = require('fs');
const path = require('path');

const title = process.argv[2];
const event = process.argv[3] || '';

if (!title) {
  console.error('Usage: npm run new:talk "Talk Title" "Event Name"');
  process.exit(1);
}

const now = new Date();
const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
const pubDate = now.toISOString();

// Generate slug from date and title
const titleSlug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '')
  .substring(0, 30);

const filename = `${dateStr}-${titleSlug}.mdx`;
const filepath = path.join(__dirname, '..', 'src', 'content', 'talks', filename);

// Check if file already exists
if (fs.existsSync(filepath)) {
  console.error(`Error: File already exists: ${filename}`);
  process.exit(1);
}

const template = `---
title: "${title}"
pubDate: "${pubDate}"
eventDate: "${dateStr}"
event: "${event}"
location: ""
language: en
tags: []
featured: false
videoUrl:
slidesUrl:
---

import TalkImage from "../../components/widgets/TalkImage.astro";

Description of your talk here.

<TalkImage src="/talks/IMAGE_NAME.jpeg" alt="${title}" title="${event}" />

## Topics Covered

- Topic 1
- Topic 2
- Topic 3

## Resources

- [Slides](URL_TO_SLIDES)
`;

fs.writeFileSync(filepath, template);
console.log(`Created: src/content/talks/${filename}`);
console.log(`\nNext steps:`);
console.log(`1. Add the talk image to src/assets/talks/`);
console.log(`2. Update the TalkImage src with the correct filename`);
console.log(`3. Fill in location, tags, videoUrl, slidesUrl`);
console.log(`4. Write your talk description`);
console.log(`5. Set featured: true if it should be highlighted`);
