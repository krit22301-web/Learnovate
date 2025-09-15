import React, { useCallback } from 'react';
import { BookOpen, Users, Computer, ArrowRight, Play, Star, Award, Zap, Code, Palette, BarChart3, Brain, Shield, PenTool } from 'lucide-react';
import img from '../assets/code.jpeg'

function Home() {
  const features = [
    {
      icon: <Computer size={48} className="text-cyan-400" />,
      title: "Tech Courses",
      description: "Master programming, web development, and cutting-edge technologies",
      link: "/courses",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <BookOpen size={48} className="text-emerald-400" />,
      title: "All Subjects",
      description: "Explore diverse topics from arts to sciences with expert guidance",
      link: "/courses",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Users size={48} className="text-purple-400" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals and academic leaders",
      link: "/instructors",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "12+", label: "Courses Available", icon: <BookOpen className="w-6 h-6" /> },
    { number: "10K+", label: "Students Learning", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Expert Instructors", icon: <Award className="w-6 h-6" /> },
    { number: "4.8", label: "Average Rating", icon: <Star className="w-6 h-6" /> }
  ];

  const categories = [
    { name: "Programming", icon: <Code className="w-8 h-8" />, courses: 4, color: "bg-cyan-900/50 text-cyan-200 border-cyan-500/30" },
    { name: "Design", icon: <Palette className="w-8 h-8" />, courses: 2, color: "bg-pink-900/50 text-pink-200 border-pink-500/30" },
    { name: "Data Science", icon: <BarChart3 className="w-8 h-8" />, courses: 3, color: "bg-emerald-900/50 text-emerald-200 border-emerald-500/30" },
    { name: "AI/ML", icon: <Brain className="w-8 h-8" />, courses: 2, color: "bg-purple-900/50 text-purple-200 border-purple-500/30" },
    { name: "Security", icon: <Shield className="w-8 h-8" />, courses: 1, color: "bg-red-900/50 text-red-200 border-red-500/30" },
    { name: "Writing", icon: <PenTool className="w-8 h-8" />, courses: 1, color: "bg-yellow-900/50 text-yellow-200 border-yellow-500/30" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-cyan-900">
      <section className="py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-900/30 border border-cyan-500 text-cyan-300 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Welcome to Learnovate
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Explore New
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Knowledge </span>
            from the Cosmos
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Master programming, data science, design, and more with expert-led courses. Your gateway to exploring the vast universe of knowledge. Never Give Up!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/courses"
              className="group px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-lg hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 flex items-center"
            >
              Start Learning Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <button className="group flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-xl font-semibold text-lg hover:border-cyan-500 hover:text-cyan-300 transition-all duration-300 backdrop-blur-sm">
              <Play className="mr-3 w-6 h-6 text-cyan-400" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-800/50 border-y border-gray-700/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-900/50 text-cyan-400 rounded-lg mb-4 border border-cyan-500/30">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Learnovate?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover what makes our learning platform the perfect choice for your cosmic educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <a
                key={index}
                href={feature.link}
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                  {React.cloneElement(feature.icon, { className: "text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Explore Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Popular Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our diverse range of subjects and find the perfect course for your cosmic journey
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img
                src={img}
                alt="Categories showcase"
                className="w-full h-full object-cover" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                  <a
                    key={index}
                    href="/courses"
                    className={`group p-6 rounded-xl border backdrop-blur-sm hover:shadow-lg transition-all duration-300 text-center ${category.color} hover:scale-105`}
                  >
                    <div className="inline-flex p-3 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-70">{category.courses} courses</p>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;