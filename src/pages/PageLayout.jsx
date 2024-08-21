import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Preloader from "../components/Preloader/Preloader";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="text-brown bg-beige ">
      {/* <Preloader /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default PageLayout;
