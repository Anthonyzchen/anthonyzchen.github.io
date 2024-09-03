import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Function to apply animations to a project element when scrolling
export const projectAnimation = (projectRef) => {
  // Select the image element within the project to animate its width
  const imgRef = projectRef.querySelector(".imgCover");

  // Create a ScrollTrigger instance to control the animation based on scroll position
  ScrollTrigger.create({
    trigger: projectRef,
    start: "bottom bottom",
    end: "top 30%",
    scrub: true,
    onUpdate: (self) => {
      let progress = self.progress;
      let newWidth = 100 + -100 * progress;
      gsap.to(imgRef, {
        width: `${newWidth}%`,
        duration: 0.5,
        ease: "slow.inOut",
      });
    },
  });
};
