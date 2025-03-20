"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./NavigationBar";
import PopUp from "./PopUp";

export default function Tracker() {
  const [showModal, setShowModal] = useState(false);
  const [entries, setEntries] = useState([]);
  const [weight, setWeight] = useState("");
  const [workout, setWorkout] = useState("");
  const [dietMaintained, setDietMaintained] = useState(null);

  const handleAddEntry = () => {
    if (!weight || !workout || dietMaintained === null) {
      alert("Please fill in all fields.");
      return;
    }

    const newEntry = {
      date: new Date().toLocaleDateString(),
      weight,
      workout,
      dietMaintained,
    };
    setEntries([...entries, newEntry]);
    setWeight("");
    setWorkout("");
    setDietMaintained(null);
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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 w-full max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Workout & Diet Tracker
          </h2>

          <input
            type="number"
            placeholder="Enter weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-lg mb-3 focus:ring-2 focus:ring-gray-400 transition"
          />

          <select
            value={workout}
            onChange={(e) => setWorkout(e.target.value)}
            className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-lg mb-3 focus:ring-2 focus:ring-gray-400 transition"
          >
            <option value="">Select Workout</option>
            <option value="Push">Push</option>
            <option value="Pull">Pull</option>
            <option value="Legs">Legs</option>
            <option value="Chest & Back">Chest & Back</option>
            <option value="Quads & Abs">Quads & Abs</option>
            <option value="Glutes & Hamstrings">Glutes & Hamstrings</option>
            <option value="Arms">Arms</option>
          </select>

          <div className="flex justify-between items-center mt-3">
            <span className="text-white">Maintained Diet?</span>
            <div className="flex gap-4">
              <button
                className={`px-4 py-2 rounded ${
                  dietMaintained === true
                    ? "bg-green-500 text-white"
                    : "bg-gray-700"
                }`}
                onClick={() => setDietMaintained(true)}
              >
                ✔️
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  dietMaintained === false
                    ? "bg-red-500 text-white"
                    : "bg-gray-700"
                }`}
                onClick={() => setDietMaintained(false)}
              >
                ❌
              </button>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={handleAddEntry}
            className="w-full bg-gradient-to-r from-[#4c1d95] to-[#6d28d9] text-white py-2 mt-4 rounded-lg hover:opacity-90 shadow-lg transition"
          >
            Add Entry
          </motion.button>

          {/* Previous Entries */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white">
              Previous Entries
            </h3>
            {entries.length === 0 ? (
              <p className="text-gray-400">No entries yet.</p>
            ) : (
              <ul className="mt-2 space-y-2">
                {entries.map((entry, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 border border-gray-600 rounded-md shadow-sm bg-gray-900 text-white"
                  >
                    <p>
                      <strong>Date:</strong> {entry.date}
                    </p>
                    <p>
                      <strong>Weight:</strong> {entry.weight} kg
                    </p>
                    <p>
                      <strong>Workout:</strong> {entry.workout}
                    </p>
                    <p>
                      <strong>Diet:</strong>{" "}
                      {entry.dietMaintained
                        ? "✔️ Maintained"
                        : "❌ Not Maintained"}
                    </p>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      </div>

      {/* Show PopUp when state is true */}
      {showModal && <PopUp onClose={() => setShowModal(false)} />}
    </div>
  );
}
