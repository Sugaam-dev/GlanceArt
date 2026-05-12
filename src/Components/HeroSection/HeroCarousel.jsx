    // import React from 'react';
    // import { Carousel } from 'react-bootstrap';
    // import './HeroCarousel.css'; // Import the dedicated CSS

    // // --- IMPORTANT: Update these paths to your actual image locations ---
    // import heroImage1 from '../../assets/images/hero-img1.png';
    // import heroImage2 from '../../assets/images/hero-img2.png'; 

    // const HeroCarousel = () => {
    // return (
    //     <div className="hero-carousel-container">
    //     {/* The Carousel component will occupy the space below the main header.
    //         We use CSS to ensure it fills the viewport height.
    //     */}
    //     <Carousel 
    //         controls={false}      // Hide prev/next arrows (as seen in the design)
    //         indicators={false}    // Hide bottom indicators (as seen in the design)
    //         fade                  // Optional: Use a crossfade transition
    //         interval={5000}       // Slide transition interval (5 seconds)
    //         className="hero-carousel"
    //     >
    //         {/* Slide 1 */}
    //         <Carousel.Item>
    //         <img
    //             className="d-block w-100 hero-carousel-image"
    //             src={heroImage1}
    //             alt="First slide image"
    //         />
    //         {/* Optional: Add content here if needed, e.g., text, buttons */}
    //         {/* <Carousel.Caption>
    //             <h3 className="hero-title">Discover Unique Art</h3>
    //             <p>Shop the new collection.</p>
    //         </Carousel.Caption> */}
    //         </Carousel.Item>

    //         {/* Slide 2 */}
    //         <Carousel.Item>
    //         <img
    //             className="d-block w-100 hero-carousel-image"
    //             src={heroImage2}
    //             alt="Second slide image"
    //         />
    //         </Carousel.Item>
    //     </Carousel>
    //     </div>
    // );
    // };

    // export default HeroCarousel;

    import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HeroCarousel.css';
import { Link } from 'react-router-dom';

// Images
import heroImage1 from '../../assets/images/hero-img1.png';
import heroImage2 from '../../assets/images/hero-img2.png';

const HeroCarousel = () => {
  return (
    <div className="hero-carousel-container">
      <Carousel
        controls={false}
        indicators={false}
        fade
        interval={2000}
        className="hero-carousel"
      >
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-110 hero-carousel-image"
            src={heroImage1}
            alt="First slide"
          />

          {/* TEXT OVERLAY */}
          <div className="hero-text-block animate">
            <h4 className="artist-subtitle">ARTIST OF THE MONTH</h4>
            <h1 className="artist-name">UMA GOKHALE</h1>

            <p className="artist-description">
              Vibrant, tropical artworks bursting with bold color and modern feminine energy
            </p>

            <div className="hero-buttons">
          <Link to="/collections" onClick={() => window.scrollTo(0, 0)}>
              <button className="btn-primary">SHOP COLLECTION</button>
            </Link>
              <Link to="/shop-by-nook" onClick={() => window.scrollTo(0, 0)}>
              <button className="btn-secondary">SHOP ALL</button>
              </Link>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-110 hero-carousel-image"
            src={heroImage2}
            alt="Second slide"
          />

          {/* Text repeats for slide 2 as well */}
          <div className="hero-text-block animate">
            <h4 className="artist-subtitle">THE OCTOBER EDIT </h4>
            <h1 className="artist-name">MINIMAL. MONUMENTAL. NEW</h1>

            <p className="artist-description">
              Shop the latest arrivals
            </p>

            <div className="hero-buttons">
               <Link to="/collections" onClick={() => window.scrollTo(0, 0)}>
              <button className="btn-primary">ART DROPS</button>
              </Link>
               <Link to="/shop-by-nook" onClick={() => window.scrollTo(0, 0)}>
              <button className="btn-secondary">SHOP ALL</button>
              </Link>
            </div>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default HeroCarousel;


