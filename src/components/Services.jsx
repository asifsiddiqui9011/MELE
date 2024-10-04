import React from "react";
import Carousel from "./Carousel";
import StatsSection from "./StatsSection";
import Carousel2 from "./Carousel2";
import Card from "./Card/Card";
import { cards } from "../Data/Data";

const Services = () => {
  return (
    <div className="w-full bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_60%)] " id="services">
      <div className="section-title pt-2"> Our Services</div>

      <div className="w-full p-6">
        <p className="text-center">
          We help you to build high-quality digital solutions and products as
          well as deliver a wide range of related
          <br />
          professional services. We are providing world-class service to our
          clients.
        </p>
      </div>

      <div className="flex items-center justify-center pb-10">
        <Carousel2 />
      </div>
      <div className="flex items-center gap-5 justify-center flex-wrap px-20">
        {cards.map((service,index)=>{
            return(
              <Card key={index} img={service.image} title={service.title} desc={service.desc}/>
            )
        })}
      </div>
     
    </div>
  );
};

export default Services;
