<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { site, experience, principles } from '$lib/config';
</script>

<Seo title="About" description={`About ${site.name} — background, experience, and principles.`} type="profile" />

<div class="cv">
	<header class="cv-page-head">
		<p class="cv-kicker">/ about</p>
		<h1>About me</h1>
	</header>

	<div class="cv-prose">
		<p>
			I'm {site.name}, a developer based in {site.location}. For the past few years I've been
			building software end to end — from the first line of code to the release notes — with a focus
			on web and mobile products that feel calm and just work.
		</p>
		<p>
			I care about software that respects people's attention. That's the thread running through
			everything I build: tools that help you speak a language without fear, productivity software
			that reduces noise instead of adding to it, and developer work where the details are done
			properly.
		</p>
		<p>
			I work at {site.company}, shipping production apps, and I prototype independently on the
			side. I write about both here.
		</p>
	</div>

	<Reveal delay={80}>
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

	<Reveal delay={120}>
		<section class="cv-section">
			<h2 class="cv-section-title"><span class="cv-section-num" aria-hidden="true">02</span> Principles</h2>
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
</div>
