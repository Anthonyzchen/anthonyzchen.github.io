import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Function to apply animations to a project element
export const projectAnimation = (projectRef) => {
  const imgRef = projectRef.querySelector(".img");

  // Create a ScrollTrigger for animating the project height
  ScrollTrigger.create({
    trigger: projectRef,
    start: "top bottom",
    end: "top top",
    scrub: true,
    onUpdate: (self) => {
      let progress = self.progress;
      let newHeight = 10 + 40 * progress;
      gsap.to(projectRef, {
        height: `${newHeight}vh`,
        duration: 0.1,
        ease: "none",
      });
    },
  });

  // Create a ScrollTrigger for animating the image width
  ScrollTrigger.create({
    trigger: projectRef,
    start: "bottom bottom",
    end: "top top",
    scrub: true,
    onUpdate: (self) => {
      let progress = self.progress;
      let newWidth = 33 + 67 * progress;
      gsap.to(imgRef, {
        width: `${newWidth}%`,
        duration: 0.1,
        ease: "none",
      });
    },
  });
};
