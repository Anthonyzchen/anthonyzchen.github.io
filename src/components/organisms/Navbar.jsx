import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="fixed z-10 flex w-full items-center justify-between bg-beige px-8 py-4 font-KoHo">
        <button className="cursor-pointer">
          <img
            className="h-16"
            src="src/assets/images/logo.png"
            alt="logo"
          ></img>
        </button>

        <button className="cursor-pointer">
          <svg
            viewBox="0 0 12 10"
            className="stroke h-12 fill-none stroke-brown"
          >
            <path strokeLinecap="round" d="M10,2 L2,2"></path>
            <path strokeLinecap="round" d="M2,5 L10,5"></path>
            <path strokeLinecap="round" d="M10,8 L2,8"></path>
          </svg>
        </button>
      </header>
      <section className="fixed h-screen w-full">
        <div className="flex h-screen items-center justify-center">
          <div className="bg-transparent-beige absolute h-screen w-full backdrop-blur-sm"></div>
          <nav className="relative text-center">
            <ul>
              <li className="overflow-hidden">
                <a href="">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-painting bg-cover"></div>
    </>
  );
};
export default Navbar;
