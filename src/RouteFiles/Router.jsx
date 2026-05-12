import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Layout Components (Header/Footer)
import TopHeader from '../Components/Navbar/TopHeader.jsx';
import MiddleHeader from '../Components/Navbar/middleHeader.jsx';
import CustomNavbar from '../Components/Navbar/Navbar.jsx'; // Currently commented out
import HeroCarousel from '../Components/HeroSection/HeroCarousel.jsx';
import Footer from '../Components/Footer/Footer.jsx';

// Import Page Components
import HomePage from '../Pages/Home/HomePage.jsx'; // The new component
// Create this file in src/Pages/AboutUs/AboutUsPage.jsx based on your structure:
import AboutUsPage from '../Pages/AboutUs/AboutPage.jsx'; 
import NewMainPage from '../Pages/NewCollection/NewMainPage.jsx';
import ProductPage from '../Components/ProductGrid/ProductPage.jsx'; // Product details page
import AbstractPage from '../Pages/AllCollection/AbstactMainPage.jsx';
import BotanicalSection from '../Pages/AllCollection/BotanicalMainPage.jsx';
import PhotographySection from '../Pages/AllCollection/PhotographyMainPage.jsx';
import LandscapeMainPage from '../Pages/AllCollection/LandscapeMainPage.jsx';
import GeometricMainPage from '../Pages/AllCollection/GeometricMainPage.jsx';
import VanGoghMain from '../Pages/Artists/VanGoghMain.jsx';
import MatisseMain from '../Pages/Artists/MatisseMain.jsx';
import DanHobdayMain from '../Pages/Artists/DanHobdayMain.jsx';
import EleanorBakerMain from '../Pages/Artists/EleanorBakerMain.jsx';
import ArtyGuavaMain from '../Pages/Artists/ArtyGuavaMain.jsx';
import ShopByNookMain from '../Pages/ShopByNook/ShopByNookMain.jsx';
import GalleryWallSets from '../Pages/GalleryWallSets/GalleryWallSets.jsx';
import LivingRoom from '../Pages/ShopByNook/LivingRoom.jsx';
import Bedroom from '../Pages/ShopByNook/Bedroom.jsx';  
import Breakfast from '../Pages/ShopByNook/Breakfast.jsx';
import LoginPage from '../Pages/LogInPages/LoginPage.jsx';
import Register from '../Pages/LogInPages/Register.jsx';
import ShopOtpPage from '../Pages/LogInPages/ShopOtpPage.jsx';
import ProfilePage from '../Components/Navbar/ProfilePage.jsx';
import WishlistPage from '../Components/Context/WishlistPage.jsx';
import Checkout from '../Components/Context/Checkout.jsx';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="layout-container">
        
        {/* 1. RENDER GLOBAL BACKGROUND ELEMENT (Low z-index) */}
        {/* This will appear on all pages where the router is used */}
        {/* <HeroCarousel />  */}

        {/* 2. RENDER GLOBAL OVERLAY HEADER ELEMENTS (High z-index) */}
        <div className="header-overlay">
          {/* <TopHeader /> */}
          <MiddleHeader />
          {/* <CustomNavbar /> */} 
        </div>

        {/* 3. RENDER PAGE-SPECIFIC CONTENT (Routes) */}
        <main className="page-content"> 
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/dashboard" element={<HomePage />} /> 
            {/* The :slug part makes the URL dynamic (e.g., /product/red-wine-art-print) */}
          <Route path="/product/:slug" element={<ProductPage />} />
            
            {/* About Us Page Route (This is where your new design will render) */}
            <Route path="/about" element={<AboutUsPage />} />

            <Route path="/collections" element={<NewMainPage/>} />

            <Route path="/abstract" element={<AbstractPage />} />

            <Route path="/prints" element={<BotanicalSection />} />

             <Route path="/photography" element={<PhotographySection />} />

             <Route path="/landscape" element={<LandscapeMainPage />} />

             <Route path="/geometric" element={<GeometricMainPage />} />

             <Route path="/artist/van-gogh" element={<VanGoghMain />} />

             <Route path="/artist/matisse" element={<MatisseMain />} />

            <Route path="/artist/dan-hobday" element={<DanHobdayMain />} />

            <Route path="/artist/eleanor-baker" element={<EleanorBakerMain />} />

            <Route path="/artist/edward-hopper" element={<ArtyGuavaMain />} />

            <Route path="/shop-by-nook" element={<ShopByNookMain />} />

            <Route path="/gallery-wall-sets" element={<GalleryWallSets />} />

            <Route path="/living-room" element={<LivingRoom />} />
            
            <Route path="/bedroom" element={<Bedroom />} />

            <Route path="/breakfast" element={<Breakfast />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/login/shop" element={<Register />} />

            <Route path="/login/shop/verify" element={<ShopOtpPage />} />

           <Route path="/profile" element={<ProfilePage />} />

           <Route path="/wishlist" element={<WishlistPage />} />

           <Route path="/checkout" element={<Checkout />} />
      
            {/* Add other page routes here */}
            {/* <Route path="/shop" element={<ShopPage />} /> */}
          </Routes>
          {/* Add these inside <Routes> in AppRouter.js */}
      {/* <Route path="/profile" element={<div>User Profile Page</div>} />
      <Route path="/settings" element={<div>Account Settings Page</div>} /> */}
        </main>

        {/* 4. RENDER GLOBAL FOOTER */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;