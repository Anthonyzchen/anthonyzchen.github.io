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
    // This preloader instance has not completed yet — reset the handoff flag
    // so section entrances (Hero) wait for THIS reveal, not a prior one.
    // Matters on back-navigation, when Preloader remounts and replays.
    window.__preloaderDone = false;

    // Disable browser's automatic scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Force scroll to top on page load/refresh
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Belt-and-suspenders: catch any browser scroll restoration after layout
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    // On beforeunload, set scroll to 0 so the browser saves position as 0
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Initialize Lenis for smooth scrolling
    lenisRef.current = new Lenis({
      lerp: 0.1, // Default smooth scrolling
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Expose Lenis instance globally for other components to access
    window.lenis = lenisRef.current;

    // Stop scrolling during preloader
    lenisRef.current.stop();

    // Prevent scrolling during preloader
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
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

    // Hand off to section entrance animations (e.g. Hero) — a real signal
    // instead of a blind timer, so they stay correct if this duration changes.
    window.__preloaderDone = true;
    window.dispatchEvent(new Event("preloader:complete"));
  };

  return (
    <div ref={preloaderRef}>
      {isRevealing && (
        <WaterReveal onComplete={handleRevealComplete} duration={2500} />
      )}
    </div>
  );
};

export default Preloader;
