import { useLayoutEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import gsap from "gsap";
import Home from "./components/pages/Home";
import Preloader from "./components/organisms/Preloader";

export default function App() {
  // Creates a reference to the root level element, for scoping
  const comp = useRef(null);

  // State to keep track of the loader.
  const [loaderFinished, setLoaderFinished] = useState(false);

  // State to keep track of the timeline.
  const [timeline, setTimeline] = useState(null);

  // Fires after all the DOM mutations have been done.
  // The function passed into useLayoutEffect will run once after the component mounts and once again after it unmounts due to the empty dependency array.
  useLayoutEffect(() => {
    // Record all gsap animations that are setup during the context execution for easy cleanup.
    // comp is used here for scoping, so that all the animations we create only affect children of the comp.
    let ctx = gsap.context(() => {
      // Gsap timeline helps sequence complex animations without dealing with animation timings.
      const tl = gsap.timeline({
        onComplete: () =>
          // When the timeline is complete, set the loaderFinished state to true.
          setLoaderFinished(true),
      });

      // Master timeline so animations can be within their own context.
      setTimeline(tl);
    }, comp);

    // When the effect function is about to be unmounted or cleaned up, revert all animations. (to prevent memory leaks, etc.)
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              loaderFinished ? <Home /> : <Preloader timeline={timeline} />
            }
          />
          <Route
            path="/Preloader"
            element={<Preloader timeline={timeline} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}
