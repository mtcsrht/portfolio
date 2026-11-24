# portfolio

Personal portfolio of Máté Cserháti — live at [matecserhati.hu](https://matecserhati.hu).

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com), light/dark theme driven by `prefers-color-scheme`
- Ubuntu / Ubuntu Mono via `next/font`
- Deployed on Vercel

## Features

- Home, About and Projects pages, plus a detail page per project (`/projects/[slug]`)
- Open Graph / Twitter cards with a generated OG image, sitemap, robots and JSON-LD
- `/resume` redirects to the CV PDF
- Reduced-motion support and visible focus styles

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Content

- Site-wide constants (name, URL, socials): `lib/site.ts`
- Project data and detail-page content: `lib/projects.ts`
- CV PDF: `public/resume.pdf`
- Project screenshots: drop a PNG into `public/projects/` and set `image` on the project in `lib/projects.ts`
