import React from 'react';
import './AboutStory.css'; // Make sure this path is correct

/**
 * AboutStory Component: Displays the company's story.
 */
const AboutStory = () => {
  return (
    <div className="about-story">
      <header className="about-story__header">
        <h1 className="about-story__title">OUR STORY</h1>
      </header>

      <section className="about-story__section">
        <p className="about-story__paragraph">
          Glance Art was born from a simple realization during the uncertainty of 2020. While working in the corporate world—one of us leading marketing and branding for Fortune 500 companies, the other immersed in fashion, art, and design—we noticed something missing in the Indian market: a platform that celebrated minimalist, carefully curated wall art for the modern Indian home.
        </p>
        <p className="about-story__paragraph">
          For one of us, filling every corner of home with art wasn’t just a hobby—it was a way of life. But finding pieces that were both beautiful and accessible felt like an impossible task. When COVID-19 hit and the world slowed down, we asked ourselves: why not create the platform we wished existed?
        </p>
        <p className="about-story__paragraph">
          So we started small. A bedroom. One team member helping us pack orders. A belief that every Indian home deserved art that felt intentional, warm, and entirely personal—without the intimidating price tags or compromises on quality.
        </p>
      </section>

      <blockquote className="about-story__quote">
        "Art should never feel out of reach. It should feel like home."
      </blockquote>

      <section className="about-story__section">
        <p className="about-story__paragraph">
          Today, from our 3,500 sq ft design studio, we’ve built something beyond what we imagined—state-of-the-art printers, our own framing studio, a passionate team, and a 99.78% damage-free delivery rate. But what truly keeps us going isn’t the numbers. It’s the love and support from the Indian market, from architects and interior designers who trust us to bring their visions to life, and from every home that chooses to fill their walls with pieces that matter.
        </p>
        <p className="about-story__paragraph">
          This is more than a business. This is our way of making art accessible, beautiful, and unapologetically personal for every modern Indian home.
        </p>
      </section>
    </div>
  );
};

export default AboutStory;