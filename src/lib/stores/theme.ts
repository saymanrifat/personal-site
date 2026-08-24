import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'sayman-theme';

function getInitialTheme(): Theme {
	if (typeof window === 'undefined') return 'dark';
	const stored = window.localStorage.getItem(STORAGE_KEY);
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/** SvelteKit $state-based store for theme. Applies class to <html>, persists it. */
export function createThemeStore() {
	let theme: Theme = getInitialTheme();

	const { set, subscribe } = writable<Theme>(theme, () => {
		if (typeof window !== 'undefined') {
			applyTheme(getInitialTheme());
		}
	});

	function applyTheme(next: Theme) {
		theme = next;
		const root = document.documentElement;
		root.classList.toggle('theme-dark', next === 'dark');
		root.classList.toggle('theme-light', next === 'light');
		root.classList.remove('no-theme-init');
		try {
			window.localStorage.setItem(STORAGE_KEY, next);
		} catch {
			/* private mode */
		}
	}

	return {
		subscribe,
		set: (next: Theme) => {
			set(next);
			applyTheme(next);
		},
		toggle: () => {
			const next: Theme = theme === 'dark' ? 'light' : 'dark';
			set(next);
			applyTheme(next);
		}
	};
}

export const theme = createThemeStore();