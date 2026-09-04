<script lang="ts">
	import { site } from '$lib/config';
</script>

<footer class="site-footer">
	<div class="container footer-inner">
		<p class="colophon">Built with curiosity, shipped with care. · © {new Date().getFullYear()} {site.name}</p>
		<ul class="socials">
			{#each site.socials as s (s.label)}
				<li><a class="focus-ring" href={s.href} target={s.label === 'Email' ? undefined : '_blank'} rel={s.label === 'Email' ? undefined : 'noopener noreferrer'}>{s.label} ↗</a></li>
			{/each}
		</ul>
	</div>
</footer>

<style>
	.site-footer { position: relative; z-index: 1; margin-left: 5.25rem; border-top: 1px solid var(--border); padding: 1.45rem 0 1.7rem; background: var(--bg); }
	.footer-inner { max-width: none; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 0 clamp(1.25rem, 5vw, 5.1rem); flex-wrap: wrap; }
	.colophon { margin: 0; color: var(--text-muted); font: .62rem/1.4 var(--font-sans); letter-spacing: .08em; text-transform: uppercase; }
	.socials { display: flex; gap: 1.35rem; list-style: none; margin: 0; padding: 0; }
	.socials a { color: var(--text-muted); font: .65rem/1 var(--font-sans); letter-spacing: .05em; text-decoration: none; transition: color .22s var(--ease-out); }
	.socials a:hover { color: var(--accent); text-decoration: none; }
	@media (max-width: 640px) { .site-footer { margin-left: 0; } .footer-inner { align-items: flex-start; flex-direction: column; } .socials { gap: 1rem; } }
</style>
