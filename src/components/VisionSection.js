import React from 'react';
import "../App.css"; // Import the CSS file for this component


const VisionSection = () => {
  return (
    <section id="vision" className="vision-section">
      <div className="container mx-auto p-4">
        <div className="stack">
          <div className="grid-container">
            <div className="grid-item">
              <div className="stack-item">
                <img
                  alt="You are seen."
                  loading="lazy"
                  decoding="async"
                  src="https://pfh-images-production.s3.ap-south-1.amazonaws.com/You_are_seen_01aa9d7d1b.png"
                  className="image"
                />
                <div className="info">
                  <h5 className="title">You are seen.</h5>
                  <p className="description">
                    Modern healthcare created for you. We offer expert support in a safe, nurturing space for your menstrual health, with personalized guidance and compassionate care.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="stack-item">
                <img
                  alt="You are heard."
                  loading="lazy"
                  decoding="async"
                  src="https://pfh-images-production.s3.ap-south-1.amazonaws.com/You_are_heard_ecc9e2dee9.png"
                  className="image"
                />
                <div className="info">
                  <h5 className="title">You are heard.</h5>
                  <p className="description">
                    Absolutely no judgement, ever. We listen, address your concerns with empathy, and validate your experiences. This is the care you deserve.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="stack-item">
                <img
                  alt="You are our partner."
                  loading="lazy"
                  decoding="async"
                  src="https://pfh-images-production.s3.ap-south-1.amazonaws.com/You_are_our_partner_c401d013fe.png"
                  className="image"
                />
                <div className="info">
                  <h5 className="title">You are our partner.</h5>
                  <p className="description">
                  Our consultations are dialogues, not one-sided directives. We work together with you to provide the best care tailored to your needs and lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default VisionSection;
