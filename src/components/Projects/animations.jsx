import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Function to apply animations to a project element
export const projectAnimation = (projectRef) => {
  const imgRef = projectRef.querySelector(".img");

  // Create a ScrollTrigger for animating the image width
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
