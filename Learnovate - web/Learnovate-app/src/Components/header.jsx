import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Menu, X, User } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
      setUsername(savedUser);
    }
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between relative">
        <div className="flex items-center space-x-2">
          <Laptop color="white" size={30} />
          <Link to="/" className="text-xl font-bold">
            Learnovate
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav
          className={`
            absolute top-full left-0 right-0 bg-indigo-900 md:bg-transparent
            md:static md:flex md:items-center md:w-full
            ${isMenuOpen ? 'block' : 'hidden'}
            md:block
          `}
        >
          <div className="flex flex-col md:flex-row md:justify-center flex-1 space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
            <Link
              to="/courses"
              className="hover:text-yellow-300 block md:inline"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/instructors"
              className="hover:text-yellow-300 block md:inline"
              onClick={() => setIsMenuOpen(false)}
            >
              Instructors
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-300 block md:inline"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>

          {username ? (
            <div className="flex items-center space-x-2 p-4 md:p-0">
              <User size={28} className="bg-gray-200 text-black rounded-full p-1" />
              <span className="font-semibold">{username}</span>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-black hover:bg-gray-900 text-white font-semibold shadow-md transition-all duration-200 block md:inline text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                LogIn
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-lg bg-black hover:bg-gray-900 text-white font-semibold shadow-md transition-all duration-200 block md:inline text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                SignUp
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
