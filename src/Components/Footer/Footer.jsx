// import React from 'react';
// import './Footer.css';
// // Assuming you will import a CSS file like './Footer.css'
// // or use a styling solution like styled-components

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer-container">
//       <div className="footer-content">
//         {/* Column 1: Glance Art */}
//         <div className="footer-section section-nook-at-you">
//           <h3 className="section-title">Glance Art</h3>
//           <ul className="footer-links">
//             <li><a href="/about">About us</a></li>
//             <li><a href="/reviews">Reviews</a></li>
//             <li><a href="/e-gift-card">E-Gift Card</a></li>
//             <li><a href="/for-architects">For Architects</a></li>
//             <li><a href="/shop-all">Shop All</a></li>
//           </ul>
//         </div>

//         {/* Column 2: HELP CENTER */}
//         <div className="footer-section section-help-center">
//           <h3 className="section-title">HELP CENTER</h3>
//           <ul className="footer-links">
//             <li><a href="/faq">FAQ Corner</a></li>
//             <li><a href="/shipping-returns">Shipping & Returns</a></li>
//             <li><a href="/refund-policy">Refund Policy</a></li>
//             <li><a href="/terms">Terms of Service</a></li>
//             <li><a href="/privacy">Privacy Policy</a></li>
//           </ul>
//         </div>

//         {/* Column 3: CHAT WITH US */}
//         <div className="footer-section section-chat-with-us">
//           <h3 className="section-title">CHAT WITH US</h3>
//           <p className="chat-text">
//             We are always here for you. Chat with us using the Chat bubble on your screen.
//           </p>
//           <p className="contact-detail">
//             Talk to us on WhatsApp - **+91 7358792364**
//           </p>
//           <p className="contact-detail">
//             Email us - <a href="mailto:support@glanceart.com" className="email-link">support@glanceart.com</a>
//           </p>
//           <a href="/contact" className="contact-form-link">Contact Form</a>
//         </div>

//         {/* Column 4: SUBSCRIBE */}
//         <div className="footer-section section-subscribe">
//           <h3 className="section-title">SUBSCRIBE</h3>
//           <p className="subscribe-text">
//             Be the first to see our latest products, hottest sales and member exclusive discount codes. **Sign up below to get your 10% off coupon**
//           </p>
//           <div className="email-input-group">
//             <input type="email" placeholder="Enter your email" className="email-input" />
//             <button className="email-submit-button" aria-label="Submit email for subscription">
//               {/* This is an icon, you might use an SVG or a library icon */}
//               <svg className="mail-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
//             </button>
//           </div>
//           <div className="social-links">
//             <a href="https://instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
//             <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
//             <a href="https://pinterest.com" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
//           </div>
//         </div>
//       </div>
      
//       {/* Copyright Bar */}
//       <div className="footer-copyright">
//         &copy; {currentYear} Glance Art
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      // Here you would typically make an API call to your backend or Mailchimp
      console.log("Subscribing email:", email);
      setIsSubscribed(true);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Column 1: Glance Art */}
        <div className="footer-section section-nook-at-you">
          <h3 className="section-title">Glance Art</h3>
          <ul className="footer-links">
            <li><a href="/about">About us</a></li>
            <li><a href="/reviews">Reviews</a></li>
            <li><a href="/e-gift-card">E-Gift Card</a></li>
            <li><a href="/for-architects">For Architects</a></li>
            <li><a href="/shop-all">Shop All</a></li>
          </ul>
        </div>

        {/* Column 2: HELP CENTER */}
        <div className="footer-section section-help-center">
          <h3 className="section-title">HELP CENTER</h3>
          <ul className="footer-links">
            <li><a href="/faq">FAQ Corner</a></li>
            <li><a href="/shipping-returns">Shipping & Returns</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3: CHAT WITH US */}
        <div className="footer-section section-chat-with-us">
          <h3 className="section-title">CHAT WITH US</h3>
          <p className="chat-text">
            We are always here for you. Chat with us using the Chat bubble on your screen.
          </p>
          <p className="contact-detail">
            Talk to us on WhatsApp - <strong>+91 7358792364</strong>
          </p>
          <p className="contact-detail">
            Email us - <a href="mailto:support@glanceart.com" className="email-link">support@glanceart.com</a>
          </p>
          <a href="/contact" className="contact-form-link">Contact Form</a>
        </div>

        {/* Column 4: SUBSCRIBE (Updated with Logic) */}
        <div className="footer-section section-subscribe">
          <h3 className="section-title">SUBSCRIBE</h3>
          
          {!isSubscribed ? (
            <>
              <p className="subscribe-text">
                Be the first to see our latest products, hottest sales and member exclusive discount codes. 
                <strong> Sign up below to get your 10% off coupon</strong>
              </p>
              <form className="email-input-group" onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="email-input" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="email-submit-button" aria-label="Submit email">
                  <svg className="mail-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </button>
              </form>
            </>
          ) : (
            <div className="coupon-success-box">
              <p className="success-msg">Welcome to the family! 🎉</p>
              <p className="coupon-text">Use code: <strong>WELCOME10</strong></p>
              <p className="sub-msg">10% off has been applied to your interest.</p>
            </div>
          )}

          <div className="social-links">
            <a href="https://instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://pinterest.com" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-copyright">
        &copy; {currentYear} Glance Art
      </div>
    </footer>
  );
};

export default Footer;