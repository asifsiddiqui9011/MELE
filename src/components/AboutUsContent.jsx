import React from "react";
import AboutUs from "../assets/aboutus1.jpg";

const AboutUsContent = () => {
  return (
    <div className="container mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Text Section */}
      <div
        data-aos="fade-right"
        className="lg:pr-10 text-center lg:text-left"
      >
        <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-900 leading-tight">
          We make creativity work for your project!
        </h2>
        <p className="text-gray-700 mt-6 leading-relaxed text-lg lg:text-xl">
          Our team of creatives brainstorms ideas <span className="font-bold">All. The. Time.</span> 
          With our combined skills, we create an ensemble capable of tackling any challenges your project requires.
        </p>
        <div className="mt-8">
          <button className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300">
            Read More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div
        data-aos="fade-up"
        className="lg:w-full flex justify-center lg:justify-end"
      >
        <img
          src={AboutUs}
          alt="Creative Project"
          className="w-full lg:max-w-lg rounded-lg shadow-xl transition-transform transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AboutUsContent;
