import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1Url from "../../assets/images/p1.png";
import project2Url from "../../assets/images/p2.png";
import project3Url from "../../assets/images/p3.png";
// import project4Url from "../../assets/images/p4.png";

const Projects = () => {
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
        // Checks if the observed element is in view.
        if (entry.isIntersecting) {
          const project = entry.target;
          const imgContainer = project.querySelector(".img");

          ScrollTrigger.create({
            trigger: project,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newWidth = 33 + 67 * progress;
              gsap.to(imgContainer, {
                width: `${newWidth}%`,
                duration: 0.1,
                ease: "none",
              });
            },
          });

          ScrollTrigger.create({
            trigger: project,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newHeight = 10 + 40 * progress;
              gsap.to(project, {
                height: `${newHeight}vh`,
                duration: 0.1,
                ease: "none",
              });
            },
          });

          observer.unobserve(project);
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
      <div className="flex w-full gap-16">
        <div className="flex-[2]"></div>
        <div className="flex-[5] p-4 text-4xl font-medium">
          <h1>All Projects</h1>
        </div>
      </div>

      <div
        className="h-2/6 flex h-64 gap-8 border-t-2 border-brown"
        ref={(el) => projectsRef.current.push(el)}
      >
        <div className="flex h-full w-full flex-[2] flex-col p-4">
          <h1 className="text-4xl font-medium">Project 1</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
            odio.
          </p>
        </div>
        <div className="h-full w-full flex-[5] p-4">
          <img
            className="img h-full w-4/12 overflow-hidden rounded-lg object-cover"
            src={project1Url}
            alt="project1"
          />
        </div>
      </div>

      <div
        className="h-2/6 flex h-64 gap-8 border-t-2 border-brown"
        ref={(el) => projectsRef.current.push(el)}
      >
        <div className="flex h-full w-full flex-[2] flex-col p-4">
          <h1 className="text-4xl font-medium">Project 2</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
            odio.
          </p>
        </div>
        <div className="h-full w-full flex-[5] p-4">
          <img
            className="img h-full w-4/12 overflow-hidden rounded-lg object-cover"
            src={project2Url}
            alt="project2"
          />
        </div>
      </div>

      <div
        className="h-2/6 flex h-64 gap-8 border-t-2 border-brown"
        ref={(el) => projectsRef.current.push(el)}
      >
        <div className="flex h-full w-full flex-[2] flex-col p-4">
          <h1 className="text-4xl font-medium">Project 3</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
            odio.
          </p>
        </div>
        <div className="h-full w-full flex-[5] p-4">
          <img
            className="img h-full w-4/12 overflow-hidden rounded-lg object-cover"
            src={project3Url}
            alt="project3"
          />
        </div>
      </div>

      <div
        className="h-2/6 flex h-64 gap-8 border-t-2 border-brown"
        ref={(el) => projectsRef.current.push(el)}
      >
        <div className="flex h-full w-full flex-[2] flex-col p-4">
          <h1 className="text-4xl font-medium">Project 4</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
            odio.
          </p>
        </div>
        <div className="h-full w-full flex-[5] p-4">
          <img
            className="img h-full w-4/12 overflow-hidden rounded-lg object-cover"
            src={project1Url}
            alt="project4"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
