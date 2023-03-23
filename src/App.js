import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Alumni from "./Components/Alumni";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AlumniProfile from "./Components/AlumniProfile"

function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/alumni" element={<Alumni/>}/>
          <Route path="/AlumniProfile" element={<AlumniProfile/>}/>
   
      </Routes>
      </Router>
    </div>
  ); 
}

export default App;
