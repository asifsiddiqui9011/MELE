"use client";
import acmeLogo from "../assets/code.png";
import quantumLogo from "../assets/ai.png";
import echoLogo from "../assets/ml.png";
import celestialLogo from "../assets/server.png";
import { useEffect,useState } from "react";

import { motion } from "framer-motion";

const LogoTicker = () => {

  const [bgOpacity, setBgOpacity] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollTop / documentHeight;
      setBgOpacity(Math.min(scrollPercentage*20, 1)); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`py-4 md:py-8 pb-10 transition-all duration-1000 ease-in-out `} style={{backgroundColor: ` rgba(255, 255, 255, ${bgOpacity})`}} >
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14 text-gray-500"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <div className="flex items-center gap-4">
              <img
                src={acmeLogo}
                alt="Acme Logo"
                className="logo-ticker-image grayscale"
              />
              <span>Web Development</span>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={quantumLogo}
                alt="Quantum Logo"
                className="logo-ticker-image grayscale"
              />
              <span>Artificial Intelligence</span>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={echoLogo}
                alt="Echo Logo"
                className="logo-ticker-image grayscale"
              />
              <span>Machine Learning</span>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={celestialLogo}
                alt="Celestial Logo"
                className="logo-ticker-image grayscale"
              />
              <span>Cloud</span>
            </div>

            {/* 2nd set of Logos for animation */}

            <div className="flex items-center gap-4">
              <img
                src={acmeLogo}
                alt="Acme Logo"
                className="logo-ticker-image grayscale"
              />
              <span>Web Development</span>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={quantumLogo}
                alt="Quantum Logo"
                className="logo-ticker-image grayscale"
              />
              <span>Artificial Intelligence</span>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={echoLogo}
                alt="Echo Logo"
                className="logo-ticker-image grayscale"
              />
              <span>Machine Learning</span>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={celestialLogo}
                alt="Celestial Logo"
                className="logo-ticker-image grayscale"
              />
              <span>Cloud</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
