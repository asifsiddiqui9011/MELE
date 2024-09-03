import React from "react";
import Carousel from "./Carousel";
import StatsSection from "./StatsSection";

const Services = () => {
  return (
    <div className="w-full">
      <div className="section-title"> Our Services</div>

      <div className="w-full p-6">
        <p className="text-center">
          We help you to build high-quality digital solutions and products as well as deliver a wide range of related
          <br />
           professional services. We are
          providing world-class service to our clients.
        </p>
      </div>

      <div><Carousel/></div>
      <div><StatsSection/></div>
    </div>
  );
};

export default Services;
