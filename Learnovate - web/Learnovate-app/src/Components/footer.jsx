import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, Mail, MapPin, Phone, Github, BookOpen, ArrowRight, Heart, Star, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const quickLinks = [
    { name: 'Courses', path: '/courses' },
    { name: 'Instructors', path: '/instructors' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' }
  ];

  const support = [
    { name: 'Help Center', path: '/help' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Refund Policy', path: '/refunds' },
    { name: 'Academic Integrity', path: '/integrity' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={20} />, url: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: '#', color: 'hover:text-sky-400' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: '#', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: '#', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: <Github size={20} />, url: '#', color: 'hover:text-blue-900' }
  ];

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: '50K+', label: 'Students' },
    { icon: <BookOpen className="w-5 h-5" />, value: '12+', label: 'Courses' },
    { icon: <Award className="w-5 h-5" />, value: '15+', label: 'Instructors' },
    { icon: <Star className="w-5 h-5" />, value: '4.8', label: 'Rating' }
  ];

  return (
    <footer className="bg-gradient-to-r from-black to-cyan-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Learnovate</h3>
            <p className="text-cyan-100 mb-8 text-lg">
              Exploring the cosmos, one course at a time. Get the latest updates and never give up on learning!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                />
              </div>
              <button className="px-8 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-600 rounded-lg mb-4 text-white">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="w-8 h-8 text-cyan-500" />
              <span className="text-2xl font-bold">Learnovate</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Exploring the cosmos, one course at a time. Never Giving Up!
              Transform your career with our expert-led courses and hands-on projects.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-cyan-500" />
                <a href="mailto:support@learnovate.com" className="hover:text-white transition-colors duration-200">
                  support@Learnovate.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-cyan-500" />
                <a href="tel:+917849969774" className="hover:text-white transition-colors duration-200">
                  +91 7849969774
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-cyan-500" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>© {new Date().getFullYear()} Learnovate. All Rights Reserved.</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> in India
              </span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;