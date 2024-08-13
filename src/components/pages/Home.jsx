import React from "react";
import Navbar from "../organisms/Navbar";
import Hero from "../organisms/Hero";
import Footer from "../organisms/Footer";
import PreLoader from "../organisms/Preloader";

const Home = () => {
  return (
    <>
      <PreLoader />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};
export default Home;
