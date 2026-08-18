# ShipFrame — Landing Page

Marketing landing page for **[ShipFrame](https://github.com/juanitourquiza/shipframe)**, the open-source AI coding workflow toolkit for teams that *plan, prove & ship*.

🌐 **Live:** https://shipframe.hackeruna.com

Built with **Angular 22** (standalone, signals, zoneless), **Tailwind CSS v4**, and prerendered to **static HTML (SSG)** for fast, SEO-friendly hosting.

---

## ✨ Features

- **Bilingual** — English (`/en`) and Spanish (`/es`) on separate, indexable URLs with `hreflang` alternates.
- **Dark & light mode** — respects `prefers-color-scheme`, persists choice in `localStorage`, and supports a `?theme=dark|light` deep-link override.
- **Fully responsive** — mobile-first, no horizontal overflow.
- **SEO / AEO / GEO optimized:**
  - Per-locale `<title>`, meta description, keywords, canonical and `hreflang`.
  - Open Graph + Twitter Card metadata with a generated OG image.
  - JSON-LD structured data: `SoftwareApplication`, `Organization` and a full `FAQPage` (great for answer/generative engines).
  - `sitemap.xml`, `robots.txt` (explicitly allowing AI crawlers: GPTBot, ClaudeBot, PerplexityBot, etc.).
  - Prerendered static HTML so crawlers and LLMs get complete content with zero JS.
- **Accessible** — semantic landmarks, skip link, keyboard-friendly, reduced-motion aware, native `<details>` FAQ.
- **Zero external runtime deps in the UI** — icons are inline SVGs; only Google Fonts is loaded.

---

## 🧱 Tech stack

| Area | Choice |
|---|---|
| Framework | Angular 22 (standalone components, signals, zoneless, OnPush) |
| Styling | Tailwind CSS v4 + CSS custom-property design tokens |
| Rendering | Static Site Generation (prerender, `outputMode: "static"`) |
| i18n | Signal-based dictionaries + locale-prefixed routes (`/en`, `/es`) |
| Fonts | Inter + JetBrains Mono |

---

## 🚀 Local development

```bash
npm install
npm start          # dev server at http://localhost:4200 (redirects to /en)
```

Available locales while developing: `http://localhost:4200/en` and `http://localhost:4200/es`.

## 🏗️ Production build (static)

```bash
npm run build
```

The prerendered site is emitted to:

```
dist/landing-shipframe/browser/
├── index.html          # root — redirects to /en/
├── en/index.html       # English (prerendered)
├── es/index.html       # Spanish (prerendered)
├── og-image.png
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── .htaccess           # Apache/Cloudways routing + caching
└── *.js / *.css        # hashed assets
```

Preview the exact static output locally:

```bash
npm run preview        # builds and serves at http://localhost:4300
```

---

## ☁️ Deploy to Cloudways (`shipframe.hackeruna.com`)

The site is static, so no Node runtime is required on the server.

1. Build locally: `npm run build`.
2. Upload the **contents of `dist/landing-shipframe/browser/`** (including the hidden `.htaccess`) to the application's web root on Cloudways (e.g. `public_html/`).
   - Via SFTP/SCP:
     ```bash
     scp -r dist/landing-shipframe/browser/. user@server:/path/to/public_html/
     ```
   - Or zip and extract on the server. Make sure the dotfile `.htaccess` is included.
3. Point the subdomain `shipframe.hackeruna.com` to that application in Cloudways and enable the free Let's Encrypt SSL.
4. The bundled `.htaccess` handles: HTTPS redirect, root → language redirect (Spanish browsers → `/es/`, everyone else → `/en/`), trailing-slash normalization, gzip compression and long-lived asset caching.

> Tip: after DNS resolves, validate rich results with Google's [Rich Results Test](https://search.google.com/test/rich-results) and submit `https://shipframe.hackeruna.com/sitemap.xml` in Google Search Console.

---

## 📁 Project structure

```
src/
├── app/
│   ├── core/
│   │   ├── i18n/        # content.model + content.en + content.es + i18n.service
│   │   ├── seo/         # SeoService (meta, canonical, hreflang, JSON-LD)
│   │   └── theme/       # ThemeService (dark/light)
│   ├── layout/          # header, footer, logo
│   ├── sections/        # hero, trust, lifecycle, problem, features, install, audience, faq, cta
│   ├── shared/          # icon, copy-button, reveal directive
│   └── pages/home/      # page composing all sections
├── index.html
└── styles.scss          # global tokens + theme variables
design/og-image.svg      # source for the Open Graph image
```

To edit copy, change [`src/app/core/i18n/content.en.ts`](src/app/core/i18n/content.en.ts) and [`content.es.ts`](src/app/core/i18n/content.es.ts) — both share the `Content` interface so translations stay in sync.

---

## 📄 License

MIT © [hackeruna](https://hackeruna.com) — contact: **j@hackeruna.com**

Landing for [ShipFrame](https://github.com/juanitourquiza/shipframe) (also MIT).
