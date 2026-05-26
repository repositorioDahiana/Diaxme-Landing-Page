import heroBg from "../../assets/images/Fondo.jpg";
import controlIcon from "../../assets/Iconos/email.png";
import comunidadIcon from "../../assets/Iconos/email.png";
import capacitacionIcon from "../../assets/Iconos/email.png";

function PpssHero() {
  return (
    <section
      className="ppss-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="ppss-hero__overlay"></div>

      <div className="ppss-hero__container">
        <div className="ppss-hero__content">

          <h1 className="ppss-hero__title">
              Política de Participación {" "}
            <span className="text-gradient-blue">
              Social en Salud
            </span>
          </h1>

          <p className="ppss-hero__description">
            Conoce los ejes de nuestra Política Pública de Salud y
            Seguridad Social. Trabajamos para fortalecer la participación
            ciudadana, el control social y la rendición de cuentas en el
            sector salud.
          </p>

          {/* 🔥 CARDS */}
          <div className="ppss-hero__cards">

            {/* CARD 1 */}
            <div className="ppss-hero__card">

              <div className="ppss-hero__card-icon">
                <img src={controlIcon} alt="Control Social" />
              </div>

              <div className="ppss-hero__card-content">
                <h3>Control Social</h3>
                <p>Vigilancia ciudadana</p>
              </div>

            </div>

            {/* CARD 2 */}
            <div className="ppss-hero__card">

              <div className="ppss-hero__card-icon">
                <img
                  src={comunidadIcon}
                  alt="Participación Comunitaria"
                />
              </div>

              <div className="ppss-hero__card-content">
                <h3>Participación Comunitaria</h3>
                <p>Espacios de diálogo</p>
              </div>

            </div>

            {/* CARD 3 */}
            <div className="ppss-hero__card">

              <div className="ppss-hero__card-icon">
                <img
                  src={capacitacionIcon}
                  alt="Capacitación"
                />
              </div>

              <div className="ppss-hero__card-content">
                <h3>Capacitación</h3>
                <p>Formación continua</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default PpssHero;