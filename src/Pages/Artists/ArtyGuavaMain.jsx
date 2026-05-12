import React from 'react';
import ArtyGuavaDescription from './ArtyGuavaDescription';
import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";

const ArtyGuavaMain = () => {
  return (
    <div className="arty-guava-main-wrapper">
      <ArtyGuavaDescription />
       <ProductFilterSection 
      category="Abstract"
      />
    </div>
  );
};

export default ArtyGuavaMain;