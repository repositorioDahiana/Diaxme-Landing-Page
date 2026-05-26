import securityMainIcon from "../../assets/Iconos/email.png";
import usuarioIcon from "../../assets/Iconos/email.png";
import qualityIcon from "../../assets/Iconos/email.png";
import cultureIcon from "../../assets/Iconos/email.png";
import reportIcon from "../../assets/Iconos/email.png";
import analysisIcon from "../../assets/Iconos/email.png";
import familyIcon from "../../assets/Iconos/email.png";

function PatientPolicy() {
  return (
    <section className="patient-policy">

      <div className="patient-policy__container">

        {/* HEADER */}
        <div className="patient-policy__header">
          <h2 className="patient-policy__title">
            Política de Seguridad del{" "}
            <span className="text-gradient-blue">
              Paciente
            </span>
          </h2>

          <p className="patient-policy__description">
            La organización se compromete con la Seguridad del Paciente como
            estrategia fundamental para un entorno seguro.
          </p>

        </div>

        {/* MAIN CARD */}
        <div className="patient-policy__main-card">

          <div className="patient-policy__main-top">

            <div className="patient-policy__icon">
              <img
                src={securityMainIcon}
                alt="Compromiso Institucional"
              />
            </div>

            <div>
              <h3>Compromiso Institucional</h3>
            </div>

          </div>

          <div className="patient-policy__main-content">

            <p>
                La organización, se compromete con la Seguridad del Paciente como estrategia fundamental para
                un entorno seguro, trabajando por un enfoque de atención centralizado en el usuario, mediante la
                integración con el Sistema Obligatorio de Garantía de la Calidad en Salud; brindando una cultura de
                seguridad justa, educada y no punitiva, y enfatizada en la atención humanizada. Sin tolerar el no
                reporte de los eventos adversos y/o al incumplimiento de la normatividad que regula el sector.

                Conforme a ello, se ejecutará el Programa de Seguridad del Paciente, mediante la promoción a la
                cultura del reporte, análisis, seguimiento y prevención de eventos adversos, construyendo la
                interrelación entre los profesionales de la salud, los pacientes y su familia; la cual permita la
                participación activa en las acciones de mejora.

                La Seguridad del Paciente es un ambiente sistémico y multicausal, por lo cual, se involucran los
                diferentes procesos de la organización para su cumplimiento; por lo que la empresa, consciente de
                la importancia de la presente política, se direcciona hacia la promoción de la atención segura y
                mejoramiento continuo, al capacitar a su personal e incentivando la humanización en la atención de
                servicios de salud, implementando las recomendaciones que para tal fin dicte la alta dirección,
                aplicando metodologías soportadas en la evidencia científica, en aras de prestar un servicio confiable
                de alta calidad.
            </p>

          </div>

        </div>

        {/* GRID */}
        <div className="patient-policy__grid">

          {/* CARD 1 */}
          <article className="patient-policy__card">

            <div className="patient-policy__card-top">

              <div className="patient-policy__card-icon">
                <img
                  src={usuarioIcon}
                  alt="Atención centralizada en el usuario"
                />
              </div>

              <h3>
                Atención centralizada en el usuario
              </h3>

            </div>

            <p>
              Trabajamos por un enfoque de atención centralizado en el usuario,
              poniendo al paciente en el centro de todas nuestras decisiones y
              procesos de atención.
            </p>

          </article>

          {/* CARD 2 */}
          <article className="patient-policy__card">

            <div className="patient-policy__card-top">

              <div className="patient-policy__card-icon">
                <img
                  src={qualityIcon}
                  alt="Sistema Obligatorio de Garantía de Calidad"
                />
              </div>

              <h3>
                Sistema Obligatorio de Garantía de Calidad
              </h3>

            </div>

            <p>
              Integración con el Sistema Obligatorio de Garantía de la Calidad
              en Salud (SOGCS), asegurando que todos nuestros procesos cumplen
              con los estándares nacionales.
            </p>

          </article>

          {/* CARD 3 */}
          <article className="patient-policy__card">

            <div className="patient-policy__card-top">

              <div className="patient-policy__card-icon">
                <img
                  src={cultureIcon}
                  alt="Cultura de seguridad justa"
                />
              </div>

              <h3>
                Cultura de seguridad justa
              </h3>

            </div>

            <p>
              Brindamos una cultura de seguridad justa, educada y no
              punitiva, y enfatizada en la atención humanizada.
            </p>

          </article>

          {/* CARD 4 */}
          <article className="patient-policy__card">

            <div className="patient-policy__card-top">

              <div className="patient-policy__card-icon">
                <img
                  src={reportIcon}
                  alt="Reporte de eventos adversos"
                />
              </div>

              <h3>
                Reporte de eventos adversos
              </h3>

            </div>

            <p>
              Sin tolerar el no reporte de los eventos adversos y/o al
              incumplimiento de la normatividad que regula el sector.
            </p>

          </article>

          {/* CARD 5 */}
          <article className="patient-policy__card">

            <div className="patient-policy__card-top">

              <div className="patient-policy__card-icon">
                <img
                  src={analysisIcon}
                  alt="Análisis y prevención"
                />
              </div>

              <h3>
                Análisis y prevención
              </h3>

            </div>

            <p>
              Mediante la promoción a la cultura del reporte, análisis,
              seguimiento y prevención de eventos adversos.
            </p>

          </article>

          {/* CARD 6 */}
          <article className="patient-policy__card">

            <div className="patient-policy__card-top">

              <div className="patient-policy__card-icon">
                <img
                  src={familyIcon}
                  alt="Interrelación con pacientes y familia"
                />
              </div>

              <h3>
                Interrelación con pacientes y familia
              </h3>

            </div>

            <p>
              Construyendo la interrelación entre los profesionales de la
              salud, los pacientes y su familia para permitir la participación
              activa en las acciones de mejora.
            </p>

          </article>

        </div>

      </div>

    </section>
  );
}

export default PatientPolicy;