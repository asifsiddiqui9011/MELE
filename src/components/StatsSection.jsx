import React from 'react';
import { FaClock, FaGift, FaUsers, FaAward } from 'react-icons/fa'; // Import icons from react-icons

const stats = [
  { icon: <FaClock />, value: '13500', label: 'Working Hours' },
  { icon: <FaGift />, value: '720', label: 'Completed Projects' },
  { icon: <FaUsers />, value: '480', label: 'Happy Clients' },
  { icon: <FaAward />, value: '120', label: 'Awards Received' },
];

const StatsSection = () => {
  return (
    <div className="bg-black  bg-center text-white py-12" style={{ backgroundImage: `url('/path/to/your/background-image.jpg')` }}>
      {/* Container for the stats */}
      <div className="container mx-auto px-4">
        {/* Flex container to arrange stats horizontally and responsive */}
        <div className="flex flex-wrap justify-around items-center gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-6xl mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
