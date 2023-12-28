import React, { useState } from 'react';

const Accordion = () => {
  const [activeAccordions, setActiveAccordions] = useState([]);

  const handleAccordionClick = (index) => {
    if (activeAccordions.includes(index)) {
      setActiveAccordions(activeAccordions.filter((item) => item !== index));
    } else {
      setActiveAccordions([...activeAccordions, index]);
    }
  };

  return (
    <div className="container">
      <h3>Multiple Accordion</h3>

      <button
        className={`accordions ${activeAccordions.includes(0) ? 'active' : ''}`}
        onClick={() => handleAccordionClick(0)}
      >
        Website Design and Development
      </button>
      <div className={`accordion-contents ${activeAccordions.includes(0) ? 'show' : ''}`}>
        <p>
          Whether you need a WordPress website, a Shopify site, or a custom full-stack application, we got you! No matter what kind of website or application you need, it will be made with clean and maintainable code that follows modern development standards. We also have top-notch designers that can make unique designs that will make your website look different and unique. Not to mention that we also provide 24/7 website maintenance so that you get all the support you need.
        </p>
      </div>

      <button
        className={`accordions ${activeAccordions.includes(1) ? 'active' : ''}`}
        onClick={() => handleAccordionClick(1)}
      >
        Website Analytics and Performance
      </button>
      <div className={`accordion-contents ${activeAccordions.includes(1) ? 'show' : ''}`}>
        <p>
          We believe that in order to have a successful website, you need to constantly adjust and adapt to the data provided by your website visitors. Here at Pierre Web Development, we have narrowed down the specific key performance indicators that will dramatically boost your success with connecting to target markets. We will provide a basic metric dashboard based on how much traffic your site gets, detailed analytical reports that show which parts of your website are the most popular among visitors, as well as access to tools you can use to make meaningful decisions based on this data.
        </p>
      </div>

      <button
        className={`accordions ${activeAccordions.includes(2) ? 'active' : ''}`}
        onClick={() => handleAccordionClick(2)}
      >
        Digital Marketing
      </button>
      <div className={`accordion-contents ${activeAccordions.includes(2) ? 'show' : ''}`}>
        <p>
          We know that every great website focuses on helping you get more business and building a brand that your ideal customers will love and support. We can help you set up a great, SEO-focused content strategy, a paid ads campaign, email marketing integration with Mailchimp, as well as a social media marketing campaign. We also use popular website analytic tools to track your site's performance and provide you with weekly analytic reports to help bolster your growth.
        </p>
      </div>
    </div>
  );
};

export default Accordion;
