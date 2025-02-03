import React from 'react';
import {Award, Globe, Computer} from 'lucide-react';
import chenimage from '../assets/download.jpg';
import smritimage from '../assets/smriti.jpg';

function Instructors() {
  const instructors = [
    {
      id: 1,
      name: "Dr. Smriti",
      specialty: "Data Structures",
      bio: "Renowned professor with extensive experience in algorithm optimization and data structure design.",
      image: smritimage
    },
    {
      id: 2,
      name: "Prof. Marcus Chen",
      specialty: "Machine Learning",
      bio: "AI researcher specializing in deep learning models and their applications in real-world scenarios.",
      image: chenimage
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-12">Our Experts</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {instructors.map(instructor => (
          <div 
            key={instructor.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            <img
              src={instructor.image} 
              alt={instructor.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="p-6 md:w-2/3">
              <h3 className="text-2xl font-semibold mb-2">{instructor.name}</h3>
              <p className="text-gray-600 mb-4">{instructor.specialty}</p>
              <p className="mb-4">{instructor.bio}</p>
              <div className="flex space-x-4">
                <Computer size={24} className="text-purple-600" />
                <Award size={24} className="text-green-600" />
                <Globe size={24} className="text-blue-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instructors;
