import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { projectAnimation } from "./animations";
import project1Url from "../../assets/images/p1.png";
import project2Url from "../../assets/images/p2.png";
import project3Url from "../../assets/images/p3.png";
// import project4Url from "../../assets/images/p4.png";

const Projects = () => {
  const projectData = [
    {
      url: project1Url,
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, odio.",
    },
    {
      url: project2Url,
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, odio.",
    },
    {
      url: project3Url,
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, odio.",
    },
    {
      url: project2Url,
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, odio.",
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
    // Fixed height to avoid the dynamic height issue
    <section className="flex h-[225vh] flex-col px-8 py-16">
      <div className="flex w-full justify-center gap-16 sm:justify-start">
        <div className="hidden sm:block sm:flex-[2]"></div>
        <div className="p-4 text-4xl font-medium sm:flex-[5]">
          <h1>All Projects</h1>
        </div>
      </div>

      {projectData.map((project, index) => (
        <div
          key={index}
          className="flex h-2/6 flex-col gap-8 border-t-2 border-brown sm:flex-row"
          ref={(el) => projectsRef.current.push(el)}
        >
          <div className="flex w-full flex-col items-center sm:h-full sm:flex-[2] sm:items-start sm:p-4">
            <h1 className="text-4xl font-medium">{project.title}</h1>
            <p className="text-lg">{project.description}</p>
          </div>
          <div className="flex w-full overflow-hidden items-center justify-center h-full sm:flex-[5] sm:items-start sm:justify-start sm:p-4 py-4">
            <img
              className="img h-full w-4/12 overflow-hidden rounded-lg object-cover"
              src={project.url}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
