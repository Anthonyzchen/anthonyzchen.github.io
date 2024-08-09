import React from "react";
import Preloader from "../organisms/Preloader";
import Footer from "../organisms/Footer";

const Home = () => {
  return (
    <>
      <Preloader />
      <div className="bg-painting flex h-screen w-full flex-col items-center justify-center bg-cover">
        <div
          id="welcome"
          className="flex flex-grow items-center font-KoHo text-9xl font-bold text-gray-100"
        >
          Welcome.
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
