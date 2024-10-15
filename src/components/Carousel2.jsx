import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper/modules";
import Arrow from "../assets/Arrow.svg";
import { serviceData } from "../Data/Data.jsx";

const Container = styled.div`
  position: relative;
  width: 25vw;
  height: 70vh;

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

const Carousel2 = () => {
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
        {serviceData.map((card, index) => (
          <SwiperSlide
            key={index}
            className="bg-white p-6 flex-col transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-300 hover:via-lightblue hover:to-pink-300 rounded-2xl flex justify-center items-center"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src={card.image}
                alt={card.title}
                className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]  object-cover"
              />
              <h1 className="md:text-3xl text-md font-bold flex items-center">
                {card.title}
              </h1>
              <div className="mt-2">
                <h1 className="md:text-lg text-xs text-gray-600">
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

export default Carousel2;
