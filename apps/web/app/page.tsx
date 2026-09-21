const featureCards = [
  {
    title: 'Academic',
    description: 'Learn about my educational background and the milestones that shaped my path.',
    href: '/about',
  },
  {
    title: 'Alumini',
    description: 'Discover the projects and roles that define my professional journey.',
    href: '/experience',
  },
  {
    title: 'Skills',
    description: 'Explore the technologies and approaches I use to build thoughtful products.',
    href: '/skills',
  },
  {
    title: 'Blog',
    description: 'Read ideas, notes, and updates from my recent work and learning.',
    href: '/blog',
  },
];

const quickFacts = [
  { label: 'Focus', value: 'Product + Tech' },
  { label: 'Interest', value: 'Design systems' },
  { label: 'Current', value: 'Building thoughtfully' },
];

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-10 lg:p-12">
            <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
              Portfolio • Research • Engineering
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Hi, I&apos;m Nandan Barman.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              I create thoughtful experiences at the intersection of technology, design, and continuous learning.
              This space brings together my background, projects, and ideas in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/about" className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700">
                Learn about me
              </a>
              <a href="/blog" className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                Read my blog
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3 text-center">
                  <div className="text-sm font-medium text-slate-500">{fact.label}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up rounded-[2rem] border border-white/70 bg-slate-900/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:p-8" style={{ animationDelay: '0.12s' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Explore</p>
                <h2 className="mt-1 text-2xl font-semibold text-white">Navigate the site</h2>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {featureCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="card-hover group flex items-start justify-between rounded-2xl border border-white/10 bg-white/10 p-4 hover:bg-white/15"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{card.description}</p>
                  </div>
                  <span className="ml-4 text-xl text-slate-400 transition group-hover:text-white">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
