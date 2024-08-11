import React, { useEffect, useRef } from "react";
import {
  counterAnimation,
  progressAnimation,
  progressTextAnimation,
  preloaderExitAnimations,
} from "../animations/animations";
import { col1, col2, col3 } from "../../assets/counterData";

const Preloader = ({ timeline }) => {
  const preloaderRef = useRef(null);
  const counterRef1 = useRef(null);
  const counterRef2 = useRef(null);
  const counterRef3 = useRef(null);
  const progressRef = useRef(null);
  const progressTextRef = useRef(null);

  useEffect(() => {
    if (timeline) {
      timeline
        .add(counterAnimation(counterRef1, counterRef2, counterRef3))
        .add(progressTextAnimation(progressTextRef), "<")
        .add(progressAnimation(progressRef), "<")
        .add(
          preloaderExitAnimations(
            counterRef1,
            counterRef2,
            counterRef3,
            progressTextRef,
            progressRef,
            preloaderRef,
          ),
        );
    }
  }, [timeline]);

  // Helper function to render counter columns
  const renderCounterColumn = (colData) =>
    colData.map((c, i) => (
      <span key={i} className="text-9xl">
        {c + " "}
      </span>
    ));
  return (
    <div
      ref={preloaderRef}
      className="absolute z-10 flex h-screen w-full flex-col items-center justify-between gap-10 bg-beige font-KoHo tracking-tight text-brown"
    >
      <div className="flex flex-grow items-center justify-center">
        <div className="flex h-32 flex-row overflow-hidden">
          <div className="flex flex-col items-center" ref={counterRef1}>
            {renderCounterColumn(col1)}
          </div>
          <div className="flex flex-col items-center" ref={counterRef2}>
            {renderCounterColumn(col2)}
          </div>
          <div className="flex flex-col items-center" ref={counterRef3}>
            {renderCounterColumn(col3)}
          </div>
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
