"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

import Sublink from "./sublinks/Sublink";
const ProductsMenu = ({ mouseEnter, mouseLeave }) => {
  // -------------------------------------------------
  const sublinks = [
    { title: "Featured" },
    { title: "Developers" },
    { title: "Product Managers" },
    { title: "It Professionals" },
    { title: "Business Teams" },
    { title: "Leadership Teams" },
  ];
  // -------------------------------------------------

  const active = true;
  const [activeLink, setactiveLink] = useState("Featured");
  const handleMouseEnter = (sublink) => {
    setactiveLink(sublink);
    console.log(activeLink);
  };

  return (
    <div
      className="absolute productsMenu top-[100%] -translate-x-1/2 left-[50%]   z-[99]"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div
        className="w-full h-auto product_content overflow-hidden  bg-white rounded-2xl flex shadow-xl shadow-slate-400 "
        title={activeLink}
      >
        <div className="main-products flex w-full h-auto">
          <ul className="flex flex-col items-start bg-[#F8F8F8]  py-12">
            {sublinks.map((sublink) => {
              return (
                <li
                  key={sublink.title}
                  className={` ${sublink.title} pl-12  w-full  `}
                >
                  <button
                    href="#"
                    className={` sublink-anchor   w-full transition-all duration-300 ease-in-out  text-sm pl-2   py-3 ${
                      sublink.title == activeLink && active
                        ? "bg-white"
                        : "bg-transparent"
                    }  ${sublink.title}  ${
                      active && sublink.title == activeLink
                        ? "text-[#1868DB]"
                        : "text-black"
                    }  `}
                    onMouseEnter={() => {
                      handleMouseEnter(sublink.title);
                    }}
                  >
                    <span className="w-full text-left inline-flex mr-20">
                      {sublink.title}
                    </span>
                  </button>
                </li>
              );
            })}

            <Link
              href="#"
              className="mt-20 py-3 all-products inline-flex w-full pl-14 items-center gap-1 text-sm text-[#1868DB]"
            >
              {" "}
              See all Products
              <MdOutlineArrowRightAlt className="rightArrow text-lg" />
            </Link>
          </ul>
          <div className="sub-products  w-full  h-full relative">
            <Sublink title={activeLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsMenu;
