"use client";
import React, { useState } from "react";
import Navigation from "./NavigationBar";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Bg from "./bg.jpg";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DietComp() {
  const [calories, setCalories] = useState("");
  const [macroData, setMacroData] = useState(null);

  const handleCalculate = () => {
    const totalCalories = parseFloat(calories);
    if (isNaN(totalCalories) || totalCalories <= 0) {
      alert("Please enter a valid calorie intake.");
      return;
    }

    // Assumed macro ratio: 50% Carbs, 30% Protein, 15% Fats, 5% Fiber
    const carbs = (totalCalories * 0.5) / 4;
    const protein = (totalCalories * 0.3) / 4;
    const fats = (totalCalories * 0.15) / 9;
    const fiber = (totalCalories * 0.05) / 4;

    setMacroData({ carbs, protein, fats, fiber });
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen relative"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navigation Bar */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            Diet Composition
          </h1>

          <input
            type="number"
            placeholder="Enter daily calorie intake"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-black"
          />

          <button
            onClick={handleCalculate}
            className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-500"
          >
            Calculate
          </button>

          {macroData && (
            <div className="mt-6">
              <Pie
                data={{
                  labels: ["Carbs (g)", "Protein (g)", "Fats (g)", "Fiber (g)"],
                  datasets: [
                    {
                      data: [
                        macroData.carbs,
                        macroData.protein,
                        macroData.fats,
                        macroData.fiber,
                      ],
                      backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#4BC0C0",
                      ],
                      hoverBackgroundColor: [
                        "#FF4F70",
                        "#2E8BDA",
                        "#E6B800",
                        "#3FAF9B",
                      ],
                    },
                  ],
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
