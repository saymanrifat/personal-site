<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/config';
	import { formatDate } from '$lib/format';
	import { parseNote } from '$lib/markdown';

	let { data } = $props();
	let post = $derived(data.post);
	let blocks = $derived(parseNote(post.content));
</script>

<Seo
	title={post.title}
	description={post.excerpt}
	type="article"
	published={post.date}
	canonical={`${site.url}/writing/${post.slug}`}
/>

<article class="page">
	<header class="page-head">
		<p class="kicker">Notes</p>
		<h1>{post.title}</h1>
		<p class="entry-meta">
			<time datetime={post.date}>{formatDate(post.date)}</time>
			<span aria-hidden="true">·</span>
			<span>{post.readingTime}</span>
		</p>
	</header>

	<div class="article-body">
		{#each blocks as block, i (i)}
			{#if block.type === 'heading'}
				<h2>{block.text}</h2>
			{:else if block.type === 'list'}
				<ul>
					{#each block.items as item, j (j)}
						<li>{item}</li>
					{/each}
				</ul>
			{:else}
				<p>{@html block.html}</p>
			{/if}
		{/each}
	</div>

	<footer class="article-footer">
		<p class="mono">— {site.name}</p>
		<a class="text-link" href="/writing">← All notes</a>
	</footer>
</article>
