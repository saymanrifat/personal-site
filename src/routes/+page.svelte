<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { site, now, posts, experience, projects } from '$lib/config';
	import { formatYearMonth, isExternalHref } from '$lib/format';
</script>

<Seo />

<div class="home" id="top">
	<section class="hero" aria-labelledby="hero-heading">
		<div class="hero-copy">
			<p class="kicker"><span>01</span> Personal site · {site.location}</p>
			<h1 id="hero-heading">Hi, I’m <em>Sayman.</em><br />I build useful software.</h1>
			<p class="intro">
				I’m a software developer from Bangladesh. I work across mobile and web, turning loose ideas
				into calm, well-sorted products that people can actually use.
			</p>
			<div class="hero-links">
				<a class="btn" href="mailto:{site.email}">Say hello</a>
				<a class="text-link" href="/about">More about me →</a>
			</div>
			<p class="hero-meta">
				<span>Based in Dhaka, Bangladesh</span>
				<span class="available"><i></i> Available for select work</span>
			</p>
		</div>
		<figure class="portrait">
			<div class="frame">
				<img
					src="/assets/sayman-rifat-portrait.jpg"
					alt="Sayman Rifat, wearing glasses and a blue jacket"
					width="800"
					height="1361"
					fetchpriority="high"
					decoding="async"
				/>
			</div>
			<figcaption>
				<span>Sayman Rifat</span>
				<span>Android · Web · AI</span>
			</figcaption>
		</figure>
	</section>

	<section class="band work" id="work" aria-labelledby="work-heading">
		<div class="section-head">
			<h2 class="kicker" id="work-heading"><span>02</span> Selected work</h2>
			<p>A few things I’ve made, helped make, or am still figuring out.</p>
		</div>
		<ul class="work-list">
			{#each projects as project, i (project.title)}
				<li>
					<Reveal delay={i * 50}>
						<a
							class="work-row"
							href={project.href}
							target={isExternalHref(project.href) ? '_blank' : undefined}
							rel={isExternalHref(project.href) ? 'noopener noreferrer' : undefined}
						>
							<span class="idx">0{i + 1}</span>
							<div>
								<p class="label">{project.label}</p>
								<h3>{project.title}</h3>
								<p class="detail">{project.detail}</p>
							</div>
							<div class="meta">
								<span>{project.meta}</span>
								<span class="arrow" aria-hidden="true">{isExternalHref(project.href) ? '↗' : '→'}</span>
							</div>
							{#if isExternalHref(project.href)}
								<span class="visually-hidden">(opens in a new tab)</span>
							{/if}
						</a>
					</Reveal>
				</li>
			{/each}
		</ul>
	</section>

	<section class="band about" id="about" aria-labelledby="about-heading">
		<div class="section-head">
			<h2 class="kicker" id="about-heading"><span>03</span> A little about me</h2>
			<p>The short version, without the résumé voice.</p>
		</div>
		<div class="about-grid">
			<div>
				<p class="about-lede">
					I like the moment when a product stops feeling complicated and starts feeling
					<em>obvious.</em>
				</p>
				<p class="body">
					At {site.company}, I work across UI, business logic, APIs, and release engineering. Outside
					of work, I build small tools around AI, speaking practice, and developer productivity. I’m
					happiest somewhere between the first sketch and the first person who says, “this is easier
					now.”
				</p>
				<a class="text-link" href="/about">Read the longer version →</a>
			</div>
			<div>
				<p class="mini">Right now</p>
				<ul class="now">
					{#each now.items.slice(0, 3) as item, i (item.title)}
						<li>
							<span>0{i + 1}</span>
							<div>
								<strong>{item.title}</strong>
								<p>{item.detail}</p>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>

	<section class="band experience" id="experience" aria-labelledby="experience-heading">
		<div class="section-head">
			<h2 class="kicker" id="experience-heading"><span>04</span> Where I’ve been</h2>
			<p>A compact view of the work that shaped how I build.</p>
		</div>
		<ol class="timeline">
			{#each experience as job, i (job.role)}
				<li>
					<span class="idx">0{i + 1}</span>
					<div class="job">
						<div>
							<h3>{job.role}</h3>
							<p class="when">{job.company} · {job.period}</p>
						</div>
						<p>{job.summary}</p>
					</div>
				</li>
			{/each}
		</ol>
	</section>

	<section class="band notes" id="notes" aria-labelledby="notes-heading">
		<div class="section-head">
			<h2 class="kicker" id="notes-heading"><span>05</span> Notes from the work</h2>
			<p>Writing about product decisions, technical edges, and the parts worth remembering.</p>
		</div>
		<ul class="notes-list">
			{#each posts.slice(0, 3) as post (post.slug)}
				<li>
					<a class="note" href="/writing/{post.slug}">
						<time datetime={post.date}>{formatYearMonth(post.date)}</time>
						<strong>{post.title}</strong>
						<small>{post.readingTime}</small>
						<span aria-hidden="true">→</span>
					</a>
				</li>
			{/each}
		</ul>
		<p class="more"><a class="text-link" href="/writing">All notes →</a></p>
	</section>

	<section class="band closing" id="contact" aria-labelledby="contact-heading">
		<p class="kicker"><span>06</span> Open channel</p>
		<h2 id="contact-heading">Have an idea worth <em>testing?</em></h2>
		<p class="close-note">Let’s make something useful.</p>
		<a class="email" href="mailto:{site.email}">{site.email}</a>
		<div class="close-meta">
			<span>{site.name} · {site.location}</span>
			<a href={site.github} target="_blank" rel="noopener noreferrer">
				GitHub
				<span class="visually-hidden">(opens in a new tab)</span>
			</a>
			<a href="#top">Back to top</a>
		</div>
	</section>
</div>

<style>
	.home {
		position: relative;
		overflow: hidden;
	}

	.hero,
	.band {
		width: 100%;
		max-width: var(--shell);
		margin: 0 auto;
		padding: clamp(3.75rem, 8vw, 6.5rem) clamp(1.25rem, 4.5vw, 3.25rem);
	}

	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(14rem, 0.7fr);
		gap: clamp(2.5rem, 7vw, 6rem);
		align-items: end;
		padding-top: clamp(4.25rem, 9vw, 7rem);
		padding-bottom: clamp(3.5rem, 7vw, 5.5rem);
	}

	.hero h1 {
		margin: 0;
		max-width: 14ch;
	}

	.hero h1 em,
	.about-lede em,
	.closing h2 em {
		font-style: italic;
		color: var(--accent);
	}

	.intro {
		max-width: 34em;
		margin: 1.4rem 0 1.6rem;
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.hero-links {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 1.15rem 1.5rem;
	}

	.hero-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem 1.5rem;
		margin: 2.75rem 0 0;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	.available {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--text-secondary);
	}

	.available i {
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 50%;
		background: var(--accent);
	}

	.portrait {
		margin: 0;
		max-width: 22rem;
		justify-self: end;
		width: 100%;
	}

	.frame {
		background: var(--bg-subtle);
		border: 1px solid var(--border);
		aspect-ratio: 3 / 5;
		overflow: hidden;
	}

	.frame img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center bottom;
		display: block;
	}

	figcaption {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding-top: 0.75rem;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	figcaption span {
		white-space: nowrap;
	}

	.band {
		border-top: 1px solid var(--border);
	}

	.section-head {
		display: grid;
		grid-template-columns: 1fr minmax(14rem, 22rem);
		gap: 1.5rem 2rem;
		align-items: start;
		margin-bottom: clamp(2.25rem, 5vw, 3.5rem);
	}

	.section-head h2 {
		margin: 0;
	}

	.section-head p {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.6;
		color: var(--text-muted);
	}

	.work-list,
	.notes-list,
	.now,
	.timeline {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.work-row,
	.note {
		display: grid;
		gap: 1rem 1.5rem;
		align-items: start;
		padding: 1.35rem 0;
		border-bottom: 1px solid var(--border);
		text-decoration: none;
		color: inherit;
	}

	.work-list li:first-child .work-row,
	.notes-list li:first-child .note,
	.timeline li:first-child,
	.now li:first-child {
		border-top: 1px solid var(--border);
	}

	.work-row {
		grid-template-columns: 3rem 1fr minmax(8rem, 13rem);
	}

	.work-row:hover,
	.note:hover {
		text-decoration: none;
		color: inherit;
	}

	.work-row:hover h3,
	.note:hover strong {
		color: var(--accent);
	}

	.idx,
	.now > li > span,
	.note time,
	.note small {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--accent);
	}

	.label,
	.meta,
	.when,
	.mini {
		margin: 0 0 0.4rem;
		font-family: var(--font-mono);
		font-size: 0.66rem;
		font-weight: 500;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	.work-row h3,
	.job h3 {
		margin: 0 0 0.45rem;
		font-size: clamp(1.35rem, 2.4vw, 1.85rem);
		font-weight: 500;
		letter-spacing: -0.03em;
		color: var(--text);
	}

	.detail,
	.job > p {
		max-width: 34em;
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.6;
		color: var(--text-secondary);
	}

	.meta {
		display: flex;
		justify-content: space-between;
		gap: 0.75rem;
		margin: 0.15rem 0 0;
	}

	.arrow {
		color: var(--accent);
		font-size: 1rem;
		font-weight: 400;
	}

	.about-grid {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: clamp(2.5rem, 7vw, 6rem);
	}

	.about-lede {
		margin: 0 0 1.4rem;
		max-width: 16ch;
		font-family: var(--font-display);
		font-size: clamp(1.85rem, 3.4vw, 2.8rem);
		font-weight: 400;
		letter-spacing: -0.02em;
		line-height: 1.12;
		color: var(--text);
	}

	.body {
		max-width: 34em;
		margin: 0 0 1.4rem;
		font-size: 1rem;
		line-height: 1.75;
	}

	.mini {
		margin: 0;
		padding-bottom: 0.85rem;
		border-bottom: 1px solid var(--border);
		color: var(--accent);
	}

	.now li {
		display: grid;
		grid-template-columns: 2rem 1fr;
		gap: 0.75rem;
		padding: 1rem 0;
		border-bottom: 1px solid var(--border);
	}

	.now strong {
		display: block;
		font-size: 1rem;
		font-weight: 500;
		color: var(--text);
	}

	.now p {
		margin: 0.3rem 0 0;
		font-size: 0.88rem;
		line-height: 1.5;
		color: var(--text-muted);
	}

	.timeline li {
		display: grid;
		grid-template-columns: 3rem 1fr;
		gap: 1rem 1.5rem;
		padding: 1.4rem 0;
		border-bottom: 1px solid var(--border);
	}

	.job {
		display: grid;
		grid-template-columns: minmax(12rem, 0.85fr) 1fr;
		gap: 1rem 2rem;
	}

	.when {
		margin: 0;
		color: var(--accent);
	}

	.note {
		grid-template-columns: 5.5rem 1fr 4.5rem 1rem;
		align-items: center;
		color: var(--text);
	}

	.note time,
	.note small {
		color: var(--text-muted);
	}

	.note strong {
		font-size: clamp(1.05rem, 2vw, 1.35rem);
		font-weight: 500;
		letter-spacing: -0.03em;
	}

	.more {
		margin: 1.4rem 0 0;
	}

	.closing {
		padding-bottom: clamp(4rem, 8vw, 6rem);
	}

	.closing h2 {
		margin: 0 0 0.85rem;
		max-width: 12ch;
		font-family: var(--font-display);
		font-size: clamp(2.4rem, 6vw, 4.25rem);
		font-weight: 400;
		letter-spacing: -0.02em;
		line-height: 1.05;
	}

	.close-note {
		margin: 0 0 1.75rem;
		color: var(--text-muted);
	}

	.email {
		display: inline-block;
		padding-bottom: 0.3rem;
		border-bottom: 1px solid var(--border-strong);
		font-size: clamp(1.05rem, 2vw, 1.45rem);
		letter-spacing: -0.03em;
		text-decoration: none;
	}

	.email:hover {
		border-color: var(--accent);
		text-decoration: none;
	}

	.close-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem 1.5rem;
		margin-top: 3.5rem;
		padding-top: 1.15rem;
		border-top: 1px solid var(--border);
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	.close-meta a {
		color: var(--text-muted);
		text-decoration: none;
	}

	.close-meta a:hover {
		color: var(--text);
	}

	@media (max-width: 900px) {
		.hero,
		.about-grid,
		.section-head,
		.job {
			grid-template-columns: 1fr;
		}

		.portrait {
			justify-self: start;
			max-width: 24rem;
		}
	}

	@media (max-width: 640px) {
		.hero {
			padding-top: 3.25rem;
		}

		.work-row {
			grid-template-columns: 2rem 1fr;
		}

		.meta {
			grid-column: 2;
		}

		.note {
			grid-template-columns: 4.4rem 1fr 1rem;
		}

		.note small {
			display: none;
		}

		.timeline li {
			grid-template-columns: 2.2rem 1fr;
		}
	}
</style>
