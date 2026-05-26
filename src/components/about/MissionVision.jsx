import misionIcon from "../../assets/Iconos/email.png";
import visionIcon from "../../assets/Iconos/email.png";

function MissionVision() {
  return (
    <section className="mission-vision">

      <div className="mission-vision__container">

        {/* Título */}
        <h2 className="mission-vision__title">
          Misión y <span className="text-gradient-blue">Visión</span>
        </h2>

        {/* Cards */}
        <div className="mission-vision__grid">

          {/* MISIÓN */}
          <div className="mission-card mission-card--blue">

            <div className="mission-card__header">
              <div className="mission-card__icon">
                <img src={misionIcon} alt="Misión" />
              </div>

              <h3>Misión</h3>
            </div>

            <p>
              Prestamos servicios de salud enfocados en el diagnóstico y la consulta médica especializada, 
              orientados a la democratización del acceso a los servicios y  a la creación de relaciones 
              de confianza con nuestros clientes y nuestros pacientes.
            </p>

            <p>
              Trabajamos continuamente en el beneficio de nuestras partes interesadas, buscando el desarrollo 
              excepcional de nuestros empleados, el respeto hacia el medio ambiente, la innovación de nuestros 
              procesos y la implementación continua de nuevas tecnología.
            </p>

          </div>

          {/* VISIÓN */}
          <div className="mission-card mission-card--soft">

            <div className="mission-card__header">
              <div className="mission-card__icon">
                <img src={visionIcon} alt="Visión" />
              </div>

              <h3>Visión</h3>
            </div>

            <p>
              Ser referentes a nivel nacional para el año 2027, por nuestro modelo de gestión como una IPS innovadora 
              y  eficiente, soportada por los principios de responsabilidad, confiabilidad y servicio al paciente. 
            </p>

            <p>
              Contando con el mejor personal médico de la región y contribuyendo continuamente con el desarrollo 
              de la academia y la formación de excelentes profesionales de la salud.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MissionVision;