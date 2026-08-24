<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site, now, skillGroups, posts, experience, principles } from '$lib/config';
</script>

<Seo />

<div class="cv">
	<!-- Hero -->
	<header class="hero">
		<p class="hero-eyebrow">Software developer · {site.location}</p>
		<h1 class="hero-name">{site.firstName} {site.lastName}</h1>
		<p class="hero-tagline">{site.tagline}</p>
		<p class="hero-oneliner">{site.oneliner}</p>
		<div class="hero-links">
			<a href="mailto:{site.email}" class="focus-ring">Email</a>
			<a href="https://github.com/saymanrifat" target="_blank" rel="noopener noreferrer" class="focus-ring">GitHub</a>
			<a href="/writing" class="focus-ring">Writing</a>
		</div>
	</header>

	<!-- Experience — main CV content -->
	{#if experience.length}
		<section class="cv-section">
			<h2 class="cv-section-title">Experience</h2>
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
	{/if}

	<!-- Skills -->
	<section class="cv-section">
		<h2 class="cv-section-title">Skills</h2>
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

	<!-- Now / currently focused on -->
	{#if now.items.length}
		<section class="cv-section">
			<h2 class="cv-section-title">Currently</h2>
			<ul class="cv-now-list">
				{#each now.items as item}
					<li><strong>{item.title}</strong> — {item.detail}</li>
				{/each}
			</ul>
		</section>
	{/if}

	<!-- Latest writing -->
	{#if posts.length}
		<section class="cv-section">
			<h2 class="cv-section-title">Writing</h2>
			<ul class="cv-writing-list">
				{#each posts.slice(0, 3) as post}
					<li>
						<a href="/writing/{post.slug}">{post.title}</a>
						<span class="cv-date">{post.date}</span>
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	<!-- Principles -->
	{#if principles.length}
		<section class="cv-section">
			<h2 class="cv-section-title">Principles</h2>
			<div class="cv-principles">
				{#each principles as p}
					<div class="cv-principle">
						<h3>{p.title}</h3>
						<p>{p.body}</p>
					</div>
				{/each}
			</div>
		</section>
	{/if}
</div>