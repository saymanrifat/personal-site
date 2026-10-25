import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'sayman-theme';
const LIGHT = '#f5f4f1';
const DARK = '#121211';

function readDomTheme(): Theme | null {
	if (typeof document === 'undefined') return null;
	if (document.documentElement.classList.contains('theme-light')) return 'light';
	if (document.documentElement.classList.contains('theme-dark')) return 'dark';
	return null;
}

function getInitialTheme(): Theme {
	const fromDom = readDomTheme();
	if (fromDom) return fromDom;
	if (typeof window === 'undefined') return 'light';
	const stored = window.localStorage.getItem(STORAGE_KEY);
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(next: Theme) {
	if (typeof document === 'undefined') return;
	const root = document.documentElement;
	root.classList.toggle('theme-dark', next === 'dark');
	root.classList.toggle('theme-light', next === 'light');
	root.classList.remove('no-theme-init');
	root.style.colorScheme = next;

	const meta = document.querySelector('meta[name="theme-color"]:not([media])');
	if (meta) meta.setAttribute('content', next === 'dark' ? DARK : LIGHT);

	try {
		window.localStorage.setItem(STORAGE_KEY, next);
	} catch {
		/* private mode */
	}
}

export function createThemeStore() {
	let current: Theme = getInitialTheme();
	const { set, subscribe } = writable<Theme>(current, () => {
		if (typeof window !== 'undefined') {
			current = getInitialTheme();
			set(current);
			applyTheme(current);
		}
	});

	return {
		subscribe,
		set: (next: Theme) => {
			current = next;
			set(next);
			applyTheme(next);
		},
		toggle: () => {
			const next: Theme = current === 'dark' ? 'light' : 'dark';
			current = next;
			set(next);
			applyTheme(next);
		}
	};
}

export const theme = createThemeStore();
