<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site, skillGroups } from '$lib/config';
</script>

<Seo title="Skills" description={`The languages, tools, and technologies ${site.firstName} works with.`} />

<div class="cv">
	<header class="cv-page-head">
		<p class="cv-kicker mono">/ skills</p>
		<h1>My stack</h1>
		<p class="cv-tagline">
			The languages and tools I reach for to ship real products — across web, mobile, and the
			developer workflow.
		</p>
	</header>

	<div class="cv-skills">
		{#each skillGroups as group}
			<div class="cv-skill-group" style="padding: var(--sp-3) 0; border-bottom: 1px solid var(--border);">
				<span class="cv-skill-label">{group.label}</span>
				<span class="cv-skill-items">{group.skills.join(' · ')}</span>
			</div>
		{/each}
	</div>
</div>