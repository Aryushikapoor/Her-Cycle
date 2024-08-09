import React from "react";
import Lottie from "lottie-react";
import "../App.css";
import backgroundAnimation from "../assets/about-us-background.json"; // Path to your background animation
import imageAnimation from "../assets/about-us-image.json"; // Path to your image animation

const Features = () => {
  return (
    <section id="about" className="about-us-section">
      <div className="about-us-content">
        <div className="box box-left">
          <h3>About Us</h3>
          <p>
            At Her Cycle, we revolutionize menstrual health with expert guidance
            and <br />
            innovative technology, empowering you with personalized tools and
            knowledge for
            <br /> effective management of your menstrual journey. Our platform
            encourages <br />
            open dialogue and support among users, fostering a sense of
            connection and <br />
            shared experience
          </p>
          <h4>Our Vision</h4>
          <p>
            We envision a world where menstrual health is openly discussed and
            <br /> managed with ease. Our vision is to be a leading platform in
            menstrual health <br />
            management, offering cutting-edge technology and resources to
            support individuals <br />
            through every stage of their menstrual journey.
          </p>
        </div>
        <div className="about-us-image">
          <Lottie
            animationData={imageAnimation}
            style={{ height: "auto", width: "50%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
