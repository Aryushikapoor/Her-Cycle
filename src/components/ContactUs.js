import React from 'react';
import Lottie from 'lottie-react';
import '../App.css';
import contactImage from '../assets/contact-image.json'; // Path to your image animation

const ContactUs = () => {
  return (
    <section id="contact" className="contact-us-section">
      <div className="contact-us-content box-right">
        <div className="contact-us-image">
          <Lottie
            animationData={contactImage}
            style={{ height: 'auto', width: '100%' }}
          />
        </div>
        <div className="contact-us-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="cta-button">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
