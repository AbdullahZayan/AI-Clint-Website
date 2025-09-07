import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaExternalLinkAlt } from "react-icons/fa"

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null)
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
  ]

  const handleViewAllBlogs = () => {
    navigate("/blogs")
  }

  const handleViewDetails = (blog) => {
    setSelectedBlog(blog)
  }

  const closeModal = () => {
    setSelectedBlog(null)
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
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            My <span className="text-red-400 font-bold">Blog</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Thoughts, insights, and ideas about AI, machine learning, and the future of technology
          </p>
        </div>

        {/* Blog Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* First Blog - Clear */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-red-500 to-purple-600 relative overflow-hidden">
                <img
                  src="/ai-business-analytics-dashboard-with-charts-and-gr.jpg"
                  alt={blogs[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {blogs[0].tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-black/50 text-white text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-red-400 text-sm font-medium">{blogs[0].category}</span>
                  <span className="text-gray-400 text-sm">{blogs[0].readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{blogs[0].title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{blogs[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{blogs[0].date}</span>
                  <button
                    onClick={() => handleViewDetails(blogs[0])}
                    className="px-4 py-2 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg hover:from-red-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            {/* Second Blog - Blurred */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl blur-sm opacity-60 relative">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-teal-600 relative overflow-hidden">
                <img
                  src="/machine-learning-deployment-pipeline-architecture.jpg"
                  alt={blogs[1].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {blogs[1].tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-black/50 text-white text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-400 text-sm font-medium">{blogs[1].category}</span>
                  <span className="text-gray-400 text-sm">{blogs[1].readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{blogs[1].title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{blogs[1].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{blogs[1].date}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-600 text-white rounded-lg">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            {/* Third Blog - Blurred */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl blur-sm opacity-60 relative">
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 relative overflow-hidden">
                <img
                  src="/modern-data-visualization-dashboard-with-interacti.jpg"
                  alt={blogs[2].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {blogs[2].tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-black/50 text-white text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-green-400 text-sm font-medium">{blogs[2].category}</span>
                  <span className="text-gray-400 text-sm">{blogs[2].readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{blogs[2].title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{blogs[2].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{blogs[2].date}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* View All Blogs Button */}
          <div className="absolute left-2/3 top-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center z-10">
            <button
              onClick={handleViewAllBlogs}
              className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center gap-2"
            >
              <FaExternalLinkAlt />
              View All Blogs
            </button>
          </div>
        </div>
      </div>

      {/* Blog Details Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="relative h-64 bg-gradient-to-br from-red-500 to-purple-600">
              <img
                src={selectedBlog.image || "/placeholder.svg?height=300&width=800&query=" + selectedBlog.title}
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

export default Blog