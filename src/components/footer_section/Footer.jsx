import React, { useState, useEffect } from 'react';
import './footer.css';
import { BsTelephone } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { BiLogoInstagram } from 'react-icons/bi';
import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaArrowUp } from 'react-icons/fa6';
import { Link as ScrollLink } from 'react-scroll'; // Importing ScrollLink

const Footer = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    // Show arrow button when scrolling down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 relative">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* CONTACT US */}
        <div>
          <h4 className="text-lg text-white font-semibold mb-4 w-full">CONTACT US</h4>
          <p>Mandavelli<br />Near Kapaleshwar Temple,<br />Chennai, India</p>
          <p className="flex items-center mt-2">
            <BsTelephone size={20} />
            <span className="ml-2">:+91 9360231608</span>
          </p>

          <div className="flex items-center">
            <CiMail size={20} />
            <span className="ml-2">:mele.ceo13@gmail.com</span>
          </div>
        </div>

        {/* ABOUT US */}
        <div>
          <h4 className="text-lg text-white font-semibold mb-4 w-full">ABOUT US</h4>
          <ul>
            <li><ScrollLink to="/" smooth={true} duration={500} offset={-100} className="hover:text-blue-400">Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={500} offset={-100} className="hover:text-blue-400">About Us</ScrollLink></li>
            <li><ScrollLink to="services" smooth={true} duration={500} offset={-100} className="hover:text-blue-400">Our Services</ScrollLink></li>
            <li><ScrollLink to="/terms" smooth={true} duration={500} offset={-100} className="hover:text-blue-400">Terms & Condition</ScrollLink></li>
            <li><ScrollLink to="/privacy" smooth={true} duration={500} offset={-100} className="hover:text-blue-400">Privacy Policy</ScrollLink></li>
          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h4 className="text-lg text-white font-semibold mb-4 w-full">USEFUL LINKS</h4>
          <ul>
            <li><ScrollLink to="portfolio" smooth={true} duration={300} offset={-100} className="hover:text-blue-400">Portfolio</ScrollLink></li>
            <li><ScrollLink to="/team" smooth={true} duration={300} offset={10} className="hover:text-blue-400">Team</ScrollLink></li>
            <li><ScrollLink to="/career" smooth={true} duration={300} offset={10} className="hover:text-blue-400">Career</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={300} offset={-60} className="hover:text-blue-400">Contact</ScrollLink></li>
            <li><ScrollLink to="faq" smooth={true} duration={300} offset={-100} className="hover:text-blue-400">FAQ</ScrollLink></li>
          </ul>
        </div>

        {/* CONNECT WITH US - Updated Email Subscription Section */}
        <div>
          <h4 className="text-white font-semibold mb-4 w-full">CONNECT WITH US</h4>
          <p className="mb-4">
            Connect with us on our official LinkedIn page and share your thoughts to improve our service.
          </p>
          {/* socials */}
          <div className="flex space-x-4 mt-9 xl:ml-auto lg:ml-16 md:ml-12 sm:ml-8 gap-5 justify-end">
            <a href="#" className="hover:text-blue-400">
              <div className="p-3 box-social inline-flex items-center justify-center">
                <BiLogoInstagram size={26} className="text-white xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px]" />
              </div>
            </a>
            <a href="#" className="hover:text-blue-400">
              <div className="p-3 box-social inline-flex items-center justify-center">
                <FaXTwitter size={25} className="text-white xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px]" />
              </div>
            </a>
            <a href="#" className="hover:text-blue-400">
              <div className="p-3 box-social inline-flex items-center justify-center">
                <FaLinkedinIn size={25} className="text-white xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px]" />
              </div>
            </a>
            <a href="#" className="hover:text-blue-400">
              <div className="p-3 box-social inline-flex items-center justify-center">
                <FaFacebookF size={25} className="text-white xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px]" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center pt-8 copyright text-sm sm:text-base">
        <p>Copyright © 2024 MELE Company Website. All Rights Reserved.</p>
      </div>

      {/* Scroll to Top Button */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-5 bg-blue-700 text-white p-4 rounded-full hover:bg-blue-500 shadow-md transition-all duration-300 animate-bounce"
        >
          <FaArrowUp size={24} /> 
        </button>
      )}
    </footer>
  );
};

export default Footer;