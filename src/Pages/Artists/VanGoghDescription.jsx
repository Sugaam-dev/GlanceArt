import React from 'react';
import './VanGoghDescription.css';

const VanGoghDescription = () => {
  return (
    <div className="artist-description-container">
      <div className="artist-description-box">
        <h2 className="desc-title">
          TRANSFORM YOUR SPACE WITH THE BREATHTAKING BEAUTY OF <br />
          <span className="highlight-text">VINCENT VAN GOGH WALL ART POSTERS</span>
        </h2>
        
        <p className="desc-text">
          Featuring his iconic brushstrokes, rich textures, and vivid colors, these 
          wall art posters bring the essence of Van Gogh's artistry into your home. 
          Whether you admire <i>Starry Night</i>, <i>Sunflowers</i>, or <i>The Café Terrace at Night</i>, 
          our high-quality prints ensure every detail is captured to perfection. 
          Elevate your décor with the timeless charm of Van Gogh's masterpieces.
        </p>
        
        <div className="desc-footer">
          <a href="/" className="desc-link">
            Back To Home Page For More Wall Art Posters
          </a>
        </div>
      </div>
    </div>
  );
};

export default VanGoghDescription;