import React from 'react';
import { Link } from "react-router-dom";
import './ProductShowcaseGrid.css';

const showcaseData = [
  {
    imagePath: '/assets/images/ProductShowcaseGrid1.webp', // Placeholder for the left image
    altText: 'Modern abstract art print',
    overlayText: 'Best Sellers',
    link: '#bestsellers'
  },
  {
    imagePath: '/assets/images/ProductShowcaseGrid2.webp', // Placeholder for the right image
    altText: 'Edward Hopper framed print',
    overlayText: 'Trending Now',
    link: '#trending'
  },
];

const ProductShowcaseGrid = () => {
  return (
    <section className="product-showcase-section">

         {/* 2. New CTA Section (EXPLORE OUR WORLD OF WALL ART) */}
      <div className="showcase-cta-block">
        <h2 className="cta-heading">Explore Modern Wall Art at Glance Art</h2>
        <div className="cta-underline"></div>
        <p className="cta-subtext">
          Whether you're browsing by style or shopping by nook, we've got curated collections 
          for every space.
        </p>
        
        <div className="cta-button-group">
          {/* <button className="cta-button black-button">Shop All Collections</button>
          <button className="cta-button gold-button">Shop by Nook</button> */}
          <Link to="/collections" onClick={() => window.scrollTo(0, 0)}>
          <button className="cta-button black-button">Shop All Collections</button>
        </Link>
        <Link to="/shop-by-nook" onClick={() => window.scrollTo(0, 0)}>
          <button className="cta-button gold-button">Style your Space</button>
        </Link>
        </div>
      </div>
      
      
      {/* 1. Main 2-Column Showcase Grid */}
      <div className="showcase-grid-container">
        
        {showcaseData.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className="showcase-card-link"
          >
            <div className="showcase-card">
              
              {/* Image with Zoom Animation */}
              <div className="showcase-image-wrapper">
                <img 
                  src={item.imagePath} 
                  alt={item.altText} 
                  className="showcase-card-img" 
                />
              </div>

              {/* Overlay Text/Button */}
              <button className="showcase-overlay-button">
                {item.overlayText}
              </button>
              
            </div>
          </a>
        ))}

      </div>

      

    </section>
  );
};

export default ProductShowcaseGrid;