import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { projectAnimation } from "./animations";
import { ProjectCard } from "../ui";
import projectsData from "../../data/projects.json";
import Experience from "./Experience";

// Import project images
import project1Url from "../../assets/images/Project1_Cover1280.png";
import project2Url from "../../assets/images/Project2_Cover1280.png";
import project3Url from "../../assets/images/Project3_Cover1280.png";
import project4Url from "../../assets/images/Project4_Cover1280.png";

// Map project IDs to their imported image URLs
const projectImages = {
  project1: project1Url,
  project2: project2Url,
  project3: project3Url,
  project4: project4Url,
};

/**
 * Projects - Displays all portfolio projects with scroll-based animations
 * Uses ScrollTrigger for pinning and snap effects
 */
const Projects = () => {
  const projectsRef = useRef([]);

  useGSAP(() => {
    projectAnimation(projectsRef);
  }, []);

  return (
    <section className="px-8 py-16 sm:px-32">
      <ol className="group/list flex flex-col lg:col-span-5">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            imageUrl={projectImages[project.id]}
            ref={(el) => (projectsRef.current[index] = el)}
          />
        ))}
      </ol>
      <Experience />
    </section>
  );
};

export default Projects;
