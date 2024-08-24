import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { projectAnimation } from "./animations";
import project1Url from "../../assets/images/Project1_Cover1280.png";
import project2Url from "../../assets/images/Project2_Cover1280.png";
import project3Url from "../../assets/images/Project3_Cover1280.png";
import project4Url from "../../assets/images/Project4_Cover1280.png";
import Experience from "../About/Experience";

const Projects = () => {
  const projectData = [
    {
      url: project1Url,
      title: "Fishing Game Addition in Covey.Town",
      description:
        "This project involved integrating an interactive Fishing Game Area into the pre-existing codebase, enhancing virtual exploration with engaging gameplay. In this feature, users are able to fish for rare catches, customize avatars, and compete for the highest score on a global leaderboard.",
      techstack:
        "Built using TypeScript, React, and Chakra UI, with real-time leaderboard updates via MongoDB. Sprites crafted with Photoshop, optimized using TexturePacker, and deployed via Netlify with automated testing.",
      short_techstack: [
        "TypeScript",
        "React",
        "ChakraUI",
        "MongoDB",
        "Photoshop",
        "TexturePacker",
        "Netlify",
      ],
    },
    {
      url: project2Url,
      title: "Determining Bias in the Michelin Guide",
      description:
        "This project analyzed Michelin Guide biases in geographic and cuisine trends using machine learning. Results suggested a preference for established cuisines and high-end restaurants, potentially overlooking more diverse options for one star ratings. Insufficient data limited our conclusions for two- and three-star ratings.",
      techstack:
        "Built with Python using pandas, numpy, and scikit-learn. Visualizations were created with matplotlib and seaborn, and predictions were generated with K-NN, Random Forest, and SVM algorithms. Data was sourced from Kaggle.",
      short_techstack: [
        "Python",
        "Pandas",
        "Numpy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
      ],
    },
    {
      url: project3Url,
      title: "NUFind",
      description:
        "NUFind is a platform that facilitates event management and communication at Northeastern University. It connects students, club organizers, and campus management through an integrated system where students can discover and filter events, club organizers can create and manage events, and management can oversee funding requests and approvals.",
      techstack:
        "Developed using MySQL for the database, Flask for the backend, Docker for containerization, and AppSmith for the user interface.",
      short_techstack: ["MySQL", "Flask", "Docker", "AppSmith"],
    },
    {
      url: project4Url,
      title: "NURecs",
      description:
        "NURecs provides curated restaurant recommendations for students in Boston. Recommendations are categorized and can be filtered by specific attributes to help users make informed dining choices.",
      techstack:
        "Developed using React and JavaScript for the frontend, with Supabase for the backend and database management. The project includes sample data and features CSS and HTML enhancements for a polished look.",
      short_techstack: ["React", "Javascript", "Supabase"],
    },
  ];

  const projectsRef = useRef([]);

  useGSAP(() => {
    const observerOptions = {
      // The root to use for intersection. If not provided, use the top-level document’s viewport
      root: null,
      // Margin around the root. Values are similar to CSS margin property
      rootMargin: "0px",
      // Threshold of 0.1 means that 10% of the observed element must be visible for the callback to be invoked
      threshold: 0.1,
    };

    // This function is executed whenever an observed element's visibility changes
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        // Check if the element is intersecting (visible in viewport)
        if (entry.isIntersecting) {
          const projectRef = entry.target;
          projectAnimation(projectRef);
          observer.unobserve(projectRef);
        }
      });
    };

    // Creating the observer and applying it to each project
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    projectsRef.current.forEach((project) => {
      observer.observe(project);
    });
  }, []);

  return (
    <section className="flex flex-col px-8 py-16">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-3/5">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row"
              ref={(el) => projectsRef.current.push(el)}
            >
              <div className="flex w-full flex-col items-center sm:items-start sm:p-4 md:max-w-sm">
                <h1 className="pb-2 text-xl font-medium">{project.title}</h1>
                <p className="leading-tight">{project.description}</p>
              </div>
              <div className="flex flex-col items-center justify-center overflow-hidden py-4 sm:items-start sm:justify-start sm:p-4">
                <div className="relative">
                  <div className="imgCover absolute h-full w-full rounded-lg bg-beige/60"></div>
                  <img
                    className="w-screen items-center justify-center overflow-hidden rounded-lg border-2 border-brown"
                    src={project.url}
                  />
                </div>
                <ul className="flex flex-wrap pt-4">
                  {project.short_techstack.map((tech, index) => (
                    <li key={index} className="p-1">
                      <div className="flex items-center rounded-full bg-brown/10 px-3 py-1">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <Experience />
      </div>
    </section>
  );
};

export default Projects;
