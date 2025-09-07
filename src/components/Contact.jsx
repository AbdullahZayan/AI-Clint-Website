import { Mail, Linkedin, Calendar, ExternalLink, Phone } from "lucide-react"

const Contact = () => {
  const contactOptions = [
    {
      id: 1,
      title: "Email Me",
      subtitle: "Get in touch directly",
      description: "Send me an email for project inquiries, collaborations, or general questions.",
      icon: Mail,
      action: () => window.open("mailto:zaian@example.com", "_blank"),
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-500/10 to-cyan-400/10",
    },
    {
      id: 2,
      title: "LinkedIn",
      subtitle: "Connect professionally",
      description: "Let's connect on LinkedIn to expand our professional network and share insights.",
      icon: Linkedin,
      action: () => window.open("https://linkedin.com/in/abdelrahman-zaian", "_blank"),
      gradient: "from-blue-600 to-blue-400",
      bgGradient: "from-blue-600/10 to-blue-400/10",
    },
    {
      id: 3,
      title: "Book Meeting",
      subtitle: "Schedule consultation",
      description: "Book a consultation call to discuss your AI/ML projects and data analytics needs.",
      icon: Calendar,
      action: () => window.open("https://calendly.com/zaian-consultation", "_blank"),
      gradient: "from-red-500 to-orange-400",
      bgGradient: "from-red-500/10 to-orange-400/10",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden py-20 px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full opacity-20 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-slow" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="text-red-400 font-bold">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on your next AI project? Choose your preferred way to get in touch.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon
            return (
              <div
                key={option.id}
                className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:border-gray-600 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={option.action}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${option.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${option.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                    {option.title}
                  </h3>

                  {/* Subtitle */}
                  <p
                    className={`text-sm font-medium bg-gradient-to-r ${option.gradient} bg-clip-text text-transparent mb-4`}
                  >
                    {option.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {option.description}
                  </p>

                  {/* Action Button */}
                  <div className="flex items-center text-gray-400 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium mr-2">Click to connect</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${option.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                />
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-red-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Quick Response Guarantee</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              I typically respond to emails within 24 hours and LinkedIn messages within 48 hours. For urgent
              consultations, booking a meeting is the fastest way to connect.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact