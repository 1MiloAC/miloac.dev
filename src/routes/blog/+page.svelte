<script lang="ts">
	import { resolve } from '$app/paths';
	import GithubSvg from '#lib/assets/icons/github.svelte';
	import TwitterSvg from '#lib/assets/icons/twitter.svelte';
	import PostList from '#lib/components/PostList.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Blog — MiloAC</title>
</svelte:head>

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
			<h1
				class="font-publicsans text-3xl text-slate-50"
				style="font-variation-settings: 'wght' 700;"
			>
				Blog
			</h1>

			<div class="mt-6">
				<PostList posts={data.posts} />
			</div>
		</div>

		<!-- Right Sidebar spacer -->
		<div class="h-auto min-w-80 flex-col xl:min-h-screen xl:w-80 xl:shrink-0 xl:p-8 xl:pt-24"></div>
	</div>
</div>
