<script lang="ts">
	import { site } from '$lib/config';
</script>

<footer class="site-footer">
	<div class="container footer-inner">
		<p class="colophon">© {new Date().getFullYear()} {site.name}</p>
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
		position: relative;
		z-index: 1;
		border-top: 1px solid var(--border);
		padding: var(--sp-10) 0 var(--sp-12);
		margin-top: var(--sp-8);
	}
	.footer-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--sp-4);
		max-width: var(--content);
		flex-wrap: wrap;
	}
	.colophon {
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		color: var(--text-muted);
	}
	.socials {
		display: flex;
		gap: var(--sp-6);
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.socials a {
		position: relative;
		color: var(--text-muted);
		font-size: 0.8rem;
		letter-spacing: 0.02em;
		text-decoration: none;
		transition: color var(--duration) var(--ease);
	}
	.socials a::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -2px;
		height: 1px;
		background: currentColor;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform var(--duration-slow) var(--ease);
	}
	.socials a:hover {
		color: var(--text);
		text-decoration: none;
	}
	.socials a:hover::after {
		transform: scaleX(1);
	}
</style>
