import { posts, site } from '$lib/config';

export const prerender = true;
export const trailingSlash = 'never';

export function GET() {
	const pages = [
		{ path: '', changefreq: 'weekly', priority: '1.0', lastmod: posts[0]?.date },
		{ path: '/about', changefreq: 'monthly', priority: '0.8' },
		{ path: '/skills', changefreq: 'monthly', priority: '0.7' },
		{ path: '/writing', changefreq: 'weekly', priority: '0.8', lastmod: posts[0]?.date },
		{ path: '/now', changefreq: 'weekly', priority: '0.7' },
		{ path: '/contact', changefreq: 'yearly', priority: '0.6' }
	];

	const blog = posts.map((post) => ({
		path: `/writing/${post.slug}`,
		changefreq: 'monthly',
		priority: '0.6',
		lastmod: post.date
	}));

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...pages, ...blog]
	.map(
		(entry) => `  <url>
    <loc>${site.url}${entry.path}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${
			entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ''
		}
  </url>`
	)
	.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
}
