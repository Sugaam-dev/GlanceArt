import React from "react";
import "./AbstractSection.css";

export default function AbstractSaction() {
  return (
    <div className="abstract-hero">

      {/* LEFT SIDE IMAGE */}
      <div className="abstract-hero-left">
        <img
          src="/assets/images/Abstarct-hero-IMG.webp"
          alt="Abstract Interior"
        />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="abstract-hero-right">

        <div className="abstract-badge">CURATED COLLECTION</div>

        <h1 className="abstract-title">
          ABSTRACT ART<br />PRINTS
        </h1>

        <p className="abstract-description">
          Bold geometric forms, fluid colors, and minimalist
          compositions. Museum-quality abstract art that brings
          contemporary vision to modern interiors—perfect for
          spaces that celebrate artistic expression and creative
          freedom.
        </p>

      </div>
    </div>
  );
}
