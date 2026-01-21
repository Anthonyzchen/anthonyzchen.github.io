import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import WaterReveal from "./WaterReveal";

const Preloader = () => {
  const preloaderRef = useRef(null);
  const [isRevealing, setIsRevealing] = useState(true);
  const lenisRef = useRef(null);

  useLayoutEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis();

    // Stop scrolling during preloader
    lenisRef.current.stop();

    // Prevent scrolling during preloader
    document.body.style.overflow = "hidden";

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  const handleRevealComplete = () => {
    setIsRevealing(false);

    // Hide preloader
    if (preloaderRef.current) {
      preloaderRef.current.style.display = "none";
    }

    // Re-enable scrolling
    document.body.style.overflow = "";

    // Start Lenis smooth scrolling
    if (lenisRef.current) {
      lenisRef.current.start();
      lenisRef.current.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenisRef.current.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }
  };

  return (
    <div ref={preloaderRef}>
      {isRevealing && (
        <WaterReveal onComplete={handleRevealComplete} duration={5000} />
      )}
    </div>
  );
};

export default Preloader;
