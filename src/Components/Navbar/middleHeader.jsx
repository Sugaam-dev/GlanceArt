

// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import { useNavigate, useLocation } from 'react-router-dom';
// // // // // // // // import { Navbar, Container } from 'react-bootstrap';
// // // // // // // // import './middleHeader.css';

// // // // // // // // // Components
// // // // // // // // import CustomNavbar from './Navbar'; 
// // // // // // // // import ProfileDropdown from './ProfileDropdown'; 
// // // // // // // // import CartDrawer from '../Context/CartDrawer'; 

// // // // // // // // // Logos
// // // // // // // // import glance_art_whitelogo from '../../assets/images/glance_art_whitelogo-bg.png';
// // // // // // // // import glanceart_blacklogo from '../../assets/images/glanceart_blacklogo-bg.png'; 

// // // // // // // // const MiddleHeader = () => {
// // // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // // //   const [expanded, setExpanded] = useState(false);
// // // // // // // //   const [showCart, setShowCart] = useState(false);
// // // // // // // //   const [cartCount, setCartCount] = useState(0);
  
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const location = useLocation();

// // // // // // // //   const token = localStorage.getItem('token');
// // // // // // // //   const userEmail = localStorage.getItem('userEmail') || "user@example.com";
// // // // // // // //   const isLoggedIn = !!token;

// // // // // // // //   const isHomePage = location.pathname === "/" || location.pathname === "/home";
// // // // // // // //   const isWhiteMode = isScrolled || !isHomePage;

// // // // // // // //   const updateCartCount = () => {
// // // // // // // //     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
// // // // // // // //     setCartCount(cart.length);
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     const handleScroll = () => setIsScrolled(window.scrollY > 50);
// // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // //     updateCartCount();
// // // // // // // //     window.addEventListener("cartUpdated", updateCartCount);

// // // // // // // //     return () => {
// // // // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // // // //       window.removeEventListener("cartUpdated", updateCartCount);
// // // // // // // //     };
// // // // // // // //   }, []);

// // // // // // // //   // Determine which logo to show based on scroll/page state
// // // // // // // //   const currentLogo = isWhiteMode ? glanceart_blacklogo : glance_art_whitelogo;

// // // // // // // //   return (
// // // // // // // //     <Navbar 
// // // // // // // //       expand="lg" 
// // // // // // // //       expanded={expanded} 
// // // // // // // //       onToggle={(navExpanded) => setExpanded(navExpanded)}
// // // // // // // //       className={`main-header-wrapper p-0 ${isWhiteMode ? 'scrolled force-white' : ''}`}
// // // // // // // //     >
// // // // // // // //       <div className="w-100">
// // // // // // // //         <header className="middle-header">
// // // // // // // //           <div className="header-container">
            
// // // // // // // //             {/* LEFT SECTION: Logo and Burger Menu */}
// // // // // // // //             <div className="header-left d-flex align-items-center">
// // // // // // // //               <a href="/home" className="logo-link">
// // // // // // // //                 <img src={currentLogo} alt="Glance Art Logo" className="nav-logo" />
// // // // // // // //               </a>
// // // // // // // //               {/* This toggle button reacts to the .scrolled class in CSS */}
// // // // // // // //               <Navbar.Toggle aria-controls="main-navbar" className="ms-2" />
// // // // // // // //             </div>

// // // // // // // //             {/* CENTER SECTION: Empty to maintain layout */}
// // // // // // // //             <div className="header-center"></div>

// // // // // // // //             {/* RIGHT SECTION: Profile & Cart */}
// // // // // // // //             <div className="header-right">
// // // // // // // //               {isLoggedIn ? (
// // // // // // // //                 <ProfileDropdown userEmail={userEmail} isWhiteMode={isWhiteMode} />
// // // // // // // //               ) : (
// // // // // // // //                 <button className="account-button" onClick={() => navigate('/login')}>
// // // // // // // //                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // // // // // //                     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
// // // // // // // //                     <circle cx="12" cy="7" r="4"></circle>
// // // // // // // //                   </svg>
// // // // // // // //                 </button>
// // // // // // // //               )}
              
// // // // // // // //               <button 
// // // // // // // //                 className="cart-button position-relative" 
// // // // // // // //                 type="button" 
// // // // // // // //                 onClick={() => setShowCart(true)}
// // // // // // // //               >
// // // // // // // //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // // // // // //                   <circle cx="9" cy="21" r="1"></circle>
// // // // // // // //                   <circle cx="20" cy="21" r="1"></circle>
// // // // // // // //                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
// // // // // // // //                 </svg>
// // // // // // // //                 {cartCount > 0 && <span className="cart-dot"></span>}
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </header>
        
// // // // // // // //         <CustomNavbar isScrolled={isWhiteMode} />
// // // // // // // //         <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
// // // // // // // //       </div>
// // // // // // // //     </Navbar>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default MiddleHeader;

// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { useNavigate, useLocation } from 'react-router-dom';
// // // // // // // import { Navbar } from 'react-bootstrap';
// // // // // // // import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; 
// // // // // // // import './middleHeader.css';

// // // // // // // import CustomNavbar from './Navbar'; 
// // // // // // // import ProfileDropdown from './ProfileDropdown'; 
// // // // // // // import CartDrawer from '../Context/CartDrawer'; 

// // // // // // // // Import your logo files
// // // // // // // import logoWhite from '../../assets/images/white-glaceArt.png';
// // // // // // // import logoBlack from '../../assets/images/black-glaceArt.png'; 

// // // // // // // const MiddleHeader = () => {
// // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // //   const [expanded, setExpanded] = useState(false);
// // // // // // //   const [showCart, setShowCart] = useState(false);
// // // // // // //   const [cartCount, setCartCount] = useState(0);
  
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const location = useLocation();

// // // // // // //   const token = localStorage.getItem('token');
// // // // // // //   const userEmail = localStorage.getItem('userEmail') || "user@example.com";
// // // // // // //   const isLoggedIn = !!token;

// // // // // // //   const isHomePage = location.pathname === "/" || location.pathname === "/home";
  
// // // // // // //   // Logic: Transition state (scrolled or not on home)
// // // // // // //   const isTransitioned = isScrolled || !isHomePage;

// // // // // // //   const updateCartCount = () => {
// // // // // // //     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
// // // // // // //     setCartCount(cart.length);
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     const handleScroll = () => setIsScrolled(window.scrollY > 50);
// // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // //     updateCartCount();
// // // // // // //     window.addEventListener("cartUpdated", updateCartCount);

// // // // // // //     return () => {
// // // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // // //       window.removeEventListener("cartUpdated", updateCartCount);
// // // // // // //     };
// // // // // // //   }, []);

// // // // // // //   // BEFORE SCROLL: logoBlack 
// // // // // // //   // AFTER SCROLL: logoWhite
// // // // // // //   const currentLogo = isTransitioned ? logoWhite : logoBlack;

// // // // // // //   return (
// // // // // // //     <Navbar 
// // // // // // //       expand="lg" 
// // // // // // //       expanded={expanded} 
// // // // // // //       onToggle={(navExpanded) => setExpanded(navExpanded)}
// // // // // // //       className={`main-header-wrapper p-0 ${isTransitioned ? 'scrolled' : ''}`}
// // // // // // //     >
// // // // // // //       <div className="w-100">
// // // // // // //         <header className="middle-header">
// // // // // // //           <div className="header-container">
            
// // // // // // //             {/* LEFT SECTION - Icons stay in place */}
// // // // // // //             <div className="header-left">
// // // // // // //               <div className="social-icons-wrapper desktop-only">
// // // // // // //                 <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">
// // // // // // //                    <FaFacebookF size={18} />
// // // // // // //                 </a>
// // // // // // //                 <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
// // // // // // //                    <FaInstagram size={18} />
// // // // // // //                 </a>
// // // // // // //                 <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link">
// // // // // // //                    <FaYoutube size={20} />
// // // // // // //                 </a>
// // // // // // //               </div>
// // // // // // //               <Navbar.Toggle aria-controls="main-navbar" />
// // // // // // //             </div>

// // // // // // //             {/* CENTER SECTION - Logo stays exactly in the middle */}
// // // // // // //             <div className="header-center">
// // // // // // //               <a href="/home">
// // // // // // //                 <img 
// // // // // // //                   src={currentLogo} 
// // // // // // //                   alt="Glance Art Logo" 
// // // // // // //                   className="nav-logo" 
// // // // // // //                 />
// // // // // // //               </a>
// // // // // // //             </div>

// // // // // // //             {/* RIGHT SECTION - Account/Cart stay in place */}
// // // // // // //             <div className="header-right">
// // // // // // //               {isLoggedIn ? (
// // // // // // //                 <ProfileDropdown userEmail={userEmail} isWhiteMode={isTransitioned} />
// // // // // // //               ) : (
// // // // // // //                 <button className="account-button" onClick={() => navigate('/login')}>
// // // // // // //                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // // // // //                     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
// // // // // // //                     <circle cx="12" cy="7" r="4"></circle>
// // // // // // //                   </svg>
// // // // // // //                 </button>
// // // // // // //               )}
              
// // // // // // //               <button 
// // // // // // //                 className="cart-button position-relative" 
// // // // // // //                 onClick={() => setShowCart(true)}
// // // // // // //               >
// // // // // // //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // // // // //                   <circle cx="9" cy="21" r="1"></circle>
// // // // // // //                   <circle cx="20" cy="21" r="1"></circle>
// // // // // // //                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
// // // // // // //                 </svg>
// // // // // // //                 {cartCount > 0 && <span className="cart-dot"></span>}
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </header>
        
// // // // // // //         <CustomNavbar isScrolled={isTransitioned} />
// // // // // // //         <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
// // // // // // //       </div>
// // // // // // //     </Navbar>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default MiddleHeader;

// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useNavigate, useLocation } from 'react-router-dom';
// // // // // // import { Navbar } from 'react-bootstrap';
// // // // // // import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; 
// // // // // // import './middleHeader.css';

// // // // // // import CustomNavbar from './Navbar'; 
// // // // // // import ProfileDropdown from './ProfileDropdown'; 
// // // // // // import CartDrawer from '../Context/CartDrawer'; 

// // // // // // // Import the text images
// // // // // // import logoWhite from '../../assets/images/white-glaceArt.png';
// // // // // // import logoBlack from '../../assets/images/black-glaceArt.png'; 

// // // // // // const MiddleHeader = () => {
// // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // //   const [expanded, setExpanded] = useState(false);
// // // // // //   const [showCart, setShowCart] = useState(false);
// // // // // //   const [cartCount, setCartCount] = useState(0);
  
// // // // // //   const navigate = useNavigate();
// // // // // //   const location = useLocation();

// // // // // //   const token = localStorage.getItem('token');
// // // // // //   const userEmail = localStorage.getItem('userEmail') || "user@example.com";
// // // // // //   const isLoggedIn = !!token;

// // // // // //   const isHomePage = location.pathname === "/" || location.pathname === "/home";

// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => setIsScrolled(window.scrollY > 50);
// // // // // //     window.addEventListener('scroll', handleScroll);
    
// // // // // //     const updateCartCount = () => {
// // // // // //       const cart = JSON.parse(localStorage.getItem("cart") || "[]");
// // // // // //       setCartCount(cart.length);
// // // // // //     };
// // // // // //     updateCartCount();
// // // // // //     window.addEventListener("cartUpdated", updateCartCount);

// // // // // //     return () => {
// // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // //       window.removeEventListener("cartUpdated", updateCartCount);
// // // // // //     };
// // // // // //   }, []);

// // // // // //   // Before Scroll: Show White Text Image
// // // // // //   // After Scroll: Show Black Text Image
// // // // // //   const currentLogo = isScrolled ? logoBlack : logoWhite;

// // // // // //   return (
// // // // // //     <Navbar 
// // // // // //       expand="lg" 
// // // // // //       expanded={expanded} 
// // // // // //       onToggle={(navExpanded) => setExpanded(navExpanded)}
// // // // // //       className={`main-header-wrapper p-0 ${isScrolled ? 'scrolled' : ''}`}
// // // // // //     >
// // // // // //       <div className="w-100">
// // // // // //         <header className="middle-header">
// // // // // //           <div className="header-container">
            
// // // // // //             {/* LEFT SECTION: Social Icons (Kept as usual) */}
// // // // // //             <div className="header-left">
// // // // // //               <div className="social-icons-wrapper desktop-only">
// // // // // //                 <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">
// // // // // //                    <FaFacebookF size={18} />
// // // // // //                 </a>
// // // // // //                 <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
// // // // // //                    <FaInstagram size={18} />
// // // // // //                 </a>
// // // // // //                 <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link">
// // // // // //                    <FaYoutube size={20} />
// // // // // //                 </a>
// // // // // //               </div>
// // // // // //               <Navbar.Toggle aria-controls="main-navbar" />
// // // // // //             </div>

// // // // // //             {/* CENTER SECTION: Text Image (Swaps based on scroll) */}
// // // // // //             <div className="header-center">
// // // // // //               <a href="/home">
// // // // // //                 <img 
// // // // // //                   src={currentLogo} 
// // // // // //                   alt="Glance Art Text" 
// // // // // //                   className="nav-logo" 
// // // // // //                 />
// // // // // //               </a>
// // // // // //             </div>

// // // // // //             {/* RIGHT SECTION: Account & Cart (Kept as usual) */}
// // // // // //             <div className="header-right">
// // // // // //               {isLoggedIn ? (
// // // // // //                 <ProfileDropdown userEmail={userEmail} isWhiteMode={isScrolled} />
// // // // // //               ) : (
// // // // // //                 <button className="account-button" onClick={() => navigate('/login')}>
// // // // // //                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // // // //                     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
// // // // // //                     <circle cx="12" cy="7" r="4"></circle>
// // // // // //                   </svg>
// // // // // //                 </button>
// // // // // //               )}
              
// // // // // //               <button 
// // // // // //                 className="cart-button position-relative" 
// // // // // //                 onClick={() => setShowCart(true)}
// // // // // //               >
// // // // // //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // // // //                   <circle cx="9" cy="21" r="1"></circle>
// // // // // //                   <circle cx="20" cy="21" r="1"></circle>
// // // // // //                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
// // // // // //                 </svg>
// // // // // //                 {cartCount > 0 && <span className="cart-dot"></span>}
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </header>
        
// // // // // //         <CustomNavbar isScrolled={isScrolled} />
// // // // // //         <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
// // // // // //       </div>
// // // // // //     </Navbar>
// // // // // //   );
// // // // // // };

// // // // // // export default MiddleHeader;

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useNavigate, useLocation } from 'react-router-dom';
// // // // // import { Navbar } from 'react-bootstrap';
// // // // // import './middleHeader.css';

// // // // // import CustomNavbar from './Navbar'; 
// // // // // import ProfileDropdown from './ProfileDropdown'; 
// // // // // import CartDrawer from '../Context/CartDrawer'; 

// // // // // // Middle Script Text Images
// // // // // import textWhite from '../../assets/images/white-glaceArt.png';
// // // // // import textBlack from '../../assets/images/black-glaceArt.png'; 

// // // // // // Left Side Logos
// // // // // import logoOldBlack from '../../assets/images/glanceart_blacklogo-bg.png';
// // // // // import logoOldWhite from '../../assets/images/glance_art_whitelogo-bg.png';

// // // // // const MiddleHeader = () => {
// // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // //   const [expanded, setExpanded] = useState(false);
// // // // //   const [showCart, setShowCart] = useState(false);
// // // // //   const [cartCount, setCartCount] = useState(0);
  
// // // // //   const navigate = useNavigate();
// // // // //   const location = useLocation();

// // // // //   const token = localStorage.getItem('token');
// // // // //   const userEmail = localStorage.getItem('userEmail') || "user@example.com";
// // // // //   const isLoggedIn = !!token;

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => setIsScrolled(window.scrollY > 50);
// // // // //     window.addEventListener('scroll', handleScroll);
    
// // // // //     const updateCartCount = () => {
// // // // //       const cart = JSON.parse(localStorage.getItem("cart") || "[]");
// // // // //       setCartCount(cart.length);
// // // // //     };
// // // // //     updateCartCount();
// // // // //     window.addEventListener("cartUpdated", updateCartCount);

// // // // //     return () => {
// // // // //       window.removeEventListener('scroll', handleScroll);
// // // // //       window.removeEventListener("cartUpdated", updateCartCount);
// // // // //     };
// // // // //   }, []);

// // // // //   /**
// // // // //    * YOUR REQUIREMENT:
// // // // //    * BEFORE SCROLL: Left = White Logo, Center = White Text
// // // // //    * AFTER SCROLL:  Left = Black Logo, Center = Black Text
// // // // //    */
// // // // //   const currentLeftLogo = isScrolled ? logoOldBlack : logoOldWhite;
// // // // //   const currentCenterImg = isScrolled ? textBlack : textWhite;

// // // // //   return (
// // // // //     <Navbar 
// // // // //       expand="lg" 
// // // // //       expanded={expanded} 
// // // // //       onToggle={(navExpanded) => setExpanded(navExpanded)}
// // // // //       className={`main-header-wrapper p-0 ${isScrolled ? 'scrolled' : ''}`}
// // // // //     >
// // // // //       <div className="w-100">
// // // // //         <header className="middle-header">
// // // // //           <div className="header-container">
            
// // // // //             {/* LEFT SECTION: Original Logo */}
// // // // //             <div className="header-left">
// // // // //               <a href="/home" className="logo-link">
// // // // //                 <img 
// // // // //                   src={currentLeftLogo} 
// // // // //                   alt="Glance Art Logo" 
// // // // //                   className="old-brand-logo" 
// // // // //                 />
// // // // //               </a>
// // // // //               <Navbar.Toggle aria-controls="main-navbar" />
// // // // //             </div>

// // // // //             {/* CENTER SECTION: Script Text Image */}
// // // // //             <div className="header-center">
// // // // //               <img 
// // // // //                 src={currentCenterImg} 
// // // // //                 alt="Glance Art Text" 
// // // // //                 className="center-script-img" 
// // // // //               />
// // // // //             </div>

// // // // //             {/* RIGHT SECTION: Account & Cart */}
// // // // //             <div className="header-right">
// // // // //               {isLoggedIn ? (
// // // // //                 <ProfileDropdown userEmail={userEmail} isWhiteMode={isScrolled} />
// // // // //               ) : (
// // // // //                 <button className="account-button" onClick={() => navigate('/login')}>
// // // // //                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // // //                     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
// // // // //                     <circle cx="12" cy="7" r="4"></circle>
// // // // //                   </svg>
// // // // //                 </button>
// // // // //               )}
              
// // // // //               <button 
// // // // //                 className="cart-button position-relative" 
// // // // //                 onClick={() => setShowCart(true)}
// // // // //               >
// // // // //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // // //                   <circle cx="9" cy="21" r="1"></circle>
// // // // //                   <circle cx="20" cy="21" r="1"></circle>
// // // // //                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
// // // // //                 </svg>
// // // // //                 {cartCount > 0 && <span className="cart-dot"></span>}
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </header>
        
// // // // //         <CustomNavbar isScrolled={isScrolled} />
// // // // //         <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
// // // // //       </div>
// // // // //     </Navbar>
// // // // //   );
// // // // // };

// // // // // export default MiddleHeader;

// // // // import React, { useState, useEffect } from 'react';
// // // // import { useNavigate, useLocation } from 'react-router-dom';
// // // // import { Navbar } from 'react-bootstrap';
// // // // import './middleHeader.css';

// // // // import CustomNavbar from './Navbar'; 
// // // // import ProfileDropdown from './ProfileDropdown'; 
// // // // import CartDrawer from '../Context/CartDrawer'; 

// // // // // Middle Script Text Images (Keep normal size)
// // // // import textWhite from '../../assets/images/white-glaceArt.png';
// // // // import textBlack from '../../assets/images/black-glaceArt.png'; 

// // // // // Left Side Original Logos (The ones we will make bigger and overlap)
// // // // import logoOldBlack from '../../assets/images/glanceart_blacklogo-bg.png';
// // // // import logoOldWhite from '../../assets/images/glance_art_whitelogo-bg.png';

// // // // const MiddleHeader = () => {
// // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // //   const [expanded, setExpanded] = useState(false);
// // // //   const [showCart, setShowCart] = useState(false);
// // // //   const [cartCount, setCartCount] = useState(0);
  
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();

// // // //   const token = localStorage.getItem('token');
// // // //   const userEmail = localStorage.getItem('userEmail') || "user@example.com";
// // // //   const isLoggedIn = !!token;

// // // //   useEffect(() => {
// // // //     const handleScroll = () => setIsScrolled(window.scrollY > 50);
// // // //     window.addEventListener('scroll', handleScroll);
    
// // // //     const updateCartCount = () => {
// // // //       const cart = JSON.parse(localStorage.getItem("cart") || "[]");
// // // //       setCartCount(cart.length);
// // // //     };
// // // //     updateCartCount();
// // // //     window.addEventListener("cartUpdated", updateCartCount);

// // // //     return () => {
// // // //       window.removeEventListener('scroll', handleScroll);
// // // //       window.removeEventListener("cartUpdated", updateCartCount);
// // // //     };
// // // //   }, []);

// // // //   // LOGIC:
// // // //   // Before Scroll: Left = White Logo (Overlap), Center = White Text
// // // //   // After Scroll:  Left = Black Logo (Overlap), Center = Black Text
// // // //   const currentLeftLogo = isScrolled ? logoOldBlack : logoOldWhite;
// // // //   const currentCenterImg = isScrolled ? textBlack : textWhite;

// // // //   return (
// // // //     <Navbar 
// // // //       expand="lg" 
// // // //       expanded={expanded} 
// // // //       onToggle={(navExpanded) => setExpanded(navExpanded)}
// // // //       className={`main-header-wrapper p-0 ${isScrolled ? 'scrolled' : ''}`}
// // // //     >
// // // //       <div className="w-100">
// // // //         <header className="middle-header">
// // // //           <div className="header-container">
            
// // // //             {/* LEFT SECTION: Overlapping Brand Logo */}
// // // //             <div className="header-left">
// // // //               <a href="/home" className="logo-link">
// // // //                 <img 
// // // //                   src={currentLeftLogo} 
// // // //                   alt="Glance Art Brand" 
// // // //                   className="overlapping-left-logo" 
// // // //                 />
// // // //               </a>
// // // //               <Navbar.Toggle aria-controls="main-navbar" />
// // // //             </div>

// // // //             {/* CENTER SECTION: Script Text Image (Normal size) */}
// // // //             <div className="header-center">
// // // //               <img 
// // // //                 src={currentCenterImg} 
// // // //                 alt="Glance Art Text" 
// // // //                 className="center-script-img" 
// // // //               />
// // // //             </div>

// // // //             {/* RIGHT SECTION: Account & Cart */}
// // // //             <div className="header-right">
// // // //               {isLoggedIn ? (
// // // //                 <ProfileDropdown userEmail={userEmail} isWhiteMode={isScrolled} />
// // // //               ) : (
// // // //                 <button className="account-button" onClick={() => navigate('/login')}>
// // // //                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // //                     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
// // // //                     <circle cx="12" cy="7" r="4"></circle>
// // // //                   </svg>
// // // //                 </button>
// // // //               )}
              
// // // //               <button 
// // // //                 className="cart-button position-relative" 
// // // //                 onClick={() => setShowCart(true)}
// // // //               >
// // // //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // // //                   <circle cx="9" cy="21" r="1"></circle>
// // // //                   <circle cx="20" cy="21" r="1"></circle>
// // // //                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
// // // //                 </svg>
// // // //                 {cartCount > 0 && <span className="cart-dot"></span>}
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </header>
        
// // // //         <CustomNavbar isScrolled={isScrolled} />
// // // //         <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
// // // //       </div>
// // // //     </Navbar>
// // // //   );
// // // // };

// // // // export default MiddleHeader; 

// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate, useLocation } from 'react-router-dom';
// // // import { Navbar } from 'react-bootstrap';
// // // import './middleHeader.css';

// // // import CustomNavbar from './Navbar'; 
// // // import ProfileDropdown from './ProfileDropdown'; 
// // // import CartDrawer from '../Context/CartDrawer'; 

// // // // Middle Script Text Images
// // // import textWhite from '../../assets/images/white-glaceArt.png';
// // // import textBlack from '../../assets/images/black-glaceArt.png'; 

// // // // Left Side Original Logos
// // // import logoOldBlack from '../../assets/images/glanceart_blacklogo-bg.png';
// // // import logoOldWhite from '../../assets/images/glance_art_whitelogo-bg.png';

// // // const MiddleHeader = () => {
// // //   const [isScrolled, setIsScrolled] = useState(false);
// // //   const [expanded, setExpanded] = useState(false);
// // //   const [showCart, setShowCart] = useState(false);
// // //   const [cartCount, setCartCount] = useState(0);
  
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   useEffect(() => {
// // //     const handleScroll = () => setIsScrolled(window.scrollY > 50);
// // //     window.addEventListener('scroll', handleScroll);
    
// // //     const updateCartCount = () => {
// // //       const cart = JSON.parse(localStorage.getItem("cart") || "[]");
// // //       setCartCount(cart.length);
// // //     };
// // //     updateCartCount();
// // //     window.addEventListener("cartUpdated", updateCartCount);

// // //     return () => {
// // //       window.removeEventListener('scroll', handleScroll);
// // //       window.removeEventListener("cartUpdated", updateCartCount);
// // //     };
// // //   }, []);

// // //   const currentLeftLogo = isScrolled ? logoOldBlack : logoOldWhite;
// // //   const currentCenterImg = isScrolled ? textBlack : textWhite;

// // //   return (
// // //     <Navbar 
// // //       expand="lg" 
// // //       expanded={expanded} 
// // //       onToggle={(navExpanded) => setExpanded(navExpanded)}
// // //       className={`main-header-wrapper p-0 ${isScrolled ? 'scrolled' : ''}`}
// // //     >
// // //       <div className="w-100">
// // //         <header className="middle-header">
// // //           <div className="header-container">
            
// // //             {/* LEFT SECTION */}
// // //             <div className="header-left">
// // //               <div className="logo-wrapper">
// // //                 <a href="/home" className="logo-link">
// // //                   <img 
// // //                     src={currentLeftLogo} 
// // //                     alt="Glance Art Brand" 
// // //                     className="overlapping-left-logo" 
// // //                   />
// // //                 </a>
// // //               </div>
// // //               {/* Burger Menu Button */}
// // //               <Navbar.Toggle aria-controls="main-navbar" className="ms-2" />
// // //             </div>

// // //             {/* CENTER SECTION */}
// // //             <div className="header-center">
// // //               <img 
// // //                 src={currentCenterImg} 
// // //                 alt="Glance Art Text" 
// // //                 className="center-script-img" 
// // //               />
// // //             </div>

// // //             {/* RIGHT SECTION */}
// // //             <div className="header-right">
// // //               {/* Profile & Cart logic kept as usual */}
// // //               <button className="account-button" onClick={() => navigate('/login')}>
// // //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // //                   <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
// // //                   <circle cx="12" cy="7" r="4"></circle>
// // //                 </svg>
// // //               </button>
              
// // //               <button className="cart-button position-relative" onClick={() => setShowCart(true)}>
// // //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// // //                   <circle cx="9" cy="21" r="1"></circle>
// // //                   <circle cx="20" cy="21" r="1"></circle>
// // //                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
// // //                 </svg>
// // //                 {cartCount > 0 && <span className="cart-dot"></span>}
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </header>
        
// // //         <CustomNavbar isScrolled={isScrolled} />
// // //         <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
// // //       </div>
// // //     </Navbar>
// // //   );
// // // };

// // // export default MiddleHeader;

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

// //   const currentLeftLogo = isScrolled ? logoOldBlack : logoOldWhite;
// //   const currentCenterImg = isScrolled ? textBlack : textWhite;

// //   return (
// //     <Navbar 
// //       expand="lg" 
// //       expanded={expanded} 
// //       onToggle={(navExpanded) => setExpanded(navExpanded)}
// //       className={`main-header-wrapper p-0 ${isScrolled ? 'scrolled' : ''}`}
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

// //             {/* CENTER SECTION */}
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
        
// //         <CustomNavbar isScrolled={isScrolled} />
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

//   // CHECK: Are we on the Home Page?
//   const isHomePage = location.pathname === "/" || location.pathname === "/home";

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
    
//     const updateCartCount = () => {
//       const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//       setCartCount(cart.length);
//     };
//     updateCartCount();
//     window.addEventListener("cartUpdated", updateCartCount);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener("cartUpdated", updateCartCount);
//     };
//   }, []);

//   // Use black theme if we scrolled OR if we are not on the home page
//   const shouldBeBlack = !isHomePage || isScrolled;

//   const currentLeftLogo = shouldBeBlack ? logoOldBlack : logoOldWhite;
//   const currentCenterImg = shouldBeBlack ? textBlack : textWhite;

//   return (
//     <Navbar 
//       expand="lg" 
//       expanded={expanded} 
//       onToggle={(navExpanded) => setExpanded(navExpanded)}
//       // Add 'not-home' class to help CSS positioning
//       className={`main-header-wrapper p-0 ${shouldBeBlack ? 'scrolled' : ''} ${!isHomePage ? 'not-home' : ''}`}
//     >
//       <div className="w-100">
//         <header className="middle-header">
//           <div className="header-container">
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

//             <div className="header-center">
//               <img 
//                 src={currentCenterImg} 
//                 alt="Glance Art Text" 
//                 className="center-script-img" 
//               />
//             </div>

//             <div className="header-right">
//               <button className="account-button" onClick={() => navigate('/login')}>
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
//                 {cartCount > 0 && <span className="cart-dot"></span>}
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

// Middle Script Text Images
import textWhite from '../../assets/images/white-glaceArt.png';
import textBlack from '../../assets/images/black-glaceArt.png'; 

// Left Side Original Logos
import logoOldBlack from '../../assets/images/glanceart_blacklogo-bg.png';
import logoOldWhite from '../../assets/images/glance_art_whitelogo-bg.png';

const MiddleHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Detect if current page is Home to handle transparency
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.length);
    };
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  // Theme logic: Black if scrolled OR if not on home page
  const shouldBeBlack = !isHomePage || isScrolled;

  const currentLeftLogo = shouldBeBlack ? logoOldBlack : logoOldWhite;
  const currentCenterImg = shouldBeBlack ? textBlack : textWhite;

  return (
    <Navbar 
      expand="lg" 
      expanded={expanded} 
      onToggle={(navExpanded) => setExpanded(navExpanded)}
      className={`main-header-wrapper p-0 ${shouldBeBlack ? 'scrolled' : ''} ${!isHomePage ? 'not-home' : ''}`}
    >
      <div className="w-100">
        <header className="middle-header">
          <div className="header-container">
            
            {/* LEFT SECTION */}
            <div className="header-left">
              <div className="logo-wrapper">
                <a href="/home" className="logo-link">
                  <img 
                    src={currentLeftLogo} 
                    alt="Glance Art Brand" 
                    className="overlapping-left-logo" 
                  />
                </a>
              </div>
              <Navbar.Toggle aria-controls="main-navbar" />
            </div>

            {/* CENTER SECTION - Perfectly Centered */}
            <div className="header-center">
              <img 
                src={currentCenterImg} 
                alt="Glance Art Text" 
                className="center-script-img" 
              />
            </div>

            {/* RIGHT SECTION */}
            <div className="header-right">
              <button className="account-button" onClick={() => navigate('/login')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
              
              <button className="cart-button position-relative" onClick={() => setShowCart(true)}>
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
        
        <CustomNavbar isScrolled={shouldBeBlack} />
        <CartDrawer show={showCart} handleClose={() => setShowCart(false)} />
      </div>
    </Navbar>
  );
};

export default MiddleHeader;