import React from 'react';
import './EleanorBakerDescription.css';

const EleanorBakerDescription = () => {
  return (
    <div className="eleanor-container">
      <div className="eleanor-content-wrapper">
        {/* Left Side: Artist Artwork/Lifestyle Image */}
        <div className="eleanor-image-section">
          <img 
            src="/assets/images/eleanor-baker-hero.webp" 
            alt="The World of Eleanor Baker" 
            className="eleanor-lifestyle-img"
          />
        </div>

        {/* Right Side: Featured Artist Content */}
        <div className="eleanor-text-section">
          <span className="featured-artist-badge">FEATURED ARTIST</span>
          <h2 className="eleanor-title">
            DISCOVER THE <br />
            WORLD OF <br />
            ELEANOR BAKER
          </h2>
          <p className="eleanor-description">
            Soft palettes, moody skies, and interiors full of emotion. Eleanor 
            Baker’s paintings feel like a warm conversation — reflective, 
            romantic, and beautifully still. Perfect for serene spaces and 
            soulful homes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EleanorBakerDescription;