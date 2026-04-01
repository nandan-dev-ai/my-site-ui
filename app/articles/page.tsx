const articles = [
  {
    id: 1,
    title: "Machine Learning in Software Engineering",
    publication: "Tech Journal",
    date: "2023-12-01",
    link: "#"
  },
  {
    id: 2,
    title: "Building Scalable Microservices",
    publication: "Dev Magazine",
    date: "2023-11-15",
    link: "#"
  },
  {
    id: 3,
    title: "The Evolution of JavaScript Frameworks",
    publication: "Web Development Weekly",
    date: "2023-10-20",
    link: "#"
  }
];

export default function Articles() {
  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?random=6)' }}>
      <div className="min-h-screen bg-white/20 dark:bg-black/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Articles</h1>
          <div className="space-y-6">
            {articles.map((article) => (
              <div key={article.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{article.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Published in {article.publication}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{article.date}</p>
                <a href={article.link} className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">Read Article</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}