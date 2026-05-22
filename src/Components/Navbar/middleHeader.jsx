

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './middleHeader.css';

import CustomNavbar from './Navbar'; 
import ProfileDropdown from './ProfileDropdown'; 
import CartDrawer from '../Context/CartDrawer'; 

// Assets
import textWhite from '../../assets/images/white-glaceArt.png';
import textBlack from '../../assets/images/black-glaceArt.png'; 
import logoOldBlack from '../../assets/images/logo-black-bg.png';
import logoOldWhite from '../../assets/images/logo-white-bg.png';

const MiddleHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
      setCartCount(totalItems);
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const shouldBeBlack = !isHomePage || isScrolled;
  const currentLeftLogo = shouldBeBlack ? logoOldBlack : logoOldWhite;
  const currentCenterImg = shouldBeBlack ? textBlack : textWhite;

  return (
    <Navbar className={`main-header-wrapper p-0 ${shouldBeBlack ? 'scrolled' : ''} ${!isHomePage ? 'not-home' : ''}`}>
      <div className="w-100">
        <header className="middle-header">
          <div className="header-container">
            <div className="header-left">
              <a href="/home"><img src={currentLeftLogo} alt="Logo" className="overlapping-left-logo" /></a>
            </div>

            <div className="header-center">
              <img src={currentCenterImg} alt="Brand" className="center-script-img" />
            </div>

            <div className="header-right">
              {/* Profile Dropdown Integration */}
              <ProfileDropdown 
                userEmail={localStorage.getItem('userEmail') || "user@example.com"} 
                isWhiteMode={shouldBeBlack} 
              />
              
              <button className="cart-button position-relative" onClick={() => setShowCart(true)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {cartCount > 0 && <span className={`cart-badge ${shouldBeBlack ? 'badge-dark' : 'badge-light'}`}>{cartCount}</span>}
              </button>
            </div>
          </div>
        </header>
        <CustomNavbar isScrolled={shouldBeBlack} />
        <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
      </div>
    </Navbar>
  );
};

export default MiddleHeader;