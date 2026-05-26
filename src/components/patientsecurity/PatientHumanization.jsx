import capIcon from "../../assets/Iconos/email.png";
import cultureIcon from "../../assets/Iconos/email.png";
import safeIcon from "../../assets/Iconos/email.png";

function PatientHumanization() {
  return (
    <section
      className="patient-humanization"
      id="humanizacion-servicio"
    >
      <div className="patient-humanization__container">

        {/* HEADER */}
        <div className="patient-humanization__header">

          <h2 className="patient-humanization__title">
            Política de Humanización {" "}
            <span className="text-gradient-blue">del Servicio</span>
          </h2>

          <p className="patient-humanization__description">
            La organización se compromete a brindar una atención íntegra,
            promoviendo la sensibilización del servicio, valores y principios
            éticos, con calidez y sentido humano, enfocado en la calidad,
            mediante el buen trato, cordialidad y la atención personalizada de
            fácil acceso para todos los pacientes.
          </p>

        </div>

        {/* CARDS */}
        <div className="patient-humanization__grid">

          {/* CARD 1 */}
          <article className="patient-humanization__card">

            <div className="patient-humanization__top">

              <div className="patient-humanization__icon">
                <img
                  src={capIcon}
                  alt="Capacitación permanente"
                />
              </div>

              <h3>Capacitación permanente</h3>

            </div>

            <p>
              Fortalecer a través de los procedimientos de inducción,
              reinducción y capacitación de las competencias de los
              colaboradores orientadas a maximizar la atención basada en los
              derechos y deberes de los usuarios y humanizando todos los
              servicios prestados en la institución.
            </p>

          </article>

          {/* CARD 2 */}
          <article className="patient-humanization__card">

            <div className="patient-humanization__top">

              <div className="patient-humanization__icon">
                <img
                  src={cultureIcon}
                  alt="Cultura de humanización"
                />
              </div>

              <h3>Cultura de humanización</h3>

            </div>

            <p>
              Promover la cultura de humanización en los servicios, la práctica
                de valores y principios humanísticos comprometiendo toda la
                organización; colaboradores que interactúen de manera directa o
                indirecta con el paciente.
            </p>

          </article>

          {/* CARD 3 */}
          <article className="patient-humanization__card">

            <div className="patient-humanization__top">

              <div className="patient-humanization__icon">
                <img
                  src={safeIcon}
                  alt="Ambiente confortable y seguro"
                />
              </div>

              <h3>Ambiente confortable y seguro</h3>

            </div>

            <p>
              Fomentar un ambiente físico confortable y seguro que garantice
                la calidad del servicio y la satisfacción del usuario,
                asegurando espacios limpios, modernos y adaptados a las
                necesidades de cada paciente.
            </p>

          </article>
        </div>

        {/* COMMITMENT */}
        <div className="patient-humanization__commitment">

          <h3>Nuestro Compromiso</h3>

          <p>
            Conforme a ello, implementamos las estrategias anteriores para
            garantizar que cada paciente reciba una atención centrada en sus
            necesidades, respetando su dignidad, valores y preferencias en todo
            momento.
          </p>

        </div>

      </div>
    </section>
  );
}

export default PatientHumanization;