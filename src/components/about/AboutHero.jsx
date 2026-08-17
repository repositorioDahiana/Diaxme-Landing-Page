import historiaBg from "../../assets/images/quienes.png";

import sedesIcon from "../../assets/Iconos/email.png";
import isoIcon from "../../assets/Iconos/email.png";
import pacientesIcon from "../../assets/Iconos/email.png";

function AboutHero() {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${historiaBg})` }}
    >
      <div className="about-hero__overlay"></div>

      <div className="about-hero__container">
        
        {/* CONTENIDO */}
        <div className="about-hero__content">
          <span className="about-hero__badge">
            Desde 2014 al servicio de la salud
          </span>

          <h1 className="about-hero__title">
            Quiénes <span className="text-gradient-blue">Somos</span>
          </h1>

          <p className="about-hero__description">
            Somos un centro médico especializado en imágenes diagnósticas de alta precisión. Combinamos tecnología de vanguardia, rigor científico y una atención cálida para brindar respuestas oportunas que cuidan lo más valioso: tu salud.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;