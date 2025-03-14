import React, { useState } from "react";
import Navigation from "./NavigationBar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Bg from "./bg.jpg";

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
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div
        className="absolute inset-0 bg-black/40"
        style={{ pointerEvents: "none" }}
      ></div>

      <Navigation />

      {showModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 bg-white p-6 rounded-2xl shadow-lg w-full max-w-md flex flex-col items-center"
        >
          <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
            Enter Your Details
          </h2>

          {/* Gender Selection */}
          <label className="text-gray-600 text-sm mb-1">Select Gender:</label>
          <select
            className="w-full p-2 border rounded mb-3"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          {/* Days Selection */}
          <label className="text-gray-600 text-sm mb-1">Workout Days:</label>
          <select
            className="w-full p-2 border rounded mb-3"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          >
            {[...Array(5)].map((_, i) => (
              <option key={i} value={i + 3}>
                {i + 3} Days
              </option>
            ))}
          </select>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={handleSubmit}
            className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Continue
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
