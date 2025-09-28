<script lang="ts">
	import '/logo.png';
	import '../app.css';
	import { resolve } from 'path';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={resolve('/favicon.png')} />
</svelte:head>

<div>
	<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
	{@render children?.()}
</div>
