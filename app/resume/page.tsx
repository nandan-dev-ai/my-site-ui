"use client";

import { ChangeEvent, useState } from 'react';

type ResumeData = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  skills: string;
  experience: ResumeEntry[];
  academic: ResumeEntry[];
  awards: ResumeEntry[];
  projects: ProjectEntry[];
};

type ResumeEntry = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

type ProjectEntry = {
  title: string;
  duration: string;
  skill: string;
  responsibility: string;
};

const initialResume: ResumeData = {
  name: 'Nandan Barman',
  role: 'Tech Lead & Full-Stack Engineer',
  location: 'Bengaluru, India',
  email: 'hello@nandanbarman.dev',
  phone: '+91 98765 43210',
  website: 'nandanbarman.dev',
  summary:
    'Technology leader with 9+ years of experience building dependable digital products, guiding engineering teams, and translating complex requirements into clear, scalable solutions.',
  skills: 'TypeScript, React, Next.js, Node.js, Azure, System Design, Mentoring',
  experience: [
    { title: 'Tech Lead', organization: 'AT&T', period: '2022 - Present', description: 'Lead cross-functional delivery for reliable digital platforms. Own architecture decisions, mentor engineers, and partner with product and design to ship high-quality experiences.' },
    { title: 'Senior Software Engineer', organization: 'TCS / HCL / Infosys', period: '2017 - 2022', description: 'Built production-grade web applications for enterprise clients across retail, healthcare, and technology. Improved reusable components, testing practices, and release confidence.' },
  ],
  academic: [
    { title: 'Bachelor of Technology in Computer Science', organization: 'University', period: '2013 - 2017', description: '' },
  ],
  awards: [],
  projects: [],
};

const sections = [
  { key: 'name', label: 'Full name', type: 'input' },
  { key: 'role', label: 'Professional title', type: 'input' },
  { key: 'location', label: 'Location', type: 'input' },
  { key: 'email', label: 'Email', type: 'input' },
  { key: 'phone', label: 'Phone', type: 'input' },
  { key: 'website', label: 'Website', type: 'input' },
  { key: 'summary', label: 'Professional summary', type: 'textarea' },
  { key: 'skills', label: 'Skills', type: 'input' },
] as const;

const entryDefaults: Record<'experience' | 'academic' | 'awards', ResumeEntry> = {
  experience: { title: '', organization: '', period: '', description: '' },
  academic: { title: '', organization: '', period: '', description: '' },
  awards: { title: '', organization: '', period: '', description: '' },
};

const projectDefault: ProjectEntry = { title: '', duration: '', skill: '', responsibility: '' };

export default function ResumeBuilder() {
  const [resume, setResume] = useState(initialResume);

  const updateResume = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setResume((current) => ({ ...current, [name]: value }));
  };

  const skills = resume.skills.split(',').map((skill) => skill.trim()).filter(Boolean);

  const updateEntry = (section: 'experience' | 'academic' | 'awards', index: number, field: keyof ResumeEntry, value: string) => {
    setResume((current) => ({
      ...current,
      [section]: current[section].map((entry, entryIndex) => entryIndex === index ? { ...entry, [field]: value } : entry),
    }));
  };

  const addEntry = (section: 'experience' | 'academic' | 'awards') => {
    setResume((current) => ({ ...current, [section]: [...current[section], { ...entryDefaults[section] }] }));
  };

  const removeEntry = (section: 'experience' | 'academic' | 'awards', index: number) => {
    setResume((current) => ({ ...current, [section]: current[section].filter((_, entryIndex) => entryIndex !== index) }));
  };

  const updateProject = (index: number, field: keyof ProjectEntry, value: string) => {
    setResume((current) => ({
      ...current,
      projects: current.projects.map((project, projectIndex) => projectIndex === index ? { ...project, [field]: value } : project),
    }));
  };

  const addProject = () => {
    setResume((current) => ({ ...current, projects: [...current.projects, { ...projectDefault }] }));
  };

  const removeProject = (index: number) => {
    setResume((current) => ({ ...current, projects: current.projects.filter((_, projectIndex) => projectIndex !== index) }));
  };

  const entrySection = (section: 'experience' | 'academic' | 'awards', label: string, descriptionLabel: string) => (
    <div className="border-t border-slate-200 pt-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-slate-900">{label}</h3>
        <button type="button" onClick={() => addEntry(section)} className="rounded-full border border-indigo-200 px-3 py-1.5 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-50">+ Add {label.toLowerCase()}</button>
      </div>
      <div className="mt-4 space-y-4">
        {resume[section].map((entry, index) => (
          <div key={`${section}-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Entry {index + 1}</span>
              <button type="button" onClick={() => removeEntry(section, index)} className="text-xs font-medium text-rose-600 transition hover:text-rose-800">Remove</button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {([
                ['title', section === 'awards' ? 'Award title' : section === 'academic' ? 'Degree / qualification' : 'Job title'],
                ['organization', section === 'awards' ? 'Issuing organization' : section === 'academic' ? 'School / institution' : 'Company'],
                ['period', 'Period'],
              ] as const).map(([field, fieldLabel]) => (
                <label key={field} className="block">
                  <span className="mb-1.5 block text-xs font-medium text-slate-600">{fieldLabel}</span>
                  <input value={entry[field]} onChange={(event) => updateEntry(section, index, field, event.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" />
                </label>
              ))}
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-medium text-slate-600">{descriptionLabel}</span>
                <textarea value={entry.description} onChange={(event) => updateEntry(section, index, 'description', event.target.value)} rows={3} className="w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-slate-800 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" />
              </label>
            </div>
          </div>
        ))}
        {resume[section].length === 0 && <p className="rounded-xl border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-500">No {label.toLowerCase()} added yet.</p>}
      </div>
    </div>
  );

  const projectSection = (
    <div className="border-t border-slate-200 pt-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-slate-900">Projects</h3>
        <button type="button" onClick={addProject} className="rounded-full border border-indigo-200 px-3 py-1.5 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-50">+ Add project</button>
      </div>
      <div className="mt-4 space-y-4">
        {resume.projects.map((project, index) => (
          <div key={`project-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Project {index + 1}</span>
              <button type="button" onClick={() => removeProject(index)} className="text-xs font-medium text-rose-600 transition hover:text-rose-800">Remove</button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {([
                ['title', 'Title'],
                ['duration', 'Duration'],
                ['skill', 'Skill'],
              ] as const).map(([field, fieldLabel]) => (
                <label key={field} className="block">
                  <span className="mb-1.5 block text-xs font-medium text-slate-600">{fieldLabel}</span>
                  <input value={project[field]} onChange={(event) => updateProject(index, field, event.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" />
                </label>
              ))}
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-medium text-slate-600">Responsibility</span>
                <textarea value={project.responsibility} onChange={(event) => updateProject(index, 'responsibility', event.target.value)} rows={3} className="w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-slate-800 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" />
              </label>
            </div>
          </div>
        ))}
        {resume.projects.length === 0 && <p className="rounded-xl border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-500">No projects added yet.</p>}
      </div>
    </div>
  );

  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 print:min-h-0 print:bg-white print:p-0">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between print:hidden">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600">Career studio</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Build a resume that sounds like you.</h1>
            <p className="mt-3 text-base leading-7 text-slate-600">Shape your story on the left. A clean, recruiter-ready document takes form on the right.</p>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            <span aria-hidden="true">↗</span>
            Print / save PDF
          </button>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(300px,0.78fr)_minmax(0,1.22fr)]">
          <section className="animate-fade-up rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.1)] backdrop-blur-xl sm:p-7 print:hidden">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">01 / Your details</p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900">Tell your story</h2>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Live preview</span>
            </div>

            <div className="mt-6 space-y-5">
              {sections.map((section) => (
                <label key={section.key} className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">{section.label}</span>
                  {section.type === 'textarea' ? (
                    <textarea
                      name={section.key}
                      value={resume[section.key]}
                      onChange={updateResume}
                      rows={4}
                      className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm leading-6 text-slate-800 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                    />
                  ) : (
                    <input
                      name={section.key}
                      value={resume[section.key]}
                      onChange={updateResume}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                    />
                  )}
                </label>
              ))}
              <div className="border-t border-slate-200 pt-5">
                <h3 className="text-sm font-semibold text-slate-900">Skills</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((skill) => <span key={skill} className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-xs font-medium text-indigo-700">{skill}</span>)}
                </div>
              </div>
              {entrySection('experience', 'Experience', 'Responsibilities and impact')}
              {entrySection('academic', 'Academic history', 'Relevant coursework, focus, or achievements')}
              {entrySection('awards', 'Awards', 'Recognition details')}
              {projectSection}
            </div>
          </section>

          <section className="animate-fade-up print:block" style={{ animationDelay: '0.12s' }}>
            <div className="mb-3 flex items-center justify-between px-1 print:hidden">
              <p className="text-sm font-semibold text-slate-700">Document preview</p>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">A4 format</p>
            </div>
            <article className="min-h-[900px] bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.16)] sm:p-12 print:min-h-0 print:p-0 print:shadow-none">
              <header className="border-b-2 border-slate-900 pb-6">
                <h2 className="text-4xl font-bold tracking-tight text-slate-950">{resume.name || 'Your Name'}</h2>
                <p className="mt-2 text-lg font-medium text-indigo-700">{resume.role || 'Professional title'}</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                  {[resume.location, resume.email, resume.phone, resume.website].filter(Boolean).map((item) => <span key={item}>{item}</span>)}
                </div>
              </header>

              <div className="space-y-7 pt-6 text-slate-800">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">Profile</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{resume.summary || 'Add a concise overview of your experience and strengths.'}</p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">Core skills</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {skills.map((skill) => <span key={skill} className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700">{skill}</span>)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">Experience</h3>
                  <div className="mt-3 space-y-5">
                    {resume.experience.map((entry, index) => {
                      return (
                        <div key={`${entry.title}-${index}`}>
                          <div className="flex flex-wrap justify-between gap-2"><h4 className="text-sm font-bold text-slate-900">{entry.title || 'Job title'}</h4><span className="text-xs font-medium text-slate-500">{entry.period}</span></div>
                          <p className="mt-1 text-sm font-medium text-indigo-700">{entry.organization}</p>
                          <p className="mt-1 whitespace-pre-line text-sm leading-6 text-slate-600">{entry.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">Academic history</h3>
                  <div className="mt-3 space-y-3">{resume.academic.map((entry, index) => <div key={`${entry.title}-${index}`}><div className="flex flex-wrap justify-between gap-2"><p className="text-sm font-bold text-slate-900">{entry.title || 'Degree or qualification'}</p><span className="text-xs text-slate-500">{entry.period}</span></div><p className="text-sm text-slate-600">{entry.organization}</p>{entry.description && <p className="text-sm leading-6 text-slate-600">{entry.description}</p>}</div>)}</div>
                </div>

                {resume.awards.length > 0 && <div><h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">Awards</h3><div className="mt-3 space-y-3">{resume.awards.map((entry, index) => <div key={`${entry.title}-${index}`}><div className="flex flex-wrap justify-between gap-2"><p className="text-sm font-bold text-slate-900">{entry.title || 'Award title'}</p><span className="text-xs text-slate-500">{entry.period}</span></div><p className="text-sm text-slate-600">{entry.organization}</p>{entry.description && <p className="text-sm leading-6 text-slate-600">{entry.description}</p>}</div>)}</div></div>}

                {resume.projects.length > 0 && <div><h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">Projects</h3><div className="mt-3 space-y-4">{resume.projects.map((project, index) => <div key={`${project.title}-${index}`}><div className="flex flex-wrap justify-between gap-2"><p className="text-sm font-bold text-slate-900">{project.title || 'Project title'}</p><span className="text-xs text-slate-500">{project.duration}</span></div><p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-700">{project.skill}</p><p className="mt-1 text-sm leading-6 text-slate-600">{project.responsibility}</p></div>)}</div></div>}
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}