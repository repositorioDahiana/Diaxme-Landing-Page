import heroBg from "../../assets/images/trabaje.png";

// 🔥 ICONOS
import vacantesIcon from "../../assets/Iconos/terminos.png";
import hojaVidaIcon from "../../assets/Iconos/enviar.png";

function CareersHero() {
  return (
    <section
      className="careers-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="careers-hero__overlay"></div>

      <div className="careers-hero__container">
        <div className="careers-hero__content">
          <h1 className="careers-hero__title">
            Trabaja <span className="text-gradient-brand">con Nosotros</span>
          </h1>

          <p className="careers-hero__description">
            En Diaxme creemos en el talento, la pasión y el
            compromiso. Sé parte de una institución líder en el sector salud,
            donde podrás crecer profesionalmente y aportar al bienestar de miles
            de personas.
          </p>

          {/* 🔥 BOTONES UNIFICADOS */}
          <div className="careers-hero__actions">

            <a href="#vacantes" className="btn-hero-action">
              <img src={vacantesIcon} alt="Vacantes" />
              Ver Vacantes
            </a>

            <a href="#postular" className="btn-hero-action">
              <img src={hojaVidaIcon} alt="Hoja de vida" />
              Enviar Hoja de Vida
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CareersHero;