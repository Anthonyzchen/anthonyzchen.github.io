import { gsap } from "gsap";

// Preloader Animations
export const counterAnimation = (counterRefs) => {
  const counters = counterRefs.map((ref) => ref.current);

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
  counterRefs,
  progressTextRef,
  progressRef,
  preloaderRef,
) => {
  const counters = counterRefs.map((ref) => ref.current);

  const fadeOut = (target, delay = 0.3) => ({
    opacity: 0,
    y: "-=30",
    delay,
    ease: "power1.out",
  });

  return gsap
    .timeline()
    .to(counters, fadeOut(counters))
    .to(progressTextRef.current, fadeOut(progressTextRef.current))
    .to(progressRef.current, fadeOut(progressRef.current))
    .to(preloaderRef.current, {
      yPercent: "-100",
      duration: 1.3,
      delay: 0.3,
      ease: "power1.out",
    });
};

// Navbar Animations
export const createMenuAnimation = () => {
  return gsap
    .timeline({ paused: true })
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
    .to(
      ".menuLine2",
      {
        autoAlpha: 0,
        duration: 0.5,
      },
      "start",
    )
    .to(
      ".menuLine3",
      {
        attr: { d: "M8,8 L2,2" },
        x: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      "start",
    );
};

export const createMenuBackgroundAnimation = (
  openedMenuRef,
  openedMenuBGRef,
  menuLinkRefs,
) => {
  const links = menuLinkRefs.map((ref) => ref.current);

  return gsap
    .timeline({ paused: true })
    .to(openedMenuRef.current, {
      display: "block",
      duration: 0,
      ease: "expo.inOut",
    })
    .from(openedMenuBGRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: "expo.inOut",
    })
    .from(
      links,
      {
        duration: 0.5,
        yPercent: 100,
        rotateY: 30,
        stagger: 0.2,
        ease: "expo.inOut",
      },
      "-=0.5"
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
