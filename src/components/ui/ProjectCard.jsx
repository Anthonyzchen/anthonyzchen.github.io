import { forwardRef } from "react";
import TechBadge from "./TechBadge";

/**
 * Get theme-specific accent colors for the card
 */
const getThemeStyles = (theme) => {
  switch (theme) {
    case "fishing":
      return {
        border: "border-blue-300/30 hover:border-blue-400/50",
        gradient: "from-blue-500/10 via-cyan-400/5 to-transparent",
      };
    case "michelin":
      return {
        border: "border-red-300/30 hover:border-red-400/50",
        gradient: "from-red-500/10 via-amber-400/5 to-transparent",
      };
    default:
      return {
        border: "border-brown/20 hover:border-brown/40",
        gradient: "from-brown/10 to-transparent",
      };
  }
};

/**
 * ProjectCard - Displays a project with image, title, description, and tech stack
 */
const ProjectCard = forwardRef(({ project, imageUrl }, ref) => {
  const themeStyles = getThemeStyles(project.theme);

  return (
    <article
      ref={ref}
      className={`group relative flex flex-col overflow-hidden rounded-xl border-2 bg-dark-beige/95 shadow-md transition-all duration-500 hover:shadow-xl ${themeStyles.border}`}
    >
      {/* Gradient overlay based on theme */}
      <div
        className={`pointer-events-none absolute inset-0 z-0 bg-gradient-to-br opacity-50 ${themeStyles.gradient}`}
      />

      {/* Image */}
      <div className="relative z-[1] overflow-hidden">
        <img
          className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={imageUrl}
          alt={`${project.title} project preview`}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="relative z-[1] flex flex-1 flex-col p-5 sm:p-6">
        {/* Title */}
        <h3 className="mb-3 text-xl font-semibold leading-tight text-brown sm:text-2xl">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-brown/75 sm:text-base">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mb-4">
          <ul className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech, index) => (
              <li key={index}>
                <TechBadge name={tech} />
              </li>
            ))}
            {project.technologies.length > 5 && (
              <li className="flex items-center rounded-full bg-brown/10 px-2 py-0.5 text-xs text-brown/60">
                +{project.technologies.length - 5}
              </li>
            )}
          </ul>
        </div>

        {/* Action links */}
        <div className="flex flex-wrap gap-2 border-t border-brown/10 pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border-2 border-brown bg-transparent px-3 py-1.5 text-sm font-medium text-brown transition-all duration-300 hover:bg-brown hover:text-beige"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-brown px-3 py-1.5 text-sm font-medium text-beige transition-all duration-300 hover:bg-brown/80"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
