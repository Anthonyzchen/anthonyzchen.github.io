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
