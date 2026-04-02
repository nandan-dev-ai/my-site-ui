export default function Experience() {
  return (
    <div className="relative min-h-screen bg-fixed bg-cover bg-center z-0" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?random=3)' }}>
      <div className="absolute inset-0 bg-black/25 dark:bg-black/40 -z-10" aria-hidden="true" />
      <div className="relative min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Professional Experience</h1>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tech Lead</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2">AT&T, Current Position</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">9+ years of experience in full-stack development, leading teams and delivering complex projects.</p>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Companies Worked For:</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center bg-gray-100 dark:bg-gray-900 p-2 rounded-lg shadow-sm">
                  <img src="/images/infosys.png" alt="Infosys" className="h-10 w-auto mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Infosys</span>
                </div>
                <div className="flex items-center bg-gray-100 dark:bg-gray-900 p-2 rounded-lg shadow-sm">
                  <img src="/images/hcl.png" alt="HCL" className="h-10 w-auto mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">HCL</span>
                </div>
                <div className="flex items-center bg-gray-100 dark:bg-gray-900 p-2 rounded-lg shadow-sm">
                  <img src="/images/tcs.png" alt="TCS" className="h-10 w-auto mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">TCS</span>
                </div>
                <div className="flex items-center bg-gray-100 dark:bg-gray-900 p-2 rounded-lg shadow-sm">
                  <img src="/images/att.png" alt="AT&T" className="h-10 w-auto mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">AT&T</span>
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Client Projects:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center bg-gray-100 dark:bg-gray-900 p-2 rounded-lg shadow-sm">
                  <img src="/images/abbott.png" alt="Abbott" className="h-10 w-auto mr-2" />
                  {/* <span className="text-gray-700 dark:text-gray-300">Abbott - Healthcare solutions</span> */}
                </div>
                <div className="flex items-center bg-gray-100 dark:bg-gray-900 p-2 rounded-lg shadow-sm">
                  <img src="/images/walmart.png" alt="Walmart" className="h-10 w-auto mr-2" />
                  {/* <span className="text-gray-700 dark:text-gray-300">Walmart - E-commerce and retail systems</span> */}
                </div>
                <div className="flex items-center bg-gray-100 dark:bg-gray-900 p-2 rounded-lg shadow-sm">
                  <img src="/images/tomra.png" alt="Tomra" className="h-10 w-auto mr-2" />
                  {/* <span className="text-gray-700 dark:text-gray-300">Tomra - Recycling and sorting technology</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}