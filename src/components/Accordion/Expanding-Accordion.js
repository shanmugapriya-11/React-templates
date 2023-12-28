// ExpandingAccordion.js

import React, { useState } from 'react';
import './Accordion-css/accordion1.css';

const HorizontalAccordion = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardNumber) => {
    setExpandedCard((prevExpandedCard) =>
      prevExpandedCard === cardNumber ? null : cardNumber
    );
  };

  return (
    <>
    <h3 className="accordion-expend-header">Horizontal Accordion</h3>
     <div className="accordion-expend">
      {[1, 2, 3, 4,5,6,7].map((cardNumber) => (
        <div
          className={`card-expend ${expandedCard === cardNumber ? 'expanded' : ''}`}
          key={cardNumber}
          onClick={() => toggleCard(cardNumber)}
        >
          <div className="card-header-expend">
            Card {cardNumber}
            {expandedCard === cardNumber ? (
              <span className="arrow">&#9660;</span> // Down arrow for expanded card
            ) : (
              <span className="arrow">&#9654;</span> // Right arrow for collapsed card
            )}
          </div>
          {expandedCard === cardNumber && (
            <div className="card-content-expend">Content for Card {cardNumber}</div>
          )}
        </div>
      ))}
    </div>
    </>
   
  );
};

export default HorizontalAccordion;
