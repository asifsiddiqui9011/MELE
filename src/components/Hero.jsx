"use client";
import { FaAngleRight } from "react-icons/fa6";
// import ImageCollage from "./ImageCollage";
import LogoTicker from "./LogoTicker";
import { lazy,Suspense } from "react";
import Loader from "./Loader/Loader";

const ImageCollage = lazy(()=>import("./ImageCollage"))

const Hero = () => {
  return (
    <section className="pt-8 md:pt-10 md:pb-0  bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_60%)] overflow-x-clip">
      <div className="container ">
        <div className="md:flex gap-20 mt-40 w-full h-full">
          <div className="md:w-[500px]">
            <h1 className="text-5xl pb-5 md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ">
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
          <div className="mt-20 md:mt-0 md:h-[400px] md:w-[600px] md:flex-1 relative">
            <Suspense fallback={<Loader/>}>
              <ImageCollage />
            </Suspense>
          </div>
        </div>
      </div>
      <LogoTicker/>
    </section>
  );
};

export default Hero;


// "use client";
// import { FaAngleRight } from "react-icons/fa6";
// import ImageCollage from "./ImageCollage";
// import LogoTicker from "./LogoTicker";
// import Gear from "./Gear/Gear";

// const Hero = () => {
//   return (
//     <section className="pt-8 md:pt-10  md:pb-0 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_60%)]   overflow-x-clip">
//       <div className="container">
//         <div className="md:flex gap-20 mt-40 w-full ">
//           <div className="md:w-[500px]">
//             <h1 className="text-5xl pb-5 md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ">
//               Pathway to your Dream Project
//             </h1>
//             <p className="text-xl text-[#010D3E] tracking-tight mt-6">
//               with our services at the lowest cost
//             </p>
//             <div className="flex gap-3 items-center mt-[30px]">
//               <button className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-[#001E80]  transition-all duration-150">
//                 Get In Touch
//               </button>
//               <button className="btn btn-text gap-2 text-black hover:text-white">
//                 <span>Learn more</span>
//                 <FaAngleRight className="h-5 w-5 " />
//               </button>
//             </div>
//           </div>
//           <div className="mt-20 md:mt-0 md:h-[400px] md:w-[600px] md:flex-1 relative">
//             {/* <ImageCollage /> */}
//             <Gear/>
//           </div>
         
//         </div>
//       </div>
//       <LogoTicker/>
//     </section>
//   );
// };

// export default Hero;
