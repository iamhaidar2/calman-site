# Calman — marketing site

The landing page for **Calman**, the honest calorie &amp; body-composition tracking app.
A static, responsive single-page site. Hostinger serves `public/` as plain files;
the small **Node.js + Express** server is only for previewing it locally.

## Run locally

```bash
npm install
npm start          # → http://localhost:3000
```

(`PORT` env var overrides the port, e.g. `PORT=8080 npm start`.)

## Structure

```
server.js              tiny Express static server for local preview
public/
  .htaccess            Hostinger rules: clean URLs, home-page fallback, cache times
  index.html           the landing page (hero, results, features, how-it-works, CTA)
  privacy.html  terms.html  support.html  delete-account.html
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

calman.ai is a Hostinger web app connected to this repo with **Framework: Other**,
**Build command: None**, **Output directory: `public`** and an empty **Entry file**.
Every push to `main` publishes `public/` about 15 seconds later. No Node process runs
on the server: the hosting plan's process limit is shared by every site on it, and a
running Node app uses about 11 of its 120.

`public/.htaccess` does on Hostinger what `server.js` does locally: clean URLs
(`/privacy` serves `privacy.html`), any other unknown address shows the home page,
and cache times (pages and CSS are re-checked on every visit, so a push shows up
straight away).
