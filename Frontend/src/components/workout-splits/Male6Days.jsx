import React, { useState } from "react";
import Navigation from "../NavigationBar";
import { motion } from "framer-motion";

export default function Male6Days() {
  const [selectedDay, setSelectedDay] = useState(null);

  const workoutPlan = [
    {
      day: "Day 1",
      name: "Push (Chest, Triceps, Shoulders)",
      exercises: [
        { name: "Push Ups (Till failure)", gif: "Pushups.gif" },
        { name: "Incline Bench Press (3×15)", gif: "IdPress.gif" },
        { name: "Barbell Shoulder Press (3×15)", gif: "SPress.gif" },
        { name: "Pectoral Flys (3×15)", gif: "pec.gif" },
        { name: "Dips (3×15)", gif: "dips.gif" },
        { name: "Dumbbell Lateral Raise", gif: "Lraises.gif" },
        { name: "Skull Crusher", gif: "s.gif" },
      ],
    },
    {
      day: "Day 2",
      name: "Pull (Back and Biceps)",
      exercises: [
        { name: "Pull Ups (Till failure)", gif: "Plups.gif" },
        { name: "Lat Pull Down (3×15)", gif: "LpDowns.gif" },
        { name: "Bentover Barbell Rowing (3×15)", gif: "BRow.gif" },
        { name: "Deadlift (3×15)", gif: "DLift.gif" },
        { name: "Seated Rows (3×15)", gif: "SROWS.gif" },
        { name: "Seated Incline Bicep Curl (3×15)", gif: "inclineBC.gif" },
        { name: "Rear Dealts Fly (3*15)", gif: "Rev_pec_fly.gif" },

        { name: "Preacher Curl (3×15)", gif: "preacher.gif" },
      ],
    },
    {
      day: "Day 3",
      name: "Legs & Abs",
      exercises: [
        { name: "Jump Ropes", gif: "JR.gif" },
        { name: "Hanging Leg Raises (3×15)", gif: "leg_raises.gif" },
        { name: "Bodyweight Squats (2×15)", gif: "sqts.gif" },
        { name: "Barbell Squats (3×15)", gif: "BSqts.gif" },
        { name: "Lunges (3×15)", gif: "lunges.gif" },
        { name: "Romanian Deadlift (3×15)", gif: "RDL.gif" },
        { name: "Leg Curls (3×15)", gif: "lc.gif" },
        { name: "Calf Raises (3×15)", gif: "Craises.gif" },
        { name: "Machine Crunches (3×15)", gif: "crunches.gif" },
      ],
    },
    {
      day: "Day 4",
      name: "Push (Chest, Shoulders, Triceps)",
      exercises: [
        { name: "Push Ups (Till failure)", gif: "Pushups.gif" },
        { name: "Incline Bench Press (3×15)", gif: "IBPress.gif" },
        { name: "Machine Shoulder Press (3×15)", gif: "MSPress.gif" },
        { name: "Incline Dumbell Flys (3×15)", gif: "IDBFlys.gif" },
        { name: "Tricep Rope Push Down (3×15)", gif: "TRope.gif" },
        { name: "Dumbbell Lateral Raise", gif: "Lraises.gif" },
        { name: "Skull Crusher", gif: "s.gif" },
      ],
    },
    {
      day: "Day 5",
      name: "Pull (Back and Biceps)",
      exercises: [
        { name: "Pull Ups (Till failure)", gif: "Plups.gif" },
        { name: "Lat Pull Down (3×15)", gif: "LpDowns.gif" },
        { name: "Bentover Barbell Rowing (3×15)", gif: "BRow.gif" },
        { name: "Shrugs (3×15)", gif: "shrugs.gif" },
        { name: "Seated Rows (3×15)", gif: "SROWS.gif" },
        { name: "Ez Bar Bicep Curl (3×15)", gif: "EZCurl.gif" },
        { name: "Rear Dealts Fly (3*15)", gif: "Rev_pec_fly.gif" },

        { name: "Hammer Curl (3×15)", gif: "HCurl.gif" },
      ],
    },
    {
      day: "Day 6",
      name: "Legs",
      exercises: [
        { name: "Bulgarian Split Squats (2×15)", gif: "BSQ.gif" },
        { name: "Leg Extensions (3×15)", gif: "LExtension.gif" },
        { name: "Leg Curls (3×15)", gif: "lc.gif" },
        { name: "Leg Press (3×15)", gif: "LPress.gif" },
        { name: "Seated Calf Raises (3×15)", gif: "Craises.gif" },
      ],
    },
    {
      day: "Day 7",
      name: "Rest",
      exercises: [{ name: "Recovery & Stretching", gif: "Rest02.gif" }],
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/AtEaseFit/BGAtease.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <Navigation />
      <div className="relative flex flex-col items-center flex-grow px-10 py-16 w-full">
        <div className="bg-black/80 text-white p-12 rounded-2xl shadow-xl w-full max-w-6xl">
          <h1 className="text-4xl font-bold text-center">
            6-Days Workout Split
          </h1>
          <motion.div
            className="mt-8 space-y-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {workoutPlan.map((workout, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/70 p-6 rounded-lg shadow-lg w-full cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() =>
                  setSelectedDay(selectedDay === index ? null : index)
                }
              >
                <h2 className="text-2xl font-semibold text-center">
                  {workout.day}: {workout.name}
                </h2>
                {selectedDay === index && (
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 place-items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {workout.exercises.map((exercise, i) => (
                      <motion.div
                        key={i}
                        className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md"
                        initial={{ opacity: 0, rotateY: 90 }}
                        whileInView={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: 90 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img
                          src={`/AtEaseFit/workouts/${exercise.gif}`}
                          alt={exercise.name}
                          className="w-full max-w-xs h-auto rounded-lg object-cover"
                        />
                        <p className="text-lg mt-3 text-center">
                          {exercise.name}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
