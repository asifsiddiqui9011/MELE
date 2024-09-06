import React from "react";
import { cardData } from "../Data/Data.jsx";
import HeaderSectionOfProject from "./HeaderSectionOfProject.jsx";
const Projects = () => {

  

  return <div className="w-full">

<div><HeaderSectionOfProject/></div>


<div className="container mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:duration-300"
        >
          <div
            className="bg-gray-100 p-4 rounded-full mb-4 animate-pulse icon-animation"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-12 h-12 animate-spin-slow" // Applying custom animation to icon
            />
          </div>
          <h2 className="text-xl font-semibold mb-3">{card.title}</h2>
          <p className="text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>

    <section className="flex items-center justify-center w-full py-20 bg-gradient-to-r from-blue-600 to-blue-400">
      <div className="text-center max-w-3xl mx-auto px-4 space-y-6">
        
        {/* Title */}
        <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight animate-fadeIn">
          We Value Each of Our Customers in Handling Their Projects
        </h2>
        
        {/* Subtitle */}
        <p className="text-white text-lg md:text-xl font-light animate-fadeIn delay-100">
          Review Sessions Are Also Provided
        </p>
        
        {/* Call to Action Button */}
        <a 
          href="#contact"
          className="inline-block px-8 py-3 text-lg font-semibold text-blue-600 bg-white rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 animate-slideUp delay-200 transition-transform duration-300 transform hover:scale-105"
        >
          Book Now
        </a>
      </div>
    </section>

  </div>



};

export default Projects;
