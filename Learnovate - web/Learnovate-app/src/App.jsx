import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Home from './Components/home';
import Courses from './Components/courses';
import Instructors from './Components/instructor';
import About from './Components/about';
import CourseDetails from './Components/courseDetails';
import Login from './Components/login';
import Signup from './Components/signup';
import ProfilePage from './Components/profilepage';
import ScrollToTop from './Components/scrolltop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);
  const isCourseDetails = location.pathname.startsWith('/course/');

  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profilepage" element={<ProfilePage />} />
        </Routes>
      </main>
      {!isAuthPage && !isCourseDetails && <Footer />}
    </div>
  );
}

export default App;