import React from "react";
import "./Landing.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>CREEPY TOILETS</h1>
        <p>Discover and share the world's creepiest, most unsettling toilet experiences.</p>
        <div className="landing-buttons">
          <button className="btn explore-btn">
            Explore <span className="arrow"><FontAwesomeIcon icon={faArrowRight} /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;