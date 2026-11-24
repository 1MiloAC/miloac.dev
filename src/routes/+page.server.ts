import { get_p } from "#lib/server/posts.ts";
import type { PageServerLoad } from './$types';
export const prerender = true;

export const load: PageServerLoad = () => {
    const all = get_p();
    return {
        posts: all.slice(0, 5),
        total_p: all.length
    };
};

