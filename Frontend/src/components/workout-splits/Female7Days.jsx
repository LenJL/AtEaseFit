import React, { useState } from "react";
import Navigation from "../NavigationBar";
import { motion } from "framer-motion";

export default function Female7Days() {
  const [selectedDay, setSelectedDay] = useState(null);

  const workoutPlan = [
    {
      day: "Day 1",
      name: "Push (Chest, Shoulders, Triceps)",
      exercises: [
        { name: "Incline Dumbbell Press (3×15)", gif: "IdPress.gif" },
        { name: "Seated Dumbbell Shoulder Press (3×15)", gif: "SPress.gif" },
        { name: "Straight Bar Tricep Pushdown (3×15)", gif: "TPulldown.gif" },
        { name: "Rope Pushdown (3×15)", gif: "TRope.gif" },
        { name: "Lateral Raises (3×15)", gif: "Lraises.gif" },
      ],
    },
    {
      day: "Day 2",
      name: "Leg & Abs (Quads Focus)",
      exercises: [
        { name: "Hanging Leg Raises (3×15)", gif: "leg_raises.gif" },
        { name: "Bodyweight Squats (2×20)", gif: "sqts.gif" },
        { name: "Barbell Back Squat (3×15)", gif: "BSqts.gif" },
        { name: "Leg Curls (3×15)", gif: "lc.gif" },
        { name: "Leg Extension (3×15)", gif: "LExtension.gif" },
        { name: "Leg Press (3×15)", gif: "LPress.gif" },
        { name: "Seated Calf Raises (3×15)", gif: "Craises.gif" },
        { name: "Machine Crunches (3×15)", gif: "crunches.gif" },
      ],
    },
    {
      day: "Day 3",
      name: "Pull (Back & Biceps)",
      exercises: [
        { name: "Lat Pulldown (3×15)", gif: "LpDowns.gif" },
        { name: "Seated Rows (3×15)", gif: "SROWS.gif" },
        { name: "Bent-Over Dumbbell Rows (3×15)", gif: "BRow.gif" },
        { name: "Dumbbell Bicep Curls (3×15)", gif: "DBCurl.gif" },
        { name: "Rear Dealts Fly (3*15)", gif: "Rev_pec_fly.gif" },

        { name: "Preacher Curls (3×15)", gif: "preacher.gif" },
      ],
    },
    {
      day: "Day 4",
      name: "Glutes & Hamstrings",
      exercises: [
        { name: "Bulgarian Split Squats (3×15)", gif: "BSQ.gif" },
        { name: "Barbell Hip Thrusts (3×15)", gif: "BHipThrust.gif" },
        { name: "Romanian Deadlifts (3×15)", gif: "RDL.gif" },
        { name: "Glute Cable Kickbacks (3×15)", gif: "GKickback.gif" },
        { name: "Leg Curls (3×15)", gif: "lc.gif" },
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
        { name: "Pull-Ups or Assisted Pull-Ups (3×10)", gif: "Plups.gif" },
        { name: "Kettlebell Swings (3×15)", gif: "kettlebell-swings.gif" },
        { name: "Hanging Leg Raises (3×15)", gif: "leg_raises.gif" },
        { name: "Bicycle Crunches (3×20)", gif: "bicycle-crunches.gif" },
        { name: "Plank Hold (3×30 sec)", gif: "plank.gif" },
      ],
    },
    {
      day: "Day 6",
      name: "Glutes & Calves",
      exercises: [
        { name: "Jump Ropes", gif: "JR.gif" },

        { name: "Sumo Deadlifts (3×12)", gif: "sumo-deadlifts.gif" },
        { name: "Hip Thrusts (3×15)", gif: "BHipThrust.gif" },
        {
          name: "Cable Glute Kickbacks (3×15)",
          gif: "GKickback.gif",
        },
        {
          name: "Standing Calf Raises (3×15)",
          gif: "standing-calf-raises.gif",
        },
      ],
    },
    {
      day: "Day 7",
      name: "Cardio & Abs",
      exercises: [
        {
          name: "Light Intensity Cardio (20-30 mins)",
          gif: "walking.gif",
        },
        { name: "Hanging Leg Raises (3*15)", gif: "leg_raises.gif" },
        { name: "Machine Crunches (3*15)", gif: "crunches.gif" },
        { name: "Plank (Hold 40-60 secs * 2)", gif: "plank.gif" },
        { name: "Russian Twists (3×20)", gif: "russian-twists.gif" },
        { name: "Decline Sit-Ups (3×15)", gif: "decline-sit-ups.gif" },
      ],
    },
  ];

  const exerciseVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, rotateY: -90, transition: { duration: 0.5 } },
  };

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
            7-Days Workout Split
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
