import React from "react";
import { motion } from "framer-motion";

// Import images from the assets folder
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";

const images = [image1, image2, image3, image4, image5, image6];

const ImageCollage = () => {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 1.8, // Delay between each image animation
      },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    animate: {
      scale: 1.2,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        yoyo: 1, // Makes the scale animation reverse (back to original)
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-8 grid-rows-6 gap-10 w-auto h-96 relative"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="col-span-3 row-span-3 relative overflow-hidden w-full h-full"
        variants={imageVariants}
      >
        <motion.img
          src={images[0]}
          alt="Image 1"
          className="w-full h-full object-cover rounded-3xl"
          loading="lazy" // Lazy loading for image
        />
      </motion.div>

      <motion.div
        className="col-span-2 row-span-3 col-start-4 relative overflow-hidden w-full h-full"
        variants={imageVariants}
      >
        <motion.img
          src={images[1]}
          alt="Image 2"
          className="w-full h-full object-cover rounded-3xl"
          loading="lazy" // Lazy loading for image
        />
      </motion.div>

      <motion.div
        className="col-span-3 row-span-3 col-start-6 relative overflow-hidden w-full h-full"
        variants={imageVariants}
      >
        <motion.img
          src={images[2]}
          alt="Image 3"
          className="w-full h-full object-cover rounded-3xl"
          loading="lazy" // Lazy loading for image
        />
      </motion.div>

      <motion.div
        className="col-span-2 row-span-3 row-start-4 relative overflow-hidden w-full h-full"
        variants={imageVariants}
      >
        <motion.img
          src={images[3]}
          alt="Image 5"
          className="w-full h-full object-cover rounded-3xl"
          loading="lazy" // Lazy loading for image
        />
      </motion.div>

      <motion.div
        className="col-span-4 row-span-3 col-start-3 row-start-4 relative overflow-hidden w-full h-full"
        variants={imageVariants}
      >
        <motion.img
          src={images[4]}
          alt="Image 6"
          className="w-full h-full object-cover rounded-3xl"
          loading="lazy" // Lazy loading for image
        />
      </motion.div>

      <motion.div
        className="col-span-2 row-span-3 col-start-7 row-start-4 relative overflow-hidden w-full h-full"
        variants={imageVariants}
      >
        <motion.img
          src={images[5]}
          alt="Image 7"
          className="w-full h-full object-cover rounded-3xl"
          loading="lazy" // Lazy loading for image
        />
      </motion.div>
    </motion.div>
  );
};

export default ImageCollage;
