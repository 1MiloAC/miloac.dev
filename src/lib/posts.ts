import type { Component } from 'svelte';

export type p_meta = {
    slug: string;
    title: string;
    date: string;
};

export type p_mod = {
    default: Component;
    metadata?: {
        title?: string;
        date?: string;
    };
};

const loaders = import.meta.glob<p_mod>
    ('./content/*.svelte');

export function slug_path(path: string): string {
    return path.split('/').pop()!.replace(/\.svelte$/, '');
}

export function get_postslugs(): string[] {
    return Object.keys(loaders).map(slug_path);
}

export async function load_post(slug: string): Promise<{ meta: p_meta; Component: Component } | null> {
    const loader = loaders[`./content/${slug}.svelte`];
    if (!loader) return null;

    const mod = await loader();
    return {
        meta: {
            slug, title: mod.metadata?.title ?? 'Untitled',
            date: String(mod.metadata?.date ?? '')
        },
        Component: mod.default
    };
}
