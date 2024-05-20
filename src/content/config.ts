import { defineCollection, z } from 'astro:content';

const devlog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string())
    }),
});

const chapter = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        ruTitle: z.string(),
        description: z.string(),
    }),
});

export const collections = { devlog, chapter };