import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import BMICalculator from "./BMICalculator";
import BMRCalculator from "./BMRCalculator";
import WorkoutSplit from "./WorkoutSplit";
import { motion } from "framer-motion"; // For animations

export default function PopUp({ onClose }) {
  const [activeTab, setActiveTab] = useState(null); // Null means default screen

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md">

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        exit={{ opacity: 0, scale: 0.9 }} 
        transition={{ duration: 0.3, ease: "easeOut" }} 
        className="bg-white p-8 rounded-3xl shadow-lg relative transition-all"
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl pb-5"
        >
          ✕
        </button>

        {/* Step 1: Show Information + Clickable Sections */}
        {activeTab === null && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Choose an Option to Get Started
            </h2>
            <p className="text-gray-600 text-center mt-2">
              Select one of the options below to proceed with your fitness journey.
            </p>

            {/* 3 Sections in a Grid Layout */}
            <div className="grid grid-cols-3 gap-6 mt-6">
              {/* BMR Section */}
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.2 }}
                onClick={() => setActiveTab("bmr")}
                className="bg-green-500 text-white p-6 rounded-lg text-center cursor-pointer hover:bg-green-600 transition"
              >
                <h3 className="text-xl font-semibold">BMR</h3>
                <p className="mt-2 text-sm">Find out your daily calorie needs.</p>
              </motion.div>

              {/* BMI Section */}
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.2 }}
                onClick={() => setActiveTab("bmi")}
                className="bg-blue-500 text-white p-6 rounded-lg text-center cursor-pointer hover:bg-blue-600 transition"
              >
                <h3 className="text-xl font-semibold">BMI</h3>
                <p className="mt-2 text-sm">Check your body mass index category.</p>
              </motion.div>

              {/* Workout Split Section */}
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.2 }}
                onClick={() => setActiveTab("workout")}
                className="bg-purple-500 text-white p-6 rounded-lg text-center cursor-pointer hover:bg-purple-600 transition"
              >
                <h3 className="text-xl font-semibold">Workout Split</h3>
                <p className="mt-2 text-sm">Plan your weekly workout schedule.</p>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Show Selected Calculator */}
        {activeTab === "bmr" && <BMRCalculator onBack={() => setActiveTab(null)} />}
        {activeTab === "bmi" && <BMICalculator onBack={() => setActiveTab(null)} />}
        {activeTab === "workout" && <WorkoutSplit onBack={() => setActiveTab(null)} />}
      </motion.div>
    </div>
  );
}
