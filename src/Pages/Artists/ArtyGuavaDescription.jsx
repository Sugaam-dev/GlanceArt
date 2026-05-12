import React from 'react';
import './ArtyGuavaDescription.css';

const ArtyGuavaDescription = () => {
  return (
    <div className="arty-container">
      <div className="arty-content-wrapper">
        {/* Left Side: Arty Guava Artwork/Lifestyle Image */}
        <div className="arty-image-section">
          <img 
            src="/assets/images/ArtyGuavaHero.webp" 
            alt="Vibrant Wall Art by Arty Guava" 
            className="arty-lifestyle-img"
          />
        </div>

        {/* Right Side: Bestseller Content */}
        <div className="arty-text-section">
          <span className="bestseller-badge">BESTSELLER</span>
          <h2 className="arty-title">
            VIBRANT WALL <br />
            ART BY ARTY <br />
            GUAVA
          </h2>
          <p className="arty-description">
            Bold, joyful, and unapologetically modern — Arty Guava's 
            artwork brings a burst of personality to any space. From vibrant 
            florals to expressive portraits, this collection celebrates art that 
            radiates color and confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtyGuavaDescription;