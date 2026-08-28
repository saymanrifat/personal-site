<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site, now } from '$lib/config';
</script>

<Seo title="Now" description={`What ${site.firstName} is currently focused on.`} />

<div class="cv">
	<header class="cv-page-head">
		<p class="cv-kicker mono">/ now</p>
		<h1>Now</h1>
		<p class="cv-tagline">
			What I'm focused on right now. Updated {now.updated}. Inspired by the{" "}
			<a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">now page</a>{" "}
			movement — a public answer to "what are you up to?"
		</p>
	</header>

	<div class="cv-prose">
		<p>
			Hi — I'm {site.firstName}. Here's what's taking up my attention lately — a short and honest
			snapshot, not a commitment.
		</p>
	</div>

	<ul class="cv-now-list">
		{#each now.items as item}
			<li><strong>{item.title}</strong> — {item.detail}</li>
		{/each}
	</ul>

	<p style="margin-top: var(--sp-6); font-size: 0.82rem; color: var(--text-muted); font-family: var(--font-mono);">
		Last updated {now.updated}.
	</p>
</div>