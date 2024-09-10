"use client";
import Image from "next/image";
import React from "react";
import compLogo from "../../public/company_logo/logo.svg";
import HeaderLinks from "./headerlinks/HeaderLinks";
import SearchLogin from "./searchLogin/SearchLogin";
const Header = () => {
  // -----------------------------------------

  return (
    <div className="w-full  font-charlie 0 fixed z-50 bg-[white]  ">
      <div className="container bg-white  w-full h-full mx-auto text-2xl flex justify-between items-center  px-[11rem]  ">
        <div>
          <Image src={compLogo} alt="image" width={185} height={100} />
        </div>
        <div>
          <HeaderLinks />
        </div>
        <div>
          <SearchLogin />
        </div>
      </div>
    </div>
  );
};

export default Header;
