import React, { useEffect, useRef } from "react";
import { cardData } from "../Data/Data.jsx";
import HeaderSectionOfProject from "./HeaderSectionOfProject.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      // Add a unique 3D rotation for each card
      const rotationX = index % 2 === 0 ? 30 : -30; // Rotate X for odd/even
      const rotationY = index % 2 === 0 ? -20 : 20; // Rotate Y for odd/even

      gsap.fromTo(
        card,
        { opacity: 0, rotateX: rotationX, rotateY: rotationY, z: -200, scale: 0.8 }, // 3D starting state
        {
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          z: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1, // Smooth scrolling animation
            toggleActions: "play none none reverse", // Play and reverse on scroll
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full bg-white">
      <div>
        <HeaderSectionOfProject />
      </div>

      {/* Updated Responsive Grid Layout */}
      <div className="container mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-none lg:flex lg:space-x-6 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:duration-300"
            style={{ perspective: 1000 }} // Adding perspective for 3D effect
          >
            <div className="bg-gray-100 p-4 rounded-full mb-4   animate-pulse icon-animation">
              <img
                src={card.icon}
                alt={card.title}
                className="w-12 h-12 animate-spin-slow"
              />
            </div>
            <h2 className="text-xl font-semibold mb-3">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
