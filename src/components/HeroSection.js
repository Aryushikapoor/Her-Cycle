import React from "react";
import Lottie from "lottie-react";
import TypingEffect from "react-typing-effect";
import "../App.css";

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>
            <TypingEffect
              text={["Your Cycle, Our Expertise."]}
              speed={100} // Speed of typing
              eraseSpeed={50} // Speed of erasing
              eraseDelay={1000} // Delay before erasing
              typingDelay={500} // Delay before typing starts
              cursorRenderer={(cursor) => <h1>{cursor}</h1>} // Optional cursor style
            />
          </h1>
          <h2>Personalized Menstrual Health Guide</h2>
          <p>Expert Knowledge Meets Personalized Menstrual Health Solutions.</p>
          <button className="cta-button">Start Now</button>
        </div>
        <div className="hero-image">
          <Lottie
            animationData={require("../assets/lottie-animation.json")}
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
