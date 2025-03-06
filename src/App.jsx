import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/tailwind.css";
import Signin from "./components/Signin";
import WorkoutSpiltNav from "./components/WorkoutSpiltNav";
import  Tracker  from "./components/Tracker";

function App() {
  return (
   <Router>
    <Routes>
    <Route path="/AtEaseFit/" element={<Home/>}/>
    <Route path="/Signin" element={<Signin/>} />
    <Route path="/WorkoutSpiltNav"element={<WorkoutSpiltNav/>}/>
    <Route path="/Tracker"element={<Tracker/>}/>
    
    </Routes>
   </Router>
  );
}

export default App;
