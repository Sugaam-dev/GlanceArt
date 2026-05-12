// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ShopLoginPage.css';

// const ShopLoginPage = () => {
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

// const handleContinue = (e) => {
//   e.preventDefault();
//   // Navigate to the OTP page, passing the email via state
//   navigate('/login/shop/verify', { state: { email: email } }); 
// };

//   return (
//     <div className="shop-auth-container">
//       <div className="shop-auth-card">
//         {/* Top Branding Bar */}
//         <header className="shop-card-header">
//           <div className="shop-logo-svg">
//              {/* Replace with a proper Shop SVG logo */}
//              <span className="shop-brand-text">shop</span>
//           </div>
//           <span className="shop-merchant-name">Glance Art</span>
//         </header>

//         <div className="shop-card-content">
//           <h2 className="shop-title">Sign in to Shop</h2>
//           <p className="shop-subtitle">Or create an account</p>

//           <form onSubmit={handleContinue}>
//             <div className="shop-input-group">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="shop-input-field"
//                 required
//               />
//             </div>

//             <button 
//               type="submit" 
//               className="shop-btn-continue"
//             >
//               Continue
//             </button>
//           </form>

//           <footer className="shop-legal-footer">
//             By continuing, you agree to Shop's <a href="#">terms</a>, <a href="#">privacy policy</a>, 
//             and to sharing your name and email with Glance Art. 
//             See their <a href="#">terms</a> and <a href="#">privacy policy</a>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopLoginPage;
