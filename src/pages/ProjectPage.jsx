import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Github, ExternalLink, Filter } from "lucide-react"

const ProjectPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Sales Analytics Dashboard",
      type: "Data Vis",
      languages: ["Python", "Tableau", "SQL"],
      description: "Interactive dashboard for sales performance analysis with real-time metrics and KPI tracking.",
      longDescription:
        "A comprehensive sales analytics dashboard that revolutionizes how businesses track and analyze their sales performance. Built with Python for data processing, Tableau for visualization, and SQL for database management, this platform provides real-time insights into sales metrics, customer behavior patterns, and revenue trends. The dashboard features predictive analytics capabilities, automated report generation, and customizable KPI tracking that helps sales teams make data-driven decisions and optimize their strategies for maximum revenue growth.",
      image: "/modern-sales-dashboard-with-charts-and-graphs.jpg",
      additionalImages: ["/sales-analytics-charts.jpg", "/modern-sales-dashboard-with-charts-and-graphs.jpg"],
      github: "https://github.com/zaian/sales-dashboard",
      liveDemo: "https://sales-dashboard-demo.vercel.app",
      technologies: ["Python", "Tableau", "SQL", "Pandas", "NumPy", "PostgreSQL", "Redis"],
      duration: "4 months",
      teamSize: "3 developers",
      features: [
        "Real-time sales metrics tracking",
        "Predictive analytics for forecasting",
        "Automated report generation",
        "Interactive data visualizations",
        "Customer behavior analysis",
      ],
    },
    {
      id: 2,
      title: "ML Model Deployment Platform",
      type: "Machine Learning",
      languages: ["Python", "Docker", "AWS"],
      description: "Scalable platform for deploying and monitoring machine learning models in production.",
      longDescription:
        "An enterprise-grade MLOps platform that streamlines the entire machine learning lifecycle from development to production deployment. This comprehensive solution handles model versioning, automated testing, containerized deployment, and real-time monitoring. Built with Python, Docker, and AWS services, it provides A/B testing capabilities, performance tracking, and automated rollback mechanisms. The platform supports multiple ML frameworks and provides seamless integration with existing data pipelines, making it easier for data science teams to deploy and maintain models at scale.",
      image: "/machine-learning-model-interface-with-neural-netwo.jpg",
      additionalImages: [
        "/ai-prediction-models-interface.jpg",
        "/ml-pipeline-architecture-diagram.jpg",
        "/model-performance-metrics-dashboard.jpg",
      ],
      github: "https://github.com/zaian/ml-platform",
      liveDemo: "https://ml-platform-demo.herokuapp.com",
      technologies: ["Python", "Docker", "AWS", "Kubernetes", "MLflow", "TensorFlow", "FastAPI"],
      duration: "6 months",
      teamSize: "5 developers",
      features: [
        "Automated model deployment",
        "Real-time performance monitoring",
        "A/B testing framework",
        "Model versioning and rollback",
        "Multi-framework support",
      ],
    },
    {
      id: 3,
      title: "Portfolio Website",
      type: "Web Development",
      languages: ["React", "TailwindCSS", "JavaScript"],
      description: "Modern responsive portfolio website with smooth animations and interactive components.",
      longDescription:
        "A cutting-edge portfolio website that showcases modern web development practices and design principles. Built with React for dynamic functionality, TailwindCSS for responsive styling, and enhanced with smooth animations using Framer Motion. The site features an intuitive navigation system, interactive project showcases, skill demonstrations, and integrated contact functionality. The design emphasizes user experience with loading animations, scroll-triggered effects, and mobile-first responsive design that works seamlessly across all devices.",
      image: "/project-portfolio.png",
      additionalImages: ["/responsive-design-mockups.jpg", "/performance-optimization-metrics.jpg"],
      github: "https://github.com/zaian/portfolio",
      liveDemo: "https://zaian-portfolio.vercel.app",
      technologies: ["React", "TailwindCSS", "JavaScript", "Framer Motion", "Vite", "React Router"],
      duration: "2 months",
      teamSize: "1 developer",
      features: [
        "Responsive design across all devices",
        "Smooth scroll animations",
        "Interactive project galleries",
        "Contact form integration",
        "Performance optimized",
      ],
    },
    {
      id: 4,
      title: "Data Pipeline Automation",
      type: "Data Engineering",
      languages: ["Python", "Apache Airflow", "PostgreSQL"],
      description: "Automated ETL pipeline for processing large-scale data with monitoring and alerting.",
      longDescription:
        "A robust data engineering solution that automates the extraction, transformation, and loading of large-scale datasets from multiple sources. Built with Apache Airflow for workflow orchestration and Python for data processing, this pipeline handles millions of records daily with built-in error handling, data quality checks, and comprehensive monitoring. The system features automated retry mechanisms, detailed logging, and real-time alerting to ensure data integrity and pipeline reliability. It supports various data sources and destinations, making it a versatile solution for enterprise data workflows.",
      image: "/data-pipeline-visualization-with-flow-charts-and-a.jpg",
      additionalImages: ["/data-pipeline-architecture-aws.jpg", "/monitoring-dashboard-airflow.jpg"],
      github: "https://github.com/zaian/data-pipeline",
      liveDemo: "https://data-pipeline-monitor.herokuapp.com",
      technologies: ["Python", "Apache Airflow", "PostgreSQL", "Redis", "Docker", "AWS S3", "Pandas"],
      duration: "5 months",
      teamSize: "4 developers",
      features: [
        "Automated ETL workflows",
        "Data quality validation",
        "Real-time monitoring and alerting",
        "Error handling and retry logic",
        "Scalable architecture",
      ],
    },
    {
      id: 5,
      title: "NLP Sentiment Analyzer",
      type: "Machine Learning",
      languages: ["Python", "TensorFlow", "NLTK"],
      description: "Advanced sentiment analysis tool using deep learning for social media monitoring.",
      longDescription:
        "A sophisticated natural language processing application that analyzes sentiment in social media content using state-of-the-art deep learning techniques. Built with TensorFlow and NLTK, this tool processes text data from various social platforms to provide real-time sentiment scoring, emotion detection, and trend analysis. The system uses BERT-based transformers for accurate sentiment classification and includes features for handling multiple languages, detecting sarcasm, and analyzing sentiment trends over time. It's designed for businesses to monitor brand perception and customer feedback across social media channels.",
      image: "/nlp-sentiment-analysis-interface-with-text-process.jpg",
      additionalImages: ["/bert-model-architecture-visualization.jpg", "/sentiment-trends-analytics-dashboard.jpg"],
      github: "https://github.com/zaian/sentiment-analyzer",
      liveDemo: "https://sentiment-analyzer-demo.streamlit.app",
      technologies: ["Python", "TensorFlow", "NLTK", "Transformers", "FastAPI", "Streamlit", "BERT"],
      duration: "4 months",
      teamSize: "2 developers",
      features: [
        "Real-time sentiment analysis",
        "Multi-language support",
        "Emotion detection",
        "Trend analysis and reporting",
        "Social media integration",
      ],
    },
    {
      id: 6,
      title: "E-commerce Analytics Suite",
      type: "Data Vis",
      languages: ["Python", "Plotly", "Streamlit"],
      description: "Comprehensive analytics suite for e-commerce businesses with predictive insights.",
      longDescription:
        "A complete analytics solution designed specifically for e-commerce platforms, providing deep insights into customer behavior, sales performance, and inventory optimization. Built with Python for data processing, Plotly for interactive visualizations, and Streamlit for the web interface, this suite offers comprehensive dashboards for tracking key e-commerce metrics. The platform includes customer segmentation analysis, sales forecasting models, inventory optimization algorithms, and churn prediction capabilities. It integrates with popular e-commerce platforms and provides actionable insights to help businesses increase revenue and improve customer satisfaction.",
      image: "/ecommerce-analytics-dashboard-with-sales-metrics-a.jpg",
      additionalImages: ["/customer-segmentation-analysis-charts.jpg", "/inventory-optimization-dashboard.jpg"],
      github: "https://github.com/zaian/ecommerce-analytics",
      liveDemo: "https://ecommerce-analytics-suite.streamlit.app",
      technologies: ["Python", "Plotly", "Streamlit", "Scikit-learn", "MongoDB", "Pandas", "NumPy"],
      duration: "3 months",
      teamSize: "3 developers",
      features: [
        "Customer behavior analysis",
        "Sales forecasting",
        "Inventory optimization",
        "Churn prediction",
        "Interactive dashboards",
      ],
    },
  ]

  const filterOptions = ["All", "Data Vis", "Machine Learning", "Web Development", "Data Engineering"]

  const filteredProjects =
    selectedFilter === "All" ? projects : projects.filter((project) => project.type === selectedFilter)

  const openProjectModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = "hidden"
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = "unset"
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/home" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">
              All Projects
            </h1>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Filter className="w-5 h-5 text-gray-400" />
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? "bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-purple-600 text-white text-xs font-medium rounded-full">
                    {project.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex flex-wrap gap-1">
                  {project.languages.slice(0, 3).map((lang) => (
                    <span
                      key={lang}
                      className="px-2 py-1 bg-gray-900/80 text-white text-xs rounded-md backdrop-blur-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <button
                    onClick={() => openProjectModal(project)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white rounded-lg transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-purple-600 text-white text-sm font-medium rounded-full">
                  {selectedProject.type}
                </span>
              </div>

              <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Duration: {selectedProject.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>Team: {selectedProject.teamSize}</span>
                </div>
              </div>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedProject.longDescription}</p>

              {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.additionalImages.map((image, index) => (
                      <img
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg border border-gray-700"
                      />
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.features && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-lg transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
                <button
                  onClick={closeProjectModal}
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white rounded-lg transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectPage