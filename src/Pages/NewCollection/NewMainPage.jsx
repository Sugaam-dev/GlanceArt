import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CollectionsCarousel from "./CollectionsCarousel.jsx";
import NewCollectionHero from "./NewCollectionHero.jsx";
import ProductFilterSection from "./ProductFilterSection.jsx";

const CollectionsPage = () => {
  return (
    <main>
      <NewCollectionHero />
       <CollectionsCarousel />
       <ProductFilterSection 
       category="New"
       />
    </main>
  );
};

export default CollectionsPage;