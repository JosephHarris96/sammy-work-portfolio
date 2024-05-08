import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Work from "../src/components/Work/Work";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

// import Navbar from "./components/Navbar/Navbar";

function Dot({ top, left }) {
  const dotStyle = {
    top: `${top}px`,
    left: `${left}px`
  };

  return <div className="orange-dot" style={dotStyle}></div>;
}

function App() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const numDots = 10;
    const newDots = [];

    for (let i = 0; i < numDots; i++) {
      const top = Math.random() * window.innerHeight;
      const left = Math.random() * window.innerWidth;
      newDots.push({ top, left });
    }

    setDots(newDots);
  }, []);

  return (
    <div className="app-container">
      <div className="orange-circles">
        {/* <Navbar/> */}
      <Header />
      <About />
      
        {dots.map((dot, index) => (
          <Dot key={index} top={dot.top} left={dot.left} />
        ))}
      <Work />
      <Contact/>
      <Footer />
      </div>
    </div>
  );
}

export default App;
