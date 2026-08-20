// Central site configuration — edit here to update the whole site.

export const site = {
	name: 'Sayman Rifat',
	firstName: 'Sayman',
	lastName: 'Rifat',
	title: 'Sayman Rifat — Developer',
	description:
		'Sayman Rifat is a developer based in Bangladesh building calm, well-crafted software — web, mobile, and developer tools with AI at the core.',
	url: 'https://saymanrifat.com.bd',
	email: 'contact.saymanrifat@gmail.com',
	location: 'Bangladesh',
	timezone: 'Asia/Dhaka',
	company: 'Umber Lab Limited',
	keywords:
		'Sayman Rifat, software developer, web developer, mobile developer, SvelteKit, Kotlin, Flutter, Swift, AI, Bangladesh developer',
	tagline: 'I build calm, well-crafted software — web, mobile, and tools that actually help people.',
	oneliner:
		'I turn loose ideas into quietly reliable software. Most of what I build leans on thoughtful UX, solid engineering, and a healthy respect for the people who will use it.',
	socials: [
		{ label: 'GitHub', handle: 'saymanrifat', href: 'https://github.com/saymanrifat' },
		{ label: 'Website', handle: 'saymanrifat.com.bd', href: 'https://saymanrifat.com.bd/' },
		{ label: 'Email', handle: 'contact.saymanrifat@gmail.com', href: 'mailto:contact.saymanrifat@gmail.com' }
	]
} as const;

// ── Skills & tools —───────────────────────────────────────────
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

// ── Work experience —──────────────────────────────────────────
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
			'Collaborate closely with design and product to ship calm, useful features'
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

// ── Now (what I'm focused on) ─────────────────────────────────
export const now = {
	updated: '2026',
	items: [
		{
			title: 'AI speaking practice',
			detail:
				'Most people learn to type a language, not to speak it. I'm building toward tools that give live, constructive feedback on spoken English.'
		},
		{ title: 'Calm productivity software', detail: 'Software that reduces noise instead of adding to it. Fewer pings, fewer badges, more finished work.' },
		{ title: 'This site', detail: 'A quiet corner of the web where I can write, share, and keep my R&D notes public.' },
		{ title: 'Reading', detail: 'Design systems, human-computer interaction, and how small teams ship big things.' }
	]
};

// ── Principles ─────────────────────────────────────────────────
export const principles = [
	{
		title: 'Calm over clever',
		body: 'Software should reduce mental load, not add to it. The best feature is often the one that gets out of the way.'
	},
	{
		title: 'Done is a process',
		body: 'I believe in shipping small, real increments and iterating — momentum beats perfection.'
	},
	{
		title: 'Code for humans',
		body: 'The measure of good software is how it feels. Design matters as much as architecture.'
	}
];

// ── Blog posts ─────────────────────────────────────────────────
export const posts = [
	{
		slug: 'calm-software',
		title: 'On building calm software',
		date: '2026-08-10',
		readingTime: '6 min',
		tags: ['principles', 'product'],
		excerpt:
			'Software is increasingly loud — notifications, badges, streaks, screaming empty states. I've been thinking about what it means to build the opposite.',
		content: `I opened my phone the other morning and forty minutes had vanished. Not into reading, into fighting the software. We have designed attention-theft into our most important tools, and then called that engagement.

Calm software is not the same as minimal design. Minimal design can be thin and useless. Calm software is software that respects your attention — it doesn't interrupt you without reason, it doesn't manufacture urgency, and it gets out of the way when you're trying to finish something.

**What calm feels like**

- It asks for permission before it interrupts
- Its default is not to remember you in
- It shows you what matters and hides everything else
- It is honest about what it doesn't know

I'm still learning. But I now treat "every notification must earn its place" as a real design and engineering conversation.`
	},
	{
		slug: 'speaking-is-the-most-skill',
		date: '2026-07-28',
		readingTime: '5 min read',
		tags: ['ai', 'language'],
		title: 'Speaking a language is the hardest part',
		excerpt:
			'Most of us learn languages as grammar — and grammar we can't speak. A few thoughts from building AI conversation tools.',
		content: `We teach languages in written order, but we live them in spoken. The learner who has a thousand words of reading vocabulary freezes when a human looks at them.

The interesting thing about AI is that it can finally practice. No judgment, no fear of a bad first reply, no audience. A patient partner. That is a genuinely new possibility, not just a feature.

The hard problems here are not token counts. They are latency, feedback that feels human, and a sense of little progress that keeps students trying. Those are hard engineering and design problems.`
	},
	{
		slug: 'small-team-shipping',
		date: '2026-06-15',
		readingTime: '7 min read',
		title: 'What a small team can ship',
		tags: ['process', 'engineering'],
		excerpt:
			'Two or three people with full ownership can outpace a large org that never owns anything end to end. Some notes from real work.',
		content: `There is a thickness that comes with a small team that owns its work end to end. No handoffs that lose context. No tickets that wait for review across the world. Just the honest loop of write, ship, see what happens.

Small teams ship because they can't afford to waste. Every meeting begs the question "could this be a message?" Every feature asks "is this actually going to be used?"

The tradeoffs are real. You give up being in a thousand repos, stop feeling features, and you'd better learn to write your own release notes. But the learning comes fast, because it is the experience of seeing.`
	},
	{
		slug: 'tools-i-use',
		date: '2026-05-20',
		readingTime: '4 min read',
		title: 'The tools I use to build',
		tags: ['tools'],
		excerpt: 'A running list of my editor, shell, and daily toolkit — and why each one stays.',
		content: `I keep this list short on purpose.

- Editor: I work in a code editor on Mac with a couple of blurs for the languages I touch.
- Languages: TypeScript for the web, Kotlin & Swift for the native side, a little Python when the rec.
- Design to code: I move from a quick design token to Svelte/Compose.
- Version control: plain git.

The point isn't the tools. It is that I can move from idea to deployed thing with zero friction.`
	},
	{
		slug: 'noise-and-focus',
		date: '2026-04-15',
		title: 'On focus, meetings, and deep work',
		tags: ['focus'],
		readingTime: '9 min read',
		excerpt:
			'Focus is the scarcest resource I have. A short reflection on protecting it in a noisy world.',
		content: `Eight hours in the seat is not the same as eight hours of work, no matter how much the measurement sells. The genuine hours usually number three or four.

I draw a long green line, and a deep work session. Everything else — email, chats, the pull request that just came in — can wait the forty minutes.

It's not more hours you need. It's more present.`
	},
	{
		slug: 'why-i-use-ai-tools',
		date: '2026-03-20',
		title: "Why I'm all-in on AI tools",
		tags: ['ai'],
		readingTime: '6 min read',
		excerpt:
			'Not as a crutch, but as a lever. How AI reshapes what one developer can build alone.',
		content: `A single developer with good AI tooling can now seriously compete with the average feature of a mediocre teams of five. Not because the AI writes perfect code — because it removes the friction and the forgetting.

The unconscious bottleneck is not writing code. It is the thousand small questions: "what's the API for this again?", "how does the renderer handle this case?", "what test do I stub?"

AI handles that recall. This matters: I get to hold the whole shape of the product in my head, and the tools fill in the details. That is a very real superpower.`
	}
] as const;
