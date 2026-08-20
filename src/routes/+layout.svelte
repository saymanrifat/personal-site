<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/jetbrains-mono/wght.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { theme } from '$lib/stores/theme';

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
</svelte:head>

<Nav />

<main id="main" class="main">
	{@render children()}
</main>

<Footer />

<style>
	.main {
		min-height: calc(100vh - 4rem - 200px);
		padding-top: var(--sp-12);
	}
</style>