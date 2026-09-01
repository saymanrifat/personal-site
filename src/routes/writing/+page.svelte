<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { posts } from '$lib/config';
</script>

<Seo title="Writing" description="Essays and notes from Sayman on calm software, AI, and building." />

<div class="cv">
	<header class="cv-page-head">
		<p class="cv-kicker">/ writing</p>
		<h1>Notes &amp; essays</h1>
		<p class="cv-tagline">
			Thinking out loud about calm software, AI, language, and building things alone or in a small team.
		</p>
	</header>

	<Reveal>
		<ul class="writing-list">
			{#each posts as post (post.slug)}
				<li>
					<a class="writing-row focus-ring" href="/writing/{post.slug}">
						<div class="writing-row-main">
							<h2 class="writing-row-title">{post.title}</h2>
							<p class="writing-row-excerpt">{post.excerpt}</p>
						</div>
						<div class="writing-row-meta">
							<span class="cv-date">{post.date}</span>
							<span class="cv-date">{post.readingTime}</span>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</Reveal>
</div>
