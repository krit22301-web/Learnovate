import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex items-center space-x-2">
          <Laptop color="white" size={30} />
          <Link to="/" className="text-xl font-bold">Learnovate</Link>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? <X size={24}/> : <Menu size={24} />}
          </button>
        </div>

        <nav className={`
          absolute top-full left-0 right-0 bg-indigo-900 md:bg-transparent
          md:static md:flex md:space-x-4 
          ${isMenuOpen ? 'block' : 'hidden'}
          md:block
        `}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
