import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  createCounterAnimation,
  createProgressTextAnimation,
  createProgressBarAnimation,
  createPreloaderExitAnimations,
} from "../animations/animations";
import { col1, col2, col3 } from "../../assets/counterData";

const Preloader = () => {
  // Create a ref to scope the GSAP animations within this component
  const preloaderRef = useRef(null);

  // Refs to store GSAP timelines
  const preloaderTL = useRef();

  useGSAP(
    () => {
      preloaderTL.current = gsap
        .timeline()
        .add(createCounterAnimation(), "start")
        .add(createProgressTextAnimation(), "<")
        .add(createProgressBarAnimation(), "<")
        .add(createPreloaderExitAnimations());
    },
    { scope: preloaderRef },
  );

  // Helper function to render counter column items
  const renderCounterColumn = (colData) =>
    colData.map((c, i) => (
      <span key={i} className="text-9xl">
        {c + " "}
      </span>
    ));

  return (
    <div ref={preloaderRef}>
      <div className="preloader absolute z-20 flex h-screen w-full flex-col items-center justify-between gap-10 bg-beige font-KoHo tracking-tight text-brown">
        <div className="flex flex-grow items-center justify-center">
          <div className="flex h-32 flex-row overflow-hidden">
            {[col1, col2, col3].map((colData, index) => (
              <div key={index} className="counter flex flex-col items-center">
                {renderCounterColumn(colData)}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <h1 className="progressText relative mb-4 flex justify-center text-base">
            Welcome to my page
          </h1>
          <div className="progressBar h-1 w-full origin-left scale-x-0 bg-brown"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
