import techImg from "../../assets/images/Fondo.jpg";

import equipoIcon from "../../assets/Iconos/email.png";
import certificacionIcon from "../../assets/Iconos/email.png";
import especialistasIcon from "../../assets/Iconos/email.png";
import resultadosIcon from "../../assets/Iconos/email.png";

function TechnologySection() {
  return (
    <section className="technology">

      <div className="technology__container">

        {/* HEADER */}
        <div className="technology__header">
          <h2 className="technology__title">
            Tecnología de <span className="text-gradient-blue">Punta</span>
          </h2>

          <p className="technology__description">
            En Radiólogos Asociados contamos con la infraestructura tecnológica 
            más avanzada de la región, garantizando diagnósticos precisos y 
            confiables para nuestros pacientes.
          </p>
        </div>

        {/* CONTENT */}
        <div className="technology__content">

          {/* IZQUIERDA - CARDS */}
          <div className="technology__list">

            <div className="tech-card">
              <div className="tech-card__icon">
                <img src={equipoIcon} alt="Equipos" />
              </div>
              <div>
                <h3>Equipos de Última Generación</h3>
                <p>Tecnología médica de punta para diagnósticos precisos</p>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-card__icon">
                <img src={certificacionIcon} alt="Certificaciones" />
              </div>
              <div>
                <h3>Certificaciones Internacionales</h3>
                <p>Cumplimos con los más altos estándares de calidad</p>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-card__icon">
                <img src={especialistasIcon} alt="Especialistas" />
              </div>
              <div>
                <h3>Especialistas Certificados</h3>
                <p>Equipo médico altamente capacitado y experimentado</p>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-card__icon">
                <img src={resultadosIcon} alt="Resultados" />
              </div>
              <div>
                <h3>Resultados Rápidos</h3>
                <p>Entrega ágil de resultados a través de nuestro portal</p>
              </div>
            </div>

          </div>

          {/* DERECHA - IMAGEN */}
          <div className="technology__image">
            <img src={techImg} alt="Tecnología Médica" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default TechnologySection;