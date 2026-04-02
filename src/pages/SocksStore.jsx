import "./VetClinic.css";
import { useState, useEffect } from "react";
import BackHome from "../components/BackHome";

import screen1 from "../assets/socks-store-home.png";
import screen2 from "../assets/socks-1.png";
import screen3 from "../assets/socks-2.png";
import screen4 from "../assets/socks-3.png";



function SocksStore() {

  const screens = [
    { src: screen1, title: "Home page" },
    { src: screen2, title: "Admin's dashboard" },
    { src: screen3, title: "Product catalog" },
    { src: screen4, title: "Client's cart" }
  ];

  const [activeImage, setActiveImage] = useState(screens[0]);

  const currentIndex = screens.findIndex(
    (screen) => screen.src === activeImage.src
  );

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % screens.length;
    setActiveImage(screens[nextIndex]);
  };

  const goPrev = () => {
    const prevIndex =
      (currentIndex - 1 + screens.length) % screens.length;
    setActiveImage(screens[prevIndex]);
  };

  // ⬇️ ВОТ ЗДЕСЬ useEffect (внутри компонента!)
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <div className="project-page">

      <BackHome />

      <h1>Socks Store – E-commerce Web Application</h1>

      <p className="project-description">
              A small e-commerce application for a handmade knitted socks store, designed to simulate a real shopping experience. Combines clean UI with structured backend logic, focusing on usability and intuitive user flows.
      </p>

      {/* ⬇️ кнопка вниз (НЕ внутри p!) */}
      <a href="#screens" className="scroll-indicator">
        ↓
      </a>

      {/* CORE FUNCTIONALITY */}

      <h2>Core Functionality</h2>

      <ul className="features">
        <li>Role-based access: separate functionality for users and admin</li>
        <li>Product catalog with dynamic rendering</li>
        <li>Shopping cart with real-time state updates</li>
        <li>Add and remove products from cart</li>
        <li>Admin dashboard for users and product management</li>
        <li>CRUD operations for products and users</li>
        <li>Component-based UI architecture</li>
        <li>Client-side routing with React Router</li>
      </ul>

      {/* TECH STACK */}

      <h2>Tech Stack</h2>

      <div className="stack">
        <span>React / Express</span>
        <span>MySQL</span>
      </div>

      {/* SCREENS */}

      <h2 id="screens">Screens</h2>

      <div className="gallery-viewer">

        <div className="image-wrapper">

          <button className="nav-btn left" onClick={goPrev}>
            ←
          </button>

          <img
            src={activeImage.src}
            className="main-image"
            alt="Project screen"
          />

          <button className="nav-btn right" onClick={goNext}>
            →
          </button>

        </div>

        <p className="image-caption">{activeImage.title}</p>

        <div className="thumbnails">
          {screens.map((screen, index) => (
            <div key={index} className="thumb-wrapper">

              <img
                src={screen.src}
                alt={screen.title}
                className={activeImage.src === screen.src ? "active" : ""}
                onClick={() => setActiveImage(screen)}
              />

              <span>{screen.title}</span>

            </div>
          ))}
        </div>

      </div>

      {/* CHALLENGES */}

      <h2>Challenges & Solutions</h2>

      <ul className="features">
        <li>Implemented role-based access to separate user and admin functionality</li>
        <li>Solved cart state management across components</li> 
        <li>Connected frontend with backend using API requests</li>
        <li>Designed database structure for storing products and orders</li>
        <li>Improved user experience with dynamic UI updates</li>
      </ul>

      {/* LINKS */}

      <div className="project-links">

        <a href="https://github.com/TatianaNoskova/MiniOnlineStore" target="_blank">
          GitHub
        </a>

        <a href="/docs/socks-mini-store.pdf" download className="btn">
        Download Documentation (PDF)
        </a>

      </div>

    </div>
  );
}

export default SocksStore;