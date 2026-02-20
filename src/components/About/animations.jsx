import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Scroll-triggered reveal animation for the projects section header
 * Cards no longer need per-card animation — the CSS mask-image handles edge fade
 *
 * Returns a cleanup function to kill the ScrollTriggers created
 */
export const projectAnimation = (sectionRef, headerRef) => {
  if (!sectionRef || !headerRef) return () => {};

  const createdTriggers = [];

  // Header fade-in
  gsap.set(headerRef, { opacity: 0, y: 30 });

  const headerState = { revealed: false };

  createdTriggers.push(ScrollTrigger.create({
    trigger: headerRef,
    start: "top 85%",
    end: "top 50%",
    scrub: 0.3,
    invalidateOnRefresh: true,
    onRefresh: (self) => {
      const rect = headerRef.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const topPercent = rect.top / viewportHeight;

      if (topPercent <= 0.50) {
        headerState.revealed = true;
        gsap.set(headerRef, { opacity: 1, y: 0 });
      } else if (topPercent >= 0.85) {
        headerState.revealed = false;
        gsap.set(headerRef, { opacity: 0, y: 30 });
      } else {
        const progress = (0.85 - topPercent) / (0.85 - 0.50);
        headerState.revealed = false;
        gsap.set(headerRef, { opacity: progress, y: 30 * (1 - progress) });
      }
    },
    onUpdate: (self) => {
      const progress = self.progress;
      const direction = self.direction;

      if (direction === 1) {
        if (progress >= 1) headerState.revealed = true;
        if (headerState.revealed) {
          gsap.set(headerRef, { opacity: 1, y: 0 });
        } else {
          gsap.set(headerRef, { opacity: progress, y: 30 * (1 - progress) });
        }
      } else {
        if (progress < 1) headerState.revealed = false;
        gsap.set(headerRef, { opacity: progress, y: 30 * (1 - progress) });
      }
    },
    onLeave: () => {
      headerState.revealed = true;
      gsap.set(headerRef, { opacity: 1, y: 0 });
    },
    onLeaveBack: () => {
      headerState.revealed = false;
      gsap.set(headerRef, { opacity: 0, y: 30 });
    },
  }));

  return () => {
    createdTriggers.forEach((trigger) => trigger.kill());
  };
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
        invalidateOnRefresh: true,
      },
    }
  );
};
