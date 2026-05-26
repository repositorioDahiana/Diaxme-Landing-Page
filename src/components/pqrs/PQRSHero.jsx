import heroBg from "../../assets/images/Fondo.jpg";
import tiempoIcon from "../../assets/Iconos/email.png";
import privacidadIcon from "../../assets/Iconos/email.png";
import soporteIcon from "../../assets/Iconos/email.png";

function PQRSHero() {
  return (
    <section
      className="pqrs-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* OVERLAY */}
      <div className="pqrs-hero__overlay"></div>

      <div className="pqrs-hero__container">

        <div className="pqrs-hero__content">

          <h1 className="pqrs-hero__title">
            Peticiones, Quejas,
            <span className="text-gradient-blue"> Reclamos y Sugerencias</span>
          </h1>

          <p className="pqrs-hero__description">
            Tu opinión nos importa. Cuéntanos tu experiencia y te responderemos
            en el menor tiempo posible. Estamos comprometidos con mejorar cada
            día.
          </p>

          {/* STATS */}
          <div className="pqrs-hero__stats">

            {/* CARD 1 */}
            <div className="pqrs-hero__stat">

              <img
                src={tiempoIcon}
                alt="Respuesta en 15 días"
              />

              <div className="pqrs-hero__text">
                <span className="pqrs-hero__label">
                  Respuesta en 15 días
                </span>

                <span className="pqrs-hero__desc">
                  Término legal establecido
                </span>
              </div>

            </div>

            {/* CARD 2 */}
            <div className="pqrs-hero__stat">

              <img
                src={privacidadIcon}
                alt="Confidencialidad total"
              />

              <div className="pqrs-hero__text">
                <span className="pqrs-hero__label">
                  Confidencialidad total
                </span>

                <span className="pqrs-hero__desc">
                  Protección de datos garantizada
                </span>
              </div>

            </div>

            {/* CARD 3 */}
            <div className="pqrs-hero__stat">

              <img
                src={soporteIcon}
                alt="Canal disponible 24/7"
              />

              <div className="pqrs-hero__text">
                <span className="pqrs-hero__label">
                  Canal disponible 24/7
                </span>

                <span className="pqrs-hero__desc">
                  Envía tu PQRS cuando lo necesites
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PQRSHero;