import { ProductMenuData } from "@/data/headerdata/ProductMenuData";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
const MobileSublink = ({ handleSlider, slider, title }) => {
  return (
    <div
      className={` w-full h-full  absolute overflow-y-auto  top-0 transition-all duration-300 ease-in-out ${
        slider ? "left-0  " : "left-[100%]"
      } py-10 px-3   `}
    >
      <button
        className="text-xl text-[#1868DB] inline-flex items-center gap-2 py-2"
        onClick={handleSlider}
      >
        <IoIosArrowBack />
        Back
      </button>
      <h1 className="text-xl my-3">{title}</h1>
      <div className={` h-auto   w-full  flex flex-col`}>
        {ProductMenuData.map((category) => {
          if (category.sublink.includes(title)) {
            return (
              <div
                key={category.title}
                className="flex gap-4 py-2 cursor-pointer categoryLink"
              >
                <div className="left py-4 px-4 flex items-center text-xl  text-[#1868DB] rounded-md bg-[#F8F8F8] transition-all duration-300 ease-in-out">
                  {category.icon}
                </div>
                <div className="right py-1 category-tags">
                  <h1 className="text-base text-black category-main-tag transition-all duration-300 ease-in-out">
                    {category.title}
                  </h1>
                  <p className="text-sm text-[#505262]">{category.subTitle}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default MobileSublink;
