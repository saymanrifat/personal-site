import { error } from '@sveltejs/kit';
import { posts } from '$lib/config';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const post = posts.find((p) => p.slug === params.slug);
	if (!post) throw error(404, 'Post not found');
	return { post };
};

// Pre-render every blog post at build time for SEO.
export const prerender = true;
