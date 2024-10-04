// import React, { useEffect, useState } from 'react';
// import {cards }from '../Data/Data.jsx';

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsToShow, setCardsToShow] = useState(1);

//   useEffect(() => {
//     const updateCardsToShow = () => {
//       if (window.innerWidth >= 1024) {
//         setCardsToShow(3);
//       } else if (window.innerWidth >= 768) {
//         setCardsToShow(2);
//       } else {
//         setCardsToShow(1);
//       }
//     };

//     updateCardsToShow();
//     window.addEventListener('resize', updateCardsToShow);

//     return () => window.removeEventListener('resize', updateCardsToShow);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === cards.length - cardsToShow ? 0 : prevIndex + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [cardsToShow]);

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden">
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${(currentIndex / cardsToShow) * 100}%)` }}
//       >
//         {cards.map((card, index) => (
//           <div key={index} className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4`}>
//             {/* Updated hover effect with ease-in-out transition */}
//             <div className="bg-white shadow-md  shadow-black rounded-lg p-6 flex flex-col items-center h-96 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-300 hover:via-lightblue hover:to-pink-300">
//               <img src={card.image} alt={card.title} className="mb-4 w-16 h-16" />
//               <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
//               <p className="text-center text-gray-600">{card.content}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
//         {Array.from({ length: Math.ceil(cards.length / cardsToShow) }).map((_, index) => (
//           <button
//             key={index}
//             className={`mx-1 w-3 h-3 rounded-full ${
//               currentIndex === index * cardsToShow ? 'bg-blue-500' : 'bg-gray-300'
//             }`}
//             onClick={() => handleDotClick(index * cardsToShow)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper/modules";
import Arrow from "../assets/Arrow.svg";
import { cards } from "../Data/Data.jsx";

const Container = styled.div`
  position: relative;
  width: 15vw;
  height: 50vh;
  overFlow:hidden;
  textAlign:start;

  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }

  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }

  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }
`;

const ArrowButtonNext = styled.div`
  position: absolute;
  width: 2rem;
  right: 10px;
  top: 50%;
  color: ${(props) => props.theme.text};
  background-image: url(${Arrow});
  background-position: center;
  background-size: cover;
  transform: translateY(-50%);
  z-index: 20;

  &::after {
    display: none;
  }

  @media (max-width: 64em) {
    width: 3rem;
  }

  @media (max-width: 30em) {
    width: 2rem;
  }
`;

const ArrowButtonPrev = styled.div`
  position: absolute;
  width: 2rem;
  left: 10px;
  top: 50%;
  color: ${(props) => props.theme.text};
  background-image: url(${Arrow});
  background-position: center;
  background-size: cover;
  transform: translateY(-50%) rotate(180deg);
  z-index: 20;

  &::after {
    display: none;
  }

  @media (max-width: 64em) {
    width: 3rem;
  }

  @media (max-width: 30em) {
    width: 2rem;
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        scrollbar={{
          draggable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="h-full w-full"
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            className="bg-white p-5 flex-col transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-300 hover:via-lightblue hover:to-pink-300 rounded-2xl flex justify-center items-center"
          >
            <div className="flex flex-col items-center justify-center gap-2 pt-5">
              <img
                src={card.image}
                alt={card.title}
                className="md:w-[100px] md:h-[100px] w-[20px] h-[20px]  object-cover"
              />
              <h1 className="md:text-3xl text-xs font-normal flex items-center">
                {card.title}
              </h1>
              <div className="mt-2">
                <h1 className="md:text-lg text-sm text-center overflow-hidden h-1.5vh text-gray-600">
                  {card.desc}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <ArrowButtonNext className="swiper-button-next" />
        <ArrowButtonPrev className="swiper-button-prev" />
      </Swiper>
    </Container>
  );
};

export default Carousel;

