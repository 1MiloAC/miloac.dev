<script lang="ts">
    import Sidebar from '$lib/Sidebar.svelte'
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex flex-row gap-1 justify-center font-karla text-[16px]">
    <div class="flex-col w-80 min-h-screen text-white p-8 pt-24">
        <Sidebar/>

    </div>

    <div class="flex-col min-w-[850px] min-h-screen text-white pt-24 ">
        {@render children()}
   </div>

    <div class="flex-col w-80 min-h-screen text-white p-8 pt-24">
        <p>test</p>
    </div>
</div>

