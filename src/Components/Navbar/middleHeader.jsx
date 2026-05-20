

// // import React, { useState, useEffect } from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import { Navbar } from 'react-bootstrap';
// // import './middleHeader.css';

// // import CustomNavbar from './Navbar'; 
// // import ProfileDropdown from './ProfileDropdown'; 
// // import CartDrawer from '../Context/CartDrawer'; 

// // // Middle Script Text Images
// // import textWhite from '../../assets/images/white-glaceArt.png';
// // import textBlack from '../../assets/images/black-glaceArt.png'; 

// // // Left Side Original Logos
// // import logoOldBlack from '../../assets/images/glanceart_blacklogo-bg.png';
// // import logoOldWhite from '../../assets/images/glance_art_whitelogo-bg.png';

// // const MiddleHeader = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [expanded, setExpanded] = useState(false);
// //   const [showCart, setShowCart] = useState(false);
// //   const [cartCount, setCartCount] = useState(0);
  
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   // Detect if current page is Home to handle transparency
// //   const isHomePage = location.pathname === "/" || location.pathname === "/home";

// //   useEffect(() => {
// //     const handleScroll = () => setIsScrolled(window.scrollY > 50);
// //     window.addEventListener('scroll', handleScroll);
    
// //     const updateCartCount = () => {
// //       const cart = JSON.parse(localStorage.getItem("cart") || "[]");
// //       setCartCount(cart.length);
// //     };
// //     updateCartCount();
// //     window.addEventListener("cartUpdated", updateCartCount);

// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);
// //       window.removeEventListener("cartUpdated", updateCartCount);
// //     };
// //   }, []);

// //   // Theme logic: Black if scrolled OR if not on home page
// //   const shouldBeBlack = !isHomePage || isScrolled;

// //   const currentLeftLogo = shouldBeBlack ? logoOldBlack : logoOldWhite;
// //   const currentCenterImg = shouldBeBlack ? textBlack : textWhite;

// //   return (
// //     <Navbar 
// //       expand="lg" 
// //       expanded={expanded} 
// //       onToggle={(navExpanded) => setExpanded(navExpanded)}
// //       className={`main-header-wrapper p-0 ${shouldBeBlack ? 'scrolled' : ''} ${!isHomePage ? 'not-home' : ''}`}
// //     >
// //       <div className="w-100">
// //         <header className="middle-header">
// //           <div className="header-container">
            
// //             {/* LEFT SECTION */}
// //             <div className="header-left">
// //               <div className="logo-wrapper">
// //                 <a href="/home" className="logo-link">
// //                   <img 
// //                     src={currentLeftLogo} 
// //                     alt="Glance Art Brand" 
// //                     className="overlapping-left-logo" 
// //                   />
// //                 </a>
// //               </div>
// //               <Navbar.Toggle aria-controls="main-navbar" />
// //             </div>

// //             {/* CENTER SECTION - Perfectly Centered */}
// //             <div className="header-center">
// //               <img 
// //                 src={currentCenterImg} 
// //                 alt="Glance Art Text" 
// //                 className="center-script-img" 
// //               />
// //             </div>

// //             {/* RIGHT SECTION */}
// //             <div className="header-right">
// //               <button className="account-button" onClick={() => navigate('/login')}>
// //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //                   <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
// //                   <circle cx="12" cy="7" r="4"></circle>
// //                 </svg>
// //               </button>
              
// //               <button className="cart-button position-relative" onClick={() => setShowCart(true)}>
// //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //                   <circle cx="9" cy="21" r="1"></circle>
// //                   <circle cx="20" cy="21" r="1"></circle>
// //                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
// //                 </svg>
// //                 {cartCount > 0 && <span className="cart-dot"></span>}
// //               </button>
// //             </div>
// //           </div>
// //         </header>
        
// //         <CustomNavbar isScrolled={shouldBeBlack} />
// //         <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
// //       </div>
// //     </Navbar>
// //   );
// // };

// // export default MiddleHeader;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';
// import './middleHeader.css';

// import CustomNavbar from './Navbar'; 
// import ProfileDropdown from './ProfileDropdown'; 
// import CartDrawer from '../Context/CartDrawer'; 

// // Middle Script Text Images
// import textWhite from '../../assets/images/white-glaceArt.png';
// import textBlack from '../../assets/images/black-glaceArt.png'; 

// // Left Side Original Logos
// import logoOldBlack from '../../assets/images/glanceart_blacklogo-bg.png';
// import logoOldWhite from '../../assets/images/glance_art_whitelogo-bg.png';

// const MiddleHeader = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [expanded, setExpanded] = useState(false);
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
//       // Summing up all quantities for an accurate item count
//       const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
//       setCartCount(totalItems);
//     };

//     // Initial load
//     updateCartCount();

//     // Listen for changes from CartDrawer or AddToCart actions
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
//     <Navbar 
//       expand="lg" 
//       expanded={expanded} 
//       onToggle={(navExpanded) => setExpanded(navExpanded)}
//       className={`main-header-wrapper p-0 ${shouldBeBlack ? 'scrolled' : ''} ${!isHomePage ? 'not-home' : ''}`}
//     >
//       <div className="w-100">
//         <header className="middle-header">
//           <div className="header-container">
            
//             {/* LEFT SECTION */}
//             <div className="header-left">
//               <div className="logo-wrapper">
//                 <a href="/home" className="logo-link">
//                   <img 
//                     src={currentLeftLogo} 
//                     alt="Glance Art Brand" 
//                     className="overlapping-left-logo" 
//                   />
//                 </a>
//               </div>
//               <Navbar.Toggle aria-controls="main-navbar" />
//             </div>

//             {/* CENTER SECTION */}
//             <div className="header-center">
//               <img 
//                 src={currentCenterImg} 
//                 alt="Glance Art Text" 
//                 className="center-script-img" 
//               />
//             </div>

//             {/* RIGHT SECTION */}
//             <div className="header-right">
//               <button className="account-button" onClick={() => navigate('/profile')}>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//                   <circle cx="12" cy="7" r="4"></circle>
//                 </svg>
//               </button>
              
//               <button className="cart-button position-relative" onClick={() => setShowCart(true)}>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <circle cx="9" cy="21" r="1"></circle>
//                   <circle cx="20" cy="21" r="1"></circle>
//                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//                 </svg>
//                 {/* Visual Badge for Cart Count */}
//                 {cartCount > 0 && (
//                   <span className={`cart-badge ${shouldBeBlack ? 'badge-dark' : 'badge-light'}`}>
//                     {cartCount}
//                   </span>
//                 )}
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
import './middleHeader.css';

import CustomNavbar from './Navbar'; 
import ProfileDropdown from './ProfileDropdown'; 
import CartDrawer from '../Context/CartDrawer'; 

// Assets
import textWhite from '../../assets/images/white-glaceArt.png';
import textBlack from '../../assets/images/black-glaceArt.png'; 
import logoOldBlack from '../../assets/images/glanceart_blacklogo-bg.png';
import logoOldWhite from '../../assets/images/glance_art_whitelogo-bg.png';

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