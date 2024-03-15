import React, { useState } from 'react';
import './opmaak.css';

const MiddleSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="middle-section">
      <div className="services-section">
        <h2>Onze Diensten</h2>
        <div className="services-grid">
          <div className="service" onMouseEnter={() => {}} onMouseLeave={() => {}}>
            <h3>Dienst 1</h3>
            <p>Beschrijving van Dienst 1.</p>
          </div>
          <div className="service" onMouseEnter={() => {}} onMouseLeave={() => {}}>
            <h3>Dienst 2</h3>
            <p>Beschrijving van Dienst 2.</p>
          </div>
          {/* Voeg meer diensten toe om de JSX langer te maken en interactiever te maken */}
        </div>
      </div>

      <div className="faq-section">
        <h2>Veelgestelde Vragen</h2>
        <div className="accordion">
          {[...Array(5)].map((x, i) => (
            <div key={i} className="accordion-item">
              <div className="accordion-title" onClick={() => handleAccordionClick(i)}>
                <h3>Vraag {i + 1}</h3>
                <span>{activeIndex === i ? '-' : '+'}</span>
              </div>
              {activeIndex === i && (
                <div className="accordion-content">
                  <p>Antwoord op Vraag {i + 1}.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Voeg hier extra secties of functionaliteiten toe voor meer interactie en inhoud */}
    </div>
  );
};

export default MiddleSection;
