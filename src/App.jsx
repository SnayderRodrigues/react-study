import Header from "./components/Header";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      wheelMultiplier: 0.8,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      {location.pathname !== "/contact" && <Footer />}
    </>
  );
}

export default App;
