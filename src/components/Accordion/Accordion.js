import React from 'react';
import './Accordion-css/accordion1.css';
import NestedAccordion from './Nested-Multiple-Accordion';
import MultiLevelAccordion from '../Accordion/Multiple-Accordion';
import SingleAccordion from '../Accordion/Nested-Single-Accordion';
import HorizontalAccordion from '../Accordion/Expanding-Accordion';
import HoverAccordion from './Vertical-Hover-Accorion';
import HorizontalHoverAccordion from './Horizondal-Hover-Accordion';
import AccordionApplication from './Accordion-Using-Button';
import AccordionApp from './Accordion-with-Arrow';
import SingleAccordian from './Single-Accordion';

const AccordionSection = () => {
  return (
    <div>
        <SingleAccordian />
        <MultiLevelAccordion />
        <SingleAccordion />
        <NestedAccordion />
        <HorizontalAccordion />
        <HoverAccordion />
        <HorizontalHoverAccordion />
        <AccordionApplication />
        <AccordionApp />
    </div>
  )
}

export default AccordionSection;

