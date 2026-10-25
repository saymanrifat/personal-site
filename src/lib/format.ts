const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Format an ISO date (`YYYY-MM-DD`) for display without timezone shifts. */
export function formatDate(iso: string): string {
	const [year, month, day] = iso.split('-').map(Number);
	if (!year || !month || !day) return iso;
	return `${day} ${months[month - 1]} ${year}`;
}

export function formatYearMonth(iso: string): string {
	const [year, month] = iso.split('-');
	return `${year}.${month}`;
}

export function isExternalHref(href: string): boolean {
	return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:');
}
