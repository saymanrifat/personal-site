# Sayman's Personal Site

A calm, content-rich, SEO-optimized personal website built with **SvelteKit**. Fully static output (`adapter-static`) for performance and SEO.

## Stack
- **SvelteKit** (Vite + adapter-static)
- **Svelte 5** runes (`$props`, `$derived`, `$state`)
- **TypeScript**
- Self-hosted fonts (Inter, Instrument Serif, JetBrains Mono) via `@fontsource`
- Dark/light theme — no-flash init, localStorage persistence, system-preference fallback

## Pages
- `/` — Home (hero, selected work, about / right now, experience, notes, contact)
- `/about` — About (bio, experience, principles)
- `/skills` — Skills & stack
- `/writing` — Notes & essays
- `/writing/[slug]` — Individual notes (prerendered)
- `/now` — Now (what I'm focused on)
- `/contact` — Contact
- `/404` — Not found
- `/robots.txt` & `/sitemap.xml` — generated at build time

## Local dev
```bash
npm install
npm run dev        # dev server
npm run build      # production build -> /build
npm run preview    # preview the production build
npm run check      # svelte-check / types
```

## Editing content
All site content (name, tagline, skills, experience, principles, projects, notes, socials) lives in `src/lib/config.ts`.

## SEO
- Per-page `<title>`, description, canonical, Open Graph & Twitter cards (`Seo.svelte`)
- JSON-LD `Person` / `WebSite` (and `BlogPosting` on notes)
- `robots.txt` + `sitemap.xml`
- `trailingSlash: 'always'` so static hosts serve `/about` from `about/index.html`
- Route-level prerendering, including note pages via `entries()`

## Theme
`src/lib/stores/theme.ts` — dark/light toggle. Persists to `localStorage['sayman-theme']`, defaults to system preference, no flash-of-wrong-theme (inline init script in `+layout.svelte`).

## License
Private / personal use.
