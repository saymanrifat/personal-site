<script lang="ts">
	import { page } from '$app/state';
	import ThemeToggle from './ThemeToggle.svelte';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/skills', label: 'Skills' },
		{ href: '/writing', label: 'Writing' },
		{ href: '/now', label: 'Now' },
		{ href: '/contact', label: 'Contact' }
	];

	function isActive(href: string) {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}
</script>

<header class="site-header">
	<div class="container nav-inner">
		<a class="logo focus-ring" href="/" aria-label="Sayman Rifat — home">
			<span class="mono">~/sayman</span>
		</a>

		<nav aria-label="Primary">
			<ul class="nav-list">
				{#each links as link (link.href)}
					<li>
						<a href={link.href} class="focus-ring" aria-current={isActive(link.href) ? 'page' : undefined}>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<ThemeToggle />
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 40;
		background: color-mix(in srgb, var(--bg) 78%, transparent);
		backdrop-filter: saturate(160%) blur(16px);
		-webkit-backdrop-filter: saturate(160%) blur(16px);
		border-bottom: 1px solid var(--border);
	}
	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--sp-3);
		padding-top: var(--sp-3);
		padding-bottom: var(--sp-3);
		max-width: var(--content);
		flex-wrap: wrap;
	}
	.logo {
		font-weight: 500;
		color: var(--text);
		font-size: 0.88rem;
		letter-spacing: 0.04em;
		text-decoration: none;
	}
	.logo :global(.mono) {
		color: var(--text);
		letter-spacing: 0.08em;
	}
	.logo:hover {
		text-decoration: none;
		color: var(--text);
	}
	.nav-list {
		display: flex;
		align-items: center;
		gap: var(--sp-1);
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.nav-list a {
		position: relative;
		display: inline-block;
		padding: var(--sp-1) var(--sp-2);
		color: var(--text-secondary);
		font-size: 0.82rem;
		letter-spacing: 0.02em;
		text-decoration: none;
		white-space: nowrap;
		transition: color var(--duration) var(--ease);
	}
	.nav-list a::after {
		content: '';
		position: absolute;
		left: var(--sp-2);
		right: var(--sp-2);
		bottom: 0.05rem;
		height: 1px;
		background: currentColor;
		transform: scaleX(0);
		transform-origin: center;
		transition: transform var(--duration-slow) var(--ease);
	}
	.nav-list a:hover {
		color: var(--text);
		text-decoration: none;
	}
	.nav-list a:hover::after,
	.nav-list a[aria-current='page']::after {
		transform: scaleX(1);
	}
	.nav-list a[aria-current='page'] {
		color: var(--text);
	}
	@media (max-width: 640px) {
		.nav-inner {
			gap: var(--sp-2) var(--sp-1);
			padding-top: var(--sp-2);
			padding-bottom: var(--sp-2);
		}
		.nav-list {
			order: 3;
			width: 100%;
			justify-content: flex-start;
			overflow-x: auto;
			-webkit-overflow-scrolling: touch;
			padding-bottom: var(--sp-1);
		}
		.nav-list a {
			padding: var(--sp-1) var(--sp-2);
			font-size: 0.8rem;
		}
	}
</style>
