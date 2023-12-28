import React, { useState } from 'react';
// import AccordianTwo from '../Accordian/Accordian2';


const SingleAccordian = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [imgContainerVisible, setImgContainerVisible] = useState(false);
    const [employeeCode, setEmployeeCode] = useState('');
  
    const accordionItems = [
      {
        header: 'Personal details (All fields are mandatory)',
        content: (
          <div className="accordion-content">
            {/* ... (Content for the first accordion item) */}
            
                    <div class="accor-head">
                        <div class="div-passport">Name</div>
                        <div class="smaeer yadav">Sameer Yadav</div>
                      </div>
                      <div class="input-feild">
                        <div class="new-code">
                          <div class="div-passport">Passport number</div>
                          <input type="text" placeholder="34RTD543PY" className="expiry" />
                         
                        </div>
                        <div class="new-code">
                          <div class="div-passport">Passport expiry date</div>
                          <div class="div-passport-nwe">
                           
                          
                          <input type="date" placeholder="02/01/2026" className="expiry names-call date" />
  
                        </div>
                    </div>
                        <div class="new-code">
                            <div class="div-passport">Name on card (Character limit is 19 and no special characters)
                                Sameer Yadav</div>
                            <div class="div-passport-nwe">
                             
                            <input type="text" placeholder="Sameer Yadav" className="expiry" />
                          </div>
                        </div>
                       
                     
                    </div>
                      <button class="next-btn">next
                      </button>
                    
                   
              
          </div>
        ),
      },
      {
        header: 'Where should we deliver your card ?',
        content: (
          <div className="accordion-content">
            {/* ... (Content for the second accordion item) */}
            <div class="accor-head">
                        <div class="div-passport">Name</div>
                        <div class="smaeer yadav">Sameer Yadav</div>
                      </div>
                      <div class="input-feild">
                        <div class="new-code">
                          <div class="div-passport">Passport number</div>
                          <input type="text" placeholder="34RTD543PY" className="expiry" />
                         
                        </div>
                        <div class="new-code">
                          <div class="div-passport">Passport expiry date</div>
                          <div class="div-passport-nwe">
                           
                          
                          <input type="date" placeholder="02/01/2026" className="expiry names-call date" />
  
                        </div>
                    </div>
                        <div class="new-code">
                            <div class="div-passport">Name on card (Character limit is 19 and no special characters)
                                Sameer Yadav</div>
                            <div class="div-passport-nwe">
                             
                            <input type="text" placeholder="Sameer Yadav" className="expiry" />
                          </div>
                        </div>
                       
                     
                    </div>
                      <button class="next-btn">next
                      </button>
                    
            
          </div>
        ),
      },
      {
        header: 'Do you have a referral code?',
        content: (
          <div className="accordion-content">
            {/* ... (Content for the third accordion item) */}
            <div class="accor-head">
                        <div class="div-passport">Name</div>
                        <div class="smaeer yadav">Sameer Yadav</div>
                      </div>
                      <div class="input-feild">
                        <div class="new-code">
                          <div class="div-passport">Passport number</div>
                          <input type="text" placeholder="34RTD543PY" className="expiry" />
                         
                        </div>
                        <div class="new-code">
                          <div class="div-passport">Passport expiry date</div>
                          <div class="div-passport-nwe">
                           
                          
                          <input type="date" placeholder="02/01/2026" className="expiry names-call date" />
  
                        </div>
                    </div>
                        <div class="new-code">
                            <div class="div-passport">Name on card (Character limit is 19 and no special characters)
                                Sameer Yadav</div>
                            <div class="div-passport-nwe">
                             
                            <input type="text" placeholder="Sameer Yadav" className="expiry" />
                          </div>
                        </div>
                       
                     
                    </div>
                      <button class="next-btn">next
                      </button>
                    
          </div>
        ),
      },
    ];
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const showImage = () => {
      if (document.getElementById('yes').checked) {
        if (employeeCode.trim() !== '') {
          setImgContainerVisible(true);
          setTimeout(() => {
            // Redirect logic or any other actions
          }, 5000);
        } else {
          alert('Please enter the employee code.');
        }
      } else {
        alert('Please select "Yes" to proceed.');
      }
    };
  
    const showImages = () => {
      setImgContainerVisible(true);
    };
    return (
        
        <><div>

            <div className="fire">
                <h3>Single Accordion:</h3>
                {accordionItems.map((item, index) => (
                    <div className="accordion" key={index}>
                        <div className="accordion-item">
                            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                <div>{item.header}</div>
                                <span className="arrow">{activeIndex === index ? '-' : '+'}</span>
                            </div>
                            {activeIndex === index && item.content}
                        </div>
                    </div>
                ))}

            </div>
        </div>
        {/* <AccordianTwo /> */}
        
       
        </>

    );
}
export default SingleAccordian;