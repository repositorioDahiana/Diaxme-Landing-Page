import historiaBg from "../../assets/images/Fondo.jpg";

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
            ?? Texto
          </p>
        </div>

        {/* STATS */}
        <div className="about-hero__stats">

          {/* Card 1 */}
          <article className="about-hero__statCard">
            <img src={sedesIcon} className="about-hero__statIcon" />

            <div className="about-hero__statText">
              <strong>+2 sedes</strong>
              <span>en Colombia</span>
            </div>
          </article>

          {/* Card 2 */}
          <article className="about-hero__statCard">
            <img src={isoIcon} className="about-hero__statIcon" />

            <div className="about-hero__statText">
              <strong>ISO ?</strong>
              <span>Certificados</span>
            </div>
          </article>

          {/* Card 3 */}
          <article className="about-hero__statCard">
            <img src={pacientesIcon} className="about-hero__statIcon" />

            <div className="about-hero__statText">
              <strong>+300K</strong>
              <span>Pacientes</span>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default AboutHero;