import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to Creepy Toilets </h1>
        <p>Discover and share the world's creepiest, most unsettling toilet experiences.</p>
        <div className="landing-buttons">
          <button className="btn explore-btn">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
