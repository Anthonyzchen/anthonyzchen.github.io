import gsap from "gsap";

// Animation for the Navbar elements when it enters view
export const createEnterNavbarAnimation = () => {
  return gsap
    .timeline()
    .from(
      ".logo",
      {
        opacity: 0,
        y: "-100",
        duration: 1.5,
      },
      "start",
    )
    .from(
      [".menuLine3", ".menuLine2", ".menuLine1"],
      {
        opacity: 0,
        y: "-200",
        duration: 1.5,
        stagger: {
          amount: 0.4,
        },
        ease: "power4.out",
      },
      "start",
    );
};

// Create a GSAP timeline for the menu icon animation (playable in both directions)
export const createMenuAnimation = () => {
  return gsap
    .timeline({ paused: true })
    .to(
      ".menuLine1",
      {
        attr: { d: "M8,2 L2,8" },
        x: 1,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "start",
    )
    .to(
      ".menuLine2",
      {
        autoAlpha: 0,
        duration: 0.25,
      },
      "start",
    )
    .to(
      ".menuLine3",
      {
        attr: { d: "M8,8 L2,2" },
        x: 1,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "start",
    );
};

// Animation for the background and menu links when the menu is opened
export const createMenuBackgroundAnimation = () => {
  return (
    gsap
      .timeline({ paused: true }) // Create a paused timeline, activated when needed
      // Show the full-screen menu by setting its display to "block"
      .to(".openedMenu", {
        display: "block",
        duration: 0,
        ease: "expo.inOut",
      })
      // Animate the menu background fading in
      .from(".openedMenuBackground", {
        duration: 0.5,
        autoAlpha: 0,
        ease: "expo.inOut",
      })
      // Animate the menu links sliding in with a slight rotation
      .from(
        ".openedMenuLink",
        {
          duration: 0.75,
          yPercent: 100,
          rotateY: 30,
          stagger: 0.125,
          ease: "expo.inOut",
        },
        "-=0.25",
      )
  );
};
