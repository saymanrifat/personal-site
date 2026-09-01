<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/jetbrains-mono/wght.css';
	import '@fontsource/instrument-serif/400.css';
	import '@fontsource/instrument-serif/400-italic.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<!-- Inline no-flash theme initializer. Runs before paint; sets the theme class on <html>. -->
<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="manifest" href="/manifest.webmanifest" />
	<script>
		(function () {
			try {
				var stored = window.localStorage.getItem('sayman-theme');
				var dark = stored
					? stored === 'dark'
					: window.matchMedia('(prefers-color-scheme: dark)').matches;
				var cls = dark ? 'theme-dark' : 'theme-light';
				var root = document.documentElement;
				root.classList.remove('no-theme-init');
				root.classList.add(cls);
			} catch (e) {}
		})();
	</script>
	<noscript>
		<style>
			.reveal {
				opacity: 1 !important;
				transform: none !important;
			}
			.page-enter {
				animation: none !important;
			}
		</style>
	</noscript>
</svelte:head>

<Nav />

{#key page.url.pathname}
	<main id="main" class="page-enter">
		{@render children()}
	</main>
{/key}

<Footer />

<style>
	main {
		position: relative;
		z-index: 1;
		min-height: calc(100vh - 4.5rem - 8rem);
	}
</style>
