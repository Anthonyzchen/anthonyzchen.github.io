import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { enterStaggerTextAnimation } from "../utils";

const Hero = () => {
  // Create refs for text elements and scroll indicator
  const nameRef = useRef();
  const titleRef = useRef();
  const aboutRef = useRef();
  const scrollIndicatorRef = useRef();
  const decorLineRef = useRef();

  // Ref to store GSAP timeline for hero animations
  const heroTL = useRef();

  useGSAP(() => {
    // The animation is delayed to play after the Preloader has finished
    heroTL.current = gsap
      .timeline()
      .add(enterStaggerTextAnimation(nameRef))
      .add(enterStaggerTextAnimation(titleRef), "-=0.3")
      .add(enterStaggerTextAnimation(aboutRef), "-=0.3")
      .fromTo(
        decorLineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .delay(3);

    // Continuous bounce animation for scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 8,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 5,
    });
  });

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative">
      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-painting bg-cover bg-center px-6 sm:px-8">
        {/* Edge fades - ink wash style vignette */}
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-beige/70 to-transparent sm:w-32 md:w-48" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-beige/70 to-transparent sm:w-32 md:w-48" />
        {/* Bottom fade - stronger for transition to next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-beige via-beige/80 to-transparent sm:h-56 md:h-64" />
        {/* Top subtle fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-beige/40 to-transparent sm:h-32" />

        {/* Main content container */}
        <div className="relative flex flex-col items-center text-center">
          {/* Name - larger and more prominent */}
          <h1
            className="text-5xl font-light uppercase tracking-widest text-ink sm:text-6xl md:text-7xl"
            ref={nameRef}
          >
            Anthony Chen
          </h1>

          {/* Decorative line */}
          <div
            ref={decorLineRef}
            className="my-6 h-px w-24 origin-center bg-vermillion/60 sm:my-8 sm:w-32"
          />

          {/* Title */}
          <h2
            className="text-base font-medium tracking-wide text-brown/90 sm:text-lg md:text-xl"
            ref={titleRef}
          >
            Software Engineer
          </h2>

          {/* About text */}
          <p
            className="mt-4 max-w-sm text-sm leading-relaxed text-brown/80 sm:mt-6 sm:max-w-md sm:text-base md:max-w-lg"
            ref={aboutRef}
          >
            Building accessible, aesthetic, and adaptable solutions through
            thoughtful software engineering.
          </p>
        </div>

        {/* Scroll indicator */}
        <button
          ref={scrollIndicatorRef}
          onClick={scrollToContent}
          className="absolute bottom-12 z-10 flex flex-col items-center gap-2 text-brown/60 transition-colors hover:text-vermillion sm:bottom-16"
          aria-label="Scroll to content"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
export default Hero;
