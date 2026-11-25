import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({ slug: z.string(), lang: z.enum(['en', 'zh']), order: z.number(), category: z.string(), date: z.string(), title: z.string(), summary: z.string(), tags: z.array(z.string()), stat: z.string(), statLabel: z.string() }),
});
export const collections = { projects };
