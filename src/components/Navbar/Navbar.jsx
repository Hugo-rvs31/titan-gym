import { Link } from "react-router-dom";
import "./Navbar.scss";
import heroLogo from "../../assets/logo/logo-website.png";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={heroLogo} alt="Logo Titan Gym" />
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
