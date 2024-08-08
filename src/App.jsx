import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function App() {
  // Creates a reference to the root level element, for scoping
  const comp = useRef(null);

  // Fires after all the DOM mutations have been done.
  // The function passed into useLayoutEffect will run once after the component mounts and once again after it unmounts due to the empty dependency array.
  useLayoutEffect(() => {
    // Record all gsap animations that are setup during the context execution for easy cleanup.
    // comp is used here for scoping, so that all the animations we create only affect children of the comp.
    let ctx = gsap.context(() => {
      // Gsap timeline helps sequence complex animations without dealing with animation timings.
      const tl = gsap.timeline();
      tl.from("#preloader", {
        yPercent: "100",
        duration: 1.3,
        delay: 0.3,
      })
        .from("#title-1", {
          opacity: "0",
          y: "+=30",
        })
        .from("#title-2", {
          opacity: "0",
          y: "+=30",
        })
        .to("#title-1", {
          opacity: "0",
          y: "-=30",
          delay: 0.3,
        })
        .to("#title-2", {
          opacity: "0",
          y: "-=30",
          delay: 0.3,
        })
        .to("#preloader", {
          yPercent: "-100",
          duration: 1.3,
          delay: 0.3,
        })
        .from("#welcome", {
          opacity: "0",
          duration: 0.5,
        });
    }, comp);

    // When the effect function is about to be unmounted or cleaned up, revert all animations. (to prevent memory leaks, etc.)
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="preloader"
        className="absolute left-0 top-0 z-10 flex h-screen w-full flex-col place-items-center gap-10 bg-gray-50 p-10 font-KoHo tracking-tight"
      >
        <h1 className="text-9xl" id="title-1">
          陳兆偉
        </h1>
        {/* <h1 className="text-9xl" id="title-1">
          Software Engineer
        </h1> */}
        <h1 className="text-xs" id="title-2">
          Welcome to my page
        </h1>
      </div>
      <div className="flex h-screen place-items-center justify-center bg-gray-950">
        <div
          id="welcome"
          className="font-KoHo text-9xl font-bold text-gray-100"
        >
          Welcome.
        </div>
      </div>
    </div>
  );
}
