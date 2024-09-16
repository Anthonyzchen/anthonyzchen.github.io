import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Function to apply animations to a project element when scrolling
export const projectAnimation = (projectsRef) => {

  projectsRef.current.forEach((project, index) => {
    // Set up ScrollTrigger for each project section
    ScrollTrigger.create({
      trigger: project, 
      start: "top top", // When the top of the project hits the top of the viewport
      end: "bottom top", // When the bottom of the project hits the top of the viewport
      pin: true, // Pin the section during scroll
      pinSpacing: false, // Prevent additional spacing after pinning
      scrub: true, // Smooth transition during scroll
      snap: 1 / (projectsRef.current.length - 1), // Define snap positions between sections
      markers: true,
    });
  });
};
