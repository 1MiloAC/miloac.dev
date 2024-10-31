<script lang="ts">
	import { onMount } from 'svelte';

	interface Page {
		name: string;
		path: string;
	}

	export let pages: Page[] = [];
	export let classes: string = '';

	onMount(() => {
		const modules = import.meta.glob('../routes/**/*.svelte', { eager: true });

		pages = Object.keys(modules)
			.filter((path) => path.endsWith('+page.svelte'))
			.map((path) => {
				const pageName = path
					.replace('../routes/', '')
					.replace('+page.svelte', '')
					.replace('/', '');
				return {
					name: pageName,
					path: `/${pageName}`
				} as Page;
			});
	});
</script>

<ul class={classes}>
	{#each pages as page}
		<li>
			<a href={page.path}>{page.name}</a>
		</li>
	{/each}
</ul>
