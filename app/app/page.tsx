export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-gradient-to-br from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-500 rounded-lg flex items-center justify-center">
                  <span className="text-white dark:text-gray-900 font-bold text-sm">STI</span>
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Simple Sample Page</h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Our Sample Page
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A clean, modern design with a sophisticated grey theme. This page showcases 
            sample information with elegant typography and thoughtful spacing.
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fast Performance</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Optimized for speed and efficiency, ensuring a smooth user experience across all devices.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secure & Reliable</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built with security best practices and reliable architecture to protect your data.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">User Friendly</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Intuitive design and clear navigation make it easy for users to find what they need.
            </p>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">1000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Features</div>
            </div>
          </div>
        </section>

        {/* Sample Content Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Our Service</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We provide high-quality solutions designed to meet the needs of modern businesses 
                and individuals. Our platform combines cutting-edge technology with user-centric design.
              </p>
              <p>
                With years of experience in the industry, we've developed a deep understanding of 
                what makes digital experiences truly exceptional.
              </p>
              <p>
                Our commitment to excellence drives us to continuously improve and innovate, ensuring 
                that our users always have access to the best tools and features available.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Stats</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">User Satisfaction</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">95%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-500 h-2 rounded-full w-11/12"></div>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <span className="text-gray-600 dark:text-gray-300">Performance Score</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">92%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-500 h-2 rounded-full w-11/12"></div>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <span className="text-gray-600 dark:text-gray-300">Reliability</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">98%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-500 h-2 rounded-full w-11/12"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              © 2024 Simple Sample Page. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
