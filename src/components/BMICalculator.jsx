import { motion } from "framer-motion";
import { useState } from "react";

export default function BMICalculator({ onBack }) {
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBMI = () => {
    const weight = parseFloat(document.getElementById("bmi-weight").value);
    const height = parseFloat(document.getElementById("bmi-height").value) / 100;
    if (!weight || !height) return;

    const bmiValue = (weight / (height * height)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setBmiCategory("Underweight");
    else if (bmiValue >= 18.5 && bmiValue < 24.9) setBmiCategory("Normal Weight");
    else if (bmiValue >= 25 && bmiValue < 29.9) setBmiCategory("Overweight");
    else setBmiCategory("Obese");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm md:max-w-lg lg:max-w-2xl flex flex-col md:flex-row h-auto"
    >
      {/* Left Section - Inputs */}
      <div className="w-full md:w-1/2 p-4 border-r md:border-r-2 flex flex-col">
        <h2 className="text-lg font-bold text-gray-800 text-center md:text-left">BMI Calculator</h2>
        <p className="text-gray-600 text-sm text-center md:text-left">Enter your details below.</p>

        <div className="mt-4 space-y-3">
          <input type="number" id="bmi-weight" placeholder="Weight (kg)" className="w-full px-4 py-2 border rounded-md text-sm" />
          <input type="number" id="bmi-height" placeholder="Height (cm)" className="w-full px-4 py-2 border rounded-md text-sm" />
          <motion.button 
            whileTap={{ scale: 0.95 }} 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.2 }}
            onClick={calculateBMI} 
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400 transition text-sm"
          >
            Calculate BMI
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
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center">
        <h2 className="text-lg font-semibold text-gray-800">Your BMI Result</h2>
        {bmi !== null ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.3 }}
            className="mt-4 p-4 bg-gray-100 rounded-md text-center w-full"
          >
            <p className="text-xl font-bold">{bmi}</p>
            <p className="text-gray-700">{bmiCategory}</p>
          </motion.div>
        ) : (
          <p className="text-gray-500 mt-4">Your result will appear here.</p>
        )}
      </div>
    </motion.div>
  );
}
