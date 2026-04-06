import "./VetClinic.css";
import { useState, useEffect } from "react";
import BackHome from "../components/BackHome";

import screen1 from "../assets/mobile-1.jpg";
import screen2 from "../assets/mobile-2.jpg";
import screen3 from "../assets/mobile-3.jpg";
import screen4 from "../assets/mobile-4.jpg";

function RussianApp() {

  const screens = [
    { src: screen1, title: "Main screens overview" },
    { src: screen2, title: "Vocabulary training" },
    { src: screen3, title: "Configuration" },
    { src: screen4, title: "Responsive Design (Mobile View)" }
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

      {/* TITLE */}
      <h1>Russian Trainer – Android App</h1>

      {/* SHORT DESCRIPTION (optional) */}
      <p className="project-short">
      A mobile application for Spanish speakers to learn Russian through translation, quizzes and interactive vocabulary practice.
      </p>

      {/* 🔥 СКРИНЫ СРАЗУ */}
      <div className="gallery-viewer">

        <div className="image-wrapper">

          <button className="nav-btn left" onClick={goPrev}>
            ←
          </button>

          <img
            src={activeImage.src}
            className="main-image"
            alt="App screen"
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

      {/* DESCRIPTION */}
      <h2>About the Project</h2>

      <p className="project-description">
        This Android application was built to help Spanish-speaking users learn Russian vocabulary in an interactive way.
        It integrates an external translation API and allows users to save words, create custom examples and track their learning.
        A key feature is a quiz based on handwritten (cursive) Russian words — a challenging and engaging way to learn real-world writing.
        The project focuses on combining practical language tools with user data management and real-time interaction.
      </p>

      {/* TECH STACK */}
      <h2>Tech Stack</h2>

      <div className="stack">
        <span>Java</span>
        <span>Android SDK</span>
        <span>Firebase Auth</span>
        <span>Firestore</span>
        <span>External API</span>
      </div>

      {/* FEATURES */}
      <h2>Core Functionality</h2>

      <ul className="features">
        <li>Translation using external API</li>
        <li>Full CRUD operations for words and example sentences</li>
        <li>User authentication with Firebase</li>
        <li>Saving words and favorites in Firestore</li>
        <li>Quiz based on handwritten (cursive) Russian words</li>
        <li>Text-to-speech pronunciation</li>
        <li>Responsive layout with screen rotation support</li>
      </ul>

      {/* LINKS */}
      <div className="project-links">

        <a href="https://github.com/TatianaNoskova/Russian-Language-Trainer">
          GitHub
        </a>

      </div>

    </div>
  );
}

export default RussianApp;