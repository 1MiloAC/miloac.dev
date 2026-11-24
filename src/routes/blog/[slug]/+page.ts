import { error } from '@sveltejs/kit';
import { get_postslugs, load_post } from '#lib/posts.ts';
import type { EntryGenerator, PageLoad } from './$types';

// will update once I make a post
export const prerender = false;

export const entries: EntryGenerator = () => {
    return get_postslugs().map((slug) => ({ slug }));
};

export const load: PageLoad = async ({ params }) => {
    const post = await load_post(params.slug);
    if (!post) error(404, 'Post not found');
    return post;
};
