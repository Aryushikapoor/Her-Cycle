import React from "react";
import Lottie from "lottie-react";
import "../App.css";
import backgroundAnimation from "../assets/about-us-background.json"; // Path to your background animation
import imageAnimation from "../assets/about-us-image.json"; // Path to your image animation

const Features = () => {
  return (
    <section id="about" className="about-us-section">
      <div className="about-us-content flex flex-col md:flex-row items-center">
        {/* Image on the left side */}
        <div className="about-us-image md:w-1/2 w-full order-first md:order-last">
          <Lottie
            animationData={imageAnimation}
            style={{ height: "auto", width: "100%" }}
          />
        </div>
        {/* Text on the right side */}
        <div className="box box-right md:w-1/2 w-full text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="mb-6">
            At Her Cycle, we revolutionize menstrual health with expert guidance
            and innovative technology, empowering you with personalized tools and
            knowledge for effective management of your menstrual journey. Our platform
            encourages open dialogue and support among users, fostering a sense of
            connection and shared experience.
          </p>
          <h4 className="text-xl font-semibold mb-3">Our Vision</h4>
          <p>
          We envision a world where menstrual health is openly discussed and easily managed, providing innovative technology and resources to support individuals through every stage of their menstrual journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
