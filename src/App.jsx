import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/tailwind.css";
import Signin from "./components/Signin";

function App() {
  return (
   <Router>
    <Routes>
    <Route path="/AtEaseFit/" element={<Home/>}/>
    <Route path="/Signin" element={<Signin/>} />
    </Routes>
   </Router>
  );
}

export default App;
