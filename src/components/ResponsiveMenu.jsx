import React from "react";
import { RxCross2 } from "react-icons/rx";
import { MenuLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, toggle }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900/95 dark:text-white px-8 pb-6 pt-16 text-black transition-transform duration-300 ease-in-out md:hidden rounded-r-xl shadow-lg overflow-y-scroll`}
    >
      {/* Close Icon */}
      <div className="absolute top-6 right-6 cursor-pointer" onClick={toggle}>
        <RxCross2
          size={24}
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
        />
      </div>

      <div className="card flex flex-col items-center justify-center">
        <nav className="w-full">
          <ul className="space-y-6 text-xl">
            {MenuLinks.map((data) => (
              <li key={data.name}>
                <a
                  href={data.link}
                  className="block w-full px-4 py-2 rounded-md text-gray-700 dark:text-gray-200 transition-colors duration-200 cursor-pointer"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="mt-10 w-full px-4 py-3 text-center bg-black text-white rounded-full font-medium hover:bg-[#001E80]  transition-all duration-150"
          onClick={() => window.open("", "_blank")}
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
