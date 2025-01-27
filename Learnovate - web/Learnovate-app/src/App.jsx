import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Home from './Components/home';
import Courses from './Components/courses';
import Instructors from './Components/instructor';
import About from './Components/about';
import CourseDetails from './Components/courseDetails';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;