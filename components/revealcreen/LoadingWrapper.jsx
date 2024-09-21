// app/components/LoadingWrapper.js
"use client";

import { useState, useEffect, useRef } from "react";
import LoadingScreen from "./LoadingScreen";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { document } from "postcss";
export default function LoadingWrapper({ children }) {
  const [loading, setLoading] = useState(true); // Tracks whether the loading screen is visible
  const [contentLoad, setContentLoad] = useState(false); // Tracks if the content is ready
  const childrenRef = useRef(null); // Ref for the children wrapper div

  gsap.registerPlugin(CSSPlugin); // Register the CSSPlugin for GSAP animations

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // Hide loading screen when the page is loaded
    };

    // Check if the page is already fully loaded
    if (document.readyState === "complete") {
      handleLoad(); // If the page is already loaded, handle the load immediately
    } else {
      window.addEventListener("load", handleLoad); // Otherwise, wait for the 'load' event
      return () => window.removeEventListener("load", handleLoad); // Cleanup listener
    }
  }, []); // This effect runs only once when the component mounts

  return (
    <>
      <div className={`${loading && "opacity-100"}`}>
        <LoadingScreen setContentLoad={setContentLoad} />
      </div>
      <div
        className={` ${!contentLoad && "overflow-hidden h-screen"}   `}
        ref={childrenRef}
      >
        {children}
      </div>
    </>
  );
}
