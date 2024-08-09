import { useLayoutEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import gsap from "gsap";
import Home from "./components/pages/Home";
import { progressAnimation, exitAnimation, heroAnimation } from "./components/animations/animations";

import Preloader from "./components/organisms/Preloader";

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

      // Add the progress animation to the timeline.
      tl.add(progressAnimation);


    }, comp);

    // When the effect function is about to be unmounted or cleaned up, revert all animations. (to prevent memory leaks, etc.)
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Preloader" element={<Preloader />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}
