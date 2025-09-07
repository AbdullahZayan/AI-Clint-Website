import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      {/* Hero/About Section */}
      <section id="about" className="relative min-h-screen flex items-start justify-center overflow-hidden pt-12">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-purple-400 text-3xl font-medium tracking-wide uppercase">Analytics & AI Consultant</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Person{" "}
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    Name
                  </span>
                </h1>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed">
                My mission is to solve real business problems by putting customers first and understanding what they truly need. I believe in taking action quickly while maintaining the highest quality, turning complex data into simple, clear insights that stakeholders can actually use. I dive deep into every challenge, staying curious about new approaches and technologies that can make a difference. I take full ownership of projects from start to finish, always looking for ways to do more with available resources and deliver exceptional results.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Download resume
                </button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-purple-500/20 to-red-500/20 flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                  <img
                    src="../public/Demon.jpg"
                    alt="Abdelrahman Zaian"
                    className="w-64 h-64 rounded-full object-cover border-4 border-purple-500/50"
                  />
                </div>
                {/* Floating particles */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500 rounded-full animate-bounce delay-700"></div>
              </div>
            </div>
          </div>

          {/* Process Cards */}
          <div className="mt-4 grid md:grid-cols-3 gap-8">
            {/* Collect Card */}
            <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Collect</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                I'm trained and highly experienced in questionnaire design, with a background in social psychology, and
                have worked with SNAP, Qualtrics, Confirmit and Airtable to collect and process data.
              </p>
            </div>

            {/* Process Card */}
            <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Process</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                I am an Alteryx Designer Advanced Certified analyst. I offer support on existing workflows, creation of
                new processes and training at all levels covering data transformation, unification, spatial and
                predictive analysis, and more.
              </p>
            </div>

            {/* Visualise Card */}
            <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Visualise</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                I am a Tableau Desktop Certified Professional who has worked with a diverse range of subjects. I have
                experience creating interactive tools and static infographics in Tableau that can be consumed online or
                in print.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About