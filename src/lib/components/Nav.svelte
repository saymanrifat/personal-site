<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/config';
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
		<a class="logo focus-ring" href="/" aria-label="{site.name} — home">
			<span class="mono">~/{site.firstName.toLowerCase()}</span>
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
		background: color-mix(in srgb, var(--bg) 85%, transparent);
		backdrop-filter: saturate(140%) blur(8px);
		-webkit-backdrop-filter: saturate(140%) blur(8px);
		border-bottom: 1px solid var(--border);
	}
	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--sp-2);
		padding-top: var(--sp-1);
		padding-bottom: var(--sp-1);
		max-width: 52rem;
		flex-wrap: wrap;
	}
	.logo {
		font-weight: 600;
		color: var(--text);
		font-size: 0.95rem;
		text-decoration: none;
	}
	.logo:hover {
		text-decoration: none;
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
		display: inline-block;
		padding: var(--sp-1) var(--sp-2);
		border-radius: var(--radius);
		color: var(--text-secondary);
		font-size: 0.85rem;
		text-decoration: none;
		white-space: nowrap;
	}
	.nav-list a:hover {
		color: var(--text);
		background: var(--bg-subtle);
		text-decoration: none;
	}
	.nav-list a[aria-current='page'] {
		color: var(--text);
		font-weight: 600;
	}
	@media (max-width: 640px) {
		.site-header {
			position: sticky;
		}
		.nav-inner {
			gap: var(--sp-2) var(--sp-1);
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
			font-size: 0.85rem;
		}
	}
	@media (max-width: 400px) {
		.nav-list a {
			font-size: 0.8rem;
			padding: var(--sp-1) var(--sp-2);
		}
	}
</style>