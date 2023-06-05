// import logo from './logo.svg';
import React, { useState } from 'react'
// import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// let name = "Tushar";
function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }

  // let removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  // }

  const toggleMode = (cls) => {
    // console.log(cls);
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#171718';
      showAlert('Dark Mode has been enabled', "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils - You are mad';
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'TextUtils - You are not mad';
      // }, 2300);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar title="Tushar" aboutText="About Us"/> */}
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} mode={mode}/>
        <div className="container">
        <Routes>
          <Route exact path="/about" element = {<About mode={mode} />}> {/*This is syntax for new version*/}
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below:" />}>
          </Route>
        </Routes>
        </div>
        </Router>
    </>
  );
}

export default App;
