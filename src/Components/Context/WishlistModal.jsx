// // import React, { useState, useEffect } from "react";
// // import "./WishlistModal.css";

// // const WishlistModal = ({ show, handleClose }) => {
// //   const [wishlistItems, setWishlistItems] = useState([]);

// //   // Load items from localStorage whenever the modal is opened
// //   useEffect(() => {
// //     if (show) {
// //       const savedItems = JSON.parse(localStorage.getItem("wishlist") || "[]");
// //       setWishlistItems(savedItems);
// //     }
// //   }, [show]);

// //   const removeItem = (id) => {
// //     const updated = wishlistItems.filter((item) => item.id !== id);
// //     setWishlistItems(updated);
// //     localStorage.setItem("wishlist", JSON.stringify(updated));
    
// //     // Sync the navbar count immediately
// //     window.dispatchEvent(new CustomEvent("wishlistUpdated", { detail: updated.length }));
// //   };

// //   const removeAll = () => {
// //     localStorage.setItem("wishlist", JSON.stringify([]));
// //     setWishlistItems([]);
// //     window.dispatchEvent(new CustomEvent("wishlistUpdated", { detail: 0 }));
// //   };

// //   if (!show) return null;

// //   return (
// //     <div className="wm-overlay" onClick={handleClose}>
// //       <div className="wm-modal" onClick={(e) => e.stopPropagation()}>
// //         {/* Header Section */}
// //         <div className="wm-header">
// //           <div className="wm-title">
// //             <span className="wm-heart-icon">♥</span> MY WISHLIST
// //           </div>
// //           <button className="wm-close-x" onClick={handleClose}>&times;</button>
// //         </div>

// //         {/* Content Section */}
// //         <div className="wm-body">
// //           {wishlistItems.length === 0 ? (
// //             <div className="wm-empty">Your wishlist is currently empty.</div>
// //           ) : (
// //             <div className="wm-grid">
// //               {wishlistItems.map((item) => (
// //                 <div key={item.id} className="wm-card">
// //                   <div className="wm-card-top">
// //                     <p className="wm-product-name">{item.title}</p>
// //                     <p className="wm-date">{new Date().toLocaleDateString('en-GB', { day: 'j M Y' })}</p>
// //                   </div>
                  
// //                   <img src={item.image} alt={item.title} className="wm-image" />
                  
// //                   <p className="wm-price">₹{item.price.toFixed(2)}</p>
                  
// //                   <div className="wm-actions">
// //                     <button className="wm-add-cart">ADD TO CART</button>
// //                     <button className="wm-remove-single" onClick={() => removeItem(item.id)}>
// //                       🗑️
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         {/* Bottom Action Links */}
// //         <div className="wm-bulk-actions">
// //           <button className="wm-link-btn">ADD ALL TO CART</button>
// //           <button className="wm-link-btn" onClick={removeAll}>REMOVE ALL FROM WISHLIST</button>
// //         </div>

// //         {/* Footer Section */}
// //         <div className="wm-footer">
// //           <button className="wm-footer-btn">✉ SEND EMAIL</button>
// //           <button className="wm-footer-btn">🔗 SHARE</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default WishlistModal;

// import React, { useState, useEffect } from "react";
// import "./WishlistModal.css";

// const WishlistModal = ({ show, handleClose }) => {
//   const [items, setItems] = useState([]);

//   // Load items from localStorage every time the modal is opened
//   useEffect(() => {
//     if (show) {
//       const savedItems = JSON.parse(localStorage.getItem("wishlist") || "[]");
//       setItems(savedItems);
//     }
//   }, [show]);

//   const removeItem = (id) => {
//     const updated = items.filter(item => item.id !== id);
//     setItems(updated);
//     localStorage.setItem("wishlist", JSON.stringify(updated));
//     // Update the badge count in the navbar
//     window.dispatchEvent(new CustomEvent("wishlistUpdated", { detail: updated.length }));
//   };

//   if (!show) return null;

//   return (
//     <div className="wm-overlay" onClick={handleClose}>
//       <div className="wm-modal" onClick={(e) => e.stopPropagation()}>
//         <div className="wm-header">
//           <h2 className="wm-title">❤️ MY WISHLIST</h2>
//           <button className="wm-close-btn" onClick={handleClose}>&times;</button>
//         </div>
//         <div className="wm-body">
//           {items.length === 0 ? (
//             <p>Your wishlist is empty.</p>
//           ) : (
//             <div className="wm-grid">
//               {items.map(item => (
//                 <div key={item.id} className="wm-card">
//                   <img src={item.image} alt={item.title} className="wm-img" />
//                   <h5>{item.title}</h5>
//                   <p>₹{item.price}</p>
//                   <button className="wm-add-cart">ADD TO CART</button>
//                   <button className="wm-remove" onClick={() => removeItem(item.id)}>🗑️</button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WishlistModal;

import React, { useState, useEffect } from "react";
import "./WishlistPage.css";

const WishlistPage = () => {
  const [items, setItems] = useState([]);

  // Load items from localStorage on page load
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setItems(savedItems);
  }, []);

  const removeItem = (id) => {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    // Update the badge count in the navbar
    window.dispatchEvent(new CustomEvent("wishlistUpdated", { detail: updated.length }));
  };

  const removeAll = () => {
    localStorage.setItem("wishlist", JSON.stringify([]));
    setItems([]);
    window.dispatchEvent(new CustomEvent("wishlistUpdated", { detail: 0 }));
  };

  return (
    <div className="wp-container">
      <div className="wp-header">
        <h2 className="wp-title"><span className="wp-heart">♥</span> MY WISHLIST</h2>
      </div>

      <div className="wp-body">
        {items.length === 0 ? (
          <div className="wp-empty">Your wishlist is currently empty.</div>
        ) : (
          <div className="wp-grid">
            {items.map((item) => (
              <div key={item.id} className="wp-card">
                <div className="wp-card-top">
                  <p className="wp-product-name">{item.title}</p>
                  <p className="wp-date">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                </div>
                
                <img src={item.image} alt={item.title} className="wp-image" />
                
                <p className="wp-price">₹{item.price.toFixed(2)}</p>
                
                <div className="wp-actions">
                  <button className="wp-add-cart">ADD TO CART</button>
                  <button className="wp-remove-single" onClick={() => removeItem(item.id)}>🗑️</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {items.length > 0 && (
        <>
          <div className="wp-bulk-actions">
            <button className="wp-link-btn">ADD ALL TO CART</button>
            <button className="wp-link-btn" onClick={removeAll}>REMOVE ALL FROM WISHLIST</button>
          </div>

          <div className="wp-footer">
            <button className="wp-footer-btn">✉ SEND EMAIL</button>
            <button className="wp-footer-btn">🔗 SHARE</button>
          </div>
        </>
      )}
    </div>
  );
};

export default WishlistPage;