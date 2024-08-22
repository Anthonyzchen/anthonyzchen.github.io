import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Preloader from "../components/Preloader/Preloader";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="text-brown bg-beige bg-painting bg-contain">
      {/* <div className="flex h-screen w-full flex-col items-center justify-center bg-painting bg-cover px-8"> */}
      <Preloader />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default PageLayout;
