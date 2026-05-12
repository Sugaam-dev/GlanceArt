import React from 'react';
import { Link } from 'react-router-dom';
import './TradeBenefitsCard.css';

// Assuming your image is accessible in the public folder 
// as you confirmed in the previous turn.
const tradeImg = "/assets/images/TradeBenifitImg.webp"; 
// Note: If you want to use the specific image from the previous context, 
// you would use the correct file name, e.g., 'TradeBenefiting.webp' or similar.
// For this general structure, we'll use a placeholder variable.

const TradeBenefitsCard = () => {
  return (
    // The main wrapper centers the content and adds overall styling (shadow/border-radius)
    <div className="trade_card_wrapper">
      <div className="trade_container">
        
        {/* Left Section: Image */}
        <div className="trade_image_section">
          {/*  */}
          <img 
            src={tradeImg} 
            alt="Interior design with modern abstract art and leather sofa" 
            className="trade_image"
          />
        </div>

        {/* Right Section: Content */}
        <div className="trade_content_section">
          <h2 className="trade_heading">
            TRADE BENEFITS FOR DESIGNERS & ARCHITECTS
          </h2>

          <p className="trade_paragraph">
            Get exclusive B2B discounts, custom sizing, and early access to new collections. 
            Whether it's a villa, café, or office — our art brings your vision to life.
          </p>

          <Link to="/living-room" onClick={() => window.scrollTo(0, 0)}>
          <button className="trade_button">
            Explore Wholesale Program &nbsp; &rarr;
          </button>
          ,</Link>
        </div>
      </div>
    </div>
  );
};

export default TradeBenefitsCard;