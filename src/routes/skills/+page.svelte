<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { skillGroups } from '$lib/config';
</script>

<Seo title="Skills" description="The languages, tools, and technologies Sayman works with." />

<div class="cv">
	<header class="cv-page-head">
		<p class="cv-kicker">/ skills</p>
		<h1>My stack</h1>
		<p class="cv-tagline">
			The languages and tools I reach for to ship real products — across web, mobile, and the
			developer workflow.
		</p>
	</header>

	<Reveal>
		<div class="skill-block">
			{#each skillGroups as group}
				<div class="cv-skill-group">
					<span class="cv-skill-label">{group.label}</span>
					<div class="cv-chips">
						{#each group.skills as skill}
							<span class="chip">{skill}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</Reveal>
</div>
