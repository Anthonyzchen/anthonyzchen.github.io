import React from "react";

const Experience = () => {
  const experienceData = [
    {
      title: "Generative AI Software Developer Intern",
      company: "UKG",
      timeframe: "September 2024 - December 2024",
      description:
        "Anticipating developing and optimizing prompts for NLP and integrated data solutions using Python, PostgresSQL, and ReactJS, enhancing AI-driven applications and feature development.",
      link: "https://www.ukg.com/",
      short_techstack: ["Python", "PostgresSQL", "ReactJS"],
    },
    {
      title: "IT Data Integration & Web Development Co-op",
      company: "BPSI",
      timeframe: "June 2023 - December 2023",
      description:
        "Integrated a cloud-based database of 5000+ records with a dynamic webpage through API and Plugin utilization, enabling automated real-time updates. Independently created 8+ Python scripts tailored for non-technical colleagues streamlining the filtering and sorting of XML files with 400+ data points, thus optimizing data processing and organization. Completed a comprehensive overhaul of web-page structure, integrating user feedback to drive improvements in performance, navigation, and overall user experience, resulting in an enhanced and user-friendly platform. Authored 20+ pages of detailed documentation, providing for a crucial foundation in understanding, implementation, troubleshooting, and maintenance of the complex systems and technical processes.",
      link: "https://bpsi.org/",
      short_techstack: ["Python", "API", "XML", "Wordpress"],
    },
    {
      title: "Programming & UI/UX Design Intern",
      company: "Mobileware",
      timeframe: "July 2019 - August 2019",
      description:
        "Collaboratively developed a user-friendly weather application by using an API, enabling real-time data retrieval for accurate and up-to-date weather information. Designed and implemented a group scheduling application using Swift and SwiftUI, fostering efficient coordination by preventing scheduling conflicts and enhancing overall scheduling management.",
      link: "https://www.mobilewareinc.com/",
      short_techstack: ["SwiftUI", "API"],
    },
  ];

  return (
    <div className="w-full lg:w-2/5">
      <ol className="group/list">
        {experienceData.map((experience, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute inset-0 z-0 hidden rounded-md transition lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                aria-label={experience.timeframe}
              >
                {experience.timeframe}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-brown focus-visible:text-brown"
                    href={experience.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
                  >
                    {experience.title}
                    <span className="ml-1 inline-block">
                      {experience.company}
                    </span>
                  </a>
                </h3>

                <p className="mt-2 text-sm leading-normal">
                  {experience.description}
                </p>

                <ul className="flex flex-wrap pt-4">
                  {experience.short_techstack.map((tech, techIndex) => (
                    <li key={techIndex} className="p-1">
                      <div className="flex items-center rounded-full bg-brown/10 px-3 py-1">
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
    </div>
  );
};

export default Experience;
