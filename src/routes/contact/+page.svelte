<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { site } from '$lib/config';
</script>

<Seo title="Contact" description={`Get in touch with ${site.name}.`} />

<div class="cv">
	<header class="cv-page-head">
		<p class="cv-kicker">/ contact</p>
		<h1>Say hello</h1>
		<p class="cv-tagline">
			Whether it's a project idea, a collab, or just to talk shop — my inbox is open.
		</p>
	</header>

	<Reveal>
		<div class="contact-list">
			<a href="mailto:{site.email}" class="contact-row focus-ring">
				<span class="contact-label">Email</span>
				<span class="contact-value">{site.email}</span>
				<span class="contact-arrow" aria-hidden="true">→</span>
			</a>
			{#each site.socials as s}
				<a href={s.href} target="_blank" rel="noopener noreferrer" class="contact-row focus-ring">
					<span class="contact-label">{s.label}</span>
					<span class="contact-value">{s.handle}</span>
					<span class="contact-arrow" aria-hidden="true">→</span>
				</a>
			{/each}
		</div>
	</Reveal>
</div>
