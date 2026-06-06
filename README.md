# tammyliu-website

Tammy Liu's personal website — a single-page site with work, writing, and recipes.

Built with [Next.js 16](https://nextjs.org/) (App Router), React 19, TypeScript, and [Tailwind CSS](https://tailwindcss.com/). Deployed on [Vercel](https://vercel.com/).

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000
```

## Scripts

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # run ESLint
```

## Project structure

- `src/app/` — pages (App Router) and shared components
- `src/content/recipes/` — recipe content as MDX files with frontmatter
- `src/lib/` — content loaders (recipes, writing feed)
- `public/images/` — static images

### Adding a recipe

Create a new `.mdx` file in `src/content/recipes/` with frontmatter:

```mdx
---
title: Recipe name
duration: 30 mins
serving: 1 person
date: 2026-05-23
image: /images/recipes/full-image.png
previewImage: /images/recipes/preview-image.png
---

Intro paragraph, then `# Ingredients` and `# Steps` sections.
```

Put `image` (full, shown on the recipe page) and `previewImage` (cropped, shown on the recipe grid) in `public/images/recipes/`.

## Features

- Light/dark mode toggle (top right), persisted to `localStorage` with no flash on load
- MDX-driven recipes
- Substack feed on the writing page
- [Vercel Analytics](https://vercel.com/analytics) and Speed Insights

## Theme colors

Defined in `tailwind.config.ts` and `globals.css`:

- `blue-dark` `#000129`, `blue-medium` `#0B85DA`, `yellow-gold` `#FAB52D`
- Graphite scale for backgrounds and text

## Deployment

Pushed to `main` deploys automatically via Vercel. Feature work happens on `feat/*` branches and is reviewed as a PR before merging.
