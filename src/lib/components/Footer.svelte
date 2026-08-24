<script lang="ts">
	import { site } from '$lib/config';
</script>

<footer class="site-footer">
	<div class="container footer-inner">
		<p class="mono" style="margin: 0;">© {new Date().getFullYear()} {site.name}</p>
		<ul class="socials">
			{#each site.socials as s (s.label)}
				<li>
					<a class="focus-ring" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</footer>

<style>
	.site-footer {
		border-top: 1px solid var(--border);
		padding: var(--sp-6) 0;
		margin-top: var(--sp-12);
	}
	.footer-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--sp-4);
		max-width: 52rem;
		flex-wrap: wrap;
	}
	.socials {
		display: flex;
		gap: var(--sp-6);
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.socials a {
		color: var(--text-muted);
		font-size: 0.82rem;
		text-decoration: none;
	}
	.socials a:hover {
		color: var(--text);
		text-decoration: none;
	}
</style>