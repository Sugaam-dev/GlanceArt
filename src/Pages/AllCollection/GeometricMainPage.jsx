import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";
import GeometricSection from "./GeometricSection.jsx";

export default function GeometricMainPage() {
  return (
    <div className="abstract-wrapper">

      {/* Title + description section */}
      <GeometricSection />
      <ProductFilterSection 
      category="Geometric"
      />


    </div>
  );
}