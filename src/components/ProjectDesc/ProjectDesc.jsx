import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../../Data/Data.jsx';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProjectDesc.css';  // Import the CSS for infinite animation
import ProjectsCarousel from '../ProjectsCarousel.jsx';

// Helper function to render stars with horizontal layout and hover effect
const renderStars = (rating) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-6 h-6 ${i < rating ? 'text-yellow-500' : 'text-gray-300'} hover:scale-125 transition-transform duration-300`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

const ProjectDesc = () => {
  const { index } = useParams();
  const project = projectsData[index];
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1200 });
  
    // Force the window to scroll to the top immediately on page load
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);

    // Scroll Progress Bar Logic
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 lg:px-24">
      {/* Project Header */}
      <div className="animate__animated animate__fadeInDown mt-20" data-aos="fade-up">
        <h1 className="text-4xl lg:text-5xl  text-center mb-6 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-semibold">
          {project.title}
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto bg-gradient-to-r from-teal-400 to-blue-300 p-2 rounded-md shadow-md font-medium">
          {project.shortDescription}
        </p>
      </div>

      {/* Parallax Image Section */}
      <div
        className="relative w-full h-64 md:h-96 mb-8 animate__animated animate__fadeInUp parallax"
        data-aos="zoom-in"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Project Description Section */}
      <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Project Overview</h2>
        <p className="text-black  leading-relaxed text-justify mb-6 font-light">
          {project.description}
        </p>

        {/* Project Features Section */}
        {project.features && (
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-700">Key Features:</h3>
            <ul className=" text-black list-disc list-inside  pl-4 font-light" data-aos="fade-right">
              {project.features.map((feature, i) => (
                <li key={i} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Tech Stack Section */}
      <div className="mt-12 p-6 bg-white rounded-lg shadow-md " data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-6 text-black text-center">Tech Stack Used</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-black">
          {project.techStack.map((tech, i) => (
            <div key={i} className="relative group perspective">
              <div className={`w-full h-full rounded-lg bg-gradient-to-r ${i % 2 === 0 ? 'from-blue-300 to-teal-200' : 'from-purple-300 to-pink-200'} transform transition-transform duration-300 group-hover:rotateX-6 group-hover:rotateY-6 group-hover:translate-y-[-10px] shadow-lg hover:shadow-2xl`}>
                <div className="absolute inset-0 rounded-lg bg-white opacity-20 blur-xl group-hover:blur-lg animate-pulse"></div>
                <div className="relative p-6 flex flex-col items-center justify-center">
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 md:w-16 md:h-16 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-800 mt-2 text-center font-medium">{tech.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Reviews Section */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-6 text-black">User Reviews</h2>
        {project.reviews && project.reviews.length > 0 ? (
          project.reviews.map((review, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-black0">{review.user}</h3>
                <div className="group">
                  {renderStars(review.rating)}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-black">
                    {review.rating} out of 5 stars
                  </div>
                </div>
              </div>
              <p className="text-black font-light">{review.review}</p>
            </div>
          ))
        ) : (
          <p className="text-black font-light">No reviews available for this project yet.</p>
        )}
      </div>
      
      <div className=' text-center p-5'>
        <h1 className='section-title pt-2 text-sky-950' data-aos="fade-right">Explore Other Services</h1>
        <ProjectsCarousel/>
      </div>
     
    </div>

  );
};

export default ProjectDesc;
