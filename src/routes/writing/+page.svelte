<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { posts } from '$lib/config';
</script>

<Seo title="Writing" description="Essays and notes from Sayman on calm software, AI, and building." />

<div class="container">
	<header class="page-head">
		<p class="mono kicker">/ writing</p>
		<h1>Notes &amp; essays</h1>
		<p class="sub">
			Thinking out loud about calm software, AI, language, and building things alone or in a small
			team.
		</p>
	</header>

	<section id="all-posts">
		<ul class="post-list">
			{#each posts as post (post.slug)}
				<li>
					<a class="post" href={`/writing/${post.slug}`}>
						<div class="post-meta">
							<span class="mono date">{post.date}</span>
							<span class="mono reading">{post.readingTime}</span>
						</div>
						<h2>{post.title}</h2>
						<p>{post.excerpt}</p>
						<ul class="tags">
							{#each post.tags as tag (tag)}
								<li class="tag">{tag}</li>
							{/each}
						</ul>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</div>

<style>
	.page-head { margin-bottom: var(--sp-8); }
	.sub { color: var(--text-secondary); max-width: 38em; }
	.post-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--sp-2);
	}
	.post-list a.post {
		display: block;
		padding: var(--sp-5) var(--sp-2);
		border-bottom: 1px solid var(--border);
		text-decoration: none;
		color: var(--text);
		transition: border-color var(--transition);
	}
	.post-list a.post:hover { border-color: var(--border-strong); }
	.post-meta { display: flex; gap: var(--sp-4); margin-bottom: var(--sp-2); }
	.post-meta .date { color: var(--accent); font-size: 0.8rem; }
	.post-meta .reading { color: var(--text-muted); font-size: 0.8rem; }
	.post-list h2 { font-size: 1.35rem; margin-bottom: var(--sp-2); }
	.post-list p { color: var(--text-secondary); margin: 0 0 var(--sp-3); max-width: 46em; }
	.tags { display: flex; gap: var(--sp-2); flex-wrap: wrap; list-style: none; margin: 0; padding: 0; }
	.tag { font-size: 0.75rem; font-weight: 500; padding: var(--sp-1) var(--sp-2); border-radius: var(--radius-sm); background: var(--accent-soft); color: var(--accent); }
</style>