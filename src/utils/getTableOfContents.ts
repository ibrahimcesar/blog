import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export interface TocHeading {
  depth: number;
  slug: string;
  text: string;
}

/**
 * Extracts table of contents from markdown headings
 * Only includes h2 and h3 by default (customizable)
 */
export async function getTableOfContents(
  post: CollectionEntry<'posts'>,
  options: { minDepth?: number; maxDepth?: number } = {}
): Promise<TocHeading[]> {
  const { minDepth = 2, maxDepth = 3 } = options;

  // Extract headings from the markdown body
  const headings: TocHeading[] = [];
  const lines = post.body.split('\n');

  for (const line of lines) {
    // Match markdown headings: ## Heading or ### Heading
    const match = line.match(/^(#{2,6})\s+(.+)$/);
    if (match) {
      const depth = match[1].length;
      const text = match[2].trim();

      // Only include headings within the specified depth range
      if (depth >= minDepth && depth <= maxDepth) {
        // Generate slug similar to rehype-slug
        const slug = text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
          .replace(/\s+/g, '-')          // Replace spaces with hyphens
          .replace(/-+/g, '-')           // Replace multiple hyphens with single
          .trim();

        headings.push({ depth, slug, text });
      }
    }
  }

  return headings;
}
