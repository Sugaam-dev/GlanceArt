
// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "./WishlistPage.css";

// export default function WishlistPage() {
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
//     setWishlist(savedWishlist);
//   }, []);

//   const updateWishlist = (newList) => {
//     setWishlist(newList);
//     localStorage.setItem("wishlist", JSON.stringify(newList));
//     window.dispatchEvent(new CustomEvent("wishlistUpdated", { detail: newList.length }));
//   };

//   const removeItem = (id) => {
//     const newList = wishlist.filter((item) => item.id !== id);
//     updateWishlist(newList);
//   };

//   return (
//     <div className="wishlist-page-wrapper">
//       <Container className="wishlist-container">
//         <div className="wishlist-header">
//           <h2><span className="gold-heart">♥</span> MY WISHLIST</h2>
//           <button className="close-btn" onClick={() => window.history.back()}>✕</button>
//         </div>

//         <div className="wishlist-content">
//           {wishlist.length === 0 ? (
//             <div className="empty-message">Your wishlist is currently empty.</div>
//           ) : (
//             <Row className="wishlist-grid">
//               {wishlist.map((item) => (
//                 <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="wishlist-col">
//                   <div className="wishlist-card">
//                     <div className="wishlist-item-info">
//                       <h4 className="item-title">{item.title}</h4>
//                       <p className="item-date">{new Date().toLocaleDateString()}</p>
//                     </div>
//                     <div className="wishlist-image-container">
//                       <img src={item.image} alt={item.title} className="wishlist-img" />
//                     </div>
//                     <div className="wishlist-price">₹{item.price}</div>
//                     <div className="wishlist-card-footer">
//                       <Button className="btn-add-cart">ADD TO CART</Button>
//                       <button className="delete-btn" onClick={() => removeItem(item.id)}>🗑️</button>
//                     </div>
//                   </div>
//                 </Col>
//               ))}
//             </Row>
//           )}
//         </div>
//       </Container>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./WishlistPage.css";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  const updateWishlist = (newList) => {
    setWishlist(newList);
    localStorage.setItem("wishlist", JSON.stringify(newList));
    window.dispatchEvent(new CustomEvent("wishlistUpdated", { detail: newList.length }));
  };

  const removeItem = (id) => {
    const newList = wishlist.filter((item) => item.id !== id);
    updateWishlist(newList);
  };

  // UPDATED FUNCTION: Removed alert and added logic
  const addToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const itemToCart = {
      id: `${product.id}-default`, 
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: "M", 
      frame: "ROLLED ART"
    };

    const existingItemIndex = currentCart.findIndex(item => item.id === itemToCart.id);
    if (existingItemIndex > -1) {
      currentCart[existingItemIndex].quantity += 1;
    } else {
      currentCart.push(itemToCart);
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));
    
    // This triggers the blue dot in MiddleHeader and updates CartDrawer
    window.dispatchEvent(new CustomEvent("cartUpdated"));
    
    // No alert here anymore - it will just update the UI silently
  };

  return (
    <div className="wishlist-page-wrapper">
      <Container className="wishlist-container">
        <div className="wishlist-header">
          <h2><span className="gold-heart">♥</span> MY WISHLIST</h2>
          <button className="close-btn" onClick={() => window.history.back()}>✕</button>
        </div>

        <div className="wishlist-content">
          {wishlist.length === 0 ? (
            <div className="empty-message">Your wishlist is currently empty.</div>
          ) : (
            <Row className="wishlist-grid">
              {wishlist.map((item) => (
                <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="wishlist-col">
                  <div className="wishlist-card">
                    <div className="wishlist-item-info">
                      <h4 className="item-title">{item.title}</h4>
                      <p className="item-date">{new Date().toLocaleDateString()}</p>
                    </div>
                    <div className="wishlist-image-container">
                      <img src={item.image} alt={item.title} className="wishlist-img" />
                    </div>
                    <div className="wishlist-price">₹{item.price}</div>
                    <div className="wishlist-card-footer">
                      <Button 
                        className="btn-add-cart" 
                        onClick={() => addToCart(item)}
                      >
                        ADD TO CART
                      </Button>
                      <button className="delete-btn" onClick={() => removeItem(item.id)}>🗑️</button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </div>
  );
}