import heroBg from "../../assets/images/Fondo.jpg";
import derechosIcon from "../../assets/Iconos/email.png";
import deberesIcon from "../../assets/Iconos/email.png";

function PatientRightsHero() {
  return (
    <section
      className="patient-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="patient-hero__overlay"></div>

      <div className="patient-hero__container">
        <div className="patient-hero__content">

          <h1 className="patient-hero__title">
            Derechos y <span className="text-gradient-blue">Deberes</span>
          </h1>

          <p className="patient-hero__description">
            Conoce los derechos que te corresponden como paciente y los deberes
            que debes cumplir en nuestra institución.
          </p>

          {/* STATS */}
          <div className="patient-hero__stats">

            {/* DERECHOS */}
            <a href="#derechos" className="patient-hero__stat">
              <img src={derechosIcon} alt="Derechos" />

              <span className="patient-hero__number">14</span>

              <div className="patient-hero__text">
                <span className="patient-hero__cards">Derechos</span>
                <span className="patient-hero__desc">
                  Garantizados por ley
                </span>
              </div>
            </a>

            {/* DEBERES */}
            <a href="#deberes" className="patient-hero__stat">
              <img src={deberesIcon} alt="Deberes" />

              <span className="patient-hero__number">9</span>

              <div className="patient-hero__text">
                <span className="patient-hero__cards">Deberes</span>
                <span className="patient-hero__desc">
                  Como usuario del sistema
                </span>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default PatientRightsHero;