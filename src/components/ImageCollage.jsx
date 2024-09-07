import React from "react";

// Import images from the assets folder
import image1 from "../assets/1.webp";
import image2 from "../assets/2.webp";
import image3 from "../assets/3.webp";

const images = [image1, image2, image3];

const ImageCollage = () => {
  return (
    <div className="grid grid-cols-9 grid-rows-7 gap-4 w-auto h-96 relative">
      <div className="col-span-3 row-span-5 col-start-1 row-start-2 relative overflow-hidden w-full h-full">
        <img
          src={images[0]}
          alt="Image 1"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      <div className="col-span-3 row-span-5 col-start-7 row-start-2 relative overflow-hidden w-full h-full">
        <img
          src={images[1]}
          alt="Image 2"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      <div className="col-span-3 row-span-7 col-start-4 row-start-1 relative overflow-hidden w-full h-full">
        <img
          src={images[2]}
          alt="Image 3"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default ImageCollage;
