import { useState, useRef, useEffect } from "react"

const Publications = () => {
   const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [selectedPublication, setSelectedPublication] = useState(null)
  const closeTimeout = useRef(null)
  

  const publications = [
    {
      id: 1,
      title: "Deep Learning in Healthcare",
      description:
        "This research explores the application of deep neural networks in medical diagnosis and treatment prediction. The study demonstrates how convolutional neural networks can achieve 94% accuracy in detecting early-stage diseases from medical imaging data, potentially revolutionizing healthcare diagnostics and improving patient outcomes through AI-powered medical analysis.",
      longDescription: `This comprehensive research investigates the transformative potential of deep learning technologies in healthcare applications. The study presents a novel convolutional neural network architecture specifically designed for medical image analysis, achieving unprecedented accuracy rates in early disease detection.

      Key contributions include:
      • Development of a multi-scale CNN architecture for medical imaging
      • Implementation of transfer learning techniques for limited medical datasets
      • Creation of an interpretable AI system for clinical decision support
      • Validation across multiple medical imaging modalities (X-ray, MRI, CT scans)
      
      The research demonstrates significant improvements in diagnostic accuracy while maintaining computational efficiency suitable for real-world clinical environments. The proposed system has been validated in collaboration with leading medical institutions and shows promise for widespread clinical adoption.`,
      journal: "Journal of Medical AI",
      year: "2024",
      citations: 127,
      doi: "10.1234/jmai.2024.001",
      authors: "A. Zaian, M. Johnson, S. Chen",
      keywords: ["Deep Learning", "Healthcare", "Medical Imaging", "CNN", "Diagnosis"],
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
      id: 2,
      title: "Cloud ML Infrastructure",
      description:
        "A comprehensive framework for deploying machine learning models at scale using cloud-native technologies. This work presents a novel architecture that reduces deployment time by 60% while maintaining high availability and fault tolerance. The research includes practical implementations using Kubernetes, Docker, and serverless computing paradigms.",
      longDescription: `This research presents a revolutionary cloud-native framework for scalable machine learning model deployment. The proposed architecture addresses critical challenges in MLOps including deployment speed, reliability, and resource optimization.

      Technical innovations include:
      • Containerized ML pipeline orchestration using Kubernetes
      • Serverless inference endpoints with auto-scaling capabilities
      • Distributed model serving with load balancing and fault tolerance
      • Automated CI/CD pipelines for ML model lifecycle management
      
      The framework has been successfully deployed in production environments, serving millions of predictions daily with 99.9% uptime. Performance benchmarks show 60% reduction in deployment time and 40% cost savings compared to traditional approaches.`,
      journal: "IEEE Cloud Computing",
      year: "2023",
      citations: 89,
      doi: "10.1109/mcc.2023.002",
      authors: "A. Zaian, R. Kumar, L. Zhang",
      keywords: ["Cloud Computing", "MLOps", "Kubernetes", "Serverless", "Infrastructure"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "NLP for Business Intelligence",
      description:
        "Advanced natural language processing techniques for extracting actionable insights from unstructured business data. The research introduces a transformer-based model that processes customer feedback, market reports, and social media data to generate strategic business recommendations with 87% accuracy in predicting market trends.",
      longDescription: `This research focuses on leveraging advanced NLP techniques to derive strategic business insights from unstructured data sources. The study develops a transformer-based model capable of processing diverse data types such as customer feedback, market reports, and social media content.

      Key contributions include:
      • Development of a transformer-based NLP model for business intelligence
      • Implementation of data preprocessing pipelines for unstructured data
      • Integration of sentiment analysis and topic modeling for actionable insights
      • Validation using real-world business datasets
      
      The model demonstrates high accuracy in predicting market trends and has been implemented in several business intelligence platforms, providing valuable insights to decision-makers.`,
      journal: "ACM Transactions on Intelligent Systems",
      year: "2023",
      citations: 156,
      doi: "10.1145/3600234.3600240",
      authors: "A. Zaian, J. Smith, E. Lee",
      keywords: ["NLP", "Business Intelligence", "Transformer", "Sentiment Analysis", "Topic Modeling"],
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
      id: 4,
      title: "Parallel Computing Frameworks",
      description:
        "Novel approaches to distributed computing for large-scale data processing and machine learning workloads. This research presents optimization techniques that achieve 3x performance improvements in parallel algorithm execution, with applications in scientific computing, financial modeling, and real-time analytics systems.",
      longDescription: `This research explores innovative parallel computing frameworks tailored for large-scale data processing and machine learning tasks. The study introduces optimization techniques that significantly enhance the performance of parallel algorithms.

      Key contributions include:
      • Development of a distributed computing architecture for parallel processing
      • Implementation of load balancing and fault tolerance mechanisms
      • Optimization of communication protocols between nodes
      • Validation across various applications including scientific computing and financial modeling
      
      The proposed frameworks achieve up to 3x performance improvements in parallel algorithm execution, making them suitable for demanding applications in real-time analytics and scientific research.`,
      journal: "Parallel Computing Journal",
      year: "2022",
      citations: 203,
      doi: "10.1016/j.parco.2022.003",
      authors: "A. Zaian, T. Nguyen, K. Patel",
      keywords: ["Parallel Computing", "Distributed Systems", "Load Balancing", "Fault Tolerance", "Optimization"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Automated Model Deployment",
      description:
        "End-to-end automation pipeline for machine learning model deployment and monitoring. The framework includes automated testing, version control, rollback mechanisms, and performance monitoring. This research demonstrates how MLOps practices can reduce deployment errors by 75% and improve model reliability in production environments.",
      longDescription: `This research develops an end-to-end automation pipeline for machine learning model deployment and monitoring. The framework integrates various MLOps practices to streamline the deployment process.

      Key contributions include:
      • Automated testing and validation of ML models
      • Version control system for model iterations
      • Rollback mechanisms for error recovery
      • Performance monitoring and alerting for deployed models
      
      The pipeline reduces deployment errors by 75% and improves model reliability in production environments, making it a valuable tool for MLOps practitioners.`,
      journal: "Machine Learning Engineering",
      year: "2022",
      citations: 142,
      doi: "10.1007/s42405-022-00045-6",
      authors: "A. Zaian, P. Davis, Z. Wang",
      keywords: ["MLOps", "Automation", "Deployment", "Monitoring", "Reliability"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Data Visualization Techniques",
      description:
        "Interactive data visualization methods for complex datasets. This research presents novel approaches to representing multidimensional data through interactive charts, graphs, and dashboards that improve user understanding and decision-making capabilities.",
      longDescription: `This research explores innovative data visualization techniques for complex, multidimensional datasets. The study focuses on creating interactive and intuitive visualization methods that enhance user comprehension.

      Key contributions include:
      • Development of interactive visualization frameworks
      • Implementation of real-time data rendering techniques
      • Creation of user-friendly dashboard interfaces
      • Validation through user experience studies
      
      The proposed visualization methods significantly improve user understanding of complex data patterns and support better decision-making processes.`,
      journal: "Data Visualization Quarterly",
      year: "2021",
      citations: 98,
      doi: "10.1016/j.datvis.2021.004",
      authors: "A. Zaian, M. Rodriguez, H. Kim",
      keywords: ["Data Visualization", "Interactive Charts", "Dashboard", "UX", "Analytics"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Blockchain Security Protocols",
      description:
        "Advanced security protocols for blockchain networks focusing on consensus mechanisms and cryptographic implementations. This research addresses scalability and security challenges in distributed ledger technologies.",
      longDescription: `This research investigates advanced security protocols for blockchain networks, with a particular focus on improving consensus mechanisms and cryptographic implementations. The study addresses key challenges in distributed ledger technologies.

      Key contributions include:
      • Development of enhanced consensus algorithms
      • Implementation of advanced cryptographic protocols
      • Analysis of scalability solutions for blockchain networks
      • Security audits and vulnerability assessments
      
      The proposed protocols demonstrate improved security and scalability for blockchain applications while maintaining decentralization principles.`,
      journal: "Blockchain Technology Review",
      year: "2021",
      citations: 174,
      doi: "10.1109/btr.2021.005",
      authors: "A. Zaian, S. Thompson, A. Chen",
      keywords: ["Blockchain", "Security", "Consensus", "Cryptography", "Scalability"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ]

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  // Hover logic with small delay to prevent flicker
  const handlePublicationHover = (publication) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setSelectedPublication(publication)
  }

  const handlePublicationLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setSelectedPublication(null)
    }, 300)
  }

  useEffect(() => {
    checkScrollButtons()
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollButtons)
    }
    return () => {
      if (scrollElement) scrollElement.removeEventListener("scroll", checkScrollButtons)
      if (closeTimeout.current) clearTimeout(closeTimeout.current)
    }
  }, [])

  return (
    <section id="publications" className="py-20 bg-gray-900 relative">
      {/* Background Elements (ignore mouse & below content) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Publications</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Research contributions and academic publications in AI, ML, and data science
          </p>
        </div>

        {/* Publications Roadmap */}
        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? "text-white hover:bg-red-600 hover:border-red-500 cursor-pointer"
                : "text-gray-600 cursor-not-allowed opacity-50"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? "text-white hover:bg-red-600 hover:border-red-500 cursor-pointer"
                : "text-gray-600 cursor-not-allowed opacity-50"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Timeline items */}
          <div
            ref={scrollRef}
            className="flex items-center gap-0 overflow-x-auto scrollbar-hide px-16 py-20"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {publications.map((publication, index) => (
              <div
                key={publication.id}
                className="flex items-center flex-shrink-0 roadmap-item relative"
                style={{ animationDelay: `${index * 300}ms` }}
                onMouseEnter={() => handlePublicationHover(publication)}
                onMouseLeave={handlePublicationLeave}
              >
                <div
                  className={`flex flex-col items-center group cursor-pointer relative ${
                    index % 2 === 0 ? "mb-16" : "mt-16"
                  }`}
                >
                  {/* Icon Circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-red-500/50 relative z-10">
                    {publication.icon}
                    <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-30 group-hover:animate-ping"></div>
                  </div>

                  {/* Publication Title */}
                  <div className="text-center max-w-32">
                    <h3 className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors duration-300 leading-tight">
                      {publication.title}
                    </h3>
                  </div>
                </div>

                {/* Connector arrow */}
                {index < publications.length - 1 && (
                  <div className="flex-shrink-0 relative">
                    <div className={`w-32 relative ${index % 2 === 0 ? "zigzag-down" : "zigzag-up"}`}>
                      <svg
                        className={`absolute w-full h-8 text-red-500 transform-gpu ${
                          index % 2 === 0 ? "rotate-12" : "-rotate-12"
                        }`}
                        style={{
                          transform:
                            index % 2 === 0 ? "rotate(15deg) translateY(-16px)" : "rotate(-15deg) translateY(16px)",
                          transformOrigin: "left center",
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 128 32"
                      >
                        <line x1="0" y1="16" x2="110" y2="16" strokeWidth="2" className="timeline-connector" />
                        <polygon points="110,12 110,20 120,16" fill="currentColor" className="timeline-connector" />
                        <circle cx="20" cy="16" r="1.5" fill="currentColor" className="animate-pulse" />
                        <circle cx="60" cy="16" r="1.5" fill="currentColor" className="animate-pulse delay-300" />
                        <circle cx="90" cy="16" r="1.5" fill="currentColor" className="animate-pulse delay-500" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Card - Moved outside the scrollable container */}
      {selectedPublication && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          onMouseEnter={() => handlePublicationHover(selectedPublication)}
          onMouseLeave={handlePublicationLeave}
        >
          <div className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 max-w-lg w-[500px] p-6 pointer-events-auto">
            <h2 className="text-xl font-bold text-white mb-2">
              {selectedPublication.title}
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              {selectedPublication.journal} • {selectedPublication.year} •{" "}
              {selectedPublication.citations} citations
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              {selectedPublication.longDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedPublication.keywords?.map((keyword, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm border border-red-500/30"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .roadmap-item {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .timeline-connector {
          animation: expandLine 1.2s ease-out forwards;
          transform: scaleX(0);
          transform-origin: left;
        }
        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expandLine {
          to {
            transform: scaleX(1);
          }
        }
        .zigzag-down {
          height: 32px;
        }
        .zigzag-up {
          height: 32px;
        }
      `}</style>
    </section>
  )
}

export default Publications