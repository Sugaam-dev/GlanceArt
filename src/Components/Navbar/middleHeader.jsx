

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';
// import './middleHeader.css';

// import CustomNavbar from './Navbar'; 
// import ProfileDropdown from './ProfileDropdown'; 
// import CartDrawer from '../Context/CartDrawer'; 

// // Assets
// import textWhite from '../../assets/images/white-glaceArt.png';
// import textBlack from '../../assets/images/black-glaceArt.png'; 
// import logoOldBlack from '../../assets/images/logo-black-bg.png';
// import logoOldWhite from '../../assets/images/logo-white-bg.png';

// const MiddleHeader = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showCart, setShowCart] = useState(false);
//   const [cartCount, setCartCount] = useState(0);
  
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isHomePage = location.pathname === "/" || location.pathname === "/home";

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
    
//     const updateCartCount = () => {
//       const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//       const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
//       setCartCount(totalItems);
//     };

//     updateCartCount();
//     window.addEventListener("cartUpdated", updateCartCount);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener("cartUpdated", updateCartCount);
//     };
//   }, []);

//   const shouldBeBlack = !isHomePage || isScrolled;
//   const currentLeftLogo = shouldBeBlack ? logoOldBlack : logoOldWhite;
//   const currentCenterImg = shouldBeBlack ? textBlack : textWhite;

//   return (
//     <Navbar className={`main-header-wrapper p-0 ${shouldBeBlack ? 'scrolled' : ''} ${!isHomePage ? 'not-home' : ''}`}>
//       <div className="w-100">
//         <header className="middle-header">
//           <div className="header-container">
//             <div className="header-left">
//               <a href="/home"><img src={currentLeftLogo} alt="Logo" className="overlapping-left-logo" /></a>
//             </div>

//             <div className="header-center">
//               <img src={currentCenterImg} alt="Brand" className="center-script-img" />
//             </div>

//             <div className="header-right">
//               {/* Profile Dropdown Integration */}
//               <ProfileDropdown 
//                 userEmail={localStorage.getItem('userEmail') || "user@example.com"} 
//                 isWhiteMode={shouldBeBlack} 
//               />
              
//               <button className="cart-button position-relative" onClick={() => setShowCart(true)}>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//                 </svg>
//                 {cartCount > 0 && <span className={`cart-badge ${shouldBeBlack ? 'badge-dark' : 'badge-light'}`}>{cartCount}</span>}
//               </button>
//             </div>
//           </div>
//         </header>
//         <CustomNavbar isScrolled={shouldBeBlack} />
//         <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
//       </div>
//     </Navbar>
//   );
// };

// export default MiddleHeader;



import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; 
import './middleHeader.css';

// Components
import CustomNavbar from './Navbar'; 
// import TopHeader from './TopHeader';  <-- REMOVED THIS IMPORT
import ProfileDropdown from './ProfileDropdown'; 
import CartDrawer from '../Context/CartDrawer'; 

// Logos
import logoWhite from '../../assets/images/white-glaceArt.png';
import logoBlack from '../../assets/images/black-glaceArt.png';
import logoOldWhite from '../../assets/images/logo-white-bg.png';
import logoOldBlack from '../../assets/images/logo-black-bg.png';


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

  const currentLogo = isWhiteMode ? logoBlack : logoWhite;
  const currentLogoOld = isWhiteMode ? logoOldBlack : logoOldWhite;

  return (
    <Navbar 
      expand="lg" 
      expanded={expanded} 
      onToggle={(navExpanded) => setExpanded(navExpanded)}
      className={`main-header-wrapper p-0 ${isWhiteMode ? 'scrolled force-white' : ''}`}
    >
      <div className="w-100">
        {/* <TopHeader isWhiteMode={isWhiteMode} />  <-- REMOVED THIS LINE */}
        
        <header className="middle-header">
          <div className="header-container">
            
            {/* LEFT SECTION: Social Icons */}
            <div className="header-left d-flex align-items-center">
            
              <div className="toggle-logo-wrapper">

  <Navbar.Toggle
    aria-controls="main-navbar"
    className="custom-navbar-toggle"
  />

  <img
    src={currentLogoOld}
    alt="small-logo"
    className="small-side-logo"
  />

</div>
            </div>

            <div className="header-center">
              <a href="/home"><img src={currentLogo} alt="Logo" className="nav-logo" /></a>
            </div>

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