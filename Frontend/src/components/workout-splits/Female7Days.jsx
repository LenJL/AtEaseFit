import React from "react";
import Navigation from "../NavigationBar";
import Bg from "../bg.jpg";
import { motion } from "framer-motion";

export default function Female7Days() {
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
        { name: "Pec Flys (3×15)", gif: "pec-flys.gif" },
      ],
    },
    {
      day: "Day 2",
      name: "Leg & Abs (Quads Focus)",
      exercises: [
        { name: "Hanging Leg Raises (3×15)", gif: "hanging-leg-raises.gif" },
        { name: "Bodyweight Squats (2×20)", gif: "bodyweight-squats.gif" },
        { name: "Barbell Back Squat (3×15)", gif: "barbell-back-squat.gif" },
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
        {
          name: "Bent-Over Dumbbell Rows (3×15)",
          gif: "bent-over-dumbbell-rows.gif",
        },
        {
          name: "Dumbbell Bicep Curls (3×15)",
          gif: "dumbbell-bicep-curls.gif",
        },
        { name: "Preacher Curls (3×15)", gif: "preacher-curls.gif" },
      ],
    },
    {
      day: "Day 4",
      name: "Glutes & Hamstrings",
      exercises: [
        {
          name: "Bulgarian Split Squats (3×15)",
          gif: "bulgarian-split-squats.gif",
        },
        { name: "Barbell Hip Thrusts (3×15)", gif: "barbell-hip-thrusts.gif" },
        { name: "Romanian Deadlifts (3×15)", gif: "romanian-deadlifts.gif" },
        {
          name: "Glute Cable Kickbacks (3×15)",
          gif: "glute-cable-kickbacks.gif",
        },
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
      name: "Glutes & Abs",
      exercises: [
        { name: "Sumo Deadlifts (3×12)", gif: "sumo-deadlifts.gif" },
        { name: "Hip Thrusts (3×15)", gif: "hip-thrusts.gif" },
        {
          name: "Cable Glute Kickbacks (3×15)",
          gif: "cable-glute-kickbacks.gif",
        },
        {
          name: "Standing Calf Raises (3×15)",
          gif: "standing-calf-raises.gif",
        },
        { name: "Russian Twists (3×20)", gif: "russian-twists.gif" },
        { name: "Decline Sit-Ups (3×15)", gif: "decline-sit-ups.gif" },
      ],
    },
    {
      day: "Day 7",
      name: "Active Recovery",
      exercises: [
        {
          name: "Light Cardio (Walking, Cycling, or Swimming for 20-30 mins)",
          gif: "light-cardio.gif",
        },
        { name: "Yoga or Mobility Work", gif: "yoga.gif" },
        { name: "Stretching & Foam Rolling", gif: "stretching.gif" },
      ],
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
            Female 7-Day Split Workout Plan
          </h1>
          <p className="mt-6 text-lg text-center">
            A high-volume, intense 7-day workout plan for strength and toning.
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
                <ul className="mt-4 space-y-2">
                  {workout.exercises.map((exercise, exIndex) => (
                    <li key={exIndex} className="text-lg flex items-center">
                      <img
                        src={exercise.gif}
                        alt={exercise.name}
                        className="w-12 h-12 mr-4 rounded"
                      />
                      {exercise.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
