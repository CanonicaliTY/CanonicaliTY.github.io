# CanonicaliTY Blog

Source repository for Tingyu Chen's Hexo blog at `canonicality.top`.

## Structure

- `_config.yml`: main Hexo configuration
- `_config.particlex.yml`: ParticleX theme configuration
- `source/_posts/`: Markdown posts
- `source/about/`: About page
- `source/categories/`: category index
- `source/tags/`: tag index
- `source/images/`: site images
- `themes/particlex/`: vendored and customised ParticleX theme
- `.github/workflows/pages.yml`: GitHub Pages deployment workflow

## Local development

Install dependencies:

```bash
npm install
```

Create a post:

```bash
npm run new -- "文章标题"
```

Run the local server:

```bash
npm run server
```

Build the static site:

```bash
npm run build
```

Generated files are written to `public/`, which is not committed.

## Writing

Posts live in `source/_posts/` and are written in Markdown:

```md
---
title: Notes on a Chapter of Quantum Mechanics
date: 2026-06-03
categories:
  - Physics
tags:
  - quantum mechanics
  - notes
---

Post content...
```

Current categories include:

- `Physics`
- `AI`
- `Coding`
- `Notes`

## Deployment

Pushes to `main` trigger GitHub Actions, which builds the Hexo site and deploys `public/` to GitHub Pages. The repository's Pages source must be set to GitHub Actions.
