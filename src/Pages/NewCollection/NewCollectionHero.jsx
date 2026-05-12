// src/components/NewCollectionHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NewCollectionHero.css";

// NOTE: put your hero image at src/assets/new-collection-hero.jpg
// If you placed it in public/images, remove this import and replace usage with url('/images/new-collection-hero.jpg')
import heroImg from "/assets/images/NewPageHeroImg.webp";

const NewCollectionHero = () => {
  return (
    <section className="nc_wrapper_unique001" aria-label="New Collections hero">
      <div
        className="nc_bg_unique001"
        style={{ backgroundImage: `url(${heroImg})` }}
        role="img"
        aria-hidden="true"
      />

      <div className="nc_overlay_unique001" />

      <div className="nc_card_unique001" data-testid="new-collection-card">
        <div className="nc_label_unique001">JUST DROPPED</div>

        <h2 className="nc_title_unique001">
          NEW ART DROPS:
          <br />
          WALL ART THAT SPEAKS LOUDER
        </h2>

        <p className="nc_text_unique001">
          A curated set of striking new pieces — bold lines, rich palettes, and stories waiting to be hung. Don't miss this limited edition drop.
        </p>

        <div className="nc_ctaGroup_unique001">
          <Link to="/photography" onClick={() => window.scrollTo(0, 0)}  className="nc_cta_primary_unique001">
            SHOP THE DROP
          </Link>
          {/* <Link to="/collections" className="nc_cta_secondary_unique001"> */}
          <Link to="/shop-by-nook" onClick={() => window.scrollTo(0, 0)} className="nc_cta_secondary_unique001">
            VIEW ALL COLLECTIONS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewCollectionHero;
