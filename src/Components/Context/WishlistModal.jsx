

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