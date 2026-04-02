import { Link } from "react-router-dom";
import "./BackHome.css";

function BackHome() {
  return (
    <Link to="/" className="back-home">
      ← Home
    </Link>
  );
}

export default BackHome;