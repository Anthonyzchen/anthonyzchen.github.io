import gsap from "gsap";

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
