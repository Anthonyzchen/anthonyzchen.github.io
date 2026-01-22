import gsap from "gsap";
import SplitTextJS from "split-text-js";

// Function to create an animation for entering text with staggered effects
// Animates character by character, but words stay together (no mid-word line breaks)
export const enterStaggerTextAnimation = (textRef) => {
  const splitText = new SplitTextJS(textRef.current);

  // Words use inline-flex to stay together as a unit while allowing line breaks between them
  splitText.words.forEach((word) => {
    word.style.display = "inline-flex";
    word.style.whiteSpace = "nowrap";
  });

  // Spaces need to be inline and have width to create proper gaps
  // Using a regular space character allows natural word wrapping
  splitText.spaces.forEach((space) => {
    space.style.display = "inline";
    space.style.width = "auto";
  });

  return gsap.timeline().from(splitText.chars, {
    opacity: 0,
    y: 80,
    stagger: 0.03,
  });
};

// Function to create an animation for exiting text with staggered effects
// Animates character by character, but words stay together (no mid-word line breaks)
export const exitStaggerTextAnimation = (textRef) => {
  const splitText = new SplitTextJS(textRef.current);

  // Words use inline-flex to stay together as a unit while allowing line breaks between them
  splitText.words.forEach((word) => {
    word.style.display = "inline-flex";
    word.style.whiteSpace = "nowrap";
  });

  // Spaces need to be inline and have width to create proper gaps
  // Using a regular space character allows natural word wrapping
  splitText.spaces.forEach((space) => {
    space.style.display = "inline";
    space.style.width = "auto";
  });

  return gsap.timeline().to(splitText.chars, {
    opacity: 0,
    y: -80,
    stagger: 0.03,
  });
};
