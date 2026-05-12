

import React, { useState } from 'react';
import './GallerySlider.css';

// Combined data structure for the slider (retained for dynamic content/color functionality)
const sliderData = [
  {
    imagePath: '/assets/images/gallary1.webp', 
    title: 'Personalised Art',
    description: 'Maps, stars & more—tailored designs with archival finishes to tell your unique story.',
    colorClass: 'color-terracotta'
  },
  {
    imagePath: '/assets/images/gallary2.webp', 
    title: 'Modern Abstracts',
    description: 'Bold geometry and fluid lines create stunning visual impact for contemporary homes.',
    colorClass: 'color-blue'
  },
  {
    imagePath: '/assets/images/gallary3.webp', 
    title: 'Gallery Wall Sets',
    description: 'Curated collections of matching art pieces designed to transform your entire wall.',
    colorClass: 'color-green'
  },
  {
    imagePath: '/assets/images/gallary4.webp', 
    title: 'Custom Framing',
    description: 'Elevate your art with our premium hand-finished frames in various styles and materials.',
    colorClass: 'color-gold'
  },
];

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get the data for the currently visible slide
  const currentSlide = sliderData[currentIndex];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === sliderData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery-slider-section">
      
      {/* --- NEW HEADING SECTION: Placed above the container and centered --- */}
      <div className="gallery-heading-wrapper">
        <p className="gallery-main-heading">SPECIALITY EDITS, JUST FOR YOU</p>
      </div>

      <div className="gallery-slider-container">

        {/* --- Left Side: Dynamic Description Block --- */}
        {/* The color class is dynamically applied here */}
        <div className={`gallery-description-block ${currentSlide.colorClass}`}>
          <div className="description-content">
            
            {/* REMOVED: <p className="speciality-text">SPECIALITY EDITS, JUST FOR YOU</p> */}
            
            <h2 className="title">{currentSlide.title}</h2>
            <p className="description-text">{currentSlide.description}</p>
            
            <button className={`shop-now-button button-${currentSlide.colorClass}`}>
              Shop Now
            </button>
          </div>
        </div>

        {/* --- Right Side: Image Carousel --- */}
        <div className="gallery-image-carousel">
          <div className="slider-wrapperr" style={{ 
            width: `${sliderData.length * 100}%`, 
            transform: `translateX(-${currentIndex * (100 / sliderData.length)}%)`,
          }}>
            {sliderData.map((slide, index) => (
              <div 
                key={index} 
                className="slide" 
                style={{ width: `${100 / sliderData.length}%` }}
              >
                <div className="framed-image-container">
                    <img src={slide.imagePath} alt={slide.title} className="carousel-image" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="nav-arrow left-arrow" onClick={goToPrevious}>
            &lt;
          </button>
          <button className="nav-arrow right-arrow" onClick={goToNext}>
            &gt;
          </button>
        </div>

      </div>
    </div>
  );
};

export default GallerySlider;