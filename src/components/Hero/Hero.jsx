import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  // Create refs for text elements and scroll indicator
  const nameRef = useRef();
  const titleRef = useRef();
  const aboutRef = useRef();
  const decorLineRef = useRef();
  const sectionRef = useRef();

  // Ref to store GSAP timeline for hero animations
  const heroTL = useRef();

  useGSAP(() => {
    // The animation is delayed to play after the Preloader has finished
    // Simple fade and slide up for each text element
    heroTL.current = gsap
      .timeline()
      .from(nameRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      })
      .from(
        titleRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        aboutRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .fromTo(
        decorLineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      )
      .delay(3);

    // Snapping logic between Hero and next section
    let isSnapping = false;
    let scrollTimeout;

    const checkSnap = () => {
      if (isSnapping) return;

      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Snap zone: if scrolled between 15% and 85% of hero height
      if (scrollY > heroHeight * 0.15 && scrollY < heroHeight * 0.85) {
        isSnapping = true;

        // Determine snap direction based on position
        const targetY = scrollY < heroHeight * 0.5 ? 0 : heroHeight;

        gsap.to(window, {
          scrollTo: { y: targetY, autoKill: true },
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            isSnapping = false;
          },
          onInterrupt: () => {
            isSnapping = false;
          },
        });
      }
    };

    // Detect when scrolling stops
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      onUpdate: () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(checkSnap, 150);
      },
    });
  });

  return (
    <section ref={sectionRef} className="relative">
      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-painting bg-cover bg-center px-6 sm:px-8">
        {/* Edge fades - ink wash style vignette */}
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-beige/70 to-transparent sm:w-24 md:w-32 lg:w-40 xl:w-48" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-beige/70 to-transparent sm:w-24 md:w-32 lg:w-40 xl:w-48" />
        {/* Bottom fade - stronger for transition to next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-beige via-beige/80 to-transparent sm:h-48 md:h-56 lg:h-64" />
        {/* Top subtle fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-beige/40 to-transparent sm:h-24 md:h-32" />

        {/* Main content container */}
        <div className="relative flex flex-col items-center text-center">
          {/* Name - larger and more prominent */}
          <h1
            ref={nameRef}
            className="text-4xl font-light uppercase tracking-widest text-ink sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Anthony Chen
          </h1>

          {/* Decorative wavy brush stroke */}
          <svg
            ref={decorLineRef}
            width="60"
            height="8"
            viewBox="0 0 60 8"
            className="my-6 origin-center text-vermillion/60 sm:my-8"
          >
            <path
              d="M0 4 Q10 0 20 4 Q30 8 40 4 Q50 0 60 4"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Title */}
          <h2
            ref={titleRef}
            className="text-base font-medium tracking-wide text-brown/90 sm:text-lg md:text-xl"
          >
            Software Engineer
          </h2>

          {/* About text */}
          <p
            ref={aboutRef}
            className="mt-4 max-w-sm text-sm leading-relaxed text-brown/80 sm:mt-6 sm:max-w-md sm:text-base md:max-w-lg"
          >
            Building accessible, aesthetic, and adaptable solutions through
            thoughtful software engineering.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
