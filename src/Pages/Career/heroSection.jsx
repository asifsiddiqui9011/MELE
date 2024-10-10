import React from 'react';
import careerImg from './careerImg.jpg'; // Ensure this is the correct path
import './heroSection.css'; // Import the CSS file

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={careerImg} alt="Career" className="hero-image" />
      <div className="hero-overlay">
        <h1>Join Our Team</h1>
        <p>Be part of an exciting journey to innovate and make a difference.</p>
      </div>
    </div>
  );
}

export default HeroSection;
