// NestedAccordion.js

import React, { useState } from 'react';
import './Accordion-css/accordion1.css'; // Import your custom CSS file for styling

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Nested-accordion-item">
      <div className="Nested-accordion-header" onClick={toggleAccordion}>
        {title} <span>{isOpen ? '↓' : '→'}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const NestedAccordion = () => {
  return (
 <div className='accor-container'>
    <h3>Nested Mulitiple Accordion:</h3>
 <div className="Nested-accordion">
      <AccordionItem title="Nested-Section 1">
        <div className="nested-accordion">
          <AccordionItem title="Nested-Subsection 1.1">
            <p>This is the content for Subsection 1.1. It can include text, images, or other components.</p>
          </AccordionItem>
          <AccordionItem title="Nested-Subsection 1.2">
            <p>This is the content for Subsection 1.2. You can customize it based on your needs.</p>
          </AccordionItem>
        </div>
      </AccordionItem>
      <AccordionItem title="Nested-Section 2">
        <div>
          <p>This is the content for Section 2. You can add more elements, such as lists or images, as needed.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </div>
      </AccordionItem>
      <AccordionItem title="Nested-Section 3">
        <div>
          <p>This is the content for Section 3. You can add more elements, such as lists or images, as needed.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </div>
      </AccordionItem>
    </div>
 </div>

   
  );
};

export default NestedAccordion;
