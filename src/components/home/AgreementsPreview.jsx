import { Link } from "react-router-dom";
import aliado1 from "../../assets/images/cofrem.png"
import aliado2 from "../../assets/images/LogoMedPlus.webp"
import aliado3 from "../../assets/images/LogoPositiva.webp"
import aliado4 from "../../assets/images/LogoUValle.png"
import aliado5 from "../../assets/images/LogoColmena.webp"
import aliado6 from "../../assets/images/LogoCoomeva.webp"
import aliado7 from "../../assets/images/LogoSenderos.png"
import iconPlaceholder from "../../assets/Iconos/email.png";

function AgreementsPreview() {
  // Lista única sin clasificar
  const allies = [
    { id: 1, name: "cofrem", icon: aliado1 },
    { id: 2, name: "MedPlus", icon: aliado2 },
    { id: 3, name: "Positiva", icon: aliado3},
    { id: 4, name: "Universidad de los Llanos", icon: aliado4 },
    { id: 5, name: "Colmena Seguros", icon: aliado5 },
    { id: 6, name: "Coomeva Medicina Prepagada", icon: aliado6 },
    { id: 7, name: "Senderos Preferencial", icon: aliado7 },
  ];

  return (
    <section className="agreements-preview">
      <div className="agreements-preview__container">
        <div className="agreements-preview__header">
          <h2 className="agreements-preview__title">
            Nuestros <span>Convenios</span>
          </h2>
          <p className="agreements-preview__description">
            Trabajamos con las principales aseguradoras, entidades y empresas del país para brindarte un servicio accesible y de calidad.
          </p>
          <div className="agreements-preview__line"></div>
        </div>

        {/* Carrusel horizontal único */}
        <div className="agreements-preview__marquee-container">
          <div className="agreements-preview__marquee">
            {/* Duplicamos la lista para la animación continua */}
            {[...allies, ...allies].map((ally, index) => (
              <div key={`${ally.id}-${index}`} className="agreements-preview__ally">
                <img src={ally.icon} alt={ally.name} className="agreements-preview__ally-icon" />
                <span className="agreements-preview__ally-name">{ally.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="agreements-preview__actions">
          <Link to="/allies" className="btn btn-primary-brand">
            Ver todos los convenios
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AgreementsPreview;