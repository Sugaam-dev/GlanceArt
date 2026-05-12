

import React from 'react';
import './LivingRoom.css';
import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";
import heroImage from '/assets/images/living-room-hero.webp'; 

const LivingRoom = () => {
  return (
    <div className="lrv-outer-container">
      <div id="living-room-section" className="lrv-hero-wrapper">
        
        {/* Image contained in its own div to act as a background */}
        <div className="lrv-image-container">
          <img 
            src={heroImage} 
            alt="Modern Living Room Art" 
            className="lrv-background-img" 
          />
        </div>

        {/* Floating Content Card */}
        <div className="lrv-floating-card">
          <div className="lrv-badge">
            <span className="lrv-star">★</span>
            Best Selling Collection
          </div>
          
          <h1 className="lrv-title">
            ART THAT MAKES YOUR <br /> 
            LIVING ROOM FEEL LIKE HOME
          </h1>
          
          <p className="lrv-desc">
            Discover curated wall art made for modern Indian living rooms. 
            From bold canvas paintings to framed prints, explore styles 
            that spark joy, start conversations, and reflect your personal aesthetic.
          </p>
        </div>

      </div>
        <ProductFilterSection 
       category="New"
       />
    </div>
  );
};

export default LivingRoom;