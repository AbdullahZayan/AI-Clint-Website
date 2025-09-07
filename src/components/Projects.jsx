import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaGithub, FaEye, FaExternalLinkAlt } from "react-icons/fa"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const navigate = useNavigate()

  const projects = [
    {
      id: 1,
      name: "AI Sales Dashboard",
      type: "Data Visualization",
      languages: ["Python", "React", "D3.js"],
      image: "/modern-sales-dashboard-with-charts-and-graphs.jpg",
      shortDescription:
        "Interactive dashboard for sales analytics with AI-powered insights and real-time data visualization.",
      longDescription:
        "A comprehensive sales analytics dashboard that leverages artificial intelligence to provide actionable insights. Features include real-time data processing, predictive analytics, customer segmentation, and automated reporting. Built with React for the frontend and Python for data processing, utilizing D3.js for advanced visualizations.",
      detailedDescription: `This advanced AI-powered sales dashboard represents a cutting-edge solution for modern businesses seeking to harness the power of their sales data. 

Key Features:
• Real-time data synchronization with CRM systems
• Machine learning algorithms for sales forecasting
• Interactive visualizations with drill-down capabilities
• Automated anomaly detection and alerts
• Customer lifetime value predictions
• Territory performance analysis

Technical Implementation:
The dashboard utilizes a microservices architecture with React.js providing a responsive frontend experience. The backend leverages Python with FastAPI for high-performance data processing, while D3.js enables sophisticated data visualizations. Machine learning models are built using scikit-learn and deployed using Docker containers.

Impact:
This solution has helped sales teams increase their conversion rates by 35% through better lead scoring and has reduced manual reporting time by 80%.`,
      additionalImages: [
        "/modern-sales-dashboard-with-charts-and-graphs.jpg",
        "/sales-analytics-charts.jpg",
        "/ai-prediction-models-interface.jpg",
      ],
      githubLink: "https://github.com/zaian/ai-sales-dashboard",
      liveDemo: "https://ai-sales-dashboard.demo.com",
      category: "Data Vis",
      technologies: ["React.js", "Python", "FastAPI", "D3.js", "scikit-learn", "Docker", "PostgreSQL"],
      duration: "6 months",
      teamSize: "4 developers",
    },
    {
      id: 2,
      name: "ML Prediction Engine",
      type: "Machine Learning",
      languages: ["Python", "TensorFlow", "FastAPI"],
      image: "/machine-learning-model-interface-with-neural-netwo.jpg",
      shortDescription: "Advanced machine learning model for predictive analytics with automated feature engineering.",
      longDescription:
        "A sophisticated machine learning pipeline that automates the entire process from data ingestion to model deployment. Features automated feature engineering, hyperparameter tuning, and model versioning. Deployed using FastAPI for high-performance inference with real-time predictions.",
      detailedDescription: `An enterprise-grade machine learning platform designed to democratize AI across organizations by automating complex ML workflows.

Core Capabilities:
• Automated feature engineering and selection
• Multi-algorithm ensemble modeling
• Real-time model performance monitoring
• A/B testing framework for model comparison
• Automated retraining pipelines
• Explainable AI with SHAP integration

Architecture:
Built on a cloud-native architecture using TensorFlow and PyTorch for model development, with MLflow for experiment tracking and model registry. The inference engine is powered by FastAPI and deployed on Kubernetes for scalability.

Business Value:
Reduced model development time from months to weeks, achieving 94% accuracy in demand forecasting and enabling real-time decision making for critical business processes.`,
      additionalImages: [
        "/machine-learning-model-interface-with-neural-netwo.jpg",
        "/ml-pipeline-architecture-diagram.jpg",
        "/model-performance-metrics-dashboard.jpg",
      ],
      githubLink: "https://github.com/zaian/ml-prediction-engine",
      liveDemo: "https://ml-engine.demo.com",
      category: "Machine Learning",
      technologies: ["TensorFlow", "PyTorch", "FastAPI", "MLflow", "Kubernetes", "Apache Kafka", "Redis"],
      duration: "8 months",
      teamSize: "6 developers",
    },
    {
      id: 3,
      name: "Portfolio Website",
      type: "Web Development",
      languages: ["React", "Node.js", "TailwindCSS"],
      image: "/project-portfolio.png",
      shortDescription: "Professional portfolio website with modern animations and responsive design.",
      longDescription:
        "A fully responsive portfolio website built with React and TailwindCSS. Features smooth animations, dark theme, interactive components, and optimized performance. Includes contact forms, project showcases, and blog functionality with a modern, professional design.",
      detailedDescription: `A modern, performance-optimized portfolio website showcasing advanced web development techniques and design principles.

Design Philosophy:
• Mobile-first responsive design approach
• Accessibility-compliant (WCAG 2.1 AA)
• Performance-optimized with 95+ Lighthouse scores
• Smooth animations and micro-interactions
• Dark/light theme switching capability

Technical Features:
• Server-side rendering with Next.js
• Progressive Web App (PWA) capabilities
• Optimized image loading with lazy loading
• SEO optimization with structured data
• Contact form with spam protection
• Blog with markdown support and syntax highlighting

Performance Metrics:
Achieved 98/100 Performance score, 100/100 Accessibility score, and sub-2-second load times across all devices.`,
      additionalImages: [
        "/project-portfolio.png",
        "/responsive-design-mockups.jpg",
        "/performance-optimization-metrics.jpg",
      ],
      githubLink: "https://github.com/zaian/portfolio-website",
      liveDemo: "https://zaian-portfolio.com",
      category: "Web Development",
      technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion", "Vercel", "Contentful"],
      duration: "3 months",
      teamSize: "Solo project",
    },
    {
      id: 4,
      name: "Data Pipeline Automation",
      type: "Data Engineering",
      languages: ["Python", "Apache Airflow", "Docker"],
      image: "/data-pipeline-visualization-with-flow-charts-and-a.jpg",
      shortDescription: "Automated data pipeline for ETL processes with monitoring and alerting.",
      longDescription:
        "A robust data pipeline automation system built with Apache Airflow. Handles complex ETL processes, data validation, and automated scheduling. Features comprehensive monitoring, error handling, and alerting systems. Containerized with Docker for easy deployment and scaling.",
      detailedDescription: `A comprehensive data engineering solution that processes over 10TB of data daily across multiple sources and destinations.

Pipeline Features:
• Multi-source data ingestion (APIs, databases, files)
• Real-time and batch processing capabilities
• Data quality validation and cleansing
• Automated schema evolution handling
• Lineage tracking and data governance
• Disaster recovery and backup mechanisms

Monitoring & Operations:
• Real-time pipeline health monitoring
• Automated alerting via Slack and email
• Performance metrics and SLA tracking
• Cost optimization through intelligent scheduling
• Audit logging and compliance reporting

Infrastructure:
Deployed on AWS using ECS for container orchestration, with RDS for metadata storage and S3 for data lake storage. Implements Infrastructure as Code using Terraform.`,
      additionalImages: [
        "/data-pipeline-visualization-with-flow-charts-and-a.jpg",
        "/data-pipeline-architecture-aws.jpg",
        "/monitoring-dashboard-airflow.jpg",
      ],
      githubLink: "https://github.com/zaian/data-pipeline",
      liveDemo: null,
      category: "Data Vis",
      technologies: ["Apache Airflow", "Python", "Docker", "AWS", "Terraform", "PostgreSQL", "Apache Spark"],
      duration: "5 months",
      teamSize: "3 developers",
    },
    {
      id: 5,
      name: "NLP Sentiment Analyzer",
      type: "Natural Language Processing",
      languages: ["Python", "BERT", "Flask"],
      image: "/nlp-sentiment-analysis-interface-with-text-process.jpg",
      shortDescription: "Advanced sentiment analysis tool using transformer models for text classification.",
      longDescription:
        "A state-of-the-art sentiment analysis application using BERT transformer models. Capable of processing multiple languages and providing detailed sentiment scores with confidence intervals. Features real-time analysis, batch processing, and comprehensive analytics dashboard.",
      detailedDescription: `An advanced NLP platform leveraging transformer models to provide nuanced sentiment analysis across multiple languages and domains.

AI Capabilities:
• Multi-language sentiment detection (15+ languages)
• Emotion classification beyond positive/negative
• Aspect-based sentiment analysis
• Sarcasm and irony detection
• Confidence scoring and uncertainty quantification
• Custom domain adaptation

Technical Innovation:
Built on transformer architecture with fine-tuned BERT models for domain-specific tasks. Implements attention visualization for explainable AI and uses active learning for continuous model improvement.

Applications:
Successfully deployed for social media monitoring, customer feedback analysis, and brand reputation management, processing over 1M texts daily with 92% accuracy.`,
      additionalImages: [
        "/nlp-sentiment-analysis-interface-with-text-process.jpg",
        "/bert-model-architecture-visualization.jpg",
        "/sentiment-analysis-results-dashboard.jpg",
      ],
      githubLink: "https://github.com/zaian/nlp-sentiment",
      liveDemo: "https://sentiment-analyzer.demo.com",
      category: "Machine Learning",
      technologies: ["BERT", "Transformers", "PyTorch", "Flask", "spaCy", "Elasticsearch", "Redis"],
      duration: "4 months",
      teamSize: "2 developers",
    },
    {
      id: 6,
      name: "E-commerce Analytics",
      type: "Business Intelligence",
      languages: ["Python", "Tableau", "SQL"],
      image: "/ecommerce-analytics-dashboard-with-sales-metrics-a.jpg",
      shortDescription: "Comprehensive e-commerce analytics platform with advanced reporting capabilities.",
      longDescription:
        "A complete business intelligence solution for e-commerce platforms. Provides detailed analytics on customer behavior, sales performance, inventory management, and market trends. Features automated reporting, custom dashboards, and predictive analytics for business growth.",
      detailedDescription: `A comprehensive business intelligence platform that transforms raw e-commerce data into actionable insights for strategic decision-making.

Analytics Modules:
• Customer journey mapping and behavior analysis
• Product performance and inventory optimization
• Marketing campaign effectiveness tracking
• Revenue forecasting and trend analysis
• Cohort analysis and customer lifetime value
• Competitive pricing intelligence

Advanced Features:
• Real-time dashboard with 50+ KPIs
• Automated anomaly detection for sales patterns
• Predictive analytics for demand forecasting
• A/B testing framework integration
• Custom report generation and scheduling
• Mobile-responsive executive dashboards

Business Impact:
Enabled data-driven decisions that increased conversion rates by 28%, reduced inventory costs by 15%, and improved customer retention by 22%.`,
      additionalImages: [
        "/ecommerce-analytics-dashboard-with-sales-metrics-a.jpg",
        "/customer-journey-analytics-visualization.jpg",
        "/inventory-optimization-dashboard.jpg",
      ],
      githubLink: "https://github.com/zaian/ecommerce-analytics",
      liveDemo: "https://ecommerce-analytics.demo.com",
      category: "Data Vis",
      technologies: ["Python", "Tableau", "SQL", "Apache Superset", "dbt", "Snowflake", "Apache Kafka"],
      duration: "7 months",
      teamSize: "5 developers",
    },
  ]

  const openProjectModal = (project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  const handleViewAllProjects = () => {
    navigate("/projects")
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Data/Coding{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">Projects</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Explore my portfolio of innovative projects spanning machine learning, data visualization, and web
            development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* First Project - Normal */}
          <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={projects[0].image || "/placeholder.svg"}
                alt={projects[0].name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {projects[0].languages.map((lang, idx) => (
                  <span key={idx} className="px-2 py-1 bg-black/70 text-white text-xs rounded-full backdrop-blur-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                  {projects[0].name}
                </h3>
                <p className="text-red-400 text-sm font-medium">{projects[0].type}</p>
              </div>

              <p className="text-gray-300 text-sm mb-6 line-clamp-3">{projects[0].shortDescription}</p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => window.open(projects[0].githubLink, "_blank")}
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  <FaGithub className="text-sm" />
                  <span className="text-sm">GitHub</span>
                </button>
                <button
                  onClick={() => openProjectModal(projects[0])}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg transition-all duration-300"
                >
                  <FaEye className="text-sm" />
                  <span className="text-sm">View Details</span>
                </button>
              </div>
            </div>
          </div>

          {/* Second Project - Blurred */}
          <div className="relative">
            <div className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 blur-sm opacity-50">
              <div className="relative overflow-hidden">
                <img
                  src={projects[1].image || "/placeholder.svg"}
                  alt={projects[1].name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {projects[1].languages.map((lang, idx) => (
                    <span key={idx} className="px-2 py-1 bg-black/70 text-white text-xs rounded-full backdrop-blur-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white mb-1">{projects[1].name}</h3>
                  <p className="text-red-400 text-sm font-medium">{projects[1].type}</p>
                </div>
                <p className="text-gray-300 text-sm mb-6 line-clamp-3">{projects[1].shortDescription}</p>
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-gray-700 text-white py-2 px-4 rounded-lg cursor-not-allowed">
                    <FaGithub className="text-sm" />
                    <span className="text-sm">GitHub</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-purple-600 text-white py-2 px-4 rounded-lg cursor-not-allowed">
                    <FaEye className="text-sm" />
                    <span className="text-sm">View Details</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute -right-25 top-1/2 transform -translate-y-1/2 flex items-center justify-center z-10">
              <button
                onClick={handleViewAllProjects}
                className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center gap-2"
              >
                <FaExternalLinkAlt />
                View All Projects
              </button>
            </div>
          </div>

          {/* Third Project - Blurred */}
          <div className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 blur-sm opacity-50">
            <div className="relative overflow-hidden">
              <img
                src={projects[2].image || "/placeholder.svg"}
                alt={projects[2].name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {projects[2].languages.map((lang, idx) => (
                  <span key={idx} className="px-2 py-1 bg-black/70 text-white text-xs rounded-full backdrop-blur-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-white mb-1">{projects[2].name}</h3>
                <p className="text-red-400 text-sm font-medium">{projects[2].type}</p>
              </div>
              <p className="text-gray-300 text-sm mb-6 line-clamp-3">{projects[2].shortDescription}</p>
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-gray-700 text-white py-2 px-4 rounded-lg cursor-not-allowed">
                  <FaGithub className="text-sm" />
                  <span className="text-sm">GitHub</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-purple-600 text-white py-2 px-4 rounded-lg cursor-not-allowed">
                  <FaEye className="text-sm" />
                  <span className="text-sm">View Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {selectedProject.technologies?.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-black/70 text-white text-sm rounded-full backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
                {selectedProject.technologies?.length > 4 && (
                  <span className="px-3 py-1 bg-black/70 text-white text-sm rounded-full backdrop-blur-sm">
                    +{selectedProject.technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.name}</h2>
                    <p className="text-red-400 text-lg font-medium mb-4">{selectedProject.type}</p>

                    {/* Project Metadata */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                      <span>Duration: {selectedProject.duration}</span>
                      <span>Team: {selectedProject.teamSize}</span>
                      <span>ID: #{selectedProject.id.toString().padStart(3, "0")}</span>
                    </div>
                  </div>

                  <div className="prose prose-invert max-w-none mb-8">
                    <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {selectedProject.detailedDescription || selectedProject.longDescription}
                    </div>
                  </div>

                  {/* Additional Images */}
                  {selectedProject.additionalImages && selectedProject.additionalImages.length > 1 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">Project Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.additionalImages.slice(1).map((image, idx) => (
                          <img
                            key={idx}
                            src={image || "/placeholder.svg"}
                            alt={`${selectedProject.name} screenshot ${idx + 2}`}
                            className="w-full h-48 object-cover rounded-lg border border-gray-700"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-lg font-bold text-white mb-4">Project Details</h3>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies?.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700 text-white text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-gray-400">Project ID:</span>
                        <span className="text-white ml-2">#{selectedProject.id.toString().padStart(3, "0")}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Category:</span>
                        <span className="text-white ml-2">{selectedProject.category}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-white ml-2">{selectedProject.duration}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Team Size:</span>
                        <span className="text-white ml-2">{selectedProject.teamSize}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 space-y-3">
                      <button
                        onClick={() => window.open(selectedProject.githubLink, "_blank")}
                        className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                      >
                        <FaGithub />
                        View Source Code
                      </button>
                      {selectedProject.liveDemo && (
                        <button
                          onClick={() => window.open(selectedProject.liveDemo, "_blank")}
                          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg transition-all duration-300"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={closeProjectModal}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects