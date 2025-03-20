import React, { useState } from "react";
import Navigation from "./NavigationBar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function WorkoutSplitNav({ onBack }) {
  const [showModal, setShowModal] = useState(true);
  const [gender, setGender] = useState("");
  const [days, setDays] = useState(3);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (gender && days) {
      navigate(`/workout-split/${gender}-${days}`);
    } else {
      alert("Please select gender and workout days.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/AtEaseFit/BGAtease.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900"></div>

      <Navigation />

      {showModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-md flex flex-col items-center border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Enter Your Details
          </h2>

          {/* Gender Selection */}
          <label className="text-gray-300 text-sm mb-1 self-start">
            Select Gender:
          </label>
          <select
            className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-lg mb-3 focus:ring-2 focus:ring-gray-400 transition"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          {/* Days Selection */}
          <label className="text-gray-300 text-sm mb-1 self-start">
            Workout Days:
          </label>
          <select
            className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-lg mb-3 focus:ring-2 focus:ring-gray-400 transition"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          >
            {[...Array(5)].map((_, i) => (
              <option key={i} value={i + 3}>
                {i + 3} Days
              </option>
            ))}
          </select>

          {/* Apple-Style Gradient Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={handleSubmit}
            className="mt-4 px-5 py-2 text-white rounded-lg bg-gradient-to-r from-[#4c1d95] to-[#6d28d9] hover:opacity-90 shadow-lg transition"
          >
            Continue
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
