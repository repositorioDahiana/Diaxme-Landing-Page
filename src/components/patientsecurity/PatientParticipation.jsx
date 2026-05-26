import participationIcon from "../../assets/Iconos/email.png";
import contributivoIcon from "../../assets/Iconos/email.png";
import subsidiadoIcon from "../../assets/Iconos/email.png";
import especialIcon from "../../assets/Iconos/email.png";
import segurosIcon from "../../assets/Iconos/email.png";
import jovenesIcon from "../../assets/Iconos/email.png";

function PatientParticipation() {
  return (
    <section className="patient-participation">

      <div className="patient-participation__container">

        {/* HEADER */}
        <div className="patient-participation__header">
          <h2 className="patient-participation__title">
            Política de Participación{" "}
            <span className="text-gradient-blue">
              Social
            </span>
          </h2>

          <p className="patient-participation__description">
            RADIÓLOGOS ASOCIADOS ofrece sus servicios a usuarios afiliados
            al sistema General de Seguridad Social en Salud.
          </p>

        </div>

        {/* MAIN CARD */}
        <div className="patient-participation__main-card">

          <div className="patient-participation__main-top">

            <div className="patient-participation__icon">
              <img
                src={participationIcon}
                alt="Participación Social"
              />
            </div>

            <div>
              <h3>Participación Social e Inclusiva</h3>
            </div>

          </div>

          <div className="patient-participation__content">

            <p>
              RADIÓLOGOS ASOCIADOS ofrece sus servicios a usuarios afiliados
              al sistema General de Seguridad Social en Salud del régimen
              contributivo, subsidiado, especial y seguros privados, quienes
              tienen como derecho velar por la mejora continua de la calidad
              de vida, ejerciendo libremente sus funciones de participación
              colectiva y protagónica institucional con mecanismos claros de
              acceso a la información, para el cumplimiento de los derechos
              en defensa del usuario.
            </p>

            <p>
              Esta agrupación está segmentada para el servicio especializado
              en Imagenología diagnóstica en aquellos departamentos donde se
              prestan los mismos y se busca establecer interacción social
              enmarcada a la diversidad de participación para el
              fortalecimiento de capacidades y condiciones de igualdad con la
              intervención de adolescentes y jóvenes desde los 14 años de
              edad.
            </p>

          </div>

        </div>

        {/* CARDS */}
        <div className="patient-participation__grid">

          {/* CARD 1 */}
          <article className="patient-participation__card">

            <div className="patient-participation__card-icon">
              <img
                src={contributivoIcon}
                alt="Régimen contributivo"
              />
            </div>

            <h3>Régimen contributivo</h3>

            <p>
              Usuarios afiliados al sistema General de Seguridad Social en
              Salud bajo el régimen contributivo.
            </p>

          </article>

          {/* CARD 2 */}
          <article className="patient-participation__card">

            <div className="patient-participation__card-icon">
              <img
                src={subsidiadoIcon}
                alt="Régimen subsidiado"
              />
            </div>

            <h3>Régimen subsidiado</h3>

            <p>
              Afiliados al régimen subsidiado con acceso completo a nuestros
              servicios especializados.
            </p>

          </article>

          {/* CARD 3 */}
          <article className="patient-participation__card">

            <div className="patient-participation__card-icon">
              <img
                src={especialIcon}
                alt="Régimen especial"
              />
            </div>

            <h3>Régimen especial</h3>

            <p>
              Usuarios del régimen especial de la Seguridad Social en Salud.
            </p>

          </article>

          {/* CARD 4 */}
          <article className="patient-participation__card">

            <div className="patient-participation__card-icon">
              <img
                src={segurosIcon}
                alt="Seguros privados"
              />
            </div>

            <h3>Seguros privados</h3>

            <p>
              Pacientes con seguros privados que tienen acceso a nuestros
              servicios de imagenología diagnóstica.
            </p>

          </article>

        </div>

        {/* FINAL CARD */}
        <div className="patient-participation__highlight">

          <div className="patient-participation__highlight-icon">
            <img
              src={jovenesIcon}
              alt="Participación desde los 14 años"
            />
          </div>

          <div className="patient-participation__highlight-content">

            <h3>Participación desde los 14 años</h3>

            <p>
              Se busca establecer interacción social para el fortalecimiento
              de capacidades y condiciones de igualdad con la intervención
              de adolescentes y jóvenes desde los 14 años de edad.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PatientParticipation;