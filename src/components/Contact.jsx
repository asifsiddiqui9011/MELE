import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Contact = () => {
  const cursorRef = useRef(null);
  const formRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Custom cursor animation
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      gsap.to(cursorRef.current, {
        css: {
          left: `${x}px`,
          top: `${y}px`,
        },
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // GSAP animation for form components
    gsap.fromTo(
      formRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip relative">
      <div className="container mx-auto">
        <div className="backdrop-blur-lg bg-white/50 flex-col items-center justify-center rounded-3xl p-8">
          <h1
            ref={headerRef}
            className="text-5xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text flex items-center justify-center mb-12"
          >
            Contact Us
          </h1>

          <div className="flex justify-center items-center md:flex-row flex-col gap-8 md:gap-5">
            {/* Google Map */}
            <div className="md:w-1/2 w-full h-96 relative rounded-lg overflow-hidden shadow-xl">
              <iframe
                title="Google Map"
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.759733095938!2d80.27071871537676!3d13.082680390780132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d6e5d14ff3%3A0x6e33e4b5b57f5f50!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1596784345486!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div
              ref={formRef}
              className="md:w-1/2 w-full p-10 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-2xl"
            >
              <form className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-lg bg-white/70 border-none shadow-lg focus:outline-none p-2"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    className="mt-1 block w-full rounded-lg bg-white/70 border-none shadow-lg focus:outline-none p-2"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-lg bg-white/70 border-none shadow-lg focus:outline-none p-2"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea className="mt-1 block w-full rounded-lg bg-white/70 border-none shadow-lg focus:outline-none p-2"></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-[#001E80]  transition-all duration-150"
                    onClick={() => window.open("", "_blank")}
                  >
                    Let's Connect
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
