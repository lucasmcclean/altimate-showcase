<script lang="ts">
	import LinkArrow from '$lib/internal/LinkArrow.svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	const {
		children,
		external = false,
		target,
		rel,
		class: className = '',
		...rest
	}: HTMLAnchorAttributes & {
		external?: boolean;
		target?: string;
		rel?: string;
		class?: string;
		children: () => unknown;
	} = $props();

	const computedTarget = external ? '_blank' : target;
	const computedRel = external ? (rel ?? 'noopener noreferrer') : rel;
</script>

<a
	{...rest}
	target={computedTarget}
	rel={computedRel}
	class={`relative inline items-center gap-1 transition-colors
          after:absolute after:bottom-[0px] after:left-0 after:h-[2px] after:w-0
          after:bg-current after:transition-all
          hover:after:w-full focus-visible:after:w-full ${className}`}
>
	{@render children()}
	{#if external}
		<LinkArrow />
	{/if}
</a>
