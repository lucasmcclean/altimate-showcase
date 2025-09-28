import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		paths: {
			base: '/altimate-showcase'
		},
		adapter: staticAdapter({
			fallback: '404.html'
		})
	}
};

export default config;
