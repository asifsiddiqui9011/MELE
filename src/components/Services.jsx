import React from "react";
//import Carousel from "./Carousel";
import StatsSection from "./StatsSection";
import Carousel2 from "./Carousel2";
import Card from "./Card/Card";
import { cards } from "../Data/Data";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

  return (
    <div className="w-full bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_60%)] " id="services">
      <div className="section-title pt-2"> Our Services</div>

      <div className="w-full p-6 ">
        <p className="text-center text-xl">
          We help you to build high-quality digital solutions and products as
          well as deliver a wide range of related professional services.
          <br />
           We are providing world-class service to our
          clients.
        </p>
      </div>

      {/* <div className="flex items-center justify-center pb-10">
        <Carousel2 />
      </div> */}

      <div className="pb-10">
      {/* <Slider {...settings}> */}
      <Carousel responsive={responsive} arrows={true} keyBoardControl={true} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
        {cards.map((service,index)=>{
            return(
              <Card key={index} img={service.image} title={service.title} desc={service.desc}/>
            )
        })}
        </Carousel>
        {/* </Slider>    */}
      </div>
     
     
    </div>
  );
};

export default Services;
