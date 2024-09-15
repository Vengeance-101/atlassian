import React from "react";
import Button from "@/lib/button/Button";
import { colabrate } from "@/data/collaborate/CollabrateData";
const Collabrate = () => {
  return (
    <div className="px-[11rem]  h-auto ">
      <p className="text-left w-full text-2xl py-5 font-extrabold text-black">
        Collaborate
      </p>
      <div className="grid grid-cols-2 gap-12 w-full h-auto py-10">
        {colabrate.map((item) => {
          return (
            <div key={item.title}>
              <div className="flex items-center w-full py-1 justify-start gap-3 text-4xl ">
                <div className="icon text-[#1868DB]">
                  <div>{item.icon}</div>
                </div>
                <div className="power-title">
                  <div>{item.title}</div>
                </div>
              </div>
              <div className="py-5">{item.subtitle}</div>
              <Button>{item.btn}</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collabrate;
