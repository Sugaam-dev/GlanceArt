// // // import React, { useEffect, useState } from "react";
// // // import productsData from "../../data/products.json";
// // // import ProductCard from "./ProductCard";
// // // import ProductModal from "../ProductModal/ProductModal";
// // // import "./ProductGrid.css";

// // // export default function ProductGrid() {
// // //   const [products, setProducts] = useState([]);
// // //   const [openProduct, setOpenProduct] = useState(null);

// // //   useEffect(() => {
// // //     // In real app: fetch from API. Here we use local JSON.
// // //     setProducts(productsData);
// // //   }, []);

// // //   // Listen for quickBuy global event (from card overlay). This is a simple pattern
// // //   // so Quick Buy works from overlay without opening modal automatically.
// // //   useEffect(() => {
// // //     function handleQuickBuy(e) {
// // //       // e.detail is the product
// // //       // For demo: open the modal to quick buy
// // //       setOpenProduct(e.detail);
// // //       // In real app: you can add to cart directly here
// // //     }
// // //     window.addEventListener("quickBuy", handleQuickBuy);
// // //     return () => window.removeEventListener("quickBuy", handleQuickBuy);
// // //   }, []);

// // //   return (
// // //     <section className="pg-section">
// // //       <div className="pg-container">
// // //         {products.map((p) => (
// // //           <ProductCard key={p.id} product={p} onOpen={(prod) => setOpenProduct(prod)} />
// // //         ))}
// // //       </div>

// // //       {openProduct && (
// // //         <ProductModal
// // //           product={openProduct}
// // //           onClose={() => setOpenProduct(null)}
// // //           // onQuickBuy -> implement to add to cart
// // //           onQuickBuy={(product) => {
// // //             // If you have CartContext: call dispatch here, e.g. dispatch({type:'ADD', payload:{...}})
// // //             // For demo we just log and close
// // //             console.log("Quick Buy:", product);
// // //             alert(`Quick Buy added: ${product.title}`);
// // //             setOpenProduct(null);
// // //           }}
// // //         />
// // //       )}
// // //     </section>
// // //   );
// // // }

// // // ProductGrid.jsx

// // import React, { useEffect, useState } from "react";
// // import productsData from "../../data/products.json";
// // import ProductCard from "./ProductCard";
// // // REMOVE: import ProductModal from "../ProductModal/ProductModal";
// // import "./ProductGrid.css";
// // // 💡 NEW: Import the navigation hook
// // import { useNavigate } from "react-router-dom"; 

// // export default function ProductGrid() {
// //   const [products, setProducts] = useState([]);
// //   // REMOVE: const [openProduct, setOpenProduct] = useState(null); 
  
// //   // 💡 NEW: Initialize useNavigate
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     setProducts(productsData);
// //   }, []);

// //   // 💡 NEW: Handler function to navigate to the product page
// //   const handleOpenProduct = (product) => {
// //     // Navigate to the new page path, passing the product data in state
// //     navigate(`/product/${product.slug}`, { state: { productData: product } });
// //   };

// //   // Listen for quickBuy global event (from card overlay). 
// //   useEffect(() => {
// //     function handleQuickBuy(e) {
// //       // 💡 CHANGE: Quick Buy now navigates to the detailed product page
// //       handleOpenProduct(e.detail);
// //     }
// //     window.addEventListener("quickBuy", handleQuickBuy);
// //     return () => window.removeEventListener("quickBuy", handleQuickBuy);
// //   }, [navigate]); // Add 'navigate' to dependency array

// //   return (
// //     <section className="pg-section">
// //       <div className="pg-container">
// //         {products.map((p) => (
// //           <ProductCard 
// //             key={p.id} 
// //             product={p} 
// //             // 💡 CHANGE: onOpen now calls the navigation handler
// //             onOpen={handleOpenProduct} 
// //           />
// //         ))}
// //       </div>
// //       {/* REMOVE: The ProductModal component is no longer rendered here. */}
// //     </section>
// //   );
// // }

// // ProductGrid.jsx

// import React, { useEffect, useState } from "react";
// import productsData from "../../data/products.json";
// import ProductCard from "./ProductCard";
// // REMOVE: import ProductModal from "../ProductModal/ProductModal";
// import "./ProductGrid.css";
// // 💡 NEW: Import the navigation hook
// import { useNavigate } from "react-router-dom"; 

// export default function ProductGrid() {
//   const [products, setProducts] = useState([]);
//   // REMOVE: const [openProduct, setOpenProduct] = useState(null); 
  
//   // 💡 NEW: Initialize useNavigate
//   const navigate = useNavigate();

//   useEffect(() => {
//     setProducts(productsData);
//   }, []);

//   // 💡 NEW: Handler function to navigate to the product page
//   const handleOpenProduct = (product) => {
//     // Navigate to the new page path, passing the product data in state
//     navigate(`/product/${product.slug}`, { state: { productData: product } });
//   };

//   // Listen for quickBuy global event (from card overlay). 
//   useEffect(() => {
//     function handleQuickBuy(e) {
//       // 💡 CHANGE: Quick Buy now navigates to the detailed product page
//       handleOpenProduct(e.detail);
//     }
//     window.addEventListener("quickBuy", handleQuickBuy);
//     return () => window.removeEventListener("quickBuy", handleQuickBuy);
//   }, [navigate]); // Add 'navigate' to dependency array

//   return (
//     <section className="pg-section">
//       <div className="pg-container">
//         {products.map((p) => (
//           <ProductCard 
//             key={p.id} 
//             product={p} 
//             // 💡 CHANGE: onOpen now calls the navigation handler
//             onOpen={handleOpenProduct} 
//           />
//         ))}
//       </div>
//       {/* REMOVE: The ProductModal component is no longer rendered here. */}
//     </section>
//   );
// }

// ProductGrid.jsx (Updated)
import React, { useEffect, useState } from "react";
import productsData from "../../data/products.json";
import ProductCard from "./ProductCard";
// REMOVE: import ProductModal from "../ProductModal/ProductModal";
import "./ProductGrid.css";
// 💡 NEW: Import the navigation hook
import { useNavigate } from "react-router-dom"; 

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // REMOVE: const [openProduct, setOpenProduct] = useState(null); 
  const navigate = useNavigate(); // Initialize useNavigate hook

  // useEffect(() => {
  //   setProducts(productsData);
  // }, []);

  useEffect(() => {
    // We define an async function inside the effect
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/?limit=10`);
        // const response = await fetch('http://127.0.0.1:8000/products/?limit=10');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setProducts(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty array means this runs once on mount

  // 💡 NEW: Function to navigate to the detailed product page
  const handleOpenProduct = (product) => {
    // Navigates to the new route, passing the product data in the state object
    navigate(`/product/${product.slug}`, { state: { productData: product } });
  };

  // Listen for quickBuy global event 
  // useEffect(() => {
  //   function handleQuickBuy(e) {
  //     // 💡 CHANGE: Quick Buy now navigates to the detailed product page
  //     handleOpenProduct(e.detail);
  //     const productData = e.detail; // This is the 'product' sent by the card
  //     console.log("Received broadcast! Adding to cart:", productData);
  //   }
  //   window.addEventListener("quickBuy", handleQuickBuy);
  //   return () => window.removeEventListener("quickBuy", handleQuickBuy);
  // }, [navigate]);

  return (
    <section className="pg-section">
      <div className="pg-container">
        {products.map((p) => (
          <ProductCard 
            key={p.id} 
            product={p} 
            // 💡 CHANGE: onOpen now calls the navigation handler
            onOpen={handleOpenProduct} 
          />
        ))}
      </div>
      {/* REMOVE: The ProductModal is gone */}
    </section>
  );
}
