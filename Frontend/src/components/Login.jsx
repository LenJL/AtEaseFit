import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import background from "./bg.jpg";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful!");
        localStorage.setItem("token", data.token); // Store token in local storage
        navigate("/AtEaseFit/"); // Redirect after login
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  // Google Login
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
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

        // Send userData to your backend
        const response = await axios.post(
          "http://localhost:5000/api/auth/google",
          userData
        );

        if (response.data) {
          alert("Login successful!");
          localStorage.setItem("token", response.data.token);
          navigate("/AtEaseFit/"); // Redirect to dashboard after login
        }
      } catch (error) {
        console.error("Google login error:", error);
        alert("Google login failed");
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
            Log in
          </h2>
        </div>

        {/* Form */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-md font-bold text-white"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 mt-5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-black"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-md font-bold text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 mt-5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-black"
              />
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-2 focus:outline-indigo-600"
              >
                Log in
              </button>
            </div>

            {/* Google Login Button */}
            <div>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-md font-semibold text-white shadow-sm hover:bg-red-600 focus:outline-2 focus:outline-red-500"
              >
                Log in with Google
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-sm text-white">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/Signin")}
              className="font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer"
            >
              Sign up here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
