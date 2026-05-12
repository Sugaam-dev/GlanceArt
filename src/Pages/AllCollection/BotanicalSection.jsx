import React from 'react';
import './BotanicalSection.css'; 
// Note: Ensure you have linked the Playfair Display font globally

const BotanicalSection = () => {
    return (
        // New container class to handle the full-screen centering and background
        <div className="full-screen-center-wrapper"> 
            <div className="botanical-art-section-wrapper">
                <h1 className="section-title-gold-effect">BOTANICAL ART PRINTS</h1>
                <p className="introductory-text-description">
                    Bring nature indoors with museum-quality botanical wall art. From delicate floral illustrations to lush leaf prints
                    and vintage botanical sketches, our curated collection celebrates the timeless beauty of plants and flowers—
                    perfect for creating serene, organic spaces.
                </p>
                <div className="section-separator-line"></div>
            </div>
        </div>
    );
};

export default BotanicalSection;