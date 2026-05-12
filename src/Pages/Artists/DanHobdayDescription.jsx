import React from 'react';
import './DanHobdayDescription.css';

const DanHobdayDescription = () => {
  return (
    <div className="hobday-container">
      <div className="hobday-content-wrapper">
        {/* Left Side: Lifestyle Image */}
        <div className="hobday-image-section">
          <img 
            src="/assets/images/dan-hobday-hero.webp" 
            alt="Timeless Minimalism by Dan Hobday" 
            className="lifestyle-img"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="hobday-text-section">
          <span className="best-seller-badge">BEST SELLER</span>
          <h2 className="hobday-title">
            TIMELESS <br />
            MINIMALISM BY <br />
            DAN HOBDAY
          </h2>
          <p className="hobday-description">
            Discover the best-selling art prints by Dan Hobday — celebrated 
            for his serene lines, abstract forms, and calming palettes. 
            Perfect for modern, minimalist homes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DanHobdayDescription;