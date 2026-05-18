import React from "react";
import FolkArtSection from "./FolkArtSection";
import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";

export default function FolkArtPage() {
  return (
    <div className="folk-art-wrapper">
      <FolkArtSection />
      
      {/* This ensures the gallery only shows Folk Art products */}
      <ProductFilterSection 
        category="Landscape"
      />
    </div>
  );
}