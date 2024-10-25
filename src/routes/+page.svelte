<script>
import Github from './github.svelte'
import X from './x.svelte'
</script>
<div class="flex-col p-4 max-w-2xl mx-auto min-h-screen font-hoover-regular text-white">
    <div class="flex-col">
		<header class="flex justify-center w-full h-auto px-3 rounded-[10px]">
			<img
				src="images/banner.avif"
				class="w-[90%] h-auto object-cover rounded-[10px]"
				alt="Banner"
			/>
		</header>

		<div class="flex">
			<h1 id="h1" class="text-left text-[#70DBA8] text-[3em] font-sans">MiloAC</h1>
			<div class="flex ml-auto items-center flex-row">
				<a href="https://x.com/1miloac" class="px-1.5">
                    <X classes="w-6 h-6 fill-[#DB6F83] hover:fill-[#eba842]"/>
				</a>
				<a href="https://github.com/MiloAC1" class="px-1.5">
                    <Github classes="w-6 h-6 fill-[#DB6F83] hover:fill-[#eba842]"/>
				</a>
			</div>
		</div>

		<div class="p-[5px] text-lg">
			<p>
				I am a self taught developer, who is passionate about computers, coding, and design.
				Currently in my gap year, I am pursuing projects and research in differnt computer
				languages.
			</p>
		</div>

		<h2 class="text-left text-[#E8D65F] font-sans">Projects:</h2>
		<div class="p-[5px] text-lg">
			<p>Things are brewing! Expect updates soon!</p>
			<p class="text-[#4c4c4c] font-space-mono">Zig.......loading</p>
		</div>
	</div>
	<footer class="absolute bottom-0 w-full">
		<p class="text-[#4c4c4c] font-space-mono">Version 1.2</p>
	</footer>
    </div>
