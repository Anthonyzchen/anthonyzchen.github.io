import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Helper to calculate element visibility state after refresh
 * Returns the appropriate opacity and y values based on scroll position
 */
const calculateVisibilityState = (trigger, progress) => {
  // progress >= 1 means element has scrolled past the trigger end point
  // progress <= 0 means element hasn't reached the trigger start point
  if (progress >= 1) {
    return { opacity: 1, y: 0, revealed: true };
  } else if (progress <= 0) {
    return { opacity: 0, y: 60, revealed: false };
  } else {
    return { opacity: progress, y: 60 * (1 - progress), revealed: false };
  }
};

/**
 * Apply scroll-scrubbed animations to project cards with section snapping
 * Each tile fades in as it approaches viewport center and fades out as it passes
 * Section snaps into place when user stops scrolling within the snap zone
 *
 * Returns a cleanup function to kill the ScrollTriggers created by this function
 */
export const projectAnimation = (projectsRef, sectionRef, headerRef) => {
  const projects = projectsRef.current.filter(Boolean);
  if (projects.length === 0) return () => {};

  // Track all ScrollTriggers created by this function for cleanup
  const createdTriggers = [];

  // Snapping behavior - snaps section into view when user stops scrolling
  let isSnapping = false;

  const checkSnap = () => {
    if (isSnapping) return;

    const rect = sectionRef.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Snap zone: section top is between -40% and 40% of viewport height
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

  // Debounced scroll-stop detection for snapping
  let scrollTimeout;
  createdTriggers.push(ScrollTrigger.create({
    trigger: sectionRef,
    start: "top 90%",
    end: "bottom 10%",
    invalidateOnRefresh: true,
    onUpdate: () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkSnap, 150);
    },
  }));

  // Header animation - fade in on scroll down, fade out on scroll up
  gsap.set(headerRef, { opacity: 0, y: 30 });

  // Use an object to store state so it can be modified in callbacks
  const headerState = { revealed: false };

  createdTriggers.push(ScrollTrigger.create({
    trigger: headerRef,
    start: "top 85%",
    end: "top 50%",
    scrub: 0.3,
    invalidateOnRefresh: true,
    onRefresh: (self) => {
      // After resize, recalculate visibility based on element's actual viewport position
      const rect = headerRef.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const topPercent = rect.top / viewportHeight;

      // Header trigger: start at 85%, end at 50%
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
        // Scrolling down
        if (progress >= 1) {
          headerState.revealed = true;
        }
        if (headerState.revealed) {
          gsap.set(headerRef, { opacity: 1, y: 0 });
        } else {
          gsap.set(headerRef, { opacity: progress, y: 30 * (1 - progress) });
        }
      } else {
        // Scrolling up - fade out
        if (progress < 1) {
          headerState.revealed = false;
        }
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

  // Each project tile gets its own scroll-scrubbed animation
  // Fade in on scroll down, stay visible, fade out only when scrolling back up
  projects.forEach((project) => {
    // Set initial state
    gsap.set(project, { opacity: 0, y: 60 });

    // Use an object to store state so it can be modified in callbacks
    const state = { revealed: false };

    createdTriggers.push(ScrollTrigger.create({
      trigger: project,
      start: "top 85%", // Start when tile top enters at 85% of viewport
      end: "top 40%", // End when tile top reaches 40% of viewport (centered)
      scrub: 0.3,
      invalidateOnRefresh: true,
      onRefresh: (self) => {
        // After resize, recalculate visibility based on ScrollTrigger's progress
        // Use self.progress which is recalculated during refresh
        const progress = self.progress;

        if (progress >= 1) {
          state.revealed = true;
          gsap.set(project, { opacity: 1, y: 0 });
        } else if (progress <= 0) {
          state.revealed = false;
          gsap.set(project, { opacity: 0, y: 60 });
        } else {
          // In the animation range - set intermediate state
          state.revealed = false;
          gsap.set(project, { opacity: progress, y: 60 * (1 - progress) });
        }
      },
      onUpdate: (self) => {
        const progress = self.progress;
        const direction = self.direction;

        // Handle edge cases: fully visible or fully hidden
        if (progress >= 1) {
          state.revealed = true;
          gsap.set(project, { opacity: 1, y: 0 });
          return;
        }

        if (progress <= 0) {
          state.revealed = false;
          gsap.set(project, { opacity: 0, y: 60 });
          return;
        }

        // In animation range (0 < progress < 1)
        if (direction === 1) {
          // Scrolling down: fade in based on progress, stay at full opacity once revealed
          if (state.revealed) {
            gsap.set(project, { opacity: 1, y: 0 });
          } else {
            gsap.set(project, {
              opacity: progress,
              y: 60 * (1 - progress),
            });
          }
        } else {
          // Scrolling up: fade out based on progress
          state.revealed = false;
          gsap.set(project, {
            opacity: progress,
            y: 60 * (1 - progress),
          });
        }
      },
      onLeave: () => {
        state.revealed = true;
        gsap.set(project, { opacity: 1, y: 0 });
      },
      onEnterBack: () => {
        state.revealed = true;
      },
      onLeaveBack: () => {
        state.revealed = false;
        gsap.set(project, { opacity: 0, y: 60 });
      },
    }));
  });

  // Return cleanup function
  return () => {
    clearTimeout(scrollTimeout);
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
