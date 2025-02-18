import { motion } from "framer-motion";
import { useState } from "react";

export default function BMRCalculator({ onBack }) {
  const [calories, setCalories] = useState(null);

  const calculateBMR = () => {
    const weight = parseFloat(document.getElementById("bmr-weight").value);
    const height = parseFloat(document.getElementById("bmr-height").value);
    const age = parseInt(document.getElementById("bmr-age").value);
    const gender = document.getElementById("bmr-gender").value;
    const activityFactor = parseFloat(document.getElementById("bmr-activity").value);

    if (!weight || !height || !age) return;

    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setCalories(Math.round(bmr * activityFactor));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl w-[700px] shadow-lg flex"
    >
      {/* Left Section - Input Fields */}
      <div className="w-1/2 p-4 border-r flex flex-col justify-center">
        <h2 className="text-xl font-bold text-gray-800 text-center">BMR Calculator</h2>
        <p className="text-gray-600 text-sm text-center">Enter your details below.</p>

        <div className="mt-4 space-y-3">
          <input type="number" id="bmr-weight" placeholder="Weight (kg)" className="w-full px-4 py-2 border rounded-md text-sm" />
          <input type="number" id="bmr-height" placeholder="Height (cm)" className="w-full px-4 py-2 border rounded-md text-sm" />
          <input type="number" id="bmr-age" placeholder="Age (years)" className="w-full px-4 py-2 border rounded-md text-sm" />

          <select id="bmr-gender" className="w-full px-4 py-2 border rounded-md text-sm">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <select id="bmr-activity" className="w-full px-4 py-2 border rounded-md text-sm">
            <option value="1.2">Sedentary (little or no exercise)</option>
            <option value="1.375">Lightly active (1-3 days/week)</option>
            <option value="1.55">Moderately active (3-5 days/week)</option>
            <option value="1.725">Very active (6-7 days/week)</option>
            <option value="1.9">Super active (physical job, intense exercise)</option>
          </select>

          <motion.button 
            whileTap={{ scale: 0.95 }} 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.2 }}
            onClick={calculateBMR} 
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-400 transition text-sm"
          >
            Calculate BMR
          </motion.button>
        </div>

        <motion.button 
          whileTap={{ scale: 0.95 }} 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.2 }}
          onClick={onBack} 
          className="mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition text-sm"
        >
          Back
        </motion.button>
      </div>

      {/* Right Section - Result */}
      <div className="w-1/2 p-4 flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold text-gray-800"></h2>
        {calories !== null ? (
          <motion.div className="mt-4 p-4 bg-gray-100 rounded-md text-center w-full">
            <p className="text-xl font-bold">{calories} kcal</p>
          </motion.div>
        ) : (
          <p className="text-gray-500 mt-4"></p>
        )}
      </div>
    </motion.div>
  );
}
