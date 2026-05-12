import React, { useEffect } from "react";
import "./ProductModal.css";

export default function ProductModal({ product, onClose, onQuickBuy }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="pm-overlay" role="dialog" aria-modal="true">
      <div className="pm-card">
        <button className="pm-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="pm-left">
          <img src={product.image} alt={product.title} className="pm-image" />
        </div>

        <div className="pm-right">
          <h2 className="pm-heading">{product.title}</h2>
          <p className="pm-price">from Rs. {product.price.toFixed(2)}</p>
          <p className="pm-desc">{product.description}</p>

          <div className="pm-actions">
            <button
              className="pm-quickbuy"
              onClick={() => {
                onQuickBuy(product);
              }}
            >
              Quick Buy
            </button>
            <button
              className="pm-view"
              onClick={() => {
                // go to product page or add to cart flow
                window.location.href = `/product/${product.slug}`; // optional
              }}
            >
              View Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
