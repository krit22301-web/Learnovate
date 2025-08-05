import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Menu, X, User, LogOut } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('https://your-render-backend-url.com/user/verify', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUsername(data.user.username);
        localStorage.setItem('username', data.user.username);
      } else {
        setUsername(null);
        localStorage.removeItem('username');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      // Fallback to localStorage if server check fails
      const savedUser = localStorage.getItem('username');
      if (savedUser) {
        setUsername(savedUser);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('https://your-render-backend-url.com/user/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setUsername(null);
        localStorage.removeItem('username');
        setIsMenuOpen(false);
        // Redirect to home page after logout
        window.location.href = '/';
      } else {
        console.error('Logout failed');
        alert('Logout failed. Please try again.');
      }
    } catch (error) {
      console.error('Logout error:', error);
      alert('Logout error occurred. Please try again.');
    }
  };

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
          
          {isLoading ? (
            // Loading state
            <div className="flex items-center space-x-2 p-4 md:p-0">
              <div className="animate-pulse bg-gray-300 h-8 w-20 rounded"></div>
            </div>
          ) : username ? (
            // Logged in state
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <div className="flex items-center space-x-2">
                <User size={28} className="bg-gray-200 text-black rounded-full p-1" />
                <span className="font-semibold">{username}</span>
              </div>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <LogOut size={16} className="mr-2" />
                Logout
              </button>
            </div>
          ) : (
            // Not logged in state
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
