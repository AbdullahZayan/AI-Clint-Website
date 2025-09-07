
const Story = () => {
  const educationData = [
    {
      id: 1,
      title: "Master of Artificial Intelligence",
      subtitle: "(Business Administrations minor)",
      description: "Taught courses\nArea of the Master's Degree (Artificial Intelligence & Software Management)",
      institution: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
      period: "April 2023 - present",
      icon: "graduation",
    },
    {
      id: 2,
      title: "Summer semester in Artificial Intelligence",
      subtitle: "(Taught courses)",
      description: "focuses (Machine-learning for Health-care & Finance)",
      institution: "University of Oxford England",
      period: "Jun 2023 - Aug 2023",
      icon: "university",
    },
    {
      id: 3,
      title: "Master of philosophy in Computer since",
      subtitle: "(Research mode)",
      description: "Area of the Master's Degree (Artificial Intelligence & Software Management)",
      institution: "Universiti Teknologi Malaysia",
      period: "Oct 2022 - Oct 2024",
      icon: "research",
    },
    {
      id: 4,
      title: "Bachelor's degree in Electrical-Mechatronics",
      subtitle: "First Class honors CGPA 3.69/4",
      description: "Final Year Project Score: A",
      institution: "Universiti Teknologi Malaysia",
      period: "February 2018 - February 2022",
      icon: "engineering",
    },
  ];

  const experienceData = [
    {
      id: 1,
      title: "Senior AI Engineer",
      subtitle: "Tech Innovation Labs",
      description: "Leading AI research projects\nDeveloping machine learning solutions for enterprise clients",
      institution: "San Francisco, CA",
      period: "Jan 2024 - present",
      icon: "ai",
    },
    {
      id: 2,
      title: "AI Research Consultant",
      subtitle: "Multiple Startups",
      description: "Consulting on AI strategy and implementation\nBuilding custom ML models for various industries",
      institution: "Remote",
      period: "Mar 2023 - Dec 2023",
      icon: "consulting",
    },
    {
      id: 3,
      title: "Machine Learning Engineer",
      subtitle: "DataTech Solutions",
      description: "Developed predictive analytics systems\nImplemented deep learning models for computer vision",
      institution: "Kuala Lumpur, Malaysia",
      period: "Jun 2022 - Feb 2023",
      icon: "ml",
    },
    {
      id: 4,
      title: "AI Research Intern",
      subtitle: "University Research Lab",
      description: "Conducted research on neural networks\nPublished papers on AI applications in healthcare",
      institution: "Johor Bahru, Malaysia",
      period: "Jan 2021 - May 2022",
      icon: "intern",
    },
  ];

  const getIcon = (iconType) => {
    const icons = {
      graduation: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
      ),
      university: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
        </svg>
      ),
      research: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>
      ),
      engineering: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      ),
      ai: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z" />
        </svg>
      ),
      consulting: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,4C18.11,4 19.8,5.69 19.8,7.8C19.8,9.91 18.11,11.6 16,11.6C13.89,11.6 12.2,9.91 12.2,7.8C12.2,5.69 13.89,4 16,4M16,13.4C18.67,13.4 20,14.73 20,17V20H8V17.4C8,15.77 6.91,14.37 8.29,13.5C8.2,13.5 8.1,13.5 8,13.5C8,13.5 8,13.5 8,13Z" />
        </svg>
      ),
      ml: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z" />
        </svg>
      ),
      intern: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
        </svg>
      ),
    };
    return icons[iconType] || icons.graduation;
  };

  const TimelineItem = ({ item, isLast = false, index = 0 }) => (
    <div 
      className="relative flex items-start mb-8 opacity-0 animate-pulse"
      style={{ 
        animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
      }}
    >
      {/* Timeline line and icon */}
      <div className="flex flex-col items-center mr-6 flex-shrink-0">
        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-red-500/50 border-2 border-red-400/30 relative group">
          {getIcon(item.icon)}
          <div className="absolute inset-0 rounded-full bg-red-500/20 scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
        {!isLast && (
          <div className="w-0.5 h-20 bg-gradient-to-b from-red-500/60 to-red-500/20 mt-2"></div>
        )}
      </div>

      {/* Content */}
      <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex-1 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/10 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

        <div className="relative z-10">
          <div className="text-red-400 text-xs font-bold mb-2 uppercase tracking-wider">
            {item.icon === "graduation" ||
            item.icon === "university" ||
            item.icon === "research" ||
            item.icon === "engineering"
              ? "EDUCATION"
              : "EXPERIENCE"}
          </div>
          <h3 className="text-white text-xl font-bold mb-2 leading-tight group-hover:text-red-100 transition-colors duration-300">
            {item.title}
          </h3>
          <div className="text-red-300 text-sm font-medium mb-3 group-hover:text-red-200 transition-colors duration-300">
            {item.subtitle}
          </div>
          <p className="text-slate-300 text-sm mb-4 whitespace-pre-line leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
            {item.description}
          </p>
          <div className="border-t border-slate-700/50 pt-3 group-hover:border-slate-600/50 transition-colors duration-300">
            <div className="text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors duration-300">
              {item.institution}
            </div>
            <div className="text-red-400 text-sm font-semibold mt-1 group-hover:text-red-300 transition-colors duration-300">
              {item.period}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-xl border border-red-500/0 group-hover:border-red-500/30 transition-all duration-300"></div>
      </div>
    </div>
  );

  return (
    <section id="story" className="min-h-screen bg-slate-900 relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Journey</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A roadmap of my educational achievements and professional experiences in AI engineering
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-3">
                Educational <span className="text-red-500">Background</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-0">
              {educationData.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isLast={index === educationData.length - 1}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-3">
                Professional <span className="text-red-500">Experience</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-0">
              {experienceData.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isLast={index === experienceData.length - 1}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Story;