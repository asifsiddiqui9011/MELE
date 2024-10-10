import React from "react";
import { projectsData } from "../Data/Data.jsx";
import HeaderSectionOfProject from "./HeaderSectionOfProject.jsx";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "./Card/Card.jsx";


const Projects = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
  
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  

  return <div className="w-full bg-white " id="portfolio"> 

        <div><HeaderSectionOfProject/></div>


        {/* <div className="container  mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
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
            </div> */}
           <div className="pb-10">
               <Carousel responsive={responsive} arrows={true} keyBoardControl={true} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {projectsData.map((project,index)=>{
                        return(
                      <Link to={`/project/${index}`} key={index}>  <Card  img={project.image} title={project.title} desc={project.description}/></Link>
                        )
                    })}
                </Carousel>
           </div>
     
          </div>



        };

export default Projects;