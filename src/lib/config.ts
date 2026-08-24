// Central site configuration — edit here to update the whole site.

export const site = {
	name: 'Sayman Rifat',
	firstName: 'Sayman',
	lastName: 'Rifat',
	title: 'Sayman Rifat — Developer',
	description:
		'Sayman Rifat is a developer based in Bangladesh building calm, well-crafted software — web, mobile, and developer tools with AI at the core.',
	url: 'https://saymanrifat.com',
	email: 'contact@saymanrifat.com',
	location: 'Bangladesh',
	timezone: 'Asia/Dhaka',
	company: 'Umber Lab Limited',
	keywords:
		'Sayman Rifat, software developer, web developer, mobile developer, SvelteKit, Kotlin, Flutter, Swift, AI, Bangladesh developer',
	tagline: 'I build calm, well-sorted software — web, mobile, and tools that actually help people.',
	oneliner:
		'I turn loose ideas into quietly reliable software. Most of what I build leans on thoughtful UX, solid engineering, and a healthy respect for the people who will use it.',
	socials: [
		{ label: 'GitHub', handle: 'saymanrifat', href: 'https://github.com/saymanrifat' },
		{ label: 'Website', handle: 'saymanrifat.com', href: 'https://saymanrifat.com/' },
		{ label: 'Email', handle: 'contact@saymanrifat.com', href: 'mailto:contact@saymanrifat.com' }
	]
} as const;

// ── Skills & tools ──
export const skillGroups = [
	{
		id: 'languages',
		label: 'Languages',
		skills: ['TypeScript', 'JavaScript', 'Kotlin', 'Swift', 'Java', 'Dart', 'SQL']
	},
	{
		id: 'web',
		label: 'Web',
		skills: ['SvelteKit', 'Svelte', 'React', 'Node.js', 'Vite', 'HTML/CSS', 'Tailwind']
	},
	{
		id: 'mobile',
		label: 'Mobile',
		skills: ['Kotlin / Compose', 'Flutter', 'Swift / SwiftUI', 'Native iOS & Android']
	},
	{
		id: 'tools',
		label: 'Tools & infra',
		skills: ['Git & GitHub', 'Vercel', 'Firebase', 'PostgreSQL', 'REST & APIs', 'WordPress']
	},
	{
		id: 'ai',
		label: 'AI & integrations',
		skills: ['LLM APIs', 'Speech / STT', 'Prompt engineering', 'Agent tooling']
	}
];

// ── Work experience ──
export const experience = [
	{
		role: 'Software Developer',
		company: 'Umber Lab Ltd',
		period: 'Present',
		summary:
			'Building web and mobile products in a small team — from feature work to shipping releases.',
		points: [
			'Develop and maintain production apps across Android, iOS, and the web',
			'Work across the stack: UI, business logic, APIs, and release engineering',
			'Collaborate closely with design and product to ship calm, healthy features'
		]
	},
	{
		role: 'Independent Builder',
		company: 'Personal projects',
		period: 'Ongoing',
		summary:
			'Research, prototypes, and small tools that explore AI, speaking practice, and developer productivity.',
		points: ['Prototype AI-driven tools and utilities', 'Self-own everything from idea to App Store']
	}
];

// ── Now (what I'm focused on) ──
export const now = {
	updated: '2026',
	items: [
		{
			title: 'AI speaking practice',
			detail:
				'Most people learn to type a language, not to speak it. I’m building tools that help speak English.'
		},
		{ title: 'Calm productivity software', detail: 'Software that reduces noise instead of adding to it.' },
		{ title: 'This site', detail: 'A quiet corner of the web for writing and public R&D notes.' },
		{ title: 'Reading', detail: 'Design systems and how small teams ship big things.' }
	]
};

// ── Principles ──
export const principles = [
	{
		title: 'Calm over clever',
		body: 'Software should reduce mental load, not add to it.'
	},
	{
		title: 'Done is a process',
		body: 'Ship small, real increments and iterate — momentum beats perfection.'
	},
	{
		title: 'Code for humans',
		body: 'The measure of good software is how it feels.'
	}
];

// ── Blog posts ──
// Note: keep content as backtick template literals to allow straight quotes inside.
export const posts = [
	{
		slug: 'calm-software',
		title: 'On building calm software',
		date: '2026-08-10',
		readingTime: '6 min',
		tags: ['principles', 'product'],
		excerpt:
			'Software is loud — notifications, badges, streaks, screaming empty states. A note on building the opposite.',
		content: `Software keeps getting louder — notifications, badges, streaks, screaming empty states. We then call that engagement.\n\nCalm software respects your attention: it doesn't interrupt without reason, and it gets out of the way.\n\n**What calm feels like**\n\n- It asks before it interrupts\n- It shows what matters and hides the rest\n\nI treat "every notification must earn its place" as a design and engineering conversation.`
	},
	{
		slug: 'speaking-is-the-most-skill',
		date: '2026-07-28',
		readingTime: '5 min read',
		tags: ['ai', 'language'],
		title: 'Speaking a language is the hardest part',
		excerpt:
			"Most of us learn languages as grammar — and grammar we can't speak. Notes from building AI conversation tools.",
		content: `Understanding a language is not the same as speaking it. The reader freezes when a human looks at them.\n\nThe interesting thing about AI is that it can finally practice. No judgment, no audience. A patient partner.\n\nThe hard problems here are not tokens. They are latency, feedback that feels human, and a sense of progress that keeps students trying.`
	},
	{
		slug: 'small-team-shipping',
		date: '2026-06-15',
		readingTime: '7 min read',
		title: 'What a small team can ship',
		tags: ['process', 'engineering'],
		excerpt:
			'Two or three people with full ownership can outpace a large org that never owns anything end to end. Some notes from real work.',
		content: `There is a power that comes with a small team that owns its work end to end. No handoffs that lose context. Just the honest loop of write, ship, see what happens.\n\nSmall teams ship because they can't waste. Every meeting begs the question "could this be a message?"\n\nThe tradeoffs are real, and the learning comes fast, because it is the experience of seeing.`
	},
	{
		slug: 'tools-i-use',
		date: '2026-05-20',
		readingTime: '4 min read',
		title: 'The tools I use to build',
		tags: ['tools'],
		excerpt: 'A running list of my editor, shell, and daily toolkit — and why each one stays.',
		content: `I keep this list short on purpose.\n\n- Editor: a code editor on Mac for the languages I touch.\n- Languages: TypeScript for web, Kotlin & Swift for native.\n- Version control: plain git.\n\nThe point isn't the tools. It is that I can move from idea to shipping with zero friction.`
	},
	{
		slug: 'noise-and-focus',
		date: '2026-04-15',
		title: 'On focus and deep work',
		tags: ['focus'],
		readingTime: '9 min read',
		excerpt:
			'Focus is the scarcest resource I have. A short reflection on protecting it.',
		content: `Eight hours in the seat is not the same as eight hours of work. The real hours are often three or four.\n\nProtect a deep work session. Everything else can wait the forty minutes.\n\nIt's not more hours you need. It's more presence.`
	},
	{
		slug: 'why-i-use-ai-tools',
		date: '2026-03-20',
		title: "Why I'm all-in on AI tools",
		tags: ['ai'],
		readingTime: '6 min read',
		excerpt:
			'Not as a crutch, but as a lever. How AI reshapes what one developer can build alone.',
		content: `A single developer with good AI tooling can now build what used to need a keep an idea. Not because AI writes perfect code — because it removes the friction and the forgetting.\n\nThe bottleneck is not writing code. It is the thousand small questions.\n\nAI handles that recall. I hold the product shape in my head, and the tools fill in the details.`
	}
] as const;
