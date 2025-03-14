import { motion } from "framer-motion";

export default function WorkoutSplit({ onBack }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg md:max-w-2xl lg:max-w-4xl flex flex-col items-center"
    >
      <h2 className="text-xl font-bold text-gray-800 text-center">Workout Split Routine</h2>
      <p className="text-gray-600 text-sm text-center">A structured plan for your weekly training.</p>

      {/* Grid Layout for Workout Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 w-full">
        <div className="p-4 bg-green-100 rounded-lg shadow-md">
          <h3 className="text-green-600 font-semibold">Push Day</h3>
          <ul className="list-disc ml-4 text-sm text-gray-700">
            <li>Push Ups</li>
            <li>Incline Bench Press</li>
            <li>Cable Flys</li>
            <li>Barbell Overhead Press</li>
            <li>Dumbbell Lateral Raise</li>
            <li>Skull Crusher</li>
            <li>Dips</li>
          </ul>
        </div>

        <div className="p-4 bg-blue-100 rounded-lg shadow-md">
          <h3 className="text-blue-600 font-semibold">Pull Day</h3>
          <ul className="list-disc ml-4 text-sm text-gray-700">
            <li>Pull Ups</li>
            <li>Lat Pull Down</li>
            <li>Barbell Rowing</li>
            <li>Deadlift</li>
            <li>Face Pull</li>
            <li>Seated Dumbbell Curl</li>
            <li>Hammer Curl</li>
          </ul>
        </div>

        <div className="p-4 bg-purple-100 rounded-lg shadow-md">
          <h3 className="text-purple-600 font-semibold">Leg Day</h3>
          <ul className="list-disc ml-4 text-sm text-gray-700">
            <li>Free Squats</li>
            <li>Weighted Squats</li>
            <li>Lunges</li>
            <li>Romanian Lift</li>
            <li>Glute Extensions</li>
            <li>Calf Raises</li>
            <li>Jump Ropes</li>
          </ul>
        </div>
      </div>

      {/* Back Button */}
      <motion.button 
        whileTap={{ scale: 0.95 }} 
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.2 }}
        onClick={onBack} 
        className="mt-6 px-5 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition text-sm"
      >
        Back
      </motion.button>
    </motion.div>
  );
}