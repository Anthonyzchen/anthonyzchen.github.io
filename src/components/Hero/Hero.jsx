import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { enterStaggerTextAnimation } from "../utils";

const Hero = () => {
  // Create a ref for the all text elements, which will be animated after the prelloader
  const nameRef = useRef();
  const titleRef = useRef();
  const aboutRef = useRef();

  // Ref to store GSAP timeline for hero animations
  const heroTL = useRef();

  useGSAP(() => {
    // The animation is delayed by 11 seconds to play after the Preloader has finished
    heroTL.current = gsap
      .timeline()
      .add(enterStaggerTextAnimation(nameRef))
      .add(enterStaggerTextAnimation(titleRef))
      .add(enterStaggerTextAnimation(aboutRef))
      .delay(11);
  });
  return (
    <section>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-painting bg-cover bg-center px-8">
        <h1 className="text-4xl uppercase leading-tight" ref={nameRef}>
          Anthony Chen
        </h1>
        <h2 className="mt-3 text-lg" ref={titleRef}>
          {" "}
          CS & Finance at Northeastern University
        </h2>
        <p className="mt-4 max-w-xs leading-normal" ref={aboutRef}>
          im passionate about creating accessible, aesthetic, and adaptable
          solutions through software engineering.
        </p>
      </div>
    </section>
  );
};
export default Hero;
