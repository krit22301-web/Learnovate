import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors([]);
  };

  const handleSubmit = async e => {
    e.preventDefault();

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
      // ✅ Save username for header
      localStorage.setItem('username', data.user.username);

      // ✅ Redirect to home
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl mb-6 font-bold text-center">Login</h2>

        {errors.length > 0 && (
          <div className="mb-4 p-3 bg-red-500 bg-opacity-30 text-red-200 rounded">
            <ul>{errors.map((err, i) => <li key={i}>{err}</li>)}</ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Username"
            className="w-full border border-gray-500 rounded px-3 py-2 bg-transparent text-white placeholder-gray-300 focus:ring focus:ring-blue-500"
          />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Password"
            className="w-full border border-gray-500 rounded px-3 py-2 bg-transparent text-white placeholder-gray-300 focus:ring focus:ring-blue-500"
          />
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
