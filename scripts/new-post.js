#!/usr/bin/env node

import { writeFile } from 'fs/promises';
import { join } from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Promisify readline question
const question = (query) => new Promise((resolve) => rl.question(query, resolve));

// Slugify function to create URL-friendly slugs
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

// Format date to ISO string
function formatDate(date) {
  return date.toISOString();
}

// Main function
async function createNewPost() {
  console.log('\n📝 Create a New Blog Post\n');

  try {
    // Gather post information
    const title = await question('Title: ');
    if (!title.trim()) {
      console.error('❌ Title is required!');
      process.exit(1);
    }

    const description = await question('Description: ');
    if (!description.trim()) {
      console.error('❌ Description is required!');
      process.exit(1);
    }

    const language = await question('Language (en/pt-br) [pt-br]: ') || 'pt-br';
    const isEnglish = language.toLowerCase() === 'en';

    const categoryInput = await question('Category (optional): ');
    const category = categoryInput.trim() || null;

    const tagsInput = await question('Tags (comma-separated, optional): ');
    const tags = tagsInput.trim()
      ? tagsInput.split(',').map(tag => tag.trim()).filter(Boolean)
      : [];

    const featuredInput = await question('Featured post? (y/n) [n]: ') || 'n';
    const featured = featuredInput.toLowerCase() === 'y';

    const imageInput = await question('Image path (optional, e.g., ~/assets/images/post.jpg): ');
    const image = imageInput.trim() || null;

    const socialImageInput = await question('Social image path (optional, e.g., /features/post.jpg): ');
    const socialImage = socialImageInput.trim() || null;

    const seriesInput = await question('Series name (optional): ');
    const series = seriesInput.trim() || null;

    const tocInput = await question('Enable Table of Contents? (y/n) [y]: ') || 'y';
    const tableOfContents = tocInput.toLowerCase() !== 'n';

    // Generate slug and filename
    const slug = slugify(title);
    const filename = `${slug}.md`;
    const pubDate = formatDate(new Date());

    // Build frontmatter
    let frontmatter = `---
title: "${title}"
description: "${description}"
pubDate: "${pubDate}"`;

    if (featured) {
      frontmatter += `\nfeatured: true`;
    }

    if (image) {
      frontmatter += `\nimage: ${image}`;
    }

    if (socialImage) {
      frontmatter += `\nsocialImage: "${socialImage}"`;
    }

    if (isEnglish) {
      frontmatter += `\nlanguage: en`;
    }

    if (category) {
      frontmatter += `\ncategory: "${category}"`;
    }

    if (tags.length > 0) {
      frontmatter += `\ntags: [${tags.map(tag => `"${tag}"`).join(', ')}]`;
    }

    if (series) {
      frontmatter += `\nseries: "${series}"`;
    }

    if (!tableOfContents) {
      frontmatter += `\ntableOfContents: false`;
    }

    frontmatter += `\n---\n\n`;

    // Create post content
    const content = `${frontmatter}Write your post content here...\n`;

    // Write file
    const postsDir = join(__dirname, '..', 'src', 'content', 'posts');
    const filePath = join(postsDir, filename);

    await writeFile(filePath, content, 'utf-8');

    console.log('\n✅ Post created successfully!');
    console.log(`📄 File: ${filePath}`);
    console.log(`🔗 Slug: ${slug}`);
    console.log('\nFrontmatter generated:');
    console.log(frontmatter);

  } catch (error) {
    console.error('❌ Error creating post:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Run the script
createNewPost();
