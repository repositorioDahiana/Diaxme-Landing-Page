import heroBg from "../../assets/images/sedes.jpg";

// ICONOS
import sedesIcon from "../../assets/Iconos/hospital.png";
import ciudadesIcon from "../../assets/Iconos/ciudad.png";
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
            Encuentra tu sede Diaxme más cercana y accede a servicios de imágenes diagnósticas con la mejor tecnología y atención preferencial.
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
                  2 Sedes
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
                  2 Ciudades
                </span>

                <span className="locations-hero__desc">
                  Presencia estratégica
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