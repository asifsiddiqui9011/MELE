import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import RightImg from "./web-frst-section.png";
import leftImg from "./web-dev-second-sec.jpg";
// import { toggleList } from './serviceDesc_data';
import './serviceDesc.css';
import background from "./background.jpg"
import { useParams } from 'react-router-dom';
import { serviceData } from '../../Data/Data';
import Services from '../Services';
import BookNow from '../BookNow';
import ServiceCarousel from '../ServiceCarousel';


const ServiceDesc = () => {

  const {serviceId} = useParams();
  const service = serviceData.find((e)=> e.id === Number(serviceId));
  const toggleList = service.expertise
  console.log(toggleList,"togglelist")
  

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
          <h1>{service.title}</h1>
          <h3>
            Transforming Ideas into Digital Solutions
          </h3>
        </div>
      </div>

      <div className=" bg-white service-section px-9 ">
        <div className="service-intro">
          <p className='font-medium'>
            {/* In today’s digital landscape, a strong online presence is crucial for businesses of all sizes. 
            At MELE, we specialize in creating dynamic and responsive web applications that not only meet 
            your needs but also engage your audience. Our development team is dedicated to delivering 
            innovative solutions that drive growth and enhance user experience. */}
            {service.desc}
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
              data-aos="fade-left"  // Add AOS animation
            />
          </div>
        </div>
      </div>

      <div className="bg-white service-dec-2 pl-8  flex">
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
            {service.chooseUs}
          </p>
        </div>
      </div>
      {/*Book Now*/}
      <BookNow/>
  

      {/*Tools And technology*/}
      <div className=" p-6 bg-white  shadow-md" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Tools and Technologies We Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {service.techStack.map((tech, i) => (
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

      
      {/*Other Services */}
      <div className='bg-white text-center p-5'   >
        <h1 className='section-title pt-2 text-sky-950' data-aos="fade-left" >Explore Other Services</h1>
          <ServiceCarousel />
      </div>
    </div>
  );
};

export default ServiceDesc;
