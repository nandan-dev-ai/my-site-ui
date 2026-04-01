export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black font-sans" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?random=1)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="bg-white/20 dark:bg-black/40 p-8 rounded-lg shadow-lg max-w-4xl mx-auto px-4 py-16 text-center backdrop-blur-sm border border-white/20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Nandan Barman
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Explore my academic background, professional experience, technical expertise, and latest thoughts through my blog and articles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-md backdrop-blur-sm border border-white/30">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Academic</h2>
            <p className="text-gray-600 dark:text-gray-400">Learn about my educational background and achievements.</p>
            <a href="/about" className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">Read more</a>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-md backdrop-blur-sm border border-white/30">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Experience</h2>
            <p className="text-gray-600 dark:text-gray-400">Discover my professional journey and career highlights.</p>
            <a href="/experience" className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">Read more</a>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-md backdrop-blur-sm border border-white/30">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Technical Expertise</h2>
            <p className="text-gray-600 dark:text-gray-400">Explore the technologies and skills I specialize in.</p>
            <a href="/skills" className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">Read more</a>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-md backdrop-blur-sm border border-white/30">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Blog</h2>
            <p className="text-gray-600 dark:text-gray-400">Read my latest blog posts and insights.</p>
            <a href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">Read more</a>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-md backdrop-blur-sm border border-white/30">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Articles</h2>
            <p className="text-gray-600 dark:text-gray-400">Browse through my published articles and writings.</p>
            <a href="/articles" className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
}
