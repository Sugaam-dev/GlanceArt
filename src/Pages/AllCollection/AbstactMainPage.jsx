import React from "react";
import AbstractSection from "./AbstractSection";
import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";

export default function AbstractPage() {
  return (
    <div className="abstract-wrapper">

      {/* Title + description section */}
      <AbstractSection />
      <ProductFilterSection 
      category="Abstract"
      />


    </div>
  );
}
