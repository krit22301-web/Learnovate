import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/sample.png'
import img2 from '../assets/ml-1.jpg'
import img3 from '../assets/bootcamp.png'
import img4 from '../assets/python.png'
import img5 from '../assets/marketing.png'
import img6 from '../assets/artinte.png'
import img7 from '../assets/graphic.png'
import img8 from '../assets/datasc.png'
import img9 from '../assets/fin.png'
import img10 from '../assets/cyber.png'
import img11 from '../assets/creative.png'
import img12 from '../assets/java.png'


const courses = [
  {
    id: 1,
    title: "Introduction to Data-Structures",
    instructor: "Dr. Smriti",
    price: 49.99,
    free: false,
    difficulty: "Beginner",
    rating: 4.7,
    lectures: 24,
    category: "Beginner",
    cover: img
  },
  {
    id: 2,
    title: "Exploring Machine Learning",
    instructor: "Prof. Marcus Chen",
    price: 99.99,
    free: false,
    difficulty: "Advanced",
    rating: 3.9,
    lectures: 32,
    category: "Advanced",
    cover: img2,
  }, {
    id: 3,
    title: "The Complete Web Development Bootcamp",
    instructor: "Angela Yu",
    price: 129.99,
    free: false,
    difficulty: "Intermediate",
    rating: 4.8,
    lectures: 55,
    category: "Intermediate",
    cover: img3
  },
  {
    id: 4,
    title: "Python for Everybody",
    instructor: "Dr. Charles Severance",
    price: 0.00,
    free: true,
    difficulty: "Beginner",
    rating: 4.9,
    lectures: 40,
    category: "Beginner",
    cover: img4
  },
  {
    id: 5,
    title: "Digital Marketing Masterclass",
    instructor: "Eva Fox",
    price: 79.99,
    free: false,
    difficulty: "Intermediate",
    rating: 4.5,
    lectures: 30,
    category: "Intermediate",
    cover: img5
  },
  {
    id: 6,
    title: "Introduction to Artificial Intelligence",
    instructor: "Prof. Andrew Ng",
    price: 199.99,
    free: false,
    difficulty: "Advanced",
    rating: 4.6,
    lectures: 48,
    category: "Advanced",
    cover: img6
  },
  {
    id: 7,
    title: "Graphic Design Basics",
    instructor: "John Doe",
    price: 29.99,
    free: false,
    difficulty: "Beginner",
    rating: 4.4,
    lectures: 20,
    category: "Beginner",
    cover: img7
  },
  {
    id: 8,
    title: "Data Science with R",
    instructor: "Dr. Maria Garcia",
    price: 89.99,
    free: false,
    difficulty: "Intermediate",
    rating: 4.7,
    lectures: 35,
    category: "Intermediate",
    cover: img8
  },
  {
    id: 9,
    title: "Financial Markets Explained",
    instructor: "Michael Rodriguez",
    price: 59.99,
    free: false,
    difficulty: "Beginner",
    rating: 4.2,
    lectures: 28,
    category: "Beginner",
    cover: img9
  },
  {
    id: 10,
    title: "Cybersecurity Fundamentals",
    instructor: "Ben Carter",
    price: 149.99,
    free: false,
    difficulty: "Advanced",
    rating: 4.8,
    lectures: 42,
    category: "Advanced",
    cover: img10
  },
  {
    id: 11,
    title: "Creative Writing Workshop",
    instructor: "Olivia White",
    price: 0.00,
    free: true,
    difficulty: "Beginner",
    rating: 4.6,
    lectures: 18,
    category: "Beginner",
    cover: img11
  },
  {
    id: 12,
    title: "The Complete JavaScript Course",
    instructor: "Dr. Emily Carter",
    price: 119.99,
    free: false,
    difficulty: "Intermediate",
    rating: 4.9,
    lectures: 60,
    category: "Intermediate",
    cover: img12
  }
  //change here
];

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
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <input 
          type="text" 
          placeholder="Search Courses..." 
          className="w-full p-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-auto p-3 rounded-lg border border-purple-300"
        >
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {filteredCourses.map(course => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onClick={() => handleCourseClick(course.id)}
          >
            <img 
              src={course.cover} 
              alt={course.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{course.title}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 truncate">
                  {course.instructor}
                </span>
                <span className="px-2 py-1 rounded text-xs">
                  {course.free ? 'FREE' : `$${course.price}`}
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-600">
                <span><Star size={16} className="inline mr-1" />{course.rating} </span>
                <span>{course.lectures} Lectures</span>
                <span>{course.difficulty}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
