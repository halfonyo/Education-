import { defineCollection, z } from 'astro:content';

// חמש הקטגוריות של אשכולות התוכן
export const CATEGORIES = [
  'היסטוריה',
  'אתרים ומבנים',
  'ארכיאולוגיה',
  'מדריך למבקר',
  'סיפורים ואגדות',
] as const;

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(CATEGORIES),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    tags: z.array(z.string()).default([]),
    readingTime: z.number().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
