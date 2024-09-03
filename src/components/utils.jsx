import gsap from "gsap";
import SplitTextJS from "split-text-js";

// Function to create an animation for entering text with staggered effects
export const enterStaggerTextAnimation = (textRef) => {
  const splitText = new SplitTextJS(textRef.current);

  return gsap.timeline().from(splitText.chars, {
    opacity: 0,
    y: 80,
    stagger: 0.03,
  });
};

// Function to create an animation for exiting text with staggered effects
export const exitStaggerTextAnimation = (textRef) => {
  const splitText = new SplitTextJS(textRef.current);

  return gsap.timeline().to(splitText.chars, {
    opacity: 0,
    y: -80,
    stagger: 0.03,
  });
};
