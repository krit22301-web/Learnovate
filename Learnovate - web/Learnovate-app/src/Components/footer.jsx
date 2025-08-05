import React from 'react';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Mail,
  MapPin,
  Phone,
  Github
} from 'lucide-react';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to bg-cyan-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-4">Learnovate</h3>
            <p className="text-sm text-gray-300">
              Exploring the cosmos, one course at a time. Never Giving Up!
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/courses" className="hover:text-blue-300">Courses</Link></li>
              <li><Link to="/instructors" className="hover:text-blue-300">Instructors</Link></li>
              <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
              <li><Link to="#" className="hover:text-blue-300">FAQ</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-center sm:justify-start">
                <Mail size={16} className="mr-2" /> support@Learnovate.com
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Phone size={16} className="mr-2" /> +91 7849969774
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <MapPin size={16} className="mr-2" /> Mumbai, India
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <Link to="#" className="hover:text-blue-300"><Instagram size={20} /></Link>
              <Link to="#" className="hover:text-blue-300"><Twitter size={20} /></Link>
              <Link to="#" className="hover:text-blue-300"><Facebook size={20} /></Link>
              <Link to="#" className="hover:text-blue-300"><Linkedin size={20} /></Link>
              <Link to="#" className="hover:text-blue-300"><Github size={20} /></Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Learnovate. All Rights Reserved.
            <span className="block sm:inline sm:ml-4">
              <Link to="#" className="hover:underline">Privacy Policy</Link> |
              <Link to="#" className="ml-2 hover:underline">Terms of Service</Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
