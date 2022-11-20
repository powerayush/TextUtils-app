import logo from './logo.svg';
import Navbar from "./components/Navbar";
 import TextForm from "./components/TextForm";
import "./App.css";
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Alert from "./components/Alert";

import About from "./components/About";
import BarChart from "./components/BarChart";



function App() {
  const [mode, setDarkMode] = useState('dark')
  const [alert, setAlert] = useState(null);
  const showAlert = function(message,type) {
    setAlert({
      message:message,
      type: type
    })

  }
  const toggleMode = () =>{
    if(mode == "light") {
      setDarkMode('dark')
      document.body.style.backgroundColor = "grey"
      showAlert("This is dark mode ","success")
      document.title = "TextUtils -  Dark Mode"
      // setInterval(() => {
      //   document.title = ' This is amzing'
      // }, 3000);
      // setInterval(() => {
      //   document.title = ' This is amzing 3456'
      // }, 2000);


    } else {
      setDarkMode('light')
      document.body.style.backgroundColor= "white"
      showAlert("This is light mode","success")
      document.title = "TextUtils -  Light Mode"
    }
    setTimeout(()=>{
      setAlert(null)

    }, 1000)
  }
  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <Switch>
          <Route exact path="/ab">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm heading="Please type your text here" mode={mode}/>
          </Route>
        </Switch>
      
    </Router>
      
    </>
  );
}

export default App;
