import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Creates the counter timeline
export const createCounterAnimation = () => {
  const counterSelector = ".counter";
  return (
    gsap
      .timeline()
      // Repeat of enterStaggerTextAnimation from "../utils" but doesn't use SplitTextJS
      .from(counterSelector, {
        opacity: 0,
        y: 80,
        stagger: 0.03,
      })
      .fromTo(
        counterSelector,
        {
          duration: 3.5,
          ease: "power3.inOut",
        },
        {
          yPercent: -8010,
          duration: 3.5,
          ease: "power3.inOut",
        },
      )
      .to(counterSelector, {
        yPercent: -8163,
        duration: 1,
        ease: "power1.out",
      })
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
export const createPreloaderExitAnimations = (preloaderRef, bodyRef, lenis) => {
  const fadeOut = (selector, y = "-=30", delay = 0.15) => ({
    opacity: 0,
    y,
    delay,
    ease: "power1.out",
  });

  return gsap
    .timeline()
    .to(".counter", fadeOut(".counter"))
    .to(".progressText", fadeOut(".progressText",))
    .to(".progressBar", fadeOut(".progressBar", "0"))
    .to(
      ".preloader",
      {
        yPercent: -88,
        duration: 1,
        delay: 0.3,
        ease: "power1.inOut",
        onComplete: () => {
          preloaderRef.current.style.display = "none";
          bodyRef.current.style.overflowY = "scroll";
          // Basic Lenis setup: https://github.com/darkroomengineering/lenis?tab=readme-ov-file#basic
          lenis.start();
          lenis.on("scroll", ScrollTrigger.update);

          gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
          });

          gsap.ticker.lagSmoothing(0);
        },
      }, "-=.5"
    );
};
