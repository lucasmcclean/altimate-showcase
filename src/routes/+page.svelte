<script>
	import Link from '$lib/Link.svelte';
	//
</script>

<div class="flex h-screen max-h-screen flex-col px-4 xs:px-8">
	<main class="flex grow flex-col items-center justify-center gap-4">
		<h1 class="text-4xl font-semibold tracking-tight xs:text-6xl sm:text-7xl">Altimate</h1>
		<h2 class="flex justify-between text-2xl font-light xs:text-4xl sm:text-5xl">(/ˈʌl.tɪ.mɪt/)</h2>
		<div class="mt-4 flex flex-wrap justify-center gap-x-8 text-xl xs:text-2xl sm:text-3xl">
			<Link href="github.com/lucasmcclean/altimate" external>GitHub</Link>
			<Link href="/extension.zip" download>Download Extension</Link>
		</div>
		<ol class="align-center mt-4 flex w-1/2 flex-wrap justify-center gap-x-2 xs:justify-between">
			<li>Dhruv Goel</li>
			<li>Christina Nguyen</li>
			<li>Ishfaq Moshin</li>
			<li>Lucas McClean</li>
		</ol>
	</main>

	<footer class="flex justify-between py-4 sm:py-8">
		<img class="max-w-16 self-start" src="/logo.png" alt="Alt logo" />
		<p class="font-display">//</p>
	</footer>
</div>
