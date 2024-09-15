import React from "react";
import MobileSublink from "../header/headerlinks/ProductsMenu/sublinks/MobileSublink";
import MobileMain from "../header/headerlinks/ProductsMenu/MobileMain";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
const MobileMenu = ({
  toggle,
  slider,
  handleSlider,
  title,
  handleActiveLink,
}) => {
  return (
    <div
      className={` ${
        toggle
          ? "   right-3 max-sm:right-0 "
          : " right-[-38%] max-sm:right-[-100%]"
      }   absolute  max-xl:w-[36%] max-lg:w-[38%] h-auto py-2 max-sm:w-[100%] max-md:w-[38%] transition-all duration-300 ease-in-out max-sm:py-0   z-[50]   top-[100%]  max-xl:opacity-[100] opacity-0 pointer-events-none max-xl:pointer-events-auto`}
    >
      <div className="bg-white w-full h-full relative overflow-hidden  max-md:pt-0 px-3 shadow-2xl py-11   rounded-[1.2rem] max-sm:rounded-none ">
        <div
          className={` ${
            slider ? "-translate-x-[105%]" : "-translate-x-0"
          }  main_link_mobile transition-all duration-300 ease-in-out w-full `}
        >
          <div className="bg-[#0052cc] max-md:block hidden text-white my-8  text-center text-base font-bold py-2 px-8 rounded-3xl">
            Try now
          </div>
          <h1 className="font-extralight text-[.75rem] text-gray-700">
            PRODUCTS
          </h1>
          <MobileMain
            handleSlider={handleSlider}
            handleActiveLink={handleActiveLink}
          />

          <div className="hidden items-center max-lg:flex justify-between py-3">
            <div className="p-2 rounded-full   bg-indigo-200 hover:bg-indigo-300 ">
              <Image
                src="/assets/asset_8.svg"
                width={500}
                height={200}
                className="w-5  "
              />
            </div>
            <div className="mobile-sign-in flex items-center gap-3 text-lg py-1 px-4  text-[#0065FF] transition-all duration-200 ease-in-out ">
              Sign in <FaArrowRightLong />
            </div>
          </div>
        </div>
        {/* ----------------------- */}
        <MobileSublink
          handleSlider={handleSlider}
          slider={slider}
          title={title}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
