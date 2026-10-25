import { site } from '$lib/config';

export const prerender = true;
export const trailingSlash = 'never';

export function GET() {
	const body = `User-agent: *
Allow: /
Disallow: /404
Disallow: /404/

Sitemap: ${site.url}/sitemap.xml
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
}
