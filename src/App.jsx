import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Home from "./pages/Home";
import PageLayout from "./pages/PageLayout";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Configure ScrollTrigger to ignore mobile resize events (address bar show/hide)
ScrollTrigger.config({ ignoreMobileResize: true });

// Force scroll to top on page load/refresh
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
