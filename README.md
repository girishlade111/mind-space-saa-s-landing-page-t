# MindSpace — SaaS Landing Page Template

A modern, fully responsive SaaS landing page for **MindSpace**, a fictional AI-powered meeting-notes / team-memory product. Built as a polished, component-driven marketing page with hero, social proof, features, stats, pricing, testimonials, and FAQ sections.

## Features

- Sticky navigation bar with mobile menu (`lp-navbar-1`)
- Hero section with product messaging and CTA (`hero-section-2`)
- Logo / social-proof strip (`logo-section-7`)
- Testimonial cards with author avatars (`testimonials-section-1`)
- Bento-style feature grid (`bento-grid-6`)
- Detailed feature section (`feature-section-9`)
- Stats / metrics band (`stats-section-4`)
- Three-tier pricing table (`pricing-section-3`)
- FAQ accordion (`faq-section-2`)
- Footer with link columns (`footer-1`)
- Dark-mode support via `next-themes` + theme provider
- shadcn/ui component library (Radix primitives) and Lucide icons
- Tailwind CSS v4 styling

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4, `tailwindcss-animate`, `tw-animate-css`, Geist fonts
- **UI:** shadcn/ui (Radix UI primitives), `lucide-react`, `class-variance-authority`, `clsx`
- **Extras:** `next-themes`, `embla-carousel-react`, `recharts`, `react-hook-form` + `zod`
- **Package manager:** pnpm (pnpm-lock.yaml included)

## Quick Start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
pnpm build
pnpm start
```

## Project Structure

```
app/                  # App Router pages and global styles
  page.tsx            # Landing page composition (all sections)
  layout.tsx          # Root layout, fonts, theme provider
  globals.css         # Tailwind + custom styles
components/
  pro-blocks/         # Landing-page building blocks (navbar, hero, sections…)
  ui/                 # shadcn/ui primitives
  theme-provider.tsx
lib/                  # Utilities (cn, etc.)
public/               # Static assets (avatars, logos)
next.config.mjs       # Next.js config (images unoptimized)
components.json       # shadcn/ui config
```

## Environment Variables

None required — the page is fully static, no API routes or backend.

## Deployment

- The repo can be deployed to Vercel with zero config (`pnpm build`).
- Static export is enabled (`output: 'export'`), so any static host (GitHub Pages, Cloudflare Pages, Netlify) works too. When serving from a subpath (e.g. GitHub Pages `https://girishlade111.github.io/mind-space-saa-s-landing-page-t/`), `basePath` is set to `/mind-space-saa-s-landing-page-t` — remove it if deploying to a root domain.

## Customization

Swap the marketing copy in `app/page.tsx` (testimonials, stats, pricing tiers) and the section components under `components/pro-blocks/landing-page/` to turn this template into any SaaS landing page.

---

Built by Girish Lade · https://ladestack.in
