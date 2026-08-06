import "./About.scss";

import aboutImage from "../../assets/images/about.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-text">
        <h2>À PROPOS DE TITAN GYM</h2>
        <p>
          Chez Titan Gym, nous accompagnons chaque adhérent dans sa progression
          grâce à des équipements modernes, des coachs qualifiés et une ambiance
          motivante.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="Salle de sport Titan Gym" />
      </div>
    </div>
  );
};

export default About;
