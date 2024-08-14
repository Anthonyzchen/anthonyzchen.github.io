import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageLayout from "./pages/PageLayout";

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/preloader" element={<Preloader />} /> */}
            {/* <Route path="/nav" element={<Navbar />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
