<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { site, now } from '$lib/config';
</script>

<Seo title="Now" description="What Sayman is currently focused on." />

<div class="page">
	<header class="page-head">
		<p class="kicker">Now</p>
		<h1>Now</h1>
		<p class="lede">
			What I'm focused on right now. Updated {now.updated}. Inspired by the
			<a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">
				now page<span class="visually-hidden"> (opens in a new tab)</span>
			</a>
			movement — a public answer to "what are you up to?"
		</p>
	</header>

	<Reveal>
		<div class="prose">
			<p>
				Hi — I'm {site.firstName}. Here's what's taking up my attention lately — a short and honest
				snapshot, not a commitment.
			</p>
		</div>

		<ul class="now-list">
			{#each now.items as item (item.title)}
				<li>
					<span class="now-title">{item.title}</span>
					<span class="now-detail">{item.detail}</span>
				</li>
			{/each}
		</ul>

		<p class="now-updated">Last updated {now.updated}.</p>
	</Reveal>
</div>
