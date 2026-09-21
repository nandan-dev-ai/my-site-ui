"use client";

"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

const SearchContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  // Mock search results - in a real app, this would come from an API
  const mockResults = [
    { title: 'Home', url: '/', snippet: 'Welcome to my personal website showcasing my professional journey.' },
    { title: 'About Me', url: '/about', snippet: 'Learn more about my background, education, and personal interests.' },
    { title: 'Professional Experience', url: '/experience', snippet: 'Details about my 9+ years in full-stack development, companies worked for, and client projects.' },
    { title: 'Technical Skills', url: '/skills', snippet: 'My expertise in programming languages, frameworks, databases, and cloud platforms.' },
    { title: 'Blog Posts', url: '/blog', snippet: 'Read my latest articles on technology, development, and industry insights.' },
    { title: 'Infosys', url: '/experience', snippet: 'One of the companies I worked for, specializing in IT services.' },
    { title: 'HCL Technologies', url: '/experience', snippet: 'Another company in my career journey.' },
    { title: 'TCS (Tata Consultancy Services)', url: '/experience', snippet: 'Global IT services company where I gained experience.' },
    { title: 'AT&T', url: '/experience', snippet: 'My current position as Tech Lead.' },
    { title: 'Abbott Healthcare', url: '/experience', snippet: 'Client project focused on healthcare solutions.' },
    { title: 'Walmart E-commerce', url: '/experience', snippet: 'Retail and e-commerce systems development.' },
    { title: 'Tomra Recycling', url: '/experience', snippet: 'Sorting and recycling technology project.' },
    { title: 'JavaScript', url: '/skills', snippet: 'Programming language I use for web development.' },
    { title: 'React.js', url: '/skills', snippet: 'Frontend framework for building user interfaces.' },
    { title: 'Node.js', url: '/skills', snippet: 'Runtime for server-side JavaScript.' },
    { title: 'Spring Boot', url: '/skills', snippet: 'Java framework for building microservices.' },
    { title: 'AWS', url: '/skills', snippet: 'Cloud platform for scalable applications.' },
    { title: 'Azure', url: '/skills', snippet: 'Microsoft cloud services.' },
  ].filter(result =>
    result.title.toLowerCase().includes(query.toLowerCase()) ||
    result.snippet.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Search Results for "{query}"
        </h1>

        {mockResults.length > 0 ? (
          <div className="space-y-4">
            {mockResults.map((result, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <Link href={result.url} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                    {result.title}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{result.snippet}</p>
                <Link href={result.url} className="text-indigo-600 dark:text-indigo-400 text-sm mt-2 inline-block">
                  {result.url}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No results found for "{query}".
            </p>
            <p className="text-gray-500 dark:text-gray-500 mt-2">
              Try searching for "experience", "skills", "about", or "blog".
            </p>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 flex items-center justify-center"><p>Loading...</p></div>}>
      <SearchContent />
    </Suspense>
  );
};

export default SearchPage;