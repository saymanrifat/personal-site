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
		background: color-mix(in srgb, var(--bg) 82%, transparent);
		backdrop-filter: saturate(140%) blur(8px);
		-webkit-backdrop-filter: saturate(140%) blur(8px);
		border-bottom: 1px solid var(--border);
	}
	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--sp-4);
		height: 4rem;
		max-width: 56rem;
	}
	.logo {
		font-weight: 600;
		color: var(--text);
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
		padding: var(--sp-2) var(--sp-3);
		border-radius: var(--radius);
		color: var(--text-secondary);
		font-size: 0.95rem;
		text-decoration: none;
	}
	.nav-list a:hover {
		color: var(--text);
		background: var(--bg-subtle);
	}
	.nav-list a[aria-current='page'] {
		color: var(--text);
		font-weight: 600;
	}
	@media (max-width: 480px) {
		.nav-list a {
			padding: var(--sp-2);
			font-size: 0.9rem;
		}
	}
</style>