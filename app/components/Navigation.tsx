"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl animate-fade-up">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900 transition hover:text-indigo-600">
            Nandan Barman (Dev)
          </Link>
          <div className="hidden items-center gap-1 sm:flex">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/experience', label: 'Experience' },
              { href: '/skills', label: 'Skills' },
              { href: '/blog', label: 'Blog' },
              { href: '/messages', label: 'Messages' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <form onSubmit={handleSearch} className="hidden items-center rounded-full border border-slate-200 bg-white/80 px-2 py-1 shadow-sm sm:flex">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-28 bg-transparent px-2 py-1 text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="rounded-full bg-indigo-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              Go
            </button>
          </form>
          <Link
            href="/admin"
            className="rounded-full border border-slate-200 bg-slate-900 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;