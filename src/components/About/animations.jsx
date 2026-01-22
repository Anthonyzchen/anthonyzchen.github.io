import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Apply scroll-triggered entrance animations to project cards
 * Section snaps into place when user stops scrolling, animations play automatically
 */
export const projectAnimation = (projectsRef, sectionRef, headerRef) => {
  const projects = projectsRef.current.filter(Boolean);
  if (projects.length === 0) return;

  // Set initial state for all elements
  gsap.set(headerRef, { opacity: 0, y: 40 });
  gsap.set(projects, { opacity: 0, y: 60 });

  let hasAnimated = false;
  let isSnapping = false;

  // Detect when user stops scrolling and snap if within range
  const checkSnap = () => {
    if (isSnapping) return;

    const rect = sectionRef.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Snap zone: section top is between -40% (scrolled past) and 40% of viewport
    // This creates a centered snap zone without being too aggressive
    if (rect.top > viewportHeight * -0.4 && rect.top < viewportHeight * 0.4) {
      isSnapping = true;
      gsap.to(window, {
        scrollTo: { y: sectionRef, offsetY: 0 },
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          isSnapping = false;
        },
      });
    }
  };

  // Use ScrollTrigger's onUpdate with a debounce for scroll-stop detection
  let scrollTimeout;
  ScrollTrigger.create({
    trigger: sectionRef,
    start: "top 90%",
    end: "bottom 10%",
    onUpdate: () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkSnap, 150); // Check 150ms after scroll stops
    },
  });

  // Separate trigger for animations - starts when section enters viewport
  // With snapping, users land precisely on sections, so trigger earlier
  ScrollTrigger.create({
    trigger: sectionRef,
    start: "top 60%",
    onEnter: () => {
      if (hasAnimated) return;
      hasAnimated = true;

      // Play animations when section enters
      gsap.to(headerRef, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(projects, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });
    },
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
