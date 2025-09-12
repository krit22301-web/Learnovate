import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, LogIn, AlertCircle, BookOpen } from 'lucide-react';

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
    setErrors([]);
  };

  const handleSubmit = async (e) => { 
    (e).preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('https://backend-test-k5py.onrender.com/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors([data.message || 'Login failed']);
      } else {
        localStorage.setItem('username', data.user.username);
        navigate('/');
      }
    } catch (error) {
      setErrors(['Network error. Please try again.']);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    { color: 'bg-red-300', text: 'Access to 12+ Premium Courses' },
    { color: 'bg-blue-300', text: 'Learn from Industry Experts' },
    { color: 'bg-purple-300', text: 'Track Your Progress' }
  ];

  const inputClass = "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white";

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-r from-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col justify-center items-start p-12 text-white">
          <div className="flex items-center mb-8">
            <BookOpen className="w-12 h-12 mr-4" />
            <h1 className="text-4xl font-bold">Learnovate</h1>
          </div>
          <h2 className="text-3xl font-bold mb-6 leading-tight">
            Welcome Back to Your Learning Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Continue exploring thousands of courses from world-class instructors. 
            Your next skill is just a login away.
          </p>
          <div className="space-y-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center text-blue-100">
                <div className={`w-2 h-2 ${feature.color} rounded-full mr-4`}></div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center mb-8 lg:hidden">
            <BookOpen className="w-8 h-8 mr-3 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Learnovate</h1>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <LogIn className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Log in to continue your learning</p>
            </div>

            {errors.length > 0 && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                  <div>
                    {errors.map((err, i) => (
                      <p key={i} className="text-red-700 text-sm">{err}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'username', type: 'text', placeholder: 'Enter your username', icon: User, label: 'Username' },
                { name: 'password', type: showPassword ? 'text' : 'password', placeholder: 'Enter your password', icon: Lock, label: 'Password' }
              ].map(field => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <field.icon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      name={field.name}
                      type={field.type}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className={field.name === 'password' ? inputClass + ' pr-12' : inputClass}
                    />
                    {field.name === 'password' && (
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 font-medium transition">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 px-4 rounded-xl font-semibold text-lg hover:bg-black focus:ring-4 focus:ring-blue-300 transition duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <LogIn className="w-5 h-5 mr-2" />
                    Log In
                  </div>
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-semibold transition">
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}