import TechBadge from "./TechBadge";

/**
 * ExperienceCard - Displays a work experience entry with company info and tech stack
 * Includes hover effects and external link to company website
 */
const ExperienceCard = ({ experience }) => {
  const hasLink = experience.link !== null && experience.link !== undefined;

  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute inset-0 hidden rounded-md transition lg:block lg:group-hover:bg-dark-beige/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header
          className="z-10 mb-2 mt-1 uppercase tracking-wide sm:col-span-2"
          aria-label={experience.timeframe}
        >
          {experience.timeframe}
        </header>

        <div className="z-10 sm:col-span-6">
          <h3 className="text-xl">
            {hasLink ? (
              <a
                className="group/link inline-flex items-baseline leading-tight hover:text-red-700 focus-visible:text-red-700"
                href={experience.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
              >
                <span className="absolute inset-0 hidden rounded lg:block"></span>
                {experience.title} ·
                <span className="ml-1 inline-block">
                  {experience.company}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </a>
            ) : (
              <span className="inline-flex items-baseline leading-tight">
                {experience.title} ·
                <span className="ml-1 inline-block">{experience.company}</span>
              </span>
            )}
          </h3>

          <h2>{experience.employment}</h2>

          <p className="mt-2">
            {experience.shortDescription || experience.description}
          </p>

          <ul className="flex flex-wrap pt-4">
            {experience.technologies.map((tech, index) => (
              <li key={index} className="p-0.5">
                <TechBadge name={tech} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ExperienceCard;
