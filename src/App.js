import React from "react";
import Navbar from "./Navbar";
import Home from "./Home"
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-container">
          <div className="left">
            <Navbar />
          </div>
          <div className="right">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <footer>
              <p>Made with ❤️ by Dhruvi</p>
            </footer>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
};

export default App;