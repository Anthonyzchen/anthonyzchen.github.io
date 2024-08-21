import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Helper function to create fade animations
const fadeIn = (selector, duration = 1, y = 30) => {
  return gsap
    .timeline()
    .fromTo(
      selector,
      { opacity: 0, y: `+=${y}` },
      { opacity: 1, y: 0, duration, ease: "power1.out" },
    );
};

// Creates the counter & other text animation timeline
export const createTextAnimation = () => {
  const counterSelector = ".counter";
  return gsap
    .timeline()
    .add(fadeIn(counterSelector, 0.5))
    .to(counterSelector, {
      yPercent: -10000,
      duration: 3.5,
      ease: "power3.inOut",
    })
    .to(counterSelector, {
      yPercent: -10100,
      duration: 1,
      ease: "power1.out",
    })
    .add(fadeIn(".progressText", 1), "<");
};

// Creates the progress bar animation timeline
export const createProgressBarAnimation = () => {
  return gsap.timeline().to(".progressBar", {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  });
};

// Creates the preloader exit animation timeline
export const createPreloaderExitAnimations = (preloaderRef, bodyRef, lenis) => {
  const fadeOut = (selector, y = "-=30", delay = 0.3) => ({
    opacity: 0,
    y,
    delay,
    ease: "power1.out",
  });

  return gsap
    .timeline()
    .to(".counter", fadeOut(".counter"))
    .to(".progressText", fadeOut(".progressText"))
    .to(".progressBar", fadeOut(".progressBar", "0"))
    .to(".preloader", {
      yPercent: "-100",
      duration: 1.3,
      delay: 0.3,
      ease: "power1.out",
      onComplete: () => {
        preloaderRef.current.style.display = "none";
        bodyRef.current.style.overflowY = "scroll";
        lenis.start();
        lenis.on("scroll", ScrollTrigger.update);
  
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
      },
    });
};
