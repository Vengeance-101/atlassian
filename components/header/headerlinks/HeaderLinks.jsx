"use client";
import Link from "next/link";
import React from "react";
import ProductsMenu from "./ProductsMenu/ProductsMenu";
import { useState } from "react";
const HeaderLinks = () => {
  const navlink = [
    { title: "Products" },
    { title: "Teams" },
    { title: "Why Atlassian" },
    { title: "Resources" },
  ];
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };
  return (
    <div className="flex  items-center text-base  ">
      {navlink.map((links) => {
        return (
          <Link
            href="#"
            className={`text-[#253858]  py-6 px-5 anchor-links hover:text-[#0065FF] transition-all duration-300 ease-in-out ${links.title} `}
            key={links.title}
            id={links.title}
            onMouseEnter={() => handleMouseEnter(links.title)}
            onMouseLeave={handleMouseLeave}
          >
            {links.title}
            {/* {activeMenu == "Products" && <ProductsMenu />} */}
          </Link>
        );
      })}
      <ProductsMenu />
      <Link
        href="#"
        className="text-[#253858]  py-6 px-5 Enterprise-link hover:text-[#0065FF] transition-all duration-300 ease-in-out"
      >
        Enterprise
      </Link>
      {/* <ProductsMenu /> */}
      <div className="white-background "></div>
    </div>
  );
};

export default HeaderLinks;
