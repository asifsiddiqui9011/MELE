import React from "react";
import { cardData } from "../Data/Data.jsx";
import HeaderSectionOfProject from "./HeaderSectionOfProject.jsx";
import { Link } from "react-router-dom";

const Projects = () => {

  

  return <div className="w-full bg-white " id="portfolio"> 

<div><HeaderSectionOfProject/></div>


<div className="container  mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
      <Link to={`/project/${card.title}`} key={index}>  <div
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
        </Link>
      ))}
    </div>


    

  </div>



};

export default Projects;