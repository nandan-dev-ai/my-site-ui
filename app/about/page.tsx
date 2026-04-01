export default function About() {
  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?random=2)' }}>
      <div className="min-h-screen bg-white/20 dark:bg-black/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Academic Background</h1>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Master's Degree in Computer Science</h3>
                  <p className="text-gray-600 dark:text-gray-400">University Name, Year</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">Specialized in software engineering and data structures. Graduated with honors.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Bachelor's Degree in Information Technology</h3>
                  <p className="text-gray-600 dark:text-gray-400">University Name, Year</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">Focused on web development and database management.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Certifications</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>AWS Certified Solutions Architect</li>
                <li>Google Cloud Professional Developer</li>
                <li>Certified Scrum Master</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Research Interests</h2>
              <p className="text-gray-700 dark:text-gray-300">
                My research focuses on machine learning applications in software engineering, particularly in automated code review and bug detection systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}