import { error } from '@sveltejs/kit';
import { get_postslugs, load_post } from '#lib/posts.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return get_postslugs().map((slug) => ({ slug }));
};

export const load: PageLoad = async ({ params }) => {
	const post = await load_post(params.slug);
	if (!post) error(404, 'Post not found');
	return post;
};
