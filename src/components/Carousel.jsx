import React, { useEffect, useState } from 'react';
import cards from '../../public/Data';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);

    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cards.length - cardsToShow ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsToShow]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex / cardsToShow) * 100}%)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4`}>
            {/* Updated hover effect with ease-in-out transition */}
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center h-96 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-300 hover:via-lightblue hover:to-pink-300">
              <img src={card.image} alt={card.title} className="mb-4 w-16 h-16" />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-center text-gray-600">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
        {Array.from({ length: Math.ceil(cards.length / cardsToShow) }).map((_, index) => (
          <button
            key={index}
            className={`mx-1 w-3 h-3 rounded-full ${
              currentIndex === index * cardsToShow ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => handleDotClick(index * cardsToShow)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
