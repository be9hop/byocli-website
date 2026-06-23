# byocli-website

Landing page for [BYOCLI](https://github.com/be9hop/byocli) — Bring Your Own CLI.

Built with [Astro](https://astro.build), deployed on [Cloudflare Pages](https://pages.cloudflare.com).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # static output → ./dist
npm run preview  # preview the production build locally
```

## Deploy (Cloudflare Pages)

This repo is wired for Cloudflare Pages with zero adapter config — Astro's static output is served directly.

**First-time setup:**
1. Push this repo to GitHub.
2. In the Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Select this repository.
4. Build settings (auto-detected, but confirm):
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20+ (set `NODE_VERSION = 20` env var if needed)
5. **Save and Deploy.** Cloudflare builds and publishes. You'll get a `*.pages.dev` URL.

Subsequent pushes to `main` auto-deploy. PRs get preview URLs automatically.

## Structure

```
src/
├── layouts/Base.astro        # <head>, fonts, SEO, shared URLs
├── components/
│   ├── Nav.astro             # sticky top nav with GitHub CTA
│   ├── Hero.astro            # headline + CSS app mockup
│   ├── Features.astro        # 6-card feature grid
│   ├── HowItWorks.astro      # 3-step explainer with code samples
│   ├── Install.astro         # download + build-from-source
│   └── Footer.astro
├── styles/global.css         # design tokens + base + utilities
└── pages/index.astro         # assembles the landing page
```

## Editing

- **Design tokens** (colors, fonts, spacing) live at the top of `src/styles/global.css` and mirror BYOCLI's app palette (`#000308` ink, `#17f5c1` mint).
- **GitHub URLs** are exported from `src/layouts/Base.astro` — change them in one place.
- **Hero mockup** is pure CSS/HTML in `Hero.astro` — swap for a real screenshot when one's available.

## License

GPL-3.0, matching the BYOCLI app.
