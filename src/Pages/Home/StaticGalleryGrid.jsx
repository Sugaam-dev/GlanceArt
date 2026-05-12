import React from 'react';
import { Link } from "react-router-dom";
import './StaticGalleryGrid.css';

// Using the first 6 items from your expanded data set for the 3x2 grid
const gallerySetsData = [
  // ROW 1 (3 items)
  { imagePath: '/assets/images/StaticGallary1.webp', title: 'RUSTICO ROMANCE', price: '1,547.00', link: '#soft-expressions', discount: '15% OFF' },
  { imagePath: '/assets/images/StaticGallary2.webp', title: 'SOLARA', price: '1,143.00', link: '#sunlit-stories', discount: '15% OFF' },
  { imagePath: '/assets/images/StaticGallary3.webp', title: 'POSITANO BEACH', price: '1,999.00', link: '#golden-hour', discount: '10% OFF' },
  // ROW 2 (3 items)
  { imagePath: '/assets/images/StaticGallary4.webp', title: 'GELATO', price: '1,000.00', link: '#monochrome', discount: '20% OFF' },
  { imagePath: '/assets/images/StaticGallary5.webp', title: 'APEROL SPRITZ', price: '1,000.00', link: '#new-collection-3-1', discount: '10% OFF' },
  { imagePath: '/assets/images/StaticGallary6.webp', title: 'CAPRI', price: '1,500.00', link: '#new-collection-3-2', discount: '10% OFF' },
];

const StaticGalleryGrid = () => {
  return (
    <section className="static-grid-section">
      <div className="static-grid-header">
        <h2 className="static-grid-heading">AESTHETIC WALL ART</h2>
        <p className="static-grid-sub-heading">Transform your space with our expertly curated wall art sets</p>
      </div>

      <div className="static-grid-container">
        
        {/* The Grid Wrapper: Uses CSS Grid for perfect 3-column layout */}
        <div className="static-grid-wrapper">
          {gallerySetsData.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              className="static-grid-item-link"
            >
              <div className="static-grid-item-card">
                
                {/* Image Container with Discount Tag */}
                <div className="static-grid-image-container">
                  <img 
                    src={item.imagePath} 
                    alt={item.title} 
                    className="static-grid-card-image" 
                  />
                  <span className="static-grid-discount-tag">{item.discount}</span>
                </div>

                {/* Text Content */}
                <div className="static-grid-card-details">
                  <h3 className="static-grid-card-title">{item.title}</h3>
                  <p className="static-grid-card-price">Starting from <span className="static-grid-price-value">Rs. {item.price}</span></p>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
      
      <div className="static-grid-cta-container">
         <Link to="/collections" onClick={() => window.scrollTo(0, 0)}>
              <button className="static-grid-view-all-sets-button">VIEW ALL SETS</button>
          </Link>
      </div>
    </section>
  );
};

export default StaticGalleryGrid;