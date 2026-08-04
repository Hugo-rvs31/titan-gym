import "./Hero.scss";

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
        <h1>DEVENEZ PLUS FORT QUE VOUS HIER</h1>

        <p>Le meilleur accompagnement pour atteindre vos objectifs sportifs.</p>

        <button>Essai gratuit</button>
      </div>
    </section>
  );
};

export default Hero;
