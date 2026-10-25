<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { posts } from '$lib/config';
	import { formatDate } from '$lib/format';
</script>

<Seo title="Writing" description="Essays and notes from Sayman on calm software, AI, and building." />

<div class="page">
	<header class="page-head">
		<p class="kicker">Notes</p>
		<h1>Notes &amp; essays</h1>
		<p class="lede">
			Thinking out loud about calm software, AI, language, and building things alone or in a small team.
		</p>
	</header>

	<Reveal>
		<ul class="note-list">
			{#each posts as post (post.slug)}
				<li>
					<a class="note-row" href="/writing/{post.slug}">
						<div>
							<h2 class="note-title">{post.title}</h2>
							<p class="note-excerpt">{post.excerpt}</p>
						</div>
						<div class="note-meta">
							<time datetime={post.date}>{formatDate(post.date)}</time>
							<span>{post.readingTime}</span>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</Reveal>
</div>
