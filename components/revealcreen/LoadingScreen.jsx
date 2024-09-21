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
              delay: 0.2,
              duration: 0.2,
              opacity: 0,
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
    }, 15); // Adjust interval for loading speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={loadingScreen}
      className="fixed  h-full w-full flex flex-col items-center justify-center bg-black  z-[999] transition-opacity duration-700"
    >
      <div
        ref={progressRef}
        className=" bg-white transition-all w-full  duration-300 ease-out"
        style={{ height: `${progress}%` }}
      ></div>

      {/* Progress Text */}
      <div className="text-[8rem] font-bold loading-counter text-white mix-blend-difference absolute top-[50%] left-[50%]  translate-x-[-50%]  translate-y-[-50%] ">
        {progress}%
      </div>
    </div>
  );
}
