import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../../Data/Data.jsx';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProjectDesc.css';  // Import the CSS for infinite animation

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

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1200 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 lg:px-24">
      {/* Project Header */}
      <div className="animate__animated animate__fadeInDown mt-20" data-aos="fade-up">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6 text-gray-800">
          {project.title}
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          {project.shortDescription}
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-64 md:h-96 mb-8 animate__animated animate__fadeInUp" data-aos="zoom-in">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Project Description Section */}
      <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-right">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Project Overview</h2>
        <p className="text-gray-600 leading-relaxed text-justify mb-6">
          {project.description}
        </p>

        {/* Project Features Section */}
        {project.features && (
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-700">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-600 pl-4" data-aos="fade-left">
              {project.features.map((feature, i) => (
                <li key={i} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>


{/* Tech Stack Section */}
<div className="mt-12 p-6 bg-white  rounded-lg shadow-md" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Tech Stack Used</h2>
        <div className="tech-stack-container">
  <div className="tech-stack-slider">
    {/* First set of tech stack icons */}
    {project.techStack.map((tech, i) => (
      <div key={i} className="tech-icon">
        <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
        <p className="text-gray-700 mt-2">{tech.name}</p>
      </div>
    ))}
    {/* Duplicate the tech stack to enable seamless scrolling */}
    {project.techStack.map((tech, i) => (
      <div key={`dup-${i}`} className="tech-icon">
        <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
        <p className="text-gray-700 mt-2">{tech.name}</p>
      </div>
    ))}
  </div>
</div>
      </div>


      {/* User Reviews Section */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">User Reviews</h2>

        {project.reviews && project.reviews.length > 0 ? (
          project.reviews.map((review, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-800">{review.user}</h3>
                <div className="group">
                  {renderStars(review.rating)}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-500">
                    {review.rating} out of 5 stars
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No reviews available for this project yet.</p>
        )}
      </div>

      

      {/* Back to Projects Button */}
      <div className="mt-12 text-center" data-aos="fade">
        <a
          href="/"
          className="inline-block bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition-all duration-300"
        >
          Back to Projects
        </a>
      </div>
    </div>
  );
};

export default ProjectDesc;
