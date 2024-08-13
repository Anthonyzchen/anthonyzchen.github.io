import React, { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";
import { createMenuAnimation, createMenuBackgroundAnimation } from "../animations/animations";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  // Create refs for the menu elements and opened menu elements
  const menu = useRef();
  const openedMenuRef = useRef(null);
  const openedMenuBGRef = useRef(null);
  const menuLinkRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  //   // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuTL = useRef();
  const backgroundTL = useRef();

  useGSAP(
    () => {
      menuTL.current = createMenuAnimation();
      backgroundTL.current = createMenuBackgroundAnimation(
        openedMenuRef,
        openedMenuBGRef,
        menuLinkRefs,
      );
    },
    { scope: menu },
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Play both animations
      menuTL.current.play();
      backgroundTL.current.play();
    } else {
      // Reverse both animations
      menuTL.current.reverse();
      backgroundTL.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed z-10 flex w-full items-center justify-between bg-beige px-8 py-4">
        <button className="cursor-pointer">
          <img className="h-16" src="src/assets/images/logo.png" alt="logo" />
        </button>

        <button className="cursor-pointer" onClick={toggleMenu} ref={menu}>
          <svg
            viewBox="0 0 12 10"
            className="stroke h-12 fill-none stroke-brown"
          >
            <path strokeLinecap="round" d="M10,2 L2,2" className="menuLine1" />
            <path strokeLinecap="round" d="M2,5 L10,5" className="menuLine2" />
            <path strokeLinecap="round" d="M10,8 L2,8" className="menuLine3" />
          </svg>
        </button>
      </header>

      <section
        className="fixed h-screen w-full font-KoHo text-brown"
        ref={openedMenuRef}
      >
        <div className="flex h-screen items-center justify-center">
          <div
            className="bg-transparent-beige absolute h-screen w-full backdrop-blur-sm"
            ref={openedMenuBGRef}
          />
          <nav className="relative text-center">
            <ul>
              {["Home", "About", "Projects", "Blog", "Contact"].map(
                (text, index) => (
                  <li key={index} className="mt-7 overflow-hidden">
                    <a
                      className="inline-block text-8xl font-bold uppercase tracking-wider"
                      href=""
                      ref={menuLinkRefs[index]}
                    >
                      <span>{text}</span>
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      </section>

      <div className="flex h-screen w-full flex-col items-center justify-center bg-painting bg-cover" />
    </>
  );
};

export default Navbar;
