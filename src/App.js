import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Alumni from "./Components/Alumni";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AlumniProfile from "./Components/AlumniProfile";
import LoadingBar from "react-top-loading-bar";
import { useState} from "react";
import { Alert } from "./Components/Alert";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      massage,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // progess or loding bar
  const [progress, setProgress] = useState(0);
  const setProg = (progress) => {
    setProgress(progress);
  };

  return (
    <div>
       <Router>
        <Alert alert={alert} />
        <LoadingBar color="#f11946" progress={progress} />

        <Routes>
          <Route exact path="/" element={<Home setProgress={setProg}/>} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
          <Route exact path="/Login" element={<Login showAlert={showAlert} />} />
          <Route exact path="/alumni" element={ <Alumni showAlert={showAlert} setProgress={setProg} />}/>
          <Route exact path={"/alumni/:id"} element={<AlumniProfile showAlert={showAlert} setProgress={setProg}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
