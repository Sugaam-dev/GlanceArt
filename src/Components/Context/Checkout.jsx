// // // import React from 'react';
// // // import './Checkout.css';

// // // const CheckoutPage = () => {
// // //   return (
// // //     <div className="checkout-wrapper">
// // //       <div className="checkout-container">
        
// // //         {/* LEFT COLUMN: Delivery & Payment */}
// // //         <main className="checkout-main">
// // //           <header className="checkout-header">
// // //             <span className="user-email">rushilpa14@gmail.com</span>
// // //           </header>

// // //           <section className="form-section">
// // //             <h3>Delivery</h3>
// // //             <div className="input-grid">
// // //               <select className="full-width"><option>India</option></select>
// // //               <div className="row">
// // //                 <input type="text" placeholder="First name" />
// // //                 <input type="text" placeholder="Last name" />
// // //               </div>
// // //               <input type="text" placeholder="GST Number For Tax Credit (Optional)" className="full-width" />
// // //               <div className="address-wrapper">
// // //                 <input type="text" placeholder="Address" className="full-width" />
// // //                 <i className="search-icon">🔍</i>
// // //               </div>
// // //               <input type="text" placeholder="Apartment, suite, etc. (optional)" className="full-width" />
// // //               <div className="row triple">
// // //                 <input type="text" placeholder="City" />
// // //                 <select><option>Maharashtra</option></select>
// // //                 <input type="text" placeholder="PIN code" />
// // //               </div>
// // //               <input type="text" placeholder="Phone" className="full-width" />
// // //             </div>
// // //           </section>

// // //           <section className="form-section">
// // //             <h3>Payment</h3>
// // //             <p className="subtext">All transactions are secure and encrypted.</p>
// // //             <div className="payment-options">
// // //               <div className="payment-method">
// // //                 <input type="radio" name="payment" id="razorpay" />
// // //                 <label htmlFor="razorpay">Razorpay Secure (UPI, Cards, Wallets)</label>
// // //               </div>
// // //               <div className="payment-method active">
// // //                 <input type="radio" name="payment" id="phonepe" defaultChecked />
// // //                 <label htmlFor="phonepe">PhonePe Payment Gateway (UPI, Cards & NetBanking)</label>
// // //               </div>
// // //             </div>
// // //           </section>

// // //           <button className="pay-now-btn">Pay now</button>
// // //         </main>

// // //         {/* RIGHT COLUMN: Order Summary */}
// // //         <aside className="checkout-summary">
// // //           <div className="product-card">
// // //             <div className="product-info">
// // //               <div className="product-image">
// // //                 <img src="https://via.placeholder.com/60" alt="Tiger Print" />
// // //                 <span className="quantity-badge">1</span>
// // //               </div>
// // //               <div className="product-details">
// // //                 <p className="product-name">Jungle Tiger Botanical Art Prints</p>
// // //                 <p className="product-variant">XS / Matte Paper / Rolled Art</p>
// // //               </div>
// // //               <span className="product-price">₹679.00</span>
// // //             </div>
// // //           </div>

// // //           <div className="discount-section">
// // //             <input type="text" placeholder="Discount code or gift card" />
// // //             <button disabled>Apply</button>
// // //           </div>

// // //           <div className="total-breakdown">
// // //             <div className="total-row">
// // //               <span>Subtotal</span>
// // //               <span>₹679.00</span>
// // //             </div>
// // //             <div className="total-row main-total">
// // //               <span>Total</span>
// // //               <span><small>INR</small> ₹679.00</span>
// // //             </div>
// // //             <p className="tax-info">Including ₹32.33 in taxes</p>
// // //           </div>
// // //         </aside>

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CheckoutPage;

// // import React, { useState, useEffect } from "react";
// // import "./Checkout.css";

// // const Checkout = () => {
// //   const [cartItems, setCartItems] = useState([]);
  

// //   // Load items from localStorage to stay in sync with your CartDrawer
// //   useEffect(() => {
// //     const loadCart = () => {
// //       const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
// //       setCartItems(savedCart);
// //     };
// //     loadCart();
// //   }, []);

// //   const subtotal = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
// //   const tax = subtotal * 0.05; // Estimated tax (approx 5%)
// //   const total = subtotal + tax;

// //   return (
// //     <div className="checkout-page-container">
// //       <div className="checkout-content-wrapper">
        
// //         {/* LEFT COLUMN: User Info & Forms */}
// //         <main className="checkout-left-col">
// //           <header className="checkout-logo-header">
// //             <div className="brand-logo">ArtGallary</div>
// //             <div className="user-login-info">rushilpa14@gmail.com</div>
// //           </header>

// //           <section className="checkout-section">
// //             <h2 className="section-heading">Delivery</h2>
// //             <div className="form-layout">
// //               <select className="input-field">
// //                 <option>India</option>
// //               </select>
// //               <div className="input-flex-row">
// //                 <input type="text" placeholder="First name" className="input-field" />
// //                 <input type="text" placeholder="Last name" className="input-field" />
// //               </div>
// //               <input type="text" placeholder="GST Number For Tax Credit (Optional)" className="input-field" />
// //               <div className="address-input-container">
// //                 <input type="text" placeholder="Address" className="input-field" />
// //                 <span className="address-search-icon">🔍</span>
// //               </div>
// //               <input type="text" placeholder="Apartment, suite, etc. (optional)" className="input-field" />
// //               <div className="input-flex-row triple-grid">
// //                 <input type="text" placeholder="City" className="input-field" />
// //                 <select className="input-field"><option>Maharashtra</option></select>
// //                 <input type="text" placeholder="PIN code" className="input-field" />
// //               </div>
// //               <input type="text" placeholder="Phone" className="input-field" />
// //             </div>
// //           </section>

// //           <section className="checkout-section">
// //             <h2 className="section-heading">Payment</h2>
// //             <p className="payment-security-text">All transactions are secure and encrypted.</p>
// //             <div className="payment-gateway-list">
// //               <div className="gateway-row">
// //                 <input type="radio" name="paymentMethod" id="razorpay" />
// //                 <label htmlFor="razorpay">Razorpay Secure (UPI, Cards, Int'l Cards, Wallets)</label>
// //               </div>
// //               <div className="gateway-row active-gateway">
// //                 <div className="gateway-label-top">
// //                   <input type="radio" name="paymentMethod" id="phonepe" defaultChecked />
// //                   <label htmlFor="phonepe">PhonePe Payment Gateway (UPI, Cards & NetBanking)</label>
// //                 </div>
// //                 <div className="gateway-redirect-notice">
// //                   <div className="redirect-graphic">📄</div>
// //                   <p>After clicking "Pay now", you will be redirected to PhonePe Payment Gateway (UPI, Cards & NetBanking) to complete your purchase securely.</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </section>

// //           <button className="submit-pay-button">Pay now</button>

// //           <footer className="checkout-legal-footer">
// //             <a href="#refund">Refund policy</a>
// //             <a href="#privacy">Privacy policy</a>
// //             <a href="#terms">Terms of service</a>
// //           </footer>
// //         </main>

// //         {/* RIGHT COLUMN: Order Summary */}
// //         <aside className="checkout-right-col">
// //           <div className="sticky-summary">
// //             {cartItems.map((item) => (
// //               <div key={item.id} className="cart-product-row">
// //                 <div className="product-thumb-container">
// //                   <img src={item.image} alt={item.title} />
// //                   <span className="product-qty-tag">{item.quantity}</span>
// //                 </div>
// //                 <div className="product-text-details">
// //                   <h4 className="product-title">{item.title}</h4>
// //                   <p className="product-variant-info">{item.size} / {item.frame}</p>
// //                 </div>
// //                 <span className="product-final-price">₹{(item.price * item.quantity).toFixed(2)}</span>
// //               </div>
// //             ))}

// //             <div className="promo-code-container">
// //               <input type="text" placeholder="Discount code or gift card" className="input-field" />
// //               <button className="promo-apply-btn">Apply</button>
// //             </div>

// //             <div className="summary-math-table">
// //               <div className="math-row">
// //                 <span>Subtotal</span>
// //                 <span>₹{subtotal.toFixed(2)}</span>
// //               </div>
// //               <div className="math-row">
// //                 <span>Shipping</span>
// //                 <span className="shipping-placeholder">Enter shipping address</span>
// //               </div>
// //               <div className="math-row final-total-line">
// //                 <span className="total-text">Total</span>
// //                 <div className="total-price-box">
// //                   <span className="iso-currency">INR</span>
// //                   <span className="total-val">₹{total.toFixed(2)}</span>
// //                 </div>
// //               </div>
// //               <p className="tax-notice-text">Including ₹{tax.toFixed(2)} in taxes</p>
// //             </div>
// //           </div>
// //         </aside>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Checkout;

// import React, { useState, useEffect } from "react";
// import "./Checkout.css";

// const Checkout = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const loadCart = () => {
//       const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//       setCartItems(savedCart);
//     };
//     loadCart();
//   }, []);

//   // Helper function to safely parse prices and avoid NaN
//   const getSafePrice = (price) => {
//     if (typeof price === "number") return price;
//     if (typeof price === "string") {
//       // Removes any non-numeric characters like ₹ or commas
//       const parsed = parseFloat(price.replace(/[^\d.]/g, ""));
//       return isNaN(parsed) ? 0 : parsed;
//     }
//     return 0;
//   };

//   const subtotal = cartItems.reduce((acc, item) => {
//     return acc + (getSafePrice(item.price) * (item.quantity || 1));
//   }, 0);

//   const tax = subtotal * 0.05; // 5% Tax calculation
//   const total = subtotal + tax;

//   return (
//     <div className="checkout-page-container">
//       <div className="checkout-content-wrapper">
        
//         {/* LEFT COLUMN: Delivery & Payment */}
//         <main className="checkout-left-col">
//           <header className="checkout-header-nav">
//             <div className="checkout-logo">ArtGallary</div>
//             <div className="user-email-tag">rushilpa14@gmail.com</div>
//           </header>

//           <section className="checkout-form-section">
//             <h2 className="section-title">Delivery</h2>
//             <div className="form-container">
//               <select className="checkout-input">
//                 <option>India</option>
//               </select>
//               <div className="input-row">
//                 <input type="text" placeholder="First name" className="checkout-input" />
//                 <input type="text" placeholder="Last name" className="checkout-input" />
//               </div>
//               <input type="text" placeholder="GST Number For Tax Credit (Optional)" className="checkout-input" />
//               <div className="address-box">
//                 <input type="text" placeholder="Address" className="checkout-input" />
//                 <span className="search-icon-placeholder">🔍</span>
//               </div>
//               <input type="text" placeholder="Apartment, suite, etc. (optional)" className="checkout-input" />
//               <div className="input-row triple">
//                 <input type="text" placeholder="City" className="checkout-input" />
//                 <select className="checkout-input"><option>Maharashtra</option></select>
//                 <input type="text" placeholder="PIN code" className="checkout-input" />
//               </div>
//               <input type="text" placeholder="Phone" className="checkout-input" />
//             </div>
//           </section>

//           <section className="checkout-form-section">
//             <h2 className="section-title">Payment</h2>
//             <p className="secure-info">All transactions are secure and encrypted.</p>
//             <div className="payment-gateway-container">
//               <div className="gateway-option">
//                 <input type="radio" name="pay" id="razor" />
//                 <label htmlFor="razor">Razorpay Secure (UPI, Cards, Wallets)</label>
//               </div>
//               <div className="gateway-option active-option">
//                 <div className="option-header">
//                   <input type="radio" name="pay" id="phonepe" defaultChecked />
//                   <label htmlFor="phonepe">PhonePe Payment Gateway (UPI, Cards & NetBanking)</label>
//                 </div>
//                 <div className="redirect-explanation">
//                   <div className="redirect-icon">📄</div>
//                   <p>After clicking "Pay now", you will be redirected to PhonePe to complete your purchase securely.</p>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <button className="main-pay-button">Pay now</button>

//           <footer className="legal-links">
//             <a href="/refund">Refund policy</a>
//             <a href="/privacy">Privacy policy</a>
//             <a href="/terms">Terms of service</a>
//           </footer>
//         </main>

//         {/* RIGHT COLUMN: Order Summary */}
//         <aside className="checkout-right-col">
//           <div className="sticky-sidebar">
//             {cartItems.map((item, index) => {
//               const itemPrice = getSafePrice(item.price);
//               return (
//                 <div key={index} className="product-summary-row">
//                   <div className="image-badge-wrapper">
//                     <img src={item.image} alt={item.title} />
//                     <span className="qty-badge">{item.quantity || 1}</span>
//                   </div>
//                   <div className="product-text">
//                     <p className="p-name">{item.title}</p>
//                     <p className="p-variant">{item.size} / {item.frame}</p>
//                   </div>
//                   <div className="p-price">
//                     ₹{(itemPrice * (item.quantity || 1)).toFixed(2)}
//                   </div>
//                 </div>
//               );
//             })}

//             <div className="discount-input-group">
//               <input type="text" placeholder="Discount code or gift card" />
//               <button disabled>Apply</button>
//             </div>

//             <div className="final-math">
//               <div className="math-line">
//                 <span>Subtotal</span>
//                 <span>₹{subtotal.toFixed(2)}</span>
//               </div>
//               <div className="math-line">
//                 <span>Shipping</span>
//                 <span className="shipping-note">Enter shipping address</span>
//               </div>
//               <div className="math-line total-line">
//                 <span className="total-label">Total</span>
//                 <div className="total-val-box">
//                   <span className="currency-label">INR</span>
//                   <span className="price-bold">₹{total.toFixed(2)}</span>
//                 </div>
//               </div>
//               <p className="tax-subtext">Including ₹{tax.toFixed(2)} in taxes</p>
//             </div>
//           </div>
//         </aside>

//       </div>
//     </div>
//   );
// };

// export default Checkout;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import "./Checkout.css";

const Checkout = () => {
  const location = useLocation(); // Hook to access state passed from ProductPage
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // 1. Check if we arrived here via "Buy It Now"
    const buyNowItem = location.state?.buyNowItem;

    if (buyNowItem) {
      // If "Buy It Now" was clicked, only show that specific item
      setCartItems([buyNowItem]);
    } else {
      // 2. Otherwise, load the regular cart from localStorage
      const loadCart = () => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(savedCart);
      };
      loadCart();
    }
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, [location.state]);

  // Helper function to safely parse prices and avoid NaN
  const getSafePrice = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string") {
      const parsed = parseFloat(price.replace(/[^\d.]/g, ""));
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + (getSafePrice(item.price) * (item.quantity || 1));
  }, 0);

  const tax = subtotal * 0.05; // 5% Tax calculation
  const total = subtotal + tax;

  return (
    <div className="checkout-page-container">
      <div className="checkout-content-wrapper">
        
        {/* LEFT COLUMN: Delivery & Payment */}
        <main className="checkout-left-col">
          <header className="checkout-header-nav">
            <div className="checkout-logo">ArtGallary</div>
            <div className="user-email-tag">rushilpa14@gmail.com</div>
          </header>

          <section className="checkout-form-section">
            <h2 className="section-title">Delivery</h2>
            <div className="form-container">
              <select className="checkout-input">
                <option>India</option>
              </select>
              <div className="input-row">
                <input type="text" placeholder="First name" className="checkout-input" />
                <input type="text" placeholder="Last name" className="checkout-input" />
              </div>
              <input type="text" placeholder="GST Number For Tax Credit (Optional)" className="checkout-input" />
              <div className="address-box">
                <input type="text" placeholder="Address" className="checkout-input" />
                <span className="search-icon-placeholder">🔍</span>
              </div>
              <input type="text" placeholder="Apartment, suite, etc. (optional)" className="checkout-input" />
              <div className="input-row triple">
                <input type="text" placeholder="City" className="checkout-input" />
                <select className="checkout-input"><option>Maharashtra</option></select>
                <input type="text" placeholder="PIN code" className="checkout-input" />
              </div>
              <input type="text" placeholder="Phone" className="checkout-input" />
            </div>
          </section>

          <section className="checkout-form-section">
            <h2 className="section-title">Payment</h2>
            <p className="secure-info">All transactions are secure and encrypted.</p>
            <div className="payment-gateway-container">
              <div className="gateway-option">
                <input type="radio" name="pay" id="razor" />
                <label htmlFor="razor">Razorpay Secure (UPI, Cards, Wallets)</label>
              </div>
              <div className="gateway-option active-option">
                <div className="option-header">
                  <input type="radio" name="pay" id="phonepe" defaultChecked />
                  <label htmlFor="phonepe">PhonePe Payment Gateway (UPI, Cards & NetBanking)</label>
                </div>
                <div className="redirect-explanation">
                  <div className="redirect-icon">📄</div>
                  <p>After clicking "Pay now", you will be redirected to PhonePe to complete your purchase securely.</p>
                </div>
              </div>
            </div>
          </section>

          <button className="main-pay-button">Pay now</button>

          <footer className="legal-links">
            <a href="/refund">Refund policy</a>
            <a href="/privacy">Privacy policy</a>
            <a href="/terms">Terms of service</a>
          </footer>
        </main>

        {/* RIGHT COLUMN: Order Summary */}
        <aside className="checkout-right-col">
          <div className="sticky-sidebar">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => {
                const itemPrice = getSafePrice(item.price);
                return (
                  <div key={index} className="product-summary-row">
                    <div className="image-badge-wrapper">
                      <img src={item.image} alt={item.title} />
                      <span className="qty-badge">{item.quantity || 1}</span>
                    </div>
                    <div className="product-text">
                      <p className="p-name">{item.title}</p>
                      <p className="p-variant">{item.size} / {item.frame}</p>
                    </div>
                    <div className="p-price">
                      ₹{(itemPrice * (item.quantity || 1)).toFixed(2)}
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Your cart is empty.</p>
            )}

            <div className="discount-input-group">
              <input type="text" placeholder="Discount code or gift card" />
              <button disabled>Apply</button>
            </div>

            <div className="final-math">
              <div className="math-line">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="math-line">
                <span>Shipping</span>
                <span className="shipping-note">Enter shipping address</span>
              </div>
              <div className="math-line total-line">
                <span className="total-label">Total</span>
                <div className="total-val-box">
                  <span className="currency-label">INR</span>
                  <span className="price-bold">₹{total.toFixed(2)}</span>
                </div>
              </div>
              <p className="tax-subtext">Including ₹{tax.toFixed(2)} in taxes</p>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Checkout;