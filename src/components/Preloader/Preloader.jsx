import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  createTextAnimation,
  createProgressBarAnimation,
  createPreloaderExitAnimations,
} from "./animations";
import { col1, col2, col3 } from "../../assets/counterData";
import Lenis from "@studio-freight/lenis";

const Preloader = () => {
  // Create a ref to scope the GSAP animations within this component
  const preloaderRef = useRef(null);
  const bodyRef = useRef(document.body);

  // Refs to store GSAP timelines
  const preloaderTL = useRef();

  const lenis = new Lenis();

  // Initialize animations
  useGSAP(
    () => {
      preloaderTL.current = gsap
        .timeline({
          onStart: () => {
            // Stop scrolling when the preloader is active
            lenis.stop();
            bodyRef.current.style.overflowY = "hidden";
          },
        })
        .add(createTextAnimation(), "start")
        .add(createProgressBarAnimation(), "<");
    },
    { scope: preloaderRef },
  );

  // Add exit animations and remove preloader after DOM is fully loaded
  useEffect(() => {
    window.addEventListener("load", () => {
      preloaderTL.current.add(
        createPreloaderExitAnimations(preloaderRef, bodyRef, lenis),
      );
    });
  }, []);

  // Helper function to render counter column items
  const renderCounterColumn = (colData) =>
    colData.map((c, i) => (
      <span key={i} className="text-8xl sm:text-9xl">
        {c + " "}
      </span>
    ));

  return (
    <div ref={preloaderRef}>
      <div className="preloader absolute z-20 flex h-screen w-full flex-col items-center justify-between gap-10 bg-beige tracking-tight">
        <div className="flex flex-grow items-center justify-center">
          <div className="flex h-24 flex-row overflow-hidden sm:h-32">
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
