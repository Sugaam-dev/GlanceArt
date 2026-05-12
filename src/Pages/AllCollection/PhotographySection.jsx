import React from 'react';
import './PhotographySection.css'; 

const PhotographySection = () => {
    return (
        /* Full-screen centering wrapper unique to photography */
        <div className="photo-viewport-center-container"> 
            <div className="photography-art-content-wrapper">
                <h1 className="photo-title-accent-style">PHOTOGRAPHY ART PRINTS</h1>
                <p className="photo-introductory-paragraph">
                    Capture life's moments with museum-quality photography wall art. 
                    From breathtaking landscapes and intimate portraits to architectural 
                    beauty and street photography, our curated collection showcases the 
                    artistry of the lens.
                </p>
                <div className="photo-bottom-separator-divider"></div>
            </div>
        </div>
    );
};

export default PhotographySection;