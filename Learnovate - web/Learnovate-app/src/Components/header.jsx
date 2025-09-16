import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X, User, LogOut, ChevronDown } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  useEffect(() => {
    checkAuthStatus();
    setIsMenuOpen(false);
    setIsProfileDropdownOpen(false);
  }, []);

  const checkAuthStatus = async () => {
    const response = await fetch('https://backend-test-k5py.onrender.com/user/verify', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      const data = await response.json();
      setUsername(data.user.username);
      setEmail(data.user.email);
      localStorage.setItem('username', data.user.username);
      localStorage.setItem('email', data.user.email);
    } else {
      setUsername(null);
      localStorage.removeItem('username');
      localStorage.removeItem('email');
    }
  };

  const handleLogout = async () => {
    await fetch('https://backend-test-k5py.onrender.com/user/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setUsername(null);
    setEmail(null);
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    setIsMenuOpen(false);
    setIsProfileDropdownOpen(false);
    window.location.href = '/';
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/instructors', label: 'Instructors' },
    { path: '/about', label: 'About' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="relative">
                <BookOpen className={"w-8 h-8 transition-colors duration-300 text-cyan-400"} />
                <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold transition-colors duration-300 text-gray-100">
                Learnovate
              </span>
            </Link>
            <nav className="lg:flex items-center space-x-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActiveRoute(link.path) ? 'text-cyan-400 bg-cyan-900/50 border border-cyan-500/30' : 'text-gray-200 hover:text-cyan-400 hover:bg-gray-800/30'}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:flex items-center space-x-4">
              {username ? (
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <button
                      onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-200 group">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm border border-cyan-400/30">
                        {username.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-medium text-gray-300 group-hover:text-white">
                        {username}
                      </span>
                      <ChevronDown className="w-4 h-4 text-gray-500 transition-transform duration-200" />
                    </button>
                    {isProfileDropdownOpen && (
                      <div className="absolute right-0 top-full mt-2 w-64 bg-gray-800 backdrop-blur-sm rounded-xl shadow-lg shadow-cyan-500/10 border border-gray-700/50 py-2 z-50">
                        <div className="px-4 py-3 border-b border-gray-700/50">
                          <p className="font-semibold text-white">{username}</p>
                          <p className="text-sm text-gray-400">{email}</p>
                        </div>
                        <Link
                          to="/profilepage"
                          className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-cyan-400 transition-colors duration-200"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <User className="w-4 h-4 mr-3" />
                          My Profile
                        </Link>

                        <div className="border-t border-gray-700/50 mt-2 pt-2">
                          <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-4 py-3 text-red-400 hover:bg-red-800/20 hover:text-red-300 transition-colors duration-200"
                          >
                            <LogOut className="w-4 h-4 mr-3" />
                            Sign Out
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/login"
                    className="px-4 py-2 text-gray-300 font-medium hover:text-cyan-400 transition-colors duration-200"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-lg hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen
          ? 'max-h-screen opacity-100'
          : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
          <div className="bg-gray-800/95 backdrop-blur-sm border-t border-gray-700/50">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-1 mb-6">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${isActiveRoute(link.path)
                      ? 'text-cyan-400 bg-cyan-900/30 border border-cyan-500/20'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              {username ? (
                <div className="border-t border-gray-700/50 pt-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold border border-cyan-400/30">
                      {username.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{username}</p>
                      <p className="text-sm text-gray-400">learner@Learnovate.com</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Link
                      to="/profilepage"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-cyan-400 rounded-lg transition-colors duration-200"
                    >
                      <User className="w-4 h-4 mr-3" />
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout} className="flex items-center w-full px-4 py-3 text-red-400 hover:bg-red-900/20 hover:text-red-300 rounded-lg transition-colors duration-200"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="border-t border-gray-700/50 pt-4 space-y-3">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full px-4 py-3 text-center text-gray-300 font-medium border border-gray-600 rounded-lg hover:bg-gray-700/50 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors duration-200"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full px-4 py-3 text-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-cyan-500/20"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className="h-16"></div>
      {isProfileDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsProfileDropdownOpen(false)}
        />
      )}
    </>
  );
}

export default Header;