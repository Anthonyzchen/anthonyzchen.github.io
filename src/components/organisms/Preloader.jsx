import React, { useEffect } from "react";
import {
  counterAnimation,
  progressAnimation,
  progressTextAnimation
} from "../animations/animations";
import { col1, col2, col3 } from "../../assets/counterData";

const Preloader = ({ timeline }) => {
  useEffect(() => {
    timeline && timeline.add(counterAnimation()).add(progressTextAnimation(), 0).add(progressAnimation(), 0);
  }, [timeline]);
  return (
    <div
      id="preloader"
      className="absolute z-10 flex h-screen w-full flex-col items-center justify-between gap-10 bg-beige font-KoHo tracking-tight text-brown"
    >
      <div className="flex flex-grow items-center justify-center">
        <div className="flex flex-row h-32 overflow-hidden">
          <div className="flex flex-col items-center" id="counter">
            {col1.map((n, i) => {
              return (
                <span key={i} className="text-9xl">
                  {n + " "}
                </span>
              );
            })}
          </div>
          <div className="flex flex-col items-center" id="counter">
            {col2.map((n, i) => {
              return (
                <span key={i} className="text-9xl">
                  {n + " "}
                </span>
              );
            })}
          </div>
          <div className="flex flex-col items-center" id="counter">
            {col3.map((n, i) => {
              return (
                <span key={i} className="text-9xl">
                  {n + " "}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="relative mb-4 flex justify-center text-base" id="progress-text">
          Welcome to my page
        </h1>
        <div
          className="h-1 w-full origin-left scale-x-0 bg-brown"
          id="progress"
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
