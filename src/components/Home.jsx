import React, { useState } from "react";
import Navigation from "./NavigationBar";
import { motion } from "framer-motion";
import PopUp from "./PopUp";
import Bg from "./bg.jpg";

export default function Tracker() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navbar Component */}
      <Navigation />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-screen text-center">
        {/* Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold sm:text-7xl text-white"
        >
          AtEaseFit
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-lg sm:text-xl text-gray-300 italic"
        >
          "Commit to be fit, dare to be great!"
        </motion.p>

        {/* Get Started Button Animation */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={() => setShowModal(true)}
          className="mt-6 px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition transform hover:scale-105"
        >
          Get Started
        </motion.button>
      </div>

      {/* Show PopUp when state is true */}
      {showModal && <PopUp onClose={() => setShowModal(false)} />}
    </div>
  );
}
