import { get_p } from "#lib/server/posts.ts";
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = () => {
    return { posts: get_p() };
};
