import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import './ServiceDesc.css';
import ServiceTypes from './ServiceTypes';
import { useParams } from 'react-router-dom';
import { serviceData } from '../../Data/Data';
import BookNow from '../BookNow';
import ServiceCarousel from '../service/ServiceCarousel';
import web3 from './web-3-rbg.png';
import web4 from './web-frst-section.png';

const ServiceDesc = () => {
  const { serviceId } = useParams();
  
  // Find the service based on serviceId
  const service = serviceData.find((e) => e.id === Number(serviceId));

  // Handle case when service is not found
  if (!service) {
    return <div>Service not found</div>;
  }

  // Initialize AOS in useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 100, // Offset before the animation starts
    });
  }, []);

  // State for accordion toggle
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle action for accordion
  const toggleAction = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='project-container'>
      <div className="project-title flex-col sm:pt-10 md:flex-row lg:flex-row p-5 lg:pt-10 pt-10">
          <div className="header-left text-center  mb-4 md:mb-0 ">
             {/* <h1 className='project-headings sm:pt-10 text-5xl md:text-3xl lg:text-5xl font-bold text-indigo-900 mb-2 md:pt-10 ' data-aos="fade-right">{service.title}</h1> */}
             <h1 className='section-title ' data-aos="fade-right">{service.title}</h1>
             <h3 className='project-headings  md:text-2xl lg:text-3xl font-medium mb-5' data-aos="fade-left">Transforming Ideas into Digital Solutions</h3>
             <div className="flex justify-center">
                <button className="p-2 button w-1/2 md:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:bg-blue-300 shadow-md hover:shadow-lg " data-aos="fade-right">
                   Contact Us
                </button>
             </div>
          </div>

          <div className="header-right ml-0 md:ml-10 w-full md:w-1/4 h-1/4 lg:w-1/3">
            <img src={web3} alt="Web Development" className="w-full h-auto mx-auto md:max-w-s lg:max-w-sm" data-aos="fade-up" />
          </div>
      </div>

      {/*Tools And Technology*/}
      <div className="p-6 bg-white shadow-md" data-aos="fade-up">
        <h2 className=" section-title pb-2 text-sky-750">Tools and Technologies We Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {service.techStack && service.techStack.map((tech, i) => (
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

     {/*service description */}
      <div className="service-section ">
        <div className="service-intro p-10 bg-white flex flex-col gap-6 lg:flex-row whitespace-mormal">
          <div className="left-intro w-full lg:w-1/2 " data-aos="fade-right">
            <h1 className='section-title pb-2 text-sky-750 text-start '>Get the Best Solutions At Minimal Cost</h1>
            <p className='font-medium text-justify mt-5'>{service.desc}</p>
          </div>
          <div className="right-intro w-full  lg:w-1/2 "  >
            <img src={service.image} alt=""data-aos="fade-left"  style={{borderRadius:"15px",}}/>
          </div>
        </div>


      {/*service expertise */}
        <div className="service-types pt-8 flex justify-center align-center flex-wrap   bg-gradient-to-r from-blue-300 via-pink-200 to-violet-500">
          <div className="left-service">
            <h1 className='section-title '>Our Expertise</h1>
            <h3 className='p-3 font-medium text-xl flex flex-wrap'>
              We offer comprehensive {service.title} solutions, including:
            </h3>
          </div>
        </div>

        <div className="services-grid flex flex-wrap bg-white">
          {service.expertise.map((expertiseItem, index) => (
            <ServiceTypes 
              key={expertiseItem.id} 
              title={expertiseItem.title} 
              description={expertiseItem.content}
              // features={expertiseItem.features}
              onClick={() => toggleAction(index)} // Assuming you want to toggle on click
              isActive={activeIndex === index} // Assuming you want to show/hide details
            />
          ))}
        </div>

        {/* <div className="right-service w-100 px-9 mb-8 mt-5"> */}
       
      </div>

      <div className="service-desc-2 pl-8 flex justify-center align-center flex-col lg:flex-row bg-white pr-10">
        <div className="second-left-sec ml-4 object-cover w-full lg:w-1/2 pb-5" data-aos="fade-right">
          <img src={web4} alt="" />
        </div>

        <div className="second-right-sec w-full lg:w-1/2  pb-10">
          <h1 className='section-title pb-2'>Why Choose Us?</h1>
          <p className='pt-4 mb-10'> { service.chooseUs}</p>
        </div>
      </div>

      {/*Book Now*/}
      <BookNow />

      

      {/*Other Services */}
      <div className='bg-white text-center p-5'>
        <h1 className='section-title pt-2' data-aos="fade-left">Explore Other Services</h1>
        <ServiceCarousel />
      </div>
    </div>
  );
};

export default ServiceDesc;
