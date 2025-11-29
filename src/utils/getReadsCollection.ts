import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type Read = CollectionEntry<'reads'>;

/**
 * Get all reads sorted by publication date (newest first)
 */
export async function getReads(): Promise<Read[]> {
  const reads = await getCollection('reads');

  // Sort by publication date (newest first)
  return reads.sort((a, b) => {
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });
}

/**
 * Get featured reads only
 */
export async function getFeaturedReads(): Promise<Read[]> {
  const allReads = await getReads();
  return allReads.filter((item) => item.data.featured === true);
}

/**
 * Get reads by tag
 */
export async function getReadsByTag(tag: string): Promise<Read[]> {
  const allReads = await getReads();
  return allReads.filter((item) =>
    item.data.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get reads by type
 */
export async function getReadsByType(type: string): Promise<Read[]> {
  const allReads = await getReads();
  return allReads.filter((item) => item.data.type === type);
}

/**
 * Get all unique tags from all reads
 */
export async function getAllReadsTags(): Promise<string[]> {
  const allReads = await getReads();
  const tags = new Set<string>();

  allReads.forEach((item) => {
    item.data.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}
