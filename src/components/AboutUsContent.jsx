import React from 'react';
import AboutUs from '../assets/aboutus.jpeg'

const AboutUsContent = () => {
  return (
    <div className="container  mx-auto py-10 px-4 flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-10">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 animate-fadeIn">
          We make creativity work for your project!
        </h2>
        <p className="text-gray-700 mt-4 animate-fadeIn">
          Ours is a team of creatives that is brainstorming on great ideas,{' '}
          <span className="font-bold">All. The. Time</span>. With our skills put
          together, you get an ensemble capable of doing anything and everything
          your project needs.
        </p>
        {/* Call to Action Button */}
        <div className="mt-6">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:scale-105 transform transition duration-300 ease-in-out shadow-lg animate-bounceSmall">
            Read More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2">
        <img
          src={AboutUs}
          alt="Creative Project"
          className="w-full rounded-lg shadow-xl transform transition duration-500 hover:scale-105 animate-float"
        />
      </div>
    </div>
  );
};

export default AboutUsContent;
