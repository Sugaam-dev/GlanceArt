

import React from 'react';
import './GalleryWallSets.css';
import { Link } from 'react-router-dom';
import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";

const GalleryWallSets = () => {
  // Data for the Gallery Wall Filters section
  const filterCategories = [
    { title: "Set of 3", image: "/assets/images/setof3.webp" },
    { title: "Set of 4", image: "/assets/images/setof4.webp" },
    { title: "Set of 5–8", image: "/assets/images/setof5-8.webp" },
    { title: "Huge Gallery Wall", image: "/assets/images/huge-gallary-set.webp" }
  ];

  return (
    <div className="gws-page-container">
      {/* Hero Section */}
      <section className="gws-hero-container">
        <div className="gws-background-wrapper">
          <img 
            src="/assets/images/Abstarct-hero-IMG.webp" 
            alt="Gallery Wall Styled For You" 
            className="gws-hero-image" 
          />
          <div className="gws-content-overlay">
            <div className="gws-text-wrapper">
              <h1 className="gws-main-title">WALL ART, STYLED FOR YOU</h1>
              <p className="gws-sub-description">
                Curated by stylists. Loved by 20K+ homes. Art that makes your space feel like you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Gallery Wall Filters Section */}
      <section className="gws-filters-section">
        <div className="gws-filters-header">
          <h2 className="gws-filters-title">Gallery Wall Filters</h2>
          <p className="gws-filters-subtitle">Looking for the perfect combo? Start with these top sets our community loves.</p>
        </div>

        <div className="gws-filters-grid">
          {filterCategories.map((item, index) => (
            <div key={index} className="gws-filter-card">
              <div className="gws-filter-image-container">
                <img src={item.image} alt={item.title} className="gws-filter-image" />
                <div className="gws-filter-label-overlay">
                  <span className="gws-filter-label">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Inspiration Footer Section */}
      <section className="gws-inspiration-section">
        <h3 className="gws-inspiration-text">NEED A LITTLE MORE INSPIRATION?</h3>
        <Link to="/collections" onClick={() => window.scrollTo(0, 0)}>
        <button className="gws-browse-button">
          Browse All Collections
        </button>
        </Link>
      </section>
       <ProductFilterSection 
      category="New"
      />
    </div>
  );
};

export default GalleryWallSets;