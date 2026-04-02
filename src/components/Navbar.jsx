import { Link } from "react-router-dom";
import "./Navbar.css";

import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setOpen(false); // 👈 закрываем меню
    }
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
  return (
    <nav className="navbar">

  {/* LEFT (DESKTOP) */}
  <div className="nav-left">
    <Link to="/#projects">Projects</Link>
    <Link to="/#skills">Skills</Link>
    <Link to="/#contact">Contact</Link>
  </div>

  {/* MOBILE MENU */}
  {open && (
    <div className="mobile-menu">
      <Link to="/#projects" onClick={() => setOpen(false)}>Projects</Link>
      <Link to="/#skills" onClick={() => setOpen(false)}>Skills</Link>
      <Link to="/#contact" onClick={() => setOpen(false)}>Contact</Link>
    </div>
  )}

  {/* RIGHT */}
    <div className={`nav-right ${open ? "open" : ""}`}>
      <a href="mailto:tatiana.noskova.arg@gmail.com" className="contact-link" >
      <MdEmail className="contact-icon" />
      tatiana.noskova.arg@gmail.com
      </a>

      <a
        href="https://wa.me/5491127971696"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
      >
        <FaWhatsapp className="contact-icon whatsapp-icon" />
      </a>

  {/*<button className="lang-switch">
    EN / ES
  </button> */}
    </div>

  {/* BURGER */}
    <div className="burger" onClick={() => setOpen(!open)}>
        ☰
    </div>

    </nav>
  );
}

export default Navbar;