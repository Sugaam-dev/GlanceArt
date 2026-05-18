import React from "react";
import ContemporarySection from "./ContemporarySection";
import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";

export default function ContemporaryPage() {
  return (
    <div className="contemporary-wrapper">
      {/* Title + description section */}
      <ContemporarySection />
      
      {/* Filter section updated to pull Contemporary category */}
      <ProductFilterSection 
        category="Botanical"
      />
    </div>
  );
}