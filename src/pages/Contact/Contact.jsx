import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="introduction">
        <h2>Une question ? Parlons-en.</h2>
        <p>
          Notre équipe est disponible pour répondre à vos questions, vous
          renseigner sur nos abonnements ou vous accompagner dans votre première
          visite.
        </p>
      </div>
      <div className="informations">
        <h2>Nos coordonnées</h2>
        <ul>
          <li>
            <h3>Adresse : </h3>
            <p>24 rue de la Force, 31000 Toulouse</p>
          </li>
          <li>
            <h3>Téléphone : </h3>
            <p>05 61 00 00 00</p>
          </li>
          <li>
            <h3>Email : </h3>
            <p>contact@titangym.fr</p>
          </li>
        </ul>
      </div>
      <div className="horaires">
        <h2>Nos horaires</h2>
        <ul>
          <li>Lundi – Vendredi : 6h00 – 22h00</li>
          <li>Samedi : 8h00 – 20h00</li>
          <li>Dimanche : 9h00 – 18h00</li>
        </ul>
      </div>
      <div className="formulaire">
        <h2>Nous écrire</h2>
        <form action="">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <select id="subject" name="subject">
              <option value="">Choisissez un sujet</option>
              <option value="trial">Séance d'essai</option>
              <option value="pricing">Tarifs et abonnements</option>
              <option value="coaching">Coaching</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Écrivez votre message..."
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
