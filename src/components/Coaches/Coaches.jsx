import "./Coaches.scss";

import coach1 from "../../assets/images/coach1.jpg";
import coach2 from "../../assets/images/coach2.jpg";
import coach3 from "../../assets/images/coach3.jpg";

const Coaches = () => {
  const coaches = [
    {
      name: "Thomas Morel",
      role: "Coach sportif & préparateur physique",
      image: coach1,
      specialty: [
        "prise de masse",
        "force",
        "préparation physique",
        "accompagnement personnalisé",
      ],
      description:
        "Spécialisé dans la préparation physique et le développement de la force, Thomas accompagne chaque adhérent dans la construction d'un programme adapté à ses objectifs.",
    },
    {
      name: "Sarah Martin",
      role: "Coach fitness & cardio",
      image: coach2,
      specialty: ["perte de poids", "cardio", "HIIT", "cours collectifs"],
      description:
        "Sarah vous accompagne dans vos séances cardio et fitness avec des entraînements dynamiques conçus pour progresser à votre rythme.",
    },
    {
      name: "Lucas Bernard",
      role: "Coach mobilité & remise en forme",
      image: coach3,
      specialty: [
        "mobilité",
        "récupération",
        "remise en forme",
        "prévention des blessures",
      ],
      description:
        "Avec une approche centrée sur la mobilité et la récupération, Lucas vous aide à améliorer vos mouvements et à construire une pratique sportive durable.",
    },
  ];
  return (
    <section className="coaches" id="coaches">
      <h1>Nos coaches</h1>
      <div className="coaches-array">
        {coaches.map((coach) => (
          <div className="coach">
            <img src={coach.image} alt={coach.name} />
            <div className="content">
              <h3>{coach.name}</h3>
              <p className="role">{coach.role}</p>
              <div className="specialities">
                <h4>Spécialités : </h4>
                <ul>
                  {coach.specialty.map((specialty) => (
                    <li>{specialty}</li>
                  ))}
                </ul>
              </div>
              <p className="description">{coach.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coaches;
