import React from 'react';
import './AboutJourney.css';

// Data for the timeline events
const timelineEvents = [
  {
    date: "OCTOBER 2020",
    title: "Glance Art IS BORN",
    description: "Started from a bedroom, selling to Bangalore, Chennai, Mumbai, and Delhi with just 1 team member helping pack orders.",
    position: 'left' 
  },
  {
    date: "DECEMBER 2020",
    title: "FIRST 100 ORDERS",
    description: "Within a few months, we hit our first major milestone—100 homes trusted us with their walls.",
    position: 'right'
  },
  {
    date: "JANUARY 2021",
    title: "PAN-INDIA EXPANSION",
    description: "Expanded to most pin codes across India. Received our first order from an architect on January 20th—the beginning of a beautiful partnership with the design community.",
    position: 'left'
  },
  {
    date: "APRIL 2021",
    title: "1,000 ORDERS & ARCHITECTURAL DIGEST",
    description: "Hit 1,000 orders on April 1st (everyone thought it was a joke!). Featured in Architectural Digest on April 10th—our first major press recognition.",
    position: 'right'
  },
  {
    date: "JULY 2021",
    title: "2,000 ORDERS STRONG",
    description: "Doubled our milestone in just 3 months—momentum was building.",
    position: 'left'
  },
  {
    date: "JANUARY 2022",
    title: "FIRST STATE-OF-THE-ART PRINTER",
    description: "Purchased our first (and many) state-of-the-art printer and launched sizes up to 20x28 inches—bringing gallery-quality printing in-house.",
    position: 'right'
  },
  {
    date: "JULY 2022",
    title: "BEST-SELLING FRAME LAUNCH",
    description: "Launched our natural wooden frame—a customer favorite that became our best-selling frame option.",
    position: 'left'
  },
  
  // --- START: NEW INSERTED POINTS (Placeholder) ---
  {
    date: "JANUARY 2021",
    title: "Pan-India Expansion",
    description: "Expanded to most pin codes across India. Received our first order from an architect on January 20th—the beginning of a beautiful partnership with the design community.",
    position: 'right'
  },
  {
    date: "APRIL 2021",
    title: "1,000 Orders & Architectural Digest",
    description: "Hit 1,000 orders on April 1st (everyone thought it was a joke!). Featured in Architectural Digest on April 19th—our first major press recognition.",
    position: 'left'
  },
  {
    date: "JULY 2022",
    title: "2,000 Orders Strong",
    description: "20,000+ orders delivered. 1,700+ reviews. 20+ magazine features. 1,000+ collaborations with architects, designers, and commercial projects. A 3,500 sq ft studio with state-of-the-art printers, our own framing studio, and a 99.78% damage-free delivery rate",
    position: 'right'
  },
  // --- END: NEW INSERTED POINTS ---

  // --- START: EVENTS FROM SECOND SCREENSHOT ---
  {
    date: "JANUARY 2023",
    title: "GROWING STRONG",
    description: "Our team grew strong, and we moved to a larger office to accommodate our expanding operations and ambitions.",
    position: 'left'
  },
  {
    date: "JANUARY 2024",
    title: "GOING BIG—5XL LAUNCH",
    description: "Launched sizes up to 5XL (40x54 inches)—perfect for statement walls and large-scale projects.",
    position: 'right'
  },
  {
    date: "DECEMBER 2025",
    title: "TODAY & BEYOND",
    description: "20,000+ orders delivered. 1,700+ reviews. 20+ magazine features. 1,000+ collaborations with architects, designers, and commercial projects. A 3,500 sq ft studio with state-of-the-art printers, our own framing studio, and a 99.78% damage-free delivery rate.",
    position: 'left'
  },
  // --- END: EVENTS FROM SECOND SCREENSHOT ---
];

const AboutJourney = () => {
  return (
    <div className="about-journey">
      <header className="about-journey__header">
        <h1 className="about-journey__title">OUR JOURNEY</h1>
        <p className="about-journey__subtitle">
          From a bedroom startup to India's most trusted name in curated wall art—here's how we grew, one frame at a time.
        </p>
      </header>

      <div className="about-journey__timeline">
        {timelineEvents.map((event, index) => (
          <div 
            key={index} 
            className={`about-journey__event about-journey__event--${event.position}`}
          >
            <div className="about-journey__date">
              {event.date}
            </div>
            <div className="about-journey__connector-dot"></div>
            <div className="about-journey__content">
              <h3 className="about-journey__content-title">{event.title}</h3>
              <p className="about-journey__content-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutJourney;