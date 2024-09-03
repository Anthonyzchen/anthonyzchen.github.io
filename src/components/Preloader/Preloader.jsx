import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";
import {
  createCounterAnimation,
  createProgressBarAnimation,
  createPreloaderExitAnimations,
} from "./animations";
import { enterStaggerTextAnimation } from "../utils";
import { col1, col2, col3 } from "../../assets/counterData";

const Preloader = () => {
  // Create a ref to scope the GSAP animations within this component
  const preloaderRef = useRef(null);
  const bodyRef = useRef(document.body);

  // Refs to store text objects
  const counterRef = useRef();
  const progressTextRef = useRef();

  // Refs to store GSAP timelines
  const preloaderTL = useRef();

  const colDatas = [col1, col2, col3];

  const lenis = new Lenis();

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
        .add(createCounterAnimation(), "start")
        .delay(2)
        .add(createProgressBarAnimation(), "<")
        .add(enterStaggerTextAnimation(progressTextRef));
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
      <span key={i} className="text-8xl font-light sm:text-9xl">
        {c + " "}
      </span>
    ));

  return (
    <div ref={preloaderRef}>
      <div className="preloader absolute z-40 flex h-screen w-full flex-col items-center justify-between bg-beige">
        <div className="flex flex-grow items-center justify-center">
          {/* Bottom Gradient Layer */}
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 75%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 85%, transparent 100%)",
            }}
          >
            {/* Top Gradient Layer */}
            <div
              ref={counterRef}
              className="flex h-[7.5rem] flex-row sm:h-40"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to top, black 85%, transparent 100%)",
                maskImage:
                  "linear-gradient(to top, black 85%, transparent 100%)",
              }}
            >
              {colDatas.map((colData, index) => (
                <div
                  key={index}
                  className="counter flex translate-y-[10%] flex-col items-center"
                >
                  {renderCounterColumn(colData)}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1
            ref={progressTextRef}
            className="progressText relative mb-4 flex justify-center text-base"
          >
            Welcome to my page
          </h1>
          <div className="progressBar h-1 w-full origin-left scale-x-0 bg-brown"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
