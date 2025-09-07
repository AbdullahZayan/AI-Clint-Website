import { useState, useRef } from "react"

const Principles = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState(null)
  const closeTimeout = useRef(null)

  const principles = [
    {
      id: 1,
      name: "Data-Driven Decisions",
      description: "Every decision should be backed by solid data analysis and evidence-based insights.",
      longDescription:
        "In today's data-rich environment, making decisions based on intuition alone is no longer sufficient. I believe in leveraging comprehensive data analysis, statistical modeling, and evidence-based insights to guide every strategic and tactical decision. This principle involves collecting relevant metrics, analyzing trends, conducting A/B tests, and using predictive analytics to minimize risks and maximize outcomes. By establishing clear KPIs and continuously monitoring performance indicators, we can make informed decisions that drive measurable results and sustainable growth.",
      keyPoints: [
        "Establish clear metrics and KPIs for all initiatives",
        "Use statistical analysis and predictive modeling",
        "Implement A/B testing for feature validation",
        "Create data visualization dashboards for insights",
        "Make decisions based on evidence, not assumptions",
      ],
      image: "/data-analytics-charts-and-graphs.jpg",
    },
    {
      id: 2,
      name: "Continuous Learning",
      description: "Stay updated with the latest technologies and industry best practices.",
      longDescription:
        "The technology landscape evolves at an unprecedented pace, making continuous learning not just beneficial but essential for professional survival and growth. I dedicate time regularly to exploring new frameworks, attending conferences, reading research papers, and experimenting with emerging technologies. This commitment to lifelong learning ensures that I can adapt to changing requirements, leverage the latest tools and methodologies, and bring innovative solutions to complex problems. It also involves learning from failures, seeking feedback, and constantly refining my skills and knowledge base.",
      keyPoints: [
        "Dedicate time weekly for learning new technologies",
        "Attend industry conferences and workshops",
        "Read research papers and technical documentation",
        "Experiment with new tools and frameworks",
        "Learn from failures and seek continuous feedback",
      ],
      image: "/books-and-learning-materials.jpg",
    },
    {
      id: 3,
      name: "Code Quality First",
      description: "Write clean, maintainable code that follows industry standards.",
      longDescription:
        "High-quality code is the foundation of any successful software project. This principle emphasizes writing code that is not only functional but also readable, maintainable, and scalable. It involves following established coding standards, implementing proper error handling, writing comprehensive tests, and creating clear documentation. Clean code reduces technical debt, facilitates collaboration among team members, and makes future modifications and debugging significantly easier. I believe that investing time in code quality upfront saves countless hours in maintenance and reduces the likelihood of critical bugs in production.",
      keyPoints: [
        "Follow established coding standards and conventions",
        "Write comprehensive unit and integration tests",
        "Implement proper error handling and logging",
        "Create clear and detailed documentation",
        "Conduct regular code reviews and refactoring",
      ],
      image: "/clean-code-on-computer-screen.jpg",
    },
    {
      id: 4,
      name: "User-Centric Design",
      description: "Always prioritize user experience and solve real problems for end users.",
      longDescription:
        "Technology should serve people, not the other way around. This principle puts the end user at the center of every design and development decision. It involves conducting user research, creating personas, mapping user journeys, and continuously gathering feedback to ensure that solutions truly address user needs and pain points. User-centric design goes beyond aesthetics to encompass usability, accessibility, and overall user satisfaction. By empathizing with users and understanding their contexts, constraints, and goals, we can create products that are not only functional but also delightful to use.",
      keyPoints: [
        "Conduct thorough user research and analysis",
        "Create detailed user personas and journey maps",
        "Implement accessibility standards and guidelines",
        "Gather continuous user feedback and iterate",
        "Design for usability and user satisfaction",
      ],
      image: "/user-interface-design-mockups.jpg",
    },
    {
      id: 5,
      name: "Scalable Architecture",
      description: "Build systems that can grow and adapt to changing requirements.",
      longDescription:
        "Scalable architecture is crucial for long-term success in any software project. This principle involves designing systems that can handle increasing loads, accommodate new features, and adapt to changing business requirements without requiring complete rewrites. It encompasses both horizontal and vertical scaling strategies, microservices architecture, load balancing, caching mechanisms, and database optimization. Scalable architecture also considers maintainability, allowing teams to work on different components independently while ensuring system cohesion and reliability as the application grows.",
      keyPoints: [
        "Design for both horizontal and vertical scaling",
        "Implement microservices architecture when appropriate",
        "Use load balancing and caching strategies",
        "Optimize database design and queries",
        "Plan for future growth and changing requirements",
      ],
      image: "/cloud-architecture-diagram.png",
    },
    {
      id: 6,
      name: "Collaborative Teamwork",
      description: "Foster open communication and knowledge sharing for collective success.",
      longDescription:
        "Great software is rarely built by individuals working in isolation. This principle emphasizes the importance of effective collaboration, open communication, and knowledge sharing within teams. It involves creating an environment where team members feel comfortable sharing ideas, asking questions, and providing constructive feedback. Collaborative teamwork includes pair programming, code reviews, regular team meetings, and cross-functional collaboration. By leveraging diverse perspectives and collective expertise, teams can solve complex problems more effectively and create better solutions than any individual could achieve alone.",
      keyPoints: [
        "Encourage open communication and idea sharing",
        "Implement pair programming and code reviews",
        "Facilitate cross-functional team collaboration",
        "Share knowledge through documentation and mentoring",
        "Create inclusive environments for diverse perspectives",
      ],
      image: "/team-collaboration.png",
    },
    {
      id: 7,
      name: "Security by Design",
      description: "Implement security measures from the ground up, not as an afterthought.",
      longDescription:
        "Security cannot be an afterthought in today's digital landscape. This principle advocates for integrating security considerations into every phase of the development lifecycle, from initial design to deployment and maintenance. It involves threat modeling, secure coding practices, regular security audits, and staying updated with the latest security vulnerabilities and patches. Security by design includes implementing proper authentication and authorization mechanisms, data encryption, input validation, and secure communication protocols. By building security into the foundation of our systems, we can protect user data and maintain trust while reducing the risk of costly security breaches.",
      keyPoints: [
        "Conduct threat modeling and security assessments",
        "Implement secure coding practices and standards",
        "Use proper authentication and authorization mechanisms",
        "Encrypt sensitive data in transit and at rest",
        "Perform regular security audits and updates",
      ],
      image: "/cybersecurity-shield-and-lock.png",
    },
    {
      id: 8,
      name: "Performance Optimization",
      description: "Continuously monitor and optimize system performance for efficiency.",
      longDescription:
        "Performance is a critical factor in user satisfaction and system success. This principle involves continuously monitoring system performance, identifying bottlenecks, and implementing optimizations to ensure fast and efficient operation. It encompasses code optimization, database query tuning, caching strategies, content delivery networks, and resource management. Performance optimization is an ongoing process that requires regular profiling, load testing, and performance analysis. By maintaining high performance standards, we can provide better user experiences, reduce operational costs, and ensure system reliability under varying load conditions.",
      keyPoints: [
        "Implement continuous performance monitoring",
        "Conduct regular profiling and load testing",
        "Optimize database queries and indexing",
        "Use caching and CDN strategies effectively",
        "Monitor and optimize resource utilization",
      ],
      image: "/performance-metrics-dashboard.png",
    },
    {
      id: 9,
      name: "Agile Methodology",
      description: "Embrace iterative development and adapt quickly to changing requirements.",
      longDescription:
        "Agile methodology provides a framework for delivering value quickly and adapting to change effectively. This principle emphasizes iterative development, regular feedback cycles, and continuous improvement. It involves breaking down large projects into manageable sprints, conducting regular retrospectives, and maintaining close collaboration with stakeholders. Agile practices include daily standups, sprint planning, and demo sessions that ensure transparency and alignment. By embracing agile principles, teams can respond quickly to changing requirements, deliver working software frequently, and continuously improve their processes and outcomes.",
      keyPoints: [
        "Break projects into manageable sprints and iterations",
        "Conduct regular retrospectives and process improvements",
        "Maintain close collaboration with stakeholders",
        "Deliver working software frequently",
        "Adapt quickly to changing requirements and feedback",
      ],
      image: "/agile-sprint-board-kanban.jpg",
    },
    {
      id: 10,
      name: "Innovation Mindset",
      description: "Think creatively and explore new technologies to solve complex problems.",
      longDescription:
        "Innovation is the driving force behind technological advancement and competitive advantage. This principle encourages creative thinking, experimentation, and the exploration of new technologies and methodologies to solve complex problems. It involves staying curious, challenging conventional approaches, and being willing to take calculated risks. An innovation mindset includes prototyping new ideas, conducting proof-of-concept projects, and learning from both successes and failures. By fostering innovation, we can discover breakthrough solutions, improve existing processes, and create value that sets us apart from competitors.",
      keyPoints: [
        "Encourage creative thinking and experimentation",
        "Explore emerging technologies and methodologies",
        "Prototype and test new ideas regularly",
        "Challenge conventional approaches and assumptions",
        "Learn from both successes and failures",
      ],
      image: "/lightbulb-innovation-concept.jpg",
    },
    {
      id: 11,
      name: "Testing Excellence",
      description: "Implement comprehensive testing strategies to ensure reliability and quality.",
      longDescription:
        "Comprehensive testing is essential for delivering reliable, high-quality software. This principle encompasses various testing methodologies including unit testing, integration testing, end-to-end testing, and performance testing. It involves creating automated test suites, implementing continuous integration and deployment pipelines, and maintaining high test coverage. Testing excellence also includes manual testing, user acceptance testing, and security testing. By implementing robust testing strategies, we can catch bugs early, ensure system reliability, and maintain confidence in our deployments while reducing the risk of production issues.",
      keyPoints: [
        "Implement comprehensive automated test suites",
        "Maintain high test coverage across all components",
        "Use continuous integration and deployment pipelines",
        "Conduct various types of testing (unit, integration, E2E)",
        "Perform regular security and performance testing",
      ],
      image: "/software-testing-automation.jpg",
    },
    {
      id: 12,
      name: "Ethical AI",
      description: "Develop AI solutions responsibly, considering bias, fairness, and societal impact.",
      longDescription:
        "As AI becomes increasingly prevalent in our society, developing ethical AI solutions is not just a responsibility but a necessity. This principle involves considering the societal impact of AI systems, addressing bias and fairness issues, ensuring transparency and explainability, and protecting user privacy. Ethical AI development includes diverse dataset collection, algorithmic auditing, and ongoing monitoring for unintended consequences. It also involves engaging with stakeholders, following established ethical guidelines, and being transparent about AI capabilities and limitations. By prioritizing ethical considerations, we can build AI systems that benefit society while minimizing potential harm.",
      keyPoints: [
        "Address bias and fairness in AI algorithms",
        "Ensure transparency and explainability in AI decisions",
        "Protect user privacy and data rights",
        "Consider societal impact and unintended consequences",
        "Follow established ethical AI guidelines and standards",
      ],
      image: "/ethical-ai-brain-circuit.jpg",
    },
  ]

  // Hover logic with small delay to prevent flicker
  const handlePrincipleHover = (principle) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setSelectedPrinciple(principle)
  }

  const handlePrincipleLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setSelectedPrinciple(null)
    }, 300)
  }

  const leftColumnPrinciples = principles.slice(0, 6)
  const rightColumnPrinciples = principles.slice(6, 12)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-green-500 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Principles I Use At <span className="text-red-400 font-bold">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Core values and methodologies that guide my approach to AI engineering and software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnPrinciples.map((principle, index) => (
              <div
                key={principle.id}
                onMouseEnter={() => handlePrincipleHover(principle)}
                onMouseLeave={handlePrincipleLeave}
                className="group cursor-pointer relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-red-400/10 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={principle.image || "/placeholder.svg"}
                      alt={principle.name}
                      className="w-16 h-16 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300 mb-2">
                      {principle.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnPrinciples.map((principle, index) => (
              <div
                key={principle.id}
                onMouseEnter={() => handlePrincipleHover(principle)}
                onMouseLeave={handlePrincipleLeave}
                className="group cursor-pointer relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${(index + 6) * 0.1}s both`,
                }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-red-400/10 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={principle.image || "/placeholder.svg"}
                      alt={principle.name}
                      className="w-16 h-16 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300 mb-2">
                      {principle.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Card */}
      {selectedPrinciple && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          onMouseEnter={() => handlePrincipleHover(selectedPrinciple)}
          onMouseLeave={handlePrincipleLeave}
        >
          <div className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 max-w-lg w-[500px] p-6 pointer-events-auto">
            <h2 className="text-xl font-bold text-white mb-2">
              {selectedPrinciple.name}
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              {selectedPrinciple.description}
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              {selectedPrinciple.longDescription}
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white mb-2">Key Implementation Points</h3>
              <ul className="space-y-2">
                {selectedPrinciple.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default Principles