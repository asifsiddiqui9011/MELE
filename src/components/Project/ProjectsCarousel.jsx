import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { projectsData } from "../../Data/Data.jsx";
import './Projects.css'

const ProjectsCarousel = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };


  return (
    <div className="pb-10">
        <Carousel
          responsive={responsive}
          arrows={true} // Always show arrows
          keyBoardControl={true}
          showDots={true}
        //   customDot={<CustomDot />} // Custom dot component
          containerClass="carousel-container" // Custom container class
        >
          {projectsData.map((project, index) => {
            return (
              <Link to={`/project/${index}`} key={index}>
                <div className="card-container min-w-40 bg-white rounded-xl p-6 m-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out relative h-98 flex flex-col justify-between">
                  <div className="card-image-container mb-4 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-image w-full h-48 object-cover"
                    />
                  </div>
                  <h2 className="card-title text-gray-800 text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="p-card-desc"> 
                    {project.description}
                  </p>
                  <button className="animated-border-button relative z-10 bg-white text-black  hover:text-white hover:bg-blue-500" style={{boxShadow:"2px 2px 10px rgba(0,0,0,0.2)"}}>
                    <span className="relative z-20">Read More</span>
                    {/* <div className="border-animation"></div> */}
                  </button>
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
  )
}

// Custom Dot Component for better styling
const CustomDot = ({ onClick, ...rest }) => {
    const { active } = rest;
    return (
      <li
        className={`inline-block w-3 h-3 rounded-full mx-2 cursor-pointer ${active ? "bg-purple-600" : "bg-gray-400"}`}
        onClick={() => onClick()}
      />
    );
  };

export default ProjectsCarousel
