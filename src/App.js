import React, { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Introduce from "./components/Introduce";
import Warning from "./components/Warning";
import Join from "./components/Join";

function App() {
  useEffect(() => {
    // Function to create a snowflake
    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * 100}vw`;
      document.body.appendChild(snowflake);

      // Remove the snowflake after it falls out of the viewport
      snowflake.addEventListener("animationend", () => {
        snowflake.remove();
      });
    };

    // Generate snowflakes at intervals
    const snowfallInterval = setInterval(createSnowflake, 400);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(snowfallInterval);
  }, []); // Empty dependency array to run the effect only once


  return (
    <div className="container">
      <Hero />
      <Introduce />
      <Warning />
      <Join />
    </div>
  );
}

export default App;
