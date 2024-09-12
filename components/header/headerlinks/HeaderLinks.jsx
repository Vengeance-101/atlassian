"use client";
import Link from "next/link";
import React from "react";
import ProductsMenu from "./ProductsMenu/ProductsMenu";
import { PiCaretDownDuotone } from "react-icons/pi";
const HeaderLinks = ({ mouseEnter, mouseLeave }) => {
  const navlink = [
    { title: "Products" },
    { title: "Teams" },
    { title: "Why Atlassian" },
    { title: "Resources" },
  ];

  return (
    <div className="flex  items-center text-base  ">
      {navlink.map((links) => {
        return (
          <li key={links.title}>
            <button
              href="#"
              className={`text-[#253858] flex items-center gap-2  py-6 px-4 anchor-links  ${links.title} `}
              key={links.title}
              id={links.title}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              {links.title}
              <PiCaretDownDuotone className="arrow transition-all duration-300 ease-in-out" />
            </button>
            {links.title == "Products" && (
              <ProductsMenu mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
            )}
          </li>
        );
      })}
      <Link
        href="#"
        className="text-[#253858]  py-6 px-5 Enterprise-link hover:text-[#0065FF] transition-all duration-300 ease-in-out"
      >
        Enterprise
      </Link>
    </div>
  );
};

export default HeaderLinks;
