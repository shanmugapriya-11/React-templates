import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
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
      className={`accordion-item ${isHovered ? 'hovered' : ''} ${isOpen ? 'open' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="accordion-header">{title}</div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const HoverAccordion = () => {
  const accordionItems = [
    { title: 'Item 1', content: 'Content for Item 1' },
    { title: 'Item 2', content: 'Content for Item 2' },
    { title: 'Item 3', content: 'Content for Item 3' },
  ];

  return (
    <>
    <div className='container'>
    <h3>Vertical Hover Accordion</h3>
     <div className="accordion">
      {accordionItems.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
    </div>
    
    </>
   
  );
};

export default HoverAccordion;
