import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const key='mode';
  const value=localStorage.getItem(key)
  const[mode,setMode]=useState(()=>{
    if (value==='light'|| value===null) {
      return 'dark'
    }
    return 'light'
  }) // Set initial mode to "light" if no value found in local storage
  const[color,setcolor]=useState("black") // Set initial color to "black" if no value found in local storage

  document.body.style.backgroundColor=value==='dark'?'black':'white'

  const darkmode=(e)=>{
    e.preventDefault()
    if (mode==='light') {
      setMode("dark")
      document.body.style.backgroundColor="white"
      setcolor('black')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='black' 
      setcolor('white')
    }
    localStorage.setItem("mode",mode)
  }
  return (
    <>
      <Router>
        <Header mode={mode} darkmode={darkmode}/>
        <Routes>
          <Route exact path="/projects" element={<Projects color={color} mode={mode}/>}/>
          <Route exact path="/" element={<Main color={color} mode={mode}/>}/>
          <Route exact path="/about" element={<About color={color} mode={mode}/>}/>
          <Route exact path="/contact" element={<Contact color={color} mode={mode}/>}/>
        </Routes>
        <Footer mode={mode}/>
      </Router>
    </>
  );
}

export default App;
