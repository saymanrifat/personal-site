<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/config';
</script>

<Seo title="Contact" description={`Get in touch with ${site.name}.`} />

<div class="cv">
	<header class="cv-page-head">
		<p class="cv-kicker mono">/ contact</p>
		<h1>Say hello</h1>
		<p class="cv-tagline">
			Whether it's a project idea, a collab, or just to talk shop — my inbox is open.
		</p>
	</header>

	<div class="cv-skills">
		<a href="mailto:{site.email}" style="display: block; padding: var(--sp-3) 0; border-bottom: 1px solid var(--border); color: var(--text); text-decoration: none;">
			<span style="font-weight: 600; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); display: block; margin-bottom: var(--sp-1);">Email</span>
			<span class="cv-skill-items" style="color: var(--accent);">{site.email}</span>
		</a>
		{#each site.socials as s}
			<a href={s.href} target="_blank" rel="noopener noreferrer" style="display: block; padding: var(--sp-3) 0; border-bottom: 1px solid var(--border); color: var(--text); text-decoration: none;">
				<span style="font-weight: 600; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); display: block; margin-bottom: var(--sp-1);">{s.label}</span>
				<span class="cv-skill-items">{s.handle}</span>
			</a>
		{/each}
	</div>
</div>