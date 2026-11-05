# Aashish Maharjan — Personal Website

Source for [aashish177.github.io](https://aashish177.github.io/), built with [Astro](https://astro.build) as a static site.

## Run locally

Requires Node 22.23 or newer.

```bash
npm install
npm run dev       # http://127.0.0.1:4321
npm run build     # outputs to dist/
npm run preview   # serves the production build locally
```

## Edit content

All content lives in `src/data/portfolio.ts`: profile, experience, education, certifications and projects. Images are in `src/assets/` and are resized and converted to WebP at build time.

When a role ends, add its `end` date. The "Now" badge, the hero status pill and the photo tag update from that.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to the `gh-pages` branch.

## Fonts

[Clash Display](https://www.fontshare.com/fonts/clash-display) and [Satoshi](https://www.fontshare.com/fonts/satoshi) from Fontshare, self-hosted in `public/fonts/`.
