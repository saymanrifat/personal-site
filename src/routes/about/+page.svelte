<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site, experience, principles } from '$lib/config';
</script>

<Seo title="About" description={`About ${site.name} — background, experience, and principles.`} type="profile" />

<div class="container">
	<header class="page-head">
		<p class="mono kicker">/ about</p>
		<h1>About me</h1>
	</header>

	<section class="prose">
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
	</section>

	<section id="experience">
		<h2 class="section-title">Experience</h2>
		<ul class="exp-list">
			{#each experience as job (job.role + job.company)}
				<li class="exp">
					<div class="exp-head">
						<h3>{job.role}</h3>
						<span class="mono exp-period">{job.company} · {job.period}</span>
					</div>
					<p class="exp-summary">{job.summary}</p>
					<ul class="exp-points">
						{#each job.points as pt (pt)}
							<li>{pt}</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</section>

	<section id="principles">
		<h2 class="section-title">Principles</h2>
		<ul class="principles">
			{#each principles as p (p.title)}
				<li>
					<h3>{p.title}</h3>
					<p>{p.body}</p>
				</li>
			{/each}
		</ul>
	</section>
</div>

<style>
	.page-head { margin-bottom: var(--sp-8); }
	.prose { max-width: 42em; }
	.prose p { color: var(--text-secondary); }
	section { padding: var(--sp-10) 0; border-top: 1px solid var(--border); }
	.exp-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--sp-6);
	}
	.exp {
		padding: var(--sp-6);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		background: var(--bg-elevated);
	}
	.exp-head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: var(--sp-4);
		flex-wrap: wrap;
		margin-bottom: var(--sp-2);
	}
	.exp-head h3 { margin: 0; font-size: 1.2rem; }
	.exp-period { color: var(--text-muted); font-size: 0.85rem; }
	.exp-summary { color: var(--text-secondary); max-width: 42em; }
	.exp-points { margin: var(--sp-2) 0 0; padding-left: 1.25rem; color: var(--text-secondary); }
	.exp-points li { margin-bottom: var(--sp-1); }
	.principles {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: var(--sp-4);
	}
	.principles li {
		padding: var(--sp-6);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		background: var(--bg-elevated);
	}
	.principles h3 { font-size: 1.05rem; margin-bottom: var(--sp-2); }
	.principles p { color: var(--text-secondary); margin: 0; }
</style>