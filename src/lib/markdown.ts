export type NoteBlock =
	| { type: 'heading'; text: string }
	| { type: 'list'; items: string[] }
	| { type: 'paragraph'; html: string };

function escapeHtml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}

function inline(value: string): string {
	return escapeHtml(value).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

/** Tiny note parser for the backtick posts in `config.ts`. */
export function parseNote(content: string): NoteBlock[] {
	return content
		.split(/\n\n+/)
		.map((chunk) => chunk.trim())
		.filter(Boolean)
		.map((chunk) => {
			if (chunk.startsWith('**') && chunk.endsWith('**') && chunk.indexOf('**', 2) === chunk.length - 2) {
				return { type: 'heading', text: chunk.slice(2, -2) };
			}

			const lines = chunk.split('\n');
			if (lines.every((line) => line.startsWith('- '))) {
				return { type: 'list', items: lines.map((line) => line.slice(2)) };
			}

			return { type: 'paragraph', html: inline(chunk).replaceAll('\n', '<br />') };
		});
}
