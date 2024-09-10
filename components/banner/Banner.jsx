import Image from "next/image";
import React from "react";
const Banner = () => {
  return (
    <div className="py-[4.5rem] w-full h-full">
      <div className="w-full py-[6.6rem] bg-[#0065FF]  relative overflow-hidden">
        <h1 className="text-[3rem] text-white text-center font-extrabold tracking-tighter ">
          Put your mission into motion
        </h1>
        <p className=" text-center text-white text-[1.2rem] font-light  mt-5">
          Atlassian’s products accelerate your journey from ideation to reality.
        </p>
        <Image
          src="/bannerLeft.png"
          width={680}
          height={600}
          className=" absolute top-0 left-0"
        />
        <Image
          src="/bannerRight.png"
          width={680}
          height={600}
          className=" absolute top-0 right-0"
        />
      </div>

      <div className="w-full">
        <h1 className="text-center text-[2.4rem] mt-14 text-[#253858] tracking-tighter">
          Our cloud products are powered by the Atlassian platform
        </h1>
        <p className="text-center  text-lg mt-5 text-[#253858] ">
          Connect all of your teams, tools, and data to increase
        </p>
        <p className="text-center  text-lg text-[#253858] ">
          productivity and scale your organization.
        </p>
        <p className="text-center mt-7">
          <button className="outline-none border-2 border-[#0065FF]  rounded-lg py-2  px-5 text-base text-[#0065FF] hover:bg-[#EBECF0] font-extrabold transition-all duration-300 ease-in-out ">
            Explore our platform
          </button>
        </p>
      </div>
    </div>
  );
};

export default Banner;
