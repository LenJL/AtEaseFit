import React, { useState, useEffect } from "react";
import Navigation from "./NavigationBar";
import { motion } from "framer-motion";
import PopUp from "./PopUp";

export default function Tracker() {
  const [showModal, setShowModal] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0.6, 1 - scrollY / 800); // Adjust the divisor for a smoother transition
      setBgOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden overflow-y-auto">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/AtEaseFit/BGAtease.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Navbar Component */}
      <Navigation />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-screen text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold sm:text-7xl text-white"
        >
          AtEaseFit
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-lg sm:text-xl text-gray-300 italic"
        >
          "Commit to be fit, dare to be great!"
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={() => setShowModal(true)}
          className="mt-6 px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition transform hover:scale-105"
        >
          Get Started
        </motion.button>
      </div>

      {/* What We Offer Section */}
      <div
        className="relative py-20 text-white text-center transition-all duration-300"
        style={{ backgroundColor: `rgba(31, 41, 55, ${bgOpacity})` }}
      >
        <h2 className="text-4xl font-bold">What We Offer</h2>
        <div className="mt-10 space-y-16">
          {[
            {
              title: "BMR",
              desc: "Basal Metabolic Rate helps you understand your daily calorie needs.",
              img: "/AtEaseFit/images/bmr.jpg",
            },
            {
              title: "BMI",
              desc: "Body Mass Index is a measure of body fat based on height and weight.",
              img: "/AtEaseFit/images/BMI.jpg",
            },
            {
              title: "Minimalist Workout Splits",
              desc: "A structured yet simple approach to effective workouts.",
              img: "/AtEaseFit/images/workout.jpg",
            },
            {
              title: "Diet Composition",
              desc: "Learn the perfect balance of macros for your fitness goals.",
              img: "/AtEaseFit/images/Dcomp.jpg",
            },
            {
              title: "Progress Tracker",
              desc: "Monitor your improvements and stay motivated.",
              img: "/AtEaseFit/images/tracker.jpg",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                rotateY: 90,
              }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                rotateY: 90,
              }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center space-x-6`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div className="text-left">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Show PopUp when state is true */}
      {showModal && <PopUp onClose={() => setShowModal(false)} />}
    </div>
  );
}
