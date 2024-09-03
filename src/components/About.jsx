import React from "react";
import AboutUs from "../assets/aboutus.jpeg";

const About = () => {
  return (
    <div className="w-full h-[900px] md:h-[500px]  overflow-hidden ">
      <h2 className="section-title">About Us</h2>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:h-[440px]">
        <div className=" h-[400px] md:h-[440px] content-center">
          <h3 className=" section-title text-center text-2xl  font-bold mt-2">
            We make creativity work for your project!
          </h3>
          <p className="ml-8 mt-5 mr-5 text-lg">
            Ours is a team of creatives that is brainstorming on great ideas,{" "}
            <strong>All. The. Time</strong>
            <br />
            With our skills put together, you get an ensemble capable of doing
            anything and everything your project needs needs.
          </p>

          <div className="flex justify-center mt-4">
            <button className="w-[200px] bg-blue-300 hover:bg-blue-500  p-2 rounded-full font-semibold">
              Read More
            </button>
          </div>
        </div>
        <div className="h-[400px] md:h-[440px] flex justify-center items-center overflow-hidden rounded-lg">
          <img
            src={AboutUs}
            alt="About Us"
            className="w-[300px] h-[300px] shadow-2xl rounded-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:translate-x-2 hover:translate-y-2"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
