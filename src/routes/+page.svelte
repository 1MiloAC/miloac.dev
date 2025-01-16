<script>
	import GithubSvg from '$lib/assests/icons/github.svelte';
	import TwitterSvg from '$lib/assests/icons/twitter.svelte';
	import XSvg from '$lib/assests/icons/x.svelte';
</script>

<div
	class="flex flex-col md:flex-row w-full min-h-screen gap-1 justify-center font-karla text-base text-slate-50 mx-auto"
>
	<!-- Sidebar -->

	<div class="flex-col min-w-80 h-auto md:min-h-screen md:p-8 p-4 md:pt-24"
    >
		<!-- PFP 
        <div class="flex flex-row md:justify-center">
			<div class="w-32 h-32 my-4">
				<img src="/images/pfp.avif" alt="Link looking pensive" class="rounded-full" />
			</div>
		</div>
-->

		<!-- title with blur on hover -->
		<div class="flex flex-row">
			<div class="py-2 relative group inline-block">
				<a href="/">
					<div
						class=" rounded-full blur-none group-hover:blur-xl group-hover:shadow-xl bg-blend-difference transition-all hover:scale-110 ease-in-out duration-300 group-hover:opacity-100 opacity-0 inline-block"
					>
						<h1
							class="text-3xl font-publicsans inline-block"
							style="font-variation-settings: 'wght' 700;"
						>
							MiloAC
						</h1>
					</div>
					<div class=" absolute top-0">
						<h1
							class="text-3xl font-publicsans inline-block z-10 group-hover:scale-110 transition-all duration-300 ease-in-out"
							style="font-variation-settings: 'wght' 700;"
						>
							MiloAC
						</h1>
					</div>
				</a>
			</div>
		</div>
		<!--
		<div class="flex py-4">
			<p
				class="font-publicsans text-emerald-500"
				style="font-variation-settings: 'wght' 700;"
			>
				Navigation

			</p>
		</div>
-->

		<div class="flex py-4 ml-2 relative group inline-block md:block hidden">
			<a href="./TheShelf">
				<div class="transition-all duration-300 hover:scale-110 ease-in-out">
					<p class="" style="font-variation-settings: 'wght' 700;">The Shelf</p>
				</div>
			</a>
		</div>
	</div>

    <div class="flex flex-col xl:flex-row gap-1 w-auto">
	<!-- Main -->
	<div
		class="flex-col min-w-80 min-h-screen md:pt-18 pt-4 px-4 grow break-words overflow-hidden"
	>
		<div class="justify-center p-2 md:mt-5 bg-fixed bg-center">
			<img src="/images/Frieren.avif" alt="Frieren looking at camera." class="rounded-xl" />
		</div>

		<h1
			class="text-xl font-publicsans mt-4 text-emerald-200 inline-block"
			style="font-variation-settings: 'wght' 700;"
		>
			Welcome
		</h1>
		<p class="mt-2">I am Milo, a self taught developer passionate about code and design.</p>
		<p class="mt-2">
			Currently I am researching and pursuing several projects in different coding langs, as I
			pursue a degree in Computer Science.
		</p>
	</div>

	<!-- Sidebar -->
	<div class="flex-col min-w-80 h-auto xl:min-h-screen xl:p-8 xl:pt-24"></div>
</div>
</div>
