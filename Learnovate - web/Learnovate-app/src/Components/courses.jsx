import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../data/coursedata';

function Courses() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredCourses = courses.filter((course) => 
    course.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter === 'All' || course.category === filter)
  );

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Explore Our Courses
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto px-4 text-gray-300">
            Discover world-class courses designed to help you master new skills and advance your career.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8 sm:mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search Courses..." 
              className="w-full pl-10 p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-400 transition-all duration-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full md:w-auto pl-10 p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-white appearance-none cursor-pointer transition-all duration-300"
            >
              <option value="All" className="bg-gray-800">All Levels</option>
              <option value="Beginner" className="bg-gray-800">Beginner</option>
              <option value="Intermediate" className="bg-gray-800">Intermediate</option>
              <option value="Advanced" className="bg-gray-800">Advanced</option>
            </select>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map(course => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-500"
              onClick={() => handleCourseClick(course.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={course.cover} 
                  alt={course.title} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    course.free 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                      : 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  }`}>
                    {course.free ? 'FREE' : `$${course.price}`}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {course.title}
                </h3>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-400 truncate">
                    By {course.instructor}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-gray-300">{course.rating}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span>{course.lectures} Lectures</span>
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    course.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    course.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {course.difficulty}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2 text-gray-300">No courses found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;