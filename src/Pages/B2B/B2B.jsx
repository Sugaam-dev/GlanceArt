import React from 'react';
import './B2B.css';
// Import your local B2B/Architects image here
import b2bHero from '/assets/images/b2b-hero.webp'; 

const B2B = () => {
  return (
    <div className="b2b-page-wrapper">
      {/* Hero Section */}
      <section id="b2b-section" className="b2b-hero-container">
        <div className="b2b-image-wrapper">
          <img 
            src={b2bHero} 
            alt="Architects and Interior Designers" 
            className="b2b-hero-img" 
          />
        </div>

        {/* Centered Overlay Text */}
        <div className="b2b-overlay-content">
          <h1 className="b2b-headline">
            ARCHITECTS & INTERIOR DESIGNERS
          </h1>
          <p className="b2b-subheadline">
            Bring your projects to life with our vibrant wall art prints
          </p>
        </div>
      </section>

      {/* Optional: You can add a Contact Form or Info Section here */}
    </div>
  );
};

export default B2B;