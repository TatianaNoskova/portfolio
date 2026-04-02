import "./Footer.css";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <p>© 2026 Tatiana Noskova</p>

        <div className="footer-links">
          {/* Email */}
          <a href="mailto:tatiana.noskova.arg@gmail.com" className="footer-link">
            <MdEmail className="footer-icon" />
            tatiana.noskova.arg@gmail.com
          </a>

          {/* WhatsApp с видимым номером */}
          <a href="https://wa.me/5491127971696" className="footer-link">
            <FaWhatsapp className="footer-icon" />
            +54 9 11 27671696
          </a>

          {/* GitHub */}
          <a href="https://github.com/TatianaNoskova/" className="footer-link">
            <FaGithub className="footer-icon" />
            GitHub
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/tatiana-noskova-aba8333b5/" className="footer-link">
            <FaLinkedin className="footer-icon" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;