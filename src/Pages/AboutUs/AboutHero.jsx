// import React from 'react';
// // FIX: Change the import extension to .module.css
// import styles from './HeroSectionAbout.module.css'; 

// const HeroSection = ({ imageUrl, mainText, subText, buttonText, onButtonClick }) => {
//   return (
//     <div className={styles.heroContainer}>
//       {/* Background Image Effect (Simulated) */}
//       <div 
//         className={styles.heroBackground} 
//         style={{ backgroundImage: `url(${imageUrl})` }}
//       >
//         <div className={styles.heroImageOverlay}></div>
//       </div>

//       {/* Content Overlay */}
//       <div className={styles.heroContent}>
//         <h1 className={styles.mainText}>{mainText}</h1>
//         <p className={styles.subText}>{subText}</p>
//         <button 
//           className={styles.actionButton} 
//           onClick={onButtonClick}
//         >
//           {buttonText}
//         </button>
//       </div>
//     </div>
//   );
// };

// // FIX: Export only the HeroSection component
// export default HeroSection;

// src/components/AboutHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./AboutHero.css";
// Option A: imported asset (works with Vite/CRA when image inside src/assets)
import heroImg from "/assets/images/aboutUsHeroImg.jpeg";

const AboutHero = () => {
  return (
    <section className="ah_wrapper_unique001" role="region" aria-label="About hero">
      <div
        className="ah_bg_unique001"
        // If you want to use a public image instead, replace with style={{backgroundImage: 'url(/images/about-hero.jpg)'}}
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      <div className="ah_overlay_unique001" />

      <div className="ah_content_unique001">
        <h1 className="ah_title_unique001">MORE THAN JUST ART</h1>
        <p className="ah_subtitle_unique001">This Is Personal</p>

        <Link to="/abstract" onClick={() => window.scrollTo(0, 0)} className="ah_cta_unique001" aria-label="Shop all">
          SHOP ALL
        </Link>
      </div>
    </section>
  );
};

export default AboutHero;
