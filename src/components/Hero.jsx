"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";
import ImageCollage from "./ImageCollage";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-10 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_60%)] overflow-x-clip"
    >
      <div className="container ">
        <div className="md:flex gap-20 mt-40 w-full h-full">
          <div className="md:w-[500px]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ">
              Pathway to your Dream Project
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              with our services at the lowest cost
            </p>
            <div className="flex gap-3 items-center mt-[30px]">
              <button className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-[#001E80]  transition-all duration-150">
                Get In Touch
              </button>
              <button className="btn btn-text gap-2 text-black hover:text-white">
                <span>Learn more</span>
                <FaAngleRight className="h-5 w-5 " />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[600px] md:w-[600px] md:flex-1 relative">
            <ImageCollage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
