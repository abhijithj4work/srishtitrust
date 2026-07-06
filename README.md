# Srishti Trust — 3 Modern Design POCs

Three fully clickable website redesign concepts for [Srishti Trust](https://www.srishtitrust.org/), built for an affluent, eco-conscious audience. Each design is a complete, navigable site with hardcoded shop products and content from the live site.

## Live Demo URLs

| Design | Style | Live URL |
|--------|-------|----------|
| **Editorial Heritage** | Nila Jaipur-inspired — minimal, museum-catalog editorial | [abhijithj4work.github.io/srishti-editorial-poc](https://abhijithj4work.github.io/srishti-editorial-poc/) |
| **Artisan Atelier** | Rangaai-inspired — warm luxury craft commerce | [abhijithj4work.github.io/srishti-artisan-poc](https://abhijithj4work.github.io/srishti-artisan-poc/) |
| **Cinematic Impact** | Dark immersive documentary storytelling | [abhijithj4work.github.io/srishti-immersive-poc](https://abhijithj4work.github.io/srishti-immersive-poc/) |

Share these links directly with your client — no login required.

## Pages (all 3 designs)

- `/` — Home (hero, stats, mission, institutes, shop CTA)
- `/journey` — Our Journey since 1991
- `/institutes` — All 8 welfare institutes
- `/institutes/:slug` — Individual institute detail
- `/shop` — Hardcoded product catalog with cart
- `/contact` — Contact form (UI only)
- `/donate` — Donation CTA page

## Tech Stack

- Vite + React 18 + TypeScript
- React Router (client-side routing)
- Tailwind CSS v4
- Framer Motion (animations)
- Lenis (smooth scroll on Editorial & Immersive)

## Local Development

```bash
# Install and run any design
cd design-2-artisan   # or design-1-editorial / design-3-immersive
npm install
npm run dev
```

For local dev, temporarily set `base: '/'` in the design's `vite.config.ts`.

## Deploy to GitHub Pages

Deployed under the **abhijithj4work** GitHub account:

```bash
bash scripts/deploy-gh-pages.sh
```

This builds each design, pushes to its own repo's `gh-pages` branch, and enables GitHub Pages.

## Project Structure

```
srishtitrust/
├── shared/               # Shared content, products, assets
├── design-1-editorial/   # Nila-inspired editorial design
├── design-2-artisan/     # Rangaai-inspired commerce design
├── design-3-immersive/   # Cinematic dark design
└── scripts/              # Asset scraper + deploy script
```

## GitHub Repos

| Design | Source Repo |
|--------|-------------|
| Editorial | [abhijithj4work/srishti-editorial-poc](https://github.com/abhijithj4work/srishti-editorial-poc) |
| Artisan | [abhijithj4work/srishti-artisan-poc](https://github.com/abhijithj4work/srishti-artisan-poc) |
| Immersive | [abhijithj4work/srishti-immersive-poc](https://github.com/abhijithj4work/srishti-immersive-poc) |

## POC Limitations

- No real payment gateway (checkout shows a toast)
- Contact form is UI-only (no backend)
- Product images use stock/placeholder photography
