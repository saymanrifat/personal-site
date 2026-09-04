<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { site, now, posts, experience, principles } from '$lib/config';

	const projects = [
		{
			number: '01',
			title: 'Speak / listen / repeat.',
			description:
				'An AI speaking practice tool for people who know the words but need a safer place to say them out loud.',
			tags: ['Product direction', 'AI + speech', 'Mobile'],
			meta: 'Independent build · 2026',
			evidence: 'Prototype → weekly speaking loop',
			image: '/assets/project-speaking.png',
			accent: 'chartreuse'
		},
		{
			number: '02',
			title: 'Make room for the useful.',
			description:
				'A quieter approach to productivity software: fewer surfaces, better defaults, and a clear next action.',
			tags: ['UX systems', 'Web app', 'Prototyping'],
			meta: 'Independent build · Ongoing',
			evidence: 'Constraint → one useful next action',
			image: '/assets/project-calm-tools.png',
			accent: 'bone'
		}
	] as const;
</script>

<Seo />

<div class="sc-home" id="top">
	<aside class="sc-rail" aria-label="Portfolio index">
		<a class="sc-rail-mark" href="#top" aria-label="Back to top">
			<img src="/assets/signal-mark.png" alt="" />
			<span>/</span>
			<strong>sayman</strong>
		</a>
		<div class="sc-rail-center"><span>SOFTWARE DEVELOPER · DHAKA</span></div>
		<div class="sc-rail-bottom"><span class="sc-status-dot"></span><span>SELECT WORK</span></div>
	</aside>

	<section class="sc-hero">
		<div class="sc-hero-copy">
			<div class="sc-eyebrow"><span></span> Mobile app developer · {site.location}</div>
			<h1>Software that earns its place <em>on the screen.</em></h1>
			<p class="sc-hero-lede">I turn loose ideas into quietly reliable products for web, mobile, and the space between.</p>
			<div class="sc-hero-actions">
				<a class="sc-button" href="#work">See selected work <span>↘</span></a>
				<a class="sc-text-link" href="mailto:{site.email}">Start a conversation <span>↗</span></a>
			</div>
			<div class="sc-hero-footnote"><span>Currently building</span><strong>AI speaking practice tools</strong></div>
		</div>
		<div class="sc-hero-art-wrap">
			<div class="sc-hero-art"><img src="/assets/hero-studio-signal.png" alt="Abstract technical studio artwork" /></div>
			<div class="sc-art-caption"><span>01 / SIGNAL</span><span>PRODUCT · MOBILE · WEB</span></div>
			<div class="sc-crosshair" aria-hidden="true"></div>
		</div>
		<div class="sc-hero-index" aria-hidden="true">00</div>
	</section>

	<div class="sc-ticker" aria-label="What I build"><div><span>PRODUCT THINKING</span><b>✳</b><span>SHIPPED WITH CARE</span><b>✳</b><span>HUMAN-SCALE SYSTEMS</span><b>✳</b><span>PRODUCT THINKING</span></div></div>

	<section class="sc-section sc-work" id="work">
		<div class="sc-section-heading"><div class="sc-label"><span>01</span> Selected work</div><p>Small, considered software for people who want less friction between an idea and the thing that helps.</p></div>
		<div class="sc-projects">
			{#each projects as project, i}
				<Reveal delay={i * 70}>
					<article class:sc-project--bone={project.accent === 'bone'} class="sc-project">
						<div class="sc-project-meta"><span class="sc-project-number">{project.number}</span><span>{project.meta}</span><span class="sc-project-arrow">↗</span></div>
						<div class="sc-project-visual"><img src={project.image} alt="" /><span class="sc-project-corner">↗</span></div>
						<div class="sc-project-copy">
							<div class="sc-tag-row">{#each project.tags as tag}<span>{tag}</span>{/each}</div>
							<div class="sc-evidence">✓ {project.evidence}</div>
							<h2>{project.title}</h2>
							<p>{project.description}</p>
							<a class="sc-text-link" href="mailto:{site.email}?subject=Project%20conversation">Ask me about it <span>↗</span></a>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</section>

	<section class="sc-section sc-about" id="about">
		<div class="sc-section-heading"><div class="sc-label"><span>02</span> A little context</div><p>The useful part is rarely the loudest part. I like finding it.</p></div>
		<div class="sc-about-grid">
			<div>
				<p class="sc-display-copy">I’m Sayman — a mobile app developer who cares about the moment a product starts to feel <em>obvious.</em></p>
				<p class="sc-body-copy">At {site.company}, I build and maintain production apps across Android, iOS, and the web. Independently, I prototype tools around AI, speaking practice, and developer productivity — taking them from rough thought to something real enough to use.</p>
				<a class="sc-text-link" href="https://github.com/saymanrifat" target="_blank" rel="noreferrer">Browse the lab on GitHub <span>↗</span></a>
			</div>
			<div class="sc-principles"><div class="sc-principles-label">HOW I WORK</div>{#each principles as principle, i}<div class="sc-principle"><span>0{i + 1}</span><strong>{principle.title}</strong><p>{principle.body}</p></div>{/each}</div>
		</div>
	</section>

	<section class="sc-capabilities">
		<div class="sc-capability-intro"><span>03</span><h2>From first sketch<br />to <em>shipped.</em></h2></div>
		<div class="sc-capability-list"><div><span>01</span><strong>Mobile products</strong><p>Kotlin, Compose, Swift, SwiftUI, Flutter</p></div><div><span>02</span><strong>Web systems</strong><p>TypeScript, SvelteKit, React, Node.js</p></div><div><span>03</span><strong>AI integrations</strong><p>LLM APIs, speech, prompts, agent tooling</p></div></div>
	</section>

	<section class="sc-section sc-notes" id="notes">
		<div class="sc-section-heading"><div class="sc-label"><span>04</span> Field notes</div><p>Writing about product decisions, technical edges, and small-team realities behind the work.</p></div>
		<div class="sc-notes-list">{#each posts.slice(0, 3) as post}<a class="sc-note-row" href="/writing/{post.slug}"><span>{post.date.slice(8)}.{post.date.slice(5, 7)}.{post.date.slice(0, 4).slice(2)}</span><strong>{post.title}</strong><small>{post.readingTime}</small><b>↗</b></a>{/each}</div>
	</section>

	<section class="sc-contact" id="contact">
		<div class="sc-contact-top"><div class="sc-label"><span>05</span> Open channel</div><div class="sc-contact-status"><span class="sc-status-dot"></span> Available for select work</div></div>
		<div class="sc-contact-content"><h2>Have a useful<br /><em>problem?</em></h2><a class="sc-contact-email" href="mailto:{site.email}">{site.email} <span>↗</span></a></div>
		<div class="sc-contact-bottom"><span>{site.name} · Mobile App Developer</span><span>Dhaka, Bangladesh · 2026</span><a href="#top">Back to top ↗</a></div>
	</section>
</div>
