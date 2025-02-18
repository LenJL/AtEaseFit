import React, { useState } from "react";
import Navigation from "./NavigationBar";
import PopUp from "./PopUp";
import Bg from "./bg.jpg" // Import PopUp component

export default function Home() {
  const [showModal, setShowModal] = useState(false); // State to control PopUp visibility

  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${Bg})` }}>
              <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar Component */}
      <Navigation />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold sm:text-7xl text-white">AtEaseFit</h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 italic">"Commit to be fit, dare to be great!"</p>

        {/* Get Started Button */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-6 px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition"
        >
          Get Started
        </button>
      </div>

      {/* Show PopUp when state is true */}
      {showModal && <PopUp onClose={() => setShowModal(false)} />}
    </div>
  );
}
