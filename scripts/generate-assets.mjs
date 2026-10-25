// One-off asset generator. Run with:
//   npm i -D @resvg/resvg-js png-to-ico && node scripts/generate-assets.mjs
import { writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';
import pngToIco from 'png-to-ico';

const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#121211"/>
  <rect x="64" y="64" width="1072" height="502" fill="none" stroke="#2c2b27" stroke-width="1"/>
  <text x="96" y="168" font-family="Georgia, serif" font-size="22" fill="#c6ae88" letter-spacing="6">SOFTWARE DEVELOPER · BANGLADESH</text>
  <text x="96" y="300" font-family="Georgia, serif" font-size="72" fill="#eceae4">Sayman Rifat</text>
  <text x="96" y="372" font-family="Georgia, serif" font-size="34" font-style="italic" fill="#b0ada4">I build useful software.</text>
  <text x="96" y="520" font-family="Georgia, serif" font-size="22" fill="#8c8981">saymanrifat.com</text>
</svg>`;

const markSvg = (size) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#1a1917"/>
  <text x="16" y="22.5" text-anchor="middle" font-family="Georgia, serif" font-size="16" fill="#f5f4f1">S</text>
</svg>`;

function render(svg, opts = {}) {
	return new Resvg(svg, {
		fitTo: opts.fitTo,
		font: { loadSystemFonts: true }
	}).render().asPng();
}

writeFileSync('static/og.png', render(ogSvg));
writeFileSync('static/icon-192.png', render(markSvg(192), { fitTo: { mode: 'width', value: 192 } }));
writeFileSync('static/icon-512.png', render(markSvg(512), { fitTo: { mode: 'width', value: 512 } }));
writeFileSync('static/apple-touch-icon.png', render(markSvg(180), { fitTo: { mode: 'width', value: 180 } }));

const favicon16 = render(markSvg(16), { fitTo: { mode: 'width', value: 16 } });
const favicon32 = render(markSvg(32), { fitTo: { mode: 'width', value: 32 } });
writeFileSync('/tmp/favicon-16.png', favicon16);
writeFileSync('/tmp/favicon-32.png', favicon32);
const ico = await pngToIco(['/tmp/favicon-16.png', '/tmp/favicon-32.png']);
writeFileSync('static/favicon.ico', ico);

console.log('Wrote og.png, icons, apple-touch-icon, favicon.ico');
