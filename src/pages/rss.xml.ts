import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getEntries } from 'astro:content';
import { publishedArticles, base } from '../lib';

export async function GET(context: APIContext) {
  const articles = await publishedArticles();
  const items = await Promise.all(
    articles.map(async (a) => ({
      title: a.data.title,
      description: a.data.abstract,
      pubDate: a.data.publishDate,
      link: `${base}/articles/${a.id}`,
      author: (await getEntries(a.data.authors)).map((x) => x.data.name).join(', '),
      categories: [a.data.section.id, ...a.data.tags],
    })),
  );
  return rss({
    title: 'The Berkeley Carroll Science Journal',
    description: 'A student-run magazine of science, math, computing, and medicine at the Berkeley Carroll School.',
    site: context.site!,
    items,
  });
}
