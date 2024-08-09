import React from "react";

const Preloader = () => {
  return (
    <div
      id="preloader"
      className="bg-beige text-brown absolute z-10 flex h-screen w-full flex-col items-center justify-between gap-10 font-KoHo tracking-tight"
    >
      <div className="flex flex-grow items-center justify-center">
        <h1 className="text-9xl" id="counter">
          0 0 0
        </h1>
        {/* <h1 className="text-9xl" id="title-1">
          陳兆偉
        </h1> */}
      </div>
      <div className="w-full">
        <h1 className="mb-4 flex justify-center text-base" id="title-2">
          Welcome to my page
        </h1>
        <div
          className="bg-brown h-1 w-full origin-left scale-x-0"
          id="progress"
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
