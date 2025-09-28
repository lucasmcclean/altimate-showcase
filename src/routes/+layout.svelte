<script lang="ts">
	import '/logo.png';
	import '../app.css';

	const BASE = import.meta.env.BASE_URL;

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="{BASE}/favicon.png" />
</svelte:head>

<div>
	<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
	{@render children?.()}
</div>
