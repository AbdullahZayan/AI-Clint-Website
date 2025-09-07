import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const LoadingPage = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()

  const greetings = [
    { text: "Hello", language: "English", code: "EN" },
    { text: "مرحبا", language: "Arabic", code: "AR" },
    { text: "Hallo", language: "German", code: "DE" },
    { text: "Halo", language: "Malay", code: "MY" },
    { text: "Bonjour", language: "French", code: "FR" },
    { text: "こんにちは", language: "Japanese", code: "JP" },
  ]

  useEffect(() => {
    // Cycle through greetings every 800ms
    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 800)

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 100)

    // Auto redirect to home after 5 seconds
    const redirectTimer = setTimeout(() => {
      navigate("/home")
    }, 5000)

    return () => {
      clearInterval(greetingInterval)
      clearInterval(progressInterval)
      clearTimeout(redirectTimer)
    }
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Circuit Pattern */}
      <div className="absolute top-20 left-20 w-64 h-64 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-purple-400"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-blue-400"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-purple-400"
          />
          <line x1="50" y1="5" x2="50" y2="25" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" />
          <line x1="95" y1="50" x2="75" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" />
          <line x1="50" y1="95" x2="50" y2="75" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" />
          <line x1="5" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="text-center space-y-12 z-10 px-4">
        {/* AI Engineering Badge */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/10 border border-purple-400/30 backdrop-blur-sm">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse mr-4"></div>
            <span className="text-sm font-semibold text-purple-300 tracking-wider">AI ENGINEERING</span>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse ml-4"></div>
          </div>
        </div>

        {/* Greeting Display */}
        <div className="space-y-6 animate-fade-in-up animation-delay-200">
          <div className="relative">
            <h1 className="text-7xl md:text-9xl font-bold text-white transition-all duration-500 ease-in-out transform hover:scale-105">
              {greetings[currentGreeting].text}
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 animate-pulse"></div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-lg text-purple-300 font-medium">{greetings[currentGreeting].language}</span>
            <div className="w-px h-6 bg-purple-400/50"></div>
            <span className="text-sm text-blue-300 font-mono">{greetings[currentGreeting].code}</span>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex flex-col items-center space-y-8 animate-fade-in-up animation-delay-400">
          {/* Advanced Loader */}
          <div className="relative">
            <div className="w-20 h-20 border-2 border-slate-700 rounded-full"></div>
            <div className="absolute top-0 left-0 w-20 h-20 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute top-2 left-2 w-16 h-16 border-2 border-blue-400 border-r-transparent rounded-full animate-spin-reverse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Loading Dots */}
          <div className="flex space-x-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-sm text-purple-300 font-mono">Initializing AI Systems...</p>
            <p className="text-xs text-slate-400">{progress}% Complete</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default LoadingPage
