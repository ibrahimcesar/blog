import { z, defineCollection } from 'astro:content';

// Transform comma-separated string to array or keep array as-is
const tagsSchema = z.union([
  z.array(z.string()),
  z.string().transform((str) => str.split(',').map(tag => tag.trim()).filter(Boolean))
]).default([]);

// Posts collection schema
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),

    // Optional core fields
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    language: z.enum(['en', 'pt-br']).default('pt-br'),

    // Image fields
    image: z.string().optional(),
    socialImage: z.string().optional(),

    // New taxonomy fields
    tags: tagsSchema,
    category: z.string().optional(),

    // Metadata fields
    author: z.string().default('Ibrahim Cesar'),
    updated: z.coerce.date().optional(),
    excerpt: z.string().optional(),

    // Linking and organization
    canonicalURL: z.string().url().optional(),
    series: z.string().optional(),
    seriesOrder: z.number().int().positive().optional(),
    relatedPosts: z.array(z.string()).default([]),

    // Display options
    tableOfContents: z.boolean().default(true),
    showComments: z.boolean().default(true),

    // Discussion links
    discussionUrl: z.string().url().optional(),

    // Quick summary
    tldr: z.string().optional(),
  }),
});

// Talks collection schema
const talksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z.string(),
    pubDate: z.coerce.date(),

    // Optional fields
    description: z.string().optional(),
    eventDate: z.string().optional(), // Display format (e.g., "2023-05-05 10h00")
    videoTime: z.string().optional(), // Duration (e.g., "45 minutes")
    videoUrl: z.string().url().optional(),
    slidesUrl: z.string().url().optional(),
    event: z.string().optional(), // Event name
    location: z.string().optional(), // Physical or virtual location
    language: z.enum(['en', 'pt-br']).default('pt-br'),
    tags: tagsSchema,
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
  talks: talksCollection,
};
