"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import compLogo from "../../public/company_logo/logo.svg";
import HeaderLinks from "./headerlinks/HeaderLinks";
import SearchLogin from "./searchLogin/SearchLogin";
import { HiOutlineMenu } from "react-icons/hi";
import MobileMain from "./headerlinks/ProductsMenu/MobileMain";
import MobileSublink from "./headerlinks/ProductsMenu/sublinks/MobileSublink";
import { FaArrowRightLong } from "react-icons/fa6";
const Header = () => {
  // -----------------------------------------
  const [activeSub, setactiveSub] = useState("Featured");
  const handleActiveLink = (link) => {
    setactiveSub(link);
  };
  const [slider, setslider] = useState(false);
  const handleSlider = () => {
    setslider(!slider);
  };
  const [toggle, settoggle] = useState(false);
  const handleToggle = () => {
    settoggle(!toggle);
    setstyle(!toggle);
  };
  const [style, setstyle] = useState(false);
  const handleMouseEnter = () => {
    setstyle(true);
  };
  const handleMouseleave = () => {
    setstyle(!style);
  };

  // --------------------------------------------
  return (
    <div className="w-full  font-charlie 0 fixed z-50 bg-[white]  ">
      <div className="max-xl:container  bg-white   w-full h-full mx-auto text-2xl flex max-lg:px-5 max-xl:py-4 max-xl:px-10 justify-between items-center  px-[11rem]  max-2xl:px-[4.5rem]  ">
        <div>
          <Image
            src={compLogo}
            alt="image"
            width={185}
            height={100}
            className=" max-xl:w-44 "
          />
        </div>
        <div className=" xl:block   hidden">
          <HeaderLinks
            mouseEnter={handleMouseEnter}
            mouseLeave={handleMouseleave}
            handleActiveLink={handleActiveLink}
            activeSub={activeSub}
          />
        </div>
        <div className="flex gap-5 items-center">
          <SearchLogin />
          <div
            className="toggle-button hidden cursor-pointer relative max-xl:block"
            onClick={handleToggle}
          >
            <HiOutlineMenu
              className={`text-4xl opacity-0 transition-all duration-300 pointer-events-none  ease-in-out ${
                toggle == false && "opacity-100"
              } text-black `}
            />
            <div
              className={` ${
                toggle == true && "opacity-100 -rotate-45"
              } pointer-events-none absolute h-[.18rem] w-[83%] opacity-0 rounded-xl  bg-black top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out`}
            ></div>
            <div
              className={` ${
                toggle == true && "opacity-100 rotate-45"
              } pointer-events-none absolute h-[.18rem] w-[83%] opacity-0 rounded-xl bg-black top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out  `}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={`white-background ${
          style
            ? "pointer-events-auto opacity-1"
            : "pointer-events-none opacity-0"
        }  `}
      ></div>

      {/* mpbile-links */}

      <div
        className={` ${
          toggle
            ? "   right-3 max-sm:right-0 "
            : " right-[-38%] max-sm:right-[-100%]"
        }   absolute  max-xl:w-[36%] max-lg:w-[37%] h-auto py-2 max-sm:w-[100%] max-md:w-[38%] transition-all duration-300 ease-in-out max-sm:py-0   z-[50]   top-[100%]  max-xl:opacity-[100] opacity-0 pointer-events-none max-xl:pointer-events-auto`}
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
              // setactiveSub={setactiveSub}
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
            title={activeSub}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
