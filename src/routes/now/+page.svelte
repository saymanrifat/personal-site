<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site, now } from '$lib/config';
</script>

<Seo title="Now" description="What Sayman is currently focused on." />

<div class="container">
	<header class="page-head">
		<p class="mono kicker">/ now</p>
		<h1>Now</h1>
		<p class="sub">
			What I'm focused on right now. Updated {now.updated}. Inspired by the{' '}
			<a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">now page</a>{' '}
			movement — a public answer to "what are you up to?"
		</p>
	</header>

	<div class="now-copy">
		<p>
			Hi — I'm {site.firstName}. Here's what's taking up my attention lately / a short and honest
			snapshot, not a commitment.
		</p>
	</div>

	<ul class="now-list">
		{#each now.items as item (item.title)}
			<li class="now-item">
				<h2>{item.title}</h2>
				<p>{item.detail}</p>
			</li>
		{/each}
	</ul>

	<p class="note">Last updated {now.updated}.</p>
</div>

<style>
	.page-head { margin-bottom: var(--sp-8); }
	.sub { color: var(--text-secondary); max-width: 38em; }
	.now-copy { max-width: 38em; color: var(--text-secondary); }
	.now-list {
		list-style: none;
		margin: var(--sp-6) 0 0;
		padding: 0;
		display: grid;
		gap: var(--sp-3);
	}
	.now-item {
		padding: var(--sp-5) var(--sp-6);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		background: var(--bg-elevated);
	}
	.now-item h2 { font-size: 1.15rem; margin-bottom: var(--sp-2); }
	.now-item p { color: var(--text-secondary); margin: 0; }
	.note { margin-top: var(--sp-6); color: var(--text-muted); font-size: 0.9rem; }
</style>