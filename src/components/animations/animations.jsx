import { gsap } from "gsap";

// Preloader Animations
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
  const fadeOut = (target, delay = 0.3) => ({
    opacity: 0,
    y: "-=30",
    delay,
    ease: "power1.out",
  });

  return gsap
    .timeline()
    .to(".counter", fadeOut(".counters"))
    .to(".progressText", fadeOut(".progressText"))
    .to(".progressBar", fadeOut(".progressBar"))
    .to(".preloader", {
      yPercent: "-100",
      duration: 1.3,
      delay: 0.3,
      ease: "power1.out",
    });
};

// Navbar Animations
// Create menu icon animation timeline
export const createMenuAnimation = () => {
  return (
    gsap
      .timeline({ paused: true })
      // Animate the first line to form an 'X'
      .to(
        ".menuLine1",
        {
          attr: { d: "M8,2 L2,8" },
          x: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "start",
      )
      // Fade out the middle line
      .to(
        ".menuLine2",
        {
          autoAlpha: 0,
          duration: 0.5,
        },
        "start",
      )
      // Animate the third line to form an 'X'
      .to(
        ".menuLine3",
        {
          attr: { d: "M8,8 L2,2" },
          x: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "start",
      )
  );
};

// Create background and links animation timeline
export const createMenuBackgroundAnimation = () => {
  return (
    gsap
      .timeline({ paused: true })
      // Ensure the menu is visible
      .to(".openedMenu", {
        display: "block",
        duration: 0,
        ease: "expo.inOut",
      })
      // Fade in the background
      .from(".openedMenuBackground", {
        duration: 1,
        autoAlpha: 0,
        ease: "expo.inOut",
      })
      // Animate the links with staggered effect
      .from(
        ".openedMenuLink",
        {
          duration: 0.5,
          yPercent: 100,
          rotateY: 30,
          stagger: 0.2,
          ease: "expo.inOut",
        },
        "-=0.5",
      )
  );
};

// Hero Animations
export const heroAnimation = () => {
  const tl = gsap.timeline();

  tl.from("#welcome", {
    opacity: "0",
    duration: 0.5,
  });

  return tl;
};
