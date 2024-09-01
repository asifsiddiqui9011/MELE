import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Import images from the assets folder
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";

const images = [image1, image2, image3, image4, image5, image6];

const ImageCollage = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const images = Array.from(gridRef.current.children);

    gsap.fromTo(
      images,
      { scale: 1, zIndex: 1 },
      {
        scale: 1.2,
        zIndex: 10,
        duration: 1,
        stagger: 1, // Delay each image's animation
        ease: "power2.inOut",
        repeat: -1, // Repeat indefinitely
        yoyo: true, // Alternate the animation
      }
    );
  }, []);

  const handleMouseMove = (e, index) => {
    const image = e.currentTarget;
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(image, {
      rotationY: x * 0.05,
      rotationX: -y * 0.05,
      transformPerspective: 500,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (e) => {
    const image = e.currentTarget;
    gsap.to(image, {
      rotationY: 0,
      rotationX: 0,
      ease: "power3.out",
    });
  };

  return (
    <div
      className="grid grid-cols-5 grid-rows-6 gap-10 w-auto h-96 relative"
      ref={gridRef}
    >
      <div
        className="col-span-2 row-span-3 relative overflow-hidden w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={images[0]}
          alt="Image 1"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out rounded-3xl"
        />
      </div>
      <div
        className="row-span-3 col-start-3 relative overflow-hidden w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={images[1]}
          alt="Image 2"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out rounded-3xl"
        />
      </div>
      <div
        className="col-span-2 row-span-3 col-start-4 relative overflow-hidden w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={images[2]}
          alt="Image 3"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out rounded-3xl"
        />
      </div>
      <div
        className="col-span-3 row-span-3 col-start-2 row-start-4 relative overflow-hidden w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={images[3]}
          alt="Image 4"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out rounded-3xl"
        />
      </div>
      <div
        className="row-span-3 col-start-1 row-start-4 relative overflow-hidden w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={images[4]}
          alt="Image 5"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out rounded-3xl"
        />
      </div>
      <div
        className="row-span-3 col-start-5 row-start-4 relative overflow-hidden w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={images[5]}
          alt="Image 6"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out rounded-3xl"
        />
      </div>
    </div>
  );
};

export default ImageCollage;
