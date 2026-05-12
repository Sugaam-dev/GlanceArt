
import ProductFilterSection from "../NewCollection/ProductFilterSection.jsx";
import BotanicalSection from "./BotanicalSection.jsx";

export default function BotanicalMainPage() {
  return (
    <div className="abstract-wrapper">

      {/* Title + description section */}
      <BotanicalSection />
      <ProductFilterSection 
      category="Botanical"
      />


    </div>
  );
}