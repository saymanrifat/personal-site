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
		<p class="cv-kicker mono">/ writing</p>
		<h1>{post.title}</h1>
		<p class="cv-contact" style="gap: var(--sp-3);">
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

	<footer style="margin-top: var(--sp-12); padding-top: var(--sp-6); border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
		<p class="mono" style="margin: 0; color: var(--text-muted);">— {site.name}</p>
		<a href="/writing" style="font-size: 0.85rem; color: var(--text-muted);">← All writing</a>
	</footer>
</article>

<style>
	.cv-content {
		max-width: 38em;
	}
	.cv-content p {
		color: var(--text-secondary);
		font-size: 1.05rem;
		line-height: 1.8;
		margin-bottom: var(--sp-5);
	}
	.cv-content strong {
		color: var(--text);
	}
	.cv-content h2 {
		font-size: 1.4rem;
		margin-top: var(--sp-8);
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
	}
	.cv-content ul li::before {
		content: "—";
		position: absolute;
		left: 0;
		color: var(--text-muted);
	}
</style>