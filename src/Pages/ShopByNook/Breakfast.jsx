import React from 'react';
import './Breakfast.css';
import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";
// Replace with your actual breakfast-themed image path
import breakfastHero from '/assets/images/aboutUsHeroImg.jpeg'; 

const Breakfast = () => {
  return (
    <div className="bk-page-wrapper">
      {/* Hero Section */}
      <section id="breakfast-section" className="bk-hero-container">
        <div className="bk-image-wrapper">
          <img 
            src={breakfastHero} 
            alt="Breakfast Nook Wall Art" 
            className="bk-hero-img" 
          />
        </div>

        {/* Floating Content Card */}
        <div className="bk-content-card">
          <div className="bk-new-badge">
            <span className="bk-badge-text">New Arrival</span>
          </div>
          
          <h1 className="bk-headline">
            CREATE YOUR PERFECT <br /> 
            READING & BREAKFAST SPACE
          </h1>
          
          <p className="bk-description">
            Transform your reading nook or breakfast corner into a cozy retreat 
            with stylish wall art. Discover designs that bring charm, comfort, 
            and personality to your favorite morning spot. Shop now for the 
            perfect touch!
          </p>
        </div>
      </section>

      {/* Product Grid Section */}
      <div className="bk-products-section">
        <ProductFilterSection category="New" />
      </div>
    </div>
  );
};

export default Breakfast;