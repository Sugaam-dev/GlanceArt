

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

// export default function ProductPage({ product: propProduct = dummyProduct }) {
//   const navigate = useNavigate(); 
//   const location = useLocation();

//   const currentProduct = location.state?.productData || propProduct;

//   const [selectedSize, setSelectedSize] = useState(currentProduct?.sizes?.[0] ?? '');
//   const [selectedMaterial, setSelectedMaterial] = useState(currentProduct?.materials?.[0] ?? '');
//   const [selectedFrame, setSelectedFrame] = useState(currentProduct?.frames?.[0] ?? '');
//   const [mainImage, setMainImage] = useState(currentProduct?.images?.[0] || currentProduct?.image || '');
//   const [isInWishlist, setIsInWishlist] = useState(false);

//   const isAuthenticated = () => {
//     return localStorage.getItem("user") !== null; 
//   };

//   useEffect(() => {
//     if (currentProduct) {
//       setSelectedSize(currentProduct.sizes?.[0] || "");
//       setSelectedMaterial(currentProduct.materials?.[0] || "");
//       setSelectedFrame(currentProduct.frames?.[0] || "");
//       setMainImage(currentProduct.images?.[0] || currentProduct.image || "");
      
//       const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
//       const exists = wishlist.some(item => item.id === currentProduct.id);
//       setIsInWishlist(exists);
      
//       window.scrollTo(0, 0);
//     }
//   }, [currentProduct]);

//   // Logic for Wishlist
//   const handleWishlistToggle = () => {
//     if (!isAuthenticated()) {
//       navigate("/login", { state: { from: location.pathname } });
//       return;
//     }
//     let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    
//     if (!isInWishlist) {
//       wishlist.push(currentProduct);
//       setIsInWishlist(true);
//     } else {
//       wishlist = wishlist.filter(item => item.id !== currentProduct.id);
//       setIsInWishlist(false);
//     }

//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     window.dispatchEvent(new CustomEvent("wishlistUpdated", { detail: wishlist.length }));
//   };

//   // Logic for Add to Cart
//   const handleAddToCart = () => {
//     if (!isAuthenticated()) {
//       navigate("/login", { state: { from: location.pathname } });
//       return;
//     }
//     const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
//     const newItem = {
//       id: `${currentProduct.id}-${selectedSize}-${selectedFrame}`,
//       productId: currentProduct.id,
//       title: currentProduct.title,
//       price: currentProduct.price,
//       image: mainImage,
//       size: selectedSize,
//       frame: selectedFrame,
//       material: selectedMaterial,
//       quantity: 1
//     };

//     currentCart.push(newItem);
//     localStorage.setItem("cart", JSON.stringify(currentCart));
//     window.dispatchEvent(new CustomEvent("cartUpdated"));
//   };

//   /**
//    * NEW: Handle "Buy It Now" Redirect
//    * This gathers the selection and sends it to the checkout page immediately
//    */
//   const handleBuyNow = () => {
//     if (!isAuthenticated()) {
//       navigate("/login", { state: { from: location.pathname } });
//       return;
//     }

//     // Create the item data based on current selection
//     const checkoutItem = {
//       id: `${currentProduct.id}-${selectedSize}-${selectedFrame}`,
//       productId: currentProduct.id,
//       title: currentProduct.title,
//       price: currentProduct.price,
//       image: mainImage,
//       size: selectedSize,
//       frame: selectedFrame,
//       material: selectedMaterial,
//       quantity: 1
//     };

//     // Redirect to checkout and pass the item data in the navigation state
//     navigate("/checkout", { state: { buyNowItem: checkoutItem } });
//   };

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
//                 <button 
//                   key={size} 
//                   className={`pp-option-button ${selectedSize === size ? 'active' : ''}`} 
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="pp-option-group">
//             <span className="pp-option-label">Material</span>
//             <div className="pp-buttons-row">
//               {currentProduct.materials?.map((material) => (
//                 <button 
//                   key={material} 
//                   className={`pp-option-button ${selectedMaterial === material ? 'active' : ''}`} 
//                   onClick={() => setSelectedMaterial(material)}
//                 >
//                   {material}
//                 </button>
//               ))}
//             </div>
//           </div>
          
//           <div className="pp-option-group">
//             <span className="pp-option-label">Frame</span>
//             <div className="pp-buttons-row">
//               {currentProduct.frames?.map((frame) => (
//                 <button 
//                   key={frame} 
//                   className={`pp-option-button ${selectedFrame === frame ? 'active' : ''}`} 
//                   onClick={() => setSelectedFrame(frame)}
//                 >
//                   {frame}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="pp-action-buttons">
//             <button className="pp-add-to-cart" onClick={handleAddToCart}>Add To Cart</button>
//             {/* UPDATED BUTTON */}
//             <button className="pp-buy-now" onClick={handleBuyNow}>Buy It Now</button>
            
//             <p 
//               className="pp-wishlist" 
//               onClick={handleWishlistToggle} 
//               style={{ 
//                 cursor: 'pointer', 
//                 textDecoration: 'underline',
//                 color: isInWishlist ? '#c49a46' : 'inherit'
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

import React, { useEffect, useState, useMemo } from "react";
import "./ProductPage.css";
import { useNavigate, useLocation } from "react-router-dom";

// ─── Pricing Config ────────────────────────────────────────────────────────
// Modifiers are applied on top of the product's base price.
// type "percent" → adds that % of base price
// type "flat"    → adds a fixed rupee amount
//
// To add a new option value: add a key here.
// To add a new category (e.g. "finish"): add a new top-level key here,
// then pass it in the `selections` object inside computePrice below.
const PRICING_CONFIG = {
  sizes: {
    XS:  { type: "percent", value: 0  },
    S:   { type: "percent", value: 10 },
    M:   { type: "percent", value: 20 },
    L:   { type: "percent", value: 35 },
    XL:  { type: "percent", value: 50 },
    XXL: { type: "percent", value: 70 },
  },
  materials: {
    "WHITE CANVAS": { type: "percent", value: 0  },
    "CANVAS":       { type: "percent", value: 15 },
  },
  frames: {
    "ROLLED ART":       { type: "flat",    value: 0   },
    "BLACK FRAME":      { type: "percent", value: 10  },
    "WHITE FRAME":      { type: "percent", value: 10  },
    "WOODEN FRAME":     { type: "percent", value: 20  },
    "GOLD METAL FRAME": { type: "percent", value: 30  },
  },
};

// ─── Pure pricing function ─────────────────────────────────────────────────
// basePrice  : number
// selections : { sizes: "M", materials: "CANVAS", frames: "BLACK FRAME", … }
// Returns the final calculated price as a number.
function computePrice(basePrice, selections) {
  if (!basePrice || isNaN(basePrice)) return 0;

  let delta = 0;

  for (const [category, selectedValue] of Object.entries(selections)) {
    if (!selectedValue) continue;
    const categoryConfig = PRICING_CONFIG[category];
    if (!categoryConfig) continue;

    // Upper-case for resilient lookup (handles backend casing differences)
    const modifier = categoryConfig[String(selectedValue).toUpperCase()];
    if (!modifier) continue;

    if (modifier.type === "percent") {
      delta += (basePrice * modifier.value) / 100;
    } else if (modifier.type === "flat") {
      delta += modifier.value;
    }
  }

  return parseFloat((basePrice + delta).toFixed(2));
}

// ─── Dummy product ─────────────────────────────────────────────────────────
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

// ─── Component ────────────────────────────────────────────────────────────
export default function ProductPage({ product: propProduct = dummyProduct }) {
  const navigate = useNavigate();
  const location = useLocation();

  const currentProduct = location.state?.productData || propProduct;

  const [selectedSize, setSelectedSize] = useState(currentProduct?.sizes?.[0] ?? "");
  const [selectedMaterial, setSelectedMaterial] = useState(currentProduct?.materials?.[0] ?? "");
  const [selectedFrame, setSelectedFrame] = useState(currentProduct?.frames?.[0] ?? "");
  const [mainImage, setMainImage] = useState(currentProduct?.images?.[0] || currentProduct?.image || "");
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Recalculates only when base price or any selection changes
  const finalPrice = useMemo(
    () =>
      computePrice(currentProduct?.price ?? 0, {
        sizes: selectedSize,
        materials: selectedMaterial,
        frames: selectedFrame,
      }),
    [currentProduct?.price, selectedSize, selectedMaterial, selectedFrame]
  );

  const isAuthenticated = () => localStorage.getItem("user") !== null;

  useEffect(() => {
    if (currentProduct) {
      setSelectedSize(currentProduct.sizes?.[0] || "");
      setSelectedMaterial(currentProduct.materials?.[0] || "");
      setSelectedFrame(currentProduct.frames?.[0] || "");
      setMainImage(currentProduct.images?.[0] || currentProduct.image || "");

      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setIsInWishlist(wishlist.some((item) => item.id === currentProduct.id));

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
      wishlist = wishlist.filter((item) => item.id !== currentProduct.id);
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
      price: finalPrice,
      image: mainImage,
      size: selectedSize,
      frame: selectedFrame,
      material: selectedMaterial,
      quantity: 1,
    };

    currentCart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(currentCart));
    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  // Logic for Buy It Now
  const handleBuyNow = () => {
    if (!isAuthenticated()) {
      navigate("/login", { state: { from: location.pathname } });
      return;
    }

    const checkoutItem = {
      id: `${currentProduct.id}-${selectedSize}-${selectedFrame}`,
      productId: currentProduct.id,
      title: currentProduct.title,
      price: finalPrice,
      image: mainImage,
      size: selectedSize,
      frame: selectedFrame,
      material: selectedMaterial,
      quantity: 1,
    };

    navigate("/checkout", { state: { buyNowItem: checkoutItem } });
  };

  return (
    <div className="pp-container">
      <p className="pp-breadcrumbs">Home / Art Print</p>
      <div className="pp-layout">
        <div className="pp-left">
          <div className="pp-thumbnails">
            {currentProduct.images &&
              currentProduct.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`pp-thumb ${img === mainImage ? "active" : ""}`}
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

          <p className="pp-price">Rs. {finalPrice.toFixed(2)}</p>

          <p className="pp-tax-note">Tax included.</p>

          <div className="pp-option-group">
            <span className="pp-option-label">Size</span>
            <div className="pp-buttons-row">
              {currentProduct.sizes?.map((size) => (
                <button
                  key={size}
                  className={`pp-option-button ${selectedSize === size ? "active" : ""}`}
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
                  className={`pp-option-button ${selectedMaterial === material ? "active" : ""}`}
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
                  className={`pp-option-button ${selectedFrame === frame ? "active" : ""}`}
                  onClick={() => setSelectedFrame(frame)}
                >
                  {frame}
                </button>
              ))}
            </div>
          </div>

          <div className="pp-action-buttons">
            <button className="pp-add-to-cart" onClick={handleAddToCart}>Add To Cart</button>
            <button className="pp-buy-now" onClick={handleBuyNow}>Buy It Now</button>

            <p
              className="pp-wishlist"
              onClick={handleWishlistToggle}
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: isInWishlist ? "#c49a46" : "inherit",
              }}
            >
              {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </p>
          </div>

          <div className="pp-delivery">
            <p className="pp-delivery-note">Do note that the below timeline is an estimate.</p>
            <div className="pp-timeline">
              <div className="pp-timeline-step">
                <div className="pp-timeline-icon"></div>
                <div className="pp-timeline-label">Day 1</div>
                <div className="pp-timeline-date">Ordered</div>
              </div>
              <div className="pp-timeline-step">
                <div className="pp-timeline-icon" style={{ background: "#ddd" }}></div>
                <div className="pp-timeline-label">Day 4</div>
                <div className="pp-timeline-date">Ready</div>
              </div>
              <div className="pp-timeline-step">
                <div className="pp-timeline-icon" style={{ background: "#ddd" }}></div>
                <div className="pp-timeline-label">Day 6 - 7</div>
                <div className="pp-timeline-date">Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}