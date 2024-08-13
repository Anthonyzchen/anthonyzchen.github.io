import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  counterAnimation,
  progressAnimation,
  progressTextAnimation,
  preloaderExitAnimations,
} from "../animations/animations";
import { col1, col2, col3 } from "../../assets/counterData";

const Preloader = () => {
  // Refs for the elements to be animated
  const preloaderRef = useRef(null);
  const counterRefs = [useRef(null), useRef(null), useRef(null)];
  const progressRef = useRef(null);
  const progressTextRef = useRef(null);

  useGSAP(() => {
    // Create a new GSAP timeline
    const tl = gsap.timeline();
    tl.add(counterAnimation(counterRefs), "start") // Add counter animations to the timeline
      .add(progressTextAnimation(progressTextRef), "<") // Add progress text animation
      .add(progressAnimation(progressRef), "<") // Add progress bar animation
      .add(
        preloaderExitAnimations(
          counterRefs,
          progressTextRef,
          progressRef,
          preloaderRef,
        ), // Add preloader exit animations
      );
  });

  // Helper function to render counter column items
  const renderCounterColumn = (colData) =>
    colData.map((c, i) => (
      <span key={i} className="text-9xl">
        {c + " "}
      </span>
    ));

  return (
    <div
      ref={preloaderRef}
      className="absolute z-20 flex h-screen w-full flex-col items-center justify-between gap-10 bg-beige font-KoHo tracking-tight text-brown"
    >
      <div className="flex flex-grow items-center justify-center">
        <div className="flex h-32 flex-row overflow-hidden">
          {[col1, col2, col3].map((colData, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              ref={counterRefs[index]}
            >
              {renderCounterColumn(colData)} {/* Render each column's data */}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h1
          className="relative mb-4 flex justify-center text-base"
          ref={progressTextRef}
        >
          Welcome to my page
        </h1>
        <div
          className="h-1 w-full origin-left scale-x-0 bg-brown"
          ref={progressRef}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
