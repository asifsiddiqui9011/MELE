import React from 'react';
import { FaClock, FaGift, FaUsers, FaAward } from 'react-icons/fa'; // Import icons from react-icons
import CountUp from 'react-countup'; // Import CountUp for the counter effect
import { useInView } from 'react-intersection-observer'; // Import useInView hook

const stats = [
  { icon: <FaClock />, value: 13500, label: 'Working Hours' },
  { icon: <FaGift />, value: 720, label: 'Completed Projects' },
  { icon: <FaUsers />, value: 480, label: 'Happy Clients' },
  { icon: <FaAward />, value: 120, label: 'Awards Received' },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation once when it enters the viewport
    threshold: 0.4, // Percentage of section visible before triggering
  });

  return (
    <div
      className="bg-black bg-opacity-10 bg-center text-white py-5"
      style={{ backgroundImage: `url('/path/to/your/background-image.jpg')` }}
      ref={ref} // Attach ref to the section to observe when it comes into view
    >
      {/* Container for the stats */}
      <div className="container mx-auto px-4">
        {/* Flex container to arrange stats horizontally and responsive */}
        <div className="flex flex-wrap justify-around items-center gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Animated Icon */}
              <div className="text-5xl mb-3 animate-bounce transition duration-500 ease-in-out transform hover:scale-110">
                {stat.icon}
              </div>
              {/* CountUp for counter effect */}
              <h3 className="text-3xl font-bold">
                {inView && (
                  <CountUp start={0} end={stat.value} duration={4} />
                )}
              </h3>
              <p className="text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
