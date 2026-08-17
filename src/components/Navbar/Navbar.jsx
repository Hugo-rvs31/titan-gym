import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import heroLogo from "../../assets/logo/logo-website.png";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <nav className={isContactPage ? "contact-navbar" : ""}>
      <Link to="/">
        <img src={heroLogo} alt="Logo Titan Gym" />
      </Link>

      {!isContactPage && (
        <>
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
              <Link to="/programs">Nos programmes</Link>
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
                <a href="/#about" onClick={() => setMenuOpen(false)}>
                  À propos
                </a>
              </li>

              <li>
                <a href="/#pricing" onClick={() => setMenuOpen(false)}>
                  Tarifs
                </a>
              </li>

              <li>
                <a href="/#coaches" onClick={() => setMenuOpen(false)}>
                  Coachs
                </a>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <Link to="/contact" className="cta-button">
              Essai gratuit
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
