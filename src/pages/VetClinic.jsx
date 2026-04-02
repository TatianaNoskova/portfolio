import "./VetClinic.css";
import { useState, useEffect } from "react";
import BackHome from "../components/BackHome";

import screen1 from "../assets/vet-clinic-home.png";
import screen2 from "../assets/vet-1.png";
import screen3 from "../assets/vet-2.png";
import screen4 from "../assets/vet-3.png";



function VetClinic() {

  const screens = [
    { src: screen1, title: "Dashboard" },
    { src: screen2, title: "Appointment Management" },
    { src: screen3, title: "Client Management" },
    { src: screen4, title: "Pet Medical Records" }
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

      <h1>Veterinary Clinic Management System</h1>

      <p className="project-description">
        Backend-focused system for managing veterinary clinic operations, including role-based access, appointment scheduling, and medical records handling. Designed with a relational data model and business logic to support real-world workflows.
      </p>

      {/* ⬇️ кнопка вниз (НЕ внутри p!) */}
      <a href="#screens" className="scroll-indicator">
        ↓
      </a>

      {/* CORE FUNCTIONALITY */}

      <h2>Core Functionality</h2>

      <ul className="features">
        <li>Role-based access control with three roles: Admin, Veterinarian, Client</li>
        <li>Appointment scheduling system with time slot management and conflict prevention</li>
        <li>Client–Pet relationships (many-to-many) with structured data handling</li>
        <li>Medical records management for tracking pet history and treatments</li>
        <li>Invoice generation and tracking for client services</li>
        <li>Admin dashboard for managing users, staff, and system data</li>
        <li>Full CRUD operations for managing clients, pets and medical records</li>
      </ul>

      {/* TECH STACK */}

      <h2>Tech Stack</h2>

      <div className="stack">
        <span>Laravel</span>
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
        <li>Handled overlapping appointments with validation logic</li>
        <li>Designed relational database (clients → pets → visits)</li>
        <li>Implemented admin dashboard for data management</li>
      </ul>

      {/* LINKS */}

      <div className="project-links">

        <a href="https://github.com/TatianaNoskova/Veterinaria" target="_blank">
          GitHub
        </a>

        <a href="/docs/vet-clinic-system.pdf" download className="btn">
        Download Documentation (PDF)
        </a>

      </div>

    </div>
  );
}

export default VetClinic;