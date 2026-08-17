import React from "react";
import { useState } from "react";
import "./Programs.scss";

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      name: "Prise de masse",
      icon: "💪",
      level: "Intermédiaire",
      objective: "Prendre du muscle",
      duration: "12 semaines",
      description:
        "Développez votre masse musculaire grâce à un programme structuré combinant exercices de force, progression des charges et récupération. Chaque séance est pensée pour stimuler la croissance musculaire tout en vous permettant de progresser durablement.",
    },

    {
      name: "Perte de poids",
      icon: "🔥",
      level: "Tous niveaux",
      objective: "Perdre du poids",
      duration: "8 semaines",
      description:
        "Brûlez des calories, améliorez votre condition physique et adoptez progressivement de meilleures habitudes grâce à un programme combinant renforcement musculaire et travail cardiovasculaire. L'objectif est de progresser à votre rythme et de construire des résultats durables.",
    },

    {
      name: "Force",
      icon: "🏋️",
      level: "Avancé",
      objective: "Gagner en force",
      duration: "16 semaines",
      description:
        "Repoussez vos limites et développez votre force grâce à un programme basé sur les mouvements fondamentaux et une progression régulière des charges. Chaque entraînement vise à améliorer vos performances tout en travaillant votre technique et votre maîtrise des mouvements.",
    },

    {
      name: "HIIT & Cardio",
      icon: "⚡",
      level: "Intermédiaire",
      objective: "Améliorer mon cardio",
      duration: "10 semaines",
      description:
        "Alternez des périodes d'effort intense et de récupération pour améliorer votre endurance, votre explosivité et vos capacités cardiovasculaires. Des séances dynamiques et variées pour vous challenger et maintenir une intensité élevée.",
    },

    {
      name: "Remise en forme",
      icon: "🏃",
      level: "Débutant",
      objective: "Me remettre en forme",
      duration: "8 semaines",
      description:
        "Reprenez progressivement l'entraînement avec des séances accessibles et adaptées à votre niveau. Travaillez votre mobilité, votre endurance et votre force tout en retrouvant progressivement confiance en vos capacités physiques.",
    },

    {
      name: "Mobilité & Bien-être",
      icon: "🧘",
      level: "Tous niveaux",
      objective: "Améliorer ma mobilité",
      duration: "6 semaines",
      description:
        "Améliorez votre mobilité, votre souplesse et votre récupération grâce à des séances axées sur le mouvement, le contrôle du corps et la relaxation. Un programme idéal pour prendre soin de votre corps et améliorer votre confort au quotidien.",
    },
  ];
  return (
    <div className="programs">
      <div className="hero">
        <h1>NOS PROGRAMMES</h1>
        <p>
          Un programme adapté à chaque objectif.Que vous souhaitiez gagner en
          force, développer votre musculature ou améliorer votre condition
          physique, trouvez l'accompagnement qui vous correspond.
        </p>
      </div>
      <div className="presentation">
        <h2>Trouvez le programme qui vous correspond</h2>
        <p>
          Chaque objectif demande une approche différente. Nos programmes
          combinent entraînement, progression et accompagnement pour vous aider
          à avancer durablement, quel que soit votre niveau.
        </p>
      </div>
      <div className="programs-map">
        <div className="programs-array">
          {programs.map((program) => (
            <div className="program" key={program.name}>
              <h3>{program.name}</h3>
              <div className="icon">{program.icon}</div>
              <h4>{program.level}</h4>
              <p className="duration">{program.duration}</p>
              <p className="description">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="objectives">
        <h2>Quel est votre objectif ?</h2>

        <div className="objectives-list">
          <button onClick={() => setSelectedProgram(programs[0])}>
            💪 Prendre du muscle
          </button>

          <button onClick={() => setSelectedProgram(programs[1])}>
            🔥 Perdre du poids
          </button>

          <button onClick={() => setSelectedProgram(programs[2])}>
            🏋️ Gagner en force
          </button>

          <button onClick={() => setSelectedProgram(programs[3])}>
            ⚡ Améliorer mon cardio
          </button>

          <button onClick={() => setSelectedProgram(programs[4])}>
            🏃 Me remettre en forme
          </button>

          <button onClick={() => setSelectedProgram(programs[5])}>
            🧘 Améliorer ma mobilité
          </button>
        </div>
        {selectedProgram && (
          <div className="selected-program">
            <h3>{selectedProgram.name}</h3>
            <p>{selectedProgram.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;
