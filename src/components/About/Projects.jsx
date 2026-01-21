import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { projectAnimation } from "./animations";
import { ProjectCard } from "../ui";
import projectsData from "../../data/projects.json";

// Import project images
import project1Url from "../../assets/images/Project1_Cover1280.png";
import project2Url from "../../assets/images/Project2_Cover1280.png";

// Map project IDs to their imported image URLs
const projectImages = {
  project1: project1Url,
  project2: project2Url,
};

/**
 * Projects - Displays portfolio projects in a grid layout
 * Integrated section for SPA with scroll-triggered animations
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
    <section ref={sectionRef} className="bg-beige px-4 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header - styled to match ExperienceTimeline */}
        <div ref={headerRef} className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-medium text-brown sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
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
              ref={(el) => (projectsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
