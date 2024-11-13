import React from "react";
//import Carousel from "./Carousel";
import StatsSection from "../StatsSection";
import Card from "../ServiceCard/Card";
import { serviceData } from "../../Data/Data";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
import ServiceCarousel from "./ServiceCarousel";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Services = () => {

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      items: 1
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 100, // Offset before the animation starts
    });
  }, []);

  return (
    <div className="w-full bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_60%)] " id="services">
      <div className="section-title pt-2" data-aos="fade-down"> Our Services</div>

      <div className="w-full p-6 ">
        <p className="text-center text-xl">
          We help you to build high-quality digital solutions and products as
          well as deliver a wide range of related professional services.
          <br />
           We are providing world-class service to our
          clients.
        </p>
      </div>
      
      <ServiceCarousel/>
     
     
    </div>
  );
};

export default Services;
