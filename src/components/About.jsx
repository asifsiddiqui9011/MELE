import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUsContent from "./AboutUsContent";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // Repeats animation every time the section is scrolled into view
      mirror: true, // Animates when scrolling back
    });
    AOS.refresh();
  }, []);

  return (
    <div className="w-full bg-white py-16 px-4" id="about">
      <h2 className="section-title">
        About Us
      </h2>
      <AboutUsContent />
    </div>
  );
};

export default About;
