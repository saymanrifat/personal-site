<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site, now, skillGroups, posts, principles } from '$lib/config';

	const featuredPosts = posts.slice(0, 3);
</script>

<Seo />

<div class="container">
	<!-- Intro -->
	<section class="hero">
		<p class="mono kicker">&gt; hello, world</p>
		<h1>{site.firstName}</h1>
		<p class="lead">{site.oneliner}</p>
		<div class="cta">
			<a class="btn btn-primary" href="/about">About me →</a>
			<a class="btn btn-ghost" href="#writing">Read my writing</a>
		</div>
		<ul class="quicklinks">
			{#each site.socials as s (s.label)}
				<li><a class="mono" href={s.href} target="_blank" rel="noopener noreferrer">{s.handle}</a></li>
			{/each}
		</ul>
	</section>

	<!-- Currently -->
	<section id="now">
		<div class="row-head">
			<h2 class="section-title">What I'm focused on</h2>
			<a class="row-link" href="/now">Full "Now" page →</a>
		</div>
		<ul class="now-list">
			{#each now.items as item (item.title)}
				<li class="now-item">
					<h3>{item.title}</h3>
					<p>{item.detail}</p>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Skills -->
	<section id="skills-preview">
		<div class="row-head">
			<h2 class="section-title">What I work with</h2>
			<a class="row-link" href="/skills">All skills →</a>
		</div>
		<div class="skill-cols">
			{#each skillGroups.slice(0, 3) as group (group.id)}
				<div class="skill-col">
					<h3>{group.label}</h3>
					<ul class="skill-tags">
						{#each group.skills as sk (sk)}
							<li class="tag-badge">{sk}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>

	<!-- Writing -->
	<section id="writing">
		<div class="row-head">
			<h2 class="section-title">Latest writing</h2>
			<a class="row-link" href="/writing">All posts →</a>
		</div>
		<ul class="post-list">
			{#each featuredPosts as post (post.slug)}
				<li>
					<a class="post" href={`/writing/${post.slug}`}>
						<div class="post-meta">
							<span class="mono date">{post.date}</span>
							<span class="mono reading">{post.readingTime}</span>
						</div>
						<h3>{post.title}</h3>
						<p>{post.excerpt}</p>
					</a>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Principles -->
	<section id="principles-preview">
		<h2 class="section-title">How I work</h2>
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
	.hero { padding: var(--sp-12) 0 var(--sp-16); }
	.kicker { color: var(--accent); margin-bottom: var(--sp-3); }
	.lead { font-size: 1.2rem; color: var(--text-secondary); max-width: 40em; }
	.lead a { color: var(--text); font-weight: 600; }
	.lead a:hover { color: var(--accent); }
	.cta { display: flex; gap: var(--sp-3); margin-top: var(--sp-6); flex-wrap: wrap; }
	.btn { display: inline-flex; align-items: center; padding: var(--sp-2) var(--sp-4); border-radius: var(--radius); font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: opacity var(--transition), background var(--transition), border-color var(--transition); }
	.btn-primary { background: var(--accent); color: var(--accent-contrast); }
	.btn-primary:hover { opacity: 0.9; text-decoration: none; }
	.btn-ghost { border: 1px solid var(--border-strong); color: var(--text); }
	.btn-ghost:hover { background: var(--bg-subtle); text-decoration: none; }
	.quicklinks { display: flex; gap: var(--sp-6); flex-wrap: wrap; list-style: none; margin: var(--sp-8) 0 0; padding: 0; }
	.quicklinks a { color: var(--text-muted); text-decoration: none; font-size: 0.9rem; }
	.quicklinks a:hover { color: var(--accent); }
	section { padding: var(--sp-12) 0; border-top: 1px solid var(--border); }
	.row-head { display: flex; align-items: baseline; justify-content: space-between; gap: var(--sp-4); margin-bottom: var(--sp-6); }
	.row-link { font-size: 0.9rem; color: var(--text-muted); white-space: nowrap; }
	.row-link:hover { color: var(--text); }
	.now-list { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--sp-3); }
	.now-item { padding: var(--sp-4) var(--sp-6); border: 1px solid var(--border); border-radius: var(--radius-lg); background: var(--bg-elevated); transition: border-color var(--transition); }
	.now-item:hover { border-color: var(--border-strong); }
	.now-item h3 { font-size: 1.05rem; margin-bottom: var(--sp-1); }
	.now-item p { color: var(--text-secondary); margin: 0; }
	.skill-cols { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--sp-4); }
	.skill-col h3 { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: var(--sp-3); }
	.skill-tags { display: flex; flex-wrap: wrap; gap: var(--sp-2); list-style: none; margin: 0; padding: 0; }
	.tag-badge { font-size: 0.82rem; padding: var(--sp-1) var(--sp-3); border: 1px solid var(--border); border-radius: 999px; color: var(--text-secondary); background: var(--bg-subtle); }
	.post-list { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--sp-2); }
	.post-list a.post { display: block; padding: var(--sp-4) var(--sp-2); border-bottom: 1px solid var(--border); text-decoration: none; color: var(--text); transition: border-color var(--transition); }
	.post-list a.post:hover { border-color: var(--border-strong); }
	.post-meta { display: flex; gap: var(--sp-4); margin-bottom: var(--sp-2); }
	.post-meta .date { color: var(--accent); font-size: 0.78rem; }
	.post-meta .reading { color: var(--text-muted); font-size: 0.78rem; }
	.post-list h3 { font-size: 1.15rem; margin-bottom: var(--sp-1); }
	.post-list p { color: var(--text-secondary); margin: 0; max-width: 46em; }
	.principles { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--sp-4); }
	.principles li { padding: var(--sp-6); border: 1px solid var(--border); border-radius: var(--radius-lg); background: var(--bg-elevated); }
	.principles h3 { font-size: 1.05rem; margin-bottom: var(--sp-2); }
	.principles p { color: var(--text-secondary); margin: 0; }
</style>