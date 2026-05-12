// import React from 'react';
// // Import the HeroSection component from the file you created (HeroSectionAbout.jsx)
// import HeroSection from './AboutHero.jsx';

// const AboutUsPage = () => {
//   // Define the props for the HeroSection
//   const imageUrl = '/assets/images/aboutUsHeroImg.jpeg'; // Use your actual image path
  
//   const handleShopClick = () => {
//     console.log('Navigating to Shop page...');
//     // Implement navigation logic here (e.g., using useNavigate hook)
//   };

//   return (
//     <div className="about-us-page-wrapper">
//       {/* 1. Call the HeroSection component here */}
//       <HeroSection
//         imageUrl={imageUrl}
//         mainText="MORE THAN JUST ART"
//         subText="This Is Personal"
//         buttonText="SHOP ALL"
//         onButtonClick={handleShopClick}
//       />
      
//       {/* 2. Add the rest of your About Us content below the hero */}
//       <section style={{ padding: '40px', textAlign: 'center' }}>
//         <h2>Our Mission & Vision</h2>
//         <p>This is where the detailed content about your company, history, and team goes...</p>
//       </section>
//     </div>
//   );
// };

// export default AboutUsPage;

// src/pages/AboutPage.jsx
import React from "react";
import AboutHero from "../AboutUs/AboutHero.jsx";
import AboutStory from "./AboutStory.jsx";
import AboutJourney from "./AboutJourney.jsx";

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutJourney />
    </main>
  );
};

export default AboutPage;
