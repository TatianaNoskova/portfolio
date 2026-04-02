import "./styles/global.css";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import VetClinic from "./pages/VetClinic";
import SocksStore from "./pages/SocksStore";
import RussianApp from "./pages/RussianApp";
import RecipeProject from "./pages/Recetas";

function App() {
  const location = useLocation();

  useEffect(() => {
    // ⛳ если есть якорь
    if (location.hash) {
      const el = document.querySelector(location.hash);

      if (el) {
        const yOffset = -120;
        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
    }

    // 🔥 если якоря нет — всегда вверх
    window.scrollTo(0, 0);

  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/vet-clinic" element={<VetClinic />} />
        <Route path="/project/recetas" element={<RecipeProject />} />
        <Route path="/project/socks-store" element={<SocksStore />} />
        <Route path="/project/russian-app" element={<RussianApp />} />
      </Routes>

    
    </>
  );
}

export default App;