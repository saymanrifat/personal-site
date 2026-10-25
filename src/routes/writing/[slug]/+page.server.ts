import { error } from '@sveltejs/kit';
import { posts } from '$lib/config';
import type { EntryGenerator, PageServerLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => posts.map((post) => ({ slug: post.slug }));

export const load: PageServerLoad = ({ params }) => {
	const post = posts.find((item) => item.slug === params.slug);
	if (!post) throw error(404, 'Post not found');
	return { post };
};
