
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./GallerySets.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const data = [
  {
    id: 1,
    title: "Soft Expressions Gallery Wall Set of 5",
    price: "Rs. 10,547.00",
    img: "/assets/images/SecondGallary1.webp",
  },
  {
    id: 2,
    title: "Sunlit Stories Gallery Wall Set of 5",
    price: "Rs. 8,143.00",
    img: "/assets/images/SecondGallary2.webp",
  },
   {
    id: 3,
    title: "Soft Expressions Gallery Wall Set of 5",
    price: "Rs. 10,547.00",
    img: "/assets/images/SecondGallary3.webp",
  },
  {
    id: 4,
    title: "Sunlit Stories Gallery Wall Set of 5",
    price: "Rs. 8,143.00",
    img: "/assets/images/SecondGallary4.webp",
  }
];

const GallerySets = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: false,
    responsive: [
      {
        // Settings for 425px and below
        breakpoint: 426, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Arrows are usually hidden on small mobile for better UI
        }
      }
    ]
  };

  return (
    <div className="slider-wrapper">

      <h2 className="main-title">CURATED WALL DECOR COMBO</h2>
      <p className="sub-text">Transform your space with our expertly curated wall art sets</p>

      <Slider {...settings} className="two-card-slider">
        {data.map((item) => (
          <div className="card-container" key={item.id}>
            <img src={item.img} alt={item.title} className="slider-image" />

            <h3 className="card-title">{item.title}</h3>
            <p className="price-label">Starting from <strong>{item.price}</strong></p>
          </div>
        ))}
      </Slider>

      {/* <button className="view-btn">VIEW ALL SETS</button> */}
      <Link to="/shop-by-nook" onClick={() => window.scrollTo(0, 0)}>
          <button className="view-btn">GLANCE ART</button>
        </Link>
    </div>
  );
};

export default GallerySets;


