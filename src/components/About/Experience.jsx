import React from "react";

const Experience = () => {
  const experienceData = [
    {
      title: "Generative AI Software Developer Intern",
      company: "UKG",
      timeframe: "Sept 2024 - Dec 2024",
      description:
        "Anticipating developing and optimizing prompts for NLP and integrated data solutions using Python, PostgresSQL, and ReactJS, enhancing AI-driven applications and feature development.",
      link: "https://www.ukg.com/",
      short_techstack: ["Python", "PostgresSQL", "ReactJS"],
    },
    {
      title: "IT Data Integration & Web Development Co-op",
      company: "BPSI",
      timeframe: "June 2023 - Dec 2023",
      description:
        "Integrated a cloud-based database of 5000+ records with a dynamic webpage through API and Plugin utilization, enabling automated real-time updates. Independently created 8+ Python scripts tailored for non-technical colleagues streamlining the filtering and sorting of XML files with 400+ data points, thus optimizing data processing and organization. Completed a comprehensive overhaul of web-page structure, integrating user feedback to drive improvements in performance, navigation, and overall user experience, resulting in an enhanced and user-friendly platform. Authored 20+ pages of detailed documentation, providing for a crucial foundation in understanding, implementation, troubleshooting, and maintenance of the complex systems and technical processes.",
      link: "https://bpsi.org/",
      short_techstack: ["Python", "API", "XML", "Wordpress"],
    },
    {
      title: "Programming & UI/UX Design Intern",
      company: "Mobileware",
      timeframe: "July 2019 - Aug 2019",
      description:
        "Collaboratively developed a user-friendly weather application by using an API, enabling real-time data retrieval for accurate and up-to-date weather information. Designed and implemented a group scheduling application using Swift and SwiftUI, fostering efficient coordination by preventing scheduling conflicts and enhancing overall scheduling management.",
      link: "https://www.mobilewareinc.com/",
      short_techstack: ["SwiftUI", "API"],
    },
  ];

  return (
    <ol className="group/list py-16 lg:col-span-3 lg:py-0">
      {experienceData.map((experience, index) => (
        <li key={index} className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute inset-0 hidden rounded-md transition lg:block lg:group-hover:bg-dark-beige/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              className="z-10 mb-2 mt-1 font-semibold uppercase tracking-wide sm:col-span-2"
              aria-label={experience.timeframe}
            >
              {experience.timeframe}
            </header>

            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug">
                <a
                  className="group/link inline-flex items-baseline font-medium leading-tight hover:text-red-700 focus-visible:text-red-700"
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
              </h3>

              <p className="mt-2">{experience.description}</p>

              <ul className="flex flex-wrap pt-4">
                {experience.short_techstack.map((tech, techIndex) => (
                  <li key={techIndex} className="p-0.5">
                    <div className="flex items-center rounded-full bg-red-800/10 px-3 py-1 text-red-700">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Experience;
