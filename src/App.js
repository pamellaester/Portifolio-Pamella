// import logo from './logo.svg';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./Pages /Home/Home";
import About from "./Pages /About/About";
import Work from "./Pages /Projects/Work";
import Contact from "./Pages /Contact/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="floating-element"></div>
      <Navbar />
      <Routes>
        <Route path="/Portifolio-Pamella" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
