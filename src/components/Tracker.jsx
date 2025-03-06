import React, { useState } from "react";
import Navigation from "./NavigationBar";
import { motion } from "framer-motion";
import PopUp from "./PopUp";
import Bg from "./bg.jpg" 

export default function Tracker() {

  const [showModal, setShowModal] = useState(false); 

  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${Bg})` }}>
              <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar Component */}
      <Navigation />

      {/* Show PopUp when state is true */}
      {showModal && <PopUp onClose={() => setShowModal(false)} />}
    </div>
  );
}
