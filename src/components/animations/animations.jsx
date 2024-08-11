import { gsap } from "gsap";

// Preloader Animations
export const counterAnimation = () => {
  const tl = gsap.timeline();

  tl.to("#counter", {
    yPercent: -10000,
    duration: 5,
    ease: "expo.inOut",
  }).to("#counter", {
    yPercent: -10100,
    duration: 1,
  });

  return tl;
};

export const progressTextAnimation = () => {
  const tl = gsap.timeline();

  tl.to("#progress-text", {
    opacity: 1,
    y: "-=30",
    duration: 1,
    ease: "power1.out",
  });

  return tl;
};

export const progressAnimation = () => {
  const tl = gsap.timeline();

  tl.to("#progress", {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  });

  return tl;
};

export const preloaderExitAnimations = () => {
  const tl = gsap.timeline();

  tl.to("#title-1", {
    opacity: "0",
    y: "-=30",
    delay: 0.3,
  })
    .to("#title-2", {
      opacity: "0",
      y: "-=30",
      delay: 0.3,
    })
    .to("#preloader", {
      yPercent: "-100",
      duration: 1.3,
      delay: 0.3,
    });

  return tl;
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
