import { gsap } from "gsap";

// Preloader Animations
export const counterAnimation = (counterRef1, counterRef2, counterRef3) => {
  // Collect all counter references into an array
  const counters = [
    counterRef1.current,
    counterRef2.current,
    counterRef3.current,
  ];

  return gsap
    .timeline()
    .fromTo(
      counters,
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
    .to(counters, {
      yPercent: -10000,
      duration: 3.5,
      ease: "power3.inOut",
    })
    .to(counters, {
      yPercent: -10100,
      duration: 1,
      ease: "power1.out",
    });
};

export const progressTextAnimation = (progressTextRef) => {
  return gsap.timeline().fromTo(
    progressTextRef.current,
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

export const progressAnimation = (progressRef) => {
  return gsap.timeline().to(progressRef.current, {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  });
};

export const preloaderExitAnimations = (
  counterRef1,
  counterRef2,
  counterRef3,
  progressTextRef,
  progressRef,
  preloaderRef,
) => {
  // Collect all counter references into an array
  const counters = [
    counterRef1.current,
    counterRef2.current,
    counterRef3.current,
  ];

  return gsap
    .timeline()
    .to(counters, {
      opacity: "0",
      y: "-=30",
      delay: 0.3,
      ease: "power1.out",
    })
    .to(progressTextRef.current, {
      opacity: "0",
      y: "-=30",
      delay: 0.3,
      ease: "power1.out",
    })
    .to(progressRef.current, {
      opacity: "0",
      delay: 0.3,
      ease: "power1.out",
    })
    .to(preloaderRef.current, {
      yPercent: "-100",
      duration: 1.3,
      delay: 0.3,
      ease: "power1.out",
    });
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
