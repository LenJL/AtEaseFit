import React from "react";
import Navigation from "../NavigationBar";
import Bg from "../bg.jpg";
import { motion } from "framer-motion";

export default function Male7Days() {
  const workoutPlan = [
    {
      day: "Day 1",
      name: "Push",
      exercises: [
        { name: "Push Ups (Till failure)", gif: "push-ups.gif" },
        { name: "Incline Bench Press (3*15)", gif: "incline-bench-press.gif" },
        { name: "Barbell Shoulder Press (3*15)", gif: "shoulder-press.gif" },
        { name: "Pectoral Flys (3*15)", gif: "pec-flys.gif" },
        { name: "Dips (3*15)", gif: "dips.gif" },
        { name: "Dumbbell Lateral Raise", gif: "dumbbell-lateral-raise.gif" },
        { name: "Skull Crusher", gif: "skull-crusher.gif" },
      ],
    },
    {
      day: "Day 2",
      name: "Pull",
      exercises: [
        { name: "Pull Ups (Till failure)", gif: "pull-ups.gif" },
        { name: "Lat Pull Down (3*15)", gif: "lat-pull-down.gif" },
        { name: "Bentover Barbell Rowing (3*15)", gif: "barbell-rowing.gif" },
        { name: "Deadlift (3*15)", gif: "deadlift.gif" },
        { name: "Seated Rows (3*15)", gif: "face-pull.gif" },
        {
          name: "Seated Incline Bicep Curl (3*15)",
          gif: "seated-dumbbell-curl.gif",
        },
        { name: "Preacher Curl (3*15)", gif: "Preachercurl.gif" },
      ],
    },
    {
      day: "Day 3",
      name: "Legs and Abs",
      exercises: [
        { name: "Jump Ropes", gif: "jump-ropes.gif" },
        { name: "Hanging Leg Raises (3*15)", gif: "hanging-leg-raises.gif" },
        { name: "BodyWeight Squats (2*15)", gif: "free-squats.gif" },
        { name: "Barbell Squats (3*15)", gif: "weighted-squats.gif" },
        { name: "Lunges (3*15)", gif: "lunges.gif" },
        { name: "Romanian Deadlift (3*15)", gif: "romanian-deadlift.gif" },
        { name: "Leg Curls (3*15)", gif: "glute-extension.gif" },
        { name: "Calf Raises (3*15)", gif: "calf-raises.gif" },
        { name: "Machine Crunches (3*15)", gif: "machine-crunches.gif" },
      ],
    },
    {
      day: "Day 4",
      name: "Push",
      exercises: [
        { name: "Push Ups (Till failure)", gif: "push-ups.gif" },
        { name: "Incline Bench Press (3*15)", gif: "incline-bench-press.gif" },
        { name: "Machine Shoulder Press (3*15)", gif: "shoulder-press.gif" },
        { name: "Incline Dumbbell Flys (3*15)", gif: "pec-flys.gif" },
        { name: "Tricep Rope Push Down (3*15)", gif: "rope-pushdown.gif" },
        { name: "Dumbbell Lateral Raise", gif: "dumbbell-lateral-raise.gif" },
        { name: "Skull Crusher", gif: "skull-crusher.gif" },
      ],
    },
    {
      day: "Day 5",
      name: "Pull",
      exercises: [
        { name: "Chin Ups (Till failure)", gif: "chin-ups.gif" },
        { name: "T-Bar Row (3*15)", gif: "t-bar-row.gif" },
        { name: "One-Arm Dumbbell Row (3*15)", gif: "one-arm-row.gif" },
        { name: "Rack Pulls (3*15)", gif: "rack-pull.gif" },
        { name: "Face Pulls (3*15)", gif: "face-pull.gif" },
        { name: "Concentration Curl (3*15)", gif: "concentration-curl.gif" },
        { name: "Reverse Grip Curl (3*15)", gif: "reverse-grip-curl.gif" },
      ],
    },
    {
      day: "Day 6",
      name: "Legs",
      exercises: [
        {
          name: "Bulgarian Split Squats (2*15)",
          gif: "bulgarian-split-squat.gif",
        },
        { name: "Leg Extensions (3*15)", gif: "leg-extensions.gif" },
        { name: "Leg Curls (3*15)", gif: "leg-curls.gif" },
        { name: "Leg Press (3*15)", gif: "leg-press.gif" },
        { name: "Seated Calf Raises (3*15)", gif: "seated-calf-raises.gif" },
      ],
    },
    {
      day: "Day 7",
      name: "Cardio + Abs",
      exercises: [
        { name: "Jump Ropes (3 mins)", gif: "jump-ropes.gif" },
        { name: "High Knees (3*1 min)", gif: "high-knees.gif" },
        { name: "Mountain Climbers (3*1 min)", gif: "mountain-climbers.gif" },
        { name: "Hanging Leg Raises (3*15)", gif: "hanging-leg-raises.gif" },
        { name: "Russian Twists (3*20 reps)", gif: "russian-twists.gif" },
        { name: "Plank (Hold 40-60 sec x2)", gif: "plank.gif" },
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
            7-Days Workout Plan
          </h1>
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
