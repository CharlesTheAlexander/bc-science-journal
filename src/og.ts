import { readFile } from 'node:fs/promises';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

// Read from the project root: this module is bundled into dist/ at build time, so import.meta.url would point there.
const serif = readFile(new URL('src/fonts/Newsreader-OG.ttf', `file://${process.cwd()}/`));
const sans = readFile(new URL('src/fonts/PublicSans-OG.ttf', `file://${process.cwd()}/`));

export interface OgCard {
  kicker: string;
  title: string;
  byline?: string;
}

/** 1200x630 share image: maroon rule, kicker, headline, byline, masthead. */
export async function renderOg({ kicker, title, byline }: OgCard): Promise<Buffer> {
  const size = title.length > 70 ? 56 : title.length > 40 ? 68 : 84;
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: { width: 1200, height: 630, display: 'flex', flexDirection: 'column', background: '#f9f6f3', color: '#211f1d', padding: '0 80px 64px' },
        children: [
          { type: 'div', props: { style: { height: 14, width: 1200, marginLeft: -80, background: '#501031' } } },
          { type: 'div', props: { style: { marginTop: 64, fontFamily: 'Public Sans', fontSize: 26, color: '#625a5c' }, children: kicker } },
          { type: 'div', props: { style: { marginTop: 20, fontFamily: 'Newsreader', fontSize: size, lineHeight: 1.05, letterSpacing: '-0.015em', flexGrow: 1, display: 'flex', alignItems: 'flex-start' }, children: title } },
          byline ? { type: 'div', props: { style: { fontFamily: 'Public Sans', fontSize: 26, marginBottom: 20 }, children: byline } } : null,
          { type: 'div', props: { style: { fontFamily: 'Newsreader', fontSize: 34, borderTop: '1px solid #dcd4cf', paddingTop: 20 }, children: 'The Berkeley Carroll Science Journal' } },
        ].filter(Boolean),
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Newsreader', data: await serif, weight: 500, style: 'normal' },
        { name: 'Public Sans', data: await sans, weight: 400, style: 'normal' },
      ],
    },
  );
  return new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
}
