const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt: "Learn how to build modern web applications with the latest features of Next.js.",
    date: "2024-01-15",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the web development landscape.",
    date: "2024-01-10",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Best Practices for React Development",
    excerpt: "A comprehensive guide to writing clean, maintainable React code.",
    date: "2024-01-05",
    readTime: "10 min read"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?random=5)' }}>
      <div className="min-h-screen bg-white/20 dark:bg-black/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Blog</h1>
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}