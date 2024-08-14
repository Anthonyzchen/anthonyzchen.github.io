import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Preloader from "../components/Preloader/Preloader";

const Home = () => {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};
export default Home;
