import React from "react";

const Preloader = () => {
  return (
    <div
      id="preloader"
      className="bg-beige text-brown absolute z-10 flex h-screen w-full flex-col items-center justify-between gap-10 p-10 font-KoHo tracking-tight"
    >
      <div className="flex flex-grow items-center">
        <h1 className="align-middle text-9xl" id="title-1">
          陳兆偉
        </h1>
      </div>
      <h1 className="text-xs" id="title-2">
        Welcome to my page
      </h1>
    </div>
  );
};

export default Preloader;
