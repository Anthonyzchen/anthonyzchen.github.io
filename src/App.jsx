import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Preloader from "./components/organisms/Preloader";
import Navbar from "./components/organisms/Navbar";

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preloader" element={<Preloader />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </main>
  );
}
