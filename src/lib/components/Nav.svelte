<script lang="ts">
	import { page } from '$app/state';
	import ThemeToggle from './ThemeToggle.svelte';

	const links = [
		{ href: '/', label: 'Home', short: 'Work' },
		{ href: '/about', label: 'About', short: 'About' },
		{ href: '/skills', label: 'Skills', short: 'Skills' },
		{ href: '/writing', label: 'Writing', short: 'Notes' },
		{ href: '/now', label: 'Now', short: 'Now' },
		{ href: '/contact', label: 'Contact', short: 'Contact' }
	];

	function isActive(href: string) {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}
</script>

<aside class="signal-rail" aria-label="Portfolio index">
	<a class="rail-mark focus-ring" href="/" aria-label="Back to top">
		<img src="/assets/signal-mark.png" alt="" />
		<span>/</span>
		<strong>sayman</strong>
	</a>
	<div class="rail-center"><span>SOFTWARE DEVELOPER · DHAKA</span></div>
	<div class="rail-bottom"><span class="status-dot"></span><span>SELECT WORK</span></div>
</aside>

<header class="site-header">
	<div class="container nav-inner">
		<a class="brand focus-ring" href="/" aria-label="Sayman Rifat — home">
			<img src="/assets/signal-mark.png" alt="" />
			<span><b>sayman</b><i>/</i><b>rifat</b></span>
		</a>

		<nav aria-label="Primary">
			<ul class="nav-list">
				{#each links as link, i (link.href)}
					<li>
						<a href={link.href} class="focus-ring" aria-current={isActive(link.href) ? 'page' : undefined}>
							<span class="nav-index">0{i + 1}</span>{link.short}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="header-actions">
			<a class="header-github focus-ring" href="https://github.com/saymanrifat" target="_blank" rel="noreferrer">GitHub ↗</a>
			<ThemeToggle />
		</div>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 40;
		margin-left: 5.25rem;
		height: 5.25rem;
		background: color-mix(in srgb, var(--bg) 88%, transparent);
		backdrop-filter: saturate(160%) blur(16px);
		-webkit-backdrop-filter: saturate(160%) blur(16px);
		border-bottom: 1px solid var(--border);
	}
	.nav-inner {
		height: 100%;
		max-width: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding: 0 clamp(1.25rem, 5vw, 5.1rem);
	}
	.brand { display: inline-flex; align-items: center; gap: .7rem; color: var(--text); text-decoration: none; transition: transform .22s var(--ease-out); }
	.brand:hover { text-decoration: none; transform: translateY(-2px); }
	.brand img { width: 1.8rem; height: 1.8rem; object-fit: contain; }
	.brand span { display: flex; align-items: center; gap: .42rem; font: 600 .82rem/1 var(--font-sans); letter-spacing: .02em; text-transform: uppercase; }
	.brand i { color: var(--accent); font-style: normal; font-weight: 400; }
	.nav-list { display: flex; align-items: center; gap: clamp(.65rem, 2vw, 2rem); list-style: none; margin: 0; padding: 0; }
	.nav-list a { position: relative; display: inline-block; padding: .45rem 0; color: var(--text-secondary); font: 500 .7rem/1 var(--font-sans); letter-spacing: .04em; text-decoration: none; white-space: nowrap; transition: color .22s var(--ease-out); }
	.nav-list a:hover, .nav-list a[aria-current='page'] { color: var(--text); text-decoration: none; }
	.nav-list a::after { content: ''; position: absolute; left: 1.35rem; right: 0; bottom: .15rem; height: 1px; background: var(--accent); transform: scaleX(0); transform-origin: left; transition: transform .25s var(--ease-out); }
	.nav-list a:hover::after, .nav-list a[aria-current='page']::after { transform: scaleX(1); }
	.nav-index { color: var(--accent); margin-right: .38rem; font-size: .53rem; }
	.header-actions { display: flex; align-items: center; gap: 1rem; }
	.header-github { color: var(--accent); font: 600 .7rem/1 var(--font-sans); letter-spacing: .03em; text-decoration: none; }
	.header-github:hover { color: var(--text); text-decoration: none; }
	.signal-rail { position: fixed; z-index: 45; inset: 0 auto 0 0; width: 5.25rem; display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 1.65rem 0 1.5rem; border-right: 1px solid var(--border); background: color-mix(in srgb, var(--bg) 92%, transparent); }
	.rail-mark { display: flex; flex-direction: column; align-items: center; gap: .24rem; color: var(--text); font: 600 .58rem/1 var(--font-sans); letter-spacing: .08em; text-transform: uppercase; text-decoration: none; }
	.rail-mark:hover { text-decoration: none; }
	.rail-mark img { width: 1.95rem; height: 1.95rem; object-fit: contain; margin-bottom: .15rem; }
	.rail-mark span { color: var(--accent); font-size: .95rem; }
	.rail-center { flex: 1; display: flex; align-items: center; }
	.rail-center span, .rail-bottom { writing-mode: vertical-rl; transform: rotate(180deg); font: .5rem/1 var(--font-sans); letter-spacing: .17em; text-transform: uppercase; color: var(--text-muted); }
	.rail-bottom { display: flex; align-items: center; gap: .65rem; }
	.status-dot { width: .42rem; height: .42rem; display: inline-block; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 .3rem color-mix(in srgb, var(--accent) 15%, transparent); animation: rail-pulse 2.8s ease-in-out infinite; }
	@keyframes rail-pulse { 0%,100% { opacity: .55; transform: scale(.88); } 50% { opacity: 1; transform: scale(1); } }
	@media (max-width: 900px) { .nav-list { gap: .8rem; } .nav-list a { font-size: .62rem; } .header-github { display: none; } }
	@media (max-width: 640px) { .signal-rail { display: none; } .site-header { margin-left: 0; height: 4.5rem; } .nav-inner { padding: 0 1.25rem; gap: 1rem; } .brand span { font-size: .75rem; } nav { flex: 1; overflow: hidden; } .nav-list { gap: 1rem; overflow-x: auto; justify-content: flex-end; scrollbar-width: none; } .nav-list::-webkit-scrollbar { display: none; } .nav-list a { font-size: .61rem; } .nav-list li:first-child { display: none; } .header-actions { gap: .35rem; } }
</style>
