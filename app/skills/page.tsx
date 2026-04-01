export default function Skills() {
  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?random=4)' }}>
      <div className="min-h-screen bg-white/20 dark:bg-black/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technical Expertise</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-md backdrop-blur-sm border border-white/30">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Programming Languages & Frameworks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <img src="/images/c.svg" alt="C" className="h-8 w-8" />
                  <span className="text-gray-700 dark:text-gray-300">C</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/images/java.svg" alt="Java" className="h-8 w-8" />
                  <span className="text-gray-700 dark:text-gray-300">Java</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/images/javascript.svg" alt="JavaScript" className="h-8 w-8" />
                  <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/images/python.svg" alt="Python" className="h-8 w-8" />
                  <span className="text-gray-700 dark:text-gray-300">Python</span>
                </div>
              </div>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-md backdrop-blur-sm border border-white/30">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frameworks & Libraries</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <img src="/images/nodejs.svg" alt="Node.js" className="h-8 w-8" />
                  <span className="text-gray-700 dark:text-gray-300">Express, NestJS</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/images/react.svg" alt="React.js" className="h-8 w-8" />
                  <span className="text-gray-700 dark:text-gray-300">Next.js, Redux</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/images/springboot.svg" alt="Spring Boot" className="h-8 w-8" />
                  <span className="text-gray-700 dark:text-gray-300">Spring Boot</span>
                </div>
              </div>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-md backdrop-blur-sm border border-white/30">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Databases</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <img src="/images/mssql.svg" alt="MSSQL" className="h-8 w-8" />
                  <span className="text-gray-700 dark:text-gray-300">MSSQL</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/images/postgres.svg" alt="PostgreSQL" className="h-8 w-8" />
                  <span className="text-gray-700 dark:text-gray-300">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/images/mongodb.svg" alt="MongoDB" className="h-8 w-8" />
                  <span className="text-gray-700 dark:text-gray-300">MongoDB</span>
                </div>
              </div>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-md backdrop-blur-sm border border-white/30">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cloud Platforms</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <img src="/images/aws.svg" alt="AWS" className="h-8 w-8" />
                  <span className="text-gray-700 dark:text-gray-300">AWS</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/images/azure.svg" alt="Azure" className="h-8 w-8" />
                  <span className="text-gray-700 dark:text-gray-300">Azure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}