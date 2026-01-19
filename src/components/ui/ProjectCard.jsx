import { forwardRef } from "react";
import { Link } from "react-router-dom";
import TechBadge from "./TechBadge";

/**
 * ProjectCard - Displays a project with image, title, description, and tech stack
 * Uses forwardRef to allow parent components to attach refs for GSAP animations
 */
const ProjectCard = forwardRef(({ project, imageUrl }, ref) => {
  return (
    <li
      ref={ref}
      className="mb-12 flex h-screen flex-col items-center justify-center bg-dark-beige md:flex-row"
    >
      <div className="grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
        <header className="z-10 mb-2 mt-1 tracking-wide sm:col-span-3">
          <h1 className="pb-2 text-3xl font-medium leading-relaxed">
            {project.title}
          </h1>
          <p>{project.description}</p>
        </header>

        <div className="z-10 mr-4 sm:col-span-5">
          <Link
            to={`/projects/${project.id}`}
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <img
              className="overflow-hidden rounded-lg border-y-2 border-brown"
              src={imageUrl}
              alt={`${project.title} project preview`}
            />
          </Link>
          <ul className="flex flex-wrap pt-4">
            {project.technologies.map((tech, index) => (
              <li key={index} className="p-0.5">
                <TechBadge name={tech} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
