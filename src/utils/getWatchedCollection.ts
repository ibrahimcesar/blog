import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type Watched = CollectionEntry<'watched'>;

/**
 * Get all watched videos sorted by publication date (newest first)
 */
export async function getWatched(): Promise<Watched[]> {
  const watched = await getCollection('watched');

  // Sort by publication date (newest first)
  return watched.sort((a, b) => {
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });
}

/**
 * Get featured watched videos only
 */
export async function getFeaturedWatched(): Promise<Watched[]> {
  const allWatched = await getWatched();
  return allWatched.filter((item) => item.data.featured === true);
}

/**
 * Get watched videos by tag
 */
export async function getWatchedByTag(tag: string): Promise<Watched[]> {
  const allWatched = await getWatched();
  return allWatched.filter((item) =>
    item.data.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all unique tags from all watched videos
 */
export async function getAllWatchedTags(): Promise<string[]> {
  const allWatched = await getWatched();
  const tags = new Set<string>();

  allWatched.forEach((item) => {
    item.data.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}
