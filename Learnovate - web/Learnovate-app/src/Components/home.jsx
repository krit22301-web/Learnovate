import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Users, Computer } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="container mx-auto text-center py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white-500">
          Explore New Knowledge from Home
        </h1>
        <p className="text-base md:text-xl mb-12 max-w-2xl mx-auto">
          Learn a wide range of topics, from programming and data science to arts and humanities, with Learnovate. Your gateway to effective and engaging online learning."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Computer size={200} className="mx-auto mb-4  pd-" />,
              title: "Tech Courses",
              link: "/courses"
            },
            {
              icon: <Book size={200} className="mx-auto mb-4" />,
              title: "Explore Subjects & Reviews",
              link: "/about",
            },
            {
              icon: <Users size={200} className="mx-auto mb-4" />,
              title: "Meet Experts",
              link: "/instructors"
            }
          ].map((item, index) => (
            <Link to={item.link}
              key={index}
              className="bg-white/10 p-6 rounded-xl hover:scale-105"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3> 
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
