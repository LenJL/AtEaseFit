import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/tailwind.css";
import Signin from "./components/Signin";
import WorkoutSpiltNav from "./components/WorkoutSpiltNav";
import Tracker from "./components/Tracker";
import Male3Days from "./components/workout-splits/Male3Days";
import Male4Days from "./components/workout-splits/Male4Days";
import Male5Days from "./components/workout-splits/Male5Days";
import Male6Days from "./components/workout-splits/Male6Days";
import Male7Days from "./components/workout-splits/Male7Days";
import Female3Days from "./components/workout-splits/Female3Days";
import Female4Days from "./components/workout-splits/Female4Days";
import Female5Days from "./components/workout-splits/Female5Days";
import Female6Days from "./components/workout-splits/Female6Days";
import Female7Days from "./components/workout-splits/Female7Days";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/AtEaseFit/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/WorkoutSpiltNav" element={<WorkoutSpiltNav />} />
        <Route path="/Tracker" element={<Tracker />} />
        <Route path="/workout-split" element={<WorkoutSpiltNav />} />

        <Route path="/workout-split/male-3" element={<Male3Days />} />
        <Route path="/workout-split/male-4" element={<Male4Days />} />
        <Route path="/workout-split/male-5" element={<Male5Days />} />
        <Route path="/workout-split/male-6" element={<Male6Days />} />
        <Route path="/workout-split/male-7" element={<Male7Days />} />
        <Route path="/workout-split/female-3" element={<Female3Days />} />
        <Route path="/workout-split/female-4" element={<Female4Days />} />
        <Route path="/workout-split/female-5" element={<Female5Days />} />
        <Route path="/workout-split/female-6" element={<Female6Days />} />
        <Route path="/workout-split/female-7" element={<Female7Days />} />
      </Routes>
    </Router>
  );
}

export default App;
