import "./Home.css";

import photo from "../assets/photo.jpg";
import vetClinic from "../assets/vet-clinic-home.png";
import socksStore from "../assets/socks-store-home.png";
import recetas from "../assets/recetas-inicio.png";
import mobile from "../assets/mobile-1.jpg";
import htmlIcon from "../assets/icons/html5.svg";
import cssIcon from "../assets/icons/css3.svg";
import jsIcon from "../assets/icons/javascript.svg";
import reactIcon from "../assets/icons/react.svg";
import laravelIcon from "../assets/icons/laravel.svg";
import nodeJsIcon from "../assets/icons/nodejs.svg";
import mySqlIcon from "../assets/icons/mysql.svg";
import javaIcon from "../assets/icons/java.svg";
import gitIcon from "../assets/icons/git.svg";


import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <div className="home">
      <div className="container ">

        <section className="about">
          <div className="about-content">

            <img src={photo} className="photo" alt="Tatiana Noskova" />

            <div>
              <h1>Tatiana Noskova</h1>
              <h2>Backend-Focused Full-Stack Developer</h2>

              <p>I build reliable, well-structured applications with solid backend logic and clean interfaces.</p>
              <p>Background in business and client-facing roles.</p>
              <p>Based in Argentina.</p>
            </div>

          </div>
        </section>

        <section className="project-card">

          <div className="project-image">

            <img src={vetClinic} alt="Veterinary Clinic Website" />

            <div className="overlay">
              <Link to="/project/vet-clinic">View Project</Link>
              <a href="https://github.com/TatianaNoskova/Veterinaria">View Code</a>
            </div>

          </div>

          <h3>Veterinary Clinic Website</h3>

          <div className="tech">
            <span>Laravel</span>
            <span>MySQL</span>
          </div>

        </section>

        <section className="project-card">

          <div className="project-image">

            <img src={recetas} alt="Recipe Website" />

            <div className="overlay">
              <Link to="/project/recetas">View Project</Link>
              <a href="https://github.com/TatianaNoskova/RecipesWebsite">View Code</a>
            </div>

          </div>

          <h3>Recipe Sharing Platform</h3>

          <div className="tech">
            <span>PHP</span>
            <span>MySQL</span>
          </div>

        </section>

        <section className="project-card">

          <div className="project-image">

            <img src={socksStore} alt="Knitted Socks Store" />

            <div className="overlay">
              <Link to="/project/socks-store">View Project</Link>
              <a href="https://github.com/TatianaNoskova/MiniOnlineStore">View Code</a>
            </div>

          </div>

          <h3>Knitted Socks Store</h3>

          <div className="tech">
            <span>React / Express</span>
            <span>MySQL</span>
          </div>

        </section>


        <section className="project-card">

          <div className="project-image">

            <img src={mobile} alt="Russian Language Trainer" />

            <div className="overlay">
              <Link to="/project/russian-app">View Project</Link>
              <a href="https://github.com/TatianaNoskova/Russian-Language-Trainer">View Code</a>
            </div>

          </div>

          <h3>Russian Language Trainer</h3>
          <p>Mobile App</p>

          <div className="tech">
            <span>Java</span>
            <span>Android</span>
            <span>Firebase</span>
          </div>
        </section>

        <section id="skills" className="skills">
  <h3>Skills</h3>

  <div className="skills-grid">
    <div className="skill">
      <img src={htmlIcon} alt="HTML" />
      <span>HTML</span>
    </div>

    <div className="skill">
      <img src={cssIcon} alt="HTML" />
      <span>CSS</span>
    </div>

    <div className="skill">
      <img src={jsIcon} alt="HTML" />
      <span>JavaScript</span>
    </div>

    <div className="skill">
      <img src={reactIcon} alt="HTML" />
      <span>React</span>
    </div>

    <div className="skill">
      <img src={laravelIcon} alt="HTML" />
      <span>Laravel</span>
    </div>

    <div className="skill">
      <img src={nodeJsIcon} alt="HTML" />
      <span>Node.js</span>
    </div>

    <div className="skill">
      <img src={mySqlIcon} alt="HTML" />
      <span>MySQL</span>
    </div>

    <div className="skill">
      <img src={javaIcon} alt="HTML" />
      <span>Java</span>
    </div>

    <div className="skill">
      <img src={gitIcon} alt="HTML" />
      <span>Git</span>
    </div>
  </div>
</section>

      </div>
    </div>

      <Footer />

    </>
  );
}

export default Home;