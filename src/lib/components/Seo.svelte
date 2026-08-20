<script lang="ts">
	import { site } from '$lib/config';
	import { page } from '$app/state';

	let {
		title = site.title,
		description = site.description,
		canonical = undefined,
		type = 'website',
		ogImage = '/og.png',
		noindex = false
	} = $props();

	const fullTitle = $derived(
		title === site.title ? site.title : `${title} — ${site.name}`
	);
	const robots = $derived(
		noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
	);
	// Derive the canonical URL from the current route unless an override is passed.
	const canonicalUrl = $derived(
		canonical ?? `${site.url}${page.url.pathname === '/' ? '' : page.url.pathname}`
	);
	const ogImageUrl = $derived(ogImage ? `${site.url}${ogImage}` : undefined);

	// Build JSON-LD as a full escaped HTML string safe to inject into <svelte:head>.
	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: site.name,
		url: site.url,
		jobTitle: 'Independent App Developer',
		email: site.email,
		address: { '@type': 'PostalAddress', addressLocality: site.location, addressCountry: 'BD' },
		sameAs: site.socials.map((s) => s.href)
	});
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta name="robots" content={robots} />
	<meta name="theme-color" content="#4f46e5" />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImageUrl} />

	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>