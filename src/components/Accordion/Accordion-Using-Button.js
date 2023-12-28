import React, { useState } from 'react';
import './Accordion-css/accordion1.css'; // Import your CSS file for styling

const Accordion = ({ title, expand, onClick }) => {
  return (
    <div>
    <dt className={`title ${expand ? 'is-expanded' : ''}`} onClick={onClick}>
      {title}
    </dt>
    <dd className={`content ${expand ? 'is-expanded' : ''}`} onClick={onClick}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.

Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
</p>
    </dd>
  </div>
  );
};

const AccordionApplication = () => {
    const [accordionState, setAccordionState] = useState({
        block1: true,
        block2: false,
        block3: false,
      });

  const toggle = (index) => () => {
    setAccordionState((prevState) => ({
      ...prevState,
      [`block${index}`]: !prevState[`block${index}`],
    }));
  };
  const toggleExpand = (expand) => () => {
    setAccordionState((prevState) => ({
      block1: expand,
      block2: expand,
      block3: expand,
    }));
  };
  const accordionList = [{ title: 'First Accordion' }, { title: 'Second Accordion' }, { title: 'Third Accordion' }];

  return (
    <div className="container-react">
    <h1>React Accordion</h1>
    <button type="button" className="btn-react" onClick={toggleExpand(true)}>
      Expand All
    </button>
    <button type="button" className="btn-react" onClick={toggleExpand(false)}>
      Collapse All
    </button>
    <dl className="accordion-react">
      {accordionList.map((item, index) => (
        <Accordion key={index} title={item.title} onClick={toggle(index + 1)} expand={accordionState[`block${index + 1}`]} />
      ))}
    </dl>
  </div>
);
};
export default AccordionApplication;
