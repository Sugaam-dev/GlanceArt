import React from 'react';
import './MatisseDescription.css';

const MatisseDescription = () => {
  return (
    <div className="matisse-desc-wrapper">
      <div className="matisse-content">
        <h2 className="matisse-title">
          BRING THE BRILLIANCE OF HENRI MATISSE INTO YOUR SPACE WITH <br />
          <span className="matisse-subtitle">OUR EXCLUSIVE COLLECTION OF WALL ART PRINTS</span>
        </h2>
        
        <p className="matisse-body">
          Its Inspired by the master of Fauvism, these prints capture the bold colors, 
          fluid shapes, and artistic spontaneity that define Matisse’s iconic style. 
          Perfect for modern and minimalist interiors, each print is crafted with 
          premium-quality materials to ensure lasting beauty. Elevate your home or 
          office décor with the timeless charm of Matisse wall art.
        </p>
        
        <div className="matisse-footer">
          <a href="/" className="matisse-link">
            Back To Home Page For More Wall Art Prints.
          </a>
        </div>
      </div>
    </div>
  );
};

export default MatisseDescription;