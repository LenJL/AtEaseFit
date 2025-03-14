import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import background from './bg.jpg';

export default function Signin() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/Signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Signin successful!');
        localStorage.setItem('token', data.token);
        navigate('/dashboard'); // Redirect to dashboard after login
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  // ✅ Google Signup Function
  const handleGoogleSignup = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        );

        console.log(res.data);

        const userData = {
          name: res.data.name,
          email: res.data.email,
          googleId: res.data.sub,
        };

        // Send userData to backend for account creation
        const response = await axios.post(
          'http://localhost:5000/api/auth/google',
          userData
        );

        if (response.data) {
          alert('Signup successful!');
          localStorage.setItem('token', response.data.token);
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Google signup error:', error);
        alert('Google signup failed');
      }
    },
  });

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 relative">
        {/* Title */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-center font-bold sm:text-4xl text-white">
            AtEaseFit
          </h1>
          <h2 className="mt-10 text-center text-2xl font-bold text-white">
            Create your account
          </h2>
        </div>

        {/* Form */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-md font-bold text-white">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 mt-5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-black"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-md font-bold text-white">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 mt-5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-black"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-md font-bold text-white">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 mt-5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-black"
              />
            </div>

            {/* Signup Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-2 focus:outline-indigo-600"
              >
                Sign in
              </button>
            </div>

            {/* ✅ Google Signup Button */}
            <div>
              <button
                type="button"
                onClick={handleGoogleSignup}
                className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-md font-semibold text-white shadow-sm hover:bg-red-600 focus:outline-2 focus:outline-red-500"
              >
                Sign up with Google
              </button>
            </div>
          </form>

          {/* Sign In Link */}
          <p className="mt-6 text-center text-sm text-white">
            Already have an account?{' '}
            <span
              onClick={() => navigate('/Login')}
              className="font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer"
            >
              Log in here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
