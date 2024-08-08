import React from 'react';
import Lottie from 'lottie-react';
import '../App.css';

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover the Beauty of Japanese Style</h1>
          <p>Experience the elegance and charm of traditional Japanese photography at our studio.</p>
          <button className="cta-button">Start Now</button>
        </div>
        <div className="hero-image">
          <Lottie
            animationData={require('../assets/lottie-animation.json')}
            style={{ height: '400px', width: '400px' }}
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
