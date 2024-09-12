import { ProductMenuData } from "@/data/headerdata/ProductMenuData";
import React from "react";

const ItPro = ({ title }) => {
  return (
    <div className="absolute h-full px-14 py-12 w-full top-0 grid grid-cols-2 grid-rows-4 gap-16 right-0">
      {ProductMenuData.map((category) => {
        if (category.sublink.includes(title)) {
          return (
            <div
              key={category.title}
              className="flex gap-4 cursor-pointer categoryLink"
            >
              <div className="left py-4 px-4 flex items-center text-xl  category-icon text-[#1868DB] rounded-md bg-[#F8F8F8] transition-all duration-300 ease-in-out">
                {category.icon}
              </div>
              <div className="right py-1 category-tags">
                <h1 className="text-sm text-black category-main-tag transition-all duration-300 ease-in-out">
                  {category.title}
                </h1>
                <p className="text-xs text-[#505262]">{category.subTitle}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ItPro;
