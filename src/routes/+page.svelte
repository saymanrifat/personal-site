<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { site, now, skillGroups, posts, experience, principles } from '$lib/config';

	const projects = [
		{
			label: 'PUBLIC PROJECT',
			title: 'CalMyPenny',
			detail: 'A money manager app for Android, built with Kotlin.',
			meta: 'Android · Kotlin',
			href: 'https://github.com/saymanrifat/CalMyPenny'
		},
		{
			label: 'CURRENTLY EXPLORING',
			title: 'AI speaking practice',
			detail: 'Tools for the part of language learning that happens out loud.',
			meta: 'AI · Speech · Product',
			href: '#about'
		},
		{
			label: 'WORKING WITH',
			title: 'Umber Lab',
			detail: 'A small team building mobile products that respect your attention and privacy.',
			meta: 'Product · Engineering',
			href: 'https://www.umberlab.com/members'
		}
	] as const;
</script>

<Seo />

<div class="personal-home" id="top">
	<section class="personal-hero">
		<div class="personal-hero-copy">
			<p class="personal-kicker"><span>01</span> Personal site · {site.location}</p>
			<h1>Hi, I’m <em>Sayman.</em><br />I build useful software.</h1>
			<p class="personal-intro">I’m a software developer from Bangladesh. I work across mobile and web, turning loose ideas into calm, well-sorted products that people can actually use.</p>
			<div class="personal-hero-links"><a class="personal-button" href="mailto:{site.email}">Say hello <span>↗</span></a><a class="personal-underlink" href="/about">More about me <span>→</span></a></div>
			<div class="personal-hero-meta"><span>Based in Dhaka, Bangladesh</span><span class="personal-available"><i></i> Available for select work</span></div>
		</div>
		<div class="personal-portrait-wrap">
			<div class="personal-portrait-frame"><img src="/assets/sayman-rifat-portrait.jpg" alt="Sayman Rifat wearing glasses and a blue jacket" /></div>
			<div class="personal-portrait-note"><span>Sayman Rifat</span><span>Software developer<br />Android · Web · AI</span></div>
			<div class="personal-portrait-number">SR<br /><small>2026</small></div>
		</div>
	</section>

	<section class="personal-marquee" aria-label="Personal introduction"><div class="personal-marquee-track"><div class="personal-marquee-group"><span>SOFTWARE DEVELOPER</span><b>✳</b><span>BASED IN BANGLADESH</span><b>✳</b><span>BUILDING WITH CARE</span><b>✳</b><span>SOFTWARE DEVELOPER</span></div><div class="personal-marquee-group" aria-hidden="true"><span>SOFTWARE DEVELOPER</span><b>✳</b><span>BASED IN BANGLADESH</span><b>✳</b><span>BUILDING WITH CARE</span><b>✳</b><span>SOFTWARE DEVELOPER</span></div></div></section>

	<section class="personal-section personal-work" id="work">
		<div class="personal-section-head"><p class="personal-kicker"><span>02</span> Selected work</p><p class="personal-section-note">A few things I’ve made, helped make, or am still figuring out.</p></div>
		<div class="personal-project-list">{#each projects as project, i}<Reveal delay={i * 60}><a class="personal-project" href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined}><div class="personal-project-index">0{i + 1}</div><div><p class="personal-project-label">{project.label}</p><h2>{project.title}</h2><p class="personal-project-detail">{project.detail}</p></div><div class="personal-project-meta"><span>{project.meta}</span><strong>↗</strong></div></a></Reveal>{/each}</div>
	</section>

	<section class="personal-section personal-about" id="about">
		<div class="personal-section-head"><p class="personal-kicker"><span>03</span> A little about me</p><p class="personal-section-note">The short version, without the résumé voice.</p></div>
		<div class="personal-about-grid"><div><p class="personal-about-lede">I like the moment when a product stops feeling complicated and starts feeling <em>obvious.</em></p><p class="personal-body">At {site.company}, I work across UI, business logic, APIs, and release engineering. Outside of work, I build small tools around AI, speaking practice, and developer productivity. I’m happiest somewhere between the first sketch and the first person who says, “this is easier now.”</p><a class="personal-underlink" href="/about">Read the longer version <span>→</span></a></div><div class="personal-experience"><p class="personal-mini-label">RIGHT NOW</p>{#each now.items.slice(0, 3) as item, i}<div class="personal-now-item"><span>0{i + 1}</span><div><strong>{item.title}</strong><p>{item.detail}</p></div></div>{/each}</div></div>
	</section>

	<section class="personal-section personal-experience-section" id="experience">
		<div class="personal-section-head"><p class="personal-kicker"><span>04</span> Where I’ve been</p><p class="personal-section-note">A compact view of the work that shaped how I build.</p></div>
		<div class="personal-timeline">{#each experience as job, i}<div class="personal-timeline-item"><div class="personal-timeline-marker"><span>0{i + 1}</span><i></i></div><div class="personal-timeline-copy"><div><h2>{job.role}</h2><p>{job.company} · {job.period}</p></div><p>{job.summary}</p></div></div>{/each}</div>
	</section>

	<section class="personal-section personal-notes" id="notes">
		<div class="personal-section-head"><p class="personal-kicker"><span>05</span> Notes from the work</p><p class="personal-section-note">Writing about product decisions, technical edges, and the parts worth remembering.</p></div>
		<div class="personal-notes-list">{#each posts.slice(0, 3) as post}<a class="personal-note-row" href="/writing/{post.slug}"><span>{post.date.slice(0, 7).replace('-', '.')}</span><strong>{post.title}</strong><small>{post.readingTime}</small><b>↗</b></a>{/each}</div>
	</section>

	<section class="personal-closing" id="contact"><div class="personal-closing-top"><p class="personal-kicker"><span>06</span> Open channel</p><span>Let’s make something useful.</span></div><div class="personal-closing-main"><h2>Have an idea<br />worth <em>testing?</em></h2><a href="mailto:{site.email}">{site.email} <span>↗</span></a></div><div class="personal-closing-bottom"><span>{site.name} · {site.location}</span><a href="https://github.com/saymanrifat" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Back to top ↑</a></div></section>
</div>
