<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo noindex title="Not found" description="This page does not exist." />

<div class="container notfound">
	<p class="mono kicker">/ 404</p>
	<h1>Page not found</h1>
	<p class="sub">The page you're looking for doesn't exist or moved.</p>
	<p>
		<a class="btn" href="/">← Go home</a>
	</p>
</div>

<style>
	.notfound {
		padding: var(--sp-16) 0;
		text-align: center;
	}
	.sub {
		color: var(--text-secondary);
	}
	.btn {
		display: inline-flex;
		margin-top: var(--sp-4);
		padding: var(--sp-2) var(--sp-4);
		border: 1px solid var(--border-strong);
		border-radius: var(--radius);
		color: var(--text);
		text-decoration: none;
		font-weight: 600;
	}
	.btn:hover {
		background: var(--bg-subtle);
		text-decoration: none;
	}
</style>