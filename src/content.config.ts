import { defineCollection, reference, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const link = z.object({ label: z.string(), url: z.string().url() });

const sections = defineCollection({
  loader: file('src/content/sections.json'),
  schema: z.object({ name: z.string(), description: z.string(), order: z.number() }),
});

const authors = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/authors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      gradYear: z.number().int().optional(),
      role: z.enum([
        'Editor-in-Chief',
        'Managing Editor',
        'Section Editor',
        'Associate Editor',
        'Staff Writer',
        'Web and Design',
        'Faculty Advisor',
        'Alumni',
      ]),
      bio: z.string().min(20),
      photo: image().optional(),
      links: z.array(link).default([]),
    }),
});

const issues = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/issues' }),
  // The markdown body of an issue file is the editor's note.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      season: z.string(),
      publishDate: z.coerce.date(),
      coverImage: image(),
      featuredArticles: z.array(reference('articles')).default([]),
      pdfUrl: z.string().url().optional(),
    }),
});

const articles = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      authors: z.array(reference('authors')).min(1),
      editors: z.array(reference('authors')).default([]),
      section: reference('sections'),
      issue: reference('issues'),
      publishDate: z.coerce.date(),
      abstract: z.string().min(40).max(400),
      coverImage: image(),
      coverCredit: z.string(),
      tags: z.array(z.string()).default([]),
      sources: z.array(link).default([]),
      corrections: z.array(z.object({ date: z.coerce.date(), note: z.string() })).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { sections, authors, issues, articles };
