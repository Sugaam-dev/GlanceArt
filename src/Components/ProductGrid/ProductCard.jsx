import React from "react";
import "./ProductGrid.css"; // single CSS file shared between grid & card

export default function ProductCard({ product, onOpen }) {
  return (
    <div className="pg-card" onClick={() => onOpen(product)}>
      <div className="pg-image-wrap">
        <img src={product.image} alt={product.title} className="pg-image" />
        {/* quick-buy overlay on hover for desktop; visible on mobile as a bottom button */}
        <div className="pg-quick-overlay">
          <button
            className="pg-quick-btn"
            onClick={(e) => { e.stopPropagation(); onOpen(product); 
            }}
          >
            Quick Buy
          </button>
        </div>
      </div>

      <div className="pg-meta">
        <h3 className="pg-title">{product.title}</h3>
        <p className="pg-price">from Rs. {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
