import React from "react";
import { projectsData } from "../Data/Data.jsx";
import HeaderSectionOfProject from "./HeaderSectionOfProject.jsx";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Projects.css'; // Import custom CSS for animations
import ProjectsCarousel from "./ProjectsCarousel.jsx";



const Projects = () => {

  return (
    <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200" id="portfolio">
      <HeaderSectionOfProject />
      <ProjectsCarousel/>
    </div>
  );
};

export default Projects;
