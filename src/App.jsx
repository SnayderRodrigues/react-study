import Header from "./components/Header";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    //moved MainContent to pages/home/HomePage.jsx
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
