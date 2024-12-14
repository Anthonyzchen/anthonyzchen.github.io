import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import MotionPathPlugin from "gsap-trial/MotionPathPlugin";
import GSDevTools from "gsap-trial/GSDevTools";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, GSDevTools);

const Experience2 = () => {
  const [activeExperience, setActiveExperience] = useState(null);

  const experienceData = [
    {
      title: "UI/UX Developer",
      employment: "Internship",
      company: "Mobileware",
      timeframe: "May 2019 - Aug 2019",
      description:
        "• Collaboratively developed a user-friendly weather application by using an API, enabling real-time data retrieval for accurate and up-to-date weather information.\n" +
        "• Designed and implemented a group scheduling application using Swift and SwiftUI, fostering efficient coordination by preventing scheduling conflicts and enhancing overall scheduling management.",
      link: "https://www.mobilewareinc.com/",
      techstack: ["SwiftUI", "API"],
      x: 760,
      y: 250,
    },
    {
      title: "IT Data Integration & Web Developer",
      employment: "Internship",
      company: "BPSI",
      timeframe: "June 2023 - Dec 2023",
      description:
        "• Integrated a cloud-based database of 5000+ records with a dynamic webpage through API and Plugin utilization, enabling automated real-time updates.\n" +
        "• Independently created 8+ Python scripts tailored for non-technical colleagues streamlining the filtering and sorting of XML files with 400+ data points, thus optimizing data processing and organization.\n" +
        "• Completed a comprehensive overhaul of web-page structure, integrating user feedback to drive improvements in performance, navigation, and overall user experience, resulting in an enhanced and user-friendly platform.\n" +
        "• Authored 20+ pages of detailed documentation, providing for a crucial foundation in understanding, implementation, troubleshooting, and maintenance of the complex systems and technical processes.",
      link: "https://bpsi.org/",
      techstack: ["Python", "API", "XML", "Wordpress"],
      x: 3800,
      y: 300,
    },
    {
      title: "Generative AI Software Developer",
      employment: "Internship",
      company: "UKG",
      timeframe: "Sept 2024 - Dec 2024",
      description:
        "• Redesigned and developed a company-wide innovation platform located on SharePoint, improving accessibility and user satisfaction while driving adoption of generative AI initiatives.\n" +
        "• Built and deployed a Generative AI Assistant with Azure AI, streamlining knowledge management, optimizing NLP prompts, and enhancing user support.\n" +
        "• Designed and implemented an interactive product tour using ReactJS, improving user onboarding to internal generative AI tools and aligning with corporate branding standards.\n" +
        "• Collaborated with cross-functional teams in an Agile environment to deliver scalable solutions, utilizing tools like Jira for sprint planning and task management.",
      link: "https://www.ukg.com/",
      techstack: ["Python", "PostgresSQL", "ReactJS"],
      x: 4800,
      y: 300,
    },
  ];

  const experiencesRef = useRef(null);

  useGSAP(() => {
    const experiences = experiencesRef.current;

    function getScrollAmount() {
      let experiencesWidth = experiences.scrollWidth;
      return -(experiencesWidth - window.innerWidth);
    }

    const tween = gsap.to(experiences, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".experienceWrapper",
      start: "top",
      end: () => `+=${getScrollAmount() * 0.735 * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    const pulseAnimation = (
      element,
      scaleFrom = 1,
      scaleTo = 1.5,
      duration = 0.2,
      ease = "elastic(2.5, .5)",
    ) => {
      return gsap.fromTo(
        element,
        { scale: scaleFrom, autoAlpha: 0, transformOrigin: "center" }, // From this scale
        { scale: scaleTo, autoAlpha: 1, duration: duration, ease: ease }, // To this scale
      );
    };

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#svg",
          scrub: true,
          start: "top top",
          end: () => `+=${getScrollAmount() * -1}`,
        },
      })
      .from(".theLine", { drawSVG: 0, duration: 4 }, 0)
      // Start of first experience
      .add(pulseAnimation(".ball01"), 0.2)
      .add(pulseAnimation(".text08"), 0.2)
      // .add(pulseAnimation(".experience1"), 0.2)
      // End of first experience
      .add(pulseAnimation(".ball02"), 0.235)
      .add(pulseAnimation(".text09"), 0.235)
      // Start of second experience
      .add(pulseAnimation(".ball03"), 2.184)
      .add(pulseAnimation(".text10"), 2.184)
      // .add(pulseAnimation(".experience2"), 2.184)
      // End of second experience
      .add(pulseAnimation(".ball04"), 2.376)
      .add(pulseAnimation(".text11"), 2.376)
      // Start of third experience
      .add(pulseAnimation(".ball05"), 2.683)
      .add(pulseAnimation(".text12"), 2.683)
      // .add(pulseAnimation(".experience3"), 2.683)
      // End of third experience
      .add(pulseAnimation(".ball06"), 2.756)
      .add(pulseAnimation(".text13"), 2.756);
  }, {});

  // Utility function to split the description into multiple lines
  const wrapText = (text, maxLineLength) => {
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";

    words.forEach((word) => {
      if ((currentLine + word).length <= maxLineLength) {
        currentLine += word + " ";
      } else {
        lines.push(currentLine.trim());
        currentLine = word + " ";
      }
    });

    if (currentLine.length > 0) {
      lines.push(currentLine.trim());
    }

    return lines;
  };
  const maxLineLength = 40;

  return (
    <div className="">
      <div className="h-screen w-full"></div>
      <div className="experienceWrapper overflow-x-hidden">
        <div
          className="experiences relative flex h-screen w-max flex-nowrap"
          ref={experiencesRef}
        >
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className={`experience${index + 1} absolute h-auto min-w-[24rem] max-w-[32rem]`}
              style={{
                transform: `translate(${experience.x}px, ${experience.y}px)`, // Dynamic translation using inline style
              }}
            >
              {/* Main Card Container */}
              <div className="lg:group-hover:list:opacity-50 group relative pb-1 transition-all lg:hover:opacity-100">
                <div className="absolute inset-0 hidden rounded-md transition lg:block lg:group-hover:bg-dark-beige/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                {/* Experience Title and Company Link */}
                <div className="z-10">
                  <h3 className="text-xl">
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
                  </h3>

                  {/* Descriptions */}
                  <h2 className="">{experience.employment}</h2>

                  <div className="mt-2 whitespace-pre-line">
                    {experience.description}
                  </div>

                  {/* Tech Stack Tags */}
                  <ul className="flex flex-wrap pt-4">
                    {experience.techstack.map((tech, techIndex) => (
                      <li key={techIndex} className="p-0.5">
                        <div className="flex items-center rounded-full bg-red-800/10 px-3 py-1 text-red-700">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <svg
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 4480 600"
            className="stroke-brown"
            textAnchor="middle"
          >
            {/* Year Lines */}
            <path className="line01 line" d="M 560 10  560 550"></path>
            <path className="line02 line" d="M 1120 10  1120 550"></path>
            <path className="line03 line" d="M 1680 10  1680 550"></path>
            <path className="line04 line" d="M 2240 10  2240 550"></path>
            <path className="line05 line" d="M 2800 10  2800 550"></path>
            <path className="line06 line" d="M 3360 10  3360 550"></path>
            <path className="line07 line" d="M 3920 10  3920 550"></path>
            {/* Month Lines */}
            <path className="line08 line" d="M 760 10  760 520"></path>
            <path className="line09 line" d="M 880 10  880 520"></path>
            <path className="line10 line" d="M 3040 10  3040 520"></path>
            <path className="line11 line" d="M 3280 10  3280 520"></path>
            <path className="line12 line" d="M 3720 10  3720 520"></path>
            <path className="line13 line" d="M 3840 10  3840 520"></path>
            {/* Years (560) */}
            <text className="text01" x="560" y="570">
              2019
            </text>
            <text className="text02" x="1120" y="570">
              2020
            </text>
            <text className="text03" x="1680" y="570">
              2021
            </text>
            <text className="text04" x="2240" y="570">
              2022
            </text>
            <text className="text05" x="2800" y="570">
              2023
            </text>
            <text className="text06" x="3360" y="570">
              2024
            </text>
            <text className="text07" x="3920" y="570">
              2025
            </text>

            {/* Months (40) */}
            <text className="text08" x="760" y="540">
              MAY
            </text>
            <text className="text09" x="880" y="540">
              AUG
            </text>
            <text className="text10" x="3040" y="540">
              JUNE
            </text>
            <text className="text11" x="3280" y="540">
              DEC
            </text>
            <text className="text12" x="3720" y="540">
              SEPT
            </text>
            <text className="text13" x="3840" y="540">
              DEC
            </text>

            {/* line */}
            <path
              className="theLine stroke-[5px]"
              d="M 0 0 
              Q 250 100 350 300 
              Q 450 450 550 250 
              Q 650 50 800 150 
              C 1000 300 1050 550 1200 550 
              C 1400 550 1500 200 1700 50
              C 1550 400 1650 525 1700 550 
              C 1800 600 1900 150 1800 550 
              C 2050 150 1950 500 1950 550 
              C 1950 600 2200 450 2250 100 
              C 2100 500 2200 550 2350 550 
              C 2500 550 2550 500 2450 450 
              C 2100 250 0 300 2700 350 
              C 2900 350 2950 250 3050 150 
              C 3150 50 3100 400 3200 300 
              C 3300 200 3300 200 3400 100 
              C 3500 0 3500 350 3800 250 
              C 4450 50 3400 600 4550 350"
              fill="none"
            />
            {/* Balls */}
            <circle className="ball ball01" r="10" cx="760" cy="130"></circle>
            <circle className="ball ball02" r="10" cx="880" cy="222"></circle>
            <circle className="ball ball03" r="10" cx="3040" cy="160"></circle>
            <circle className="ball ball04" r="10" cx="3280" cy="220"></circle>
            <circle className="ball ball05" r="10" cx="3720" cy="267"></circle>
            <circle className="ball ball06" r="10" cx="3840" cy="238"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

// SVG option for displaying experience
// {experienceData.map((experience, index) => (
//   <svg key={index} className={`experience${index + 1}`}>
//   <rect
//     x={experience.x}
//     y={experience.y}
//     rx="20"
//     ry="20"
//     width="240"
//     height="160"
//     className="fill-transparent-beige"
//   />
//   <text
//     className="text-xs"
//     x={experience.x + 120}
//     y={experience.y + 20}
//   >
//     {experience.title} · {experience.company}
//   </text>
//   <text
//     className="text-xs"
//     x={experience.x + 120}
//     y={experience.y + 40}
//   >
//     {experience.employment} | {experience.techstack}
//   </text>
//   <text className="text-xs" y={experience.y + 60}>
//     {/* {experience.description} */}
//     {wrapText(experience.description, maxLineLength).map(
//       (line, lineIndex) => (
//         <tspan
//           key={lineIndex}
//           x={experience.x + 120}
//           dy={lineIndex === 0 ? 0 : 15}
//         >
//           {line}
//         </tspan>
//       ),
//     )}
//   </text>
// </svg>
// ))}

export default Experience2;
