<script lang="ts">
	import { resolve } from '$app/paths';
	import type { p_meta } from '#lib/posts.ts';

	let { posts, limit }: { posts: p_meta[]; limit?: number } = $props();

	const shown = $derived(limit !== undefined ? posts.slice(0, limit) : posts);
</script>

<ul class="flex flex-col">
	{#each shown as post (post.slug)}
		<li>
			<a
				href={resolve('/blog/[slug]', { slug: post.slug })}
				class="block px-2 py-2 text-amber-50 transition-colors hover:bg-cyan-100 hover:text-emerald-200"
				>{post.title}
			</a>
		</li>
	{:else}
		<li class="px-2 py-2 text-sm text-slate-500">No posts yet...</li>
	{/each}
</ul>
