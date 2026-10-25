<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { skillGroups } from '$lib/config';
</script>

<Seo title="Skills" description="The languages, tools, and technologies Sayman works with." />

<div class="page">
	<header class="page-head">
		<p class="kicker">Skills</p>
		<h1>My stack</h1>
		<p class="lede">
			The languages and tools I reach for to ship real products — across web, mobile, and the
			developer workflow.
		</p>
	</header>

	<Reveal>
		<div>
			{#each skillGroups as group (group.id)}
				<div class="skill-row">
					<span class="skill-label">{group.label}</span>
					<div class="chips">
						{#each group.skills as skill (skill)}
							<span class="chip">{skill}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</Reveal>
</div>
