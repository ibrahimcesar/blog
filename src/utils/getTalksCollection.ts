import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type Talk = CollectionEntry<'talks'>;

/**
 * Get all talks sorted by publication date (newest first)
 */
export async function getTalks(): Promise<Talk[]> {
  const talks = await getCollection('talks');

  // Sort by publication date (newest first)
  return talks.sort((a, b) => {
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });
}

/**
 * Get featured talks only
 */
export async function getFeaturedTalks(): Promise<Talk[]> {
  const allTalks = await getTalks();
  return allTalks.filter((talk) => talk.data.featured === true);
}

/**
 * Get talks by tag
 */
export async function getTalksByTag(tag: string): Promise<Talk[]> {
  const allTalks = await getTalks();
  return allTalks.filter((talk) =>
    talk.data.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all unique tags from all talks
 */
export async function getAllTalkTags(): Promise<string[]> {
  const allTalks = await getTalks();
  const tags = new Set<string>();

  allTalks.forEach((talk) => {
    talk.data.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}
