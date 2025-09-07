import { useState, useEffect } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Story", href: "#story" },
    { name: "Interests", href: "#interests" },
    { name: "Publications", href: "#publications" },
    { name: "Projects", href: "#projects" },
    { name: "Principles", href: "#principles" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "-50px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
          entry.target.classList.remove("opacity-0", "translate-y-8")
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      section.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700")
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              {/* AI Engineering Icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-lg border-2 border-purple-400/30 animate-pulse"></div>
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Name</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="relative px-4 py-2 text-slate-300 hover:text-white transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10 text-sm font-medium">{item.name}</span>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Bottom border animation */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 12h16" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-2 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1 left-2/3 w-1 h-1 bg-purple-300 rounded-full animate-ping"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        ></div>
      </div>
    </nav>
  )
}

export default Navbar