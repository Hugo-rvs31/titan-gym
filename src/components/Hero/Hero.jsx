import "./Hero.scss";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-content">
        <div className="hero-text">
          <h1>DEVENEZ PLUS FORT QUE VOUS HIER</h1>
          <p>
            Le meilleur accompagnement pour atteindre vos objectifs sportifs.
          </p>
        </div>
        <div className="hero-actions">
          <Link to="/contact" className="cta-button">
            Essai gratuit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
