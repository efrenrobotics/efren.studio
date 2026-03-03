# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a personal portfolio/blog site built with **Next.js 16 App Router**, **Tailwind CSS v4**, and **MDX**.

### Page Routes

- `/` — Home (hero/intro)
- `/about` — About page
- `/resume` — Resume
- `/blog` — Blog index (reads from `content/blog/`)
- `/blog/[slug]` — Individual blog posts
- `/contact` — Contact page

### Content System

Blog posts live in `content/blog/*.mdx` with gray-matter frontmatter:

```mdx
---
title: "Post Title"
summary: "One-sentence description."
date: "2025-01-15"
---
```

`lib/blog.ts` reads and parses these files at build time using `fs`/`gray-matter`. `lib/mdx.tsx` compiles MDX strings at runtime using `@mdx-js/mdx` with `remark-gfm`. Blog post pages use `generateStaticParams` for SSG.

### Design System

Tailwind v4 with custom tokens defined in `app/globals.css` under `@theme inline`:

- **Colors**: `surface`, `surface-raised`, `surface-hover`, `text-primary`, `text-secondary`, `text-tertiary`, `accent` (#cb6015 orange), `accent-muted`, `border`
- **Fonts**: `--font-sans` (Geist) and `--font-mono` (Geist Mono) via `next/font/google`
- **Prose styles**: Custom `.prose` class in `globals.css` (no Tailwind Typography plugin)

### Layout Pattern

All pages use a consistent two-column layout via `<SplitLayout>` (280px fixed left, flexible right) wrapped in `<FadeIn>` for scroll-triggered animation. The root layout wraps everything in `<Navigation>` + `<main>` (max-w-[1200px]) + `<Footer>`.

### Animation

Uses `motion/react` (Framer Motion). Shared animation variants are in `lib/animations.ts` (`fadeInUp`, `staggerContainer`). `<FadeIn>` is a reusable wrapper that triggers on scroll via `useInView`.

### Path Aliases

`@/` maps to the project root (configured in `tsconfig.json`).
