import { getCollection, type CollectionEntry } from 'astro:content';

/** Site base path without a trailing slash ('' on a custom domain). Prefix every internal href with it. */
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export type Article = CollectionEntry<'articles'>;
export type Author = CollectionEntry<'authors'>;
export type Issue = CollectionEntry<'issues'>;
export type Section = CollectionEntry<'sections'>;

const newestFirst = (a: { data: { publishDate: Date } }, b: { data: { publishDate: Date } }) =>
  b.data.publishDate.valueOf() - a.data.publishDate.valueOf();

export async function publishedArticles(): Promise<Article[]> {
  return (await getCollection('articles', (a) => !a.data.draft)).sort(newestFirst);
}

/** Issues whose publish date has passed. Everything else is staging-only. */
export async function liveIssues(): Promise<Issue[]> {
  const now = new Date();
  return (await getCollection('issues', (i) => i.data.publishDate <= now)).sort(newestFirst);
}

export async function allIssues(): Promise<Issue[]> {
  return (await getCollection('issues')).sort(newestFirst);
}

export async function sectionsInOrder(): Promise<Section[]> {
  return (await getCollection('sections')).sort((a, b) => a.data.order - b.data.order);
}

/** Sections with at least two published articles. Empty sections stay out of navigation. */
export async function visibleSections(): Promise<Section[]> {
  const articles = await publishedArticles();
  const count = (id: string) => articles.filter((a) => a.data.section.id === id).length;
  return (await sectionsInOrder()).filter((s) => count(s.id) >= 2);
}

export const MIN_ARTICLES_PER_SECTION = 2;

export function readingTime(body = ''): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}

export function fmtDate(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export function joinNames(names: string[]): string {
  if (names.length <= 1) return names.join('');
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(', ')}, and ${names.at(-1)}`;
}

/** Reading order of an issue: featured pieces first, then the rest grouped by section order. */
export async function issueOrder(issueId: string, featured: { id: string }[]): Promise<Article[]> {
  const inIssue = (await publishedArticles()).filter((a) => a.data.issue.id === issueId);
  const sections = await sectionsInOrder();
  const rank = (a: Article) => {
    const f = featured.findIndex((x) => x.id === a.id);
    return f >= 0 ? f : featured.length + sections.findIndex((s) => s.id === a.data.section.id);
  };
  return inIssue.sort((a, b) => rank(a) - rank(b));
}

export const ROLE_ORDER = [
  'Faculty Advisor',
  'Editor-in-Chief',
  'Managing Editor',
  'Section Editor',
  'Associate Editor',
  'Web and Design',
  'Staff Writer',
] as const;
