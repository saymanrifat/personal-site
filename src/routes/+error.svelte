<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { page } from '$app/state';

	const status = $derived(page.status);
	const message = $derived(page.error?.message);
</script>

<Seo noindex title={status === 404 ? 'Not found' : 'Error'} description="This page does not exist." />

<div class="page page-center">
	<header class="page-head">
		<p class="kicker">{status}</p>
		<h1>{status === 404 ? 'Page not found' : 'Something went wrong'}</h1>
		<p class="lede">
			{message && status !== 404
				? message
				: "The page you're looking for doesn't exist or moved."}
		</p>
	</header>
	<a href="/" class="btn">Go home</a>
</div>
