import React from "react";
import Navigation from "../NavigationBar";
import Bg from "../bg.jpg";

export default function Female3Days() {
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
        <h1 className="text-4xl font-bold">Female 3-Day Workout Plan</h1>
        <p className="mt-4 text-lg font-semibold">
          Full-body split for overall toning.
        </p>

        <ul className="list-disc text-left mt-6 space-y-3 px-6 text-lg">
          <li>
            <strong>Day 1:</strong> Lower Body (Glutes, Hamstrings)
          </li>
          <li>
            <strong>Day 2:</strong> Upper Body & Core
          </li>
          <li>
            <strong>Day 3:</strong> Full Body Circuit
          </li>
        </ul>
      </div>
    </div>
  );
}
