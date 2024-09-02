import gsap from "gsap";

// Navbar Animations
export const createEnterNavbarAnimation = () => {
  return gsap
    .timeline()
    .from(
      ".logo",
      {
        opacity: 0,
        y: "-100",
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
          amount: .4
        },
        ease: "power4.out"
      },
      "start",
    );
};

// Create menu icon animation timeline
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
      .from(".openedMenuBackground", {
        duration: 0.5,
        autoAlpha: 0,
        ease: "expo.inOut",
      })
      .from(
        ".openedMenuLink",
        {
          duration: 0.5,
          yPercent: 100,
          rotateY: 30,
          stagger: 0.125,
          ease: "expo.inOut",
        },
        "-=0.5",
      )
  );
};
