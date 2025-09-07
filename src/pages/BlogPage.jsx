import { useState } from "react"
import { useNavigate } from "react-router-dom"

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [activeFilter, setActiveFilter] = useState("All")
  const navigate = useNavigate()

  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Business Analytics",
      category: "AI & Analytics",
      date: "2024-01-15",
      readTime: "8 min read",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing business decision-making through advanced analytics and predictive modeling.",
      image: "/ai-business-analytics-future.jpg",
      tags: ["AI", "Analytics", "Business Intelligence"],
      content: `
        <p>Artificial Intelligence is fundamentally transforming how businesses approach analytics and decision-making. As we move into 2024, the integration of AI with traditional business intelligence tools is creating unprecedented opportunities for organizations to gain deeper insights from their data.</p>
        
        <h3>Key Transformations in AI Analytics</h3>
        <p>The convergence of machine learning algorithms with real-time data processing is enabling businesses to move from reactive to predictive analytics. This shift allows companies to anticipate market trends, customer behavior, and operational challenges before they occur.</p>
        
        <h3>Practical Applications</h3>
        <ul>
          <li>Automated anomaly detection in financial transactions</li>
          <li>Predictive maintenance in manufacturing</li>
          <li>Customer churn prediction and prevention</li>
          <li>Dynamic pricing optimization</li>
        </ul>
        
        <p>The future of AI in business analytics lies in democratizing these powerful tools, making them accessible to non-technical users while maintaining the sophistication needed for complex analytical tasks.</p>
      `,
      author: "Abdelrahman Zaian",
    },
    {
      id: 2,
      title: "Machine Learning Model Deployment Strategies",
      category: "Machine Learning",
      date: "2024-01-08",
      readTime: "12 min read",
      excerpt:
        "Best practices for deploying ML models in production environments, from containerization to monitoring and scaling.",
      image: "/ml-deployment-strategies.jpg",
      tags: ["Machine Learning", "DevOps", "Production"],
      content: `
        <p>Deploying machine learning models to production is often more challenging than building them. This comprehensive guide covers the essential strategies and best practices for successful ML model deployment.</p>
        
        <h3>Deployment Architecture Patterns</h3>
        <p>Understanding different deployment patterns is crucial for choosing the right approach for your use case. From batch processing to real-time inference, each pattern has its own trade-offs and considerations.</p>
        
        <h3>Key Deployment Strategies</h3>
        <ul>
          <li>Blue-Green Deployments for zero-downtime updates</li>
          <li>Canary releases for gradual rollouts</li>
          <li>A/B testing for model performance comparison</li>
          <li>Shadow mode for risk-free validation</li>
        </ul>
        
        <h3>Monitoring and Maintenance</h3>
        <p>Continuous monitoring of model performance, data drift, and system health is essential for maintaining reliable ML services in production environments.</p>
      `,
      author: "Abdelrahman Zaian",
    },
    {
      id: 3,
      title: "Data Visualization Best Practices for 2024",
      category: "Data Visualization",
      date: "2024-01-01",
      readTime: "6 min read",
      excerpt:
        "Modern approaches to creating compelling and effective data visualizations that drive business insights and decision-making.",
      image: "/data-visualization-best-practices.jpg",
      tags: ["Data Viz", "Design", "Analytics"],
      content: `
        <p>Effective data visualization is both an art and a science. As we enter 2024, new tools and techniques are emerging that make it easier to create compelling visualizations that truly drive business value.</p>
        
        <h3>Principles of Effective Visualization</h3>
        <p>The best visualizations follow core principles of clarity, accuracy, and purposeful design. Understanding your audience and the story you want to tell with data is paramount.</p>
        
        <h3>Modern Visualization Trends</h3>
        <ul>
          <li>Interactive dashboards with real-time updates</li>
          <li>Mobile-first visualization design</li>
          <li>Accessibility-focused color schemes and layouts</li>
          <li>Integration with AI for automated insights</li>
        </ul>
        
        <p>The future of data visualization lies in creating experiences that not only inform but also inspire action and drive meaningful business outcomes.</p>
      `,
      author: "Abdelrahman Zaian",
    },
    {
      id: 4,
      title: "Building Scalable Data Pipelines with Apache Airflow",
      category: "Data Engineering",
      date: "2023-12-20",
      readTime: "10 min read",
      excerpt:
        "A comprehensive guide to designing and implementing robust data pipelines using Apache Airflow for enterprise-scale data processing.",
      image: "/apache-airflow-pipelines.jpg",
      tags: ["Data Engineering", "Apache Airflow", "ETL"],
      content: `
        <p>Apache Airflow has become the de facto standard for orchestrating complex data workflows. This guide explores advanced patterns and best practices for building production-ready data pipelines.</p>
        
        <h3>Pipeline Design Principles</h3>
        <p>Effective data pipeline design requires careful consideration of scalability, reliability, and maintainability. Understanding these principles is crucial for long-term success.</p>
        
        <h3>Advanced Airflow Features</h3>
        <ul>
          <li>Dynamic DAG generation</li>
          <li>Custom operators and sensors</li>
          <li>Cross-DAG dependencies</li>
          <li>Resource management and scaling</li>
        </ul>
      `,
      author: "Abdelrahman Zaian",
    },
    {
      id: 5,
      title: "Natural Language Processing in 2024: Trends and Applications",
      category: "NLP",
      date: "2023-12-15",
      readTime: "9 min read",
      excerpt:
        "Exploring the latest developments in NLP, from large language models to practical applications in business and research.",
      image: "/nlp-trends-2024.jpg",
      tags: ["NLP", "LLM", "AI"],
      content: `
        <p>Natural Language Processing continues to evolve rapidly, with new breakthroughs in language understanding and generation reshaping how we interact with technology.</p>
        
        <h3>Current NLP Landscape</h3>
        <p>The field has been transformed by large language models, but practical applications require careful consideration of cost, accuracy, and ethical implications.</p>
        
        <h3>Emerging Applications</h3>
        <ul>
          <li>Conversational AI assistants</li>
          <li>Automated content generation</li>
          <li>Multilingual document processing</li>
          <li>Sentiment analysis at scale</li>
        </ul>
      `,
      author: "Abdelrahman Zaian",
    },
    {
      id: 6,
      title: "Cloud Architecture for AI Workloads",
      category: "Cloud Computing",
      date: "2023-12-10",
      readTime: "11 min read",
      excerpt:
        "Designing cloud infrastructure that can handle the unique requirements of AI and machine learning workloads efficiently.",
      image: "/cloud-ai-architecture.jpg",
      tags: ["Cloud", "AI", "Architecture"],
      content: `
        <p>AI workloads have unique infrastructure requirements that traditional cloud architectures may not address effectively. This guide covers specialized patterns for AI-optimized cloud deployments.</p>
        
        <h3>AI Infrastructure Challenges</h3>
        <p>From GPU scheduling to data pipeline orchestration, AI workloads present unique challenges that require specialized architectural approaches.</p>
        
        <h3>Best Practices</h3>
        <ul>
          <li>Auto-scaling for GPU workloads</li>
          <li>Data lake architecture for ML</li>
          <li>Model serving infrastructure</li>
          <li>Cost optimization strategies</li>
        </ul>
      `,
      author: "Abdelrahman Zaian",
    },
  ]

  const filters = [
    "All",
    "AI & Analytics",
    "Machine Learning",
    "Data Visualization",
    "Data Engineering",
    "NLP",
    "Cloud Computing",
  ]

  const filteredBlogs = activeFilter === "All" ? blogs : blogs.filter((blog) => blog.category === activeFilter)

  const handleViewDetails = (blog) => {
    setSelectedBlog(blog)
  }

  const closeModal = () => {
    setSelectedBlog(null)
  }

  const handleBackToHome = () => {
    navigate("/home")
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-float-reverse"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-float"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>

          <h1 className="text-5xl font-bold text-white mb-4">
            All <span className="text-red-400 font-bold">Blogs</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dives into AI, machine learning, and technology insights
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-red-500 to-purple-600 relative overflow-hidden">
                <img
                  src={`/abstract-geometric-shapes.png?height=200&width=400&query=${blog.title}`}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-black/50 text-white text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-red-400 text-sm font-medium">{blog.category}</span>
                  <span className="text-gray-400 text-sm">{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{blog.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{blog.date}</span>
                  <button
                    onClick={() => handleViewDetails(blog)}
                    className="px-4 py-2 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg hover:from-red-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No blogs found for the selected category.</p>
          </div>
        )}
      </div>

      {/* Blog Details Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="relative h-64 bg-gradient-to-br from-red-500 to-purple-600">
              <img
                src={selectedBlog.image || `/placeholder.svg?height=300&width=800&query=${selectedBlog.title}`}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedBlog.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 max-h-[calc(90vh-16rem)] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-red-400 font-medium">{selectedBlog.category}</span>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span>{selectedBlog.date}</span>
                  <span>{selectedBlog.readTime}</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">{selectedBlog.title}</h2>
              <p className="text-gray-300 text-lg mb-6">{selectedBlog.excerpt}</p>

              <div className="prose prose-invert max-w-none">
                <div
                  className="text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                />
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {selectedBlog.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-white font-medium">{selectedBlog.author}</p>
                    <p className="text-gray-400 text-sm">AI Engineering Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogPage