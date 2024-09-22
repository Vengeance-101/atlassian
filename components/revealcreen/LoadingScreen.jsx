// app/components/LoadingScreen.js
"use client";

import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
export default function LoadingScreen({ setContentLoad }) {
  const [progress, setProgress] = useState(0); // Progress state
  const loadingScreen = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    // Simulate progress update
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          const tl = gsap.timeline();
          tl.to(".loading-counter", {
            opacity: 0,
          })
            .to(loadingScreen.current, {
              height: 0,
              delay: 0.1,
              duration: 0.5,
              ease: "power2.out",
            })
            .to(loadingScreen.current, {
              display: "none",
              onComplete: () => {
                setContentLoad(true);
              },
            });

          return 100;
        }
        return oldProgress + 1;
      });
    }, 25); // Adjust interval for loading speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={loadingScreen}
      className="fixed  h-full w-full  bg-white z-[999] transition-opacity duration-700"
    >
      <div
        ref={progressRef}
        className=" bg-black transition-all  h-full duration-300 ease-out"
        style={{ width: `${progress}%` }}
      ></div>

      {/* Progress Text */}
      <div className="text-[8rem] font-bold loading-counter  z-[600] blur-3xl gap-2 text-[#ffffffb7] mix-blend-difference absolute top-[50%] left-[50%]  translate-x-[-50%]  translate-y-[-50%] ">
        {progress}
        <span className="text-3xl">%</span>
      </div>
      <div className="text-[8rem] font-bold loading-counter  z-[799] gap-2 text-white drop-shadow-xl absolute top-[50%] left-[50%]  translate-x-[-50%]  translate-y-[-50%] ">
        {progress}
        <span className="text-3xl">%</span>
      </div>
    </div>
  );
}
