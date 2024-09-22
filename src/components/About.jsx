import React from "react";
import AboutUs from "../assets/aboutus.jpeg";
import AboutUsContent from "./AboutUsContent";

const About = () => {
  return (
    <div className="w-full bg-white   overflow-hidden ">
      <h2 className="section-title">About Us</h2>
      <AboutUsContent/>
    </div>
  );
};

export default About;
