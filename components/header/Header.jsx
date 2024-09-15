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
import MobileMenu from "../mobileMenu/MobileMenu";
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
      <MobileMenu
        toggle={toggle}
        slider={slider}
        handleSlider={handleSlider}
        handleActiveLink={handleActiveLink}
        title={activeSub}
      />

      
    </div>
  );
};

export default Header;
