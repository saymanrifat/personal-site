<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/config';

	let { data } = $props();
	const post = data.post;
</script>

<Seo
	title={post.title}
	description={post.excerpt}
	type="article"
	canonical={`${site.url}/writing/${post.slug}`}
/>

<div class="container post-wrap">
	<article>
		<header class="post-head">
			<p class="mono kicker">/ writing</p>
			<h1>{post.title}</h1>
			<div class="post-meta">
				<span class="mono date">{post.date}</span>
				<span class="mono reading">{post.readingTime}</span>
			</div>
			<ul class="tags">
				{#each post.tags as tag (tag)}
					<li class="tag">{tag}</li>
				{/each}
			</ul>
		</header>

		<div class="content">
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
	</article>

	<footer class="post-footer">
		<p class="mono">— {site.name}</p>
		<a class="back" href="/writing">← All writing</a>
	</footer>
</div>

<style>
	.post-wrap { padding-top: var(--sp-8); }
	.post-head { margin-bottom: var(--sp-10); }
	.kicker { color: var(--accent); margin-bottom: var(--sp-3); }
	.post-head h1 { margin-bottom: var(--sp-3); max-width: 20em; }
	.post-meta { display: flex; gap: var(--sp-4); margin-bottom: var(--sp-4); }
	.post-meta .date { color: var(--accent); }
	.post-meta .reading { color: var(--text-muted); }
	.tags { display: flex; gap: var(--sp-2); flex-wrap: wrap; list-style: none; margin: 0; padding: 0; }
	.tag { font-size: 0.75rem; font-weight: 500; padding: var(--sp-1) var(--sp-2); border-radius: var(--radius-sm); background: var(--accent-soft); color: var(--accent); }
	.content { max-width: 38em; }
	.content p { color: var(--text-secondary); font-size: 1.06rem; line-height: 1.8; margin-bottom: var(--sp-6); }
	.content strong { color: var(--text); }
	.content h2 { font-size: 1.5rem; margin-top: var(--sp-8); margin-bottom: var(--sp-4); }
	.content ul { margin: 0 0 var(--sp-6); padding-left: 1.25rem; color: var(--text-secondary); }
	.content li { margin-bottom: var(--sp-2); }
	.post-footer { margin-top: var(--sp-12); padding-top: var(--sp-8); border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: var(--sp-4); }
	.post-footer .back { color: var(--text-secondary); }
	.post-footer .back:hover { color: var(--accent); }
</style>