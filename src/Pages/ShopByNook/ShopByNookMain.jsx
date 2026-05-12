// // // import React from 'react';
// // // import './ShopByNookMain.css';

// // // const ShopByNookMain = () => {
// // //   return (
// // //     <div className="nook-description-wrapper">
// // //       <div className="nook-description-content">
// // //         <div className="decorative-line top-line"></div>
// // //         <h2 className="nook-main-title">SHOP BY NOOK</h2>
// // //         <p className="nook-subtext">
// // //           Thoughtfully curated wall art for every corner of your home — whether it's your 
// // //           bedroom, bath, or cozy nook.
// // //         </p>
// // //         <div className="decorative-line bottom-line"></div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ShopByNookMain;

// // import React from 'react';
// // import './ShopByNookMain.css';

// // const ShopByNookMain = () => {
// //   const shopCategories = [
// //     { title: "Best Sellers", image: "/assets/images/NewCarousel1.webp" },
// //     { title: "New Art Drops", image: "/assets/images/NewCarousel2.webp" },
// //     { title: "Nook X Collabs", image: "/assets/images/NewCarousel3.webp" },
// //     { title: "Gallery Wall Sets", image: "/assets/images/NewCarousel4.webp" }
// //   ];

// //   return (
// //     <div className="nook-container">
// //       {/* Existing Description Section */}
// //       <div className="nook-description-wrapper">
// //         <div className="nook-description-content">
// //           <div className="decorative-line top-line"></div>
// //           <h2 className="nook-main-title">SHOP BY NOOK</h2>
// //           <p className="nook-subtext">
// //             Thoughtfully curated wall art for every corner of your home — whether it's your 
// //             bedroom, bath, or cozy nook.
// //           </p>
// //           <div className="decorative-line bottom-line"></div>
// //         </div>
// //       </div>

// //       {/* New Quick Shop Section */}
// //       <div className="quick-shop-section">
// //         <div className="quick-shop-header">
// //           <h3 className="quick-shop-title">Quick Shop</h3>
// //           <p className="quick-shop-subtitle">Not sure where to start? Explore these curated highlights.</p>
// //         </div>

// //         <div className="quick-shop-grid">
// //           {shopCategories.map((item, index) => (
// //             <div key={index} className="quick-shop-card">
// //               <img src={item.image} alt={item.title} className="quick-shop-image" />
// //               <div className="quick-shop-label-overlay">
// //                 <span className="quick-shop-label">{item.title}</span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShopByNookMain;

// import React from 'react';
// import './ShopByNookMain.css';

// const ShopByNookMain = () => {
//   const shopCategories = [
//     { title: "Best Sellers", image: "/assets/images/NewCarousel1.webp" },
//     { title: "New Art Drops", image: "/assets/images/NewCarousel2.webp" },
//     { title: "Nook X Collabs", image: "/assets/images/NewCarousel3.webp" },
//     { title: "Gallery Wall Sets", image: "/assets/images/NewCarousel4.webp" }
//   ];

//   // Data for the new Room Gallery section
//   const roomCategories = [
//     { title: "BEDROOM", subtitle: "Serene and calming wall art to end your day with.", image: "/assets/images/Bedroom-shopbynoook.webp" },
//     { title: "LIVING ROOM", subtitle: "Make a statement with bold and balanced wall art.", image: "/assets/images/Living-shopbynoook.webp" },
//     { title: "DINING ROOM", subtitle: "Add warmth to your meals with curated art picks.", image: "/assets/images/Breakfast-shopbynoook.webp" },
//     { title: "READING NOOK", subtitle: "Perfect prints to pair with your quiet corners.", image: "/assets/images/Reading-shopbynoook.webp" },
//     { title: "OFFICE", subtitle: "Productivity meets aesthetic wall inspiration.", image: "/assets/images/office-shopbynoook.webp" },
//     { title: "BATHROOM", subtitle: "Brighten your sink space with fresh visuals.", image: "/assets/images/Bathroom-shopbynoook.webp" }
//   ];

//   return (
//     <div className="nook-container">
//       {/* Existing Description Section */}
//       <div className="nook-description-wrapper">
//         <div className="nook-description-content">
//           <div className="decorative-line top-line"></div>
//           <h2 className="nook-main-title">SHOP BY NOOK</h2>
//           <p className="nook-subtext">
//             Thoughtfully curated wall art for every corner of your home — whether it's your 
//             bedroom, bath, or cozy nook.
//           </p>
//           <div className="decorative-line bottom-line"></div>
//         </div>
//       </div>

//       {/* Quick Shop Section */}
//       <div className="quick-shop-section">
//         <div className="quick-shop-header">
//           <h3 className="quick-shop-title">Quick Shop</h3>
//           <p className="quick-shop-subtitle">Not sure where to start? Explore these curated highlights.</p>
//         </div>
//         <div className="quick-shop-grid">
//           {shopCategories.map((item, index) => (
//             <div key={index} className="quick-shop-card">
//               <img src={item.image} alt={item.title} className="quick-shop-image" />
//               <div className="quick-shop-label-overlay">
//                 <span className="quick-shop-label">{item.title}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* NEW Room Gallery Section */}
//       <div className="room-gallery-section">
//         <div className="room-gallery-grid">
//           {roomCategories.map((room, index) => (
//             <div key={index} className="room-card">
//               <div className="room-image-container">
//                 <img src={room.image} alt={room.title} className="room-image" />
//               </div>
//               <div className="room-info">
//                 <h4 className="room-title">{room.title}</h4>
//                 <p className="room-subtitle">{room.subtitle}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopByNookMain;

import React from 'react';
import './ShopByNookMain.css';

const ShopByNookMain = () => {
  // Data for the Quick Shop section (Row of 4 squares)
  const shopCategories = [
    { title: "Best Sellers", image: "/assets/images/NewCarousel1.webp" },
    { title: "New Art Drops", image: "/assets/images/NewCarousel2.webp" },
    { title: "Nook X Collabs", image: "/assets/images/NewCarousel3.webp" },
    { title: "Gallery Wall Sets", image: "/assets/images/NewCarousel4.webp" }
  ];

  // Data for the Room Gallery section (2x3 Grid)
  const roomCategories = [
    { title: "BEDROOM", subtitle: "Serene and calming wall art to end your day with.", image: "/assets/images/Bedroom-shopbynoook.webp" },
    { title: "LIVING ROOM", subtitle: "Make a statement with bold and balanced wall art.", image: "/assets/images/Living-shopbynoook.webp" },
    { title: "DINING ROOM", subtitle: "Add warmth to your meals with curated art picks.", image: "/assets/images/Breakfast-shopbynoook.webp" },
    { title: "READING NOOK", subtitle: "Perfect prints to pair with your quiet corners.", image: "/assets/images/Reading-shopbynoook.webp" },
    { title: "OFFICE", subtitle: "Productivity meets aesthetic wall inspiration.", image: "/assets/images/office-shopbynoook.webp" },
    { title: "BATHROOM", subtitle: "Brighten your sink space with fresh visuals.", image: "/assets/images/Bathroom-shopbynoook.webp" }
  ];

  // Data for the Best Selling section (Row of 5 products)
  const bestSellers = [
    { title: '"&" BOHO ART', price: "590.00", rating: 5, reviews: 2, image: "/assets/images/product1.webp" },
    { title: "1978 ANNIE COLLECTION BY FRANK MOTH", price: "679.00", rating: 5, reviews: 2, image: "/assets/images/product2.webp" },
    { title: "1982 HOFFMANN EXHIBITION", price: "679.00", rating: 0, reviews: 0, image: "/assets/images/product3.webp" },
    { title: "2 DESSERT CAFE", price: "679.00", rating: 0, reviews: 0, image: "/assets/images/product4.webp" },
    { title: "A DAY AT THE BEACH", price: "590.00", rating: 5, reviews: 5, image: "/assets/images/product5.webp" }
  ];

  return (
    <div className="nook-container">
      {/* 1. Header/Description Section */}
      <section className="nook-description-wrapper">
        <div className="nook-description-content">
          <div className="decorative-line top-line"></div>
          <h2 className="nook-main-title">SHOP BY NOOK</h2>
          <p className="nook-subtext">
            Thoughtfully curated wall art for every corner of your home — whether it's your 
            bedroom, bath, or cozy nook.
          </p>
          <div className="decorative-line bottom-line"></div>
        </div>
      </section>

      {/* 2. Quick Shop Section */}
      <section className="quick-shop-section">
        <div className="section-header">
          <h3 className="section-title-sans">Quick Shop</h3>
          <p className="section-subtitle-sans">Not sure where to start? Explore these curated highlights.</p>
        </div>
        <div className="quick-shop-grid">
          {shopCategories.map((item, index) => (
            <div key={index} className="quick-shop-card">
              <img src={item.image} alt={item.title} className="quick-shop-image" />
              <div className="quick-shop-label-overlay">
                <span className="quick-shop-label">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Room Gallery Section */}
      <section className="room-gallery-section">
        <div className="room-gallery-grid">
          {roomCategories.map((room, index) => (
            <div key={index} className="room-card">
              <div className="room-image-container">
                <img src={room.image} alt={room.title} className="room-image" />
              </div>
              <div className="room-info">
                <h4 className="room-title">{room.title}</h4>
                <p className="room-subtitle">{room.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Best Selling Section */}
      <section className="best-selling-section">
        <div className="best-selling-header">
          <h2 className="best-selling-title">BEST SELLING – BEDROOM NOOK</h2>
          <button className="view-all-btn">VIEW ALL</button>
        </div>
        <div className="product-grid">
          {bestSellers.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
              <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                {product.reviews > 0 && (
                  <div className="product-rating">
                    {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
                    <span className="review-count">({product.reviews})</span>
                  </div>
                )}
                <p className="product-price">from Rs. {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopByNookMain;