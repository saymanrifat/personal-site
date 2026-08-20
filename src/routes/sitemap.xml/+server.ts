import { posts, site } from '$lib/config';

export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export function GET() {
	const mainPages = [
		{ path: '', changefreq: 'weekly', priority: 1.0 },
		{ path: '/about', changefreq: 'monthly', priority: 0.8 },
		{ path: '/skills', changefreq: 'monthly', priority: 0.7 },
		{ path: '/writing', changefreq: 'weekly', priority: 0.8 },
		{ path: '/now', changefreq: 'weekly', priority: 0.7 },
		{ path: '/contact', changefreq: 'yearly', priority: 0.6 }
	];

	const blog = posts.map((p) => ({
		path: `/writing/${p.slug}`,
		changefreq: 'monthly',
		priority: 0.6
	}));

	const all = [...mainPages, ...blog];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
	.map(
		(p) => `  <url>
    <loc>${site.url}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
}