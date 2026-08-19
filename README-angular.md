# ARKA Logistics — Corporate Website

A production-quality, responsive Angular website for **ARKA Logistics**, an Indian logistics and
employee transportation company. Built with Angular 18 standalone components, TypeScript, SCSS,
lazy-loaded routes, and a reusable component architecture.

## Project structure

```
src/
├── app/
│   ├── components/        # Reusable UI building blocks
│   │   ├── navbar/
│   │   ├── footer/
│   │   ├── hero/
│   │   ├── stats/
│   │   ├── section-heading/
│   │   ├── feature-card/
│   │   ├── service-card/
│   │   ├── industry-card/
│   │   ├── cta/
│   │   └── contact-form/
│   │
│   ├── pages/              # Route-level pages (all lazy-loaded)
│   │   ├── home/
│   │   ├── about/
│   │   ├── services/
│   │   ├── employee-transport/
│   │   ├── technology/
│   │   ├── sustainability/
│   │   ├── industries/
│   │   └── contact/
│   │
│   ├── services/            # SeoService, RevealDirective, CounterDirective
│   ├── models/               # Shared TypeScript interfaces
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── app.config.ts
│
├── styles.scss              # Global design tokens, resets, utility classes
├── index.html
└── main.ts

public/
├── CNAME                    # arkalogistics.co.in — for GitHub Pages custom domain
├── robots.txt
└── assets/
    ├── images/
    ├── icons/
    └── logo/
```

## Brand system

Design tokens live in `src/styles.scss` as CSS custom properties:

| Token | Value | Use |
|---|---|---|
| `--arka-navy` | `#0B2942` | Primary brand color |
| `--arka-blue` | `#123E5C` | Secondary |
| `--arka-gold` | `#D9A441` | Accent / CTA |
| `--arka-accent` | `#F7B94C` | Highlights, glows |
| `--arka-bg` | `#F5F7F9` | Light section backgrounds |
| `--arka-text` | `#17212B` | Body text |

Fonts: **Manrope** (headings) and **Inter** (body), loaded via Google Fonts in `index.html`.

## Content & compliance notes

Per the brief, all forward-looking claims (EV fleet size, Pan-India coverage, financial
projections) are phrased as **visions, targets, or management estimates** rather than guaranteed
current facts — see the "Built for Scalable Growth" section on the About page and the badges on
the homepage stats section (`Target` / `Vision`).

## Running locally

Requires Node.js 18+ and npm.

```bash
npm install
npm start
```

The site will be available at `http://localhost:4200`.

## Building for production

```bash
npm run build
```

Output is written to `dist/arka-logistics/browser`.

## Deploying to GitHub Pages

This project is configured for the repository **`ARKALogistics-2025/landing-page`** with the
custom domain **arkalogistics.co.in** (see `public/CNAME`).

### One-time setup

```bash
npm install -D angular-cli-ghpages
```

### Deploy

```bash
npm run deploy
```

This runs a production build and publishes `dist/arka-logistics/browser` (which includes the
`CNAME` file) to the `gh-pages` branch via `angular-cli-ghpages`.

### DNS

Point your domain's DNS to GitHub Pages:

- **A records** for the apex domain (`arkalogistics.co.in`) → GitHub Pages IPs:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Or a **CNAME record** if using a `www` subdomain, pointing to `arkalogistics-2025.github.io`

Then in the repository settings → **Pages**, set the source branch to `gh-pages` and confirm the
custom domain matches `public/CNAME`.

### SPA routing on GitHub Pages

GitHub Pages serves static files and doesn't natively support Angular's client-side routing on
deep links/refreshes. After building, duplicate `index.html` as `404.html` in the output folder so
unmatched paths fall back to the Angular app:

```bash
cp dist/arka-logistics/browser/index.html dist/arka-logistics/browser/404.html
```

(Add this as a step in your deploy script or CI pipeline if you rely on direct links to pages like
`/services` or `/contact`.)

## Accessibility & performance

- Semantic landmarks (`header`, `main`, `footer`, `nav`, `address`)
- Skip-to-content link, visible focus states, `aria-*` attributes on interactive elements
- Respects `prefers-reduced-motion` (scroll-reveal and counters render instantly)
- Routes are lazy-loaded via `loadComponent` to keep the initial bundle small
- Per-route SEO via `SeoService` (title + meta description + Open Graph tags)

## Next steps / things to wire up before going live

1. Replace the emoji/CSS-based icons and mockups with real photography and an SVG icon set.
2. Connect `ContactFormComponent` to a real backend (e.g. a serverless function, Formspree, or
   your CRM) — it currently logs to the console on submit.
3. Add a `sitemap.xml` and register the site with Google Search Console.
4. Add real fleet/dashboard screenshots to replace the illustrative Technology page mockup.
