# Sayman's Personal Site

A calm, content-rich, SEO-optimized personal website built with **SvelteKit**. Fully static output (`adapter-static`) for maximum performance and SEO.

## Stack
- **SvelteKit** (Vite + adapter-static)
- **Svelte 5** runes (`$props`, `$derived`, `$state`)
- **TypeScript**
- Self-hosted variable fonts (Inter + JetBrains Mono) via `@fontsource`
- Dark/light theme — no-flash init, localStorage persistence, system-preference fallback

## Pages
- `/` — Home (hero, focus areas, skills preview, latest writing, principles)
- `/about` — About (bio, experience, principles)
- `/skills` — Skills & stack
- `/writing` — Notes & essays (blog index)
- `/writing/[slug]` — Individual posts (prerendered)
- `/now` — Now (what I'm focused on)
- `/contact` — Contact
- `/404` — Not found
- `/robots.txt` & `/sitemap.xml` — auto-generated SEO

## Local dev
```bash
npm install
npm run dev        # dev server
npm run build      # production build -> /build (fully static, precompressed .br/.gz)
npm run preview    # preview the production build
```

## Editing content
All site content (name, tagline, skills, experience, principles, blog posts, socials) lives in one place — `src/lib/config.ts`. Edit that single file to update the whole site.

## SEO
- Per-page `<title>`, description, canonical, Open Graph & Twitter cards (`Seo.svelte`)
- JSON-LD `Person` structured data
- `robots.txt` + `sitemap.xml`
- Route-level `prerender: true` — static HTML for every page, including blog posts

## Theme
`src/lib/stores/theme.ts` — dark/light toggle. Persists to `localStorage['sayman-theme']`, defaults to system preference, no flash-of-wrong-theme (inline init script in `+layout.svelte`).

## License
Private / personal use.
