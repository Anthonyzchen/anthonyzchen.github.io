import Footer from "../components/Footer/Footer";
import Logo from "../components/Logo/Logo";
import Preloader from "../components/Preloader/Preloader";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="bg-beige font-light text-brown">
      <Preloader />
      <Logo />
      <Outlet />
      <Footer />
    </div>
  );
};
export default PageLayout;
