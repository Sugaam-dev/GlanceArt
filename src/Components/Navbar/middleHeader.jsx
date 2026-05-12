

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';
// import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; 
// import './middleHeader.css';

// // Components
// import CustomNavbar from './Navbar'; 
// // import TopHeader from './TopHeader';  <-- REMOVED THIS IMPORT
// import ProfileDropdown from './ProfileDropdown'; 
// import CartDrawer from '../Context/CartDrawer'; 

// // Logos
// import logoWhite from '../../assets/images/logo-white.png';
// import logoBlack from '../../assets/images/logo-black.png'; 

// const MiddleHeader = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [expanded, setExpanded] = useState(false);
//   const [showCart, setShowCart] = useState(false);
//   const [cartCount, setCartCount] = useState(0);
  
//   const navigate = useNavigate();
//   const location = useLocation();

//   const token = localStorage.getItem('token');
//   const userEmail = localStorage.getItem('userEmail') || "user@example.com";
//   const isLoggedIn = !!token;

//   const isHomePage = location.pathname === "/" || location.pathname === "/home";
//   const isWhiteMode = isScrolled || !isHomePage;

//   const updateCartCount = () => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCartCount(cart.length);
//   };

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     updateCartCount();
//     window.addEventListener("cartUpdated", updateCartCount);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener("cartUpdated", updateCartCount);
//     };
//   }, []);

//   const currentLogo = isWhiteMode ? logoBlack : logoWhite;

//   return (
//     <Navbar 
//       expand="lg" 
//       expanded={expanded} 
//       onToggle={(navExpanded) => setExpanded(navExpanded)}
//       className={`main-header-wrapper p-0 ${isWhiteMode ? 'scrolled force-white' : ''}`}
//     >
//       <div className="w-100">
//         {/* <TopHeader isWhiteMode={isWhiteMode} />  <-- REMOVED THIS LINE */}
        
//         <header className="middle-header">
//           <div className="header-container">
            
//             {/* LEFT SECTION: Social Icons */}
//             <div className="header-left d-flex align-items-center">
//               <div className="social-icons-wrapper desktop-only d-flex align-items-center gap-3">
//                 <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">
//                    <FaFacebookF size={18} />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
//                    <FaInstagram size={18} />
//                 </a>
//                 <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link">
//                    <FaYoutube size={20} />
//                 </a>
//               </div>
//               <Navbar.Toggle aria-controls="main-navbar" />
//             </div>

//             <div className="header-center">
//               <a href="/home"><img src={currentLogo} alt="Logo" className="nav-logo" /></a>
//             </div>

//             <div className="header-right">
//               {isLoggedIn ? (
//                 <ProfileDropdown userEmail={userEmail} isWhiteMode={isWhiteMode} />
//               ) : (
//                 <button className="account-button" onClick={() => navigate('/login')}>
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//                     <circle cx="12" cy="7" r="4"></circle>
//                   </svg>
//                 </button>
//               )}
              
//               <button 
//                 className="cart-button position-relative" 
//                 type="button" 
//                 onClick={() => setShowCart(true)}
//               >
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <circle cx="9" cy="21" r="1"></circle>
//                   <circle cx="20" cy="21" r="1"></circle>
//                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//                 </svg>
//                 {cartCount > 0 && <span className="cart-dot"></span>}
//               </button>
//             </div>
//           </div>
//         </header>
        
//         <CustomNavbar isScrolled={isWhiteMode} />
//         <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
//       </div>
//     </Navbar>
//   );
// };

// export default MiddleHeader;

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './middleHeader.css';

// Components
import CustomNavbar from './Navbar'; 
import ProfileDropdown from './ProfileDropdown'; 
import CartDrawer from '../Context/CartDrawer'; 

// New Logos
import glance_art_whitelogo from '../../assets/images/glance_art_whitelogo-bg.png';
import glanceart_blacklogo from '../../assets/images/glanceart_blacklogo-bg.png'; 

const MiddleHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem('token');
  const userEmail = localStorage.getItem('userEmail') || "user@example.com";
  const isLoggedIn = !!token;

  const isHomePage = location.pathname === "/" || location.pathname === "/home";
  const isWhiteMode = isScrolled || !isHomePage;

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  // Determine which logo to show based on scroll/page state
  const currentLogo = isWhiteMode ? glanceart_blacklogo : glance_art_whitelogo;

  return (
    <Navbar 
      expand="lg" 
      expanded={expanded} 
      onToggle={(navExpanded) => setExpanded(navExpanded)}
      className={`main-header-wrapper p-0 ${isWhiteMode ? 'scrolled force-white' : ''}`}
    >
      <div className="w-100">
        <header className="middle-header">
          <div className="header-container">
            
            {/* LEFT SECTION: Now contains the Logo */}
            <div className="header-left d-flex align-items-center">
              <a href="/home" className="logo-link">
                <img src={currentLogo} alt="Glance Art Logo" className="nav-logo" />
              </a>
              <Navbar.Toggle aria-controls="main-navbar" className="ms-2" />
            </div>

            {/* CENTER SECTION: Empty (to keep right section pushed to the end) */}
            <div className="header-center"></div>

            {/* RIGHT SECTION: Profile & Cart */}
            <div className="header-right">
              {isLoggedIn ? (
                <ProfileDropdown userEmail={userEmail} isWhiteMode={isWhiteMode} />
              ) : (
                <button className="account-button" onClick={() => navigate('/login')}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </button>
              )}
              
              <button 
                className="cart-button position-relative" 
                type="button" 
                onClick={() => setShowCart(true)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {cartCount > 0 && <span className="cart-dot"></span>}
              </button>
            </div>
          </div>
        </header>
        
        <CustomNavbar isScrolled={isWhiteMode} />
        <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
      </div>
    </Navbar>
  );
};

export default MiddleHeader;