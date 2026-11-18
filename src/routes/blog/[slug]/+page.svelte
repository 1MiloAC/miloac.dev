<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.meta.title} — MiloAC</title>
</svelte:head>

<div class="mx-auto min-h-screen max-w-3xl px-6 py-12 font-karla text-base text-slate-50">
	<a href={resolve('/blog')} class="text-sm text-slate-400 hover:text-emerald-200">
		← Back to blog
	</a>

	<article class="prose mt-4 max-w-none prose-invert">
		<h1 class="font-publicsans text-3xl text-slate-50">{data.meta.title}</h1>
		{#if data.meta.date}
			<time datetime={data.meta.date} class="block text-sm text-slate-400">
				{data.meta.date}
			</time>
		{/if}
		<data.Component />
	</article>
</div>
