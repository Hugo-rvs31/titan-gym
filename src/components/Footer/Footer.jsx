import "./Footer.scss";
import { Link } from "react-router-dom";
import heroLogo from "../../assets/logo/logo-website.png";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="big-part">
        <div className="first-part">
          <div className="up">
            <img src={heroLogo} alt="Logo Titan Gym" />
            <h1>Titan Gym</h1>
          </div>
          <div className="down">
            <p>Dépassez vos limites.</p>
            <p>Repoussez vos frontières.</p>
          </div>
        </div>
        <div className="second-part">
          <div className="navigation-links">
            <a href="#about">À propos</a>
            <a href="#pricing">Tarifs</a>
            <a href="#coaches">Coachs</a>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="third-part">
          <div className="socials">
            <FaInstagram id="iconSocials" />
            <FaFacebook id="iconSocials" />
            <FaTiktok id="iconSocials" />
          </div>
        </div>
      </div>
      <div className="mentions">
        <h3>© 2026 Titan Gym</h3>
        <h3>Mentions légales </h3>
      </div>
    </footer>
  );
};

export default Footer;
