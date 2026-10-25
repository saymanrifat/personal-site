<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/config';
	import ThemeToggle from './ThemeToggle.svelte';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/skills', label: 'Skills' },
		{ href: '/writing', label: 'Notes' },
		{ href: '/now', label: 'Now' },
		{ href: '/contact', label: 'Contact' }
	];

	function normalize(path: string) {
		if (path === '/' || path === '') return '/';
		return path.replace(/\/+$/, '');
	}

	function isActive(href: string) {
		const current = normalize(page.url.pathname);
		const target = normalize(href);
		if (target === '/') return current === '/';
		return current === target || current.startsWith(`${target}/`);
	}
</script>

<header class="site-header">
	<div class="shell bar">
		<a class="brand" href="/" aria-label="{site.name} — home">
			<span class="mark" aria-hidden="true">S</span>
			<span class="name">{site.firstName} {site.lastName}</span>
		</a>

		<nav aria-label="Primary">
			<ul>
				{#each links as link (link.href)}
					<li>
						<a href={link.href} aria-current={isActive(link.href) ? 'page' : undefined}>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="actions">
			<a class="github" href={site.github} target="_blank" rel="noopener noreferrer">
				GitHub
				<span class="visually-hidden">(opens in a new tab)</span>
			</a>
			<ThemeToggle />
		</div>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 40;
		height: var(--header-h);
		background: var(--header-bg);
		backdrop-filter: saturate(140%) blur(14px);
		-webkit-backdrop-filter: saturate(140%) blur(14px);
		border-bottom: 1px solid var(--border);
	}

	.bar {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.25rem;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.7rem;
		min-width: 0;
		color: var(--text);
		text-decoration: none;
		font-weight: 500;
		letter-spacing: -0.02em;
	}

	.brand:hover {
		color: var(--text);
		text-decoration: none;
	}

	.mark {
		display: grid;
		place-items: center;
		width: 1.55rem;
		height: 1.55rem;
		border: 1px solid var(--border-strong);
		font-family: var(--font-display);
		font-size: 0.95rem;
		line-height: 1;
		color: var(--text);
	}

	.name {
		white-space: nowrap;
	}

	nav {
		min-width: 0;
	}

	ul {
		display: flex;
		align-items: center;
		gap: clamp(0.85rem, 1.8vw, 1.6rem);
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav a {
		display: inline-block;
		padding: 0.45rem 0;
		color: var(--text-secondary);
		font-size: 0.82rem;
		font-weight: 500;
		letter-spacing: 0.01em;
		text-decoration: none;
		white-space: nowrap;
	}

	nav a:hover,
	nav a[aria-current='page'] {
		color: var(--text);
		text-decoration: none;
	}

	nav a[aria-current='page'] {
		box-shadow: inset 0 -1px 0 var(--accent);
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 0.85rem;
	}

	.github {
		color: var(--text-secondary);
		font-size: 0.82rem;
		font-weight: 500;
		text-decoration: none;
	}

	.github:hover {
		color: var(--text);
		text-decoration: none;
	}

	@media (max-width: 860px) {
		.github {
			display: none;
		}

		.name {
			display: none;
		}

		ul {
			gap: 0.85rem;
		}
	}

	@media (max-width: 640px) {
		nav {
			flex: 1;
			min-width: 0;
		}

		ul {
			justify-content: flex-end;
			flex-wrap: nowrap;
			gap: 0.75rem;
		}

		ul li:first-child {
			display: none;
		}

		nav a {
			font-size: 0.78rem;
		}
	}
</style>
