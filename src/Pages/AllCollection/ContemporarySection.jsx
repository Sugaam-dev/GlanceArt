import React from "react";
import "./ContemporarySection.css";

export default function ContemporarySection() {
  return (
    <section className="contemporary-hero">
      {/* LEFT SIDE IMAGE */}
      <div className="contemporary-hero-left">
        <img
          src="/assets/images/contemparary.jpg"
          alt="Sophisticated contemporary art in a modern living space"
          loading="eager"
        />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="contemporary-hero-right">
        <div className="contemporary-badge">CURATED COLLECTION</div>

        <h1 className="contemporary-title">
          CONTEMPORARY<br />ART PRINTS
        </h1>

        <p className="contemporary-description">
          Experience the art of now. Our collection features thought-provoking 
          works that bridge the gap between classic technique and modern 
          innovation. Designed for the discerning collector, these museum-grade 
          prints transform any room into a gallery of current cultural 
          expression and sophisticated style.
        </p>
      </div>
    </section>
  );
}