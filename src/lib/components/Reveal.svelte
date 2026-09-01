<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	let {
		children,
		delay = 0
	}: {
		children: Snippet;
		delay?: number;
	} = $props();

	let el = $state<HTMLElement | undefined>();
	let visible = $state(false);

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			visible = true;
			return;
		}
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
		);

		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<div
	bind:this={el}
	class="reveal"
	class:is-visible={visible}
	style="--reveal-delay: {delay}ms"
>
	{@render children()}
</div>
