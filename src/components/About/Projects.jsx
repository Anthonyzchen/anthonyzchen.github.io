import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { projectAnimation } from "./animations";
import project1Url from "../../assets/images/Project1_Cover1280.png";
import project2Url from "../../assets/images/Project2_Cover1280.png";
import project3Url from "../../assets/images/Project3_Cover1280.png";
import project4Url from "../../assets/images/Project4_Cover1280.png";
import Experience from "./Experience";

const Projects = () => {
  const projectData = [
    {
      url: project1Url,
      page: "project1",
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
      page: "project2",
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
      page: "project3",
      title: "NUFind",
      description:
        "NUFind is a platform that facilitates event management and communication at Northeastern University. It connects students, club organizers, and campus management through an integrated system where students can discover and filter events, club organizers can create and manage events, and management can oversee funding requests and approvals.",
      techstack:
        "Developed using MySQL for the database, Flask for the backend, Docker for containerization, and AppSmith for the user interface.",
      short_techstack: ["MySQL", "Flask", "Docker", "AppSmith"],
    },
    {
      url: project4Url,
      page: "project4",
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
    <section className="grid px-8 py-16 lg:grid-cols-8">
      <ol className="group/list flex w-full flex-col lg:col-span-5">
        {projectData.map((project, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row mb-12"
            ref={(el) => projectsRef.current.push(el)}
          >
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute inset-0 hidden rounded-md transition lg:block lg:group-hover:bg-dark-beige/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

              <header className="z-10 mb-2 mt-1 tracking-wide sm:col-span-3">
                <h1 className="pb-2 text-xl">{project.title}</h1>
                <p>{project.description}</p>
              </header>

              <div className="relative z-10 mr-4 sm:col-span-5">
                <Link
                  to={`/projects/${project.page}`}
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  <div className="relative">
                    <div className="imgCover absolute inset-0 rounded-lg bg-beige/60"></div>
                    <img
                      className="overflow-hidden rounded-lg border-y-2 border-brown"
                      src={project.url}
                    />
                  </div>
                </Link>
                <ul className="flex flex-wrap pt-4">
                  {project.short_techstack.map((tech, index) => (
                    <li key={index} className="p-0.5">
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
      <Experience />
    </section>
  );
};

export default Projects;
