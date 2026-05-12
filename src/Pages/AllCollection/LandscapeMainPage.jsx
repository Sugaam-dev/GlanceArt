import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";
import LandscapeSection from "./LandscapeSection.jsx";

export default function LandscapeMainPage() {
  return (
    <div className="abstract-wrapper">

      {/* Title + description section */}
      <LandscapeSection />
      <ProductFilterSection 
      category="Landscape"
      />


    </div>
  );
}