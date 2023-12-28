import React, { useState } from 'react';
import './Accordion-css/accordion1.css'; 

const HorizontalAccordionItem = ({ title, content }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsOpen(false);
  };

  return (
    <div
      className={`horizontal-accordion-item ${isHovered ? 'hovered' : ''} ${isOpen ? 'open' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="horizontal-accordion-header">{title}</div>
      {isOpen && <div className="horizontal-accordion-content">{content}</div>}
    </div>
  );
};

const HorizontalHoverAccordion = () => {
  const accordionItems = [
    { title: 'Item 1', content: 'Content for Item 1' },
    { title: 'Item 2', content: 'Content for Item 2' },
    { title: 'Item 3', content: 'Content for Item 3' },
  ];

  return (
    <>
    <div className='container'>
    <h3>Horizontal Hover Accordion</h3>
    <div className="horizontal-accordion">
      {accordionItems.map((item, index) => (
        <HorizontalAccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
    </div>
    
    </>
  );
};

export default HorizontalHoverAccordion;
