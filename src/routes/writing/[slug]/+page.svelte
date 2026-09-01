<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/config';

	let { data } = $props();
	let post = $derived(data.post);
</script>

<Seo
	title={post.title}
	description={post.excerpt}
	type="article"
	canonical={`${site.url}/writing/${post.slug}`}
/>

<article class="cv">
	<header class="cv-page-head">
		<p class="cv-kicker">/ writing</p>
		<h1>{post.title}</h1>
		<p class="cv-contact">
			<span class="cv-date">{post.date}</span>
			<span>·</span>
			<span class="cv-date">{post.readingTime}</span>
		</p>
	</header>

	<div class="cv-content">
		{#each post.content.split('\n\n') as para (para)}
			{#if para.startsWith('**') && para.endsWith('**')}
				<h2>{para.slice(2, -2)}</h2>
			{:else if para.startsWith('- ')}
				<ul>
					{#each para.split('\n') as line (line)}
						<li>{line.slice(2)}</li>
					{/each}
				</ul>
			{:else}
				<p>{@html para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
			{/if}
		{/each}
	</div>

	<footer class="article-footer">
		<p class="mono">— {site.name}</p>
		<a class="article-back focus-ring" href="/writing">← All writing</a>
	</footer>
</article>

<style>
	.cv-content {
		max-width: 38em;
	}
	.cv-content p {
		color: var(--text-secondary);
		font-size: 1.08rem;
		line-height: 1.8;
		margin-bottom: var(--sp-5);
	}
	.cv-content :global(strong) {
		color: var(--text);
		font-weight: 550;
	}
	.cv-content h2 {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: 1.55rem;
		letter-spacing: -0.02em;
		margin-top: var(--sp-10);
		margin-bottom: var(--sp-4);
		color: var(--text);
	}
	.cv-content ul {
		margin: 0 0 var(--sp-5);
		padding-left: 1.25rem;
		color: var(--text-secondary);
		list-style: none;
	}
	.cv-content ul li {
		margin-bottom: var(--sp-2);
		position: relative;
		padding-left: 1em;
		line-height: 1.7;
	}
	.cv-content ul li::before {
		content: '—';
		position: absolute;
		left: 0;
		color: var(--text-muted);
	}
</style>
