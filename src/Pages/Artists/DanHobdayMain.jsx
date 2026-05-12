import React from 'react';
import DanHobdayDescription from './DanHobdayDescription';
import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";

const DanHobdayMain = () => {
  return (
    <div className="dan-hobday-main-wrapper">
      {/* This component encapsulates the Dan Hobday dropdown content */}
      <DanHobdayDescription />
       <ProductFilterSection 
      category="Abstract"
      />
    </div>
  );
};

export default DanHobdayMain;