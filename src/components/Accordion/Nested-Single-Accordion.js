// NestedAccordion.js

import React, { useState } from 'react';
import './Accordion-css/accordion1.css'; // Import your custom CSS file for styling

const AccordionItem = ({ title, children, isOpen, toggleAccordion }) => {
  return (
    <div className="Single-accordion-item">
      <div className="Single-accordion-header" onClick={toggleAccordion}>
        {title} <span>{isOpen ? '↓' : '→'}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const SingleAccordion = () => {
  const [openSection, setOpenSection] = useState(null);
  const [openSubSection1, setOpenSubSection1] = useState(null);
  const [openSubSection2, setOpenSubSection2] = useState(null);
  const [openSubSection3, setOpenSubSection3] = useState(null);

  const toggleAccordion = (sectionIndex) => {
    setOpenSection((prevOpenSection) => (prevOpenSection === sectionIndex ? null : sectionIndex));
  };

  const toggleSubAccordion1 = (subSectionIndex) => {
    setOpenSubSection1((prevOpenSubSection1) =>
      prevOpenSubSection1 === subSectionIndex ? null : subSectionIndex
    );
  };

  const toggleSubAccordion2 = (subSectionIndex) => {
    setOpenSubSection2((prevOpenSubSection2) =>
      prevOpenSubSection2 === subSectionIndex ? null : subSectionIndex
    );
  };

  const toggleSubAccordion3 = (subSectionIndex) => {
    setOpenSubSection3((prevOpenSubSection3) =>
      prevOpenSubSection3 === subSectionIndex ? null : subSectionIndex
    );
  };

  return (
    <>
    <div className="accor-container">
          <h3>Single Accordion with Nested Sections:</h3>
          <AccordionItem
              title="Section 1"
              isOpen={openSection === 1}
              toggleAccordion={() => toggleAccordion(1)}
          >
              <p>This is the content for Section 1. It can include text, images, or other components.</p>

              {/* Nested Accordion 1 */}
              <AccordionItem
                  title="Subsection 1.1"
                  isOpen={openSubSection1 === 1.1}
                  toggleAccordion={() => toggleSubAccordion1(1.1)}
              >
                  <p>This is the content for Subsection 1.1.</p>

                  {/* Nested Accordion 2 */}
                  <AccordionItem
                      title="Sub-subsection 1.1.1"
                      isOpen={openSubSection2 === 1.2}
                      toggleAccordion={() => toggleSubAccordion2(1.2)}
                  >
                      <p>This is the content for Sub-subsection 1.2.</p>

                      {/* Nested Accordion 3 */}
                      <AccordionItem
                          title="Sub-sub-subsection 2.1"
                          isOpen={openSubSection3 === 2.1} 
                      toggleAccordion={() => toggleSubAccordion3(2.1, .1)}
                      />
                      
                      <p>This is the content for Sub-sub-subsection 2.1.</p>
                  </AccordionItem>
              </AccordionItem>
          </AccordionItem>
      
      <AccordionItem
          title="Section 2"
          isOpen={openSection === 2}
          toggleAccordion={() => toggleAccordion(2)}
      >
              <p>This is the content for Section 2. You can customize it based on your needs.</p>
          </AccordionItem><AccordionItem
              title="Section 3"
              isOpen={openSection === 3}
              toggleAccordion={() => toggleAccordion(3)}
          >
              <p>This is the content for Section 3. You can add more elements, such as lists or images, as needed.</p>
          </AccordionItem>
          </div>
          </>
    
  );
};

export default SingleAccordion;
