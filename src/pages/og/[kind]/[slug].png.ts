import type { APIRoute } from 'astro';
import { getCollection, getEntries } from 'astro:content';
import { renderOg, type OgCard } from '../../../og';
import { fmtDate, publishedArticles } from '../../../lib';

export async function getStaticPaths() {
  const paths: { params: { kind: string; slug: string }; props: OgCard }[] = [];
  for (const a of await publishedArticles()) {
    const authors = await getEntries(a.data.authors);
    paths.push({
      params: { kind: 'articles', slug: a.id },
      props: { kicker: a.data.section.id.replaceAll('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase()).replace(' And ', ' and '), title: a.data.title, byline: `By ${authors.map((x) => x.data.name).join(' and ')}` },
    });
  }
  for (const p of await getCollection('authors')) {
    const role = [p.data.role, p.data.gradYear && `Class of ${p.data.gradYear}`].filter(Boolean).join(', ');
    paths.push({ params: { kind: 'authors', slug: p.id }, props: { kicker: role, title: p.data.name } });
  }
  for (const i of await getCollection('issues')) {
    paths.push({ params: { kind: 'issues', slug: i.id }, props: { kicker: i.data.season, title: i.data.title, byline: fmtDate(i.data.publishDate) } });
  }
  return paths;
}

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg(props as OgCard);
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
