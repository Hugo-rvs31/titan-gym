import "./Pricing.scss";

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <h2>Nos tarifs</h2>

      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Essentiel</h3>
          <p className="price">29€/mois</p>
          <p>Accès illimité à la salle de musculation et à l'espace cardio.</p>
        </div>

        <div className="pricing-card">
          <h3>Performance</h3>
          <p className="price">49€/mois</p>
          <p>
            Accès à tous les équipements, aux cours collectifs et à un bilan
            personnalisé.
          </p>
        </div>

        <div className="pricing-card">
          <h3>Premium</h3>
          <p className="price">79€/mois</p>
          <p>
            Coaching personnalisé, suivi nutritionnel et accès à toutes les
            activités de la salle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
