<script lang="ts">
	import { theme } from '$lib/stores/theme';
</script>

<button
	class="theme-toggle focus-ring"
	aria-label="Toggle color theme"
	title="Toggle light / dark theme"
	onclick={() => theme.toggle()}
>
	{#if $theme === 'dark'}
		<!-- Sun icon (switch to light) -->
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
		</svg>
	{:else}
		<!-- Moon icon (switch to dark) -->
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	{/if}
</button>

<style>
	.theme-toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: var(--radius);
		border: 1px solid var(--border);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		cursor: pointer;
		transition: border-color var(--transition), color var(--transition), background var(--transition);
	}
	.theme-toggle:hover {
		color: var(--text);
		border-color: var(--border-strong);
		background: var(--bg-subtle);
	}
</style>
