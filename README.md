# Calman — marketing site

The landing page for **Calman**, the honest calorie &amp; body-composition tracking app.
A small **Node.js + Express** server that serves a static, responsive single-page site.

## Run locally

```bash
npm install
npm start          # → http://localhost:3000
```

(`PORT` env var overrides the port, e.g. `PORT=8080 npm start`.)

## Structure

```
server.js              tiny Express static server
public/
  index.html           the landing page (hero, results, features, how-it-works, CTA)
  styles.css           brand-matched styles (Calman green)
  assets/
    logo/              Calman logo — wordmark.svg, icon.svg, glyph-white.svg, favicon.png
    shots/             app mockups — dashboard, scan, progress, diary, plan
```

## What it shows

- **Results** the app delivers (fat loss vs weight loss, honest targets, breaking plateaus, consistency).
- **Features** mapped to those results (AI photo scan, smart-scale body composition, adaptive targets, meal log & history, personalized meal plans).
- A clear three-step "how it works" and a beta call-to-action.

All screenshots are the Calman design mockups.

## Deploy

Any Node host works (`npm start`, honors `$PORT`): Render, Railway, Fly.io, a VPS, etc.
Since the site is fully static, you can alternatively serve the `public/` folder on
Netlify, Cloudflare Pages, GitHub Pages, or Vercel.
