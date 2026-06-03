import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { EASE, DURATION } from "../../lib/motion";
import logoUrl from "../../assets/images/logo.png";

const Logo = () => {
  const logoRef = useRef();

  // GSAP work runs inside useGSAP for proper context cleanup on unmount.
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.set(".logo", { opacity: 0, y: -20 });
    },
    { scope: logoRef }
  );

  // Window event listener lives in a real useEffect — useGSAP discards
  // its callback's return value, so a listener registered there leaks.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const playEntrance = () => {
      gsap.to(".logo", {
        opacity: 1,
        y: 0,
        duration: DURATION.base,
        ease: EASE,
        delay: 0.3,
      });
    };

    if (window.__preloaderDone) {
      playEntrance();
      return;
    }
    window.addEventListener("preloader:complete", playEntrance, { once: true });
    return () => window.removeEventListener("preloader:complete", playEntrance);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={logoRef} className="fixed left-4 top-3 z-30 sm:left-6 sm:top-4 md:left-8">
      <button className="logo cursor-pointer" onClick={scrollToTop}>
        <img className="h-10 sm:h-12 md:h-14 lg:h-16" src={logoUrl} alt="logo - click to scroll to top" />
      </button>
    </div>
  );
};

export default Logo;
