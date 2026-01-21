import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Apply scroll-triggered entrance animations to project cards
 * Cards animate in as they enter the viewport
 */
export const projectAnimation = (projectsRef) => {
  projectsRef.current.forEach((project, index) => {
    if (!project) return;

    // Stagger delay based on index for grid layout
    const delay = index * 0.1;

    // Card container entrance animation
    gsap.fromTo(
      project,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: project,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};

/**
 * Staggered animation for tech badges
 * Call this with a container element reference
 */
export const techBadgeAnimation = (containerRef) => {
  const badges = containerRef.querySelectorAll("li");

  gsap.fromTo(
    badges,
    {
      opacity: 0,
      y: 10,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
};
