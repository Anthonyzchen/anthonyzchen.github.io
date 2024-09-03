import gsap from "gsap";
import SplitTextJS from "split-text-js";

export const enterStaggerTextAnimation = (textRef) => {
  const splitText = new SplitTextJS(textRef.current);

  return gsap.timeline().from(splitText.chars, {
    opacity: 0,
    y: 80,
    stagger: 0.03,
  });
};

export const exitStaggerTextAnimation = (textRef) => {
  const splitText = new SplitTextJS(textRef.current);

  return gsap.timeline().to(splitText.chars, {
    opacity: 0,
    y: -80,
    stagger: 0.03,
  });
};
