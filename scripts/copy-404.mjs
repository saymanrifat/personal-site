import { copyFileSync, existsSync } from 'node:fs';

const src = 'build/404/index.html';
const dest = 'build/404.html';

if (existsSync(src)) {
	copyFileSync(src, dest);
	console.log('Copied 404/index.html → 404.html for the static host');
} else {
	console.warn('No build/404/index.html found — skipped 404.html copy');
}
