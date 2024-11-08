import React from 'react';
import image1 from '../assets/slider/1.png';
import image2 from '../assets/slider/2.png';
import image3 from '../assets/slider/3.png';
import image4 from '../assets/slider/4.jpg';
import image5 from '../assets/slider/5.png';
import image6 from '../assets/slider/6.png';
import image7 from '../assets/slider/7.png';

const images = [image1, image2, image3, image4, image5, image6, image7];

const Slider = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white py-4 sm:py-6 md:py-8">
      <div className="flex animate-scroll-once whitespace-nowrap space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 px-2 sm:px-4 md:px-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
            <img
              src={image}
              alt={`Partner ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;


// // CircularSlider.js
// import React, { useEffect, useRef } from 'react';
// import image1 from '../assets/slider/1.png';
// import image2 from '../assets/slider/2.png';
// import image3 from '../assets/slider/3.png';
// import image4 from '../assets/slider/4.jpg';
// import image5 from '../assets/slider/5.png';
// import image6 from '../assets/slider/6.png';
// import image7 from '../assets/slider/7.png';
// import '../3d.css';

// const images = [
//   image1,
//   image2,
//   image3,
//   image4,
//   image5,
//   image6,
//   image7,
// ];

// const Slider = () => {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const slider = sliderRef.current;
//     let start = performance.now();

//     const moveSlider = (time) => {
//       const elapsed = time - start;
//       slider.style.transform = `translateX(${-elapsed / 20}px)`;
//       if (elapsed / 20 > slider.scrollWidth / 2) {
//         start = performance.now();
//       }
//       requestAnimationFrame(moveSlider);
//     };

//     requestAnimationFrame(moveSlider);
//   }, []);

//   return (
//     // <div className="overflow-hidden relative w-full">
//     //   <div ref={sliderRef} className="flex">
//     <div className=" w-full overflow-hidden bg-white  sm:py-6 md:py-8">
//       <div ref={sliderRef} className="flex sm:space-x-6 md:space-x-8 lg:space-x-10 sm:px-4 md:px-6">
//         {images.concat(images).map((image, index) => (
//           <div key={index} className="flex-shrink-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
//             <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-contain" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;
