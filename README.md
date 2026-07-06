# Srishti Trust — 3 Artisan Cinematic POCs

Three fully clickable Artisan-style website redesign concepts for [Srishti Trust](https://www.srishtitrust.org/), built for an affluent, eco-conscious audience. Each design is a complete, navigable commerce-first craft site with hardcoded shop products and content from the live site.

## Live Demo URLs

| Design | Style | Live URL |
|--------|-------|----------|
| **Artisan Warm** | Terracotta / olive luxury craft commerce | [abhijithj4work.github.io/srishti-artisan-warm-poc](https://abhijithj4work.github.io/srishti-artisan-warm-poc/) |
| **Artisan Noir** | Dark cinematic gold atelier | [abhijithj4work.github.io/srishti-artisan-noir-poc](https://abhijithj4work.github.io/srishti-artisan-noir-poc/) |
| **Artisan Botanic** | Forest / sage organic heritage craft | [abhijithj4work.github.io/srishti-artisan-botanic-poc](https://abhijithj4work.github.io/srishti-artisan-botanic-poc/) |

Share these links directly with your client — no login required.

## Pages (all 3 designs)

- `/` — Home (hero, stats, bento commerce sections)
- `/journey` — Our Journey since 1991
- `/institutes` — All 8 welfare institutes
- `/institutes/:slug` — Individual institute detail
- `/shop` — Hardcoded product catalog with cart
- `/contact` — Contact form (UI only)
- `/donate` — Donation CTA page

## Tech Stack

- Vite + React + TypeScript
- React Router (client-side routing)
- Tailwind CSS v4
- Framer Motion (animations)
- Lenis (smooth scroll)

## Local Development

```bash
cd design-1-artisan-warm   # or design-2-artisan-noir / design-3-artisan-botanic
npm install
npm run dev
```

## Deploy to GitHub Pages

```bash
bash scripts/deploy-gh-pages.sh
```

## Project Structure

```
srishtitrust/
├── shared/                  # Shared content, products, assets
├── design-1-artisan-warm/     # Terracotta cinematic commerce
├── design-2-artisan-noir/     # Dark gold cinematic commerce
├── design-3-artisan-botanic/  # Forest sage cinematic commerce
└── scripts/                 # Deploy script
```

## GitHub Repos

| Design | Source Repo |
|--------|-------------|
| Warm | [abhijithj4work/srishti-artisan-warm-poc](https://github.com/abhijithj4work/srishti-artisan-warm-poc) |
| Noir | [abhijithj4work/srishti-artisan-noir-poc](https://github.com/abhijithj4work/srishti-artisan-noir-poc) |
| Botanic | [abhijithj4work/srishti-artisan-botanic-poc](https://github.com/abhijithj4work/srishti-artisan-botanic-poc) |

## POC Limitations

- No real payment gateway (checkout shows a toast)
- Contact form is UI-only (no backend)
- Product images from srishtitrust.org scraped assets
