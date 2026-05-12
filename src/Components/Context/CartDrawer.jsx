// // import React, { useState, useEffect } from "react";
// // import { Offcanvas, Stack, Button } from "react-bootstrap";
// // import "./CartDrawer.css";

// // export default function CartDrawer({ show, handleClose }) {
// //   const [cartItems, setCartItems] = useState([]);

// //   useEffect(() => {
// //     const loadCart = () => {
// //       const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
// //       setCartItems(savedCart);
// //     };

// //     loadCart();

// //     // Listen for the custom event dispatched from ProductPage
// //     window.addEventListener("cartUpdated", loadCart);
// //     return () => window.removeEventListener("cartUpdated", loadCart);
// //   }, []);

// //   const removeItem = (id) => {
// //     const updatedCart = cartItems.filter((item) => item.id !== id);
// //     localStorage.setItem("cart", JSON.stringify(updatedCart));
// //     setCartItems(updatedCart);
// //     window.dispatchEvent(new CustomEvent("cartUpdated"));
// //   };

// //   const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

// //   return (
// //     // Changed placement to "end" to slide from the right side
// //     <Offcanvas show={show} onHide={handleClose} placement="end" className="cart-drawer">
// //       <Offcanvas.Header closeButton className="cart-header">
// //         <Offcanvas.Title>YOUR CART ({cartItems.length})</Offcanvas.Title>
// //       </Offcanvas.Header>
// //       <Offcanvas.Body>
// //         {cartItems.length === 0 ? (
// //           <div className="empty-cart-msg">Your cart is empty.</div>
// //         ) : (
// //           <Stack gap={3}>
// //             {cartItems.map((item) => (
// //               <div key={item.id} className="cart-item-row">
// //                 <img src={item.image} alt={item.title} className="cart-item-img" />
// //                 <div className="cart-item-details">
// //                   <h6>{item.title}</h6>
// //                   <p>₹{item.price.toFixed(2)}</p>
// //                   <button className="remove-link" onClick={() => removeItem(item.id)}>Remove</button>
// //                 </div>
// //               </div>
// //             ))}
// //           </Stack>
// //         )}
// //       </Offcanvas.Body>
// //       {cartItems.length > 0 && (
// //         <div className="cart-footer">
// //           <div className="subtotal-row">
// //             <span>SUBTOTAL</span>
// //             <span>₹{subtotal.toFixed(2)}</span>
// //           </div>
// //           <Button className="checkout-btn" variant="dark">CHECKOUT</Button>
// //         </div>
// //       )}
// //     </Offcanvas>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import { Offcanvas, Stack, Button } from "react-bootstrap";
// import "./CartDrawer.css";

// export default function CartDrawer({ show, handleClose }) {
//   const [cartItems, setCartItems] = useState([]);

//   const handleCheckoutNavigation = () => {
//     handleClose(); // Closes the drawer
//     navigate("/checkout"); // Moves to the checkout page
//   };

//   const loadCart = () => {
//     const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     // Ensure every item has at least a quantity of 1
//     const initializedCart = savedCart.map(item => ({
//       ...item,
//       quantity: item.quantity || 1
//     }));
//     setCartItems(initializedCart);
//   };

//   useEffect(() => {
//     loadCart();
//     window.addEventListener("cartUpdated", loadCart);
//     return () => window.removeEventListener("cartUpdated", loadCart);
//   }, []);

//   const updateQuantity = (id, delta) => {
//     const updatedCart = cartItems.map((item) => {
//       if (item.id === id) {
//         const newQty = Math.max(1, (item.quantity || 1) + delta);
//         return { ...item, quantity: newQty };
//       }
//       return item;
//     });
    
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCartItems(updatedCart);
//     window.dispatchEvent(new CustomEvent("cartUpdated"));
//   };

//   const removeItem = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCartItems(updatedCart);
//     window.dispatchEvent(new CustomEvent("cartUpdated"));
//   };

//   // Calculate subtotal based on price * quantity
//   const subtotal = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

//   return (
//     <Offcanvas show={show} onHide={handleClose} placement="end" className="cart-drawer" style={{ zIndex: 2000 }}>
//       <Offcanvas.Header closeButton className="cart-header">
//         <Offcanvas.Title>YOUR CART ({cartItems.length})</Offcanvas.Title>
//       </Offcanvas.Header>
//       <Offcanvas.Body>
//         {cartItems.length === 0 ? (
//           <div className="empty-cart-msg">Your cart is empty.</div>
//         ) : (
//           <Stack gap={3}>
//             {cartItems.map((item) => (
//               <div key={item.id} className="cart-item-row">
//                 <img src={item.image} alt={item.title} className="cart-item-img" />
//                 <div className="cart-item-details">
//                   <h6>{item.title}</h6>
//                   <p className="cart-item-options">{item.size} / {item.frame}</p>
//                   <p>₹{item.price.toFixed(2)}</p>
                  
//                   {/* Quantity Controls */}
//                   <div className="quantity-control">
//                     <button onClick={() => updateQuantity(item.id, -1)}>-</button>
//                     <span>{item.quantity || 1}</span>
//                     <button onClick={() => updateQuantity(item.id, 1)}>+</button>
//                   </div>

//                   <button className="remove-link" onClick={() => removeItem(item.id)}>Remove</button>
//                 </div>
//               </div>
//             ))}
//           </Stack>
//         )}
//       </Offcanvas.Body>
//       {cartItems.length > 0 && (
//         <div className="cart-footer">
//           <div className="subtotal-row">
//             <span>SUBTOTAL</span>
//             <span>₹{subtotal.toFixed(2)}</span>
//           </div>
//           <Button 
//             className="checkout-btn" 
//             variant="dark" 
//             onClick={handleCheckoutNavigation}
//           >
//             CHECKOUT
//           </Button>
//         </div>
//       )}
//     </Offcanvas>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import { Offcanvas, Stack, Button } from "react-bootstrap";
import "./CartDrawer.css";

export default function CartDrawer({ show, handleClose }) {
  const navigate = useNavigate(); // Initialize navigation hook
  const [cartItems, setCartItems] = useState([]);

  const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const initializedCart = savedCart.map(item => ({
      ...item,
      quantity: item.quantity || 1
    }));
    setCartItems(initializedCart);
  };

  useEffect(() => {
    loadCart();
    window.addEventListener("cartUpdated", loadCart);
    return () => window.removeEventListener("cartUpdated", loadCart);
  }, []);

  // Fix: Defined the missing navigation function
  const handleCheckoutNavigation = () => {
    handleClose(); // Close the drawer first
    navigate("/checkout"); // Redirect to the checkout page
  };

  const updateQuantity = (id, delta) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = Math.max(1, (item.quantity || 1) + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" className="cart-drawer" style={{ zIndex: 2000 }}>
      <Offcanvas.Header closeButton className="cart-header">
        <Offcanvas.Title>YOUR CART ({cartItems.length})</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <div className="empty-cart-msg">Your cart is empty.</div>
        ) : (
          <Stack gap={3}>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-row">
                <img src={item.image} alt={item.title} className="cart-item-img" />
                <div className="cart-item-details">
                  <h6>{item.title}</h6>
                  <p className="cart-item-options">{item.size} / {item.frame}</p>
                  <p>₹{item.price.toFixed(2)}</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-link" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </Stack>
        )}
      </Offcanvas.Body>
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="subtotal-row">
            <span>SUBTOTAL</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          {/* Linked the function to this button */}
          <Button className="checkout-btn" variant="dark" onClick={handleCheckoutNavigation}>
            CHECKOUT
          </Button>
        </div>
      )}
    </Offcanvas>
  );
}