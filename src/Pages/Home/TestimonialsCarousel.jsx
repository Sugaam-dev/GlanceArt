import React, { useState, useEffect, useRef } from 'react';
import './TestimonialsCarousel.css';

// 1. Mock Data for Testimonials (kept the same)
const testimonials = [
  {
    id: 1,
    review: "This was exactly what I was looking for and was wrapped very carefully. It come with a...",
    name: "Akruti",
    image: "/path/to/akruti-product.png", // Replace with actual path
    rating: 5,
  },
  {
    id: 2,
    review: "Simply great! ❤️ Everything worked out great.",
    name: "Dipesh Chadiyal",
    image: "/path/to/dipesh-product.png", // Replace with actual path
    rating: 5,
  },
  {
    id: 3,
    review: "Arrived quickly. It's a gift for my friend's daughter's birthday and they really like it. thank u...",
    name: "Seema Rajput",
    image: "/path/to/seema-product.png", // Replace with actual path
    rating: 5,
  },
  {
    id: 4, 
    review: "Fantastic quality and the colors are vibrant! Highly recommend this shop to everyone.",
    name: "John Doe",
    image: "/path/to/john-product.png", 
    rating: 5,
  },
    {
    id: 5,
    review: "This was exactly what I was looking for and was wrapped very carefully. It come with a...",
    name: "Akruti",
    image: "/path/to/akruti-product.png", // Replace with actual path
    rating: 5,
  },
  {
    id: 6,
    review: "Simply great! ❤️ Everything worked out great.",
    name: "Dipesh Chadiyal",
    image: "/path/to/dipesh-product.png", // Replace with actual path
    rating: 5,
  },
  {
    id: 7,
    review: "Arrived quickly. It's a gift for my friend's daughter's birthday and they really like it. thank u...",
    name: "Seema Rajput",
    image: "/path/to/seema-product.png", // Replace with actual path
    rating: 5,
  },
  {
    id: 8, 
    review: "Fantastic quality and the colors are vibrant! Highly recommend this shop to everyone.",
    name: "John Doe",
    image: "/path/to/john-product.png", 
    rating: 5,
  },
];

// Helper component for star rating (kept the same)
const StarRating = ({ count }) => (
  <div className="star_rating">
    {[...Array(count)].map((_, i) => (
      <span key={i} className="star_icon">★</span>
    ))}
  </div>
);


const TestimonialsCarousel = () => {
  const containerRef = useRef(null);
  
  // Get the number of reviews to calculate scroll limit
  const reviewCount = testimonials.length;
  // State to track the current index of the first visible card
  const [currentIndex, setCurrentIndex] = useState(0); 

  // --- MANUAL SCROLL LOGIC (Improved) ---
  const scrollTo = (index) => {
    if (containerRef.current) {
        // Calculate the target scroll position based on the index and item width
        // On desktop, the item width is 33.33% of the container width.
        // We use the clientWidth/3 as an approximation for the item width.
        const itemWidth = containerRef.current.clientWidth / 3; 
        const targetScroll = index * itemWidth;
        
        containerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
        setCurrentIndex(index);
    }
  };

  const scrollRight = () => {
    // Determine the next index, wrapping back to 0 if we hit the end.
    const nextIndex = (currentIndex + 1) % reviewCount;
    scrollTo(nextIndex);
  };

  const scrollLeft = () => {
    // Determine the previous index, wrapping to the last item if we hit the start.
    const prevIndex = (currentIndex - 1 + reviewCount) % reviewCount;
    scrollTo(prevIndex);
  };
  
  // --- AUTOMATIC SCROLL LOGIC ---
  useEffect(() => {
    const interval = setInterval(() => {
      // Automatically scroll to the next testimonial
      scrollRight(); 
    }, 5000); // Scrolls every 5 seconds (adjust as needed)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]); // Re-run effect when currentIndex changes to ensure correct cycle

  // A conceptual way to handle the width on mobile (where one card is visible)
  // This logic is simplified for demonstration and may require a ResizeObserver for a perfect solution
  const getNextScrollIndex = (current) => {
    // Basic wrap-around logic
    return (current + 1) % reviewCount;
  };

  // --- RENDERING ---
  return (
    <div className="testimonials_wrapper">
      <h2 className="main_heading">THE FEEDBACK LOOP</h2>
      
      <div className="global_rating_summary">
        <StarRating count={5} />
        <p className="review_count">
          from 2915 reviews <span className="verified_icon">✔</span>
        </p>
      </div>

      <div className="reviews_container" ref={containerRef}>
        {testimonials.map((testimonial) => (
          <div className="review_card" key={testimonial.id}>
            <StarRating count={testimonial.rating} />
            <p className="review_text">{testimonial.review}</p>
            <p className="reviewer_name">{testimonial.name}</p>
            
            {/* <div className="product_image_frame">
              <img src={testimonial.image} alt="Product purchased" className="product_image" />
            </div> */}
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <div className="carousel_nav">
        <button onClick={scrollLeft} className="nav_arrow">
          &lt;
        </button>
        <button onClick={scrollRight} className="nav_arrow">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;