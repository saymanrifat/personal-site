<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { site, now, skillGroups, posts, experience, principles } from '$lib/config';
</script>

<Seo />

<div class="cv">
	<header class="hero">
		<p class="hero-eyebrow">Software developer · {site.location}</p>
		<h1 class="hero-name">{site.firstName} {site.lastName}</h1>
		<p class="hero-tagline">{site.tagline}</p>
		<p class="hero-oneliner">{site.oneliner}</p>
		<div class="hero-links">
			<a href="mailto:{site.email}" class="btn focus-ring">Email</a>
			<a
				href="https://github.com/saymanrifat"
				target="_blank"
				rel="noopener noreferrer"
				class="btn-ghost focus-ring">GitHub</a
			>
			<a href="/writing" class="btn-ghost focus-ring">Writing</a>
		</div>
	</header>

	{#if experience.length}
		<Reveal>
			<section class="cv-section">
				<h2 class="cv-section-title"><span class="cv-section-num" aria-hidden="true">01</span> Experience</h2>
				{#each experience as job}
					<div class="cv-entry">
						<div class="cv-entry-head">
							<div>
								<h3>{job.role}</h3>
								<span class="cv-company">{job.company}</span>
							</div>
							<span class="cv-period">{job.period}</span>
						</div>
						<p>{job.summary}</p>
						{#if job.points.length}
							<ul class="cv-bullets">
								{#each job.points as pt}
									<li>{pt}</li>
								{/each}
							</ul>
						{/if}
					</div>
				{/each}
			</section>
		</Reveal>
	{/if}

	<Reveal delay={60}>
		<section class="cv-section">
			<h2 class="cv-section-title"><span class="cv-section-num" aria-hidden="true">02</span> Skills</h2>
			<div class="cv-skills">
				{#each skillGroups as group}
					<div class="cv-skill-group">
						<span class="cv-skill-label">{group.label}</span>
						<div class="cv-chips">
							{#each group.skills as skill}
								<span class="chip">{skill}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</section>
	</Reveal>

	{#if now.items.length}
		<Reveal delay={80}>
			<section class="cv-section">
				<h2 class="cv-section-title"><span class="cv-section-num" aria-hidden="true">03</span> Currently</h2>
				<ul class="cv-now-list">
					{#each now.items as item}
						<li>
							<span class="now-title">{item.title}</span>
							<span class="now-detail">{item.detail}</span>
						</li>
					{/each}
				</ul>
			</section>
		</Reveal>
	{/if}

	{#if posts.length}
		<Reveal delay={100}>
			<section class="cv-section">
				<h2 class="cv-section-title"><span class="cv-section-num" aria-hidden="true">04</span> Writing</h2>
				<ul class="cv-writing-list">
					{#each posts.slice(0, 3) as post}
						<li>
							<a href="/writing/{post.slug}">{post.title}</a>
							<span class="cv-date">{post.date}</span>
						</li>
					{/each}
				</ul>
			</section>
		</Reveal>
	{/if}

	{#if principles.length}
		<Reveal delay={120}>
			<section class="cv-section">
				<h2 class="cv-section-title"><span class="cv-section-num" aria-hidden="true">05</span> Principles</h2>
				<div class="cv-principles">
					{#each principles as p}
						<div class="cv-principle">
							<h3>{p.title}</h3>
							<p>{p.body}</p>
						</div>
					{/each}
				</div>
			</section>
		</Reveal>
	{/if}
</div>
