<div align="center">

![Parley — AI Meeting Assistant](https://parley-liart.vercel.app/opengraph-image.png)

# Parley

**A modern, responsive landing page for an AI meeting assistant.**

Built with Next.js 14, TypeScript, and CSS Modules — no UI kit, fully hand-crafted.

[Live Demo](https://parley-liart.vercel.app) · [Report an issue](../../issues)

</div>

---

## Overview

Parley is a marketing landing page for a fictional AI meeting assistant that auto-joins
calls, transcribes conversations, extracts action items, and sends follow-up emails.
The project showcases clean component architecture, a fully token-driven design system,
responsive layouts, and accessibility best practices — all without a component library.

> This is a front-end only project. The contact form is fully functional on the client
> (with validation and a toast confirmation) but makes no network requests.

## Features

- **9 hand-built sections** — navbar, hero, logo bar, features grid, testimonials, pricing, FAQ, contact form, and footer
- **Token-driven theming** — recolor the entire site by changing a single CSS variable
- **Interactive pricing** — monthly/annual billing toggle with live price updates
- **Accessible FAQ accordion** — full `aria-expanded` / `aria-controls` wiring
- **Toast notifications** — client-side confirmation on contact form submission via React Context
- **Fully responsive** — mobile hamburger menu and breakpoints at 920px / 640px
- **Accessibility first** — skip link, focus-visible rings, semantic landmarks, and `prefers-reduced-motion` support
- **SEO ready** — OpenGraph + Twitter cards, canonical URL, favicon, and themed metadata

## Tech Stack

| Category | Choice |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | CSS Modules + CSS custom properties |
| Fonts | Manrope + JetBrains Mono (`next/font`) |
| Hosting | Vercel (static export) |

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Production build
npm run build && npm run start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, and SEO metadata
│   ├── page.tsx            # Landing page composition
│   ├── not-found.tsx       # Custom 404 page
│   ├── globals.css         # Design tokens + global styles
│   ├── icon.svg            # Favicon
│   └── opengraph-image.png # Social share image
├── components/             # One folder per section (component + CSS module)
│   ├── Navbar/  Hero/  LogoBar/  Features/  Testimonials/
│   ├── Pricing/  FAQ/  ContactForm/  CTA/  Footer/
│   ├── Toast/              # Context-based toast system
│   └── Providers/          # Client context providers
└── lib/
    ├── constants.ts        # Navigation links
    └── data.ts             # Section content (features, pricing, FAQs, testimonials)
```

## Design System

The entire palette is driven by CSS custom properties in `globals.css`:

```css
:root {
  --color-primary: #f97316;
  --color-primary-dark: #ea580c;
  --color-primary-rgb: 249, 115, 22;
}
```

Change these three values and every button, badge, link, focus ring, gradient, and
icon updates instantly across all sections.

## Deployment

Deploys to [Vercel](https://vercel.com) with zero configuration:

1. Push the repo to GitHub
2. Import the project into Vercel
3. Vercel auto-detects Next.js — no build settings needed

## License

Released under the MIT License. This is a demo project built for portfolio purposes;
"Parley" and its branding are fictional.
