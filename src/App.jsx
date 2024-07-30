import Header from "./components/Header";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      wheelMultiplier: 0.8,
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  ScrollToTop();

  const location = useLocation();

  return (
    <>
      <Header />
      <Outlet />
      {location.pathname !== "/contact" && <Footer />}
    </>
  );
}

export default App;
