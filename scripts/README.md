# Blog Scripts

## New Post CLI Tool

A command-line tool to quickly create new blog posts with proper frontmatter and file structure.

### Usage

```bash
npm run new:post
```

### What it does

The script will interactively prompt you for:

1. **Title** (required) - The post title
2. **Description** (required) - A short description/excerpt
3. **Language** (optional, default: pt-br) - Choose `en` for English posts
4. **Category** (optional) - Post category (e.g., "Cloud", "JavaScript")
5. **Tags** (optional) - Comma-separated tags (e.g., "AWS, CDK, TypeScript")
6. **Featured** (optional, default: no) - Mark as featured post
7. **Image** (optional) - Path to post image (e.g., `~/assets/images/post.jpg`)
8. **Social Image** (optional) - Path for social sharing (e.g., `/features/post.jpg`)
9. **Series** (optional) - Name of series if part of multi-part content
10. **Table of Contents** (optional, default: yes) - Enable/disable ToC

### Example Session

```bash
$ npm run new:post

📝 Create a New Blog Post

Title: Getting Started with AWS CDK
Description: A beginner's guide to infrastructure as code with AWS CDK
Language (en/pt-br) [pt-br]: en
Category (optional): Cloud
Tags (comma-separated, optional): AWS, CDK, IaC, TypeScript
Featured post? (y/n) [n]: y
Image path (optional, e.g., ~/assets/images/post.jpg): ~/assets/images/cdk-intro.jpg
Social image path (optional, e.g., /features/post.jpg): /features/cdk-intro.jpg
Series name (optional): AWS CDK Deep Dive
Enable Table of Contents? (y/n) [y]: y

✅ Post created successfully!
📄 File: /Users/username/blog/src/content/posts/getting-started-with-aws-cdk.md
🔗 Slug: getting-started-with-aws-cdk
```

### Generated File

The script creates a markdown file in `src/content/posts/` with:

- Auto-generated slug from title (URL-friendly)
- Current timestamp as publication date
- All provided frontmatter fields
- Template content placeholder

### Frontmatter Fields

The generated frontmatter follows the Astro Content Collections schema defined in `src/content/config.ts`:

```yaml
---
title: "Post Title"
description: "Post description"
pubDate: "2025-11-15T12:00:00.000Z"
featured: true
image: ~/assets/images/post.jpg
socialImage: "/features/post.jpg"
language: en
category: "Cloud"
tags: ["AWS", "CDK", "TypeScript"]
series: "Series Name"
tableOfContents: true
---
```

### Notes

- **Slug generation**: Automatically creates URL-friendly slugs from titles
- **File naming**: Uses the slug as the filename (e.g., `getting-started-with-aws-cdk.md`)
- **Validation**: Ensures required fields (title, description) are provided
- **Defaults**: Sensible defaults for optional fields (pt-br language, ToC enabled)
- **Schema compliance**: Follows the Zod schema defined in Content Collections

### Tips

1. **Tags**: Enter multiple tags separated by commas (spaces are trimmed automatically)
2. **Image paths**: Use `~/assets/images/` for local images that will be optimized by Astro
3. **Social images**: Use `/features/` for social media preview images
4. **Series**: Use consistent series names across related posts for automatic navigation
5. **Category**: Use title case for categories (e.g., "Cloud", "JavaScript", "DevOps")

### Advanced Usage

You can also run the script directly:

```bash
node scripts/new-post.js
```

### Future Enhancements

Potential additions:
- Non-interactive mode with command-line arguments
- Template selection (tutorial, case study, news, etc.)
- Auto-open in editor after creation
- Validation against existing slugs
- Draft/published status support
