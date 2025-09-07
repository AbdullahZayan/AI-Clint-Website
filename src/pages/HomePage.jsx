import { useEffect, useState } from "react"
import NavBar from '../components/Navbar'
import About from '../components/About'
import Story from '../components/Story'
import Interest from '../components/Interest'
import Publications from '../components/Publications'
import Projects from '../components/Projects'
import Principles from '../components/Principles'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`min-h-screen bg-gray-900 transition-all duration-1000 ease-out ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div
        className={`transition-all duration-800 delay-200 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <NavBar />
      </div>

      <section
        id="about"
        className={`transition-all duration-800 delay-300 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <About />
      </section>

      <section
        id="story"
        className={`transition-all duration-800 delay-400 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Story />
      </section>

       <section
        id="interests"
        className={`transition-all duration-800 delay-400 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Interest />
      </section>

      <section
        id="publications"
        className={`transition-all duration-800 delay-500 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Publications />
      </section>

      <section
        id="projects"
        className={`transition-all duration-800 delay-500 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Projects />
      </section>

      <section
        id="principles"
        className={`transition-all duration-800 delay-800 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Principles />
      </section>

      <section
        id="blog"
        className={`transition-all duration-800 delay-850 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Blog />
      </section>

      <section
        id="contact"
        className={`transition-all duration-800 delay-900 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Contact />
      </section>
    </div>
  )
}

export default HomePage