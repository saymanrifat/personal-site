<script lang="ts">
	import { site } from '$lib/config';

	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="shell bar">
		<p>© {year} {site.name}</p>
		<ul>
			<li>
				<a href={site.github} target="_blank" rel="noopener noreferrer">
					GitHub
					<span class="visually-hidden">(opens in a new tab)</span>
				</a>
			</li>
			<li><a href="mailto:{site.email}">Email</a></li>
		</ul>
	</div>
</footer>

<style>
	.site-footer {
		position: relative;
		z-index: 1;
		border-top: 1px solid var(--border);
		padding: 1.35rem 0 1.6rem;
		background: var(--bg);
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
	}

	p,
	a {
		margin: 0;
		color: var(--text-muted);
		font-size: 0.8rem;
		letter-spacing: 0.02em;
		text-decoration: none;
	}

	ul {
		display: flex;
		gap: 1.15rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	a:hover {
		color: var(--text);
		text-decoration: none;
	}
</style>
