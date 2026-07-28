const companies = [
  { name: 'Infosys', image: '/images/infosys.png' },
  { name: 'HCL', image: '/images/hcl.png' },
  { name: 'TCS', image: '/images/tcs.png' },
  { name: 'AT&T', image: '/images/att.png' },
];

const clients = [
  { name: 'Abbott', image: '/images/abbott.png' },
  { name: 'Walmart', image: '/images/walmart.png' },
  { name: 'Tomra', image: '/images/tomra.png' },
];

const highlights = [
  'Led full-stack delivery across complex, high-scale web platforms.',
  'Mentored engineers and helped shape team execution and quality standards.',
  'Delivered solutions for clients in retail, healthcare, and technology sectors.',
];

const experiences = [
  {
    title: 'Tech Lead',
    company: 'AT&T',
    period: 'Current role',
    summary:
      'Leading cross-functional delivery for digital initiatives focused on reliability, performance, and modern user experiences.',
    responsibilities: [
      'Own architecture decisions and guide implementation across front-end and back-end systems.',
      'Coordinate with product, design, and engineering partners to turn requirements into scalable solutions.',
      'Mentor developers and improve delivery consistency through reviews, standards, and technical planning.',
    ],
    impact: 'Improved team velocity while strengthening platform quality and maintainability.',
  },
  {
    title: 'Senior Software Engineer',
    company: 'TCS / HCL / Infosys',
    period: 'Earlier consulting roles',
    summary:
      'Delivered production-grade features for enterprise clients with strong emphasis on integration, testing, and user-focused outcomes.',
    responsibilities: [
      'Built and enhanced web applications used in business-critical workflows and customer-facing experiences.',
      'Worked closely with stakeholders to translate business needs into practical engineering solutions.',
      'Contributed to reusable components, quality improvements, and smoother release practices.',
    ],
    impact: 'Helped teams ship dependable solutions with better collaboration and fewer delivery issues.',
  },
];

const projects = [
  {
    name: 'Abbott',
    detail: 'Supported healthcare-oriented digital experiences with a focus on usability, stability, and long-term maintainability.',
  },
  {
    name: 'Walmart',
    detail: 'Contributed to retail and commerce-facing systems where performance and reliability were essential to business operations.',
  },
  {
    name: 'Tomra',
    detail: 'Worked on solutions connected to operational technology and product workflows with an emphasis on practical delivery.',
  },
];

export default function Experience() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-transparent px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="animate-fade-up rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                 Till today
              </h1>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
              <div className="font-semibold text-slate-900">Current role</div>
              <div>Tech Lead • AT&T</div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6">
                <h2 className="text-xl font-semibold text-slate-900">Professional overview</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Over the past 9+ years, I have worked across consulting and engineering roles, building full-stack applications, supporting enterprise delivery, and helping teams turn complex requirements into dependable software.
                </p>
                <div className="mt-5 space-y-3">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                      <span className="text-sm leading-6 text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {experiences.map((experience) => (
                  <div key={experience.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{experience.title}</h3>
                        <p className="text-sm font-medium text-indigo-600">{experience.company}</p>
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                        {experience.period}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{experience.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {experience.responsibilities.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-slate-700">
                          <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 rounded-2xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                      Impact: {experience.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="card-hover rounded-[1.5rem] border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">Companies worked with</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {companies.map((company) => (
                    <div key={company.name} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
                      <img src={company.image} alt={company.name} className="h-8 w-auto" />
                      <span className="text-sm font-medium text-slate-700">{company.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-hover rounded-[1.5rem] border border-slate-200 bg-slate-900 p-6 text-white">
                <h3 className="text-lg font-semibold">Client projects</h3>
                <div className="mt-4 grid gap-3">
                  {clients.map((client) => (
                    <div key={client.name} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-3 py-3">
                      <img src={client.image} alt={client.name} className="h-8 w-auto" />
                      <span className="text-sm font-medium text-slate-100">{client.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-3">
                  {projects.map((project) => (
                    <div key={project.name} className="rounded-2xl border border-white/10 bg-white/10 p-3">
                      <div className="text-sm font-semibold text-white">{project.name}</div>
                      <div className="mt-1 text-sm leading-6 text-slate-300">{project.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}