import { slug_path, type p_meta, type p_mod } from "#lib/posts.ts";


const modules = import.meta.glob<p_mod>
    ('../content/*.svelte', { eager: true });

const posts: p_meta[] = Object.entries(modules).map(([path, mod]) => ({
    slug: slug_path(path),
    title: mod.metadata?.title ?? 'Untitled',
    date: String(mod.metadata?.date ?? '')
})).sort((a, b) => b.date.localeCompare(a.date));

export function get_p(limit?: number): p_meta[] {
    return limit !== undefined ? posts.slice(0, limit) : posts;
}
