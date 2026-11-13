# Meowslim Landing Page

This repository serves the supplied **Meowslim landing page** design artboard faithfully, rather than a visual reinterpretation.

## Files

- `index.html` — original `Main.dc.html` artboard with its complete content, layout, animation definitions, and interactions; only viewport/SEO metadata and a safe waitlist notice are added.
- `Avatar.dc.html` — original avatar illustration component.
- `support.js` and `vendor/` — local reference-design runtime required by the exported components.
- `vercel.json` — Vercel configuration. `cleanUrls` is disabled so the runtime can fetch `Avatar.dc.html` by filename.

## Preview / deploy

This is a static site. For local viewing run `python3 -m http.server 3000`, then open `http://localhost:3000/`. Import `kolapoimam/meowslim-landing` in Vercel with **Other** as the framework and no build command or output directory configuration.

## Important: waitlist

The supplied mockup includes a visual email waitlist, but no collection/storage service. To avoid false signup confirmations, submitting an email currently displays an honest message stating that signups are not connected. Attach a backend/service before accepting real subscriptions.

## Other project

The complete Meowslim avatar product lives separately in [`kolapoimam/meowslim-avatars`](https://github.com/kolapoimam/meowslim-avatars).
