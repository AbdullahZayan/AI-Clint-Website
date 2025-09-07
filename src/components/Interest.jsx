const Interest = () => {
  const interests = [
    {
      title: "Cloud Computing",
      description: "Designing scalable cloud architectures and distributed systems for enterprise applications.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.4 4.4 0 003 15z"
          />
        </svg>
      ),
    },
    {
      title: "Natural Language Processing",
      description: "Building intelligent systems that understand and process human language effectively.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      title: "Machine Learning",
      description: "Developing predictive models and AI algorithms to solve complex business problems.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Parallel Computing",
      description: "Optimizing computational performance through parallel processing and GPU acceleration.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14-7H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM9 7h6m-6 4h6m-7 4h8"
          />
        </svg>
      ),
    },
    {
      title: "Model Deployment",
      description: "Implementing MLOps pipelines and deploying AI models to production environments.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      ),
    },
    {
      title: "Data Analytics",
      description: "Extracting actionable insights from complex datasets using advanced analytical techniques.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Coming Soon",
      description: "Exploring new frontiers in artificial intelligence and emerging technologies.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      title: "Coming Soon",
      description: "Stay tuned for more exciting areas of research and development.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="interests" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-gray-600"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp">
            Areas of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">Interest</span>
          </h2>
          <p className="text-xl text-gray-300 animate-fadeInUp delay-200">
            Take a look at some of the things I love working on
          </p>
        </div>

        {/* Interest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                {/* Icon Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                  {interest.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {interest.description}
                </p>
              </div>

              {/* Hover Border Animation */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-red-500 group-hover:to-purple-600 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interest
