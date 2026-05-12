import React from 'react';
import EleanorBakerDescription from './EleanorBakerDescription';
import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";

const EleanorBakerMain = () => {
  return (
    <div className="eleanor-main-wrapper">
      {/* Container for Eleanor Baker artist menu content */}
      <EleanorBakerDescription />
       <ProductFilterSection 
      category="Abstract"
      />
    </div>
  );
};

export default EleanorBakerMain;