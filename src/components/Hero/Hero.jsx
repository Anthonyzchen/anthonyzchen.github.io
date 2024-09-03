import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { enterStaggerTextAnimation } from "../utils";

const Hero = () => {
  // Create a ref for the name element, which will be animated
  const nameRef = useRef();

  useGSAP(() => {
    // The animation is delayed by 11 seconds to play after the Preloader has finished
    enterStaggerTextAnimation(nameRef).delay(11)
  })
  return (
    <section>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-painting bg-cover bg-center px-8">
        <h1 className="text-4xl uppercase leading-tight" ref={nameRef}>Anthony Chen</h1>
        <h2 className="mt-3 text-lg">CS & Finance at Northeastern University</h2>
        <p className="mt-4 max-w-xs leading-normal">im passionate about creating accessible, aesthetic, and adaptable solutions through software engineering.</p>
      </div>
    </section>
  );
};
export default Hero;
