

import React from 'react';
import './FeatureGrid.css';

const featuresData = [
  {
    title: 'PREMIUM PAPER & CANVAS',
    description: 'Museum-quality prints that stand the test of time',
    imagePath: '/assets/images/feature-img1.webp' 
  },
  {
    title: 'PREMIUM FRAME OPTIONS',
    description: 'Black, White, Wooden & more',
    imagePath: '/assets/images/feature-img2.webp'
  },
  {
    title: '1000+ HAPPY REVIEWS',
    description: 'Loved by art lovers across India',
    imagePath: '/assets/images/feature-img3.webp'
  },
  {
    title: 'SAFE & SECURE SHIPPING',
    description: 'Delivered with care, from our studio to your door',
    imagePath: '/assets/images/feature-img4.webp'
  },
];

const FeatureGrid = () => {
  return (
    <section className="feature-grid-section">
      {/* Outer wrapper matches the design diagram */}
      <div className="feature-grid-container">
        {featuresData.map((feature, index) => (
          // Individual Card
          <div key={index} className="feature-card">
            
            {/* Left Side: Image/Icon Wrapper */}
            <div className="feature-card-image-wrapper">
                <img 
                    src={feature.imagePath} 
                    alt={feature.title} 
                    className="feature-card-img" 
                />
            </div>
            
            {/* Right Side: Text Content */}
            <div className="feature-card-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;