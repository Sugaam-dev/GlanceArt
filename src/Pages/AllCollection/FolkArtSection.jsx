import React from "react";
import "./FolkArtSection.css";

export default function FolkArtSection() {
  return (
    <section className="folk-art-hero">
      {/* LEFT SIDE IMAGE */}
      <div className="folk-art-hero-left">
        <img
          src="/assets/images/forkArt-img.jpg" 
          alt="Traditional folk art patterns and handmade textures"
          loading="eager"
        />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="folk-art-hero-right">
        <div className="folk-art-badge">HERITAGE COLLECTION</div>

        <h1 className="folk-art-title">
          FOLK ART<br />COLLECTION
        </h1>

        <p className="folk-art-description">
          Celebrate the soul of tradition. Our Folk Art collection honors 
          centuries of storytelling through vibrant patterns, symbolic motifs, 
          and handcrafted aesthetics. Each piece captures the rustic beauty 
          and cultural richnes of global heritage—perfect for creating a 
          warm, soulful atmosphere in any home.
        </p>
      </div>
    </section>
  );
}