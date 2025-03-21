import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BMICalculator from "./BMICalculator";
import BMRCalculator from "./BMRCalculator";

export default function PopUp({ onClose }) {
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-3xl shadow-2xl relative transition-all"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-xl"
        >
          ✕
        </button>

        {activeTab === null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center text-white">
              Choose an Option to Get Started
            </h2>
            <p className="text-gray-400 text-center mt-2">
              Select one of the options below to proceed with your fitness
              journey.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveTab("bmr")}
                className="bg-gradient-to-r from-[#064e3b] to-[#0f766e] text-white p-6 rounded-xl text-center cursor-pointer shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">BMR</h3>
                <p className="mt-2 text-sm opacity-80">
                  Find out your daily calorie needs.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveTab("bmi")}
                className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white p-6 rounded-xl text-center cursor-pointer shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">BMI</h3>
                <p className="mt-2 text-sm opacity-80">
                  Check your body mass index category.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate("/workout-splitnav")}
                className="bg-gradient-to-r from-[#4c1d95] to-[#6d28d9] text-white p-6 rounded-xl text-center cursor-pointer shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">Workout Split</h3>
                <p className="mt-2 text-sm opacity-80">
                  Plan your weekly workout schedule.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}

        {activeTab === "bmr" && (
          <BMRCalculator onBack={() => setActiveTab(null)} />
        )}
        {activeTab === "bmi" && (
          <BMICalculator onBack={() => setActiveTab(null)} />
        )}
      </motion.div>
    </div>
  );
}
