import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors([]);
    setMessage('');
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch('https://backend-test-k5py.onrender.com/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      if (data.errors) {
        setErrors(data.errors.map(err => err.msg));
      } else if (data.message) {
        setErrors([data.message]);
      }
    } else {
      setErrors([]);
      setMessage('Registration successful! Please login.');
      setFormData({ username: '', email: '', password: '' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl mb-6 font-bold text-center">Register</h2>

        {errors.length > 0 && (
          <div className="mb-4 p-3 bg-red-500 bg-opacity-30 text-red-200 rounded">
            <ul>
              {errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {message && <p className="mb-4 text-green-300">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="username">Username</label>
            <input
              name="username"
              id="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full border border-gray-500 rounded px-3 py-2 bg-transparent text-white placeholder-gray-300 focus:ring focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-500 rounded px-3 py-2 bg-transparent text-white placeholder-gray-300 focus:ring focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-500 rounded px-3 py-2 bg-transparent text-white placeholder-gray-300 focus:ring focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
