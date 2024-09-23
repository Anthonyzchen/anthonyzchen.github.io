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
  const experienceData = [
    {
      title: "Generative AI Software Developer",
      employment: "Internship",
      company: "UKG",
      timeframe: "Sept 2024 - Dec 2024",
      description:
        "Anticipating developing and optimizing prompts for NLP and integrated data solutions using Python, PostgresSQL, and ReactJS, enhancing AI-driven applications and feature development.",
      link: "https://www.ukg.com/",
      short_techstack: ["Python", "PostgresSQL", "ReactJS"],
    },
    {
      title: "IT Data Integration & Web Developer",
      employment: "Internship",
      company: "BPSI",
      timeframe: "June 2023 - Dec 2023",
      description:
        "Integrated a cloud-based database of 5000+ records with a dynamic webpage through API and Plugin utilization, enabling automated real-time updates. Independently created 8+ Python scripts tailored for non-technical colleagues streamlining the filtering and sorting of XML files with 400+ data points, thus optimizing data processing and organization. Completed a comprehensive overhaul of web-page structure, integrating user feedback to drive improvements in performance, navigation, and overall user experience, resulting in an enhanced and user-friendly platform. Authored 20+ pages of detailed documentation, providing for a crucial foundation in understanding, implementation, troubleshooting, and maintenance of the complex systems and technical processes.",
      link: "https://bpsi.org/",
      short_techstack: ["Python", "API", "XML", "Wordpress"],
    },
    {
      title: "UI/UX Developer",
      employment: "Internship",
      company: "Mobileware",
      timeframe: "July 2019 - Aug 2019",
      description:
        "Collaboratively developed a user-friendly weather application by using an API, enabling real-time data retrieval for accurate and up-to-date weather information. Designed and implemented a group scheduling application using Swift and SwiftUI, fostering efficient coordination by preventing scheduling conflicts and enhancing overall scheduling management.",
      link: "https://www.mobilewareinc.com/",
      short_techstack: ["SwiftUI", "API"],
    },
  ];

  const experiencesRef = useRef(null);
  const speed = useState(3);

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
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#svg",
        scrub: true,
        start: "top center",
        end: () => `+=${getScrollAmount() * speed * -1}`,
      }
    })
    .to(".ball01", {autoAlpha:1, duration:0.05})
    .from(".theLine", {drawSVG:0, duration:4}, 0)
    .to(".ball01", {motionPath:{
      path:".theLine",
      align:".theLine",
      alignOrigin:[0.5, 0.5],
    }, duration:4}, 0)
    // .add(pulses, 0)
  }, {});

  return (
    <div className="">
      <div className="h-screen w-full"></div>
      <div className="experienceWrapper overflow-x-hidden">
        <div
          className="experiences flex h-screen w-max flex-nowrap"
          ref={experiencesRef}
        >
          {/* {experienceData.map((experience, index) => (
            <h2 key={index} className="h-screen w-full text-9xl">
              {experience.title}
            </h2>
          ))} */}
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
              C 2800 350 2950 300 3000 250 
              C 3150 150 3200 50 3250 200 
              C 3350 350 3500 100 3600 50 
              C 3700 0 3700 200 3900 150 
              C 4450 100 3950 550 4500 300"
              fill="none"
            />
            {/* Balls */}
            <circle className="ball ball01" r="10" cx="760" cy="130"></circle>
            <circle className="ball ball02" r="10" cx="880" cy="222"></circle>
            <circle className="ball ball03" r="10" cx="3040" cy="223"></circle>
            <circle className="ball ball04" r="10" cx="3280" cy="230"></circle>
            <circle className="ball ball05" r="10" cx="3720" cy="107"></circle>
            <circle className="ball ball06" r="10" cx="3840" cy="156"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Experience2;
