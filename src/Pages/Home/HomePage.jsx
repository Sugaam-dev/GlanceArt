

import React from 'react';
import { useNavigate } from 'react-router-dom';
// Import the new Dropdown component (create this file in the next step)
import ProfileDropdown from '../../Components/Navbar/ProfileDropdown.jsx'; 
import { Link } from "react-router-dom";

// Existing imports...
import GallerySlider from './GallerySlider.jsx';
import FeatureGrid from './FeatureGrid.jsx';
import ProductShowcaseGrid from './ProductShowcaseGrid.jsx';
import GallerySets from './GallerySets.jsx';
import StaticGalleryGrid from './StaticGalleryGrid.jsx';
import NurseryWallDecor from './NurseryWallDecor.jsx';
import TradeBenefitsCard from './TradeBenefitsCard.jsx';
import TestimonialsCarousel from './TestimonialsCarousel.jsx';
import HeroCarousel from '../../Components/HeroSection/HeroCarousel.jsx';
import ProductGrid from "../../Components/ProductGrid/ProductGrid.jsx";
import SocialSidebar from './SocialSidebar.jsx';
import './HomePage.css';

const HomePage = () => {
  // Mock user email - in a real app, get this from localStorage or Auth Context
  const userEmail = localStorage.getItem('userEmail') || "rushilpa14@gmail.com";

  return (
    <div className="home-content-container">
      {/* 1. Header/Navbar Area */}
      <nav className="nk-main-header">
        <div className="nk-header-spacer"></div> {/* Pushes dropdown to the right */}
        <ProfileDropdown userEmail={userEmail} />
      </nav>

      <HeroCarousel />
      <FeatureGrid />
      
      <div className="aotm-heading">
        <p className="aotm-subtitle">DISCOVER OUR</p>
        <h2 className="aotm-title">Gallery Exclusives</h2>
        <div className="aotm-underline"></div>
      </div>

      <ProductGrid />
      
      <div className="view-all-button-container">
        {/* <button className="view-all-button">VIEW ALL</button> */}
        <Link to="/collections" onClick={() => window.scrollTo(0, 0)}>
          <button className="view-all-button">VIEW ALL</button>
        </Link>
      </div>

      <SocialSidebar />
      <GallerySlider />
      <ProductShowcaseGrid />
      <GallerySets />
      <StaticGalleryGrid />
      {/* <NurseryWallDecor /> */}
      <TradeBenefitsCard />
      <TestimonialsCarousel />
    </div>
  );
};

export default HomePage;