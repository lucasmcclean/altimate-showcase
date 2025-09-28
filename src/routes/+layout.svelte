<script lang="ts">
	import '/logo.png';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<div>
	<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
	{@render children?.()}
</div>
