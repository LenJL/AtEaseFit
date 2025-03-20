"use client";
import React, { useState, useRef, useEffect } from "react";
import Navigation from "./NavigationBar";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DietComp() {
  const [calories, setCalories] = useState("");
  const [macroData, setMacroData] = useState(null);
  const [chartKey, setChartKey] = useState(0);
  const chartRef = useRef(null); // Reference for chart instance

  const handleCalculate = () => {
    const totalCalories = parseFloat(calories);
    if (isNaN(totalCalories) || totalCalories <= 0) {
      alert("Please enter a valid calorie intake.");
      return;
    }

    const carbs = (totalCalories * 0.5) / 4;
    const protein = (totalCalories * 0.3) / 4;
    const fats = (totalCalories * 0.15) / 9;
    const fiber = (totalCalories * 0.05) / 4;

    setMacroData({ carbs, protein, fats, fiber });
    setChartKey((prevKey) => prevKey + 1);
  };

  // Function to create gradient colors for chart segments
  const getGradient = (ctx, area, color1, color2) => {
    const gradient = ctx.createLinearGradient(
      area.left,
      area.top,
      area.right,
      area.bottom
    );
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  };

  useEffect(() => {
    if (chartRef.current && macroData) {
      const chartInstance = chartRef.current;
      const ctx = chartInstance.ctx;
      const area = chartInstance.chartArea;

      if (!ctx || !area) return;

      // Apply gradient colors dynamically
      const gradients = [
        getGradient(ctx, area, "#FF6384", "#FF4F70"), // Carbs
        getGradient(ctx, area, "#36A2EB", "#2E8BDA"), // Protein
        getGradient(ctx, area, "#FFCE56", "#E6B800"), // Fats
        getGradient(ctx, area, "#4BC0C0", "#3FAF9B"), // Fiber
      ];

      chartInstance.data.datasets[0].backgroundColor = gradients;
      chartInstance.update();
    }
  }, [macroData, chartKey]);

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

      {/* Content Box */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-md flex flex-col items-center border border-gray-700">
        <h1 className="text-2xl font-bold text-white text-center mb-4">
          Diet Composition
        </h1>

        {/* Input for Calories */}
        <input
          type="number"
          placeholder="Enter daily calorie intake"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-lg mb-3 focus:ring-2 focus:ring-gray-400 transition"
        />

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="w-full mt-4 px-5 py-2 text-white rounded-lg bg-gradient-to-r from-[#4c1d95] to-[#6d28d9] hover:opacity-90 shadow-lg transition"
        >
          Calculate
        </button>

        {/* Pie Chart Display */}
        {macroData && (
          <div className="mt-6 w-full">
            <Pie
              key={chartKey}
              ref={chartRef}
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
                    ], // Initial colors (overwritten by gradients)
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
  );
}
