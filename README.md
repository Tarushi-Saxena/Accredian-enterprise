# Accredian Enterprise — Partial Clone (Next.js)

A structured, responsive landing experience inspired by [Accredian Enterprise](https://enterprise.accredian.com/). This is an **independent demo** for evaluation: similar information architecture and messaging, original component styling, and no copied assets.

## Live demo

Deploy this repository to Vercel (see [Deployment](#deployment)) and paste your production URL here after first deploy:

- **Vercel:** `https://<your-project>.vercel.app` *(replace after deploy)*

## Repository

Push this folder to your GitHub account:

```bash
cd accredian-enterprise
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

## Setup

Requirements: **Node.js 20+** and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Other scripts:

```bash
npm run lint
npm run build && npm start
```

## Approach

- **Next.js App Router** with a single marketing route (`src/app/page.tsx`) composing sections from `src/components/sections/` (barrel export in `index.ts`) so the page reads like a table of contents.
- **Design system (tokens + utilities)** in `src/app/globals.css`: semantic colors (`--ink`, `--accent`, `--surface`, …), subtle page backdrop, gradient text utility (`.text-gradient`), marquee animation (respects `prefers-reduced-motion`), and shared elevation patterns.
- **Typography** via `Plus_Jakarta_Sans` in `src/app/layout.tsx` for a more distinctive enterprise marketing feel than default Geist.
- **Smooth in-page navigation** via semantic `id` anchors, `scroll-behavior: smooth` on `html`, and `scroll-mt-*` on sections so the sticky header does not cover headings.
- **Scroll-spy navigation** (`src/hooks/useScrollSpy.ts` + `scrollSpySectionIds` in `src/lib/site-data.ts`) highlights the active section in the desktop pill nav and mobile drawer while scrolling.
- **Reusable UI primitives** (`Container`, `Section`, `SectionHeading`, `Card`, `StatCard`, `ButtonLink`, `Marquee`, `PillTabs`, `TextField`, `TextAreaField`, `EnterpriseLogo`) keep layout + interaction consistent across sections.
- **Content-driven copy** stays centralized in `src/lib/site-data.ts` so sections remain mostly presentational.
- **Brand + depth:** `EnterpriseLogo` (inline SVG) + `public/accredian-mark.svg` favicon; hero uses **React Three Fiber** (`HeroWebGL`) for a subtle rotating mesh and **pointer-based CSS 3D tilt** (`TiltSurface`) on the metrics card (`HeroRightColumn` is a client island because `next/dynamic` with `ssr: false` must live in a Client Component on Next 16).
- **API integration (mock):**
  - `GET /api/stats` returns public metrics (backed by `getPublicStats()` in `src/lib/stats-service.ts`, also used on the server render for fast first paint).
  - `POST /api/leads` accepts lead capture payloads and stores them in an **in-memory** array for demo purposes (`src/lib/leads-store.ts`). `GET /api/leads` is **development-only** for quick inspection.

## AI usage (required disclosure)

- **Where AI helped:** Drafting the information architecture from the public reference page, scaffolding React/Next.js components, Tailwind class composition, copy tightening, API route shapes, and this README structure.
- **What was improved manually:** Design tokens + visual hierarchy, scroll-spy behavior tuning, component boundaries (server sections vs client islands), FAQ accordion mechanics, lead form client validation, accessibility details (focus rings, `sr-only` labels, `aria-expanded`), production guard on `GET /api/leads`, and running `lint`/`build` until clean.

## Improvements with more time

- Replace in-memory lead storage with **Vercel Postgres / Supabase** and server-side validation (e.g. Zod) + rate limiting.
- Add **real partner logos** with proper licensing and an image CDN.
- **CMS** (Sanity/Contentful) for FAQs and program catalogs so marketing can edit without deploys.
- **Analytics** (Vercel Analytics / GA4) and **SEO** (JSON-LD, sitemap, OG images per section).
- **Motion** (Framer Motion) for subtle section reveals; **internationalization** if multi-region.

## Deployment (Vercel)

1. Push the project to GitHub.
2. In [Vercel](https://vercel.com), **Import** the repository.
3. Framework preset: **Next.js**. Root directory: `accredian-enterprise` if the repo is monorepo-style; otherwise repository root.
4. Deploy. The default build command `next build` is sufficient.

Optional: set `NODE_ENV=production` (default on Vercel) so `GET /api/leads` stays disabled in production.

## License

Demo/educational use only. Accredian branding references are illustrative for the assignment and do not imply affiliation.
