import React from 'react';
import { Award, Globe, Computer, Users, Star, BookOpen, Zap } from 'lucide-react';
import { getAllInstructors } from '../data/instructorsData';
import { motion } from 'framer-motion';


function Instructors() {
  const instructors = getAllInstructors();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Meet Our Expert Instructors
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto px-4 text-gray-300">
            Learn from industry leaders and experienced educators who are passionate about sharing their knowledge
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg text-center border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20">
            <Users className="mx-auto mb-3 text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={28} />
            <h3 className="text-xl sm:text-2xl font-bold text-white">{instructors.length}</h3>
            <p className="text-gray-400 text-sm">Expert Instructors</p>
          </div>
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg text-center border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-green-500/20">
            <BookOpen className="mx-auto mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300" size={28} />
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {instructors.reduce((sum, instructor) => sum + instructor.courses.length, 0)}
            </h3>
            <p className="text-gray-400 text-sm">Courses Available</p>
          </div>
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg text-center border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/20">
            <Star className="mx-auto mb-3 text-yellow-400 group-hover:scale-110 transition-transform duration-300" size={28} />
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {(instructors.reduce((sum, instructor) => sum + instructor.rating, 0) / instructors.length).toFixed(1)}
            </h3>
            <p className="text-gray-400 text-sm">Average Rating</p>
          </div>
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg text-center border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20">
            <Globe className="mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300" size={28} />
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {instructors.reduce((sum, instructor) => sum + instructor.students, 0).toLocaleString()}+
            </h3>
            <p className="text-gray-400 text-sm">Students Taught</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">

          {instructors.map(instructor => (
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div key={instructor.id} className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/20">
                <div className="relative p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-lg hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 hover:border-gray-600">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <img src={instructor.image} alt={instructor.name} className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">{instructor.name}</h3>
                      <p className="text-cyan-100 text-sm font-medium">{instructor.specialty}</p>
                      <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(instructor.rating) ? 'text-yellow-300 fill-current' : 'text-gray-400'}`} />
                        ))}
                        <span className="ml-2 text-sm font-medium">{instructor.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{instructor.bio}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl border border-gray-600/30">
                      <p className="text-xl sm:text-2xl font-bold text-cyan-400">{instructor.students.toLocaleString()}+</p>
                      <p className="text-xs text-gray-400">Students</p>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl border border-gray-600/30">
                      <p className="text-xl sm:text-2xl font-bold text-purple-400">{instructor.experience}</p>
                      <p className="text-xs text-gray-400">Experience</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-300 mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {instructor.expertise.slice(0, 3).map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                      {instructor.expertise.length > 3 && (
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-400 border border-gray-600/30 rounded-full text-xs">
                          +{instructor.expertise.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-300 mb-2">Teaching:</p>
                    <div className="space-y-1">
                      {instructor.courses.map((course, index) => (
                        <p key={index} className="text-sm text-cyan-400 font-medium flex items-center">
                          <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span>
                          {course}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-8 pt-4 border-t border-gray-700/50">
                    <div className="flex flex-col items-center group/icon">
                      <Computer size={20} className="text-purple-400 mb-1 group-hover/icon:scale-110 transition-transform duration-200" />
                      <span className="text-xs text-gray-400">Expert</span>
                    </div>
                    <div className="flex flex-col items-center group/icon">
                      <Award size={20} className="text-green-400 mb-1 group-hover/icon:scale-110 transition-transform duration-200" />
                      <span className="text-xs text-gray-400">Certified</span>
                    </div>
                    <div className="flex flex-col items-center group/icon">
                      <Globe size={20} className="text-cyan-400 mb-1 group-hover/icon:scale-110 transition-transform duration-200" />
                      <span className="text-xs text-gray-400">Global</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Instructors;