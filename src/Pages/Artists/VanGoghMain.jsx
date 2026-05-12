import React from 'react';
import VanGoghDescription from './VanGoghDescription';
import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";

const VanGoghMain = () => {
  return (
    <div className="vangogh-dropdown-section">
      {/* You can add specific Van Gogh images here if needed */}
      
      {/* Calling the Description Component */}
      <VanGoghDescription />
       <ProductFilterSection 
      category="Abstract"
      />
    </div>
  );
};

export default VanGoghMain;