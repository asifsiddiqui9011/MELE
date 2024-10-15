import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import RightImg from "./web-frst-section.png";
import leftImg from "./web-dev-second-sec.jpg";
import { toggleList } from './serviceDesc_data';
import './serviceDesc.css';
import background from "./background.jpg"
const ServiceDesc = () => {
  // Initialize AOS in useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 100, // Offset before the animation starts
    });
  }, []);

  // Place the useState inside the component
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle action for accordion
  const toggleAction = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='project-container'>
      <div className='project-title'>
        <div className="project-overlay">
          {/* <img src={background} alt="" className='w-full'/> */}
          <h1>Web Development</h1>
          <h3>Transforming Ideas into Digital Solutions</h3>
        </div>
      </div>

      <div className="service-section px-9 pt-5">
        <div className="service-intro">
          <p className='font-medium'>
            In today’s digital landscape, a strong online presence is crucial for businesses of all sizes. 
            At MELE, we specialize in creating dynamic and responsive web applications that not only meet 
            your needs but also engage your audience. Our development team is dedicated to delivering 
            innovative solutions that drive growth and enhance user experience.
          </p>
        </div>

        <div className="service-desc1 pt-8 flex">
          <div className="left-service w-1/2 p-4">
            <h1 className='font-bold text-5xl'>Our Expertise</h1>
            <h3 className='pt-5 pb-5 font-medium text-xl'>
              We offer comprehensive web development solutions, including:
            </h3>

            <div className="border border-gray-300 w-3/4 mb-4 ">
              {/* Map through the toggleList */}
              {toggleList.map((item, index) => (
                <div key={index} className="accordion-item border-b ">
                  <button
                    className="accordion-header flex justify-between w-full p-4 font-medium "
                    onClick={() => toggleAction(index)}
                  >
                    {item.title}
                    <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
                  </button>

                  <div className={`accordion-content p-4 ${activeIndex === index ? '' : 'hidden'}`}>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="right-service w-100 px-9 mb-8 mt-5">
            <img
              src={RightImg}
              alt=""
              className="h-80 w-full"
              data-aos="fade-right"  // Add AOS animation
            />
          </div>
        </div>
      </div>

      <div className="service-dec-2 pl-8 mt-9 flex">
        <div className="second-left-sec ml-4 w-1/3" data-aos="fade-right">
          <img
            src={leftImg}
            alt=""
            className="h-80 w-full"
          />
        </div>

        <div className="second-right-sec w-1/2 mt-8 pr-9">
          <h1 className='font-bold text-5xl'>Why Choose Us?</h1>
          <p className='pt-4'>
            At MELE, we combine cutting-edge expertise with a client-centric approach to deliver high-quality, tailored web solutions that drive real business results. Our team is committed to understanding your unique needs and goals, ensuring that the solutions we provide are perfectly aligned with your vision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDesc;
