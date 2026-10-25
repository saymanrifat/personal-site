<script lang="ts">
	import { theme } from '$lib/stores/theme';

	const nextLabel = $derived($theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
</script>

<button class="theme-toggle" type="button" aria-label={nextLabel} title={nextLabel} onclick={() => theme.toggle()}>
	{#if $theme === 'dark'}
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
		</svg>
	{:else}
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
		border: 1px solid var(--border);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		cursor: pointer;
		transition:
			border-color var(--duration) var(--ease),
			color var(--duration) var(--ease),
			background var(--duration) var(--ease);
	}

	.theme-toggle:hover {
		color: var(--text);
		border-color: var(--border-strong);
		background: var(--bg-subtle);
	}
</style>
