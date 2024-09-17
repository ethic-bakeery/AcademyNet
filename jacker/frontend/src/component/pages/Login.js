// src/component/pages/LoginForm.js

import React, { useState } from 'react';
import { FaExclamationCircle } from 'react-icons/fa'; // Corrected import for react-icons
import { useNavigate } from 'react-router-dom'; // Use react-router-dom for navigation

export default function LoginForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // useNavigate hook from react-router-dom

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/user/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessage("Login successful!");
        setTimeout(() => {
          navigate('/dashboard'); // Redirect to dashboard after successful login
        }, 2000);
      } else {
        const errorData = await response.json();
        setMessage(`Login failed: ${errorData.error || 'Invalid credentials'}`);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login to your account</h2>
      <p className="mb-4 text-gray-600">Enter your credentials to login</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {message && <p className="text-sm text-red-600 flex items-center gap-1"><FaExclamationCircle className="h-4 w-4" />{message}</p>}
        <div className="space-y-2">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="johndoe"
            value={formData.username}
            onChange={handleChange}
            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <p className="text-sm mt-2">Don't have an account? <a href="/register" className="text-blue-600">Register here</a></p>
      </form>
    </div>
  );
}
