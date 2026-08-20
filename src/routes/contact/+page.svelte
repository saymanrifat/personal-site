<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/config';
</script>

<Seo title="Contact" description={`Get in touch with ${site.name}.`} />

<div class="container">
	<header class="page-head">
		<p class="mono kicker">/ contact</p>
		<h1>Say hello</h1>
		<p class="sub">
			Whether it's a project idea, a collab, or just to talk shop — my inbox is open.
		</p>
	</header>

	<div class="contact-options">
		<a class="card focus-ring" href={`mailto:${site.email}`}>
			<span class="card-label">Email</span>
			<span class="card-value mono">{site.email}</span>
			<span class="card-hint">Best for anything serious →</span>
		</a>

		{#each site.socials as s (s.label)}
			<a class="card focus-ring" href={s.href} target="_blank" rel="noopener noreferrer">
				<span class="card-label">{s.label}</span>
				<span class="card-value mono">{s.handle}</span>
				<span class="card-hint">Reach me here →</span>
			</a>
		{/each}
	</div>
</div>

<style>
	.page-head { margin-bottom: var(--sp-8); }
	.sub { color: var(--text-secondary); max-width: 38em; }
	.contact-options { display: grid; gap: var(--sp-3); }
	.card {
		display: grid;
		grid-template-columns: 8rem 1fr auto;
		align-items: center;
		gap: var(--sp-4);
		padding: var(--sp-4) var(--sp-6);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		background: var(--bg-elevated);
		color: var(--text);
		text-decoration: none;
		transition: border-color var(--transition), transform var(--transition);
	}
	.card:hover { border-color: var(--border-strong); transform: translateY(-2px); text-decoration: none; }
	.card-label { font-weight: 600; font-size: 0.95rem; }
	.card-value { color: var(--text-secondary); overflow-wrap: anywhere; }
	.card-hint { color: var(--text-muted); font-size: 0.85rem; }
	@media (max-width: 560px) {
		.card { grid-template-columns: 1fr; gap: var(--sp-1); }
	}
</style>