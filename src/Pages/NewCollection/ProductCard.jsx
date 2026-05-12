

import React from 'react';

const ProductCard = ({ product }) => {
  // Ensure price is formatted as "from Rs. XXX.XX"
  const priceValue = typeof product.price === 'string' 
    ? parseFloat(product.price.replace('from Rs. ', '')) 
    : product.price;

  const formattedPrice = `from Rs. ${priceValue.toFixed(2)}`;
  
  return (
    <div className="pf_product_card" key={product.id}>
      
      {/* Wrapper for image and Quick Buy overlay */}
      <div className="pf_product_image_wrapper">
        <img 
          src={product.image} 
          className="pf_product_img" 
          alt={product.title} 
        />
        
        {/* Quick Buy overlay (visible on hover via CSS) */}
        <div className="pf_quick_buy_overlay">
          <button className="pf_quick_buy_btn">Quick Buy</button>
        </div>
      </div>
      
      <h3 className="pf_product_title">{product.title}</h3>
      <p className="pf_product_price">{formattedPrice}</p>
    </div>
  );
};

export default ProductCard;