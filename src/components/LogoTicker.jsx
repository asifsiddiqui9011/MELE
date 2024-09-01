"use client";
import acmeLogo from "../assets/code.png";
import quantumLogo from "../assets/ai.png";
import echoLogo from "../assets/ml.png";
import celestialLogo from "../assets/server.png";

import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
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
