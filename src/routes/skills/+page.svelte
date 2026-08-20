<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { skillGroups } from '$lib/config';
</script>

<Seo title="Skills" description="The languages, tools, and technologies Sayman works with." />

<div class="container">
	<header class="page-head">
		<p class="mono kicker">/ skills</p>
		<h1>My stack</h1>
		<p class="sub">
			The languages and tools I reach for to ship real products — across web, mobile, and the
			developer workflow.
		</p>
	</header>

	<div class="grid">
		{#each skillGroups as group (group.id)}
			<section class="group">
				<h2>{group.label}</h2>
				<ul class="skill-tags">
					{#each group.skills as sk (sk)}
						<li class="tag-badge">{sk}</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>
</div>

<style>
	.page-head { margin-bottom: var(--sp-8); }
	.sub { color: var(--text-secondary); max-width: 38em; }
	.grid { display: grid; gap: var(--sp-4); }
	.group {
		padding: var(--sp-6);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		background: var(--bg-elevated);
	}
	.group h2 {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--text-muted);
		margin-bottom: var(--sp-4);
	}
	.skill-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--sp-2);
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.tag-badge {
		font-size: 0.9rem;
		padding: var(--sp-1) var(--sp-3);
		border: 1px solid var(--border);
		border-radius: 999px;
		color: var(--text-secondary);
		background: var(--bg-subtle);
	}
</style>