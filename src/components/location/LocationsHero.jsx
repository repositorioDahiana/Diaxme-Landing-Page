import heroBg from "../../assets/images/Fondo.jpg";

// ICONOS
import sedesIcon from "../../assets/Iconos/email.png";
import ciudadesIcon from "../../assets/Iconos/email.png";
import horarioIcon from "../../assets/Iconos/email.png";

function LocationsHero() {
  return (
    <section
      className="locations-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* OVERLAY */}
      <div className="locations-hero__overlay"></div>

      <div className="locations-hero__container">

        <div className="locations-hero__content">

          <h1 className="locations-hero__title">
            Nuestras
            <span className="text-gradient-blue"> Sedes</span>
          </h1>

          <p className="locations-hero__description">
            Estamos presentes en tres ciudades del Eje Cafetero con la mejor
            tecnología en imágenes diagnósticas y atención humanizada.
          </p>

          {/* STATS */}
          <div className="locations-hero__stats">

            {/* CARD 1 */}
            <div className="locations-hero__stat">

              <img
                src={sedesIcon}
                alt="Sedes"
              />

              <div className="locations-hero__text">

                <span className="locations-hero__label">
                  8 Sedes
                </span>

                <span className="locations-hero__desc">
                  Cobertura regional
                </span>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="locations-hero__stat">

              <img
                src={ciudadesIcon}
                alt="Ciudades"
              />

              <div className="locations-hero__text">

                <span className="locations-hero__label">
                  3 Ciudades
                </span>

                <span className="locations-hero__desc">
                  Presencia estratégica
                </span>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="locations-hero__stat">

              <img
                src={horarioIcon}
                alt="Atención"
              />

              <div className="locations-hero__text">

                <span className="locations-hero__label">
                  24/7 Atención
                </span>

                <span className="locations-hero__desc">
                  Servicio hospitalario
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LocationsHero;