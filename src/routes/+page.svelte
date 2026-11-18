<script lang="ts">
	import { resolve } from '$app/paths';
	import GithubSvg from '#lib/assets/icons/github.svelte';
	import TwitterSvg from '#lib/assets/icons/twitter.svelte';
	import PostList from '#lib/components/PostList.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div
	class="mx-auto flex min-h-screen w-full flex-col gap-1 font-karla text-base text-slate-50 md:flex-row"
>
	<!-- Sidebar -->

	<div class="h-auto min-w-80 flex-col p-4 md:min-h-screen md:p-8 md:pt-24">
		<!-- title with blur on hover -->
		<div class="flex flex-row md:flex-col">
			<div class="py-2 pr-8 md:p-0">
				<img
					src="/images/Ryo.avif"
					alt="Ryo Yamada"
					class="h-10 justify-center rounded-full md:h-30"
				/>
			</div>
			<div class="group relative inline-block py-2">
				<a href={resolve('/')}>
					<h1
						class="inline-block font-publicsans text-3xl"
						style="font-variation-settings: 'wght' 700;"
					>
						MiloAC
					</h1>
				</a>
			</div>
			<div class="flex grow flex-row items-center justify-end gap-8 md:justify-normal md:pt-4">
				<a href="https://github.com/1MiloAC">
					<GithubSvg fill="white" class="h-6" />
				</a>
				<a href="https://x.com/1miloac">
					<TwitterSvg fill="white" class="h-6" />
				</a>
			</div>
		</div>
	</div>

	<div class="flex w-auto grow flex-col gap-1 xl:flex-row">
		<!-- Main -->
		<div class="wrap-break-words h-fit min-w-80 grow flex-col overflow-hidden px-4 pt-4 md:pt-18">
			<div class="justify-center bg-fixed bg-center p-2 md:mt-5">
				<img src="/images/Frieren.avif" alt="Frieren looking at camera." class="rounded-xl" />
			</div>

			<h1
				class="mt-4 inline-block font-publicsans text-xl text-emerald-200"
				style="font-variation-settings: 'wght' 700;"
			>
				Welcome
			</h1>
			<p class="mt-2">I am Milo, a developer passionate about code and design.</p>
			<p class="mt-2">
				Currently I am researching and pursuing several projects in different coding languages, as I
				pursue a degree in Computer Science.
			</p>
		</div>

		<!-- Sidebar -->
		<div class="flex h-auto min-w-80 flex-col gap-2 px-4 py-8 xl:min-h-screen xl:w-80 xl:shrink-0 xl:p-8 xl:pt-24">
			<div class="flex items-baseline justify-between px-2">
				<h2
					class="font-publicsans text-lg text-emerald-300"
					style="font-variation-settings: 'wght' 700;"
				>
					Blog
				</h2>
				<a href={resolve('/blog')} class="text-xs text-slate-400 hover:text-emerald-300">
					View all ({data.total_p}) ->
				</a>
			</div>
			<PostList posts={data.posts} />
		</div>
	</div>
</div>
