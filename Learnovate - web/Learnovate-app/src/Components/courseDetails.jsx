import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Play, Lock } from 'lucide-react';
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
        free: false
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

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === parseInt(id));
    if (foundCourse) {
      setCourse(foundCourse);
      setCurrentVideo(foundCourse.modules[0]);
    }
  }, [id]);

  const handleVideoSelect = (module) => {
    if (module.free || isEnrolled) {
      setCurrentVideo(module);
    } else {
      alert("Enroll in the course to access this module!");
    }
  };

  if (!course) {
    return <div className="container mx-auto p-4">No Lectures Yet!</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
      <div className="bg-black rounded-xl overflow-hidden shadow-lg mb-6">
        {currentVideo && (
          <ReactPlayer 
          url={currentVideo.videoUrl} 
          width="100%" 
          height="auto" 
          controls
          playing
        />
        )}
      </div>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <div className="flex items-center text-gray-500 space-x-4 mb-6">
        <span>Level: {course.difficulty}</span>
        <span>Lectures: {course.lectures}</span>
        <span><Star size={14} className="inline mr-1" />{course.rating}</span>
      </div>
      <h3 className="font-semibold mb-2">Course Content</h3>
      {course.modules.map((module) => (
        <div
          key={module.id}
          className="flex justify-between items-center p-3 mb-2 rounded-lg cursor-pointe"
          onClick={() => handleVideoSelect(module)}
        >
          <div className="flex items-center">
            {module.free || isEnrolled ? <Play size={16} className="mr-2 text-purple-600" /> : <Lock size={16} className="mr-2 text-gray-400" />}
            <span className="text-sm truncate max-w-[200px]">{module.title}</span>
          </div>
          <span className="text-xs text-gray-500">{module.duration}</span>
        </div>
      ))}
      {!isEnrolled && (
        <button
          onClick={() => setIsEnrolled(true)}
          className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Enroll Now
        </button>
      )}
    </div>
  );
}

export default CourseDetails;
