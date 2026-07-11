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
npm run new -- "Post title"
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

## Theme extras

- `themes/particlex/source/js/site-effects.js` provides the click kaomoji animation.
- `themes/particlex/source/js/live2d-widget.js` loads the Live2D widget after the page becomes idle.
- `themes/particlex/source/live2d/waifu-tips.json` contains the local widget messages.
- Live2D can be disabled through `live2d.enable` in `_config.particlex.yml`.

The widget code is loaded from
[`stevenjoezhang/live2d-widget`](https://github.com/stevenjoezhang/live2d-widget),
with models served by
[`fghrsh/live2d_api`](https://github.com/fghrsh/live2d_api). It is not loaded on
small screens, reduced-motion setups, or data-saving connections.

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
