import "./VetClinic.css";
import BackHome from "../components/BackHome";

import recetas from "../assets/recetas-inicio.png";

function RecipeProject() {
  return (
    <div className="project-page recipes">

      <BackHome />

      {/* TITLE */}
      <h1>Recipe Sharing Platform</h1>

      {/* SHORT DESCRIPTION */}
      <p className="project-short">
        A simple web application for sharing and managing cooking recipes.
      </p>

      {/* SINGLE IMAGE */}
      <div className="single-image">
        <img src={recetas} alt="Recipe Sharing Platform" />
      </div>

      {/* DESCRIPTION */}
      <h2>About the Project</h2>

      <p className="project-description">
        This project was created as my first experience building a CRUD application.
        It allows users to browse recipes, while registered users can create and manage their own content.
        An admin role has full control over all recipes.
        The focus was on understanding data structure, user roles and basic backend logic.
      </p>

      {/* TECH STACK */}
      <h2>Tech Stack</h2>

      <div className="stack">
        <span>PHP</span>
        <span>MySQL</span>
      </div>

      {/* FEATURES */}
      <h2>Core Functionality</h2>

      <ul className="features">
        <li>Full CRUD operations for recipes</li>
        <li>Role-based access (admin and users)</li>
        
      </ul>

      {/* LINKS */}
      <div className="project-links">

        <a href="https://github.com/TatianaNoskova/RecipesWebsite">
          GitHub
        </a>


      </div>

    </div>
  );
}

export default RecipeProject;