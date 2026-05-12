import React from 'react';
import './LandscapeSection.css';

/**
 * LandscapeSection Component
 * Featuring a split-screen design: 
 * Left: Visual imagery | Right: Typography and badge
 */
const LandscapeSection = () => {
  return (
    <section className="landscape-layout-root">
      <div className="landscape-flex-container">
        
        {/* Visual Side */}
        <div className="landscape-visual-column">
          <img 
            src="/assets/images/landscape-img.webp" 
            alt="Minimalist landscape painting in a modern interior" 
            className="landscape-main-image"
          />
        </div>

        {/* Textual Side */}
        <div className="landscape-info-column">
          <div className="landscape-text-content">
            <span className="landscape-pill-badge">CURATED COLLECTION</span>
            
            <h1 className="landscape-header-italic">
              LANDSCAPE ART <br /> PRINTS
            </h1>
            
            <p className="landscape-body-description">
              Capture nature's majesty with museum-quality landscape photography 
              and scenic art. From serene horizons to dramatic vistas, our 
              curated collection brings the beauty of the outdoors inside—perfect 
              for creating calm, inspiring spaces.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LandscapeSection;