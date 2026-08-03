import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h2>TITAN GYM</h2>
      </Link>

      <ul>
        <li>À propos</li>
        <li>Tarifs</li>
        <li>Coachs</li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Link to="/contact" className="cta-button">
        Essai gratuit
      </Link>
    </nav>
  );
};

export default Navbar;
