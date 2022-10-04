import { useState } from "react";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import About from "./Components/About";
import "./Style.css";
import { Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1700);
  };
  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtilizer - LightMode";
      showalert("light mode has been enabled", "primary");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#121212";
      showalert("dark mode has been enabled", "dark");
      document.title = "TextUtilizer - DarkMode";
    }
  };
  //   const colorPicker = (hexa_code) =>{

  // document.body.style.backgroundColor = "red";

  //   }
  return (
    <>
      <Router>
        <Navbar title="TextUtilizer" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Textform heading="Enter the text to analyze below" showalert={showalert} mode={mode}/>}/>
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
