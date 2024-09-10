import Image from "next/image";
import React from "react";
const SearchLogin = () => {
  return (
    <div className=" flex items-center gap-7">
      <div className="bg-[#0052cc] text-white hover:bg-[#123263] transition-all duration-200 ease-in-out text-base font-bold py-2 px-8 rounded-3xl">
        Try now
      </div>
      <div className="p-2 rounded-full bg-indigo-200 hover:bg-indigo-300 ">
        <Image
          src="/assets/asset_8.svg"
          width={500}
          height={200}
          className="w-5  "
        />
      </div>
      <div className="sign-in text-[#101214] text-lg py-1 px-4 hover:text-[#0065FF] transition-all duration-200 ease-in-out ">
        Sign in
      </div>
    </div>
  );
};

export default SearchLogin;
