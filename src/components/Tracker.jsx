import React, { useState } from "react";
import Navigation from "./NavigationBar";
import { motion } from "framer-motion";
import PopUp from "./PopUp";
import Bg from "./bg.jpg";

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
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen relative"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar Component */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold text-center">
            Workout & Diet Tracker
          </h2>

          <input
            type="number"
            placeholder="Enter weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 mt-3 border rounded-md"
          />

          <select
            value={workout}
            onChange={(e) => setWorkout(e.target.value)}
            className="w-full px-4 py-2 mt-3 border rounded-md"
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
            <span>Maintained Diet?</span>
            <div className="flex gap-4">
              <button
                className={`px-4 py-2 rounded ${
                  dietMaintained === true
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setDietMaintained(true)}
              >
                ✔️
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  dietMaintained === false
                    ? "bg-red-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setDietMaintained(false)}
              >
                ❌
              </button>
            </div>
          </div>

          <button
            onClick={handleAddEntry}
            className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600"
          >
            Add Entry
          </button>

          {/* Previous Entries */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Previous Entries</h3>
            {entries.length === 0 ? (
              <p className="text-gray-500">No entries yet.</p>
            ) : (
              <ul className="mt-2 space-y-2">
                {entries.map((entry, index) => (
                  <li key={index} className="p-3 border rounded-md shadow-sm">
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
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Show PopUp when state is true */}
      {showModal && <PopUp onClose={() => setShowModal(false)} />}
    </div>
  );
}
