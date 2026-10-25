<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { site } from '$lib/config';
	import { isExternalHref } from '$lib/format';
</script>

<Seo title="Contact" description={`Get in touch with ${site.name}.`} />

<div class="page">
	<header class="page-head">
		<p class="kicker">Contact</p>
		<h1>Say hello</h1>
		<p class="lede">Whether it's a project idea, a collab, or just to talk shop — my inbox is open.</p>
	</header>

	<Reveal>
		<div>
			<a class="contact-row" href="mailto:{site.email}">
				<span class="contact-label">Email</span>
				<span class="contact-value">{site.email}</span>
				<span class="contact-arrow" aria-hidden="true">→</span>
			</a>
			{#each site.socials as item (item.label)}
				<a
					class="contact-row"
					href={item.href}
					target={isExternalHref(item.href) && !item.href.startsWith('mailto:') ? '_blank' : undefined}
					rel={isExternalHref(item.href) && !item.href.startsWith('mailto:')
						? 'noopener noreferrer'
						: undefined}
				>
					<span class="contact-label">{item.label}</span>
					<span class="contact-value">{item.handle}</span>
					<span class="contact-arrow" aria-hidden="true">
						{item.href.startsWith('mailto:') ? '→' : '↗'}
					</span>
					{#if !item.href.startsWith('mailto:')}
						<span class="visually-hidden">(opens in a new tab)</span>
					{/if}
				</a>
			{/each}
		</div>
	</Reveal>
</div>
