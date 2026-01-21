import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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

  useGSAP(() => {
    // Animate section header
    gsap.fromTo(
      headerRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    projectAnimation(projectsRef);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-beige">
      {/* Faded painting background overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-painting bg-cover bg-center opacity-[0.03]"
        style={{ backgroundPosition: "center 70%" }}
      />

      {/* Ink wash gradient fade at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-beige via-beige/80 to-transparent" />

      <div className="relative px-4 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          {/* Section Header with ink brush styling */}
          <div ref={headerRef} className="mb-12 text-center md:mb-16">
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

            <h2 className="mb-4 text-3xl font-light uppercase tracking-wider text-ink sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>

            {/* Decorative vermillion line */}
            <div className="mx-auto my-4 h-px w-16 bg-vermillion/50" />

            <p className="mx-auto max-w-2xl text-base text-brown/70 sm:text-lg">
              A selection of projects showcasing my work in web development,
              data analysis, and interactive applications.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
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

      {/* Ink wash gradient fade at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-beige via-beige/80 to-transparent" />
    </section>
  );
};

export default Projects;
