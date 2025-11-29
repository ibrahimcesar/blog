import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import readingTime from 'reading-time';

export interface Post extends CollectionEntry<'posts'> {
  readingTime: string;
  readingTimeMinutes: number;
  coffeeCups: number;
}

/**
 * Get all published posts sorted by publication date (newest first)
 * Filters out drafts and calculates reading time
 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => {
    // Filter out drafts in production
    return import.meta.env.PROD ? !data.draft : true;
  });

  // Sort by publication date (newest first)
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });

  // Add reading time to each post
  const postsWithReadingTime = await Promise.all(
    sortedPosts.map(async (post) => {
      const { body } = post;
      const stats = readingTime(body);
      const minutes = Math.ceil(stats.minutes);
      // Average coffee drinking time is ~10-15 minutes per cup
      const coffeeCups = Math.max(1, Math.ceil(minutes / 12));

      return {
        ...post,
        readingTime: stats.text,
        readingTimeMinutes: minutes,
        coffeeCups,
      };
    })
  );

  return postsWithReadingTime;
}

/**
 * Get featured posts only
 */
export async function getFeaturedPosts(): Promise<Post[]> {
  const allPosts = await getPosts();
  return allPosts.filter((post) => post.data.featured === true);
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const allPosts = await getPosts();
  return allPosts.filter((post) =>
    post.data.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(category: string): Promise<Post[]> {
  const allPosts = await getPosts();
  return allPosts.filter((post) =>
    post.data.category?.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get posts by series
 */
export async function getPostsBySeries(series: string): Promise<Post[]> {
  const allPosts = await getPosts();
  const seriesPosts = allPosts.filter((post) =>
    post.data.series?.toLowerCase() === series.toLowerCase()
  );

  // Sort by series order if available
  return seriesPosts.sort((a, b) => {
    const orderA = a.data.seriesOrder ?? 999;
    const orderB = b.data.seriesOrder ?? 999;
    return orderA - orderB;
  });
}

/**
 * Get all unique tags from all posts
 */
export async function getAllTags(): Promise<string[]> {
  const allPosts = await getPosts();
  const tags = new Set<string>();

  allPosts.forEach((post) => {
    post.data.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

/**
 * Get all unique categories from all posts
 */
export async function getAllCategories(): Promise<string[]> {
  const allPosts = await getPosts();
  const categories = new Set<string>();

  allPosts.forEach((post) => {
    if (post.data.category) {
      categories.add(post.data.category);
    }
  });

  return Array.from(categories).sort();
}

/**
 * Get tag counts (for tag cloud)
 */
export async function getTagCounts(): Promise<Record<string, number>> {
  const allPosts = await getPosts();
  const tagCounts: Record<string, number> = {};

  allPosts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return tagCounts;
}

/**
 * Get related posts based on tags and category
 */
export async function getRelatedPosts(
  currentPost: Post,
  limit: number = 3
): Promise<Post[]> {
  const allPosts = await getPosts();

  // Exclude current post
  const otherPosts = allPosts.filter((post) => post.slug !== currentPost.slug);

  // Calculate relevance score for each post
  const scoredPosts = otherPosts.map((post) => {
    let score = 0;

    // Same category = +5 points
    if (post.data.category && post.data.category === currentPost.data.category) {
      score += 5;
    }

    // Shared tags = +1 point per tag
    const sharedTags = post.data.tags.filter((tag) =>
      currentPost.data.tags.includes(tag)
    );
    score += sharedTags.length;

    // Same language = +2 points
    if (post.data.language === currentPost.data.language) {
      score += 2;
    }

    return { post, score };
  });

  // Sort by score and return top N
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
}
