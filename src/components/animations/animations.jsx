import { gsap } from "gsap";

export const preloaderAnimation = () => {
  const tl = gsap.timeline();

  tl.from("#counter", {
    opacity: "0",
    y: "+=30",
  });

  return tl;
};
// tl.from("#counter", {
//   opacity: "0",
//   y: "+=30",
// })
//   .from("#title-1", {
//     opacity: "0",
//     y: "+=30",
//   })
//   .from("#title-2", {
//     opacity: "0",
//     y: "+=30",
//   })

export const progressAnimation = () => {
  const tl = gsap.timeline();

  tl.to("#progress", {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  });

  return tl;
};

export const exitAnimation = () => {
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

export const heroAnimation = () => {
    const tl = gsap.timeline();
  
    tl.from("#welcome", {
        opacity: "0",
        duration: 0.5,
      });
  
    return tl;
  };
