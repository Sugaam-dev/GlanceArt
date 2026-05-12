import React from "react";
import { Link } from "react-router-dom";
import "./NurseryWallDecor.css";

const products = [
  {
    id: 1,
    discount: "-14%",
    title: "A to Z of Emotions Personalised Animal Wall Art (Framed)",
    image: "/assets/images/NursareyGallary1.webp",
    rating: 5,
    reviews: 31,
    oldPrice: "₹ 2,099.00",
    newPrice: "₹ 1,799.00",
  },
  {
    id: 2,
    discount: "-16%",
    title: "Cute Animals with Positive Affirmations Wall Art (Framed)",
    image: "/assets/images/NursareyGallary2.webp",
    rating: 5,
    reviews: 14,
    oldPrice: "₹ 2,149.00",
    newPrice: "₹ 1,799.00",
  },
  {
    id: 3,
    discount: "-16%",
    title: "Watercolor Baby Animals Motivational Personalised Wall Art (Framed)",
    image: "/assets/images/NursareyGallary3.webp",
    rating: 5,
    reviews: 43,
    oldPrice: "₹ 2,149.00",
    newPrice: "₹ 1,799.00",
  },
  {
    id: 4,
    discount: "-16%",
    title: "Motivational Baby Animals Wall Art (Framed)",
    image: "/assets/images/NursareyGallary4.webp",
    rating: 5,
    reviews: 18,
    oldPrice: "₹ 2,149.00",
    newPrice: "₹ 1,799.00",
  },
];

export default function NurseryWallDecor() {
  return (
    <div className="nwd-wrapper">

      <h2 className="nwd-title">NURSERY WALL DECOR <span>💯</span></h2>

      <div className="nwd-grid">
        {products.map((item) => (
          <div className="nwd-card" key={item.id}>
            <div className="nwd-img-wrapper">
              <span className="nwd-discount">{item.discount}</span>
              <img src={item.image} alt={item.title} className="nwd-img" />
            </div>

            <div className="nwd-details">
              <h3 className="nwd-name">{item.title}</h3>

              {/* Ratings */}
              <div className="nwd-rating">
                {"⭐".repeat(item.rating)}
                <span className="nwd-reviews">{item.reviews} Reviews</span>
              </div>

              {/* Price */}
              <div className="nwd-price-row">
                <span className="nwd-old-price">{item.oldPrice}</span>
                <span className="nwd-new-price">{item.newPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    <Link to="/gallery-wall-sets" onClick={() => window.scrollTo(0, 0)}>
      <button className="nwd-view-all">View all</button>
    </Link>
    </div>
  );
}
