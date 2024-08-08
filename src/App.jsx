import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Footer from "./components/organisms/Footer";
import Preloader from "./components/organisms/Preloader";
import Home from "./components/pages/Home";

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
      tl.from("#title-1", {
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
      <Home />
    </div>
  );
}
