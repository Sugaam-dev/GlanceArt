

// // // // import React, { useEffect, useState } from "react";
// // // // import "./ProductPage.css"; 
// // // // import { useNavigate, useLocation } from "react-router-dom"; 

// // // // const dummyProduct = {
// // // //   id: 1,
// // // //   title: "A HAND HOLDING A GLASS OF RED WINE ART PRINT",
// // // //   slug: "red-wine-art-print",
// // // //   price: 679.0,
// // // //   description: "Product description goes here, matching the product page layout.",
// // // //   image: "/assets/images/product1.webp",
// // // //   images: [
// // // //     "/path/to/thumb1.jpg",
// // // //     "/path/to/thumb2.jpg",
// // // //     "/path/to/thumb3.jpg",
// // // //   ],
// // // //   sizes: ["XS", "S", "M", "L", "XL", "XXL"],
// // // //   materials: ["WHITE CANVAS", "CANVAS"],
// // // //   frames: ["ROLLED ART", "BLACK FRAME", "WHITE FRAME", "WOODEN FRAME", "GOLD METAL FRAME"],
// // // // };

// // // // export default function ProductPage({ product: propProduct = dummyProduct, onQuickBuy }) {
// // // //   // 1. ALWAYS initialize hooks first at the top
// // // //   const navigate = useNavigate(); 
// // // //   const location = useLocation();

// // // //   // 2. Determine which product to use (priority to location state from navigate)
// // // //   const currentProduct = location.state?.productData || propProduct;

// // // //   // 3. Initialize state
// // // //   const [selectedSize, setSelectedSize] = useState(currentProduct?.sizes?.[0] ?? '');
// // // //   const [selectedMaterial, setSelectedMaterial] = useState(currentProduct?.materials?.[0] ?? '');
// // // //   const [selectedFrame, setSelectedFrame] = useState(currentProduct?.frames?.[0] ?? '');
// // // //   const [mainImage, setMainImage] = useState(currentProduct?.images?.[0] || currentProduct?.image || '');

// // // //   // 4. Update internal state if the product changes (e.g., clicking a different product)
// // // //   useEffect(() => {
// // // //     if (currentProduct) {
// // // //       console.log("Loaded product:", currentProduct);
// // // //       setSelectedSize(currentProduct.sizes?.[0] || "");
// // // //       setSelectedMaterial(currentProduct.materials?.[0] || "");
// // // //       setSelectedFrame(currentProduct.frames?.[0] || "");
// // // //       setMainImage(currentProduct.images?.[0] || currentProduct.image || "");
      
// // // //       // Scroll to top when a new product is loaded
// // // //       window.scrollTo(0, 0);
// // // //     }
// // // //   }, [currentProduct]);

// // // //   // 5. Global Quick Buy listener logic
// // // //   useEffect(() => {
// // // //     function handleQuickBuy(e) {
// // // //       const productData = e.detail; 
// // // //       console.log("Navigating to:", productData);
      
// // // //       navigate(`/product/${productData.slug}`, { 
// // // //         state: { productData: productData } 
// // // //       });
// // // //     }

// // // //     window.addEventListener("quickBuy", handleQuickBuy);
// // // //     return () => window.removeEventListener("quickBuy", handleQuickBuy);
// // // //   }, [navigate]);

// // // //   const handleAddToCart = () => {
// // // //     alert(`Added ${currentProduct.title} (Size: ${selectedSize}, Frame: ${selectedFrame}) to cart!`);
// // // //   };

// // // //   return (
// // // //     <div className="pp-container">
// // // //       <p className="pp-breadcrumbs">Home / Art Print</p>
// // // //       <div className="pp-layout">
// // // //         <div className="pp-left">
// // // //           <div className="pp-thumbnails">
// // // //             {currentProduct.images && currentProduct.images.map((img, index) => (
// // // //               <img
// // // //                 key={index}
// // // //                 src={img}
// // // //                 alt={`Thumbnail ${index + 1}`}
// // // //                 className={`pp-thumb ${img === mainImage ? 'active' : ''}`}
// // // //                 onClick={() => setMainImage(img)}
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //           <div className="pp-main-image-wrap">
// // // //             <img src={mainImage} alt={currentProduct.title} className="pp-main-image" />
// // // //           </div>
// // // //         </div>

// // // //         <div className="pp-right">
// // // //           <h1 className="pp-title">{currentProduct.title}</h1>
// // // //           <p className="pp-price">Rs. {currentProduct.price.toFixed(2)}</p>
// // // //           <p className="pp-tax-note">Tax included.</p>

// // // //           <div className="pp-option-group">
// // // //             <span className="pp-option-label">Size</span>
// // // //             <div className="pp-buttons-row">
// // // //               {currentProduct.sizes && currentProduct.sizes.map((size) => (
// // // //                 <button
// // // //                   key={size}
// // // //                   className={`pp-option-button ${selectedSize === size ? 'active' : ''}`}
// // // //                   onClick={() => setSelectedSize(size)}
// // // //                 >
// // // //                   {size}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           <div className="pp-option-group">
// // // //             <span className="pp-option-label">Material</span>
// // // //             <div className="pp-buttons-row">
// // // //               {currentProduct.materials && currentProduct.materials.map((material) => (
// // // //                 <button
// // // //                   key={material}
// // // //                   className={`pp-option-button ${selectedMaterial === material ? 'active' : ''}`}
// // // //                   onClick={() => setSelectedMaterial(material)}
// // // //                 >
// // // //                   {material}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           </div>
          
// // // //           <div className="pp-option-group">
// // // //             <span className="pp-option-label">Frame</span>
// // // //             <div className="pp-buttons-row">
// // // //               {currentProduct.frames && currentProduct.frames.map((frame) => (
// // // //                 <button
// // // //                   key={frame}
// // // //                   className={`pp-option-button ${selectedFrame === frame ? 'active' : ''}`}
// // // //                   onClick={() => setSelectedFrame(frame)}
// // // //                 >
// // // //                   {frame}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           <div className="pp-action-buttons">
// // // //             <button className="pp-add-to-cart" onClick={handleAddToCart}>
// // // //               Add To Cart
// // // //             </button>
// // // //             <button className="pp-buy-now" onClick={() => onQuickBuy?.(currentProduct)}>
// // // //               Buy It Now
// // // //             </button>
// // // //             <p className="pp-wishlist">Add to Wishlist</p>
// // // //           </div>

// // // //           <div className="pp-delivery">
// // // //             <p className="pp-delivery-note">Do note that the below timeline is an estimate and the actual delivery date could vary.</p>
// // // //             <div className="pp-timeline">
// // // //               <div className="pp-timeline-step">
// // // //                 <div className="pp-timeline-icon"></div>
// // // //                 <div className="pp-timeline-label">Dec 12</div>
// // // //                 <div className="pp-timeline-date">Ordered</div>
// // // //               </div>
// // // //               <div className="pp-timeline-step">
// // // //                 <div className="pp-timeline-icon" style={{background: '#ddd'}}></div>
// // // //                 <div className="pp-timeline-label">Dec 15 - Dec 17</div>
// // // //                 <div className="pp-timeline-date">Order Ready</div>
// // // //               </div>
// // // //               <div className="pp-timeline-step">
// // // //                 <div className="pp-timeline-icon" style={{background: '#ddd'}}></div>
// // // //                 <div className="pp-timeline-label">Dec 20 - Dec 24</div>
// // // //                 <div className="pp-timeline-date">Delivered</div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useEffect, useState } from "react";
// // // import "./ProductPage.css"; 
// // // import { useNavigate, useLocation } from "react-router-dom"; 

// // // const dummyProduct = {
// // //   id: 1,
// // //   title: "A HAND HOLDING A GLASS OF RED WINE ART PRINT",
// // //   slug: "red-wine-art-print",
// // //   price: 679.0,
// // //   image: "/assets/images/product1.webp",
// // //   images: ["/assets/images/product1.webp"],
// // //   sizes: ["XS", "S", "M", "L", "XL", "XXL"],
// // //   materials: ["WHITE CANVAS", "CANVAS"],
// // //   frames: ["ROLLED ART", "BLACK FRAME", "WHITE FRAME", "WOODEN FRAME", "GOLD METAL FRAME"],
// // // };

// // // export default function ProductPage({ product: propProduct = dummyProduct, onQuickBuy }) {
// // //   const navigate = useNavigate(); 
// // //   const location = useLocation();

// // //   const currentProduct = location.state?.productData || propProduct;

// // //   const [selectedSize, setSelectedSize] = useState(currentProduct?.sizes?.[0] ?? '');
// // //   const [selectedMaterial, setSelectedMaterial] = useState(currentProduct?.materials?.[0] ?? '');
// // //   const [selectedFrame, setSelectedFrame] = useState(currentProduct?.frames?.[0] ?? '');
// // //   const [mainImage, setMainImage] = useState(currentProduct?.images?.[0] || currentProduct?.image || '');

// // //   useEffect(() => {
// // //     if (currentProduct) {
// // //       setSelectedSize(currentProduct.sizes?.[0] || "");
// // //       setSelectedMaterial(currentProduct.materials?.[0] || "");
// // //       setSelectedFrame(currentProduct.frames?.[0] || "");
// // //       setMainImage(currentProduct.images?.[0] || currentProduct.image || "");
// // //       window.scrollTo(0, 0);
// // //     }
// // //   }, [currentProduct]);

// // //   // NEW WISHLIST LOGIC
// // //   const handleAddToWishlist = () => {
// // //     const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
// // //     const exists = wishlist.find(item => item.id === currentProduct.id);

// // //     if (!exists) {
// // //       wishlist.push(currentProduct);
// // //       localStorage.setItem("wishlist", JSON.stringify(wishlist));
      
// // //       // Notify the Navbar
// // //       const event = new CustomEvent("wishlistUpdated", { detail: wishlist.length });
// // //       window.dispatchEvent(event);
// // //       alert("Added to wishlist!");
// // //     } else {
// // //       alert("Item already in wishlist!");
// // //     }
// // //   };

// // //   const handleAddToCart = () => {
// // //     alert(`Added ${currentProduct.title} to cart!`);
// // //   };

// // //   return (
// // //     <div className="pp-container">
// // //       <p className="pp-breadcrumbs">Home / Art Print</p>
// // //       <div className="pp-layout">
// // //         <div className="pp-left">
// // //           <div className="pp-thumbnails">
// // //             {currentProduct.images && currentProduct.images.map((img, index) => (
// // //               <img
// // //                 key={index}
// // //                 src={img}
// // //                 alt={`Thumbnail ${index + 1}`}
// // //                 className={`pp-thumb ${img === mainImage ? 'active' : ''}`}
// // //                 onClick={() => setMainImage(img)}
// // //               />
// // //             ))}
// // //           </div>
// // //           <div className="pp-main-image-wrap">
// // //             <img src={mainImage} alt={currentProduct.title} className="pp-main-image" />
// // //           </div>
// // //         </div>

// // //         <div className="pp-right">
// // //           <h1 className="pp-title">{currentProduct.title}</h1>
// // //           <p className="pp-price">Rs. {currentProduct.price.toFixed(2)}</p>
// // //           <p className="pp-tax-note">Tax included.</p>

// // //           <div className="pp-option-group">
// // //             <span className="pp-option-label">Size</span>
// // //             <div className="pp-buttons-row">
// // //               {currentProduct.sizes?.map((size) => (
// // //                 <button key={size} className={`pp-option-button ${selectedSize === size ? 'active' : ''}`} onClick={() => setSelectedSize(size)}>{size}</button>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className="pp-option-group">
// // //             <span className="pp-option-label">Material</span>
// // //             <div className="pp-buttons-row">
// // //               {currentProduct.materials?.map((material) => (
// // //                 <button key={material} className={`pp-option-button ${selectedMaterial === material ? 'active' : ''}`} onClick={() => setSelectedMaterial(material)}>{material}</button>
// // //               ))}
// // //             </div>
// // //           </div>
          
// // //           <div className="pp-option-group">
// // //             <span className="pp-option-label">Frame</span>
// // //             <div className="pp-buttons-row">
// // //               {currentProduct.frames?.map((frame) => (
// // //                 <button key={frame} className={`pp-option-button ${selectedFrame === frame ? 'active' : ''}`} onClick={() => setSelectedFrame(frame)}>{frame}</button>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className="pp-action-buttons">
// // //             <button className="pp-add-to-cart" onClick={handleAddToCart}>Add To Cart</button>
// // //             <button className="pp-buy-now" onClick={() => onQuickBuy?.(currentProduct)}>Now</button>
            
// // //             {/* UPDATED CLICK HANDLER */}
// // //           <p className="pp-wishlist" onClick={handleAddToWishlist} style={{ cursor: 'pointer' }}>
// // //               Add to Wishlist
// // //           </p>
// // //           </div>

// // //           <div className="pp-delivery">
// // //             <p className="pp-delivery-note">Do note that the below timeline is an estimate.</p>
// // //             <div className="pp-timeline">
// // //               <div className="pp-timeline-step"><div className="pp-timeline-icon"></div><div className="pp-timeline-label">Dec 12</div><div className="pp-timeline-date">Ordered</div></div>
// // //               <div className="pp-timeline-step"><div className="pp-timeline-icon" style={{background: '#ddd'}}></div><div className="pp-timeline-label">Dec 15 - 17</div><div className="pp-timeline-date">Ready</div></div>
// // //               <div className="pp-timeline-step"><div className="pp-timeline-icon" style={{background: '#ddd'}}></div><div className="pp-timeline-label">Dec 20 - 24</div><div className="pp-timeline-date">Delivered</div></div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React, { useEffect, useState } from "react";
// // import "./ProductPage.css"; 
// // import { useNavigate, useLocation } from "react-router-dom"; 

// // const dummyProduct = {
// //   id: 1,
// //   title: "A HAND HOLDING A GLASS OF RED WINE ART PRINT",
// //   slug: "red-wine-art-print",
// //   price: 679.0,
// //   image: "/assets/images/product1.webp",
// //   images: ["/assets/images/product1.webp"],
// //   sizes: ["XS", "S", "M", "L", "XL", "XXL"],
// //   materials: ["WHITE CANVAS", "CANVAS"],
// //   frames: ["ROLLED ART", "BLACK FRAME", "WHITE FRAME", "WOODEN FRAME", "GOLD METAL FRAME"],
// // };

// // export default function ProductPage({ product: propProduct = dummyProduct, onQuickBuy }) {
// //   const navigate = useNavigate(); 
// //   const location = useLocation();

// //   const currentProduct = location.state?.productData || propProduct;

// //   const [selectedSize, setSelectedSize] = useState(currentProduct?.sizes?.[0] ?? '');
// //   const [selectedMaterial, setSelectedMaterial] = useState(currentProduct?.materials?.[0] ?? '');
// //   const [selectedFrame, setSelectedFrame] = useState(currentProduct?.frames?.[0] ?? '');
// //   const [mainImage, setMainImage] = useState(currentProduct?.images?.[0] || currentProduct?.image || '');
  
// //   // NEW: State to track if item is in wishlist
// //   const [isInWishlist, setIsInWishlist] = useState(false);

// //   useEffect(() => {
// //     if (currentProduct) {
// //       setSelectedSize(currentProduct.sizes?.[0] || "");
// //       setSelectedMaterial(currentProduct.materials?.[0] || "");
// //       setSelectedFrame(currentProduct.frames?.[0] || "");
// //       setMainImage(currentProduct.images?.[0] || currentProduct.image || "");
      
// //       // Check if product is already in wishlist on load
// //       const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
// //       const exists = wishlist.some(item => item.id === currentProduct.id);
// //       setIsInWishlist(exists);
      
// //       window.scrollTo(0, 0);
// //     }
// //   }, [currentProduct]);

// //   // UPDATED TOGGLE LOGIC
// //   const handleWishlistToggle = () => {
// //     let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    
// //     if (!isInWishlist) {
// //       // Add to wishlist
// //       wishlist.push(currentProduct);
// //       setIsInWishlist(true);
// //     } else {
// //       // Remove from wishlist
// //       wishlist = wishlist.filter(item => item.id !== currentProduct.id);
// //       setIsInWishlist(false);
// //     }

// //     localStorage.setItem("wishlist", JSON.stringify(wishlist));
    
// //     // Notify the Navbar to update the badge count
// //     const event = new CustomEvent("wishlistUpdated", { detail: wishlist.length });
// //     window.dispatchEvent(event);
// //   };

// //   const handleAddToCart = () => {
// //     alert(`Added ${currentProduct.title} to cart!`);
// //   };

// //   return (
// //     <div className="pp-container">
// //       <p className="pp-breadcrumbs">Home / Art Print</p>
// //       <div className="pp-layout">
// //         <div className="pp-left">
// //           <div className="pp-thumbnails">
// //             {currentProduct.images && currentProduct.images.map((img, index) => (
// //               <img
// //                 key={index}
// //                 src={img}
// //                 alt={`Thumbnail ${index + 1}`}
// //                 className={`pp-thumb ${img === mainImage ? 'active' : ''}`}
// //                 onClick={() => setMainImage(img)}
// //               />
// //             ))}
// //           </div>
// //           <div className="pp-main-image-wrap">
// //             <img src={mainImage} alt={currentProduct.title} className="pp-main-image" />
// //           </div>
// //         </div>

// //         <div className="pp-right">
// //           <h1 className="pp-title">{currentProduct.title}</h1>
// //           <p className="pp-price">Rs. {currentProduct.price.toFixed(2)}</p>
// //           <p className="pp-tax-note">Tax included.</p>

// //           <div className="pp-option-group">
// //             <span className="pp-option-label">Size</span>
// //             <div className="pp-buttons-row">
// //               {currentProduct.sizes?.map((size) => (
// //                 <button key={size} className={`pp-option-button ${selectedSize === size ? 'active' : ''}`} onClick={() => setSelectedSize(size)}>{size}</button>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="pp-option-group">
// //             <span className="pp-option-label">Material</span>
// //             <div className="pp-buttons-row">
// //               {currentProduct.materials?.map((material) => (
// //                 <button key={material} className={`pp-option-button ${selectedMaterial === material ? 'active' : ''}`} onClick={() => setSelectedMaterial(material)}>{material}</button>
// //               ))}
// //             </div>
// //           </div>
          
// //           <div className="pp-option-group">
// //             <span className="pp-option-label">Frame</span>
// //             <div className="pp-buttons-row">
// //               {currentProduct.frames?.map((frame) => (
// //                 <button key={frame} className={`pp-option-button ${selectedFrame === frame ? 'active' : ''}`} onClick={() => setSelectedFrame(frame)}>{frame}</button>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="pp-action-buttons">
// //             <button className="pp-add-to-cart" onClick={handleAddToCart}>Add To Cart</button>
// //             <button className="pp-buy-now" onClick={() => onQuickBuy?.(currentProduct)}>Buy It Now</button>
            
// //             {/* TOGGLE TEXT BASED ON STATE */}
// //             <p 
// //               className={`pp-wishlist ${isInWishlist ? 'in-wishlist' : ''}`} 
// //               onClick={handleWishlistToggle} 
// //               style={{ cursor: 'pointer' }}
// //             >
// //               {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
// //             </p>
// //           </div>

// //           <div className="pp-delivery">
// //             <p className="pp-delivery-note">Do note that the below timeline is an estimate.</p>
// //             <div className="pp-timeline">
// //               <div className="pp-timeline-step"><div className="pp-timeline-icon"></div><div className="pp-timeline-label">Dec 12</div><div className="pp-timeline-date">Ordered</div></div>
// //               <div className="pp-timeline-step"><div className="pp-timeline-icon" style={{background: '#ddd'}}></div><div className="pp-timeline-label">Dec 15 - 17</div><div className="pp-timeline-date">Ready</div></div>
// //               <div className="pp-timeline-step"><div className="pp-timeline-icon" style={{background: '#ddd'}}></div><div className="pp-timeline-label">Dec 20 - 24</div><div className="pp-timeline-date">Delivered</div></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import "./ProductPage.css"; 
// import { useNavigate, useLocation } from "react-router-dom"; 

// const dummyProduct = {
//   id: 1,
//   title: "A HAND HOLDING A GLASS OF RED WINE ART PRINT",
//   slug: "red-wine-art-print",
//   price: 679.0,
//   image: "/assets/images/product1.webp",
//   images: ["/assets/images/product1.webp"],
//   sizes: ["XS", "S", "M", "L", "XL", "XXL"],
//   materials: ["WHITE CANVAS", "CANVAS"],
//   frames: ["ROLLED ART", "BLACK FRAME", "WHITE FRAME", "WOODEN FRAME", "GOLD METAL FRAME"],
// };

// export default function ProductPage({ product: propProduct = dummyProduct, onQuickBuy }) {
//   const navigate = useNavigate(); 
//   const location = useLocation();

//   const currentProduct = location.state?.productData || propProduct;

//   const [selectedSize, setSelectedSize] = useState(currentProduct?.sizes?.[0] ?? '');
//   const [selectedMaterial, setSelectedMaterial] = useState(currentProduct?.materials?.[0] ?? '');
//   const [selectedFrame, setSelectedFrame] = useState(currentProduct?.frames?.[0] ?? '');
//   const [mainImage, setMainImage] = useState(currentProduct?.images?.[0] || currentProduct?.image || '');
  
//   // State to track if item is in wishlist
//   const [isInWishlist, setIsInWishlist] = useState(false);
//   const isAuthenticated = () => {
//   // Check for whatever key you use to store your login session (e.g., "user", "token", "isLoggedIn")
//   return localStorage.getItem("user") !== null; 
// };

//   useEffect(() => {
//     if (currentProduct) {
//       setSelectedSize(currentProduct.sizes?.[0] || "");
//       setSelectedMaterial(currentProduct.materials?.[0] || "");
//       setSelectedFrame(currentProduct.frames?.[0] || "");
//       setMainImage(currentProduct.images?.[0] || currentProduct.image || "");
      
//       // Check if product is already in wishlist on load to set initial button text
//       const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
//       const exists = wishlist.some(item => item.id === currentProduct.id);
//       setIsInWishlist(exists);
      
//       window.scrollTo(0, 0);
//     }
//   }, [currentProduct]);

//   // TOGGLE LOGIC WITHOUT ALERTS
//   const handleWishlistToggle = () => {
//     if (!isAuthenticated()) {
//     // Redirect to login if not authenticated
//     // navigate("/login");
//     navigate("/login", { state: { from: location.pathname } });
//     return;
//   }
//     let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    
//     if (!isInWishlist) {
//       // Logic for "Add to Wishlist"
//       wishlist.push(currentProduct);
//       setIsInWishlist(true);
//     } else {
//       // Logic for "Remove from Wishlist"
//       wishlist = wishlist.filter(item => item.id !== currentProduct.id);
//       setIsInWishlist(false);
//     }

//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
    
//     // Notify the Navbar to update the badge count immediately
//     const event = new CustomEvent("wishlistUpdated", { detail: wishlist.length });
//     window.dispatchEvent(event);
//   };

//   // const handleAddToCart = () => {
//   //   console.log("Added to cart");
//   // };

//   // Find this function in your ProductPage.jsx
// const handleAddToCart = () => {
//   if (!isAuthenticated()) {
//     // Redirect to login if not authenticated
//     // navigate("/login");
//     navigate("/login", { state: { from: location.pathname } });
//     return;
//   }
//   // 1. Get existing cart or empty array
//   const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
  
//   // 2. Create the new item object using current state
//   const newItem = {
//     // Unique ID combining product ID and options to handle variations
//     id: `${currentProduct.id}-${selectedSize}-${selectedFrame}`,
//     title: currentProduct.title,
//     price: currentProduct.price,
//     image: mainImage,
//     size: selectedSize,
//     frame: selectedFrame,
//     material: selectedMaterial
//   };

//   // 3. Add to array and save back to storage
//   currentCart.push(newItem);
//   localStorage.setItem("cart", JSON.stringify(currentCart));
  
//   // 4. IMPORTANT: Dispatch the custom event that the Header/Drawer listen for
//   window.dispatchEvent(new CustomEvent("cartUpdated"));
  
//   // Optional: Open the drawer automatically when an item is added
//   // window.dispatchEvent(new CustomEvent("openCartDrawer"));
// };

//   return (
//     <div className="pp-container">
//       <p className="pp-breadcrumbs">Home / Art Print</p>
//       <div className="pp-layout">
//         <div className="pp-left">
//           <div className="pp-thumbnails">
//             {currentProduct.images && currentProduct.images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Thumbnail ${index + 1}`}
//                 className={`pp-thumb ${img === mainImage ? 'active' : ''}`}
//                 onClick={() => setMainImage(img)}
//               />
//             ))}
//           </div>
//           <div className="pp-main-image-wrap">
//             <img src={mainImage} alt={currentProduct.title} className="pp-main-image" />
//           </div>
//         </div>

//         <div className="pp-right">
//           <h1 className="pp-title">{currentProduct.title}</h1>
//           <p className="pp-price">Rs. {currentProduct.price.toFixed(2)}</p>
//           <p className="pp-tax-note">Tax included.</p>

//           <div className="pp-option-group">
//             <span className="pp-option-label">Size</span>
//             <div className="pp-buttons-row">
//               {currentProduct.sizes?.map((size) => (
//                 <button key={size} className={`pp-option-button ${selectedSize === size ? 'active' : ''}`} onClick={() => setSelectedSize(size)}>{size}</button>
//               ))}
//             </div>
//           </div>

//           <div className="pp-option-group">
//             <span className="pp-option-label">Material</span>
//             <div className="pp-buttons-row">
//               {currentProduct.materials?.map((material) => (
//                 <button key={material} className={`pp-option-button ${selectedMaterial === material ? 'active' : ''}`} onClick={() => setSelectedMaterial(material)}>{material}</button>
//               ))}
//             </div>
//           </div>
          
//           <div className="pp-option-group">
//             <span className="pp-option-label">Frame</span>
//             <div className="pp-buttons-row">
//               {currentProduct.frames?.map((frame) => (
//                 <button key={frame} className={`pp-option-button ${selectedFrame === frame ? 'active' : ''}`} onClick={() => setSelectedFrame(frame)}>{frame}</button>
//               ))}
//             </div>
//           </div>

//           <div className="pp-action-buttons">
//             <button className="pp-add-to-cart" onClick={handleAddToCart}>Add To Cart</button>
//             <button className="pp-buy-now" onClick={() => onQuickBuy?.(currentProduct)}>Buy It Now</button>
            
//             {/* TOGGLE TEXT: No Alerts, just instant text change */}
//             <p 
//               className="pp-wishlist" 
//               onClick={handleWishlistToggle} 
//               style={{ 
//                 cursor: 'pointer', 
//                 textDecoration: 'underline',
//                 color: isInWishlist ? '#c49a46' : 'inherit' // Optional: turns gold when active
//               }}
//             >
//               {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
//             </p>
//           </div>

//           <div className="pp-delivery">
//             <p className="pp-delivery-note">Do note that the below timeline is an estimate.</p>
//             <div className="pp-timeline">
//               <div className="pp-timeline-step"><div className="pp-timeline-icon"></div><div className="pp-timeline-label">Dec 12</div><div className="pp-timeline-date">Ordered</div></div>
//               <div className="pp-timeline-step"><div className="pp-timeline-icon" style={{background: '#ddd'}}></div><div className="pp-timeline-label">Dec 15 - 17</div><div className="pp-timeline-date">Ready</div></div>
//               <div className="pp-timeline-step"><div className="pp-timeline-icon" style={{background: '#ddd'}}></div><div className="pp-timeline-label">Dec 20 - 24</div><div className="pp-timeline-date">Delivered</div></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./ProductPage.css"; 
import { useNavigate, useLocation } from "react-router-dom"; 

const dummyProduct = {
  id: 1,
  title: "A HAND HOLDING A GLASS OF RED WINE ART PRINT",
  slug: "red-wine-art-print",
  price: 679.0,
  image: "/assets/images/product1.webp",
  images: ["/assets/images/product1.webp"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  materials: ["WHITE CANVAS", "CANVAS"],
  frames: ["ROLLED ART", "BLACK FRAME", "WHITE FRAME", "WOODEN FRAME", "GOLD METAL FRAME"],
};

export default function ProductPage({ product: propProduct = dummyProduct }) {
  const navigate = useNavigate(); 
  const location = useLocation();

  const currentProduct = location.state?.productData || propProduct;

  const [selectedSize, setSelectedSize] = useState(currentProduct?.sizes?.[0] ?? '');
  const [selectedMaterial, setSelectedMaterial] = useState(currentProduct?.materials?.[0] ?? '');
  const [selectedFrame, setSelectedFrame] = useState(currentProduct?.frames?.[0] ?? '');
  const [mainImage, setMainImage] = useState(currentProduct?.images?.[0] || currentProduct?.image || '');
  const [isInWishlist, setIsInWishlist] = useState(false);

  const isAuthenticated = () => {
    return localStorage.getItem("user") !== null; 
  };

  useEffect(() => {
    if (currentProduct) {
      setSelectedSize(currentProduct.sizes?.[0] || "");
      setSelectedMaterial(currentProduct.materials?.[0] || "");
      setSelectedFrame(currentProduct.frames?.[0] || "");
      setMainImage(currentProduct.images?.[0] || currentProduct.image || "");
      
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      const exists = wishlist.some(item => item.id === currentProduct.id);
      setIsInWishlist(exists);
      
      window.scrollTo(0, 0);
    }
  }, [currentProduct]);

  // Logic for Wishlist
  const handleWishlistToggle = () => {
    if (!isAuthenticated()) {
      navigate("/login", { state: { from: location.pathname } });
      return;
    }
    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    
    if (!isInWishlist) {
      wishlist.push(currentProduct);
      setIsInWishlist(true);
    } else {
      wishlist = wishlist.filter(item => item.id !== currentProduct.id);
      setIsInWishlist(false);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new CustomEvent("wishlistUpdated", { detail: wishlist.length }));
  };

  // Logic for Add to Cart
  const handleAddToCart = () => {
    if (!isAuthenticated()) {
      navigate("/login", { state: { from: location.pathname } });
      return;
    }
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    const newItem = {
      id: `${currentProduct.id}-${selectedSize}-${selectedFrame}`,
      productId: currentProduct.id,
      title: currentProduct.title,
      price: currentProduct.price,
      image: mainImage,
      size: selectedSize,
      frame: selectedFrame,
      material: selectedMaterial,
      quantity: 1
    };

    currentCart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(currentCart));
    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  /**
   * NEW: Handle "Buy It Now" Redirect
   * This gathers the selection and sends it to the checkout page immediately
   */
  const handleBuyNow = () => {
    if (!isAuthenticated()) {
      navigate("/login", { state: { from: location.pathname } });
      return;
    }

    // Create the item data based on current selection
    const checkoutItem = {
      id: `${currentProduct.id}-${selectedSize}-${selectedFrame}`,
      productId: currentProduct.id,
      title: currentProduct.title,
      price: currentProduct.price,
      image: mainImage,
      size: selectedSize,
      frame: selectedFrame,
      material: selectedMaterial,
      quantity: 1
    };

    // Redirect to checkout and pass the item data in the navigation state
    navigate("/checkout", { state: { buyNowItem: checkoutItem } });
  };

  return (
    <div className="pp-container">
      <p className="pp-breadcrumbs">Home / Art Print</p>
      <div className="pp-layout">
        <div className="pp-left">
          <div className="pp-thumbnails">
            {currentProduct.images && currentProduct.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`pp-thumb ${img === mainImage ? 'active' : ''}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          <div className="pp-main-image-wrap">
            <img src={mainImage} alt={currentProduct.title} className="pp-main-image" />
          </div>
        </div>

        <div className="pp-right">
          <h1 className="pp-title">{currentProduct.title}</h1>
          <p className="pp-price">Rs. {currentProduct.price.toFixed(2)}</p>
          <p className="pp-tax-note">Tax included.</p>

          <div className="pp-option-group">
            <span className="pp-option-label">Size</span>
            <div className="pp-buttons-row">
              {currentProduct.sizes?.map((size) => (
                <button 
                  key={size} 
                  className={`pp-option-button ${selectedSize === size ? 'active' : ''}`} 
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="pp-option-group">
            <span className="pp-option-label">Material</span>
            <div className="pp-buttons-row">
              {currentProduct.materials?.map((material) => (
                <button 
                  key={material} 
                  className={`pp-option-button ${selectedMaterial === material ? 'active' : ''}`} 
                  onClick={() => setSelectedMaterial(material)}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>
          
          <div className="pp-option-group">
            <span className="pp-option-label">Frame</span>
            <div className="pp-buttons-row">
              {currentProduct.frames?.map((frame) => (
                <button 
                  key={frame} 
                  className={`pp-option-button ${selectedFrame === frame ? 'active' : ''}`} 
                  onClick={() => setSelectedFrame(frame)}
                >
                  {frame}
                </button>
              ))}
            </div>
          </div>

          <div className="pp-action-buttons">
            <button className="pp-add-to-cart" onClick={handleAddToCart}>Add To Cart</button>
            {/* UPDATED BUTTON */}
            <button className="pp-buy-now" onClick={handleBuyNow}>Buy It Now</button>
            
            <p 
              className="pp-wishlist" 
              onClick={handleWishlistToggle} 
              style={{ 
                cursor: 'pointer', 
                textDecoration: 'underline',
                color: isInWishlist ? '#c49a46' : 'inherit'
              }}
            >
              {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </p>
          </div>

          <div className="pp-delivery">
            <p className="pp-delivery-note">Do note that the below timeline is an estimate.</p>
            <div className="pp-timeline">
              <div className="pp-timeline-step"><div className="pp-timeline-icon"></div><div className="pp-timeline-label">Dec 12</div><div className="pp-timeline-date">Ordered</div></div>
              <div className="pp-timeline-step"><div className="pp-timeline-icon" style={{background: '#ddd'}}></div><div className="pp-timeline-label">Dec 15 - 17</div><div className="pp-timeline-date">Ready</div></div>
              <div className="pp-timeline-step"><div className="pp-timeline-icon" style={{background: '#ddd'}}></div><div className="pp-timeline-label">Dec 20 - 24</div><div className="pp-timeline-date">Delivered</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}