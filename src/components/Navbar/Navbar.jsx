import { Link } from "react-router-dom";
import "./Navbar.scss";
import heroLogo from "../../assets/logo/logo-website.png";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/">
        <img src={heroLogo} alt="Logo Titan Gym" />
      </Link>

      {/* Menu desktop */}
      <ul className="desktop-menu">
        <li>
          <a href="#about">À propos</a>
        </li>

        <li>
          <a href="#pricing">Tarifs</a>
        </li>

        <li>
          <a href="#coaches">Coachs</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Link to="/contact" className="cta-button">
        Essai gratuit
      </Link>

      {/* Bouton hamburger */}
      <button
        className="menu-button"
        title={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Menu mobile */}
      <div className={`menu-container ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#about">À propos</a>
          </li>

          <li>
            <a href="#pricing">Tarifs</a>
          </li>

          <li>
            <a href="#coaches">Coachs</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <Link to="/contact" className="cta-button">
          Essai gratuit
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
