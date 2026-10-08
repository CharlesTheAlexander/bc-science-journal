# The Berkeley Carroll Science Journal

Static magazine site. Every article, author, and issue is one markdown file. No database, no admin panel, no accounts.

## Run it

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # builds to dist/ and indexes search
npm run preview    # serves dist/ (search only works here or on the live site)
```

## Add an article

Create `src/content/articles/<slug>.md`. The filename is the URL: `/articles/<slug>`.

```md
---
title: Why the sky is blue
subtitle: Rayleigh scattering, without the hand-waving   # optional
authors: [avery-sample]              # author file names, at least one
editors: [dylan]                     # optional
section: physics-and-astronomy       # an id from src/content/sections.json
issue: issue-1                       # an issue file name
publishDate: 2027-01-22
abstract: Two sentences that appear at the top of the article and in search results.
coverImage: ../../images/covers/why-the-sky-is-blue.jpg   # required; put the file in src/images/covers/
coverCredit: "Photo: NASA"
tags: [optics, atmosphere]           # optional
sources:                             # optional but expected
  - label: NASA, "Why is the sky blue?"
    url: https://spaceplace.nasa.gov/blue-sky/en/
draft: false                         # true hides it from the build
---

Article body in markdown. Use `##` headings, `>` for a pull quote,
`![caption](../../images/figure.jpg)` for figures.
```

Cover images should be at least 1600 by 900, JPG or PNG. The build fails if a required field is missing or a slug doesn't exist.

A figure is an image followed by an italic line, which becomes the caption:

```md
![Light curve of a transiting planet](../../images/figures/transit.png)
*Figure 1. Brightness dips by one percent during the transit. Data: NASA Kepler.*
```

Share images (what shows when a link is pasted into a chat) are generated at build time for every article, author, and issue from the title, so nothing needs to be uploaded.

## Add an author

Create `src/content/authors/<slug>.md` with frontmatter only:

```md
---
name: Avery Sample
gradYear: 2028                       # omit for the advisor or alumni
role: Staff Writer                   # Editor-in-Chief, Managing Editor, Section Editor, Associate Editor, Staff Writer, Web and Design, Faculty Advisor, Alumni
bio: One to three sentences.
photo: ../../images/authors/avery.jpg   # optional
links:                               # optional
  - label: Personal site
    url: https://example.com
---
```

The masthead groups people by role. Staff Writers appear under Contributors once they have a published piece. Change `role` to Associate Editor after a second piece.

## Add an issue

Create `src/content/issues/<slug>.md`. The body is the editor's note.

```md
---
title: Issue 2
season: Spring 2027
publishDate: 2027-05-21
coverImage: ../../images/covers/issue-2.jpg
featuredArticles: [first-slug, second-slug]   # ordered, shown at the top of the issue
pdfUrl: https://...                           # optional, print edition
---

Editor's note goes here.
```

The home page shows the newest issue whose publish date has passed. Before that date, the issue page still builds (for staging review) but the home page shows the launch page and the issue is left out of the archive.

## Sections

Edit `src/content/sections.json`. A section only appears in navigation once it has two published articles. Every section page still exists.

## Before launch

- Set `site` in `astro.config.mjs` to the real domain, and the sitemap URL in `public/robots.txt`.
- Replace `FORM_URL` in `src/pages/submit.astro` with the real pitch form.
- Replace the placeholder accent color in `src/styles/global.css` if the school has brand colors.
- Delete every article and author tagged `sample`, and the placeholder advisor file.
- Replace `public/og-default.png` with the real share image (1200 by 630).

## Deploy

Netlify or Vercel from the GitHub repo. Build command `npm run build`, publish directory `dist`. Every pull request gets a preview URL.
