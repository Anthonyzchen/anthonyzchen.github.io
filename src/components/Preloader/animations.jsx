import { gsap } from "gsap";
// Creates the counter animation timeline
export const createCounterAnimation = () => {
    return gsap
      .timeline()
      .fromTo(
        ".counter",
        {
          opacity: 0,
          y: "+=30",
        },
        {
          opacity: 1,
          y: "0",
          duration: 0.5,
          ease: "power1.out",
        },
      )
      .to(".counter", {
        yPercent: -10000,
        duration: 3.5,
        ease: "power3.inOut",
      })
      .to(".counter", {
        yPercent: -10100,
        duration: 1,
        ease: "power1.out",
      });
  };
  
  // Creates the text above the progress bar animation timeline
  export const createProgressTextAnimation = () => {
    return gsap.timeline().fromTo(
      ".progressText",
      {
        opacity: 0,
        y: "+=30",
      },
      {
        opacity: 1,
        y: "0",
        duration: 1,
        ease: "power1.out",
      },
    );
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
  export const createPreloaderExitAnimations = () => {
    const fadeOut = (y) => ({
      opacity: 0,
      y: y,
      delay: 0.3,
      ease: "power1.out",
    });
  
    return gsap
      .timeline()
      .to(".counter", fadeOut("-=30"))
      .to(".progressText", fadeOut("-=30"))
      .to(".progressBar", fadeOut("0"))
      .to(".preloader", {
        yPercent: "-100",
        duration: 1.3,
        delay: 0.3,
        ease: "power1.out",
      });
  };