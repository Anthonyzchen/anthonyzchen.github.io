import { useLayoutEffect, useState, useRef } from "react";
import {
  createMenuAnimation,
  createMenuBackgroundAnimation,
  createEnterNavbarAnimation,
} from "./animations";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import logoUrl from "../../assets/images/logo.png";

const Navbar = () => {
  // Create a ref to scope the GSAP animations within this component
  const navbarRef = useRef();

  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs to store GSAP timelines
  const menuIconTL = useRef();
  const menuBackgroundTL = useRef();

  const linkData = ["Home", "About", "Projects", "Blog", "Contact"];

  useGSAP(
    () => {
      menuIconTL.current = createMenuAnimation();
      menuBackgroundTL.current = createMenuBackgroundAnimation();
      // The animation is delayed by 11.5 seconds to play after the Preloader has finished
      createEnterNavbarAnimation().delay(11.5);
    },
    { scope: navbarRef },
  );

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle link clicks, scrolls to the top, and closes the menu
  const handleLinkClick = () => {
    window.scroll(0, 0);
    toggleMenu();
  };

  // useLayoutEffect hook to control animations based on the menu state
  useLayoutEffect(() => {
    if (isMenuOpen) {
      // Play the menu icon and background animations when the menu is open
      menuIconTL.current.play();
      menuBackgroundTL.current.play();
    } else {
      // Reverse the animations when the menu is closed
      menuIconTL.current.reverse();
      menuBackgroundTL.current.reverse();
    }
  }, [isMenuOpen]); // Dependency array ensures this effect runs when isMenuOpen changes

  return (
    <div ref={navbarRef}>
      <header className="fixed z-30 flex w-full items-center justify-between bg-beige px-8 py-4">
        <button className="logo cursor-pointer">
          <img
            className="h-16"
            src={logoUrl}
            onClick={() => {
              window.scroll(0, 0);
            }}
            alt="logo"
          />
        </button>

        <button className="menu cursor-pointer" onClick={toggleMenu}>
          <svg
            viewBox="0 0 12 10"
            className="h-12 fill-none stroke-brown stroke-[.8px]"
          >
            <path strokeLinecap="round" d="M10,2 L2,2" className="menuLine1" />
            <path strokeLinecap="round" d="M2,5 L10,5" className="menuLine2" />
            <path strokeLinecap="round" d="M10,8 L2,8" className="menuLine3" />
          </svg>
        </button>
      </header>

      <section className="openedMenu fixed z-20 hidden h-screen w-full">
        <div className="flex h-screen items-center justify-center">
          <div className="openedMenuBackground absolute h-screen w-full bg-transparent-beige backdrop-blur-lg" />
          <nav className="relative text-center">
            <ul>
              {linkData.map((text, index) => (
                <li key={index} className="mt-7 overflow-hidden">
                  <Link
                    className={`openedMenuLink inline-block text-6xl uppercase tracking-tight sm:text-8xl sm:tracking-wider`}
                    to={`/${text.toLowerCase()}`}
                    onClick={handleLinkClick}
                  >
                    <span>{text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
