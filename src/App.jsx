import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Home from "./pages/Home";
import About from "./pages/About";
import PageLayout from "./pages/PageLayout";
import Projects from "./components/Projects/Projects";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
