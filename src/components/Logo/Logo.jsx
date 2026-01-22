import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logoUrl from "../../assets/images/logo.png";

const Logo = () => {
  const logoRef = useRef();

  useGSAP(
    () => {
      // Fade in the logo after preloader finishes
      gsap.from(".logo", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.out",
        delay: 5.5, // After preloader (5s) + fade (0.8s)
      });
    },
    { scope: logoRef }
  );

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
