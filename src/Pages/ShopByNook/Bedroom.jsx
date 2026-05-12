

import React from 'react';
import './Bedroom.css';
import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";
import bedroomHero from '/assets/images/bedroom-hero.webp'; 

const Bedroom = () => {
  return (
    <div className="bd-page-container">
      {/* Hero Section */}
      <section id="bedroom-section" className="bd-hero-main-container">
        <div className="bd-image-wrapper">
          <img 
            src={bedroomHero} 
            alt="Bedroom Wall Art" 
            className="bd-background-img" 
          />
        </div>

        <div className="bd-content-card">
          <div className="bd-trending-badge">
            <span className="bd-badge-text">Trending</span>
          </div>
          <h1 className="bd-headline">
            WALL ART FOR BEDROOMS <br /> 
            THAT FEELS LIKE A HUG
          </h1>
          <p className="bd-body-description">
            Transform your bedroom into a restful sanctuary with our 
            curated wall art collection...
          </p>
        </div>
      </section>

      {/* Product Cards Section - now positioned below */}
      <div className="bd-product-list-container">
        <ProductFilterSection category="New" />
      </div>
    </div>
  );
};

export default Bedroom;