import React from 'react';
import MatisseDescription from './MatisseDescription';
import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";

const MatisseMain = () => {
  return (
    <div className="matisse-main-container">
      {/* This component acts as the parent wrapper */}
      <MatisseDescription />
       <ProductFilterSection 
      category="Abstract"
      />
    </div>
  );
};

export default MatisseMain;