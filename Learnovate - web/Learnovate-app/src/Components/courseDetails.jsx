import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Play, Lock, Menu, X } from 'lucide-react';
import ReactPlayer from 'react-player';
import img from '../assets/sample.png';

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
    cover: img,
    description: "Learn the basics of Data Structures and Algorithms (DSA) to efficiently organize and process data. Explore arrays, linked lists, stacks, queues, and key algorithms like searching and sorting. Improve problem-solving skills and code efficiency.",
    modules: [
      {
        id: 1,
        title: "What is a Data Structure?",
        duration: "45:23",
        videoUrl: "https://example.com/video1",
        free: true
      },
      {
        id: 2,
        title: "Understanding Arrays",
        duration: "52:14",
        videoUrl: "https://example.com/video2",
        free: true
      },
      {
        id: 3,
        title: "Exploring Linked Lists",
        duration: "1:12:45",
        videoUrl: "https://example.com/video3",
        free: false
      },
      {
        id: 4,
        title: "What is a Stack?",
        duration: "58:30",
        videoUrl: "https://example.com/video4",
        free: false
      },
      {
        id: 5,
        title: "Queues",
        duration: "47:22",
        videoUrl: "https://example.com/video5",
        free: false
      },
      {
        id: 6,
        title: "Big-O Notation: ",
        duration: "1:05:10",
        videoUrl: "https://example.com/video6",
        free: false
      }
    ]
  }
];

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const foundCourse = courses.find(c => c.id === parseInt(id));
    if (foundCourse) {
      setCourse(foundCourse);
      setCurrentVideo(foundCourse.modules[0]);
    }
  }, [id]);

  const handleVideoSelect = (module) => {
    if (module.free || isEnrolled) {
      setCurrentVideo(module);
      setIsSidebarOpen(false);
    } else {
      alert("Enroll in the course to access this module!");
    }
  };

  if (!course) {
    return <div className="container mx-auto p-4">Course not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="md:hidden bg-white shadow-md p-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">{course.title}</h2>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-purple-100 rounded-md"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`fixed inset-0 z-40 md:static md:block md:w-80 bg-white border-r shadow-md transform transition-transform duration-300 ease-in-out${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}md:translate-x-0 overflow-y-auto`}>
        <button 
          onClick={() => setIsSidebarOpen(false)}
          className="md:hidden absolute top-4 right-4 p-2 bg-gray-100 rounded-full"
        >
          <X size={24} />
        </button>

        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 hidden md:block">{course.title}</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">{course.instructor}</span>
              <span className={`
                px-2 py-1 rounded text-xs 
                ${course.free ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}
              `}>
                {course.free ? 'FREE' : `$${course.price}`}
              </span>
            </div>
            <div className="flex text-xs text-gray-600 mb-2">
              <span className="mr-2"><Star size={14} className="inline mr-1" />{course.rating}</span>
              <span className="mr-2">{course.lectures} Lectures</span>
              <span>{course.difficulty}</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Course Content</h3>
            {course.modules.map((module) => (
              <motion.div
                key={module.id}
                whileHover={{ scale: 1.02 }}
                className={`
                  flex justify-between items-center p-3 mb-2 rounded-lg cursor-pointer
                  ${currentVideo?.id === module.id ? 'bg-purple-100' : 'bg-gray-50'}
                  ${module.free || isEnrolled ? 'hover:bg-purple-100' : 'opacity-50'}
                `}
                onClick={() => handleVideoSelect(module)}
              >
                <div className="flex items-center">
                  {module.free || isEnrolled ? (
                    <Play size={16} className="mr-2 text-purple-600" />
                  ) : (
                    <Lock size={16} className="mr-2 text-gray-400" />
                  )}
                  <span className="text-sm truncate max-w-[200px]">{module.title}</span>
                </div>
                <span className="text-xs text-gray-500">{module.duration}</span>
              </motion.div>
            ))}
          </div>

          {!isEnrolled && (
            <button 
              onClick={() => setIsEnrolled(true)}
              className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Enroll Now
            </button>
          )}
        </div>
      </div>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="bg-black rounded-xl overflow-hidden shadow-lg mb-6">
          {currentVideo && (
            <ReactPlayer
              url={currentVideo.videoUrl}
              width="100%"
              height="auto"
              aspectRatio={16/9}
              controls
              playing
              className="max-w-full"
            />
          )}
        </div>

        <div className="px-2 md:px-0">
          <h2 className="text-xl md:text-2xl font-bold mb-2">{currentVideo?.title}</h2>
          <p className="text-sm md:text-base text-gray-600 mb-4">{course.description}</p>
          <div className="flex flex-wrap items-center text-xs md:text-sm text-gray-500 space-x-2 md:space-x-4">
            <span className="mb-1 md:mb-0">Level: {course.difficulty}</span>
            <span className="mb-1 md:mb-0">Lectures: {course.lectures}</span>
            <span>Duration: Approx. 6 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
