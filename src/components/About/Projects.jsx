import { useRef, useEffect, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectAnimation } from "./animations";
import { ProjectCard } from "../ui";
import projectsData from "../../data/projects.json";

// Import project images
import project1Url from "../../assets/images/Project1_Cover1280.png";
import project2Url from "../../assets/images/Project2_Cover1280.png";

// Import poster images
import poster1Url from "../../assets/images/p1.png";
import poster2Url from "../../assets/images/p2_pic1.png";

// Map project IDs to their imported image URLs
const projectImages = {
  project1: project1Url,
  project2: project2Url,
};

// Map project IDs to their poster URLs
const projectPosters = {
  project1: poster1Url,
  project2: poster2Url,
};

/**
 * Projects - Displays portfolio projects in a grid layout
 * Integrated section for SPA with scroll-triggered animations
 * Features traditional Chinese painting aesthetic elements
 */
const Projects = () => {
  const projectsRef = useRef([]);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cleanupRef = useRef(null);

  // Function to create animations
  const createAnimations = useCallback(() => {
    // Clean up existing animations first
    if (cleanupRef.current) {
      console.log("[DEBUG] Cleaning up existing project animations...");
      cleanupRef.current();
    }

    console.log("[DEBUG] Creating project animations...");
    cleanupRef.current = projectAnimation(projectsRef, sectionRef.current, headerRef.current);
    console.log("[DEBUG] Project ScrollTriggers created:", ScrollTrigger.getAll().length);
  }, []);

  // Initial animation setup
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      createAnimations();
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, [createAnimations]);

  // Handle resize events - kill and recreate animations
  useEffect(() => {
    let resizeTimeout;
    let lastWidth = window.innerWidth;

    const handleResize = () => {
      const currentWidth = window.innerWidth;

      // Only recreate if width changed (not just height from mobile address bar)
      if (currentWidth !== lastWidth) {
        lastWidth = currentWidth;
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          console.log("[DEBUG] Width changed, recreating project animations...");

          // Kill old animations and create new ones
          createAnimations();

          // Refresh all ScrollTriggers to recalculate positions
          ScrollTrigger.refresh();
        }, 250);
      }
    };

    console.log("[DEBUG] Projects resize listener attached");
    window.addEventListener("resize", handleResize);
    return () => {
      console.log("[DEBUG] Projects resize listener removed");
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [createAnimations]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-beige"
    >
      {/* Faded painting background overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-painting bg-cover bg-center opacity-[0.03]"
        style={{ backgroundPosition: "center 70%" }}
      />

      <div className="relative w-full px-4 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          {/* Section Header with ink brush styling */}
          <div ref={headerRef} className="mb-8 text-center md:mb-10">
            <h2 className="mb-4 text-3xl font-light uppercase tracking-wider text-ink sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>

            {/* Decorative brush stroke accent */}
            <div className="mb-6 flex justify-center">
              <svg
                width="60"
                height="8"
                viewBox="0 0 60 8"
                className="text-vermillion/40"
              >
                <path
                  d="M0 4 Q10 0 20 4 Q30 8 40 4 Q50 0 60 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="mx-auto max-w-2xl text-base text-brown/70 sm:text-lg">
              A selection of projects showcasing my work in web development,
              data analysis, and interactive applications.
            </p>
          </div>

          {/* Project Grid */}
          <div className="mx-auto grid max-w-4xl gap-6 sm:gap-8 md:grid-cols-2">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                imageUrl={projectImages[project.id]}
                posterUrl={projectPosters[project.id]}
                ref={(el) => (projectsRef.current[index] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
