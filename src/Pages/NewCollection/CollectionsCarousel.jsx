// CollectionsCarousel.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./CollectionsCarousel.css";

// replace these imports with your actual asset paths or use public URLs
import img1 from "/assets/images/NewCarousel1.webp";
import img2 from "/assets/images/NewCarousel2.webp";
import img3 from "/assets/images/NewCarousel3.webp";
import img4 from "/assets/images/NewCarousel4.webp";
import img5 from "/assets/images/NewCarousel5.webp";
import img6 from "/assets/images/NewCarousel6.webp";
import img7 from "/assets/images/NewCarousel7.webp";
import img8 from "/assets/images/NewCarousel8.webp";

const collections = [
  { id: 1, title: "Home Page", image: img1, to: "/home"  },
  { id: 2, title: "Best Sellers", image: img2, to: "/gallery-wall-sets" },
  { id: 3, title: "Abstract", image: img3, to: "/abstract" },
  { id: 4, title: "Exhibition Poster", image: img4, to: "/geometric" },
  { id: 5, title: "Landscape", image: img5, to: "/landscape" },
  { id: 6, title: "Gallery Walls", image: img6, to: "/gallery-wall-sets" },
    { id: 7, title: "Boho", image: img5, to: "/bedroom" },
  { id: 8, title: "Women Illustration", image: img6, to: "/shop-by-nook" },
];

const CollectionsCarousel = () => {
  const scrollerRef = useRef(null);

  const scrollByCard = (direction = "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector(".cc_card_unique001");
    if (!card) return;
    const gap = parseInt(getComputedStyle(scroller).getPropertyValue("column-gap") || 24, 10);
    const scrollAmount = card.offsetWidth + gap;
    const newPos = direction === "right" ? scroller.scrollLeft + scrollAmount : scroller.scrollLeft - scrollAmount;
    scroller.scrollTo({ left: newPos, behavior: "smooth" });
  };

  // keyboard support for left/right on focused carousel
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") scrollByCard("right");
    if (e.key === "ArrowLeft") scrollByCard("left");
  };

  return (
    <section className="cc_wrapper_unique001" aria-label="Explore our collections">
      <div className="cc_inner_unique001">
        <h3 className="cc_heading_unique001">Explore Our Collections</h3>

        <div className="cc_carouselWrap_unique001">
          <button
            className="cc_navBtn cc_leftBtn_unique001"
            aria-label="Scroll left"
            onClick={() => scrollByCard("left")}
          >
            ‹
          </button>

          <div
            className="cc_scroller_unique001"
            ref={scrollerRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            role="region"
            aria-roledescription="carousel"
            aria-label="Collections carousel"
          >
            {collections.map((col) => (
              <article className="cc_card_unique001" key={col.id}>
                <Link to={col.to} className="cc_cardLink_unique001" aria-label={col.title}>
                  <div
                    className="cc_imgWrap_unique001"
                    style={{ backgroundImage: `url(${col.image})` }}
                    role="img"
                    aria-hidden="true"
                  />
                  <span className="cc_labelPill_unique001">{col.title}</span>
                </Link>
              </article>
            ))}
          </div>

          <button
            className="cc_navBtn cc_rightBtn_unique001"
            aria-label="Scroll right"
            onClick={() => scrollByCard("right")}
          >
            ›
          </button>
        </div>

        <div className="cc_ctaWrap_unique001">
          <p className="cc_more_unique001">Need a little more inspiration?</p>
          <Link to="/shop-by-nook" onClick={() => window.scrollTo(0, 0)} className="cc_browseBtn_unique001">Browse All Collections</Link>
        </div>
      </div>
    </section>
  );
};

export default CollectionsCarousel;
