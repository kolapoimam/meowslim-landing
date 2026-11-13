# Meowslim — landing page

A responsive, accessible Meowslim introduction site, redesigned from the supplied *Meowslim landing page* visual mockup.

## Design direction

- Deep emerald (`#0E6B56`), soft mint (`#DCEFE7`), off-white (`#F4F8F6`)
- Outfit headings, Figtree body copy, pill-shaped CTAs, rounded cards
- Interactive, deterministic nine-avatar sample preview based on the entered seed
- Sections for the project, covering styles, audiences, steps, development updates and values

The avatar illustrations on this landing page are **original lightweight vector previews**. They are not the final PNG assets or the full production avatar generator. The full application is developed separately at [meowslim-avatars](https://github.com/kolapoimam/meowslim-avatars).

## Deploy on Vercel

Import `kolapoimam/meowslim-landing` in Vercel. Select **Other** (static site), no build command, and the repository root as the output directory. No environment variables or dependencies required.

## Preview locally

```bash
python3 -m http.server 3000
```

Visit http://localhost:3000.

## Project scope

This repository contains only the landing page (`index.html`, `styles.css`, `script.js` and static brand files). The page links to GitHub for progress instead of claiming to have an operational email waitlist.
