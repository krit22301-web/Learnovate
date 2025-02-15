import React from 'react';
import { Target, Earth, Telescope } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from 'framer-motion';
import p1 from '../assets/pfp-1.jpg';
import p2 from '../assets/pfp-2.jpg';
import p3 from '../assets/pfp-3.jpg';
import p4 from '../assets/pfp-4.jpg';


function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">About Learnovate</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto px-4">
            Revolutionizing space education by bringing the universe closer to learners worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-xl shadow-lg flex items-center justify-center h-full hover:cursor-pointer"
          >
            <div className="bg-cyan-900 p-4 sm:p-6 rounded-xl text-center flex flex-col justify-center h-full">
              <Target className="mx-auto mb-4" size={48} />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Our Mission</h3>
              <p className="text-sm sm:text-base mb-4">
                At Learnovate, our mission is to revolutionize the way people learn by making education accessible, engaging, and impactful. We are committed to:
              </p>
              <ul className="text-sm sm:text-base space-y-2">
                <li>✅ Empowering Learners: Offering expertly designed courses that help individuals master new skills and excel in their careers.</li>
                <li>💡 Driving Innovation: Pioneering modern learning techniques to deliver an unparalleled educational experience.</li>
                <li>🚀 Removing Barriers: Ensuring anyone, anywhere can access high-quality education that meets their unique needs.</li>
                <li>🎯 Learnovate exists to inspire and enable individuals to turn their aspirations into achievements, one course at a time.</li>
              </ul>
            </div>
          </motion.div>


          <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl shadow-lg h-full hover:cursor-pointer">
            <div className="bg-cyan-900 p-4 sm:p-6 rounded-xl text-center flex flex-col justify-center h-full">
              <Earth className="mx-auto mb-4" size={48} />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Global Reach</h3>
              <ul className="text-sm sm:text-base space-y-2">
                <li>🌏 Accessible education for everyone, regardless of location or background.</li>
                <li>🗣 Diverse Courses catering to different cultures and languages.</li>
                <li>🌐 Worldwide Partnerships with top educators & industry experts.</li>
                <li>⏰ Flexible Learning that fits different time zones & schedules.</li>
                <li>🤝 Connected Community of learners passionate about growth.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl shadow-lg h-full hover:cursor-pointer">
            <div className="bg-cyan-900 p-6 rounded-xl text-center flex flex-col justify-between h-full">
              <Telescope className="mx-auto mb-4" size={48} />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="mb-4">✨ Empowering individuals to achieve their fullest potential through accessible and innovative education.</p>
              <ul className="text-sm sm:text-base space-y-2">
                <li>🎓 Democratizing Education so everyone has a chance to learn.</li>
                <li>📚 Lifelong Learning to encourage curiosity & growth forever.</li>
                <li>🚀 Innovative Teaching using the latest tech & methods.</li>
                <li>🌍 A Global Network of learners & educators making an impact.</li>
                <li>💡 Future-Ready Skills for an ever-changing world.</li>
              </ul>
            </div>
          </motion.div>
        </div>
        <div className="text-center mb-8 sm:mb-12 pt-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 pt-6">What Our Learners Say</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto px-4 pb-6">
            Discover how Learnovate has transformed lives across the globe.
          </p>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{ delay: 3000 }}
            loop={true}
          >
            <SwiperSlide>
              <div className="bg-cyan-900 p-4 sm:p-6 flex flex-col justify-center items-center text-center">
                <img src={p1} className="w-32 h-32 rounded-full object-cover" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Om Swami</h3>
                <p className="text-sm sm:text-base">
                  Learnovate helped me grow professionally. The courses are structured well, and the instructors are experts. I completed a data science course and landed my dream job. Highly recommended for upskilling!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-cyan-900 p-4 sm:p-6 flex flex-col justify-center items-center text-center">
                <img src={p2} className="w-32 h-32 rounded-full object-cover" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Shubhi Bhanagar</h3>
                <p className="text-sm sm:text-base">
                  The platform is user-friendly, and the content is engaging. The interactive quizzes and projects made learning fun. I went from a beginner in programming to building my own apps within months.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-cyan-900 p-4 sm:p-6 flex flex-col justify-center items-center text-center">
                <img src={p3} className="w-32 h-32 rounded-full object-cover" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Aditya Mishra</h3>
                <p className="text-sm sm:text-base">
                  The courses are high quality, and the instructors are great. More personalized feedback on assignments would be helpful, but I still gained a lot. I’ll definitely enroll in more courses here.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-cyan-900 p-4 sm:p-6 flex flex-col justify-center items-center text-center">
                <img src={p4} className="w-32 h-32 rounded-full object-cover" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Kartik Tyagi</h3>
                <p className="text-sm sm:text-base">
                  As someone from a remote area, I never thought I'd access such education. Learnovate connected me to a global learning community, making quality education more accessible than ever before.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div >
  );
}

export default About;
