<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/config';

	let {
		title = site.title,
		description = site.description,
		canonical = undefined as string | undefined,
		type = 'website',
		ogImage = '/og.png',
		noindex = false,
		published = undefined as string | undefined
	} = $props();

	const fullTitle = $derived(title === site.title ? site.title : `${title} — ${site.name}`);
	const robots = $derived(
		noindex
			? 'noindex, nofollow'
			: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
	);
	const canonicalUrl = $derived(
		canonical ??
			`${site.url}${page.url.pathname === '/' ? '' : page.url.pathname.replace(/\/+$/, '')}`
	);
	const ogImageUrl = $derived(`${site.url}${ogImage}`);

	const jsonLd = $derived(
		JSON.stringify(
			type === 'article'
				? {
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: title,
						description,
						datePublished: published,
						dateModified: published,
						author: { '@type': 'Person', name: site.name, url: site.url },
						publisher: { '@type': 'Person', name: site.name, url: site.url },
						mainEntityOfPage: canonicalUrl,
						image: ogImageUrl,
						url: canonicalUrl
					}
				: {
						'@context': 'https://schema.org',
						'@graph': [
							{
								'@type': 'WebSite',
								name: site.name,
								url: site.url,
								description: site.description
							},
							{
								'@type': 'Person',
								name: site.name,
								url: site.url,
								jobTitle: 'Software Developer',
								email: `mailto:${site.email}`,
								address: {
									'@type': 'PostalAddress',
									addressLocality: site.location,
									addressCountry: 'BD'
								},
								sameAs: [site.github]
							}
						]
					}
		)
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta name="author" content={site.name} />
	<meta name="keywords" content={site.keywords} />
	<meta name="robots" content={robots} />
	<link rel="canonical" href={canonicalUrl} />
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="icon" href="/favicon.ico" sizes="32x32" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/manifest.webmanifest" />

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:alt" content="{site.name} — {site.tagline}" />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImageUrl} />
	<meta name="twitter:image:alt" content="{site.name} — {site.tagline}" />

	{#if published}
		<meta property="article:published_time" content="{published}T00:00:00+06:00" />
	{/if}

	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>
