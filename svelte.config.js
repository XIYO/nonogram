import adapter from '@sveltejs/adapter-cloudflare';

const config = {
	kit: { adapter: adapter() },
	svelte: {
		compilerOptions: {
			runes: true // Svelte 5 룬 문법 활성화
		}
	}
};

export default config;
