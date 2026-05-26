import pqrsBg from "../../assets/images/Fondo.jpg";

function PQRSContact() {

  return (
    <section
      className="pqrs-contact"
      style={{
        backgroundImage: `url(${pqrsBg})`,
      }}
    >

      {/* OVERLAY */}
      <div className="pqrs-contact__overlay"></div>

      {/* CONTAINER */}
      <div className="pqrs-contact__container">

        {/* CONTENT */}
        <div className="pqrs-contact__content">

          <span className="pqrs-contact__badge">
            Atención al usuario
          </span>

          <h2 className="pqrs-contact__title">
            Tu voz es importante
            <span className="text-gradient-blue">
              {" "}para nosotros
            </span>
          </h2>

          <p className="pqrs-contact__description">
            Cada PQRS nos ayuda a mejorar nuestros procesos y brindarte
            una mejor experiencia. No dudes en contactarnos.
          </p>

          {/* ACTIONS */}
          <div className="pqrs-contact__actions">

            <a
              href="tel:+576063000000"
              className="btn-base btn-primary-blue"
            >
              Llamar ahora
            </a>

            <a
              href="/agendamiento"
              className="btn-base btn-secondary-outline"
            >
              Agendar cita
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PQRSContact;