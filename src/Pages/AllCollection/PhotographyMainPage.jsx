import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";
import PhotographySection from "./PhotographySection.jsx";

export default function PhotographyMainPage() {
  return (
    <div className="abstract-wrapper">

      {/* Title + description section */}
      <PhotographySection />
      <ProductFilterSection 
      category="Photography"
      />


    </div>
  );
}