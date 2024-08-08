import React from 'react';
import Lottie from 'lottie-react';
import '../App.css';
import backgroundAnimation from '../assets/about-us-background.json'; // Path to your background animation
import imageAnimation from '../assets/about-us-image.json'; // Path to your image animation

const Features = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-background">
        {/* <Lottie
          animationData={backgroundAnimation}
          style={{ height: '100%', width: '100%' }}
        /> */}
      </div>
      <div className="about-us-content">
        <div className="box box-left">
          <h2>About Us</h2>
          <h3>Our Mission</h3>
          <p>
            We aim to deliver high-quality services and ensure customer satisfaction through innovative solutions and a commitment to excellence.
          </p>
          <h3>Our Vision</h3>
          <p>
            To be the leading provider of exceptional experiences, setting the benchmark for quality and creativity in our industry.
          </p>
        </div>
        <div className="about-us-image">
          <Lottie
            animationData={imageAnimation}
            style={{ height: 'auto', width: '50%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
