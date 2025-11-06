<script>
    import GithubSvg from "$lib/assets/icons/github.svelte";
    import TwitterSvg from "$lib/assets/icons/twitter.svelte";
</script>

<div
    class="flex flex-col md:flex-row w-full min-h-screen gap-1 font-karla text-base text-slate-50 mx-auto"
>
    <!-- Sidebar -->

    <div class="flex-col min-w-80 h-auto md:min-h-screen md:p-8 p-4 md:pt-24">
        <!-- title with blur on hover -->
        <div class="flex md:flex-col flex-row">
            <div class="py-2 relative group inline-block">
                <a href="/">
                    <h1
                        class="text-3xl font-publicsans inline-block"
                        style="font-variation-settings: 'wght' 700;"
                    >
                        MiloAC
                    </h1>
                </a>
            </div>
            <div
                class="flex flex-row md:pt-4 md:justify-normal justify-end flex-grow items-center gap-8"
            >
                <a href="https://github.com/1MiloAC">
                    <GithubSvg fill="white" classes="h-6"></GithubSvg>
                </a>
                <a href="https://x.com/1miloac">
                    <TwitterSvg fill="white" classes="h-6"></TwitterSvg>
                </a>
            </div>
        </div>
    </div>

    <div class="flex flex-col xl:flex-row gap-1 w-auto">
        <!-- Main -->
        <div
            class="flex-col min-w-80 h-fit md:pt-18 pt-4 px-4 grow break-words overflow-hidden"
        >
            <div class="justify-center p-2 md:mt-5 bg-fixed bg-center">
                <img
                    src="/images/Frieren.avif"
                    alt="Frieren looking at camera."
                    class="rounded-xl"
                />
            </div>

            <h1
                class="text-xl font-publicsans mt-4 text-emerald-200 inline-block"
                style="font-variation-settings: 'wght' 700;"
            >
                Welcome
            </h1>
            <p class="mt-2">
                I am Milo, a developer passionate about code and design.
            </p>
            <p class="mt-2">
                Currently I am researching and pursuing several projects in
                different coding languages, as I pursue a degree in Computer
                Science.
            </p>
        </div>

        <!-- Sidebar -->
        <div
            class="flex-col min-w-80 h-auto xl:min-h-screen xl:p-8 xl:pt-24"
        ></div>
    </div>
</div>
