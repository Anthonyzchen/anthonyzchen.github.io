import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Home from "./pages/Home";
import PageLayout from "./pages/PageLayout";
import Projects from "./components/About/Projects";
import ExperienceTimeline from "./pages/ExperienceTimeline";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<ExperienceTimeline />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
