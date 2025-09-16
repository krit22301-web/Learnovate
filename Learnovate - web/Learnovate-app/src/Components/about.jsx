import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Telescope } from 'lucide-react';
import p1 from '../assets/pfp-1.jpg'
import p2 from '../assets/pfp-2.jpg'
import p3 from '../assets/pfp-3.jpg'
import p4 from '../assets/pfp-4.jpg'


function About() {
  const reviews = [
    {
      id: 1,
      name: "Om Swami",
      image: p1,
      text: "Learnovate helped me grow professionally. The courses are structured well, and the instructors are experts. I completed a data science course and landed my dream job. Highly recommended for upskilling!"
    },
    {
      id: 2,
      name: "Shubhi Bhanagar",
      image: p2,
      text: "The platform is user-friendly, and the content is engaging. The interactive quizzes and projects made learning fun. I went from a beginner in programming to building my own apps within months."
    },
    {
      id: 3,
      name: "Aditya Mishra",
      image: p3,
      text: "The courses are high quality, and the instructors are great. More personalized feedback on assignments would be helpful, but I still gained a lot. I'll definitely enroll in more courses here."
    },
    {
      id: 4,
      name: "Kartik Tyagi",
      image: p4,
      text: "As someone from a remote area, I never thought I'd access such education. Learnovate connected me to a global learning community, making quality education more accessible than ever before."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-8">

        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-200 to-purple-900 bg-clip-text text-transparent">
            About Learnovate
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Revolutionizing education by bringing cutting-edge knowledge and skills to learners worldwide through innovative technology and expert instruction.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="group hover:scale-105 duration-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-center h-full border border-gray-700/50 hover:border-cyan-500/50 shadow-lg hover:shadow-cyan-500/20">
              <div className="bg-gradient-to-br from-cyan-300 to-cyan-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Mission</h3>
              <p className="mb-6 text-gray-300">
                At Learnovate, our mission is to revolutionize the way people learn by making education accessible, engaging, and impactful. We are committed to:
              </p>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">✨</span>
                  <span className="text-gray-300"><strong className="text-white">Empowering Learners:</strong> Offering expertly designed courses that help individuals master new skills and excel in their careers.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 font-bold">💡</span>
                  <span className="text-gray-300"><strong className="text-white">Driving Innovation:</strong> Pioneering modern learning techniques to deliver an unparalleled educational experience.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">🚀</span>
                  <span className="text-gray-300"><strong className="text-white">Removing Barriers:</strong> Ensuring anyone, anywhere can access high-quality education that meets their unique needs.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 font-bold">🎯</span>
                  <span className="text-gray-300">Learnovate exists to inspire and enable individuals to turn their aspirations into achievements, one course at a time.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="group hover:scale-105 duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-center h-full border border-gray-700/50 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/20">
              <div className="bg-gradient-to-br from-purple-300 to-purple-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Global Reach</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">🌏</span>
                  <span className="text-gray-300">Accessible education for everyone, regardless of location or background.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 font-bold">🗣</span>
                  <span className="text-gray-300">Diverse courses catering to different cultures and languages.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">🌐</span>
                  <span className="text-gray-300">Worldwide partnerships with top educators & industry experts.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 font-bold">⏰</span>
                  <span className="text-gray-300">Flexible learning that fits different time zones & schedules.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">🤝</span>
                  <span className="text-gray-300">Connected community of learners passionate about growth.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="group hover:scale-105 transition-all duration-500"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-center h-full border border-gray-700/50 hover:border-cyan-500/50 shadow-lg hover:shadow-cyan-500/20">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-4 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Telescope className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Our Vision</h3>
              <p className="mb-6 text-gray-300">
                <span className="text-yellow-400 font-bold">✨</span> Empowering individuals to achieve their fullest potential through accessible and innovative education.
              </p>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 font-bold">🎓</span>
                  <span className="text-gray-300">Democratizing education so everyone has a chance to learn.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">📚</span>
                  <span className="text-gray-300">Lifelong learning to encourage curiosity & growth forever.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 font-bold">🚀</span>
                  <span className="text-gray-300">Innovative teaching using the latest tech & methods.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">🌍</span>
                  <span className="text-gray-300">A global network of learners & educators making an impact.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 font-bold">💡</span>
                  <span className="text-gray-300">Future-ready skills for an ever-changing world.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            What Our Learners Say
          </h2>

          <p className="text-lg max-w-2xl mx-auto pb-8 text-gray-300">
            Discover how Learnovate has transformed lives across the globe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-gradient-to-r from-cyan-400 to-purple-400 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {review.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {review.text}
                  </p>
                  <div className="flex mt-4 space-x-1">
                    <span>{"⭐".repeat(5)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;