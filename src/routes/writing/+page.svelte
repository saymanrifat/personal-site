<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { posts } from '$lib/config';
</script>

<Seo title="Writing" description="Essays and notes from Sayman on calm software, AI, and building." />

<div class="cv">
	<header class="cv-page-head">
		<p class="cv-kicker mono">/ writing</p>
		<h1>Notes &amp; essays</h1>
		<p class="cv-tagline">
			Thinking out loud about calm software, AI, language, and building things alone or in a small team.
		</p>
	</header>

	<ul class="cv-writing-list">
		{#each posts as post (post.slug)}
			<li>
				<a href="/writing/{post.slug}">
					<span style="display: block; font-weight: 500;">{post.title}</span>
					<span style="display: block; font-size: 0.85rem; color: var(--text-secondary); margin-top: var(--sp-1);">{post.excerpt}</span>
				</a>
				<div style="text-align: right; flex-shrink: 0;">
					<span class="cv-date">{post.date}</span>
					<span class="cv-date" style="display: block; margin-top: var(--sp-1);">{post.readingTime}</span>
				</div>
			</li>
		{/each}
	</ul>
</div>