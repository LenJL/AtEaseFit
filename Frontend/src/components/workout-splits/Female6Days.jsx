import React from "react";
import Navigation from "../NavigationBar";
import Bg from "../bg.jpg";

export default function Female6Days() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center relative"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navigation Bar */}
      <Navigation />

      {/* Workout Plan Box */}
      <div className="relative bg-white/90 text-gray-900 p-10 rounded-xl shadow-xl max-w-2xl w-full text-center border-4 border-gray-300">
        <h1 className="text-4xl font-bold">Female 6-Day Workout Plan</h1>
        <p className="mt-4 text-lg font-semibold">
          Push-pull-legs split with extra core work.
        </p>

        <ul className="list-disc text-left mt-6 space-y-3 px-6 text-lg">
          <li>
            <strong>Day 1:</strong> Lower Body (Glutes, Quads)
          </li>
          <li>
            <strong>Day 2:</strong> Upper Body (Back, Arms)
          </li>
          <li>
            <strong>Day 3:</strong> Core & Cardio
          </li>
          <li>
            <strong>Day 4:</strong> Lower Body (Hamstrings, Glutes, Calves)
          </li>
          <li>
            <strong>Day 5:</strong> Upper Body (Shoulders, Chest, Arms)
          </li>
          <li>
            <strong>Day 6:</strong> Core & Functional Training
          </li>
        </ul>
      </div>
    </div>
  );
}
