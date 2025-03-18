import React from "react";
import Navigation from "../NavigationBar";
import Bg from "../bg.jpg";
import { motion } from "framer-motion";

export default function Female6Days() {
  const workoutPlan = [
    {
      day: "Day 1",
      name: "Push (Chest, Shoulders, Triceps)",
      exercises: [
        {
          name: "Incline Dumbbell Press (3×15)",
          gif: "incline-dumbbell-press.gif",
        },
        {
          name: "Seated Dumbbell Shoulder Press (3×15)",
          gif: "seated-shoulder-press.gif",
        },
        {
          name: "Straight Bar Tricep Pushdown (3×15)",
          gif: "tricep-pushdown.gif",
        },
        { name: "Rope Pushdown (3×15)", gif: "rope-pushdown.gif" },
        { name: "Lateral Raises (3×15)", gif: "lateral-raises.gif" },
      ],
    },
    {
      day: "Day 2",
      name: "Leg & Abs (Quads Focus)",
      exercises: [
        { name: "Hanging Leg Raises (3×15)", gif: "hanging-leg-raises.gif" },
        { name: "Bodyweight Squats (2×20)", gif: "bodyweight-squats.gif" },
        { name: "Barbell Back Squat (3×15)", gif: "barbell-squat.gif" },
        { name: "Leg Curls (3×15)", gif: "leg-curls.gif" },
        { name: "Leg Extension (3×15)", gif: "leg-extension.gif" },
        { name: "Leg Press (3×15)", gif: "leg-press.gif" },
        { name: "Seated Calf Raises (3×15)", gif: "seated-calf-raises.gif" },
        { name: "Machine Crunches (3×15)", gif: "machine-crunches.gif" },
      ],
    },
    {
      day: "Day 3",
      name: "Pull (Back & Biceps)",
      exercises: [
        { name: "Lat Pulldown (3×15)", gif: "lat-pulldown.gif" },
        { name: "Seated Rows (3×15)", gif: "seated-rows.gif" },
        { name: "Bent-Over Dumbbell Rows (3×15)", gif: "dumbbell-rows.gif" },
        { name: "Dumbbell Bicep Curls (3×15)", gif: "bicep-curls.gif" },
        { name: "Preacher Curls (3×15)", gif: "preacher-curls.gif" },
      ],
    },
    {
      day: "Day 4",
      name: "Glutes & Hamstrings",
      exercises: [
        { name: "Bulgarian Split Squats (3×15)", gif: "split-squats.gif" },
        { name: "Barbell Hip Thrusts (3×15)", gif: "hip-thrusts.gif" },
        { name: "Romanian Deadlifts (3×15)", gif: "romanian-deadlifts.gif" },
        { name: "Glute Cable Kickbacks (3×15)", gif: "glute-kickbacks.gif" },
        { name: "Leg Curls (3×15)", gif: "leg-curls.gif" },
      ],
    },
    {
      day: "Day 5",
      name: "Upper Body + Core",
      exercises: [
        {
          name: "Dumbbell Shoulder Press (3×12)",
          gif: "dumbbell-shoulder-press.gif",
        },
        { name: "Pull-Ups or Assisted Pull-Ups (3×10)", gif: "pull-ups.gif" },
        { name: "Kettlebell Swings (3×15)", gif: "kettlebell-swings.gif" },
        { name: "Hanging Leg Raises (3×15)", gif: "hanging-leg-raises.gif" },
        { name: "Bicycle Crunches (3×20)", gif: "bicycle-crunches.gif" },
        { name: "Plank Hold (3×30 sec)", gif: "plank-hold.gif" },
      ],
    },
    {
      day: "Day 6",
      name: "Active Recovery / Mobility Work",
      exercises: [
        {
          name: "Light Cardio (Walking, Cycling, or Swimming for 20-30 mins)",
          gif: "light-cardio.gif",
        },
        {
          name: "Yoga or Mobility Drills (Hip Openers, Shoulder Mobility, Dynamic Stretches)",
          gif: "yoga.gif",
        },
        { name: "Foam Rolling and Stretching", gif: "foam-rolling.gif" },
      ],
    },
    {
      day: "Day 7",
      name: "Rest",
      exercises: [{ name: "Recovery & Stretching", gif: "rest.jpg" }],
    },
  ];

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen relative flex flex-col"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <Navigation />
      <div className="relative flex flex-col items-center flex-grow px-10 py-16 w-full">
        <div className="bg-black/80 text-white p-12 rounded-2xl shadow-xl w-full max-w-6xl">
          <h1 className="text-4xl font-bold text-center">
            Female 6-Day Workout Plan
          </h1>
          <p className="mt-6 text-lg text-center">
            A structured 6-day routine with Push, Pull, Legs, Glutes, and Core
            training.
          </p>
          <motion.div
            className="mt-8 space-y-8 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {workoutPlan.map((workout, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/70 p-8 rounded-lg shadow-lg w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-center mb-6">
                  {workout.day}: {workout.name}
                </h2>
                <div className="flex flex-col items-center space-y-6">
                  {workout.exercises.map((exercise, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
                    >
                      <img
                        src={`/workouts/${exercise.gif}`}
                        alt={exercise.name}
                        className="w-56 h-56 rounded-lg object-cover"
                      />
                      <p className="text-lg mt-3 text-center">
                        {exercise.name}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
